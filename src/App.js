import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import NeuralBackground from './components/NeuralBackground';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white relative overflow-hidden selection:bg-white/20 selection:text-white">
        
        {/* Short 1.2s Entrance Preloader */}
        <Preloader />

        {/* Custom Desktop Cursor Effect */}
        <CustomCursor />

        {/* Connected Nodes Background Visual */}
        <NeuralBackground />

        {/* Minimal Floating Header */}
        <Navbar />

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Minimal Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
