import React from 'react';
import { motion } from 'framer-motion';

export default function Slider({ label, value, min, max, step, onChange }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <label className="text-white text-sm font-medium">{label}</label>
        <motion.span
          key={value}
          initial={{ scale: 1.2, color: '#60a5fa' }}
          animate={{ scale: 1, color: '#ffffff' }}
          className="text-white text-sm font-mono"
        >
          {value}
        </motion.span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer 
                   [&::-webkit-slider-thumb]:appearance-none 
                   [&::-webkit-slider-thumb]:w-4 
                   [&::-webkit-slider-thumb]:h-4 
                   [&::-webkit-slider-thumb]:bg-blue-500 
                   [&::-webkit-slider-thumb]:rounded-full 
                   [&::-webkit-slider-thumb]:cursor-pointer
                   [&::-webkit-slider-thumb]:hover:bg-blue-400
                   [&::-webkit-slider-thumb]:transition-colors
                   [&::-moz-range-thumb]:w-4 
                   [&::-moz-range-thumb]:h-4 
                   [&::-moz-range-thumb]:bg-blue-500 
                   [&::-moz-range-thumb]:border-0
                   [&::-moz-range-thumb]:rounded-full 
                   [&::-moz-range-thumb]:cursor-pointer
                   [&::-moz-range-thumb]:hover:bg-blue-400
                   [&::-moz-range-thumb]:transition-colors"
      />
    </div>
  );
}