import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedShapes = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const shapes = [
    { size: 100, color: 'from-neon-purple/10', position: { top: '20%', left: '15%' }, rotate: 45 },
    { size: 150, color: 'from-neon-orange/10', position: { top: '60%', right: '20%' }, rotate: -30 },
    { size: 80, color: 'from-neon-pink/10', position: { bottom: '30%', left: '25%' }, rotate: 60 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute w-${shape.size} h-${shape.size} bg-gradient-to-br ${shape.color} to-transparent rounded-lg border border-neon-purple/20 blur-sm`}
          style={{
            ...shape.position,
            width: shape.size,
            height: shape.size,
            rotate: shape.rotate,
          }}
          animate={{
            x: (mousePosition.x / window.innerWidth - 0.5) * 20 * (index + 1),
            y: (mousePosition.y / window.innerHeight - 0.5) * 20 * (index + 1),
            rotate: shape.rotate + (mousePosition.x / window.innerWidth) * 10,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        />
      ))}
      
      {/* Animated Lines */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute bg-gradient-to-r from-transparent via-neon-purple/20 to-transparent"
          style={{
            height: '1px',
            width: '200px',
            top: `${30 + i * 20}%`,
            left: '10%',
            transform: `rotate(${i * 15}deg)`,
          }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedShapes;
