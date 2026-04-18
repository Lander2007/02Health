"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  color: string;
  opacity: number;
  targetOpacity: number;
  isDash: boolean;
}

const COLORS = [
  "#0047AB",
  "#008080",
  "#06b6d4",
  "#14b8a6",
  "#0891b2",
  "#0e7490",
  "#0369a1",
  "#0284c7",
  "#0ea5e9",
  "#a855f7",
];

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000, isActive: false });
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      console.log("Canvas not found");
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      console.log("Context not found");
      return;
    }

    console.log("ParticleBackground initialized");

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
        console.log(`Canvas resized: ${canvas.width}x${canvas.height}`);
      }
    };

    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < 220; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2.5 + 1.5,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.03,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          opacity: 0,
          targetOpacity: 0,
          isDash: Math.random() > 0.5,
        });
      }
      console.log(`Initialized ${particlesRef.current.length} particles`);
    };

    resizeCanvas();
    initParticles();
    
    window.addEventListener("resize", () => {
      resizeCanvas();
      initParticles();
    });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        isActive: true,
      };
    };

    const handleTouchMove = (e: TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      if (touch) {
        mouseRef.current = {
          x: touch.clientX - rect.left,
          y: touch.clientY - rect.top,
          isActive: true,
        };
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current.isActive = false;
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("touchmove", handleTouchMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    let frameCount = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const revealRadius = 150;
      const repulsionRadius = 150;
      const repulsionStrength = 0.8;

      particlesRef.current.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        particle.rotation += particle.rotationSpeed;

        const dx = particle.x - mouseRef.current.x;
        const dy = particle.y - mouseRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (mouseRef.current.isActive && distance < revealRadius) {
          const fadeStart = revealRadius * 0.2;
          if (distance < fadeStart) {
            particle.targetOpacity = 0.9;
          } else {
            particle.targetOpacity = 0.9 * (1 - (distance - fadeStart) / (revealRadius - fadeStart));
          }

          if (distance < repulsionRadius && distance > 0) {
            const force = (1 - distance / repulsionRadius) * repulsionStrength;
            particle.x += (dx / distance) * force;
            particle.y += (dy / distance) * force;
          }
        } else {
          particle.targetOpacity = 0;
        }

        particle.opacity += (particle.targetOpacity - particle.opacity) * 0.15;

        if (particle.opacity > 0.01) {
          ctx.save();
          ctx.globalAlpha = particle.opacity;
          ctx.fillStyle = particle.color;
          ctx.translate(particle.x, particle.y);
          ctx.rotate(particle.rotation);

          if (particle.isDash) {
            const dashLength = particle.size * 4;
            ctx.fillRect(-dashLength / 2, -particle.size / 3, dashLength, particle.size / 1.5);
          } else {
            ctx.beginPath();
            ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
            ctx.fill();
          }

          ctx.restore();
        }
      });

      frameCount++;
      if (frameCount % 60 === 0 && mouseRef.current.isActive) {
        console.log(`Mouse at: ${mouseRef.current.x}, ${mouseRef.current.y}`);
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}
