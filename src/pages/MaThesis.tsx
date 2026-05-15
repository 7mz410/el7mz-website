import { motion } from 'framer-motion';
import { Download, Book } from 'lucide-react';

export default function MaThesis() {
  return (
    <motion.div 
      className="section-padding container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="section-header">MA Thesis</h1>
      
      <div className="bio-grid-smv mt-5">
        <motion.div 
          className="bio-portrait-container"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="img-container portrait-frame">
            <img src="/images/thesis-cover.png" alt="MA Thesis Cover" />
          </div>
        </motion.div>

        <motion.div 
          className="bio-text-smv"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="heavy-title" style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>Digital Calligraffiti Intervention</h2>
          <p className="bio-p">
            My Master's thesis at KASK explored the intersection of digital calligraphy and urban space, focusing on how temporary digital interventions can reclaim and rewrite the narratives of public monuments.
          </p>
          <div className="action-btns">
            <a href="/docs/Thesis.pdf" target="_blank" className="smv-btn primary">
              <Download size={18} /> Read Full Thesis
            </a>
            <a href="/docs/Thesis.pdf" download className="smv-btn outline">
              <Book size={18} /> Download PDF
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
