import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export default function Research() {
  return (
    <motion.div 
      className="section-padding container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="section-header">Research</h1>
      
      <div className="mt-5">
        <p className="bio-p" style={{ fontSize: '1.4rem', lineHeight: '1.6', maxWidth: '900px' }}>
          I work at the friction point between Arabic calligraphy and artificial intelligence, where writing shifts from ornament to political act. My practice uses generative systems, projection, and situated data to rewrite public space with unauthorized texts. Here, AI is not a neutral tool but a stubborn collaborator, producing resistance written in light, appearing exactly where it is not meant to exist.
        </p>
        
        <div className="action-btns mt-5">
          <a href="/docs/Algorithmic_Agonism_Research.pdf" target="_blank" className="smv-btn primary">
            <Download size={18} /> Read Research Paper
          </a>
        </div>
      </div>
    </motion.div>
  );
}
