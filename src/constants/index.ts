// Application constants

export const APP_NAME = 'Elevate Advisors Education';
export const APP_SUBTITLE = 'Trade Syndicate';
export const APP_VERSION = '1.0.0';

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

export const NAVIGATION_ITEMS = [
  { id: '1', label: 'Home', path: '/' },
  { id: '2', label: 'About Us', path: '/about' },
  { id: '3', label: 'Take Test', path: '/take-test' },
  { id: '4', label: 'Why Malaysia', path: '/why-malaysia' },
];

export const MESSAGES = {
  SUCCESS: 'Operation completed successfully',
  ERROR: 'An error occurred',
  LOADING: 'Loading...',
  NOT_FOUND: 'Page not found',
};

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
};
