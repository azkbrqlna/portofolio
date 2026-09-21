"use client";

import React from "react";

export default function EmailSidebar() {
  return (
    <div className="fixed right-6 bottom-0 z-40 hidden lg:flex flex-col items-center gap-4 pb-0">
      <a
        href="mailto:azkbrqlna@gmail.com"
        className="text-white/40 hover:text-[#d4a853] transition-colors duration-200 font-mono text-[11px] tracking-widest"
        style={{ writingMode: "vertical-rl" }}
      >
        azkbrqlna@gmail.com
      </a>
      {/* Vertical line */}
      <div className="w-px h-24 bg-white/10 mt-2" />
    </div>
  );
}
