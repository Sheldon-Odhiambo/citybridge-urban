
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProgramPage from './pages/ProgramPage';
import CribPage from './pages/CribPage';
import ScripturePop from './components/ScripturePop';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const RevealManager = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 50; // Triggers earlier for better UX
        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Immediate check on route change
    setTimeout(handleScroll, 100); 
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <RevealManager />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/program/:id" element={<ProgramPage />} />
        <Route path="/crib-connection" element={<CribPage />} />
      </Routes>
      <ScripturePop />
    </Router>
  );
};

export default App;
