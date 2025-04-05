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

  const logoSizeClass = 'h-6 w-auto';

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