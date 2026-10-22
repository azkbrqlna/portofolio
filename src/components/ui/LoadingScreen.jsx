"use client";

import React, { useEffect, useState } from "react";

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isOpening, setIsOpening] = useState(false);
  const [fadeOutContent, setFadeOutContent] = useState(false);

  useEffect(() => {
    // Smooth progress counter from 0 to 100
    const duration = 1800; // 1.8s
    const startTime = performance.now();
    let frameId;

    const updateProgress = (currentTime) => {
      const elapsed = currentTime - startTime;
      const pct = Math.min(Math.floor((elapsed / duration) * 100), 100);
      setProgress(pct);

      if (pct < 100) {
        frameId = requestAnimationFrame(updateProgress);
      } else {
        // Step 1: Fade out the typography and counter
        setTimeout(() => {
          setFadeOutContent(true);
        }, 150);

        // Step 2: Open the gates (membuka ke atas dan ke bawah)
        setTimeout(() => {
          setIsOpening(true);
        }, 400);

        // Step 3: Complete opening transition and unmount
        setTimeout(() => {
          onComplete?.();
        }, 1600);
      }
    };

    frameId = requestAnimationFrame(updateProgress);
    return () => cancelAnimationFrame(frameId);
  }, [onComplete]);

  // Spectrum frequency bars heights
  const spectrumHeights = [
    12, 20, 16, 28, 22, 34, 18, 30, 26, 36, 20, 32, 18, 26, 14, 22,
  ];

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden select-none">
      {/* ── TOP GATE DOOR (Opens Upward) ── */}
      <div
        className="absolute top-0 left-0 w-full h-1/2 bg-[#0c0d12] border-b border-white/20 will-change-transform shadow-[0_20px_40px_rgba(0,0,0,0.95)] overflow-hidden"
        style={{
          transform: isOpening ? "translateY(-100%)" : "translateY(0%)",
          transition: "transform 1.1s cubic-bezier(0.85, 0, 0.15, 1)",
          transitionDelay: "0ms",
        }}
      >
        {/* Subtle dot grid on door */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Architectural panel groove lines */}
        <div className="absolute top-1/3 left-0 right-0 h-px bg-white/[0.04]" />
        <div className="absolute top-2/3 left-0 right-0 h-px bg-white/[0.04]" />

        {/* Giant Watermark Echo in background to eliminate emptiness */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.035] pointer-events-none">
          <span className="font-mono font-black text-[14vw] tracking-widest text-white whitespace-nowrap">
            AZKBRQLNA
          </span>
        </div>
      </div>

      {/* ── BOTTOM GATE DOOR (Opens Downward) ── */}
      <div
        className="absolute bottom-0 left-0 w-full h-1/2 bg-[#0c0d12] border-t border-white/20 will-change-transform shadow-[0_-20px_40px_rgba(0,0,0,0.95)] overflow-hidden"
        style={{
          transform: isOpening ? "translateY(100%)" : "translateY(0%)",
          transition: "transform 1.1s cubic-bezier(0.85, 0, 0.15, 1)",
          transitionDelay: "70ms", // Physical gate stagger
        }}
      >
        {/* Subtle dot grid on door */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Architectural panel groove lines */}
        <div className="absolute top-1/3 left-0 right-0 h-px bg-white/[0.04]" />
        <div className="absolute top-2/3 left-0 right-0 h-px bg-white/[0.04]" />

        {/* Giant Watermark Echo in background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.035] pointer-events-none">
          <span className="font-mono font-black text-[14vw] tracking-widest text-white whitespace-nowrap">
            DEVELOPER
          </span>
        </div>
      </div>

      {/* ── HORIZONTAL CALIBRATED LASER SEAM TRACK ── */}
      <div
        className="absolute top-1/2 left-0 right-0 z-10 -translate-y-1/2 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: isOpening ? 0 : 1,
        }}
      >
        {/* Baseline ruler track */}
        <div className="relative w-full h-[1px] bg-white/15">
          {/* Active progress bar with bright white glow */}
          <div
            className="absolute top-0 left-0 h-[2px] -translate-y-[0.5px] bg-white shadow-[0_0_14px_rgba(255,255,255,0.9)] transition-all duration-75 ease-out"
            style={{
              width: `${progress}%`,
            }}
          >
            {/* Glowing laser head bead */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_12px_#fff]" />
          </div>

          {/* Precision ruler ticks across the screen */}
          <div className="absolute inset-x-0 -top-1.5 flex justify-between px-4 sm:px-12 pointer-events-none opacity-40">
            {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((tick) => (
              <div key={tick} className="flex flex-col items-center">
                <div
                  className={`w-[1px] bg-white ${tick % 25 === 0 ? "h-3 bg-white/70" : "h-1.5 bg-white/30"
                    }`}
                />
                {tick % 25 === 0 && (
                  <span className="font-mono text-[8px] text-white/50 mt-1 select-none hidden sm:block">
                    {tick}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FOREGROUND CONTENT ── */}
      <div
        className="absolute inset-0 z-20 flex flex-col justify-between p-6 sm:p-12 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: fadeOutContent ? 0 : 1,
        }}
      >
        {/* Top Spacer for vertical balance */}
        <div className="h-8" />

        {/* Center Typography & Cyber Frequency Visualizer */}
        <div className="relative text-center my-auto flex flex-col items-center justify-center">
          {/* Subtle Ambient Backlight Glow behind typography */}
          <div
            className="absolute w-[360px] sm:w-[540px] h-[140px] rounded-full blur-[80px] pointer-events-none -z-10"
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(212,168,83,0.06) 40%, transparent 70%)",
            }}
          />

        </div>

        <div className="flex items-end justify-end font-mono">
          <div className="text-right">
            <div className="flex items-baseline justify-end">
              <span className="text-5xl sm:text-7xl font-light text-white tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.25)]">
                {progress < 10 ? `0${progress}` : progress}
              </span>
              <span className="text-xs sm:text-sm text-white/60 font-mono ml-1 font-normal">
                %
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
