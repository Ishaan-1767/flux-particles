// Utility functions for particle system

export class Particle {
  constructor(x, y, config) {
    this.x = x;
    this.y = y;
    this.vx = (Math.random() - 0.5) * config.speed;
    this.vy = (Math.random() - 0.5) * config.speed;
    this.size = Math.random() * config.size + 2;
    this.hue = Math.random() * 360;
    this.life = 1;
  }

  update(config, canvasWidth, canvasHeight, mouseX, mouseY) {
    // Mouse interaction
    if (config.mouseInteraction && mouseX !== null && mouseY !== null) {
      const dx = mouseX - this.x;
      const dy = mouseY - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < config.mouseRadius) {
        const force = (config.mouseRadius - distance) / config.mouseRadius;
        const angle = Math.atan2(dy, dx);
        this.vx += Math.cos(angle) * force * config.mouseForce;
        this.vy += Math.sin(angle) * force * config.mouseForce;
      }
    }

    // Apply gravity
    this.vy += config.gravity;

    // Update position
    this.x += this.vx;
    this.y += this.vy;

    // Bounce off edges
    if (this.x < 0 || this.x > canvasWidth) this.vx *= -0.8;
    if (this.y < 0 || this.y > canvasHeight) this.vy *= -0.8;

    // Keep in bounds
    this.x = Math.max(0, Math.min(canvasWidth, this.x));
    this.y = Math.max(0, Math.min(canvasHeight, this.y));

    // Damping
    this.vx *= 0.99;
    this.vy *= 0.99;
  }

  draw(ctx, config) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `hsl(${this.hue + config.colorOffset}, ${config.saturation}%, ${config.lightness}%)`;
    ctx.fill();
  }
}

export function drawConnections(particles, ctx, config) {
  if (!config.showConnections) return;

  particles.forEach((p1, i) => {
    particles.slice(i + 1).forEach(p2 => {
      const dx = p1.x - p2.x;
      const dy = p1.y - p2.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < config.connectionDistance) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / config.connectionDistance})`;
        ctx.lineWidth = 0.5;
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }
    });
  });
}

export function createParticles(count, canvasWidth, canvasHeight, config) {
  const particles = [];
  for (let i = 0; i < count; i++) {
    particles.push(
      new Particle(
        Math.random() * canvasWidth,
        Math.random() * canvasHeight,
        config
      )
    );
  }
  return particles;
}