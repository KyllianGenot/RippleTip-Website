// src/components/ui/Logo.tsx
import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks';
import logoLight from '../../assets/images/logo-light.webp';
import logoDark from '../../assets/images/logo-dark.webp';

interface LogoProps {
  className?: string;
}

const Logo = ({ className = '' }: LogoProps) => {
  const { theme } = useTheme();
  const logoToShow = theme === 'dark' ? logoDark : logoLight;

  // Reduce the logo size to h-8 (32px) for better fit in the header
  const logoSizeClass = 'h-6 w-auto'; // Adjusted from h-10 to h-8

  return (
    <Link to="/" aria-label="RippleTip Homepage" className={`inline-block ${className}`}>
      <img
        src={logoToShow}
        alt="RippleTip Logo"
        className={`${logoSizeClass} block`}
      />
    </Link>
  );
};

export default Logo;