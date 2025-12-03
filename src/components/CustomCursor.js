import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Track mouse movement
    window.addEventListener('mousemove', updateCursor);

    // Check for hoverable elements
    const hoverables = document.querySelectorAll('a, button, .hoverable');
    hoverables.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      hoverables.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Main Cursor */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          transform: `translate(${position.x - 12}px, ${position.y - 12}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <div className={`w-6 h-6 rounded-full border-2 border-white transition-all duration-300 ${
          isHovering ? 'scale-150 bg-white/20' : 'scale-100'
        }`} />
      </div>

      {/* Cursor Follower */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      >
        <div className={`w-10 h-10 rounded-full bg-neon-purple/30 blur-sm transition-all duration-500 ${
          isHovering ? 'scale-200 opacity-50' : 'scale-100 opacity-30'
        }`} />
      </div>

      {/* Cursor Trails */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9997]"
        style={{
          transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
          transition: 'transform 0.5s ease-out',
        }}
      >
        <div className="w-2 h-2 rounded-full bg-neon-orange/40 blur-xs" />
      </div>
    </>
  );
};

export default CustomCursor;
