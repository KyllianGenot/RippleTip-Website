import { useTheme } from '../../hooks';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi2';

interface ThemeToggleButtonProps {
  className?: string;
}

const ThemeToggleButton = ({ className = '' }: ThemeToggleButtonProps) => {
  const { theme, toggleTheme } = useTheme();

  const nextThemeLabel = theme === 'light' ? 'dark' : 'light';

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${nextThemeLabel} mode`}
      className={`p-2 rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800 transition-colors duration-200 ${className}`}
    >
      {theme === 'light' ? (
        <HiOutlineMoon className="w-5 h-5" aria-hidden="true" />
      ) : (
        <HiOutlineSun className="w-5 h-5" aria-hidden="true" />
      )}
    </button>
  );
};

export default ThemeToggleButton;