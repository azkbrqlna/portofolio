"use client";

import React, { useState } from "react";
import { Github, Linkedin, Instagram, Mail, ArrowUpRight, Copy, Check } from "lucide-react";

const LINKS = [
  {
    icon: Mail,
    label: "Email",
    value: "azkbrqlna@gmail.com",
    href: "mailto:azkbrqlna@gmail.com",
    canCopy: true,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/azkbrqlna",
    href: "https://github.com/azkbrqlna",
    canCopy: false,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/azka-bariqlana",
    href: "https://linkedin.com/in/azka-bariqlana",
    canCopy: false,
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "instagram.com/azkbrqlna",
    href: "https://instagram.com/azkbrqlna",
    canCopy: false,
  },
];

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e, val) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(val);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      <p className="text-[15px] text-white/55 leading-relaxed">
        Feel free to reach out, whether it's a project collaboration, an opportunity,
        or just to say hello.
      </p>

      <div className="divide-y divide-white/[0.06] pt-2">
        {LINKS.map(({ icon: Icon, label, value, href, canCopy }) => (
          <div
            key={label}
            className="group flex items-center justify-between py-3.5"
          >
            <a
              href={href}
              target={href.startsWith("mailto") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center gap-3.5 flex-1 min-w-0"
            >
              <Icon
                size={16}
                className="text-white/30 group-hover:text-[#d4a853] transition-colors shrink-0"
                strokeWidth={1.5}
              />
              <div className="truncate">
                <p className="font-mono text-[10px] text-white/30 uppercase tracking-widest mb-0.5">
                  {label}
                </p>
                <p className="text-[13.5px] text-white/70 group-hover:text-white transition-colors truncate">
                  {value}
                </p>
              </div>
            </a>

            <div className="flex items-center gap-2 shrink-0">
              {canCopy && (
                <button
                  onClick={(e) => handleCopy(e, value)}
                  className="px-2 py-1 text-[11px] font-mono text-white/40 hover:text-white border border-white/[0.08] hover:border-white/20 rounded transition-colors"
                  title="Copy to clipboard"
                >
                  {copied ? (
                    <span className="text-emerald-400 flex items-center gap-1">
                      <Check size={11} /> Copied
                    </span>
                  ) : (
                    <span className="flex items-center gap-1">
                      <Copy size={11} /> Copy
                    </span>
                  )}
                </button>
              )}
              <a
                href={href}
                target={href.startsWith("mailto") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="text-white/25 group-hover:text-[#d4a853] transition-colors p-1"
                aria-label={`Open ${label}`}
              >
                <ArrowUpRight size={15} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
