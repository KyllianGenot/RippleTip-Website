import { useRef, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import type { BotCommand } from '../../types';
import { useTheme } from '../../hooks';

interface CommandCardProps {
  command: BotCommand;
  index?: number;
}

const CommandCard = ({ command, index = 0 }: CommandCardProps) => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  const cardRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        delay: index * 0.05,
      },
    },
  };

  const glowStyle = {
    '--glow-x': `${glowX.get()}px`,
    '--glow-y': `${glowY.get()}px`,
  } as React.CSSProperties;

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = (cardRef.current as HTMLElement).getBoundingClientRect();
    glowX.set(event.clientX - rect.left);
    glowY.set(event.clientY - rect.top);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const getCommandColor = () => {
    switch (command.category?.toLowerCase()) {
      case 'transactions':
        return isDarkMode ? 'text-blue-400 border-blue-500/30 bg-blue-500/10' : 'text-blue-500 border-blue-400/30 bg-blue-400/10';
      case 'balance':
        return isDarkMode ? 'text-green-400 border-green-500/30 bg-green-500/10' : 'text-green-500 border-green-400/30 bg-green-400/10';
      case 'account':
        return isDarkMode ? 'text-purple-400 border-purple-500/30 bg-purple-500/10' : 'text-purple-500 border-purple-400/30 bg-purple-400/10';
      case 'help':
        return isDarkMode ? 'text-amber-400 border-amber-500/30 bg-amber-500/10' : 'text-amber-500 border-amber-400/30 bg-amber-400/10';
      default:
        return isDarkMode ? 'text-gray-400 border-gray-500/30 bg-gray-500/10' : 'text-gray-500 border-gray-400/30 bg-gray-400/10';
    }
  };

  const getCategoryIcon = () => {
    const iconClass = `w-4 h-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`;
    switch (command.category?.toLowerCase()) {
      case 'transactions':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        );
      case 'balance':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>
        );
      case 'account':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        );
      case 'help':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      default:
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
          </svg>
        );
    }
  };

  return (
    <motion.div
      ref={cardRef}
      variants={itemVariants}
      className={`relative overflow-hidden rounded-xl border transition-all duration-300 ${
        isDarkMode
          ? 'bg-gray-800/40 border-gray-700/50 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10'
          : 'bg-gray-50 border-gray-200/50 hover:border-blue-400/30 hover:shadow-lg hover:shadow-gray-200/70'
      } p-6`}
      style={glowStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`absolute pointer-events-none inset-0 opacity-0 transition-opacity duration-300 mix-blend-soft-light ${
          isHovering ? 'opacity-100' : ''
        }`}
        style={{
          background: `radial-gradient(circle at var(--glow-x) var(--glow-y), ${
            isDarkMode ? 'rgba(59, 130, 246, 0.5)' : 'rgba(59, 130, 246, 0.3)'
          }, transparent 80%)`,
        }}
      />

      <div className="relative z-10 flex flex-col h-full">
        <div
          className={`text-xs font-medium inline-flex items-center px-2 py-0.5 rounded-md border ${getCommandColor()} mb-4 self-start`}
        >
          {getCategoryIcon()}
          <span className="ml-1.5">{command.category}</span>
        </div>

        <h3
          className={`text-xl font-bold mb-2 transition-colors ${
            isDarkMode ? 'text-white group-hover:text-blue-400' : 'text-gray-900 group-hover:text-blue-500'
          }`}
        >
          <span className={`${isDarkMode ? 'text-blue-400' : 'text-blue-500'} font-mono`}>/</span>
          {command.name}
        </h3>

        <p className={`text-base mb-3 flex-grow ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {command.description}
        </p>

        {command.usage && (
          <div
            className={`mt-3 px-4 py-3 rounded-lg border ${
              isDarkMode ? 'bg-gray-900/50 border-gray-700/30' : 'bg-gray-50 border-gray-200/50'
            }`}
          >
            <p className={`text-sm font-mono ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              <span className={`${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>Usage:</span> {command.usage}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CommandCard;