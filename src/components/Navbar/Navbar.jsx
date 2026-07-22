"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Shield, Zap, Terminal, ExternalLink } from "lucide-react";

export default function Navbar({ onTriggerSlash }) {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "HOME" },
    { href: "/projects", label: "PROJECTS" },
    { href: "/experience", label: "EXPERIENCE" },
    { href: "/about", label: "ABOUT" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#111116]/90 backdrop-blur-md border-b border-white/10 px-6 py-4 font-mono text-xs text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold tracking-widest hover:text-[#ffd700] transition-colors">
          <span className="w-2 h-2 rounded-full bg-[#ffd700] animate-pulse" />
          <span>AZKBRQLNA</span>
          <span className="text-white/40 text-[10px] hidden sm:inline">[01]</span>
        </Link>

        {/* Center / Right Multi-Page Nav Links */}
        <nav className="flex items-center gap-6 sm:gap-8 tracking-wider">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-all hover:text-[#ffd700] relative py-1 ${
                  isActive ? "text-[#ffd700] font-bold" : "text-white/70"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ffd700] shadow-[0_0_8px_#ffd700]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Widgets */}
        <div className="hidden md:flex items-center gap-4">
          {onTriggerSlash && (
            <button
              onClick={onTriggerSlash}
              className="flex items-center gap-1.5 px-3 py-1 bg-white/5 hover:bg-[#ffd700] hover:text-[#111116] border border-white/20 rounded text-[11px] font-bold transition-all"
            >
              <Zap className="w-3 h-3 fill-current" />
              <span>KATANA SLASH</span>
            </button>
          )}

          <a
            href="https://ik.imagekit.io/Nothspec/CV_AzkaBariqlana.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-1 bg-[#ffd700]/10 border border-[#ffd700]/40 text-[#ffd700] hover:bg-[#ffd700] hover:text-[#111116] rounded text-[11px] font-bold transition-all"
          >
            <span>CV</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

      </div>
    </header>
  );
}
