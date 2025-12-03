import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-900 text-white relative overflow-hidden">
        {/* Advanced Background Effects */}
        <ParticleBackground />
        <div className="fixed inset-0 cyber-pattern opacity-30 pointer-events-none z-0"></div>
        <div className="fixed inset-0 cyber-grid opacity-20 pointer-events-none z-0"></div>
        
        {/* Custom Cursor */}
        <CustomCursor />
        
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;

