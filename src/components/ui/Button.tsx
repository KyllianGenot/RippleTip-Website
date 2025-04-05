// src/components/ui/Button.tsx
import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { DiscordIcon } from './icons'; // Importer DiscordIcon

// Définir les variantes possibles, ajout de 'discord'
type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'discord';
type ButtonSize = 'sm' | 'md' | 'lg';

type BaseButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  as?: 'button' | 'a' | typeof Link;
  iconLeft?: React.ReactNode; // Pour icône à gauche (comme Discord)
  iconRight?: React.ReactNode; // Pour icône à droite (comme la flèche)
};

// Types discriminés (pas de changement ici)
type ButtonProps = BaseButtonProps & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> & { as?: 'button' };
type AnchorProps = BaseButtonProps & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children'> & { as: 'a' };
type LinkButtonProps = BaseButtonProps & Omit<LinkProps, 'className' | 'to' | 'children'> & { as: typeof Link, to: LinkProps['to'] };

type Props = ButtonProps | AnchorProps | LinkButtonProps;

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  as: Component = 'button',
  iconLeft,
  iconRight,
  ...props
}: Props) => {

  // Styles de base (plus élégants)
  const baseClasses = `
    inline-flex items-center justify-center font-semibold
    rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2
    dark:focus:ring-offset-gray-900 transition-all duration-200 ease-out
    transform active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed
    whitespace-nowrap group relative overflow-hidden
  `;
  // Ajout de group, relative, overflow-hidden pour les effets
  // Ajout de active:scale pour un léger retour au clic

  // Styles de taille (légèrement ajustés)
  const sizeClasses: Record<ButtonSize, string> = {
    sm: 'px-4 py-2 text-sm gap-2', // Augmenté padding, ajouté gap
    md: 'px-5 py-2.5 text-sm gap-2', // Taille par défaut, py augmenté
    lg: 'px-7 py-3 text-base gap-3', // Plus grand padding/texte/gap pour lg
  };

  // Styles de variantes (améliorés)
  const variantClasses: Record<ButtonVariant, string> = {
    primary: `
      bg-indigo-600 text-white border border-transparent
      hover:bg-indigo-700 focus:ring-indigo-500
      dark:bg-indigo-500 dark:hover:bg-indigo-600
    `,
    secondary: `
      bg-gray-100 text-gray-800 border border-gray-200
      hover:bg-gray-200 focus:ring-indigo-500
      dark:bg-gray-700/80 dark:text-gray-200 dark:border-gray-600/80
      dark:hover:bg-gray-700 dark:hover:border-gray-600
    `,
    outline: `
      bg-transparent border-2 text-indigo-600 border-indigo-500
      hover:bg-indigo-50 focus:ring-indigo-500
      dark:text-indigo-400 dark:border-indigo-400 dark:hover:bg-indigo-900/20
    `,
    discord: `
      bg-[#5865F2] text-white border border-transparent
      hover:bg-[#4f5bda] focus:ring-[#5865F2]/50
      dark:bg-[#5865F2] dark:hover:bg-[#4f5bda]
    `, // Couleurs spécifiques Discord
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  return (
    <Component className={combinedClasses} {...props as any}>
      {/* Icône Gauche */}
      {iconLeft && <span className="flex-shrink-0">{iconLeft}</span>}

      {/* Contenu Texte */}
      <span className="relative z-10">{children}</span>

      {/* Icône Droite */}
      {iconRight && <span className="flex-shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-1">{iconRight}</span>}

       {/* Optionnel: Effet subtil au survol pour les boutons primaires/discord */}
       {(variant === 'primary' || variant === 'discord') && (
         <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-[0.08] transition-opacity duration-200 rounded-lg"></div>
       )}
    </Component>
  );
};

export default Button;