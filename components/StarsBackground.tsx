"use client";

import { useEffect, useRef } from "react";

const FPS = 60;
const frameInterval = 1000 / FPS; // ~16.67ms for 60fps

interface Star {
  x: number;
  y: number;
  radius: number;
  color: string;
  speed: number;
  update: (canvasWidth: number, deltaTime: number) => void;
  draw: (context: CanvasRenderingContext2D) => void;
}

class NearStar implements Star {
  x: number;
  y: number;
  radius: number;
  color: string;
  speed: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.radius = 1.5;
    this.color = "white";
    this.speed = 3;
  }

  update(canvasWidth: number, deltaTime: number) {
    this.x -= this.speed * (deltaTime / frameInterval);
    if (this.x < 0) {
      this.x = canvasWidth;
    }
  }

  draw(context: CanvasRenderingContext2D) {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    context.fillStyle = this.color;
    context.globalAlpha = 1;
    context.fill();
  }
}

class MidStar implements Star {
  x: number;
  y: number;
  radius: number;
  color: string;
  speed: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.radius = 1;
    this.color = "white";
    this.speed = 2;
  }

  update(canvasWidth: number, deltaTime: number) {
    this.x -= this.speed * (deltaTime / frameInterval);
    if (this.x < 0) {
      this.x = canvasWidth;
    }
  }

  draw(context: CanvasRenderingContext2D) {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    context.fillStyle = this.color;
    context.globalAlpha = 1;
    context.fill();
  }
}

class FarStar implements Star {
  x: number;
  y: number;
  radius: number;
  color: string;
  speed: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.radius = 0.5;
    this.color = "white";
    this.speed = 1;
  }

  update(canvasWidth: number, deltaTime: number) {
    this.x -= this.speed * (deltaTime / frameInterval);
    if (this.x < 0) {
      this.x = canvasWidth;
    }
  }

  draw(context: CanvasRenderingContext2D) {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    context.fillStyle = this.color;
    context.globalAlpha = 1;
    context.fill();
  }
}

export default function StarsBackground() {
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

      // Create 10 near stars
      for (let i = 0; i < 10; i++) {
        starsRef.current.push(
          new NearStar(
            Math.random() * canvas.width,
            Math.random() * canvas.height,
          ),
        );
      }

      // Create 50 mid stars
      for (let i = 0; i < 50; i++) {
        starsRef.current.push(
          new MidStar(
            Math.random() * canvas.width,
            Math.random() * canvas.height,
          ),
        );
      }

      // Create 100 far stars
      for (let i = 0; i < 100; i++) {
        starsRef.current.push(
          new FarStar(
            Math.random() * canvas.width,
            Math.random() * canvas.height,
          ),
        );
      }
    };

    const animate = (currentTime: number) => {
      const deltaTime = Math.min(currentTime - lastFrameTimeRef.current, frameInterval * 2);
      lastFrameTimeRef.current = currentTime;

      context.clearRect(0, 0, canvas.width, canvas.height);

      starsRef.current.forEach((star) => {
        star.update(canvas.width, deltaTime);
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
