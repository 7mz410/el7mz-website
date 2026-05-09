import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-smv ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-flex">
        <Link to="/" className="logo-link">
          <img src="/logo.svg" alt="El 7mz Logo" className="brand-logo" />
        </Link>

        <nav className="desktop-nav-smv">
          <Link to="/home" className={location.pathname.includes('/home') ? 'active' : ''}>Home</Link>
          <Link to="/comics" className={location.pathname.includes('/comics') ? 'active' : ''}>Comics</Link>
          <Link to="/research" className={location.pathname.includes('/research') ? 'active' : ''}>Research</Link>
          <Link to="/phd" className={location.pathname.includes('/phd') ? 'active' : ''}>PhD</Link>
          <Link to="/palestine-pavillion-at-cannes-25" className={location.pathname.includes('/palestine-pavillion') ? 'active' : ''}>Cannes</Link>
          <Link to="/Project404" className={location.pathname.includes('/Project404') ? 'active' : ''}>Project 404</Link>
          <a href="https://digitalcalligraffiti.org/" target="_blank" rel="noreferrer" className="external-nav-link">Digital Calligraffiti</a>
        </nav>

        <button className="mobile-toggle-smv" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="mobile-overlay-smv"
          >
            <nav className="mobile-links-smv">
              <Link to="/home" onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/comics" onClick={() => setIsOpen(false)}>Comics</Link>
              <Link to="/research" onClick={() => setIsOpen(false)}>Research</Link>
              <Link to="/phd" onClick={() => setIsOpen(false)}>PhD</Link>
              <Link to="/palestine-pavillion-at-cannes-25" onClick={() => setIsOpen(false)}>Cannes</Link>
              <Link to="/Project404" onClick={() => setIsOpen(false)}>Project 404</Link>
              <a href="https://digitalcalligraffiti.org/" target="_blank" rel="noreferrer" className="external-nav-link-mobile" onClick={() => setIsOpen(false)}>Digital Calligraffiti</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
