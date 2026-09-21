"use client";

import React, { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skill Sets", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function MinimalNav() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div ref={menuRef}>
      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4">
        <button
          onClick={() => setOpen((v) => !v)}
          className="text-white/40 hover:text-white transition-colors p-1 -m-1"
          aria-label="Toggle navigation menu"
        >
          {open ? (
            <X size={16} />
          ) : (
            <span className="font-mono text-base tracking-widest leading-none select-none">
              ···
            </span>
          )}
        </button>

        <span className="font-mono text-[11px] tracking-[0.25em] text-white/20 uppercase select-none">
          azkbrqlna
        </span>
      </header>

      {/* Dropdown menu */}
      {open && (
        <div
          className="fixed top-12 left-6 z-50 rounded-xl overflow-hidden shadow-2xl py-1.5 animate-in fade-in zoom-in-95 duration-150"
          style={{
            background: "rgba(18,18,24,0.96)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(20px)",
            minWidth: "160px",
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2 text-xs text-white/60 hover:text-white hover:bg-white/[0.06] transition-colors font-mono tracking-wider"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
