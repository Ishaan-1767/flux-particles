import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function TopBar({ particleCount }) {
  const [fps, setFps] = useState(60);

  useEffect(() => {
    let lastTime = performance.now();
    let frames = 0;

    const measureFPS = () => {
      frames++;
      const currentTime = performance.now();
      
      if (currentTime >= lastTime + 1000) {
        setFps(Math.round((frames * 1000) / (currentTime - lastTime)));
        frames = 0;
        lastTime = currentTime;
      }
      
      requestAnimationFrame(measureFPS);
    };

    const animationId = requestAnimationFrame(measureFPS);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="fixed top-4 right-4 z-40 flex gap-3"
    >
      {/* FPS Counter */}
      <div className="bg-black/40 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-white text-sm font-mono">
            {fps} FPS
          </span>
        </div>
      </div>

      {/* Particle Count */}
      <motion.div
        key={particleCount}
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        className="bg-black/40 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2"
      >
        <div className="flex items-center gap-2">
          <span className="text-white text-sm">✨</span>
          <span className="text-white text-sm font-mono">
            {particleCount} particles
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}