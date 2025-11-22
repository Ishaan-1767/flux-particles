import React, { useState } from 'react';
import Canvas from './components/Canvas';
import ControlPanel from './components/ControlPanel';
import TopBar from './components/TopBar';
import { presets } from './utils/presets';

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [config, setConfig] = useState({
    particleCount: 300,
    speed: 1,
    size: 3,
    gravity: 0,
    trailLength: 0.5,
    mouseForce: 0.3,
    mouseRadius: 150,
    connectionDistance: 100,
    colorOffset: 200,
    saturation: 80,
    lightness: 70,
    mouseInteraction: true,
    showConnections: true,
  });

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Canvas config={config} />
      <TopBar particleCount={config.particleCount} />
      <ControlPanel
        config={config}
        setConfig={setConfig}
        presets={presets}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </div>
  );
}

export default App;