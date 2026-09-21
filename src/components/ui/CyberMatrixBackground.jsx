"use client";

import React from "react";

export default function CyberMatrixBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Deep dark base */}
      <div className="absolute inset-0 bg-[#0c0d12]" />

      {/* Subtle ambient lighting spots */}
      <div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-20 blur-[130px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(212, 168, 83, 0.25) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full opacity-15 blur-[120px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.2) 0%, transparent 70%)",
        }}
      />

      {/* Subtle micro dot grid */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Vignette smoothing edges */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 50% 30%, transparent 40%, rgba(12,13,18,0.85) 90%)",
        }}
      />
    </div>
  );
}
