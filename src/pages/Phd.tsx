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
            This practice-based PhD investigates the "conditional visibility" of Palestinian expression in European public spaces, anchored in the "Ghent Paradox"—the institutional tension between the censorship of an ephemeral Arabic Digital Calligraffiti projection and its subsequent authorization as a monumental commission. Utilizing the Infl3ctor projection tool as an epistemic probe, this research stages live performative interventions on contested Western monuments. The project culminates in a forensic "Counter-Archive" of bureaucratic negotiations and public encounters, alongside a critical written reflection functioning as a "Manual for Authorized Resistance" grounded in semiotics, agonism, and spatial theory.
          </p>
        </div>
        
        <div className="action-btns mt-5">
          <a href="/docs/Hamza AbuAyyash - PhD Proposal Abstract.pdf" target="_blank" className="smv-btn outline">
            <FileText size={18} /> View PhD Abstract
          </a>
        </div>
      </div>
    </motion.div>
  );
}
