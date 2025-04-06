// src/components/CallToAction.tsx
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import AddBotButton from '../ui/AddBotButton';
import { useTheme } from '../../hooks';
import { FEATURES_LIST, FeatureInfo } from '../../constants/features';

const CallToActionSection: React.FC = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  
  const controls = useAnimation();
  const titleControls = useAnimation();
  const textControls = useAnimation();
  const buttonControls = useAnimation();

  useEffect(() => {
    // Déclencher l'animation après un court délai pour éviter le clignotement
    const timeout = setTimeout(() => {
      controls.start({ opacity: 1 });
      
      titleControls.start({ 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.6, ease: 'easeOut' } 
      });
      
      textControls.start({ 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.6, delay: 0.1, ease: 'easeOut' } 
      });
      
      buttonControls.start({ 
        opacity: 1, 
        scale: 1, 
        transition: { duration: 0.5, delay: 0.3, ease: 'easeOut' } 
      });
      
      setHasAnimated(true);
    }, 500);
    
    return () => clearTimeout(timeout);
  }, [controls, titleControls, textControls, buttonControls]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = ((clientX - left) / width) * 100;
    const y = ((clientY - top) / height) * 100;
    setMousePosition({ x, y });
  };

  const buttonVariants = {
    hover: {
      scale: 1.03,
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.98 },
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden" onMouseMove={handleMouseMove}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

      <motion.div
        className="container mx-auto px-4 md:px-8 relative z-10"
        initial={{ opacity: 0 }}
        animate={controls}
        style={
          {
            '--glow-x': `${mousePosition.x}%`,
            '--glow-y': `${mousePosition.y}%`,
            // Force l'opacité à 1 une fois animé
            opacity: hasAnimated ? 1 : undefined
          } as React.CSSProperties
        }
      >
        <div
          className={`relative max-w-4xl mx-auto rounded-2xl p-8 md:p-12 text-center feature-card-glow ${
            isDarkMode ? 'bg-gray-800/40 backdrop-blur-md border border-gray-700/50' : 'bg-white/60 backdrop-blur-md border border-gray-200/50'
          } shadow-xl`}
        >
          <motion.h2
            className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
            initial={{ opacity: 0, y: -20 }}
            animate={titleControls}
          >
            Ready to Simplify <span className={isDarkMode ? 'text-blue-300' : 'text-blue-600'}>Discord Tipping</span>?
          </motion.h2>

          <motion.p
            className={`text-lg md:text-xl max-w-2xl mx-auto mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={textControls}
          >
            RippleTip makes cryptocurrency tipping seamless on Discord. Connect your server today and enhance member engagement with effortless tipping.
          </motion.p>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto" 
            initial={{ opacity: 0, y: 20 }}
            animate={textControls}
          >
            {FEATURES_LIST.map((feature: FeatureInfo, i: number) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={i}
                  className={`flex flex-col items-center p-5 rounded-xl transition-all ${
                    isDarkMode
                      ? 'bg-gray-700/40 border border-gray-600/30 hover:bg-gray-700/60'
                      : 'bg-white/80 border border-gray-200/50 hover:bg-white/90'
                  } shadow-md`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ 
                    opacity: hasAnimated ? 1 : 0, 
                    y: hasAnimated ? 0 : 15,
                    transition: {
                      duration: 0.5,
                      delay: 0.2 + i * 0.1,
                      ease: 'easeOut',
                    }
                  }}
                  whileHover={{
                    boxShadow: isDarkMode
                      ? '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.1)'
                      : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                    transition: { duration: 0.2 },
                  }}
                  style={{ opacity: hasAnimated ? 1 : undefined }}
                >
                  {Icon && (
                    <div
                      className={`w-12 h-12 flex items-center justify-center rounded-full mb-3 bg-gradient-to-r ${
                        isDarkMode ? 'from-cyan-300 to-blue-500' : 'from-cyan-400 to-blue-600'
                      }`}
                    >
                      <Icon size={24} className="text-white" />
                    </div>
                  )}
                  <h3 className={`font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {feature.title}
                  </h3>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={buttonControls}
            whileHover="hover" 
            whileTap="tap" 
            variants={buttonVariants} 
            className="mb-6"
            style={{ opacity: hasAnimated ? 1 : undefined }}
          >
            <AddBotButton
              size="lg"
              className="inline-flex items-center px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all duration-300"
            />
          </motion.div>

          <motion.p
            className={`text-sm max-w-xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={textControls}
          >
            Free to add to your server.
          </motion.p>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
    </section>
  );
};

export default CallToActionSection;