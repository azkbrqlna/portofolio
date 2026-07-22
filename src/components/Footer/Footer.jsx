"use client";

import React from "react";
import { Shield, Terminal, ArrowUp } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#0d0d15] border-t border-[#bd93f9]/20 py-8 px-6 mt-20 relative z-10 font-mono text-xs text-[#6272a4]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left Status Info */}
        <div className="flex items-center gap-2 text-[#f8f8f2]">
          <Shield className="w-4 h-4 text-[#ff5555]" />
          <span className="font-bold tracking-wider">AZKA BARIQLANA</span>
          <span className="text-[#bd93f9]">// CYBERPUNK DRACULA CORE</span>
        </div>

        {/* Center Copyright */}
        <div className="text-center">
          &copy; {year} ALL RIGHTS RESERVED. ARCHITECTED WITH NEXT.JS 15 & TAILWIND CSS.
        </div>

        {/* Right Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#1e1e2e] hover:bg-[#bd93f9] text-[#bd93f9] hover:text-[#1e1e2e] border border-[#bd93f9]/30 transition-all"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
}
