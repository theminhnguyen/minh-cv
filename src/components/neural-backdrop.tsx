"use client";

import { useEffect, useRef } from "react";

type Node = { x: number; y: number; vx: number; vy: number };

const DENSITY = 14000; // ein Knoten pro X Pixel Fläche
const MAX_NODES = 70;
const LINK_DISTANCE = 130;

/** Dekoratives Knotennetz hinter dem Hero. Rein visuell, ohne Bedeutung. */
export function NeuralBackdrop() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let nodes: Node[] = [];
    let frame = 0;
    let width = 0;
    let height = 0;

    const accent = () =>
      getComputedStyle(document.documentElement).getPropertyValue("--color-accent").trim() ||
      "#2ee6c5";

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);

      const count = Math.min(MAX_NODES, Math.round((width * height) / DENSITY));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
      }));
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      const color = accent();

      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
      }

      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.hypot(dx, dy);
          if (distance > LINK_DISTANCE) continue;
          context.globalAlpha = (1 - distance / LINK_DISTANCE) * 0.28;
          context.strokeStyle = color;
          context.lineWidth = 0.6;
          context.beginPath();
          context.moveTo(nodes[i].x, nodes[i].y);
          context.lineTo(nodes[j].x, nodes[j].y);
          context.stroke();
        }
      }

      context.globalAlpha = 0.65;
      context.fillStyle = color;
      for (const node of nodes) {
        context.beginPath();
        context.arc(node.x, node.y, 1.4, 0, Math.PI * 2);
        context.fill();
      }

      frame = window.requestAnimationFrame(draw);
    };

    resize();
    frame = window.requestAnimationFrame(draw);

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-70 [mask-image:radial-gradient(ellipse_70%_60%_at_60%_40%,#000,transparent)]"
    />
  );
}
