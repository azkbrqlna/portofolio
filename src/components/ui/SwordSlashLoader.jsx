"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SwordSlashLoader({ onComplete, forceTrigger = 0 }) {
  const [stage, setStage] = useState("slash"); // 'slash', 'slashed', 'done'
  const [key, setKey] = useState(0);

  useEffect(() => {
    // Instantly start with katana slash from Top-Left to Bottom-Right
    setStage("slash");
    setKey((prev) => prev + 1);

    // Timeline:
    // 0ms: Katana slash line sweeps from top-left to bottom-right
    // 350ms: Sliced halves slide away to top-left & bottom-right
    // 1100ms: Complete

    const timer1 = setTimeout(() => {
      setStage("slashed");
    }, 350);

    const timer2 = setTimeout(() => {
      setStage("done");
      if (onComplete) onComplete();
    }, 1100);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [forceTrigger, onComplete]);

  if (stage === "done") return null;

  return (
    <div key={key} className="fixed inset-0 z-[9999] pointer-events-auto overflow-hidden font-mono select-none">
      <AnimatePresence>
        {stage !== "done" && (
          <div className="relative w-full h-full">
            
            {/* Top-Left Triangular Half (Slides to Top-Left) */}
            <motion.div
              initial={{ x: 0, y: 0 }}
              animate={
                stage === "slashed"
                  ? { x: "-120%", y: "-120%", opacity: 0 }
                  : { x: 0, y: 0, opacity: 1 }
              }
              transition={{ duration: 0.7, ease: [0.7, 0, 0.1, 1] }}
              style={{
                clipPath: "polygon(0 0, 100% 0, 0 100%)",
              }}
              className="absolute inset-0 bg-[#0b0b10] border-b border-[#ffd700]/50 flex items-center justify-center"
            >
              <div className="absolute top-8 left-8 text-xs text-[#ffd700] font-bold tracking-widest">
                [ 刀 TOP-LEFT SLASH // 侍 ]
              </div>
            </motion.div>

            {/* Bottom-Right Triangular Half (Slides to Bottom-Right) */}
            <motion.div
              initial={{ x: 0, y: 0 }}
              animate={
                stage === "slashed"
                  ? { x: "120%", y: "120%", opacity: 0 }
                  : { x: 0, y: 0, opacity: 1 }
              }
              transition={{ duration: 0.7, ease: [0.7, 0, 0.1, 1] }}
              style={{
                clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
              }}
              className="absolute inset-0 bg-[#0b0b10] border-t border-[#ffd700]/50 flex items-center justify-center"
            >
              <div className="absolute bottom-8 right-8 text-xs text-white/60 font-bold tracking-widest">
                AZKBRQLNA // JAPANESE CYBERPUNK
              </div>
            </motion.div>

            {/* Glowing Sword Slash Energy Blade (From Top-Left to Bottom-Right: 45 deg) */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: [0, 1, 1, 0], scaleX: [0, 1, 1, 1] }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 z-30 pointer-events-none flex items-center justify-center"
            >
              {/* Main Laser Katana Blade */}
              <div
                className="w-[220%] h-3.5 bg-gradient-to-r from-transparent via-[#ffffff] to-transparent transform rotate-[45deg]"
                style={{
                  boxShadow: "0 0 35px #ffffff, 0 0 70px #ffd700, 0 0 140px #ff5555",
                }}
              />
              {/* Secondary Gold Trail */}
              <div className="w-[220%] h-1 bg-[#ffd700] transform rotate-[45deg] blur-[1px]" />
            </motion.div>

          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
