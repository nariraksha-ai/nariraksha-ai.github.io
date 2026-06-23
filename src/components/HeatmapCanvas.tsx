"use client";

import { useEffect, useRef } from "react";

interface Blob {
  x: number;
  y: number;
  r: number;
  color: string;
  vx: number;
  vy: number;
  alpha: number;
  alphaSpeed: number;
}

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export default function HeatmapCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Safety heatmap blobs
    const blobs: Blob[] = [
      { x: width * 0.2, y: height * 0.3, r: 120, color: "rgba(109, 40, 217, 0.15)", vx: 0.2, vy: 0.1, alpha: 0.4, alphaSpeed: 0.003 }, // Purple
      { x: width * 0.7, y: height * 0.4, r: 180, color: "rgba(236, 72, 153, 0.1)", vx: -0.1, vy: 0.2, alpha: 0.3, alphaSpeed: 0.002 },  // Pink
      { x: width * 0.4, y: height * 0.7, r: 140, color: "rgba(20, 184, 166, 0.12)", vx: 0.15, vy: -0.15, alpha: 0.5, alphaSpeed: 0.004 }, // Teal
      { x: width * 0.8, y: height * 0.8, r: 100, color: "rgba(109, 40, 217, 0.1)", vx: -0.1, vy: -0.1, alpha: 0.3, alphaSpeed: 0.003 }, // Purple
    ];

    // Network nodes
    const nodesCount = Math.min(40, Math.floor((width * height) / 40000));
    const nodes: Node[] = [];
    for (let i = 0; i < nodesCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
      });
    }

    const drawGrid = () => {
      if (!ctx) return;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.015)";
      ctx.lineWidth = 1;
      const gridSize = 60;

      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
    };

    const drawHeatmap = () => {
      if (!ctx) return;
      blobs.forEach((blob) => {
        // Move blobs slowly
        blob.x += blob.vx;
        blob.y += blob.vy;

        // Bounce off walls
        if (blob.x - blob.r < 0 || blob.x + blob.r > width) blob.vx *= -1;
        if (blob.y - blob.r < 0 || blob.y + blob.r > height) blob.vy *= -1;

        // Pulse alpha
        blob.alpha += blob.alphaSpeed;
        if (blob.alpha > 0.6 || blob.alpha < 0.1) {
          blob.alphaSpeed *= -1;
        }

        // Draw radial gradient for heatmap glow
        const gradient = ctx.createRadialGradient(
          blob.x,
          blob.y,
          0,
          blob.x,
          blob.y,
          blob.r
        );
        
        // Extract color elements to rebuild with dynamic alpha
        const colorBase = blob.color.substring(0, blob.color.lastIndexOf(","));
        gradient.addColorStop(0, `${colorBase}, ${blob.alpha})`);
        gradient.addColorStop(1, `${colorBase}, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.r, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const drawNodes = () => {
      if (!ctx) return;
      ctx.fillStyle = "rgba(255, 255, 255, 0.08)";
      ctx.strokeStyle = "rgba(255, 255, 255, 0.03)";
      ctx.lineWidth = 0.8;

      nodes.forEach((node) => {
        // Move nodes
        node.x += node.vx;
        node.y += node.vy;

        // Wrap around borders
        if (node.x < 0) node.x = width;
        if (node.x > width) node.x = 0;
        if (node.y < 0) node.y = height;
        if (node.y > height) node.y = 0;

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dist = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.1;
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const render = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      // Draw background dark theme color manually to ensure no canvas overlay issues
      ctx.fillStyle = "#0B1020";
      ctx.fillRect(0, 0, width, height);

      drawGrid();
      drawHeatmap();
      drawNodes();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full bg-[#0B1020]"
    />
  );
}
