import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeToggleButton, Logo, ConnectDiscordButton, Button, UserDropdown } from '../ui';
import { HiOutlineBars3, HiOutlineXMark } from 'react-icons/hi2';
import { HiOutlinePlus, HiOutlineLogout } from 'react-icons/hi';
import { useTheme } from '../../hooks';
import { useAuth } from '../../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { MoonPayBuyWidget } from '@moonpay/moonpay-react';

const Header = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  const { 
    isLoggedIn, 
    user, 
    logout, 
    isLoading, 
    isMoonPayWidgetVisible,
    setMoonPayWidgetVisible
  } = useAuth();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY;
      setIsScrolled(currentScrollY > 5);

      if (currentScrollY < 5) {
        setIsVisible(true);
      } else if (isScrollingDown && currentScrollY > 100) {
        setIsVisible(false);
        setIsMobileMenuOpen(false);
      } else if (!isScrollingDown) {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY <= 0 ? 0 : currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const getTransparentHeaderTextColor = () => {
    return isDarkMode ? 'text-white hover:text-gray-200' : 'text-gray-800 hover:text-gray-600';
  };

  const getDesktopNavLinkClass = ({ isActive }: { isActive: boolean }): string => {
    const base = 'px-3 py-2 text-sm font-medium transition-colors duration-200 relative group';
    const activeColor = isDarkMode ? 'text-blue-500' : 'text-blue-600';
    const inactiveColor = isScrolled
      ? 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500'
      : `${getTransparentHeaderTextColor()}`;
    const underline = isDarkMode
      ? 'after:absolute after:left-0 after:-bottom-1.5 after:h-px after:bg-blue-500 after:transition-transform after:duration-300 after:ease-out'
      : 'after:absolute after:left-0 after:-bottom-1.5 after:h-px after:bg-blue-600 after:transition-transform after:duration-300 after:ease-out';
    const activeUnderline = 'after:w-full after:scale-x-100';
    const inactiveUnderline = 'after:w-full after:scale-x-0 group-hover:after:scale-x-100 after:origin-left';

    return `${base} ${isActive ? activeColor : inactiveColor} ${underline} ${isActive ? activeUnderline : inactiveUnderline}`;
  };

  const getMobileNavLinkClass = ({ isActive }: { isActive: boolean }): string => {
    const base = 'block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 transform hover:-translate-y-0.5';
    const active = isDarkMode
      ? 'bg-blue-500/20 text-blue-400 shadow-sm'
      : 'bg-blue-50 text-blue-600 shadow-sm';
    const inactive = 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800';
    return `${base} ${isActive ? active : inactive}`;
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  const handleLogout = async () => {
    await logout();
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  const handleAddFunds = () => {
    console.log('Add Funds clicked from Header!');
    setMoonPayWidgetVisible(true);
    if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
    }
  };

  const AuthSection = () => {
    if (isLoading) {
        return <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse"></div>;
    }

    if (isLoggedIn && user) {
        return (
            <UserDropdown
                user={user}
                onLogout={handleLogout}
                onAddFunds={handleAddFunds}
            />
        );
    }

    return <ConnectDiscordButton className="hidden lg:inline-flex" size="md" />;
  };

  const MobileAuthSection = () => {
    if (isLoading) {
        return <div className="w-full h-10 rounded-md bg-gray-200 dark:bg-gray-700 animate-pulse mb-3"></div>;
    }

    if (isLoggedIn && user) {
      return (
          <div className="flex flex-col items-center space-y-4">
             <div className="flex items-center space-x-3 mb-4 justify-center">
                 <img
                     src={user.avatar || `https://cdn.discordapp.com/embed/avatars/${parseInt(user.id) % 5}.png`}
                     alt={`${user.globalName || user.username}'s avatar`}
                     className="w-10 h-10 rounded-full border-2 border-gray-300 dark:border-gray-600"
                 />
                 <span className="text-base font-medium text-gray-800 dark:text-gray-200">
                     {user.globalName || user.username}
                 </span>
             </div>
             <div className="w-full space-y-2">
                 <Button
                     onClick={handleAddFunds}
                     size="md"
                     variant="gradient-blue"
                     className="w-full"
                     iconLeft={<HiOutlinePlus className="w-5 h-5" />}
                 >
                     Add Funds
                 </Button>
                 <Button
                     onClick={handleLogout}
                     size="md"
                     variant="secondary"
                     className="w-full"
                     iconLeft={<HiOutlineLogout className="w-5 h-5" />}
                 >
                     Logout
                 </Button>
             </div>
          </div>
      );
    }
    return (
        <ConnectDiscordButton
            className="block w-full text-lg font-semibold py-3"
            onClick={toggleMobileMenu}
        />
    );
  };

  return (
    <>
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ease-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled || isMobileMenuOpen
          ? `bg-white/90 dark:bg-gray-900/90 border-b border-gray-200/50 dark:border-gray-700/50 shadow-sm py-3 ${
              isMobileMenuOpen ? 'backdrop-blur-[40px]' : 'backdrop-blur-lg'
            }`
          : 'bg-transparent border-b border-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6 max-w-screen-xl relative">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Logo />
          </div>

          <nav className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center space-x-6 lg:space-x-8">
              <NavLink to="/" className={getDesktopNavLinkClass}>
                Home
              </NavLink>
              <NavLink to="/commands" className={getDesktopNavLinkClass}>
                Commands
              </NavLink>
            </div>
          </nav>

          <div className="flex items-center flex-shrink-0 space-x-4 sm:space-x-5">
            <ThemeToggleButton
              className={isScrolled ? '' : `${getTransparentHeaderTextColor()} focus:ring-white/50`}
            />
            <div className="hidden lg:flex">
              <AuthSection />
            </div>

            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                type="button"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
                className={`inline-flex items-center justify-center p-2 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 ${
                  isScrolled
                    ? 'text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                    : `${getTransparentHeaderTextColor()} hover:bg-black/10 dark:hover:bg-white/10`
                }`}
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <HiOutlineBars3 className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            className="md:hidden absolute top-full left-0 right-0 shadow-xl transition-all duration-300 ease-in-out border-t border-gray-200/80 dark:border-gray-700/50 overflow-hidden bg-white dark:bg-gray-900 backdrop-blur-[40px]"
            initial={{ maxHeight: 0, opacity: 0, y: -16 }}
            animate={{ maxHeight: 'calc(100vh - 4rem)', opacity: 1, y: 0 }}
            exit={{ maxHeight: 0, opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="p-6 space-y-3">
              <motion.div variants={menuItemVariants} initial="hidden" animate="visible" exit="exit">
                <NavLink
                  to="/"
                  className={getMobileNavLinkClass}
                  onClick={toggleMobileMenu}
                  aria-label="Go to Home page"
                >
                  Home
                </NavLink>
              </motion.div>
              <motion.div variants={menuItemVariants} initial="hidden" animate="visible" exit="exit">
                <NavLink
                  to="/commands"
                  className={getMobileNavLinkClass}
                  onClick={toggleMobileMenu}
                  aria-label="Go to Commands page"
                >
                  Commands
                </NavLink>
              </motion.div>
              <motion.div
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700"
              >
                <MobileAuthSection />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
    <MoonPayBuyWidget
      variant="overlay"
      baseCurrencyCode="usd"
      baseCurrencyAmount="100"
      defaultCurrencyCode="eth"
      visible={isMoonPayWidgetVisible}
      onClose={async () => setMoonPayWidgetVisible(false)}
      theme={theme}
      colorCode="#2563eb"
    />
    </>
  );
};

export default Header;