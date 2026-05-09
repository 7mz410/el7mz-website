import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

export default function Phd() {
  return (
    <motion.div 
      className="section-padding container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="section-header">PhD Journey</h1>
      
      <div className="mt-5">
        <div className="glass-panel" style={{ padding: '3rem', borderLeft: '4px solid var(--accent-gold)' }}>
          <h2 className="heavy-title" style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--accent-gold)' }}>Abstract Summary</h2>
          <p className="bio-p" style={{ fontSize: '1.3rem', lineHeight: '1.7', maxWidth: '800px' }}>
            This practice-based PhD investigates the "Ghent Paradox", the institutional tension between the censorship of Arabic Digital Calligraffiti and its subsequent celebration as a monumental commission. Using the Infl3ctor, a custom-built projection probe, this research stages performative interventions in contested public spaces, culminating in a reflexive documentary film and a tactical manual for transnational artists.
          </p>
        </div>
        
        <div className="action-btns mt-5">
          <a href="/docs/PhD_Proposal_Hamza.pdf" target="_blank" className="smv-btn outline">
            <FileText size={18} /> View PhD Proposal
          </a>
        </div>
      </div>
    </motion.div>
  );
}
