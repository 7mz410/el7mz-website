import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Comics from './pages/Comics';
import Research from './pages/Research';
import Phd from './pages/Phd';
import MaThesis from './pages/MaThesis';
import CanvasForSolidarity from './pages/CanvasForSolidarity';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/comics" element={<Comics />} />
              <Route path="/research" element={<Research />} />
              <Route path="/phd" element={<Phd />} />
              <Route path="/ma-thesis" element={<MaThesis />} />
              <Route path="/Project404" element={<CanvasForSolidarity />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
