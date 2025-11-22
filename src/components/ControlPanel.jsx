import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slider from './Slider';
import PresetButton from './PresetButton';

export default function ControlPanel({ config, setConfig, presets, isOpen, setIsOpen }) {
  const handlePresetClick = (preset) => {
    setConfig(preset.config);
  };

  return (
    <>
      {/* Toggle Button - Fixed Position */}
      {!isOpen && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => setIsOpen(true)}
          className="fixed top-6 left-6 z-50 group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative">
            {/* Background with blur */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl rounded-2xl border border-white/10"></div>
            
            {/* Content */}
            <div className="relative px-5 py-3 flex items-center gap-3">
              {/* Icon */}
              <div className="text-white text-xl">⚙</div>
              
              {/* Text */}
              <span className="text-white font-medium">Controls</span>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-purple-400/0 group-hover:from-blue-400/10 group-hover:to-purple-400/10 rounded-2xl transition-all duration-300"></div>
            </div>
          </div>
        </motion.button>
      )}

      {/* Control Panel - Redesigned */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ x: -400, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -400, opacity: 0 }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 left-0 h-full w-96 z-40 flex flex-col"
            >
              {/* Glassmorphic background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-black/95 backdrop-blur-2xl border-r border-white/10"></div>
              
              {/* Content */}
              <div className="relative flex flex-col h-full">
                {/* Header with Close Button */}
                <div className="px-8 pt-8 pb-6 border-b border-white/5">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Particle Studio
                      </h2>
                      <p className="text-sm text-gray-400">
                        Customize your particle system
                      </p>
                    </div>
                    
                    {/* Close Button - Better positioned */}
                    <motion.button
                      onClick={() => setIsOpen(false)}
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors"
                    >
                      <span className="text-lg">✕</span>
                    </motion.button>
                  </div>
                </div>

                {/* Scrollable content */}
                <div className="flex-1 overflow-y-auto px-8 py-6 space-y-8 custom-scrollbar">
                  {/* Presets Section */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                      Presets
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {presets.map((preset) => (
                        <PresetButton
                          key={preset.name}
                          preset={preset}
                          onClick={() => handlePresetClick(preset)}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-white/10"></div>
                    </div>
                    <div className="relative flex justify-center">
                      <span className="px-3 text-xs text-gray-500 bg-gray-900/50 rounded-full">
                        FINE TUNE
                      </span>
                    </div>
                  </div>

                  {/* Controls Section */}
                  <div className="space-y-6">
                    <Slider
                      label="Particle Count"
                      value={config.particleCount}
                      min={50}
                      max={1000}
                      step={10}
                      onChange={(value) => setConfig({ ...config, particleCount: value })}
                    />

                    <Slider
                      label="Speed"
                      value={config.speed}
                      min={0.1}
                      max={5}
                      step={0.1}
                      onChange={(value) => setConfig({ ...config, speed: value })}
                    />

                    <Slider
                      label="Size"
                      value={config.size}
                      min={1}
                      max={10}
                      step={0.5}
                      onChange={(value) => setConfig({ ...config, size: value })}
                    />

                    <Slider
                      label="Gravity"
                      value={config.gravity}
                      min={-0.5}
                      max={0.5}
                      step={0.01}
                      onChange={(value) => setConfig({ ...config, gravity: value })}
                    />

                    <Slider
                      label="Trail Length"
                      value={config.trailLength}
                      min={0}
                      max={0.95}
                      step={0.05}
                      onChange={(value) => setConfig({ ...config, trailLength: value })}
                    />

                    <Slider
                      label="Mouse Force"
                      value={config.mouseForce}
                      min={-1}
                      max={1}
                      step={0.1}
                      onChange={(value) => setConfig({ ...config, mouseForce: value })}
                    />

                    <Slider
                      label="Mouse Radius"
                      value={config.mouseRadius}
                      min={50}
                      max={300}
                      step={10}
                      onChange={(value) => setConfig({ ...config, mouseRadius: value })}
                    />

                    <Slider
                      label="Connection Distance"
                      value={config.connectionDistance}
                      min={0}
                      max={200}
                      step={10}
                      onChange={(value) => setConfig({ ...config, connectionDistance: value })}
                    />

                    {/* Color Section */}
                    <div className="pt-6 border-t border-white/5">
                      <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-5">
                        Colors
                      </h4>
                      
                      <div className="space-y-6">
                        <Slider
                          label="Hue"
                          value={config.colorOffset}
                          min={0}
                          max={360}
                          step={1}
                          onChange={(value) => setConfig({ ...config, colorOffset: value })}
                        />

                        <Slider
                          label="Saturation"
                          value={config.saturation}
                          min={0}
                          max={100}
                          step={5}
                          onChange={(value) => setConfig({ ...config, saturation: value })}
                        />

                        <Slider
                          label="Lightness"
                          value={config.lightness}
                          min={0}
                          max={100}
                          step={5}
                          onChange={(value) => setConfig({ ...config, lightness: value })}
                        />
                      </div>
                    </div>

                    {/* Toggle Switches - More spacing */}
                    <div className="pt-6 border-t border-white/5">
                      <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-5">
                        Options
                      </h4>
                      
                      <div className="space-y-4">
                        <label className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                          <span className="text-white text-sm font-medium">Mouse Interaction</span>
                          <div className="relative">
                            <input
                              type="checkbox"
                              checked={config.mouseInteraction}
                              onChange={(e) => setConfig({ ...config, mouseInteraction: e.target.checked })}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:bg-gradient-to-r peer-checked:from-blue-500 peer-checked:to-purple-500 transition-all"></div>
                            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
                          </div>
                        </label>

                        <label className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                          <span className="text-white text-sm font-medium">Show Connections</span>
                          <div className="relative">
                            <input
                              type="checkbox"
                              checked={config.showConnections}
                              onChange={(e) => setConfig({ ...config, showConnections: e.target.checked })}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:bg-gradient-to-r peer-checked:from-blue-500 peer-checked:to-purple-500 transition-all"></div>
                            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-8 py-5 border-t border-white/5">
                  <p className="text-xs text-gray-500 text-center">
                    Made with ❤️ using React & Framer Motion
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30"
            />
          </>
        )}
      </AnimatePresence>

      {/* Custom scrollbar styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </>
  );
}