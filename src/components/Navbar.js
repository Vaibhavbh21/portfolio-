import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bot, Menu, X, ArrowUpRight } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = ['home', 'about', 'expertise', 'experience', 'skills', 'projects', 'contact'];
      const scrollPos = window.scrollY + 140;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sectionIds[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-2.5 bg-black/85 backdrop-blur-xl border-b border-white/15 shadow-xl'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-white/20 flex items-center justify-center group-hover:border-white/50 transition-colors shadow-glow-indigo">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-white text-base font-display">
                VAIBHAV <span className="text-zinc-400 font-normal">BHARDWAJ</span>
              </span>
              <span className="text-[10px] font-mono text-zinc-500 tracking-wider">
                AI ENGINEER
              </span>
            </div>
          </a>

          {/* Desktop Floating Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-950/90 border border-white/15 rounded-full px-3.5 py-1.5 backdrop-blur-xl shadow-2xl relative">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 z-10 ${
                    isActive ? 'text-black font-semibold' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      className="absolute inset-0 bg-white rounded-full z-[-1]"
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/918851687228"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-zinc-900 border border-white/20 hover:border-white/50 rounded-xl transition-all hover:scale-[1.02] shadow-sm"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-colors" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 bg-zinc-950 border border-white/15 rounded-2xl backdrop-blur-2xl flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/918851687228"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-center py-2.5 bg-white text-black font-semibold text-sm rounded-xl"
            >
              WhatsApp Connect
            </a>
          </div>
        )}
      </div>
    </motion.header>
  );
};

export default Navbar;
