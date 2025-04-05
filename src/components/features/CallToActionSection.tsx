import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AddBotButton from '../ui/AddBotButton';
import { useTheme } from '../../hooks';

const CallToActionSection: React.FC = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [, setIsHovered] = useState(false);

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  // Mouse tracking for glow effects
  const handleMouseMove = (e: React.MouseEvent) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = ((clientX - left) / width) * 100;
    const y = ((clientY - top) / height) * 100;
    setMousePosition({ x, y });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.15 },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1, ease: 'easeOut' } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.3, ease: 'easeOut' } },
    hover: { 
      scale: 1.03,
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.98 }
  };

  return (
    <section 
      ref={ref} 
      className="relative py-20 md:py-32 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Gradient separator at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

      {/* Main container with interactive glow effect */}
      <motion.div
        className="container mx-auto px-4 md:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        style={{
          '--glow-x': `${mousePosition.x}%`,
          '--glow-y': `${mousePosition.y}%`,
        } as React.CSSProperties}
      >
        {/* Central card with glass effect */}
        <div 
          className={`relative max-w-4xl mx-auto rounded-2xl p-8 md:p-12 text-center feature-card-glow 
            ${isDarkMode 
              ? 'bg-gray-800/40 backdrop-blur-md border border-gray-700/50' 
              : 'bg-white/60 backdrop-blur-md border border-gray-200/50'
            } shadow-xl`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Badge */}
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <div className={`rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider 
              ${isDarkMode 
                ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white' 
                : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'}`}
            >
              Tipping Made Simple
            </div>
          </div>

          <motion.h2
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}
            variants={titleVariants}
          >
            Ready to Simplify <span className={isDarkMode ? 'text-indigo-300' : 'text-indigo-600'}>Discord Tipping</span>?
          </motion.h2>

          <motion.p
            className={`text-lg md:text-xl max-w-2xl mx-auto mb-8 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
            variants={textVariants}
          >
            RippleTip makes cryptocurrency tipping seamless on Discord. Connect your server today and enhance member engagement with effortless tipping.
          </motion.p>

          {/* Feature list with icons */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto"
            variants={textVariants}
          >
            {[
              { icon: "✨", text: "Quick Setup Process" },
              { icon: "🔒", text: "Secure Transactions" },
              { icon: "🚀", text: "Responsive Support" }
            ].map((item, i) => (
              <div key={i} className={`flex items-center space-x-2 justify-center py-2 px-3 rounded-lg
                ${isDarkMode ? 'bg-gray-700/30' : 'bg-gray-100/70'}`}>
                <span className="text-xl">{item.icon}</span>
                <span className={isDarkMode ? 'text-gray-200' : 'text-gray-700'}>{item.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Main action button */}
          <motion.div 
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="mb-6"
          >
            <AddBotButton 
              size="lg" 
              className="inline-flex items-center px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all duration-300"
            />
          </motion.div>

          {/* Free tier note */}
          <motion.p
            className={`text-sm max-w-xl mx-auto ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`}
            variants={textVariants}
          >
            Free to add to your server. Premium features available with subscription.
          </motion.p>

        </div>
      </motion.div>

      {/* Gradient separator at bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
    </section>
  );
};

export default CallToActionSection;