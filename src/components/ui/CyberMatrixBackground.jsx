"use client";

import React, { useEffect, useRef } from "react";

const CHARS =
  "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン" +
  "ガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポ" +
  "ｦｧｨｩｪｫｬｭｮｯｰ" +
  "0123456789";

export default function CyberMatrixBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const FONT_SIZE = 14;
    let columns = Math.floor(width / FONT_SIZE);
    let drops = [];
    let speeds = [];
    let columnChars = [];

    function initColumns() {
      columns = Math.floor(width / FONT_SIZE);
      drops = [];
      speeds = [];
      columnChars = [];

      for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -(height / FONT_SIZE);
        speeds[i] = 0.3 + Math.random() * 0.5;
        columnChars[i] = [];

        const rowCount = Math.floor(height / FONT_SIZE) + 2;
        for (let r = 0; r < rowCount; r++) {
          columnChars[i][r] = CHARS[Math.floor(Math.random() * CHARS.length)];
        }
      }
    }

    initColumns();

    let lastMutateTime = 0;

    const draw = (timestamp) => {
      // Heavy fade — makes trail short and dim
      ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
      ctx.fillRect(0, 0, width, height);

      // Mutate chars occasionally
      if (timestamp - lastMutateTime > 120) {
        lastMutateTime = timestamp;
        for (let i = 0; i < columns; i++) {
          const r = Math.floor(Math.random() * columnChars[i].length);
          columnChars[i][r] = CHARS[Math.floor(Math.random() * CHARS.length)];
        }
      }

      ctx.font = `${FONT_SIZE}px 'Courier New', monospace`;

      for (let i = 0; i < columns; i++) {
        const x = i * FONT_SIZE;
        const dropRow = Math.floor(drops[i]);
        const rowCount = Math.floor(height / FONT_SIZE) + 2;
        const trailLength = 18 + Math.floor(Math.random() * 6);

        for (
          let r = Math.max(0, dropRow - trailLength);
          r <= Math.min(dropRow, rowCount - 1);
          r++
        ) {
          const yPos = r * FONT_SIZE;
          const distFromHead = dropRow - r;
          const char =
            columnChars[i][r % columnChars[i].length] || "ア";

          if (distFromHead === 0) {
            // Leading char — slightly brighter, no color, just dim white
            ctx.globalAlpha = 0.55;
            ctx.fillStyle = "#e0e0e0";
            ctx.shadowColor = "transparent";
            ctx.shadowBlur = 0;
          } else {
            // Trail — monochrome dark green, very dim
            const fade = 1 - distFromHead / trailLength;
            ctx.globalAlpha = fade * 0.18;
            ctx.fillStyle = "#4a7c4a";
            ctx.shadowBlur = 0;
          }

          ctx.fillText(char, x, yPos + FONT_SIZE);
        }

        drops[i] += speeds[i];

        if (drops[i] * FONT_SIZE > height + FONT_SIZE * 15) {
          drops[i] = -(Math.random() * 30 + 5);
          speeds[i] = 0.3 + Math.random() * 0.5;
        }
      }

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;

      animationFrameId = requestAnimationFrame(draw);
    };

    animationFrameId = requestAnimationFrame(draw);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initColumns();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas ref={canvasRef} className="block w-full h-full opacity-40" />
      {/* Vignette agar pinggir lebih gelap */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.75) 100%)",
        }}
      />
    </div>
  );
}
