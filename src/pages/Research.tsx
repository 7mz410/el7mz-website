import { motion } from 'framer-motion';

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
        <p className="bio-p">
          Autonomous Design and Social Interventions. A deep dive into regional identities and mythical heritage.
        </p>
      </div>
    </motion.div>
  );
}
