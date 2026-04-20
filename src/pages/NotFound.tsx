// 404 Not Found page

import { Link } from 'react-router-dom';
import { Button } from '../components';
import { useSEO } from '../hooks/useSEO';

export const NotFound = () => {
  useSEO({
    title: 'Page Not Found | Elevate Education',
    description: 'The page you are looking for does not exist. Please navigate back to the home page or contact us for assistance.',
  });

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-gray-900">404</h1>
        <p className="text-2xl text-gray-600">Page Not Found</p>
        <p className="text-gray-500 max-w-md">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Link to="/">
          <Button variant="primary" size="lg">
            Go Back Home
          </Button>
        </Link>
      </div>
    </div>
  );
};
