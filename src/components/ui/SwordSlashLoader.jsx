"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SwordSlashLoader({ onComplete, forceTrigger = 0 }) {
  const [stage, setStage] = useState("slash"); // 'slash', 'slashed', 'done'
  const [key, setKey] = useState(0);

  useEffect(() => {
    // Single neon laser slash from Top-Left to Bottom-Right (+45deg)
    setStage("slash");
    setKey((prev) => prev + 1);

    // Timeline:
    // 0ms: Single neon laser blade cuts along top-left to bottom-right axis
    // 300ms: Split halves slide away perpendicularly (Top-Right & Bottom-Left)
    // 1000ms: Animation complete

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
  }, [forceTrigger, onComplete]);

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

            {/* Single Glowing Neon Laser Blade (Aligned Top-Left to Bottom-Right: 45deg) */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: [0, 1, 1, 0], scaleX: [0, 1, 1, 1] }}
              transition={{ duration: 0.45 }}
              className="absolute inset-0 z-30 pointer-events-none flex items-center justify-center"
            >
              <div
                className="w-[250%] h-3 bg-gradient-to-r from-transparent via-[#ffffff] to-transparent transform rotate-[45deg]"
                style={{
                  boxShadow: "0 0 25px #ffffff, 0 0 50px #ffd700, 0 0 100px #ff5555",
                }}
              />
            </motion.div>

          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
