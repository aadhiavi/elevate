# Elevate - React + Vite + TypeScript

A modern, production-ready React application built with Vite and TypeScript.

## 🚀 Features

- ⚡ **Vite** - Next generation frontend tooling
- ⚛️ **React 18** - Latest React with hooks
- 📘 **TypeScript** - Type-safe development
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🛣️ **React Router** - Client-side routing
- 🌐 **Axios** - HTTP Client
- 📦 **Modular Structure** - Well-organized project structure

## 📁 Project Structure

```
src/
├── assets/             # Static assets
├── components/         # Reusable components (Header, Footer, Button, etc.)
├── constants/          # Application constants
├── hooks/              # Custom React hooks
├── layouts/            # Layout components
├── pages/              # Page components (Home, About, Services, Contact)
├── router/             # Router configuration
├── services/           # API services and external integrations
├── types/              # TypeScript types and interfaces
├── utils/              # Utility functions and helpers
├── App.tsx             # Main App component
├── index.css           # Global styles
└── main.tsx            # Application entry point
```

## 🛠️ Installation

1. Install dependencies:
```bash
npm install
```

2. Create environment file:
```bash
cp .env.example .env
```

## 🚀 Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🏗️ Building

Build for production:

```bash
npm run build
```

## 👀 Preview

Preview production build locally:

```bash
npm run preview
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint (if configured)

## 📦 Dependencies

### Core
- `react` - UI library
- `react-dom` - React DOM rendering
- `react-router-dom` - Client-side routing

### HTTP & Data
- `axios` - HTTP client
- `clsx` - Class name utility

### Styling
- `tailwindcss` - Utility-first CSS framework
- `autoprefixer` - PostCSS plugin
- `postcss` - CSS transformations

## 🎯 Pages

- **Home** (`/`) - Welcome page with features and CTAs
- **About** (`/about`) - Company information and team
- **Services** (`/services`) - Available services and pricing
- **Contact** (`/contact`) - Contact form and information
- **404** - Not found page

## 🧩 Components

- **Header** - Top navigation with logo
- **Navigation** - Main navigation menu
- **Footer** - Footer with links and copyright
- **Button** - Reusable button component with variants
- **Card** - Container component for content
- **LoadingSpinner** - Loading indicator

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```
VITE_API_BASE_URL=http://localhost:3000/api
```

### TypeScript

TypeScript configuration is in `tsconfig.json` with strict mode enabled for type safety.

### Vite

Vite configuration is in `vite.config.ts` with React plugin support.

## 📚 Utilities

- `formatDate()` - Format dates to readable strings
- `formatDateTime()` - Format dates with time
- `isValidEmail()` - Email validation
- `capitalizeString()` - Capitalize first letter
- `debounce()` - Debounce function calls
- `throttle()` - Throttle function calls
- `truncateString()` - Truncate strings

## 🪝 Custom Hooks

- `useApi()` - Handle API calls with loading and error states

## 🔌 Services

- **API Service** - Centralized API calls with interceptors and error handling

## 🚀 Getting Started

1. Replace placeholder content in pages
2. Update navigation items in `src/constants/index.ts`
3. Configure API endpoints in `.env`
4. Add your own components in `src/components/`
5. Create new pages in `src/pages/`
6. Update routes in `src/router/index.tsx`

## 📖 Learn More

- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org)
- [React Router Documentation](https://reactrouter.com)
- [Tailwind CSS Documentation](https://tailwindcss.com)

## 📄 License

MIT License - feel free to use this template for your projects.
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
