"use client";

import { useEffect, useRef } from "react";

const FPS = 60;
const frameInterval = 1000 / FPS; // ~16.67ms for 60fps

interface Star {
  centerX: number;
  centerY: number;
  angle: number;
  radius: number;
  orbitRadius: number;
  color: string;
  speed: number;
  size: number;
  update: (deltaTime: number) => void;
  draw: (context: CanvasRenderingContext2D) => void;
}

class CircularNearStar implements Star {
  centerX: number;
  centerY: number;
  angle: number;
  radius: number;
  orbitRadius: number;
  color: string;
  speed: number;
  size: number;

  constructor(centerX: number, centerY: number, orbitRadius: number) {
    this.centerX = centerX;
    this.centerY = centerY;
    this.angle = Math.random() * 2 * Math.PI;
    this.orbitRadius = orbitRadius;
    this.radius = 1.5;
    this.color = "white";
    this.speed = 0.01;
    this.size = 1.5;
  }

  update(deltaTime: number) {
    this.angle += this.speed * (deltaTime / frameInterval);
    if (this.angle > 2 * Math.PI) {
      this.angle -= 2 * Math.PI;
    }
  }

  draw(context: CanvasRenderingContext2D) {
    const x = this.centerX + Math.cos(this.angle) * this.orbitRadius;
    const y = this.centerY + Math.sin(this.angle) * this.orbitRadius;
    
    context.beginPath();
    context.arc(x, y, this.size, 0, 2 * Math.PI);
    context.fillStyle = this.color;
    context.globalAlpha = 1;
    context.fill();
  }
}

class CircularMidStar implements Star {
  centerX: number;
  centerY: number;
  angle: number;
  radius: number;
  orbitRadius: number;
  color: string;
  speed: number;
  size: number;

  constructor(centerX: number, centerY: number, orbitRadius: number) {
    this.centerX = centerX;
    this.centerY = centerY;
    this.angle = Math.random() * 2 * Math.PI;
    this.orbitRadius = orbitRadius;
    this.radius = 1;
    this.color = "white";
    this.speed = 0.005;
    this.size = 1;
  }

  update(deltaTime: number) {
    this.angle += this.speed * (deltaTime / frameInterval);
    if (this.angle > 2 * Math.PI) {
      this.angle -= 2 * Math.PI;
    }
  }

  draw(context: CanvasRenderingContext2D) {
    const x = this.centerX + Math.cos(this.angle) * this.orbitRadius;
    const y = this.centerY + Math.sin(this.angle) * this.orbitRadius;
    
    context.beginPath();
    context.arc(x, y, this.size, 0, 2 * Math.PI);
    context.fillStyle = this.color;
    context.globalAlpha = 0.8;
    context.fill();
  }
}

class CircularFarStar implements Star {
  centerX: number;
  centerY: number;
  angle: number;
  radius: number;
  orbitRadius: number;
  color: string;
  speed: number;
  size: number;

  constructor(centerX: number, centerY: number, orbitRadius: number) {
    this.centerX = centerX;
    this.centerY = centerY;
    this.angle = Math.random() * 2 * Math.PI;
    this.orbitRadius = orbitRadius;
    this.radius = 0.5;
    this.color = "white";
    this.speed = 0.0025;
    this.size = 0.5;
  }

  update(deltaTime: number) {
    this.angle += this.speed * (deltaTime / frameInterval);
    if (this.angle > 2 * Math.PI) {
      this.angle -= 2 * Math.PI;
    }
  }

  draw(context: CanvasRenderingContext2D) {
    const x = this.centerX + Math.cos(this.angle) * this.orbitRadius;
    const y = this.centerY + Math.sin(this.angle) * this.orbitRadius;
    
    context.beginPath();
    context.arc(x, y, this.size, 0, 2 * Math.PI);
    context.fillStyle = this.color;
    context.globalAlpha = 0.6;
    context.fill();
  }
}

export default function CircularStarsBackground() {
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
      
      const center = {
        x: canvas.width / 2,
        y: canvas.height / 2,
      };

      for (let i = 0; i < 15; i++) {
        const orbitRadius = 50 + Math.random() * 100;
        starsRef.current.push(
          new CircularNearStar(center.x, center.y, orbitRadius)
        );
      }

      for (let i = 0; i < 40; i++) {
        const orbitRadius = 100 + Math.random() * 150;
        starsRef.current.push(
          new CircularMidStar(center.x, center.y, orbitRadius)
        );
      }

      for (let i = 0; i < 100; i++) {
        const orbitRadius = 200 + Math.random() * 200;
        starsRef.current.push(
          new CircularFarStar(center.x, center.y, orbitRadius)
        );
      }

      for (let i = 0; i < 20; i++) {
        starsRef.current.push({
          centerX: Math.random() * canvas.width,
          centerY: Math.random() * canvas.height,
          angle: 0,
          radius: 0.3,
          orbitRadius: 0,
          color: "white",
          speed: 0.5 + Math.random() * 1,
          size: 0.3,
          update: function(deltaTime: number) {
            this.centerX -= this.speed * (deltaTime / frameInterval);
            if (this.centerX < 0) {
              this.centerX = canvas.width;
              this.centerY = Math.random() * canvas.height;
            }
          },
          draw: function(context: CanvasRenderingContext2D) {
            context.beginPath();
            context.arc(this.centerX, this.centerY, this.size, 0, 2 * Math.PI);
            context.fillStyle = this.color;
            context.globalAlpha = 0.4;
            context.fill();
          }
        });
      }
    };

    const animate = (currentTime: number) => {
      const deltaTime = Math.min(currentTime - lastFrameTimeRef.current, frameInterval * 2);
      lastFrameTimeRef.current = currentTime;

      context.clearRect(0, 0, canvas.width, canvas.height);

      starsRef.current.forEach((star) => {
        star.update(deltaTime);
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