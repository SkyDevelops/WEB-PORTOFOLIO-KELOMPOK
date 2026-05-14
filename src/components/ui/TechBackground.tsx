"use client";

import { useEffect, useRef, useCallback } from "react";
import styles from "./TechBackground.module.css";

// SVG paths untuk setiap logo teknologi
const TECH_ICONS = [
  {
    id: "js",
    color: "#f7df1e",
    bg: "#323330",
    svg: `<rect width="24" height="24" fill="#323330"/><path d="M3 3h18v18H3V3zm9.5 13.5c.28.56.65 1 1.44 1 .76 0 1.25-.38 1.25-.9 0-.63-.5-.85-1.34-1.21l-.46-.2c-1.33-.57-2.21-1.28-2.21-2.79 0-1.39 1.06-2.44 2.71-2.44 1.18 0 2.03.41 2.64 1.49l-1.45.93c-.32-.57-.66-.79-1.19-.79-.54 0-.88.34-.88.79 0 .55.34.77 1.13 1.11l.46.2c1.57.67 2.45 1.36 2.45 2.9 0 1.66-1.3 2.58-3.06 2.58-1.71 0-2.82-.82-3.36-1.88l1.87-1.08z" fill="#f7df1e"/>`,
  },
  {
    id: "ts",
    color: "#fff",
    bg: "#3178c6",
    svg: `<rect width="24" height="24" fill="#3178c6"/><path d="M3 3h18v18H3V3zm10.5 11v-1.5H9V11h8v1.5h-3V18h-1.5v-4zm5-2h-3v-1.5h3V12zm-3 1.5h1.5V18H15v-4.5z" fill="white"/>`,
  },
  {
    id: "react",
    color: "#61dafb",
    bg: "#20232a",
    svg: `<rect width="24" height="24" fill="#20232a"/><g fill="none" stroke="#61dafb" stroke-width="1"><ellipse cx="12" cy="12" rx="9" ry="3.5"/><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)"/></g><circle cx="12" cy="12" r="1.5" fill="#61dafb"/>`,
  },
  {
    id: "vue",
    color: "#42b883",
    bg: "#35495e",
    svg: `<rect width="24" height="24" fill="#35495e"/><path d="M12 4.5L7 13h10L12 4.5z" fill="#42b883" opacity=".8"/><path d="M12 4.5L5 13H3l9-13 9 13h-2L12 4.5z" fill="#42b883"/><path d="M12 4.5L8.5 10.5h7L12 4.5z" fill="#35495e" opacity=".5"/>`,
  },
  {
    id: "python",
    color: "#ffd43b",
    bg: "#306998",
    svg: `<rect width="24" height="24" fill="#306998"/><path d="M12 3c-2.5 0-4 1-4 2.5V7h8v1H6C4.3 8 3 9.5 3 12s1.3 4 3 4h2v-2c0-1.5 1.5-2.5 4-2.5s4 1 4 2.5v4.5c0 1.5-1.5 2.5-4 2.5s-4-1-4-2.5V19H6c-2 0-4-2-4-5s2-5 4-5V7.5C6 5 8.5 3 12 3zm0 2c1.5 0 2 .5 2 1s-.5 1-2 1-2-.5-2-1 .5-1 2-1zm0 12c1.5 0 2 .5 2 1s-.5 1-2 1-2-.5-2-1 .5-1 2-1z" fill="#ffd43b"/>`,
  },
  {
    id: "php",
    color: "#8993be",
    bg: "#1d1d27",
    svg: `<rect width="24" height="24" fill="#1d1d27"/><ellipse cx="12" cy="12" rx="10" ry="5" fill="none" stroke="#8993be" stroke-width="1.5"/><path d="M7 10h2.5c1 0 1.5.5 1.5 1.5S10.5 13 9.5 13H8v2H7v-5zm4.5 0H14c1 0 1.5.5 1.5 1.5S15 13 14 13h-1v2h-1.5v-5zm-3 1v1.5h1c.5 0 .5-.75 0-.75H8.5V11zm4.5 0v1.5h1c.5 0 .5-.75 0-.75H13V11z" fill="#8993be"/>`,
  },
  {
    id: "rust",
    color: "#f74c00",
    bg: "#1a1a1a",
    svg: `<rect width="24" height="24" fill="#1a1a1a"/><circle cx="12" cy="12" r="7" fill="none" stroke="#f74c00" stroke-width="1.5"/><circle cx="12" cy="5.5" r="1" fill="#f74c00"/><circle cx="12" cy="18.5" r="1" fill="#f74c00"/><circle cx="5.5" cy="12" r="1" fill="#f74c00"/><circle cx="18.5" cy="12" r="1" fill="#f74c00"/><path d="M9 10.5h6M9 13.5h6M10.5 9v6M13.5 9v6" stroke="#f74c00" stroke-width="1"/>`,
  },
  {
    id: "go",
    color: "#00acd7",
    bg: "#0d1b2a",
    svg: `<rect width="24" height="24" fill="#0d1b2a"/><path d="M4 13.5c0-2.5 1.5-4 3.5-4H16c2 0 3.5 1.5 3.5 4s-1.5 4-3.5 4H7.5C5.5 17.5 4 16 4 13.5z" fill="none" stroke="#00acd7" stroke-width="1.5"/><path d="M8.5 9.5V7M15.5 9.5V7" stroke="#00acd7" stroke-width="1.5"/><circle cx="9.5" cy="13.5" r="1" fill="#00acd7"/><circle cx="14.5" cy="13.5" r="1" fill="#00acd7"/>`,
  },
  {
    id: "cpp",
    color: "#00599c",
    bg: "#0d0d15",
    svg: `<rect width="24" height="24" fill="#0d0d15"/><circle cx="10" cy="12" r="6" fill="none" stroke="#00599c" stroke-width="1.5"/><path d="M15 10h4M17 8v4M19.5 10h3M21 8v4" stroke="#00599c" stroke-width="1.5"/>`,
  },
  {
    id: "java",
    color: "#f89820",
    bg: "#1a1a2e",
    svg: `<rect width="24" height="24" fill="#1a1a2e"/><path d="M9 17s-1 .5-3 1c4 1 10 0 10 0s-1.5-.5-2-1.5c0 0-3.5 1-5 0.5z" fill="#f89820"/><path d="M10 14.5s-1 .5 2 1 4-.5 4-.5-1-.5-1-1.5c0 0-2 1.5-5 1z" fill="#f89820"/><path d="M12 3C9 6 7 7 7 10c0 2 1 3 2 4 0 0-3-4 2-8 2-1.5 2.5-3 1-3z" fill="#f89820"/>`,
  },
  {
    id: "git",
    color: "#f05032",
    bg: "#1a1a1a",
    svg: `<rect width="24" height="24" fill="#1a1a1a"/><path d="M21.5 11.1l-8.6-8.6c-.5-.5-1.3-.5-1.8 0l-1.8 1.8 2.3 2.3c.5-.2 1.1-.1 1.5.3.4.4.5 1 .3 1.5l2.2 2.2c.5-.2 1.1-.1 1.5.3.6.6.6 1.5 0 2.1-.6.6-1.5.6-2.1 0-.4-.4-.5-1-.3-1.5L12.5 9v5.5c.2.1.3.2.5.4.6.6.6 1.5 0 2.1-.6.6-1.5.6-2.1 0-.6-.6-.6-1.5 0-2.1.2-.2.4-.3.6-.4V9c-.2-.1-.4-.2-.6-.4-.4-.4-.5-1.1-.3-1.6L8.4 4.8 2.5 10.7c-.5.5-.5 1.3 0 1.8l8.6 8.6c.5.5 1.3.5 1.8 0l8.6-8.6c.4-.5.4-1.3 0-1.4z" fill="#f05032"/>`,
  },
  {
    id: "docker",
    color: "#2496ed",
    bg: "#0d1b2a",
    svg: `<rect width="24" height="24" fill="#0d1b2a"/><path d="M13 8h2v2h-2V8zm-3 0h2v2h-2V8zm-3 0h2v2H7V8zm3-3h2v2h-2V5zm3 3h2v2h-2V8z" fill="#2496ed"/><path d="M22 12c-.3-1.5-2-2-2-2s-1-2-3.5-1.5c-.3-3-3-4-5-3.5-2 .5-3 2.5-3 4.5 0 0-1.5-.5-2 1.5 0 0-1.5.5-1.5 2 .5.5 18 .5 18 0-.5-1-1-1-1-1z" fill="#2496ed" opacity=".7"/>`,
  },
  {
    id: "linux",
    color: "#fcc624",
    bg: "#1a1a1a",
    svg: `<rect width="24" height="24" fill="#1a1a1a"/><path d="M12 2C9 2 7 4 7 7c0 2 .5 3 1 4l-1 4c0 1 .5 2 1.5 2.5.5.3 1 .5 1.5.5h4c.5 0 1-.2 1.5-.5C16.5 17 17 16 17 15l-1-4c.5-1 1-2 1-4 0-3-2-5-5-5z" fill="#fcc624" opacity=".8"/><circle cx="10" cy="8" r=".8" fill="#1a1a1a"/><circle cx="14" cy="8" r=".8" fill="#1a1a1a"/><path d="M10 11c.5 1 3.5 1 4 0" stroke="#1a1a1a" stroke-width=".8" fill="none"/>`,
  },
  {
    id: "html",
    color: "#e34f26",
    bg: "#1a1a2a",
    svg: `<rect width="24" height="24" fill="#1a1a2a"/><path d="M4 3l1.5 16.5L12 21l6.5-1.5L20 3H4zm13 3l-.3 3H9l.2 2h7.3l-.7 6.5L12 19l-3.8-1-.3-3h2l.2 1.5 1.9.5 1.9-.5.2-2.5H8.5L7.7 9h8.6L16.7 6H7.3l-.3-2h10l-.3 2H17z" fill="#e34f26"/>`,
  },
  {
    id: "css",
    color: "#264de4",
    bg: "#1a1a2a",
    svg: `<rect width="24" height="24" fill="#1a1a2a"/><path d="M4 3l1.5 16.5L12 21l6.5-1.5L20 3H4zm13.2 4l-.2 2H9.8l.2 2h6.8l-.6 5.5L12 18l-4.2-1.5-.3-3h2l.2 1.5 2.3.7 2.3-.7.3-2.5H8.2L7.5 7h9.7z" fill="#264de4"/>`,
  },
  {
    id: "nodejs",
    color: "#539e43",
    bg: "#1a2a1a",
    svg: `<rect width="24" height="24" fill="#1a2a1a"/><path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.2l6.5 3.6v7.4L12 18.8 5.5 15.2V7.8L12 4.2z" fill="#539e43"/><path d="M12 6.5v11M7 9l5 3 5-3" stroke="#539e43" stroke-width="1" fill="none"/>`,
  },
  {
    id: "vscode",
    color: "#0078d4",
    bg: "#1a1a2a",
    svg: `<rect width="24" height="24" fill="#1a1a2a"/><path d="M17 3L9 12l-4-3-2 2 5 5 11-11-2-2z" fill="#0078d4"/><path d="M17 3v18l4-3V6l-4-3z" fill="#0078d4" opacity=".5"/><path d="M17 21L2 15l2-2 13 5v3z" fill="#0078d4" opacity=".7"/>`,
  },
  {
    id: "aws",
    color: "#ff9900",
    bg: "#1a1208",
    svg: `<rect width="24" height="24" fill="#1a1208"/><path d="M7 14c-2 0-4-2-4-4s2-4 4-4c.3 0 .7 0 1 .1C8.5 4 10 3 12 3c2.5 0 4.5 1.5 5 3.5.3-.1.7-.1 1-.1 2 0 3 1 3 2.5 0 1.5-1 2.5-3 2.5H7z" fill="#ff9900" opacity=".8"/>`,
  },
  {
    id: "tailwind",
    color: "#38bdf8",
    bg: "#0d1b2a",
    svg: `<rect width="24" height="24" fill="#0d1b2a"/><path d="M12 6c-2.7 0-4.4 1.35-5 4.05 1-1.35 2.17-1.855 3.5-1.55.76.19 1.3.74 1.9 1.35.98 1 2.11 2.15 4.6 2.15 2.7 0 4.4-1.35 5-4.05-1 1.35-2.17 1.855-3.5 1.55-.76-.19-1.3-.74-1.9-1.35C16.62 7.15 15.49 6 12 6zm-5 6.05c-2.7 0-4.4 1.35-5 4.05 1-1.35 2.17-1.855 3.5-1.55.76.19 1.3.74 1.9 1.35.98 1 2.11 2.15 4.6 2.15 2.7 0 4.4-1.35 5-4.05-1 1.35-2.17 1.855-3.5 1.55-.76-.19-1.3-.74-1.9-1.35-.98-1.005-2.11-2.155-4.6-2.155z" fill="#38bdf8"/>`,
  },
  {
    id: "nextjs",
    color: "#ffffff",
    bg: "#1a1a1a",
    svg: `<rect width="24" height="24" fill="#1a1a1a"/><path d="M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9-4-9-9-9zm-1 5h2v5.5l3.5-5.5h2.5L15 13.5l4 6.5h-2.5L12 13l-1 1.5V20H9V8z" fill="white"/>`,
  },
  {
    id: "redis",
    color: "#dc382d",
    bg: "#1a0d0d",
    svg: `<rect width="24" height="24" fill="#1a0d0d"/><ellipse cx="12" cy="8" rx="8" ry="3" fill="#dc382d" opacity=".8"/><path d="M4 8v4c0 1.66 3.58 3 8 3s8-1.34 8-3V8c0 1.66-3.58 3-8 3S4 9.66 4 8z" fill="#dc382d" opacity=".6"/><path d="M4 12v4c0 1.66 3.58 3 8 3s8-1.34 8-3v-4c0 1.66-3.58 3-8 3s-8-1.34-8-3z" fill="#dc382d" opacity=".4"/>`,
  },
  {
    id: "kotlin",
    color: "#7f52ff",
    bg: "#1a1228",
    svg: `<rect width="24" height="24" fill="#1a1228"/><path d="M3 3h9L3 12V3zm0 18l9-9-9-9v18zm9-9l9 9H12l-9-9 9-9 9 9-9 9z" fill="#7f52ff"/>`,
  },
  {
    id: "swift",
    color: "#fa7343",
    bg: "#1a1218",
    svg: `<rect width="24" height="24" fill="#1a1218"/><path d="M20 15.5c.3-3.5-2-7.5-6-10 3 4 3.5 8 1.5 10.5-1 1.5-2.5 2.5-4 2.5C8 18.5 5 15 5 12c0 1 .5 2.5 1.5 3.5C5 13.5 4.5 11 5 9 3 11 2 13.5 2 16c0 4 4 7 8 7 4.5 0 8.5-3 10-7.5z" fill="#fa7343"/>`,
  },
];

interface FloatingIcon {
  x: number; y: number;
  vx: number; vy: number;
  size: number; opacity: number;
  iconIdx: number;
  rotation: number; vr: number;
  life: number; maxLife: number;
  img: HTMLImageElement | null;
}

const imageCache = new Map<string, HTMLImageElement>();

function getIconImage(icon: typeof TECH_ICONS[0]): HTMLImageElement {
  if (imageCache.has(icon.id)) return imageCache.get(icon.id)!;
  const svgStr = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64">${icon.svg}</svg>`;
  const blob = new Blob([svgStr], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);
  const img = new Image(64, 64);
  img.src = url;
  imageCache.set(icon.id, img);
  return img;
}

export default function TechBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const iconsRef = useRef<FloatingIcon[]>([]);
  const rafRef = useRef<number>(0);
  const lastSpawnRef = useRef(0);

  const spawnIcon = useCallback((x: number, y: number) => {
    const iconIdx = Math.floor(Math.random() * TECH_ICONS.length);
    const icon = TECH_ICONS[iconIdx]!;
    const angle = Math.random() * Math.PI * 2;
    const speed = 0.6 + Math.random() * 1.4;
    const size = 32 + Math.random() * 28;
    const life = 100 + Math.random() * 80;
    const img = getIconImage(icon);

    iconsRef.current.push({
      x: x + (Math.random() - 0.5) * 30,
      y: y + (Math.random() - 0.5) * 30,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      size, opacity: 0,
      iconIdx, rotation: Math.random() * Math.PI * 2,
      vr: (Math.random() - 0.5) * 0.035,
      life, maxLife: life, img,
    });

    if (iconsRef.current.length > 55) iconsRef.current.shift();
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const now = Date.now();
    if (now - lastSpawnRef.current > 75) {
      spawnIcon(e.clientX, e.clientY);
      lastSpawnRef.current = now;
    }
  }, [spawnIcon]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      iconsRef.current = iconsRef.current.filter(ic => ic.life > 0);

      for (const ic of iconsRef.current) {
        ic.life--;
        ic.x += ic.vx;
        ic.y += ic.vy;
        ic.vy += 0.012;
        ic.vx *= 0.997;
        ic.rotation += ic.vr;

        const ratio = ic.life / ic.maxLife;
        ic.opacity = ratio > 0.8 ? (1 - ratio) / 0.2 : ratio < 0.25 ? ratio / 0.25 : 1;
        ic.opacity = Math.max(0, Math.min(0.88, ic.opacity));

        if (!ic.img) continue;

        ctx.save();
        ctx.translate(ic.x, ic.y);
        ctx.rotate(ic.rotation);
        ctx.globalAlpha = ic.opacity;

        // Rounded square background with glow
        const half = ic.size / 2;
        ctx.shadowColor = TECH_ICONS[ic.iconIdx]!.color;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.roundRect(-half, -half, ic.size, ic.size, ic.size * 0.18);
        ctx.fillStyle = TECH_ICONS[ic.iconIdx]!.bg;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw SVG image
        if (ic.img.complete) {
          ctx.drawImage(ic.img, -half, -half, ic.size, ic.size);
        }

        ctx.restore();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);
    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [handleMouseMove]);

  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />;
}