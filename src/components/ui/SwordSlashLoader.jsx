"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Shield, Terminal } from "lucide-react";

export default function SwordSlashLoader({ onComplete, forceTrigger = 0 }) {
  const [stage, setStage] = useState("loading"); // 'loading', 'slashed', 'done'
  const [key, setKey] = useState(0);

  useEffect(() => {
    // Reset stage whenever forceTrigger updates
    setStage("loading");
    setKey((prev) => prev + 1);

    // Timeline:
    // 0ms: Initializing
    // 1200ms: Slash cuts diagonally across screen
    // 1700ms: Split halves slide away
    // 2500ms: Complete

    const timer1 = setTimeout(() => {
      setStage("slash");
    }, 1100);

    const timer2 = setTimeout(() => {
      setStage("slashed");
    }, 1600);

    const timer3 = setTimeout(() => {
      setStage("done");
      if (onComplete) onComplete();
    }, 2400);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [forceTrigger, onComplete]);

  if (stage === "done") return null;

  return (
    <div key={key} className="fixed inset-0 z-[9999] pointer-events-auto overflow-hidden font-mono">
      <AnimatePresence>
        {stage !== "done" && (
          <div className="relative w-full h-full">
            {/* Top-Right Triangular Half */}
            <motion.div
              initial={{ x: 0, y: 0 }}
              animate={
                stage === "slashed"
                  ? { x: "120%", y: "-120%", opacity: 0 }
                  : { x: 0, y: 0, opacity: 1 }
              }
              transition={{ duration: 0.8, ease: [0.7, 0, 0.1, 1] }}
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%)",
              }}
              className="absolute inset-0 bg-[#0d0d15] bg-gradient-to-br from-[#181825] via-[#0d0d15] to-[#141221] border-b border-[#ff5555]/30 flex items-center justify-center"
            >
              <div className="absolute top-8 right-8 flex items-center gap-3 text-xs text-[#bd93f9]/70">
                <span className="w-2 h-2 rounded-full bg-[#50fa7b] animate-ping" />
                <span>KATANA_CORE // v2.5.0</span>
              </div>
            </motion.div>

            {/* Bottom-Left Triangular Half */}
            <motion.div
              initial={{ x: 0, y: 0 }}
              animate={
                stage === "slashed"
                  ? { x: "-120%", y: "120%", opacity: 0 }
                  : { x: 0, y: 0, opacity: 1 }
              }
              transition={{ duration: 0.8, ease: [0.7, 0, 0.1, 1] }}
              style={{
                clipPath: "polygon(0 0, 0 100%, 100% 100%)",
              }}
              className="absolute inset-0 bg-[#0d0d15] bg-gradient-to-br from-[#141221] via-[#0d0d15] to-[#181825] border-t border-[#ff5555]/30 flex items-center justify-center"
            >
              <div className="absolute bottom-8 left-8 flex items-center gap-3 text-xs text-[#8be9fd]/70">
                <Terminal className="w-4 h-4 text-[#bd93f9]" />
                <span>AZKA BARIQLANA // SYSTEM READY</span>
              </div>
            </motion.div>

            {/* Center Loading Content (Fades Out Right Before Slash) */}
            <AnimatePresence>
              {stage === "loading" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none px-4"
                >
                  {/* Cyber Emblem */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-[#1e1e2e] border-2 border-[#bd93f9] flex items-center justify-center shadow-[0_0_30px_rgba(189,147,249,0.5)]">
                      <Zap className="w-10 h-10 text-[#ff79c6] animate-pulse" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-[#8be9fd]" />
                    <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-[#ff5555]" />
                  </div>

                  {/* Title & Tagline */}
                  <h2 className="text-2xl md:text-3xl font-extrabold tracking-widest text-[#f8f8f2] text-center mb-2">
                    AZKA BARIQLANA
                  </h2>
                  <div className="flex items-center gap-2 text-xs md:text-sm text-[#bd93f9] bg-[#1e1e2e]/80 border border-[#bd93f9]/40 px-4 py-1.5 rounded-full mb-6 shadow-sm">
                    <Shield className="w-4 h-4 text-[#ff5555]" />
                    <span>CYBERSECURITY & FULLSTACK ARCHITECT</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-64 max-w-full h-1.5 bg-[#1e1e2e] rounded-full overflow-hidden border border-[#bd93f9]/30 relative">
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                      className="h-full bg-gradient-to-r from-[#bd93f9] via-[#ff79c6] to-[#ff5555] shadow-[0_0_15px_#ff79c6]"
                    />
                  </div>
                  <div className="mt-3 text-[11px] text-[#6272a4] tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#ff5555] rounded-full animate-ping" />
                    CHARGING KATANA BLADE PROTOCOL...
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Glowing Sword Slash Energy Line */}
            {(stage === "slash" || stage === "slashed") && (
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: [0, 1, 1, 0], scaleX: [0, 1, 1, 1] }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 z-30 pointer-events-none flex items-center justify-center"
              >
                {/* Main Laser Beam Blade */}
                <div
                  className="w-[200%] h-3 bg-gradient-to-r from-transparent via-[#ffffff] to-transparent shadow-[0_0_40px_#ff5555,0_0_80px_#bd93f9] transform -rotate-[45deg]"
                  style={{
                    boxShadow: "0 0 25px #ffffff, 0 0 50px #ff5555, 0 0 100px #bd93f9",
                  }}
                />
                {/* Secondary Slash Spark Ribbon */}
                <div
                  className="w-[200%] h-1 bg-[#8be9fd] transform -rotate-[45deg] blur-[1px]"
                />
              </motion.div>
            )}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
