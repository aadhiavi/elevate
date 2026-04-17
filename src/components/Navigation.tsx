// Navigation component

import { Link } from 'react-router-dom';
import { NAVIGATION_ITEMS } from '../constants';

export const Navigation = () => {
  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-4">
          {NAVIGATION_ITEMS.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
