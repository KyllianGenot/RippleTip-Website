import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useAnimation } from 'framer-motion';
import type { FeatureInfo } from '../../constants';
import { useTheme } from '../../hooks';

interface FeatureItemProps {
  feature: FeatureInfo;
  index?: number;
}

export const FeatureItem: React.FC<FeatureItemProps> = ({ 
  feature, 
  index = 0
}) => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  const IconComponent = feature.icon;
  const controls = useAnimation();
  
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const glowX = useMotionValue<number>(0);
  const glowY = useMotionValue<number>(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      controls.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { 
          type: "spring",
          stiffness: 100,
          damping: 20,
          delay: index * 0.1
        }
      });
      setHasAnimated(true);
    }, 500);
    
    return () => clearTimeout(timeout);
  }, [controls, index]);

  const glowStyle = {
    '--glow-x': `${glowX.get()}px`,
    '--glow-y': `${glowY.get()}px`,
  } as React.CSSProperties;

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    glowX.set(event.clientX - rect.left);
    glowY.set(event.clientY - rect.top);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      animate={controls}
      className={`feature-card relative p-6 rounded-xl overflow-hidden transition-all duration-300 ${
        isDarkMode
          ? 'bg-gray-800/60 border border-gray-700/50'
          : 'bg-white/80 border border-gray-200/70'
      } backdrop-blur-sm ${
        isHovering
          ? isDarkMode
            ? 'shadow-lg shadow-blue-500/10'
            : 'shadow-lg shadow-gray-200/70'
          : ''
      }`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        opacity: hasAnimated ? 1 : undefined 
      }}
    >
      <motion.div
        className="feature-card-glow absolute inset-0 pointer-events-none z-0"
        style={glowStyle}
        animate={{ opacity: isHovering ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <div className="relative z-10 flex flex-col items-center text-center">
        {IconComponent && (
          <div
            className={`mb-5 inline-flex items-center justify-center h-14 w-14 rounded-xl transition-all duration-300 ${
              isDarkMode
                ? 'bg-gradient-to-br from-gray-700 to-gray-800'
                : 'bg-gradient-to-br from-gray-50 to-gray-100'
            } shadow-sm`}
          >
            <IconComponent
              className={`h-7 w-7 ${
                isDarkMode ? 'text-blue-500' : 'text-blue-400'
              }`}
            />
          </div>
        )}

        <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
          {feature.title}
        </h3>

        <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
};