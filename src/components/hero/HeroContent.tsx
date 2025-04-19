import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui';
import { useTheme } from '../../hooks';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import { BOT_INVITE_LINK } from '../../constants';
import { HiArrowRight, HiOutlinePlus } from 'react-icons/hi2';
import { DiscordIcon } from '../ui/icons';

// Get Discord auth variables from environment
const clientId = import.meta.env.VITE_DISCORD_CLIENT_ID;
const redirectUri = import.meta.env.VITE_DISCORD_REDIRECT_URI;
const state = 'HERO_STATE'; // Use a different state or generate dynamically
const discordAuthUrl = clientId && redirectUri
  ? `https://discord.com/oauth2/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}&scope=identify&state=${state}`
  : '#'; // Fallback

export const HeroContent: React.FC = () => {
  const { theme } = useTheme();
  const { isLoggedIn, isLoading, setMoonPayWidgetVisible } = useAuth();
  const isDarkMode = theme === 'dark';

  const handleAddFundsClick = () => {
    if (!isLoading) {
      if (isLoggedIn) {
        console.log('Add Funds action triggered from Hero (logged in) -> Opening MoonPay');
        setMoonPayWidgetVisible(true);
      } else {
        if (discordAuthUrl !== '#') {
          console.log('Add Funds action triggered from Hero (logged out) -> Setting flag and Redirecting to Discord');
          // Set flag in localStorage before redirecting
          localStorage.setItem('openMoonPayAfterLogin', 'true');
          window.location.href = discordAuthUrl;
        } else {
          console.error('Discord auth URL is not configured.');
        }
      }
    }
  };

  return (
    <motion.div
      className="flex flex-col items-center lg:items-start max-w-xl lg:max-w-2xl text-center lg:text-left"
      initial="hidden"
      animate="visible"
    >
      <motion.h1
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
        className={`text-left text-lg md:text-xl lg:text-2xl mb-8 ${
          isDarkMode ? 'text-gray-300' : 'text-gray-600'
        }`}
      >
        The easiest way to send Ripple's stablecoin directly within Discord servers - powered by{' '}
        <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500">
          XRP Ledger
        </span>
        {' '}for gas-free, secure, and instant transactions.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start"
      >
        <Button
          onClick={handleAddFundsClick}
          variant="gradient-blue"
          size="lg"
          className="w-full sm:w-auto order-first sm:order-none"
          iconLeft={<HiOutlinePlus className="w-5 h-5" />}
          disabled={isLoading || (discordAuthUrl === '#' && !isLoggedIn)}
        >
          Add Funds
        </Button>

        <Button
          as="a"
          href={BOT_INVITE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          variant="discord"
          size="lg"
          className="w-full sm:w-auto"
          iconLeft={<DiscordIcon className="w-5 h-5" />}
        >
          Add to Discord
        </Button>
      </motion.div>
    </motion.div>
  );
};