"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Zap, Menu, X } from "lucide-react";

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
    <header className="fixed top-0 left-0 right-0 z-50 font-mono text-xs select-none pointer-events-none">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-end">
        {/* Desktop Top-Right Navigation Menu */}
        <div className="hidden md:flex items-center gap-6 bg-[#111116]/90 backdrop-blur-md border border-white/20 px-5 py-2.5 rounded-full shadow-2xl pointer-events-auto">
          <nav className="flex items-center gap-5 tracking-wider">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-all hover:text-[#ffd700] flex items-center gap-1 py-1 ${
                    isActive ? "text-[#ffd700] font-bold" : "text-white/80"
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
              className="flex items-center gap-1.5 px-3 py-1 bg-[#ffd700]/10 hover:bg-[#ffd700] hover:text-[#111116] border border-[#ffd700]/40 text-[#ffd700] rounded-full text-[11px] font-bold transition-all shadow-sm"
              title="Katana Slash"
            >
              <Zap className="w-3 h-3 fill-current" />
              <span>SLASH</span>
            </button>
          )}
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex items-center gap-2 pointer-events-auto">
          {onTriggerSlash && (
            <button
              onClick={onTriggerSlash}
              className="p-2 bg-[#ffd700]/10 border border-[#ffd700]/40 text-[#ffd700] rounded-full"
            >
              <Zap className="w-4 h-4 fill-current" />
            </button>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 bg-[#111116]/90 border border-white/20 text-white rounded-full backdrop-blur-md shadow-lg"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden absolute top-16 right-4 bg-[#111116]/95 border border-white/20 p-4 rounded-2xl shadow-2xl flex flex-col gap-3 min-w-[180px] backdrop-blur-xl pointer-events-auto">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between p-2 rounded-lg transition-colors ${
                    isActive ? "bg-[#ffd700] text-[#111116] font-bold" : "text-white hover:bg-white/10"
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="text-[10px] opacity-60">[{item.jp}]</span>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
}
