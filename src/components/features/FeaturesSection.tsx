// src/components/features/FeaturesSection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FEATURES_LIST } from '../../constants'; // Adjust path
import { FeatureItem } from './FeatureItem'; // Import updated item
import { useTheme } from '../../hooks'; // Adjust path

export const FeaturesSection: React.FC = () => { // Named export
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Variantes pour stagger
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.15 },
    },
  };

  // Variante pour le titre
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    // Section : Fond plus simple, se fie au body + overlay léger. Padding ajusté.
    <section
      ref={ref}
      className={`relative py-20 md:py-28 overflow-visible border-t ${ // overflow-visible important pour les ombres
        isDarkMode ? 'border-gray-700/30' : 'border-gray-200/50'
      }`}
    >
       {/* Overlay subtil sur le fond du body */}
       <div className={`absolute inset-0 -z-10 ${isDarkMode ? 'bg-gray-900/30' : 'bg-white/30'}`} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Titre animé */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 md:mb-20 text-gray-900 dark:text-white" // Marge inférieure augmentée
          variants={titleVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          Why Choose RippleTip?
        </motion.h2>

        {/* Grille animée avec stagger */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {FEATURES_LIST.map((feature) => (
            <FeatureItem key={feature.title} feature={feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};