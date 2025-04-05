// src/components/layout/Footer.tsx
import { Link } from 'react-router-dom';
import { DiscordIcon } from '../ui/icons'; // Adjust path if needed

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const DISCORD_SERVER_LINK = 'https://discord.gg/YOUR_INVITE_CODE'; // TODO: Update

  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">

        {/* Copyright */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p>© {currentYear} RippleTip. All rights reserved.</p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
          {/* --- Restored 'to' and 'className' props --- */}
          <Link
            to="/terms"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            Terms of Service
          </Link>
          <Link
            to="/privacy"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            Privacy Policy
          </Link>
           {/* --- End Restoration --- */}

          {/* External Links (Discord Server) */}
          <a
            href={DISCORD_SERVER_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Join our Discord server"
            className="flex items-center space-x-1 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <DiscordIcon className="w-5 h-5" />
            <span>Support Server</span>
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;