import React from 'react';
import { Bot, Github, Linkedin, Mail, MessageCircle, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/15 flex items-center justify-center">
            <Bot className="w-4 h-4 text-white" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white tracking-tight">VAIBHAV BHARDWAJ</h4>
            <p className="text-xs text-zinc-500 font-mono">AI Engineer | GenAI & Automation</p>
          </div>
        </div>

        {/* Center Links */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/Vaibhavbh21"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/30 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/vaibhav-bhardwaj-b1731117a"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/30 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:Vaibhavbhardwaj1942@gmail.com"
            className="w-9 h-9 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/30 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="https://wa.me/918851687228"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/30 transition-colors"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
        </div>

        {/* Right Scroll Top */}
        <div className="flex items-center gap-4 text-xs text-zinc-500 font-mono">
          <span>© {new Date().getFullYear()} Vaibhav Bhardwaj</span>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 transition-colors"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
