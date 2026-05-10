import { Mail, Globe, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer section">
      <div className="container">
        <div className="footer-content glass-panel">
          <div className="footer-brand">
            <h2>El 7mz</h2>
          </div>
          
          <div className="footer-links">
            <a href="mailto:info@el7mz.com" className="social-link">
              <Mail size={20} />
              <span>info@el7mz.com</span>
            </a>
            <div className="social-icons">
              <a href="https://www.instagram.com/el.7mz/" target="_blank" rel="noreferrer" className="icon-btn"><Instagram size={20} /></a>
              <a href="https://www.facebook.com/hamza.abuayyash/" target="_blank" rel="noreferrer" className="icon-btn"><Facebook size={20} /></a>
              <a href="https://x.com/7mz" target="_blank" rel="noreferrer" className="icon-btn"><Twitter size={20} /></a>
              <a href="https://www.linkedin.com/in/hamza-abuayyash-35775885/" target="_blank" rel="noreferrer" className="icon-btn"><Linkedin size={20} /></a>
              <a href="http://digitalcalligraffiti.org/artist/hamza-abu-ayyash/" target="_blank" rel="noreferrer" className="icon-btn"><Globe size={20} /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Hamza Abu Ayyash. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
