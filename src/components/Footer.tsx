import { Mail, Globe } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer section">
      <div className="container">
        <div className="footer-content glass-panel">
          <div className="footer-brand">
            <h2>El 7mz</h2>
            <p className="text-secondary">Writing beauty into public space.</p>
          </div>
          
          <div className="footer-links">
            <a href="mailto:info@el7mz.com" className="social-link">
              <Mail size={20} />
              <span>info@el7mz.com</span>
            </a>
            <div className="social-icons">
              {/* Replace with actual links later */}
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
