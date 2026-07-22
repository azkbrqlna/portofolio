"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Zap, Menu, X, Terminal } from "lucide-react";

export default function Navbar({ onTriggerSlash }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "HOME", jp: "ホーム" },
    { href: "/projects", label: "PROJECTS", jp: "作品" },
    { href: "/experience", label: "EXPERIENCE", jp: "経歴" },
    { href: "/about", label: "ABOUT", jp: "私について" },
    { href: "/contact", label: "CONTACT", jp: "連絡先" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-[#0c0c12]/85 backdrop-blur-xl border-b border-white/10 font-mono text-xs select-none shadow-2xl">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Left Side: Brand Logo Badge */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-[#ffd700] text-[#ffd700] transition-colors">
            <Terminal className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-sans font-black text-sm sm:text-base text-white tracking-widest uppercase group-hover:text-[#ffd700] transition-colors">
                AZKBRQLNA
              </span>
              <span className="w-2 h-2 rounded-full bg-[#50fa7b] animate-pulse" />
            </div>
            <span className="text-[10px] text-white/40 font-mono">SYS_OP // [アズカ]</span>
          </div>
        </Link>

        {/* Right Side: Desktop Nav Menu & Slash Button */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6 tracking-wider">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-all hover:text-[#ffd700] flex items-center gap-1.5 py-1.5 border-b-2 ${
                    isActive
                      ? "text-[#ffd700] font-bold border-[#ffd700]"
                      : "text-white/80 border-transparent hover:border-white/30"
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="text-[10px] text-white/40 font-normal">[{item.jp}]</span>
                </Link>
              );
            })}
          </nav>

          {/* Katana Slash Trigger Button */}
          {onTriggerSlash && (
            <button
              onClick={onTriggerSlash}
              className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#ffd700]/10 hover:bg-[#ffd700] hover:text-[#111116] border border-[#ffd700]/40 text-[#ffd700] rounded-lg text-xs font-bold transition-all shadow-md active:scale-95"
              title="Katana Slash"
            >
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>SLASH</span>
            </button>
          )}
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex items-center gap-2">
          {onTriggerSlash && (
            <button
              onClick={onTriggerSlash}
              className="p-2 bg-[#ffd700]/10 border border-[#ffd700]/40 text-[#ffd700] rounded-lg"
            >
              <Zap className="w-4 h-4 fill-current" />
            </button>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 bg-white/5 border border-white/20 text-white rounded-lg backdrop-blur-md"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0c0c12]/98 border-b border-white/20 px-4 py-4 flex flex-col gap-3 backdrop-blur-2xl">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between p-3 rounded-lg font-mono text-xs transition-colors ${
                  isActive
                    ? "bg-[#ffd700] text-[#111116] font-bold"
                    : "text-white hover:bg-white/10"
                }`}
              >
                <span>{item.label}</span>
                <span className="text-[10px] opacity-60">[{item.jp}]</span>
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
