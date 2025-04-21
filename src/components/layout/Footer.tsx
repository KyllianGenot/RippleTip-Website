import React from 'react';
import { Link } from 'react-router-dom';
import { GithubIcon } from '../ui/icons/GithubIcon';
import { GITHUB_REPO_LINK } from '../../constants/links';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'Commands', path: '/commands' },
    { name: 'Privacy', path: '/privacy' },
    { name: 'Terms', path: '/terms' },
  ];

  return (
    <footer className="border-t border-gray-200 dark:border-gray-700/50 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 max-w-screen-xl py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {currentYear} RippleTip.<br className="sm:hidden" /> All rights reserved.{' '}
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1 sm:mt-0 sm:ml-4">
              RippleTip is not affiliated with Ripple or the XRP Ledger.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-5">
            <a
              href={GITHUB_REPO_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              aria-label="Visit RippleTip on GitHub"
            >
              <GithubIcon size={20} />
            </a>

            <nav className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
              {footerLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;