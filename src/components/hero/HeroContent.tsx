// src/components/features/hero/HeroContent.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui';
import { useTheme } from '../../hooks';
import { Link } from 'react-router-dom';
import { BOT_INVITE_LINK } from '../../constants';

export const HeroContent: React.FC = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.div
      className="flex flex-col items-start max-w-xl lg:max-w-2xl px-4 sm:px-6" // Alignement à gauche avec padding
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Titre : Plus gros sur mobile */}
      <motion.h1
        variants={itemVariants}
        className={`text-left text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 sm:mb-6 tracking-tight ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}
      >
        Send{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 dark:from-cyan-300 dark:to-blue-500">
          RLUSD
        </span>{' '}
        Instantly on Discord
      </motion.h1>

      {/* Description : Plus gros sur mobile */}
      <motion.p
        variants={itemVariants}
        className={`text-left text-xl sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 ${
          isDarkMode ? 'text-gray-300' : 'text-gray-600'
        }`}
      >
        The easiest and most secure way to send Ripple's stablecoin directly within your Discord servers.
      </motion.p>

      {/* Boutons : Ajustement pour correspondre au texte plus gros */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-start"
      >
        <Button
          as="a"
          href={BOT_INVITE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          size="lg"
          className="w-full sm:w-auto group flex items-center justify-center sm:justify-start gap-2 transform hover:-translate-y-0.5 transition-transform duration-200 text-lg sm:text-base" // Bouton plus gros sur mobile
        >
          <span>Add to Discord</span>
          <motion.span className="transition-transform duration-200 ease-out group-hover:translate-x-1">
            →
          </motion.span>
        </Button>

        <Button
          as={Link}
          to="/commands"
          variant="secondary"
          size="lg"
          className="w-full sm:w-auto transform hover:-translate-y-0.5 transition-transform duration-200 text-center sm:text-left text-lg sm:text-base" // Bouton plus gros sur mobile
        >
          Explore Commands
        </Button>
      </motion.div>
    </motion.div>
  );
};