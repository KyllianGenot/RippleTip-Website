import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui';
import { useTheme } from '../hooks';
import { HiOutlineExclamationTriangle } from 'react-icons/hi2';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
    },
  },
};

const NotFoundPage = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center text-center min-h-[60vh] pt-20 md:pt-24">
      <motion.div
        className="flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <HiOutlineExclamationTriangle
            className={`h-16 w-16 mb-4 ${
              isDarkMode ? 'text-amber-400' : 'text-amber-500'
            }`}
          />
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className={`text-6xl font-bold tracking-tight mb-2 ${
            isDarkMode ? 'text-white' : 'text-gray-800'
          }`}
        >
          404
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className={`text-2xl font-semibold mb-4 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}
        >
          Page Not Found
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className={`text-lg mb-8 max-w-md ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          Oops! The page you are looking for might have been removed, had its
          name changed, or is temporarily unavailable.
        </motion.p>

        <motion.div variants={itemVariants}>
          <Button
            as={Link}
            to="/"
            variant="gradient-blue"
            size="lg"
            className="w-full sm:w-auto"
          >
            Go Back Home
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;