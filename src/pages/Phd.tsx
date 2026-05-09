import { motion } from 'framer-motion';

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
        <p className="bio-p">
          Exploration of Digital Calligraffiti as a tool for creative intervention in public spaces.
        </p>
      </div>
    </motion.div>
  );
}
