import { useEffect, useRef } from "react";

export default function BackgroundParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles: Particle[] = [];
    const particleCount = Math.min(Math.floor(width * height / 15000), 100);

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        
        const colors = [
          'rgba(139, 92, 246, 0.4)', // Primary
          'rgba(6, 182, 212, 0.4)',  // Accent
          'rgba(34, 211, 238, 0.4)', // Neon blue
          'rgba(236, 72, 153, 0.2)'  // Pink
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > width) this.x = 0;
        else if (this.x < 0) this.x = width;
        if (this.y > height) this.y = 0;
        else if (this.y < 0) this.y = height;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Draw gradient aurora blobs
      const time = Date.now() * 0.0005;
      
      const drawBlob = (x: number, y: number, r: number, color: string) => {
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, r);
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, 'rgba(5, 8, 22, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      };

      // Gentle moving gradients
      ctx.globalCompositeOperation = 'screen';
      drawBlob(
        width * 0.3 + Math.sin(time * 0.5) * 200, 
        height * 0.3 + Math.cos(time * 0.3) * 200, 
        width * 0.4, 
        'rgba(139, 92, 246, 0.05)'
      );
      drawBlob(
        width * 0.7 + Math.cos(time * 0.4) * 200, 
        height * 0.6 + Math.sin(time * 0.6) * 200, 
        width * 0.4, 
        'rgba(6, 182, 212, 0.05)'
      );
      drawBlob(
        width * 0.5 + Math.sin(time * 0.7) * 100, 
        height * 0.8 + Math.cos(time * 0.5) * 100, 
        width * 0.5, 
        'rgba(236, 72, 153, 0.03)'
      );
      ctx.globalCompositeOperation = 'source-over';

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      // Draw connections
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.1 * (1 - distance / 100)})`;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
    />
  );
}
