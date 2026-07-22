"use client";

import React, { useState, useEffect } from "react";

const CYBER_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*アズカバリクラナ";

export default function GlitchText({ text, className = "", delay = 0, hoverGlitch = true }) {
  const [displayText, setDisplayText] = useState("");
  const [isGlitching, setIsGlitching] = useState(true);

  useEffect(() => {
    let iteration = 0;
    let interval = null;

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((char, index) => {
              if (char === " ") return " ";
              if (index < iteration) {
                return text[index];
              }
              return CYBER_CHARS[Math.floor(Math.random() * CYBER_CHARS.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(interval);
          setIsGlitching(false);
        }

        iteration += 1 / 2;
      }, 40);
    }, delay);

    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [text, delay]);

  const triggerGlitchBurst = () => {
    if (!hoverGlitch || isGlitching) return;
    setIsGlitching(true);
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) {
              return text[index];
            }
            return CYBER_CHARS[Math.floor(Math.random() * CYBER_CHARS.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
        setIsGlitching(false);
      }

      iteration += 1 / 2;
    }, 35);
  };

  return (
    <div
      onMouseEnter={triggerGlitchBurst}
      className={`relative inline-block select-none group cursor-pointer ${className}`}
    >
      {/* Glitch Overlay Red Shift */}
      {isGlitching && (
        <span
          aria-hidden="true"
          className="absolute inset-0 text-[#ff0055] opacity-80 animate-glitch-anim-1 pointer-events-none"
          style={{ textShadow: "-2px 0 #ff0055" }}
        >
          {displayText || text}
        </span>
      )}

      {/* Glitch Overlay Cyan Shift */}
      {isGlitching && (
        <span
          aria-hidden="true"
          className="absolute inset-0 text-[#00ffff] opacity-80 animate-glitch-anim-2 pointer-events-none"
          style={{ textShadow: "2px 0 #00ffff" }}
        >
          {displayText || text}
        </span>
      )}

      {/* Main Base Text */}
      <span className="relative z-10">{displayText || text}</span>
    </div>
  );
}
