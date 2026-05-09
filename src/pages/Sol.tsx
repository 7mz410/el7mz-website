import { motion } from 'framer-motion';

export default function Sol() {
  return (
    <motion.div 
      className="section-padding container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="section-header">SOL</h1>
      <div className="mt-5">
        <p className="bio-p">
          Details about the SOL project and collaborative interventions will be featured here.
        </p>
      </div>
    </motion.div>
  );
}
