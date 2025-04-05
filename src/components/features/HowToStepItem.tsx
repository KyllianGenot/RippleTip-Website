import React, { useRef, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import type { HowToStep } from '../../constants';
import { useTheme } from '../../hooks';

interface HowToStepItemProps {
  stepInfo: HowToStep;
  index?: number;
  isLast?: boolean;
}

export const HowToStepItem: React.FC<HowToStepItemProps> = ({ 
  stepInfo, 
  index = 0,
  isLast = false
}) => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isNumberHovering, setIsNumberHovering] = useState(false);

  // Glow Effect
  const glowX = useMotionValue<number>(0);
  const glowY = useMotionValue<number>(0);

  const isEven = index % 2 === 0;

  const itemVariants = {
    hidden: { opacity: 0, x: isEven ? -30 : 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: index * 0.1
      },
    },
  };

  const glowStyle = {
    '--glow-x': `${glowX.get()}px`,
    '--glow-y': `${glowY.get()}px`,
    opacity: isHovering ? 1 : 0,
    transition: 'opacity 0.3s ease-out',
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

  // Numéro style avec transition fluide
  const numberShadowStyle = {
    boxShadow: isNumberHovering
      ? isDarkMode 
        ? '0 0 25px 5px rgba(6, 182, 212, 0.35)' 
        : '0 0 25px 5px rgba(34, 211, 238, 0.30)'
      : isDarkMode
        ? '0 10px 15px -3px rgba(6, 182, 212, 0.2)' 
        : '0 10px 15px -3px rgba(34, 211, 238, 0.2)',
    transition: 'box-shadow 0.3s ease-out'
  } as React.CSSProperties;

  return (
    <motion.div
      variants={itemVariants}
      className={`relative flex flex-col-reverse lg:flex-row items-center mb-20 ${isLast ? 'mb-0' : ''} ${
        isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
      }`}
    >
      {/* Content Side */}
      <div className={`w-full lg:w-5/12 ${isEven ? 'lg:pr-16' : 'lg:pl-16'}`}>
        <motion.div
          ref={cardRef}
          className={`relative p-8 rounded-xl transition-all duration-300 ease-out ${
            isDarkMode
              ? 'bg-gray-800/80 border border-gray-700/70'
              : 'bg-white/90 border border-gray-200/90'
          } backdrop-blur-md ${
            isHovering
              ? isDarkMode
                ? 'hover:bg-gray-800 hover:border-gray-600/80 shadow-xl shadow-cyan-500/10'
                : 'hover:bg-white hover:border-gray-300 shadow-xl shadow-gray-200/70'
              : 'shadow-md'
          }`}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          whileHover={{ y: -5 }}
        >
          {/* Glow Effect - Now controlled by glowStyle */}
          <div
            className="feature-card-glow absolute inset-0 pointer-events-none z-0"
            style={glowStyle}
          />
          
          <div className="relative z-10">
            <h3 className={`text-2xl font-semibold mb-4 ${
              isEven ? 'text-left' : 'text-left'
            } ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {stepInfo.title}
            </h3>
            
            <p className={`text-base leading-relaxed ${
              isEven ? 'text-left' : 'text-left'
            } ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {stepInfo.description}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Center Number Badge - Now with smooth transition */}
      <div className="flex items-center justify-center w-full lg:w-2/12 my-6 lg:my-0">
        <div
          className={`relative flex items-center justify-center h-20 w-20 rounded-full z-10 ${
            isDarkMode 
              ? 'bg-gray-800 border-3 border-cyan-500/80' 
              : 'bg-white border-3 border-cyan-400/90'
          } transition-all duration-300 ease-out`}
          style={numberShadowStyle}
          onMouseEnter={() => setIsNumberHovering(true)}
          onMouseLeave={() => setIsNumberHovering(false)}
        >
          <span className={`text-3xl font-bold ${
            isDarkMode ? 'text-cyan-400' : 'text-cyan-500'
          }`}>
            {stepInfo.step}
          </span>
        </div>
      </div>

      {/* Empty Side (for balance) */}
      <div className="hidden lg:block lg:w-5/12"></div>
      
      {/* Mobile Timeline Connector - Repositioned here, after the content and badge */}
      {!isLast && (
        <div className={`absolute left-1/2 transform -translate-x-1/2 w-0.5 h-20 top-full mt-6 bg-gradient-to-b ${
          isDarkMode ? 'from-cyan-700 to-blue-600' : 'from-cyan-300 to-blue-400'
        } lg:hidden`} />
      )}
    </motion.div>
  );
};