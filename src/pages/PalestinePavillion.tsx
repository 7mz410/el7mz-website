import { motion } from 'framer-motion';

export default function PalestinePavillion() {
  return (
    <motion.div 
      className="section-padding container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="section-header">Cannes '25</h1>
      <div className="mt-5">
        <p className="bio-p">
          Showcasing the official representation and artwork at the Palestine Pavillion, Cannes Film Festival 2025.
        </p>
      </div>
    </motion.div>
  );
}
