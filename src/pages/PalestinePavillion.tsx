import { motion } from 'framer-motion';

export default function PalestinePavillion() {
  return (
    <motion.div 
      className="section container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      style={{ minHeight: '60vh', paddingTop: '120px' }}
    >
      <h1 className="section-title">Palestine Pavillion at Cannes '25</h1>
      <div className="glass-panel" style={{ padding: '3rem', marginTop: '2rem' }}>
        <p className="text-secondary" style={{ fontSize: '1.2rem' }}>
          Showcasing the work and representation at the Palestine Pavillion, Cannes Film Festival 2025.
        </p>
      </div>
    </motion.div>
  );
}
