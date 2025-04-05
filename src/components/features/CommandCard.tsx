import React, { useRef, useState } from 'react';
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
  
  // Glow Effect - matching your FeatureItem implementation
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 100, 
        damping: 20,
        delay: index * 0.05
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

  // Get command type color
  const getCommandColor = () => {
    switch(command.category?.toLowerCase()) {
      case 'transactions':
        return 'from-blue-400 to-cyan-300';
      case 'balance':
        return 'from-green-400 to-emerald-300';
      case 'account':
        return 'from-purple-400 to-violet-300';
      case 'help':
        return 'from-amber-400 to-yellow-300';
      default:
        return 'from-gray-300 to-gray-400';
    }
  };

  // Get command category icon
  const getCategoryIcon = () => {
    switch(command.category?.toLowerCase()) {
      case 'transactions':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        );
      case 'balance':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>
        );
      case 'account':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        );
      case 'help':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
          </svg>
        );
    }
  };

  return (
    <motion.div
      ref={cardRef}
      variants={itemVariants}
      className={`relative overflow-hidden rounded-xl border border-gray-700/50 ${
        isDarkMode ? 'bg-gray-800/40' : 'bg-gray-100'
      } p-6 transition-all duration-300 ${
        isHovering ? 'shadow-lg shadow-blue-500/10 border-blue-500/30' : ''
      }`}
      style={glowStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glow Effect */}
      <div 
        className={`absolute pointer-events-none inset-0 opacity-0 transition-opacity duration-300 mix-blend-soft-light ${
          isHovering ? 'opacity-100' : ''
        }`}
        style={{
          background: `radial-gradient(circle at var(--glow-x) var(--glow-y), ${
            isDarkMode ? 'rgba(59, 130, 246, 0.5)' : 'rgba(59, 130, 246, 0.3)'
          }, transparent 80%)`
        }}
      />

      {/* Command Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Category Tag + Icon */}
        <div className={`text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-full bg-${getCommandColor()}/10 text-${getCommandColor()}-bg-clip-text mb-4 self-start`}>
          <div className={`mr-1.5 bg-gradient-to-r ${getCommandColor()} bg-clip-text text-transparent`}>
            {getCategoryIcon()}
          </div>
          <span className={`bg-gradient-to-r ${getCommandColor()} bg-clip-text text-transparent`}>
            {command.category}
          </span>
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          <span className="text-blue-400 font-mono">/</span>{command.name}
        </h3>

        <p className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-3 flex-grow`}>
          {command.description}
        </p>

        {command.usage && (
          <div className="mt-3 px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700/30">
            <p className="text-sm text-gray-400 font-mono">
              <span className="text-gray-500">Usage:</span> {command.usage}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CommandCard;