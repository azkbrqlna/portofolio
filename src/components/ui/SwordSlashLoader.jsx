"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SwordSlashLoader({ onComplete, forceTrigger = 0 }) {
  const [stage, setStage] = useState("slash"); // 'slash', 'slashed', 'done'
  const [key, setKey] = useState(0);

  // Listen for custom trigger event (e.g. from InteractiveCmd slash command)
  useEffect(() => {
    const handleCustomTrigger = () => {
      setStage("slash");
      setKey((prev) => prev + 1);
    };

    window.addEventListener("trigger-katana-slash", handleCustomTrigger);
    return () => {
      window.removeEventListener("trigger-katana-slash", handleCustomTrigger);
    };
  }, []);

  useEffect(() => {
    if (stage !== "slash") return;

    const timer1 = setTimeout(() => {
      setStage("slashed");
    }, 300);

    const timer2 = setTimeout(() => {
      setStage("done");
      if (onComplete) onComplete();
    }, 1000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [stage, key, forceTrigger, onComplete]);

  if (stage === "done") return null;

  return (
    <div key={key} className="fixed inset-0 z-[9999] pointer-events-auto overflow-hidden select-none">
      <AnimatePresence>
        {stage !== "done" && (
          <div className="relative w-full h-full">
            
            {/* Top-Right Half Panel (Slides to Top-Right) */}
            <motion.div
              initial={{ x: 0, y: 0 }}
              animate={
                stage === "slashed"
                  ? { x: "110%", y: "-110%", opacity: 0 }
                  : { x: 0, y: 0, opacity: 1 }
              }
              transition={{ duration: 0.65, ease: [0.75, 0, 0.25, 1] }}
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%)",
              }}
              className="absolute inset-0 bg-[#0a0a0f] border-[#ffd700]/70"
            />

            {/* Bottom-Left Half Panel (Slides to Bottom-Left) */}
            <motion.div
              initial={{ x: 0, y: 0 }}
              animate={
                stage === "slashed"
                  ? { x: "-110%", y: "110%", opacity: 0 }
                  : { x: 0, y: 0, opacity: 1 }
              }
              transition={{ duration: 0.65, ease: [0.75, 0, 0.25, 1] }}
              style={{
                clipPath: "polygon(0 0, 0 100%, 100% 100%)",
              }}
              className="absolute inset-0 bg-[#0a0a0f] border-[#ffd700]/70"
            />

            {/* Single Glowing Neon Katana Blade (Aligned exact Top-Left 0,0 to Bottom-Right 100%,100%) */}
            <motion.svg
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{ duration: 0.45 }}
              className="absolute inset-0 w-full h-full z-30 pointer-events-none overflow-visible"
            >
              <defs>
                <linearGradient id="katanaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
                  <stop offset="20%" stopColor="#ff79c6" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
                  <stop offset="80%" stopColor="#ffd700" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>
                <filter id="katanaGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="5" result="blur1" />
                  <feGaussianBlur stdDeviation="14" result="blur2" />
                  <feMerge>
                    <feMergeNode in="blur2" />
                    <feMergeNode in="blur1" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              {/* Outer Neon Glow Laser */}
              <motion.line
                x1="0"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="url(#katanaGrad)"
                strokeWidth="10"
                strokeLinecap="round"
                filter="url(#katanaGlow)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              />
              {/* Core White Blade */}
              <motion.line
                x1="0"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="#ffffff"
                strokeWidth="3.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              />
            </motion.svg>

          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
