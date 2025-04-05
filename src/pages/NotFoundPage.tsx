// src/pages/NotFoundPage.tsx
import { Link } from 'react-router-dom';
import { Button } from '../components/ui'; // Reuse the Button component
// Optional: Import an appropriate icon
// import { HiOutlineExclamationTriangle } from 'react-icons/hi2';

const NotFoundPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center text-center min-h-[60vh] pt-20 md:pt-24"> {/* Added min-height */}

      {/* Optional Icon */}
      {/* <HiOutlineExclamationTriangle className="h-16 w-16 text-amber-500 mb-4" /> */}

      <h1 className="text-6xl font-bold text-gray-800 dark:text-white mb-2">
        404
      </h1>
      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
        Page Not Found
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
        Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Button as={Link} to="/" variant="primary" size="lg">
        Go Back Home
      </Button>
    </div>
  );
};

export default NotFoundPage;