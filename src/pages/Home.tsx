import { motion } from 'framer-motion';
import { ArrowDown, Download, ExternalLink } from 'lucide-react';
import './Home.css';

export default function Home() {
  return (
    <div className="home-smv">
      {/* Hero Section with Video Background */}
      <section className="hero-smv">
        <div className="video-bg-container">
          <div className="youtube-bg-wrapper">
            <iframe 
              src="https://www.youtube.com/embed/In487Lqfccc?autoplay=1&mute=1&loop=1&playlist=In487Lqfccc&controls=0&showinfo=0&rel=0&modestbranding=1" 
              frameBorder="0" 
              allow="autoplay; encrypted-media" 
              allowFullScreen
              className="hero-video-iframe"
            ></iframe>
          </div>
          <div className="video-overlay"></div>
        </div>

        <div className="hero-content-smv container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="heavy-title main-headline">
              There's <br /> always <span className="text-accent">+1</span>
            </h1>
            <p className="hero-tagline">
              Palestinian Multimedia Artist & Pioneer in Digital Calligraffiti
            </p>
          </motion.div>
          
          <motion.div 
            className="scroll-indicator"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown size={32} />
          </motion.div>
        </div>
      </section>

      {/* Intro / Bio Section */}
      <section className="bio-smv section-padding">
        <div className="container bio-grid-smv">
          <motion.div 
            className="bio-portrait-container"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="img-container portrait-frame">
              <img src="/portrait.png" alt="Hamza Abu Ayyash" />
            </div>
          </motion.div>

          <motion.div 
            className="bio-text-smv"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-header">Artist Bio</h2>
            <p className="bio-p">
              I am a Palestinian-Jordanian multimedia artist born in Lebanon, with a creative practice rooted in resilience and cultural hybridity. My work spans over two decades at the intersection of calligraphy, graffiti, performance, and technology.
            </p>
            <p className="bio-p">
              A pioneer in <strong>Digital Calligraffiti</strong>, I co-invented the Infl3ctor, a live performance tool for real-time digital calligraphic projection. My thesis at KASK explored how Digital Calligraffiti can creatively intervene in Western historical monuments.
            </p>
            <div className="action-btns">
              <a href="/docs/CV_Hamza_Abuayyash_2026.pdf" target="_blank" className="smv-btn primary">
                <Download size={18} /> Download CV
              </a>
              <a href="/docs/portfolio26-s.pdf" target="_blank" className="smv-btn outline">
                <Download size={18} /> Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects - Rooted in Resilience */}
      <section className="projects-smv section-padding bg-darker">
        <div className="container">
          <h2 className="section-header">Rooted in Resilience</h2>
          <p className="section-sub">Collaboration with Vier Nul Vier & Gent Cultural Heritage</p>
          
          <div className="projects-grid-smv mt-5">
            <div className="project-card-smv">
              <div className="img-container gallery-item">
                <img src="/images/VNV_Gent_01.jpg" alt="VNV Gent Project" />
              </div>
              <div className="project-info-smv">
                <h3>VNV Gent Intervention</h3>
                <p>Digital Calligraffiti at the heart of Gent.</p>
              </div>
            </div>
            <div className="project-card-smv">
              <div className="img-container gallery-item">
                <img src="/images/VNV_Gent_02.jpg" alt="VNV Gent Project" />
              </div>
              <div className="project-info-smv">
                <h3>Social Design Case Study</h3>
                <p>Exploring resilience through public art.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-4">
            <a href="/docs/Hamza abuAyyash - Rooted in Resilience - press kit (1).pdf" target="_blank" className="link-with-icon">
              View Press Kit <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Palestine Film Institute - Cannes Posters */}
      <section className="projects-smv section-padding">
        <div className="container">
          <h2 className="section-header">Palestine Film Institute</h2>
          <p className="section-sub">Official Poster Designs for Cannes Film Festival 2025 & 2026</p>
          
          <div className="projects-grid-smv mt-5">
            <div className="poster-card">
              <div className="img-container poster-item">
                <img src="/images/Cannes_Official_PFI_POSTER_2025.png" alt="Cannes 2025 Official Poster" />
              </div>
              <div className="poster-label">Official Poster 2025</div>
            </div>
            <div className="poster-card">
              <div className="img-container poster-item">
                <img src="/images/Cannes_Official_PFI_POSTER_2026.png" alt="Cannes 2026 Official Poster" />
              </div>
              <div className="poster-label">Official Poster 2026</div>
            </div>
            <div className="poster-card wide">
              <div className="img-container poster-item">
                <img src="/images/PFP_S6_Poster.png" alt="PFP Poster" />
              </div>
              <div className="poster-label">PFI Special Feature</div>
            </div>
          </div>
        </div>
      </section>

      {/* Calligraffiti Feature */}
      <section className="full-width-feature">
        <div className="img-container wide-feature-bg">
          <img src="/images/IMAG2952.jpg" alt="Background intervention" className="parallax-bg" />
          <div className="feature-overlay">
            <h2 className="heavy-title">Writing Beauty into Public Space</h2>
          </div>
        </div>
      </section>
      {/* Merch Store Section */}
      <section className="store-smv section-padding bg-darker">
        <div className="container">
          <h2 className="section-header">Web Store</h2>
          <p className="section-sub">Official El 7mz Merch & Apparel</p>
          
          <div className="store-widget-container mt-5">
            <iframe 
              style={{ borderRadius: '24px', border: 'none' }} 
              src="https://embed.creator-spring.com/widget?slug=7mz&per=20&currency=&page=1&layout=carousel-small&theme=dark" 
              title="7mz Merch store powered by Spring" 
              width="100%" 
              height="420"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
