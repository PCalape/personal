"use client";

import { useEffect, useRef } from "react";

const FPS = 60;
const frameInterval = 1000 / FPS;

interface TwinklingStar {
  x: number;
  y: number;
  size: number;
  baseOpacity: number;
  currentOpacity: number;
  twinkleSpeed: number;
  twinklePhase: number;
  color: string;
  update: (deltaTime: number) => void;
  draw: (context: CanvasRenderingContext2D) => void;
}

class StaticTwinklingStar implements TwinklingStar {
  x: number;
  y: number;
  size: number;
  baseOpacity: number;
  currentOpacity: number;
  twinkleSpeed: number;
  twinklePhase: number;
  color: string;
  baseX: number;
  baseY: number;
  driftSpeed: number;
  driftAngle: number;
  driftRadius: number;

  constructor(canvasWidth: number, canvasHeight: number) {
    this.baseX = Math.random() * canvasWidth;
    this.baseY = Math.random() * canvasHeight;
    this.x = this.baseX;
    this.y = this.baseY;
    this.size = 0.5 + Math.random() * 2;
    this.baseOpacity = 0.2 + Math.random() * 0.8;
    this.currentOpacity = this.baseOpacity;
    this.twinkleSpeed = 0.03 + Math.random() * 0.08; // Increased twinkle speed
    this.twinklePhase = Math.random() * Math.PI * 2;
    this.driftSpeed = 0.001 + Math.random() * 0.003; // Subtle movement
    this.driftAngle = Math.random() * Math.PI * 2;
    this.driftRadius = 10 + Math.random() * 30; // Small drift radius
    
    // Color variations
    const colorRand = Math.random();
    if (colorRand > 0.92) this.color = "#60a5fa"; // Blue
    else if (colorRand > 0.85) this.color = "#fbbf24"; // Golden
    else if (colorRand > 0.78) this.color = "#f472b6"; // Pink
    else this.color = "white";
  }

  update(deltaTime: number) {
    this.twinklePhase += this.twinkleSpeed * (deltaTime / frameInterval);
    this.driftAngle += this.driftSpeed * (deltaTime / frameInterval);
    
    // Add gentle circular drift movement
    this.x = this.baseX + Math.cos(this.driftAngle) * this.driftRadius;
    this.y = this.baseY + Math.sin(this.driftAngle) * this.driftRadius;
    
    // Enhanced twinkling effect with more dramatic changes
    const twinkleIntensity = (Math.sin(this.twinklePhase) + 1) / 2;
    const secondaryTwinkle = (Math.sin(this.twinklePhase * 1.5) + 1) / 2;
    const combinedTwinkle = (twinkleIntensity + secondaryTwinkle * 0.5) / 1.5;
    this.currentOpacity = this.baseOpacity * (0.1 + combinedTwinkle * 0.9);
  }

  draw(context: CanvasRenderingContext2D) {
    if (this.currentOpacity <= 0.05) return;

    // Draw star with glow effect
    const gradient = context.createRadialGradient(
      this.x, this.y, 0,
      this.x, this.y, this.size * 2
    );
    gradient.addColorStop(0, this.color);
    gradient.addColorStop(0.5, this.color === "white" ? "rgba(255, 255, 255, 0.6)" : "rgba(96, 165, 250, 0.6)");
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

    context.globalAlpha = this.currentOpacity * 0.8;
    context.beginPath();
    context.arc(this.x, this.y, this.size * 2, 0, 2 * Math.PI);
    context.fillStyle = gradient;
    context.fill();

    // Draw bright core
    context.globalAlpha = this.currentOpacity;
    context.beginPath();
    context.arc(this.x, this.y, this.size * 0.6, 0, 2 * Math.PI);
    context.fillStyle = this.color;
    context.fill();
  }
}

class PulsingStar implements TwinklingStar {
  x: number;
  y: number;
  size: number;
  baseOpacity: number;
  currentOpacity: number;
  twinkleSpeed: number;
  twinklePhase: number;
  color: string;
  baseSize: number;
  currentSize: number;
  baseX: number;
  baseY: number;
  driftSpeed: number;
  driftAngle: number;
  driftRadius: number;

  constructor(canvasWidth: number, canvasHeight: number) {
    this.baseX = Math.random() * canvasWidth;
    this.baseY = Math.random() * canvasHeight;
    this.x = this.baseX;
    this.y = this.baseY;
    this.baseSize = 1.5 + Math.random() * 3;
    this.size = this.baseSize;
    this.currentSize = this.baseSize;
    this.baseOpacity = 0.3 + Math.random() * 0.7;
    this.currentOpacity = this.baseOpacity;
    this.twinkleSpeed = 0.02 + Math.random() * 0.06; // Faster pulsing
    this.twinklePhase = Math.random() * Math.PI * 2;
    this.driftSpeed = 0.0008 + Math.random() * 0.002; // Slower, more graceful movement
    this.driftAngle = Math.random() * Math.PI * 2;
    this.driftRadius = 15 + Math.random() * 40;
    this.color = Math.random() > 0.85 ? "#38bdf8" : "white";
  }

  update(deltaTime: number) {
    this.twinklePhase += this.twinkleSpeed * (deltaTime / frameInterval);
    this.driftAngle += this.driftSpeed * (deltaTime / frameInterval);
    
    // Add gentle movement
    this.x = this.baseX + Math.cos(this.driftAngle) * this.driftRadius;
    this.y = this.baseY + Math.sin(this.driftAngle) * this.driftRadius;
    
    // Enhanced pulsing effect with more dramatic changes
    const pulse = (Math.sin(this.twinklePhase) + 1) / 2;
    const secondaryPulse = (Math.cos(this.twinklePhase * 0.7) + 1) / 2;
    const combinedPulse = (pulse * 0.7 + secondaryPulse * 0.3);
    
    this.currentOpacity = this.baseOpacity * (0.2 + combinedPulse * 0.8);
    this.currentSize = this.baseSize * (0.6 + combinedPulse * 0.6);
  }

  draw(context: CanvasRenderingContext2D) {
    if (this.currentOpacity <= 0.05) return;

    // Draw pulsing star
    context.globalAlpha = this.currentOpacity * 0.6;
    context.beginPath();
    context.arc(this.x, this.y, this.currentSize * 1.5, 0, 2 * Math.PI);
    context.fillStyle = this.color;
    context.fill();

    // Draw bright core
    context.globalAlpha = this.currentOpacity;
    context.beginPath();
    context.arc(this.x, this.y, this.currentSize * 0.7, 0, 2 * Math.PI);
    context.fillStyle = this.color;
    context.fill();
  }
}

export default function TwinklingStarsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const starsRef = useRef<TwinklingStar[]>([]);
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
      
      // Create static twinkling stars
      for (let i = 0; i < 150; i++) {
        starsRef.current.push(new StaticTwinklingStar(canvas.width, canvas.height));
      }

      // Create pulsing stars (fewer, more prominent)
      for (let i = 0; i < 25; i++) {
        starsRef.current.push(new PulsingStar(canvas.width, canvas.height));
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