import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HOW_IT_WORKS_STEPS } from '../../constants';
import { HowToStepItem } from './HowToStepItem';
import { useTheme } from '../../hooks';

export const HowItWorksSection: React.FC = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

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

  return (
    <section ref={ref} className="relative py-20 md:py-28 overflow-hidden">
      {/* Séparateur Dégradé */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

      {/* Timeline Connector - Débute après le premier élément */}
      <div className={`absolute left-1/2 transform -translate-x-1/2 top-60 bottom-40 w-0.5 ${
        isDarkMode ? 'bg-gradient-to-b from-cyan-700 via-blue-600 to-cyan-700' : 'bg-gradient-to-b from-cyan-300 via-blue-400 to-cyan-300'
      } hidden lg:block`} />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 md:mb-20 text-gray-900 dark:text-white"
          variants={titleVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          Get Started in Minutes
        </motion.h2>

        <motion.div
          className="relative mt-24 lg:mt-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <HowToStepItem 
              key={step.step} 
              stepInfo={step} 
              index={index} 
              isLast={index === HOW_IT_WORKS_STEPS.length - 1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};