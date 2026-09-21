"use client";

import React from "react";
import { Github, Linkedin, Instagram } from "lucide-react";

const SOCIALS = [
  { icon: Linkedin,  href: "https://linkedin.com/in/azka-bariqlana", label: "LinkedIn" },
  { icon: Github,    href: "https://github.com/azkbrqlna",            label: "GitHub" },
  { icon: Instagram, href: "https://instagram.com/azkbrqlna",        label: "Instagram" },
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
          className="text-white/40 hover:text-[#d4a853] transition-colors duration-200"
        >
          <Icon size={16} strokeWidth={1.5} />
        </a>
      ))}
      {/* Vertical line */}
      <div className="w-px h-24 bg-white/10 mt-2" />
    </div>
  );
}
