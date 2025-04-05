// src/components/features/hero/HeroContent.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui';
import { useTheme } from '../../hooks';
import { Link } from 'react-router-dom';
import { BOT_INVITE_LINK } from '../../constants';
import { HiArrowRight } from 'react-icons/hi2';
import { DiscordIcon } from '../ui/icons';

export const HeroContent: React.FC = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  const containerVariants = { /* ... */ };
  const itemVariants = { /* ... */ };

  return (
    <motion.div
      className="flex flex-col items-start max-w-xl lg:max-w-2xl"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        variants={itemVariants}
        className={`text-left text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}
      >
        Send{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 dark:from-cyan-300 dark:to-blue-500">
          RLUSD
        </span>{' '}
        Instantly on Discord
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className={`text-left text-lg md:text-xl lg:text-2xl mb-8 ${
          isDarkMode ? 'text-gray-300' : 'text-gray-600'
        }`}
      >
        The easiest, gas-fee free and most secure way to send Ripple's stablecoin directly within your Discord servers.
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-start"
      >
        <Button
          as="a"
          href={BOT_INVITE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          variant="discord"
          size="lg"
          className="w-full sm:w-auto"
          iconLeft={<DiscordIcon className="w-5 h-5" />}
          iconRight={<HiArrowRight className="w-4 h-4" />}
        >
          Add to Discord
        </Button>

        <Button
          as={Link}
          to="/commands"
          variant="outline"
          size="lg"
          className="w-full sm:w-auto"
        >
          Explore Commands
        </Button>
      </motion.div>
    </motion.div>
  );
};