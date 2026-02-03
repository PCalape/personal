"use client";

import { useEffect, useRef } from "react";

const FPS = 60;
const frameInterval = 1000 / FPS; // ~16.67ms for 60fps

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  size: number;
  color: string;
  trailPoints: Array<{x: number, y: number, opacity: number}>;
  isActive: boolean;
  update: (deltaTime: number, canvasWidth: number, canvasHeight: number) => void;
  draw: (context: CanvasRenderingContext2D) => void;
  reset: (canvasWidth: number, canvasHeight: number) => void;
}

class MeteorStar implements ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  size: number;
  color: string;
  trailPoints: Array<{x: number, y: number, opacity: number}>;
  maxTrailLength: number;
  fadeSpeed: number;
  isActive: boolean;

  constructor(canvasWidth: number) {
    this.length = 30 + Math.random() * 100;
    this.speed = 2 + Math.random() * 6;
    this.angle = Math.PI / 6 + Math.random() * (Math.PI / 6);
    this.size = 1.2 + Math.random() * 2.5;
    const colorRand = Math.random();
    if (colorRand > 0.85) this.color = "#60a5fa"; // Blue
    else if (colorRand > 0.7) this.color = "#fbbf24"; // Golden
    else if (colorRand > 0.55) this.color = "#f472b6"; // Pink
    else this.color = "white";
    this.maxTrailLength = Math.floor(this.length / 2.5);
    this.fadeSpeed = 0.008 + Math.random() * 0.015;
    this.trailPoints = [];
    this.isActive = false;
    this.opacity = 0;
    this.x = 0;
    this.y = 0;
    this.reset(canvasWidth);
  }

  reset(canvasWidth: number) {
    this.x = Math.random() * canvasWidth;
    this.y = -50 - Math.random() * 100;
    
    this.opacity = 0;
    this.trailPoints = [];
  }

  update(deltaTime: number, canvasWidth: number, canvasHeight: number) {
    if (!this.isActive && Math.random() > 0.995) {
      this.isActive = true;
    }

    if (!this.isActive) return;

    this.trailPoints.unshift({x: this.x, y: this.y, opacity: this.opacity});
    if (this.trailPoints.length > this.maxTrailLength) {
      this.trailPoints.pop();
    }

    this.x += Math.cos(this.angle) * this.speed * (deltaTime / frameInterval);
    this.y += Math.sin(this.angle) * this.speed * (deltaTime / frameInterval);

    const distanceTraveled = Math.sqrt((this.x - (this.x - Math.cos(this.angle) * this.speed * 10)) ** 2 + 
                                      (this.y - (this.y - Math.sin(this.angle) * this.speed * 10)) ** 2);
    const maxTravelDistance = Math.sqrt(canvasWidth * canvasWidth + canvasHeight * canvasHeight) * 0.8;
    const progress = Math.min(distanceTraveled / maxTravelDistance, 1);
    
    if (progress < 0.15) {
      this.opacity = Math.min(progress * 6.67, 1);
    } else if (progress > 0.75) {
      this.opacity = Math.max((1 - progress) * 4, 0);
    } else {
      this.opacity = Math.min(this.opacity + this.fadeSpeed, 1);
    }

    if (this.x > canvasWidth + 150 || this.y > canvasHeight + 150 || 
        this.x < -150 || this.opacity <= 0.01) {
      this.reset(canvasWidth);
    }
  }

  draw(context: CanvasRenderingContext2D) {
    if (!this.isActive || this.opacity <= 0) return;

    this.trailPoints.forEach((point, index) => {
      const trailOpacity = point.opacity * (1 - index / this.maxTrailLength) * 0.6;
      if (trailOpacity > 0.01) {
        context.globalAlpha = trailOpacity;
        context.beginPath();
        context.arc(point.x, point.y, this.size * (1 - index / this.maxTrailLength * 0.8), 0, 2 * Math.PI);
        context.fillStyle = this.color;
        context.fill();
      }
    });

    const gradient = context.createRadialGradient(
      this.x, this.y, 0,
      this.x, this.y, this.size * 3
    );
    gradient.addColorStop(0, this.color);
    gradient.addColorStop(0.4, this.color === "white" ? "rgba(255, 255, 255, 0.8)" : "rgba(96, 165, 250, 0.8)");
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

    context.globalAlpha = this.opacity;
    context.beginPath();
    context.arc(this.x, this.y, this.size * 3, 0, 2 * Math.PI);
    context.fillStyle = gradient;
    context.fill();

    context.globalAlpha = this.opacity;
    context.beginPath();
    context.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    context.fillStyle = this.color;
    context.fill();
  }
}

export default function ShootingStarsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const starsRef = useRef<ShootingStar[]>([]);
  const lastFrameTimeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initializeStars = () => {
      starsRef.current = [];
      
      for (let i = 0; i < 12; i++) {
        starsRef.current.push(new MeteorStar(canvas.width));
      }
    };

    const animate = (currentTime: number) => {
      const deltaTime = Math.min(currentTime - lastFrameTimeRef.current, frameInterval * 2);
      lastFrameTimeRef.current = currentTime;

      context.clearRect(0, 0, canvas.width, canvas.height);

      starsRef.current.forEach((star) => {
        star.update(deltaTime, canvas.width, canvas.height);
        star.draw(context);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initializeStars();
    animationRef.current = requestAnimationFrame(animate);

    const handleResize = () => {
      resizeCanvas();
      initializeStars();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: "transparent" }}
    />
  );
}