import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '@/components/layout/Header.tsx';
import Footer from '@/components/layout/Footer.tsx';
import Home from '@/pages/Home.tsx';
import Approach from '@/pages/Approach.tsx';
import Services from '@/pages/Services.tsx';
import Work from '@/pages/Work.tsx';
import Process from '@/pages/Process.tsx';
import About from '@/pages/About.tsx';
import Contact from '@/pages/Contact.tsx';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/approach" element={<Approach />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work" element={<Work />} />
        <Route path="/process" element={<Process />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}
