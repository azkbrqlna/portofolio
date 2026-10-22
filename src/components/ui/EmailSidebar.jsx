"use client";

import React from "react";

export default function EmailSidebar() {
  return (
    <div className="fixed right-6 bottom-0 z-40 hidden lg:flex flex-col items-center gap-4 pb-0">
      <a
        href="mailto:azkbrqlna@gmail.com"
        className="text-white hover:text-[#d4a853] transition-colors duration-200 font-mono text-[11px] tracking-widest font-medium drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
        style={{ writingMode: "vertical-rl" }}
      >
        azkbrqlna@gmail.com
      </a>
      {/* Vertical line - bright crisp white */}
      <div className="w-px h-24 bg-gradient-to-b from-white/90 via-white/50 to-transparent shadow-[0_0_8px_rgba(255,255,255,0.4)] mt-2" />
    </div>
  );
}
