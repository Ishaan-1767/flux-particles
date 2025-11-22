# ✨ Flux Particles

An interactive particle system playground built with React, Tailwind CSS, and Framer Motion. Create mesmerizing particle animations with real-time physics and customizable parameters.

[![Live Demo](https://img.shields.io/badge/demo-live-success.svg)](https://flux-particles.vercel.app/)
![React](https://img.shields.io/badge/react-18.x-blue.svg)
![Tailwind CSS](https://img.shields.io/badge/tailwind-4.x-38bdf8.svg)
![Framer Motion](https://img.shields.io/badge/framer--motion-latest-ff0055.svg)

## 🌐 Live Demo

**[View Live Demo →](https://flux-particles.vercel.app/)**

## 🎯 About

Flux Particles is a web-based particle system that lets you explore the beauty of generative art and physics simulations. Whether you're a developer learning canvas animations, a designer seeking inspiration, or just someone who loves playing with interactive visuals, this tool offers an intuitive interface to create stunning particle effects.

### Why I Built This

- **Portfolio Showcase**: To demonstrate proficiency in React, modern CSS, and canvas-based animations
- **Learning Project**: To understand particle physics, canvas rendering, and performance optimization
- **Creative Tool**: To provide an interactive playground for exploring generative art
- **Open Source**: To share knowledge and help others learn web-based animation techniques

## ✨ Features

### 🎨 Visual Effects
- **Real-time particle rendering** with smooth 60 FPS performance
- **Dynamic color system** with HSL controls for infinite color combinations
- **Connection networks** that visualize relationships between particles
- **Trail effects** for motion blur and ethereal aesthetics
- **Glow effects** that make particles luminous and alive

### 🎮 Interactive Controls
- **Mouse interaction** - Attract or repel particles with your cursor
- **Click to spawn** - Create particle bursts wherever you click
- **Real-time adjustments** - All parameters update instantly
- **Preset modes** - 6 pre-configured visual styles to explore

### 🎛️ Customization
- **Particle count**: 50 - 1000 particles
- **Physics controls**: Speed, gravity, damping
- **Visual parameters**: Size, trails, connections
- **Color controls**: Hue, saturation, lightness
- **Mouse settings**: Force strength and interaction radius

## 🚀 Demo

**Try it live:** [https://flux-particles.vercel.app/](https://flux-particles.vercel.app/)

### Preset Modes

| Preset | Description |
|--------|-------------|
| ⭐ **Starfield** | Gentle floating particles with subtle connections |
| 🎆 **Fireworks** | Explosive bursts with colorful trails |
| 🌌 **Aurora** | Flowing waves of colored light |
| 🌀 **Black Hole** | Particles spiral toward your cursor |
| ❄️ **Snow** | Peaceful falling particles |
| 🌠 **Galaxy** | Swirling cosmic formations |

## 🛠️ Tech Stack

### Core Technologies
- **React 18** - Component-based UI architecture
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework
- **Framer Motion** - Production-ready animation library

### Key Features
- **HTML5 Canvas API** - High-performance 2D rendering
- **RequestAnimationFrame** - Smooth 60 FPS animations
- **Custom Physics Engine** - Particle behavior and interactions
- **Glassmorphism UI** - Modern backdrop-blur design

## 📦 Installation

### Prerequisites
- Node.js 16.x or higher
- npm or yarn

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/ishaansingh2219/flux-particles.git
cd flux-particles
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:5173
```

### Build for Production
```bash
npm run build
```

The optimized build will be in the `dist/` folder.

## 🎨 Usage

### Basic Controls

1. **Open the control panel** - Click the "Controls" button in the top-left
2. **Try a preset** - Click any preset to see different particle behaviors
3. **Adjust parameters** - Use sliders to fine-tune the effect
4. **Interact with particles** - Move your mouse and click on the canvas

### Tips for Best Results

- **For performance**: Keep particle count under 500 on slower devices
- **For dramatic effects**: Increase trail length and enable connections
- **For mouse interaction**: Try negative mouse force for repulsion effects
- **For color exploration**: Adjust hue while keeping saturation and lightness balanced

### Understanding the Controls

#### Mouse Interaction Toggle
- **ON**: Particles react to your cursor position
- **Positive Mouse Force**: Particles are attracted to cursor
- **Negative Mouse Force**: Particles are repelled from cursor

#### Show Connections Toggle
- **ON**: Draws lines between nearby particles
- Creates a constellation/network effect
- Adjust "Connection Distance" to control the effect

## 📁 Project Structure
```
flux-particles/
├── public/
│   ├── favicon.svg          # Custom particle-themed icon
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Canvas.jsx           # Main particle renderer
│   │   ├── ControlPanel.jsx     # Sidebar with controls
│   │   ├── TopBar.jsx            # FPS counter and stats
│   │   ├── Slider.jsx            # Custom slider component
│   │   └── PresetButton.jsx      # Preset selection buttons
│   ├── utils/
│   │   ├── particleSystem.js    # Particle physics utilities
│   │   └── presets.js            # Pre-configured settings
│   ├── App.jsx                   # Main app component
│   ├── App.css                   # Custom styles
│   ├── index.css                 # Tailwind imports
│   └── main.jsx                  # App entry point
├── .gitignore
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

## 🔧 Configuration

### Adding Custom Presets

Edit `src/utils/presets.js`:
```javascript
{
  name: 'Your Preset',
  icon: '🎨',
  config: {
    particleCount: 500,
    speed: 1.5,
    size: 3,
    gravity: 0.05,
    trailLength: 0.7,
    mouseForce: 0.4,
    mouseRadius: 200,
    connectionDistance: 100,
    colorOffset: 180,
    saturation: 80,
    lightness: 60,
    mouseInteraction: true,
    showConnections: true,
  },
}
```

### Performance Optimization

- Reduce particle count for slower devices
- Disable connections for better FPS
- Lower trail length for faster rendering
- Adjust connection distance to reduce calculations

## 🎓 What I Learned

### Technical Skills
- **Canvas API mastery** - Efficient rendering and animation loops
- **Performance optimization** - Managing thousands of animated objects at 60 FPS
- **State management** - Handling complex configuration changes in React
- **Modern CSS** - Glassmorphism, gradients, and smooth transitions
- **Animation principles** - Easing, timing, and visual feedback

### Best Practices
- Component composition and reusability
- Separation of concerns (UI vs. logic)
- Responsive design patterns
- Accessible UI controls
- Code organization and documentation

## 🚀 Future Enhancements

- [ ] Export animations as GIF or video
- [ ] Save custom presets to localStorage
- [ ] Sound-reactive mode using Web Audio API
- [ ] Mobile touch gestures
- [ ] WebGL renderer for 10,000+ particles
- [ ] Particle emitters and custom shapes
- [ ] Keyboard shortcuts
- [ ] Share configurations via URL parameters
- [ ] Dark/light theme toggle for UI
- [ ] Particle collision detection

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Ishaan Singh**
- GitHub: [@ishaansingh2219](https://github.com/ishaansingh2219)
- LinkedIn: [Ishaan Singh](https://www.linkedin.com/in/ishaansingh2219)
- Email: ishaansingh2219@gmail.com

## 🙏 Acknowledgments

- Inspired by generative art and creative coding communities
- Built with amazing open-source technologies
- Thanks to everyone who provided feedback and suggestions

## 📧 Contact

Have questions or suggestions? Feel free to reach out!

- **Email**: ishaansingh2219@gmail.com
- **LinkedIn**: [Ishaan Singh](https://www.linkedin.com/in/ishaansingh2219)
- **Live Demo**: [flux-particles.vercel.app](https://flux-particles.vercel.app/)

---

**Made with ❤️ using React, Tailwind CSS, and Framer Motion**

*If you found this project helpful, consider giving it a ⭐ on GitHub!*