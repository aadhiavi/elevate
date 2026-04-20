import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { Home, ProgramPathways, Services, Opportunities, WhyMalaysia, Contact, FormData, NotFound } from '../pages';
import { ScrollToTop } from '../components/ScrollToTop';

export const AppRouter = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/pathways" element={<MainLayout><ProgramPathways /></MainLayout>} />
        <Route path="/services" element={<MainLayout><Services /></MainLayout>} />
        <Route path="/opportunities" element={<MainLayout><Opportunities /></MainLayout>} />
        <Route path="/why-malaysia" element={<MainLayout><WhyMalaysia /></MainLayout>} />
        <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
        <Route path="/form_data" element={<MainLayout><FormData /></MainLayout>} />
        <Route path="*" element={<MainLayout><NotFound /></MainLayout>} />
      </Routes>
    </Router>
  );
};
