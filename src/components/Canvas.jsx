import React, { useRef, useEffect } from 'react';

export default function Canvas({ config }) {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: null, y: null, isDown: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class
    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * config.speed;
        this.vy = (Math.random() - 0.5) * config.speed;
        this.size = Math.random() * config.size + 1;
        this.hue = Math.random() * 360;
        this.life = 1;
        this.maxLife = 1;
      }

      update() {
        const mouse = mouseRef.current;

        // Mouse interaction
        if (config.mouseInteraction && mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < config.mouseRadius) {
            const force = (config.mouseRadius - distance) / config.mouseRadius;
            const angle = Math.atan2(dy, dx);
            const pushForce = force * config.mouseForce * 0.5;
            
            this.vx += Math.cos(angle) * pushForce;
            this.vy += Math.sin(angle) * pushForce;

            // Add some color shift near mouse
            this.hue += force * 2;
          }
        }

        // Apply gravity
        this.vy += config.gravity;

        // Update position
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around edges instead of bounce for smoother effect
        if (this.x < -50) this.x = canvas.width + 50;
        if (this.x > canvas.width + 50) this.x = -50;
        if (this.y < -50) this.y = canvas.height + 50;
        if (this.y > canvas.height + 50) this.y = -50;

        // Damping
        this.vx *= 0.985;
        this.vy *= 0.985;

        // Random jitter for organic movement
        this.vx += (Math.random() - 0.5) * 0.05;
        this.vy += (Math.random() - 0.5) * 0.05;

        // Slowly shift hue over time
        this.hue += 0.1;
        if (this.hue > 360) this.hue = 0;
      }

      draw() {
        const alpha = config.trailLength > 0.5 ? 0.8 : 1;
        
        // Draw particle with glow effect
        ctx.shadowBlur = this.size * 2;
        ctx.shadowColor = `hsl(${this.hue + config.colorOffset}, ${config.saturation}%, ${config.lightness}%)`;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${this.hue + config.colorOffset}, ${config.saturation}%, ${config.lightness}%, ${alpha})`;
        ctx.fill();
        
        ctx.shadowBlur = 0;
      }
    }

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < config.particleCount; i++) {
        particlesRef.current.push(new Particle());
      }
    };
    initParticles();

    // Mouse tracking with click detection
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleMouseDown = (e) => {
      mouseRef.current.isDown = true;
      // Spawn particles on click
      for (let i = 0; i < 20; i++) {
        const particle = new Particle();
        particle.x = e.clientX;
        particle.y = e.clientY;
        particle.vx = (Math.random() - 0.5) * 10;
        particle.vy = (Math.random() - 0.5) * 10;
        if (particlesRef.current.length < config.particleCount * 1.5) {
          particlesRef.current.push(particle);
        }
      }
    };

    const handleMouseUp = () => {
      mouseRef.current.isDown = false;
    };
    
    const handleMouseLeave = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
      mouseRef.current.isDown = false;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Animation loop
    const animate = () => {
      // Trail effect
      ctx.fillStyle = `rgba(0, 0, 0, ${1 - config.trailLength})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw connections first (behind particles)
      if (config.showConnections) {
        particlesRef.current.forEach((p1, i) => {
          // Only check nearby particles for performance
          for (let j = i + 1; j < Math.min(i + 50, particlesRef.current.length); j++) {
            const p2 = particlesRef.current[j];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < config.connectionDistance) {
              const opacity = (1 - distance / config.connectionDistance) * 0.3;
              ctx.beginPath();
              ctx.strokeStyle = `rgba(${100 + config.colorOffset % 155}, ${150 + config.saturation}, ${200}, ${opacity})`;
              ctx.lineWidth = 1;
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        });
      }

      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        particle.update();
        particle.draw();

        // Remove extra particles gradually
        if (particlesRef.current.length > config.particleCount && Math.random() < 0.01) {
          particlesRef.current.splice(index, 1);
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationRef.current);
    };
  }, [config]);

  // Reinitialize particles when count changes significantly
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const currentCount = particlesRef.current.length;
    const targetCount = config.particleCount;

    if (Math.abs(currentCount - targetCount) > 100) {
      class Particle {
        constructor() {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.vx = (Math.random() - 0.5) * config.speed;
          this.vy = (Math.random() - 0.5) * config.speed;
          this.size = Math.random() * config.size + 1;
          this.hue = Math.random() * 360;
        }
      }

      particlesRef.current = [];
      for (let i = 0; i < targetCount; i++) {
        particlesRef.current.push(new Particle());
      }
    }
  }, [config.particleCount]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full bg-black cursor-crosshair"
    />
  );
}