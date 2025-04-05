import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from 'framer-motion';
import type { FeatureInfo } from '../../constants';
import { useTheme } from '../../hooks';

interface FeatureItemProps {
  feature: FeatureInfo;
  index?: number;
}

// Fonction de gestion du mouvement de la souris avec des types stricts
const handleMouseMove = (
  event: React.MouseEvent<HTMLDivElement>,
  ref: React.RefObject<HTMLDivElement | null>, // Adjusted to allow null
  mouseX: MotionValue<number>,
  mouseY: MotionValue<number>,
  glowX: MotionValue<number>,
  glowY: MotionValue<number>,
  setIsHovering: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (!ref.current) return;
  const rect = ref.current.getBoundingClientRect();
  
  // Calcul des positions relatives et absolues
  const relativeX = (event.clientX - rect.left) / rect.width;
  const relativeY = (event.clientY - rect.top) / rect.height;
  
  mouseX.set(relativeX);
  mouseY.set(relativeY);
  glowX.set(event.clientX - rect.left);
  glowY.set(event.clientY - rect.top);
  setIsHovering(true);
};

const handleMouseLeave = (
  mouseX: MotionValue<number>,
  mouseY: MotionValue<number>,
  setIsHovering: React.Dispatch<React.SetStateAction<boolean>>
) => {
  mouseX.set(0.5);
  mouseY.set(0.5);
  setIsHovering(false);
};

export const FeatureItem: React.FC<FeatureItemProps> = ({ feature, index = 0 }) => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  const IconComponent = feature.icon;

  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  // --- Effet 3D Tilt ---
  const mouseX = useMotionValue<number>(0.5);
  const mouseY = useMotionValue<number>(0.5);

  // Rotation avec Spring pour la carte - valeurs réduites pour un effet plus subtil
  const cardRotateY = useSpring(
    useTransform<number, number>(mouseX, [0, 1], [-8, 8]),
    { stiffness: 300, damping: 30 }
  );
  const cardRotateX = useSpring(
    useTransform<number, number>(mouseY, [0, 1], [6, -6]),
    { stiffness: 300, damping: 30 }
  );

  // Contre-rotation pour l'icône, légèrement moins prononcée
  const iconRotateY = useTransform<number, number>(mouseX, [0, 1], [8, -8]);
  const iconRotateX = useTransform<number, number>(mouseY, [0, 1], [-6, 6]);

  // Effet de Lueur (Spotlight)
  const glowX = useMotionValue<number>(0);
  const glowY = useMotionValue<number>(0);

  // Variante pour l'animation d'entrée
  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: index * 0.1
      },
    },
  };

  // Styles pour la lueur
  const glowStyle = {
    '--glow-x': `${glowX.get()}px`,
    '--glow-y': `${glowY.get()}px`,
  } as React.CSSProperties;

  return (
    <motion.div
      ref={cardRef}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={itemVariants}
      className={`feature-card relative p-6 rounded-xl overflow-hidden transition-all duration-300 ${
        isDarkMode
          ? 'bg-gray-800/60 border border-gray-700/50'
          : 'bg-white/80 border border-gray-200/70'
      } backdrop-blur-sm ${
        isHovering
          ? isDarkMode
            ? 'shadow-lg shadow-indigo-500/10'
            : 'shadow-lg shadow-gray-200/70'
          : ''
      }`}
      style={{
        transformStyle: 'preserve-3d',
        rotateX: cardRotateX,
        rotateY: cardRotateY,
      }}
      onMouseMove={(e) => handleMouseMove(e, cardRef, mouseX, mouseY, glowX, glowY, setIsHovering)}
      onMouseLeave={() => handleMouseLeave(mouseX, mouseY, setIsHovering)}
    >
      {/* Effet de Lueur utilisant la classe CSS existante */}
      <motion.div
        className="feature-card-glow absolute inset-0 pointer-events-none z-0"
        style={glowStyle}
        animate={{ opacity: isHovering ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Contenu de la carte */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {IconComponent && (
          <div
            className={`mb-5 inline-flex items-center justify-center h-14 w-14 rounded-xl transition-all duration-300 ${
              isDarkMode
                ? 'bg-gradient-to-br from-gray-700 to-gray-800 text-indigo-400 shadow-sm'
                : 'bg-gradient-to-br from-gray-50 to-gray-100 text-indigo-600 shadow-sm'
            } ${isHovering ? 'scale-105' : ''}`}
          >
            <motion.div
              style={{
                transformStyle: 'preserve-3d',
                rotateX: iconRotateX,
                rotateY: iconRotateY,
              }}
            >
              <IconComponent className="h-7 w-7" />
            </motion.div>
          </div>
        )}

        {/* Titre */}
        <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
          {feature.title}
        </h3>

        {/* Description */}
        <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
};