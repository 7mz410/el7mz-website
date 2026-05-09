import { motion } from 'framer-motion';
import { Download, BookOpen } from 'lucide-react';

export default function Comics() {
  const comics = [
    {
      title: "Dal-IL - English Issue 000",
      file: "/docs/Dal-IL - english issue 000.pdf",
      description: "Explore the first issue of the Dal-IL comic series in English."
    },
    {
      title: "Not Numbers",
      file: "/docs/not numbers - .pdf",
      description: "A graphic narrative exploring stories beyond statistics."
    }
  ];

  return (
    <motion.div 
      className="section-padding container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="section-header">Comics & Graphic Narratives</h1>
      
      <div className="grid-display mt-5">
        {comics.map((comic, index) => (
          <div key={index} className="project-card-smv glass-panel" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{comic.title}</h3>
            <p className="bio-p" style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
              {comic.description}
            </p>
            <div className="action-btns" style={{ marginTop: 'auto' }}>
              <a href={comic.file} target="_blank" rel="noreferrer" className="smv-btn primary">
                <BookOpen size={18} /> Read Online
              </a>
              <a href={comic.file} download className="smv-btn outline">
                <Download size={18} /> Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
