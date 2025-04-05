import React, { useRef, useEffect } from 'react';
import { Link, LinkProps } from 'react-router-dom';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'discord' | 'gradient-blue'; // Added new variant
type ButtonSize = 'sm' | 'md' | 'lg';

type BaseButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  as?: 'button' | 'a' | typeof Link;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
};

type ButtonProps = BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> & {
    as?: 'button';
  };
type AnchorProps = BaseButtonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children'> & {
    as: 'a';
  };
type LinkButtonProps = BaseButtonProps &
  Omit<LinkProps, 'className' | 'to' | 'children'> & {
    as: typeof Link;
    to: LinkProps['to'];
  };

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
  const buttonRef = useRef<HTMLElement | null>(null);
  const shineRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const button = buttonRef.current;
    const shine = shineRef.current;
    if (!button || !shine) return;

    const handleMouseEnter = () => {
      shine.style.opacity = '1';
      shine.style.transform = 'translateX(-100%) skewX(-25deg)';

      const buttonWidth = button.offsetWidth;
      const shineWidth = 60;
      const distanceToTravel = buttonWidth + shineWidth;

      let start: number | null = null;
      const duration = 750;

      const animate = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = (timestamp - start) / duration;
        const translateX = progress * distanceToTravel - shineWidth;

        shine.style.transform = `translateX(${translateX}px) skewX(-25deg)`;

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          shine.style.opacity = '0';
        }
      };

      requestAnimationFrame(animate);
    };

    button.addEventListener('mouseenter', handleMouseEnter);
    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  const baseClasses = `
    inline-flex items-center justify-center font-semibold align-middle
    border focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900
    transition-all duration-300 ease-out whitespace-nowrap
    relative overflow-hidden group
    shadow-md hover:shadow-lg active:shadow-sm
    transform active:scale-[0.99]
    disabled:opacity-60 disabled:cursor-not-allowed disabled:shadow-md disabled:scale-100
  `;

  const sizeClasses: Record<ButtonSize, string> = {
    sm: 'px-4 py-2 text-xs rounded-lg',
    md: 'px-5 py-2.5 text-sm rounded-xl',
    lg: 'px-7 py-3 text-base rounded-xl',
  };

  const variantClasses: Record<ButtonVariant, string> = {
    primary: `
      bg-gradient-to-br from-indigo-500 via-purple-500 to-indigo-600 text-white border-indigo-600/30
      hover:from-indigo-400 hover:to-purple-400 focus:ring-indigo-500
      dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-500 dark:border-indigo-300/30
      dark:hover:from-indigo-300 dark:hover:to-purple-300
    `,
    secondary: `
      bg-gradient-to-br from-gray-200 to-gray-300 text-gray-800 border-gray-400/70
      hover:from-gray-100 hover:to-gray-200 hover:border-gray-500 focus:ring-indigo-500
      dark:from-gray-700 dark:to-gray-800 dark:text-gray-200 dark:border-gray-600/50
      dark:hover:from-gray-600 dark:hover:to-gray-700 dark:hover:border-gray-500
    `,
    outline: `
      bg-white/50 dark:bg-gray-800/30 backdrop-blur-sm border-2 text-indigo-600 border-indigo-400/80
      hover:bg-indigo-100/80 hover:border-indigo-500 hover:text-indigo-700 focus:ring-indigo-500
      dark:text-indigo-400 dark:border-indigo-500/80 dark:hover:bg-indigo-900/30 dark:hover:border-indigo-400 dark:hover:text-indigo-300
    `,
    discord: `
      bg-gradient-to-br from-[#5865F2] via-[#6a75f3] to-[#5865F2] text-white border-[#4752C4]/30
      hover:from-[#4752C4] hover:to-[#5865F2] focus:ring-[#5865F2]/50
      dark:border-[#6a75f3]/30
    `,
    'gradient-blue': `
      bg-gradient-to-r from-cyan-400 to-blue-600 text-white border-cyan-500/30
      hover:from-cyan-500 hover:to-blue-700 focus:ring-blue-500
      dark:from-cyan-300 dark:to-blue-500 dark:border-cyan-400/30
      dark:hover:from-cyan-400 dark:hover:to-blue-600
    `,
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  return (
    <Component ref={buttonRef} className={combinedClasses} {...(props as any)}>
      <span
        ref={shineRef}
        className="shine-effect pointer-events-none absolute left-[-200%] top-0 w-[60px] h-[200%]"
      ></span>
      <span className="relative z-[1] inline-flex items-center">
        {iconLeft && (
          <span
            className={`flex-shrink-0 ${
              size === 'lg' ? 'mr-2' : size === 'md' ? 'mr-1.5' : 'mr-1'
            }`}
          >
            {iconLeft}
          </span>
        )}
        <span className="leading-none">{children}</span>
        {iconRight && (
          <span
            className={`flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1 ${
              size === 'lg' ? 'ml-2' : size === 'md' ? 'ml-1.5' : 'ml-1'
            }`}
          >
            {iconRight}
          </span>
        )}
      </span>
    </Component>
  );
};

export default Button;