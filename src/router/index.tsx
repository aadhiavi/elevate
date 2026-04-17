// Router configuration

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { Home, About, TakeTest, WhyMalaysia, NotFound } from '../pages';

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/about" element={<MainLayout><About /></MainLayout>} />
        <Route path="/take-test" element={<MainLayout><TakeTest /></MainLayout>} />
        <Route path="/why-malaysia" element={<MainLayout><WhyMalaysia /></MainLayout>} />
        <Route path="*" element={<MainLayout><NotFound /></MainLayout>} />
      </Routes>
    </Router>
  );
};
