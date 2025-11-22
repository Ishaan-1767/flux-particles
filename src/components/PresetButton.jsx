import React from 'react';
import { motion } from 'framer-motion';

export default function PresetButton({ preset, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
      className="relative group overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300"></div>
      
      {/* Border */}
      <div className="absolute inset-0 rounded-xl border border-white/10 group-hover:border-blue-400/30 transition-all duration-300"></div>
      
      {/* Content */}
      <div className="relative px-4 py-4 flex flex-col items-center gap-2">
        <span className="text-2xl">{preset.icon}</span>
        <span className="text-white text-sm font-medium">{preset.name}</span>
      </div>

      {/* Hover shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6 }}
      />
    </motion.button>
  );
}