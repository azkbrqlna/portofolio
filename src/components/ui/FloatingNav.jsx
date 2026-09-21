"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function FloatingNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Floating Pill Container */}
      <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <nav
          className={`pointer-events-auto flex items-center justify-between gap-4 sm:gap-6 px-4 sm:px-5 py-2.5 rounded-full border transition-all duration-300 ${
            scrolled
              ? "bg-[#0e0f15]/90 border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.4)] backdrop-blur-xl"
              : "bg-[#13141c]/75 border-white/[0.07] shadow-[0_4px_20px_rgb(0,0,0,0.2)] backdrop-blur-md"
          }`}
        >
          {/* Identity & Status */}
          <a
            href="#home"
            className="flex items-center gap-2 group text-white/90 hover:text-white transition-colors"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-mono text-xs font-semibold tracking-wider uppercase text-white/80 group-hover:text-white">
              azkbrqlna
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-1 text-xs font-mono text-white/50 hover:text-white hover:bg-white/[0.05] rounded-full transition-all duration-150"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Action */}
          <div className="flex items-center gap-2">
            <a
              href="mailto:azkbrqlna@gmail.com"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono text-[#d4a853] bg-[#d4a853]/10 hover:bg-[#d4a853]/20 border border-[#d4a853]/30 rounded-full transition-all duration-150"
            >
              <Mail size={12} />
              <span>Let's talk</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="md:hidden p-1.5 text-white/60 hover:text-white rounded-full hover:bg-white/5 transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-x-4 top-20 z-50 p-5 rounded-2xl md:hidden bg-[#11121a]/95 border border-white/10 backdrop-blur-2xl shadow-2xl space-y-3"
        >
          <div className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-mono text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between px-1">
            <a
              href="mailto:azkbrqlna@gmail.com"
              className="text-xs font-mono text-[#d4a853] hover:underline flex items-center gap-1.5"
            >
              <Mail size={13} />
              azkbrqlna@gmail.com
            </a>
            <div className="flex items-center gap-3 text-white/40">
              <a
                href="https://github.com/azkbrqlna"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                <Github size={15} />
              </a>
              <a
                href="https://linkedin.com/in/azka-bariqlana"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                <Linkedin size={15} />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
