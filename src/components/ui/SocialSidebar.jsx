"use client";

import React from "react";
import { Github, Linkedin, Instagram } from "lucide-react";

const SOCIALS = [
  { icon: Linkedin, href: "https://linkedin.com/in/azkbrqlna", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/azkbrqlna", label: "GitHub" },
  { icon: Instagram, href: "https://instagram.com/azkbrqlna", label: "Instagram" },
];

export default function SocialSidebar() {
  return (
    <div className="fixed left-6 bottom-0 z-40 hidden lg:flex flex-col items-center gap-5 pb-0">
      {SOCIALS.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-white hover:text-[#d4a853] transition-all duration-200 hover:scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
        >
          <Icon size={18} strokeWidth={2} />
        </a>
      ))}
      {/* Vertical line - bright crisp white */}
      <div className="w-px h-24 bg-gradient-to-b from-white/90 via-white/50 to-transparent shadow-[0_0_8px_rgba(255,255,255,0.4)] mt-2" />
    </div>
  );
}
