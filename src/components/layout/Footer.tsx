// src/components/layout/Footer.tsx
import React from 'react'; // Importer React
import { Link } from 'react-router-dom';
import { GithubIcon } from '../ui/icons/GithubIcon'; // Import the GitHub icon

export const Footer: React.FC = () => { // Exportation nommée pour cohérence
  const currentYear = new Date().getFullYear();

  // Liste des liens essentiels
  const footerLinks = [
    { name: 'Commands', path: '/commands' },
    { name: 'Privacy', path: '/privacy' },
    { name: 'Terms', path: '/terms' },
    // Ajoutez d'autres liens ici si nécessaire à l'avenir
    // { name: 'Support', path: '/support' },
  ];

  return (
    <footer className="border-t border-gray-200 dark:border-gray-700/50 bg-gray-50 dark:bg-gray-900">
      {/* Pas de séparateur dégradé ici, juste une bordure simple */}
      <div className="container mx-auto px-6 max-w-screen-xl py-8">

        {/* Structure unique : Flex sur mobile, puis Row sur md */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">

          {/* Côté Gauche : Copyright et GitHub */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {currentYear} RippleTip.<br className="sm:hidden" /> All rights reserved. {/* Saut de ligne sur mobile */}
            </p>
          </div>

          {/* Côté Droit : Liens et icônes sociales */}
          <div className="flex flex-col sm:flex-row items-center gap-5">
            {/* GitHub Link */}
            <a 
              href="https://github.com/RippleTip" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              aria-label="Visit RippleTip on GitHub"
            >
              <GithubIcon size={20} />
            </a>
            
            {/* Navigation Links */}
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

// export { Footer }; // Exportation nommée si vous utilisez index.ts
export default Footer; // Ou garder l'export par défaut si c'est votre convention pour ce fichier