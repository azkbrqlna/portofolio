"use client";

import React, { useEffect, useState } from "react";

const BOOT_LINES = [
  { text: "Initializing...", delay: 0 },
  { text: "Loading modules... OK", delay: 350 },
  { text: "Building interface... OK", delay: 700 },
  { text: "Ready.", delay: 1000 },
];

export default function LoadingScreen({ onComplete }) {
  const [lines, setLines] = useState([]);
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const timers = BOOT_LINES.map((line, i) =>
      setTimeout(() => {
        setLines((p) => [...p, line.text]);
        setProgress(Math.round(((i + 1) / BOOT_LINES.length) * 90));
      }, line.delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    const last = BOOT_LINES[BOOT_LINES.length - 1].delay;
    const t1 = setTimeout(() => setProgress(100), last + 200);
    const t2 = setTimeout(() => setExiting(true), last + 600);
    const t3 = setTimeout(() => onComplete?.(), last + 1200);
    return () => [t1, t2, t3].forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0e0e12]"
      style={{
        transition: "opacity 0.6s ease",
        opacity: exiting ? 0 : 1,
        pointerEvents: exiting ? "none" : "all",
      }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 w-full max-w-xs px-6 space-y-6">
        {/* Name */}
        <div>
          <p
            className="text-2xl font-semibold text-white/80"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Azka Bariqlana
          </p>
          <p className="font-mono text-[10px] tracking-[0.3em] text-white/25 uppercase mt-1">
            Portfolio
          </p>
        </div>

        {/* Boot lines */}
        <div className="font-mono text-[11px] text-white/30 space-y-1 min-h-[64px]">
          {lines.map((l, i) => (
            <p key={i}>{l}</p>
          ))}
          <span
            className="inline-block w-1.5 h-3 align-middle"
            style={{ background: "#d4a853", animation: "blink 1s step-end infinite" }}
          />
        </div>

        {/* Progress bar */}
        <div className="space-y-1.5">
          <div className="flex justify-between font-mono text-[9px] text-white/20">
            <span>Loading</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full h-px bg-white/8 overflow-hidden">
            <div
              className="h-full"
              style={{
                width: `${progress}%`,
                background: "#d4a853",
                transition: "width 0.3s ease",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
