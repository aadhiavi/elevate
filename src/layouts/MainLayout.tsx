// Main Layout component

import type { ReactNode } from 'react';
import { Header, Footer, StickyContact, CookieConsent } from '../components';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-20 md:pt-24 lg:pt-28">
        {children}
      </main>
      <Footer />

      <StickyContact />
      <CookieConsent />
    </div>
  );
};
