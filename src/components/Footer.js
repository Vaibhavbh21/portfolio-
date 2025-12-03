import React from 'react';
import { Github, Linkedin, Twitter, MessageCircle } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/Vaibhavbh21', label: 'GitHub', target: '_blank', rel: 'noopener noreferrer' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/vaibhav-bhardwaj-b1731117a/', label: 'LinkedIn', target: '_blank', rel: 'noopener noreferrer' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <MessageCircle size={20} />, href: 'https://wa.me/8851687228', label: 'WhatsApp', target: '_blank', rel: 'noopener noreferrer' },
  ];

  return (
    <footer className="relative border-t border-neon-purple/20 bg-dark-800/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold font-display mb-4 text-gradient">
              VAIBHAV BHARDWAJ
            </h3>
            <p className="text-gray-400 text-sm">
              Data Analyst | Learning Data Science & AI/ML
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/" className="hover:text-neon-purple transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-neon-purple transition-colors">About</a></li>
              <li><a href="/portfolio" className="hover:text-neon-purple transition-colors">Portfolio</a></li>
              <li><a href="/blog" className="hover:text-neon-purple transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  target={social.target || '_self'}
                  rel={social.rel || ''}
                  className="w-10 h-10 flex items-center justify-center border border-neon-purple/30 rounded-lg hover:bg-neon-purple/20 hover:border-neon-purple transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-neon-purple/20 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Vaibhav Bhardwaj. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

