import { motion } from 'framer-motion';

export default function Sol() {
  return (
    <motion.div 
      className="section container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      style={{ minHeight: '60vh', paddingTop: '120px' }}
    >
      <h1 className="section-title">SOL</h1>
      <div className="glass-panel" style={{ padding: '3rem', marginTop: '2rem' }}>
        <p className="text-secondary" style={{ fontSize: '1.2rem' }}>
          Information about the SOL project will be displayed here. 
        </p>
      </div>
    </motion.div>
  );
}
