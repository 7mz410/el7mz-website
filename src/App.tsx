import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Sol from './pages/Sol';
import Research from './pages/Research';
import Phd from './pages/Phd';
import PalestinePavillion from './pages/PalestinePavillion';
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
              <Route path="/sol" element={<Sol />} />
              <Route path="/research" element={<Research />} />
              <Route path="/phd" element={<Phd />} />
              <Route path="/palestine-pavillion-at-cannes-25" element={<PalestinePavillion />} />
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
