import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const onMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('.bento-card')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Small Glowing Center Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-white rounded-full pointer-events-none mix-blend-difference"
        animate={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
          scale: isHovered ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 800, damping: 35, mass: 0.1 }}
      />

      {/* Trailing Aura Glow Ring */}
      <motion.div
        className="fixed top-0 left-0 w-9 h-9 rounded-full border border-indigo-400/40 bg-indigo-500/10 pointer-events-none"
        animate={{
          x: mousePosition.x - 18,
          y: mousePosition.y - 18,
          scale: isHovered ? 1.8 : 1,
          borderColor: isHovered ? 'rgba(168, 85, 247, 0.6)' : 'rgba(99, 102, 241, 0.3)',
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 25, mass: 0.2 }}
      />
    </div>
  );
};

export default CustomCursor;
