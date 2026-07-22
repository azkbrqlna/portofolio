"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SwordSlashLoader({ onComplete, forceTrigger = 0 }) {
  const [stage, setStage] = useState("slash"); // 'slash', 'slashed', 'done'
  const [key, setKey] = useState(0);

  useEffect(() => {
    // Single neon slash sweeping from Top-Right to Bottom-Left
    setStage("slash");
    setKey((prev) => prev + 1);

    // Timeline:
    // 0ms: Single neon slash laser cuts from top-right to bottom-left
    // 350ms: Split halves slide away to top-right & bottom-left
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
            
            {/* Top-Right Triangular Half (Slides to Top-Right) */}
            <motion.div
              initial={{ x: 0, y: 0 }}
              animate={
                stage === "slashed"
                  ? { x: "120%", y: "-120%", opacity: 0 }
                  : { x: 0, y: 0, opacity: 1 }
              }
              transition={{ duration: 0.7, ease: [0.7, 0, 0.1, 1] }}
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%)",
              }}
              className="absolute inset-0 bg-[#0b0b10] border-b border-[#ffd700]/60 flex items-center justify-center"
            >
              <div className="absolute top-8 right-8 text-xs text-[#ffd700] font-bold tracking-widest">
                [ 刀 NEON SLASH // 侍 ]
              </div>
            </motion.div>

            {/* Bottom-Left Triangular Half (Slides to Bottom-Left) */}
            <motion.div
              initial={{ x: 0, y: 0 }}
              animate={
                stage === "slashed"
                  ? { x: "-120%", y: "120%", opacity: 0 }
                  : { x: 0, y: 0, opacity: 1 }
              }
              transition={{ duration: 0.7, ease: [0.7, 0, 0.1, 1] }}
              style={{
                clipPath: "polygon(0 0, 0 100%, 100% 100%)",
              }}
              className="absolute inset-0 bg-[#0b0b10] border-t border-[#ffd700]/60 flex items-center justify-center"
            >
              <div className="absolute bottom-8 left-8 text-xs text-white/70 font-bold tracking-widest">
                AZKBRQLNA // JAPANESE NEON CORE
              </div>
            </motion.div>

            {/* 1 Single Glowing Neon Laser Blade (From Top-Right to Bottom-Left: -45 deg) */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: [0, 1, 1, 0], scaleX: [0, 1, 1, 1] }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 z-30 pointer-events-none flex items-center justify-center"
            >
              {/* Single Neon Beam */}
              <div
                className="w-[240%] h-4 bg-gradient-to-r from-transparent via-[#ffffff] to-transparent transform -rotate-[45deg]"
                style={{
                  boxShadow: "0 0 20px #ffffff, 0 0 50px #ffd700, 0 0 100px #00f5d4, 0 0 150px #ff5555",
                }}
              />
            </motion.div>

          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
