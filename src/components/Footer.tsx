import { Mail, Globe } from 'lucide-react';
import './Footer.css';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4l11.733 16h4.267l-11.733-16zM4 20l6.768-6.768m2.464-2.464L20 4"/></svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

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
              <a href="https://www.instagram.com/el.7mz/" target="_blank" rel="noreferrer" className="icon-btn"><InstagramIcon /></a>
              <a href="https://www.facebook.com/hamza.abuayyash/" target="_blank" rel="noreferrer" className="icon-btn"><FacebookIcon /></a>
              <a href="https://x.com/7mz" target="_blank" rel="noreferrer" className="icon-btn"><XIcon /></a>
              <a href="https://www.linkedin.com/in/hamza-abuayyash-35775885/" target="_blank" rel="noreferrer" className="icon-btn"><LinkedInIcon /></a>
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
