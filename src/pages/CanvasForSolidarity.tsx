import { motion } from 'framer-motion';

export default function CanvasForSolidarity() {
  return (
    <motion.div 
      className="section-padding container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="section-header">Project 404</h1>
      <div className="mt-5">
        <p className="bio-p">
          A Canvas for Solidarity. Exploring artistic interventions as a form of global support and narrative building.
        </p>
      </div>
    </motion.div>
  );
}
