"use client";

import { useEffect, useRef } from "react";

const FPS = 60;
const frameInterval = 1000 / FPS; // ~16.67ms for 60fps

interface Star {
  x: number;
  y: number;
  angle: number;
  distance: number;
  speed: number;
  size: number;
  color: string;
  alpha: number;
  maxDistance: number;
  update: (centerX: number, centerY: number, deltaTime: number, canvasWidth: number, canvasHeight: number) => void;
  draw: (context: CanvasRenderingContext2D) => void;
}

class RadialStar implements Star {
  x: number;
  y: number;
  angle: number;
  distance: number;
  speed: number;
  size: number;
  color: string;
  alpha: number;
  maxDistance: number;
  initialSize: number;
  maxSize: number;

  constructor(centerX: number, centerY: number, maxDistance: number) {
    this.angle = Math.random() * 2 * Math.PI;
    this.distance = 0;
    this.speed = 0.5 + Math.random() * 2;
    this.initialSize = 0.2 + Math.random() * 0.8;
    this.maxSize = 1 + Math.random() * 2;
    this.size = this.initialSize;
    this.color = "white";
    this.alpha = 0;
    this.maxDistance = maxDistance;
    this.x = centerX;
    this.y = centerY;
  }

  update(centerX: number, centerY: number, deltaTime: number, canvasWidth: number, canvasHeight: number) {
    this.distance += this.speed * (deltaTime / frameInterval);
    
    this.x = centerX + Math.cos(this.angle) * this.distance;
    this.y = centerY + Math.sin(this.angle) * this.distance;
    
    const progress = Math.min(this.distance / this.maxDistance, 1);
    this.size = this.initialSize + (this.maxSize - this.initialSize) * progress;
    
    if (progress < 0.2) {
      this.alpha = progress * 5;
    } else if (progress > 0.8) {
      this.alpha = (1 - progress) * 5;
    } else {
      this.alpha = 1;
    }
    
    if (this.distance > this.maxDistance || 
        this.x < -50 || this.x > canvasWidth + 50 || 
        this.y < -50 || this.y > canvasHeight + 50) {
      this.distance = 0;
      this.x = centerX;
      this.y = centerY;
      this.angle = Math.random() * 2 * Math.PI;
      this.alpha = 0;
    }
  }

  draw(context: CanvasRenderingContext2D) {
    context.globalAlpha = Math.max(0, Math.min(1, this.alpha));
    context.beginPath();
    context.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    context.fillStyle = this.color;
    context.fill();
  }
}

class RadialTrailStar implements Star {
  x: number;
  y: number;
  angle: number;
  distance: number;
  speed: number;
  size: number;
  color: string;
  alpha: number;
  maxDistance: number;
  trailLength: number;
  trailPoints: Array<{x: number, y: number, alpha: number}>;

  constructor(centerX: number, centerY: number, maxDistance: number) {
    this.angle = Math.random() * 2 * Math.PI;
    this.distance = 0;
    this.speed = 1 + Math.random() * 1.5;
    this.size = 0.8 + Math.random() * 1.2;
    this.color = "white";
    this.alpha = 0;
    this.maxDistance = maxDistance;
    this.x = centerX;
    this.y = centerY;
    this.trailLength = 8;
    this.trailPoints = [];
  }

  update(centerX: number, centerY: number, deltaTime: number, canvasWidth: number, canvasHeight: number) {
    this.distance += this.speed * (deltaTime / frameInterval);
    
    const newX = centerX + Math.cos(this.angle) * this.distance;
    const newY = centerY + Math.sin(this.angle) * this.distance;
    
    this.trailPoints.unshift({x: this.x, y: this.y, alpha: this.alpha});
    if (this.trailPoints.length > this.trailLength) {
      this.trailPoints.pop();
    }
    
    this.x = newX;
    this.y = newY;
    
    const progress = Math.min(this.distance / this.maxDistance, 1);
    
    if (progress < 0.1) {
      this.alpha = progress * 10;
    } else if (progress > 0.9) {
      this.alpha = (1 - progress) * 10;
    } else {
      this.alpha = 1;
    }
    
    if (this.distance > this.maxDistance || 
        this.x < -50 || this.x > canvasWidth + 50 || 
        this.y < -50 || this.y > canvasHeight + 50) {
      this.distance = 0;
      this.x = centerX;
      this.y = centerY;
      this.angle = Math.random() * 2 * Math.PI;
      this.alpha = 0;
      this.trailPoints = [];
    }
  }

  draw(context: CanvasRenderingContext2D) {
    this.trailPoints.forEach((point, index) => {
      const trailAlpha = point.alpha * (1 - index / this.trailLength) * 0.5;
      context.globalAlpha = Math.max(0, Math.min(1, trailAlpha));
      context.beginPath();
      context.arc(point.x, point.y, this.size * (1 - index / this.trailLength), 0, 2 * Math.PI);
      context.fillStyle = this.color;
      context.fill();
    });
    
    context.globalAlpha = Math.max(0, Math.min(1, this.alpha));
    context.beginPath();
    context.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    context.fillStyle = this.color;
    context.fill();
  }
}

export default function RadialStarsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const starsRef = useRef<Star[]>([]);
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
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const maxDistance = Math.max(canvas.width, canvas.height) * 0.8;

      for (let i = 0; i < 80; i++) {
        starsRef.current.push(new RadialStar(centerX, centerY, maxDistance));
      }

      for (let i = 0; i < 15; i++) {
        starsRef.current.push(new RadialTrailStar(centerX, centerY, maxDistance));
      }
    };

    const animate = (currentTime: number) => {
      const deltaTime = Math.min(currentTime - lastFrameTimeRef.current, frameInterval * 2);
      lastFrameTimeRef.current = currentTime;

      context.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      starsRef.current.forEach((star) => {
        star.update(centerX, centerY, deltaTime, canvas.width, canvas.height);
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