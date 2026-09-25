"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Achievements", href: "/achievements" },
  {
    label: "CV",
    href: "https://ik.imagekit.io/Nothspec/CV_AzkaBariqlana.pdf",
    external: true,
  },
];

export default function MinimalNav() {
  const pathname = usePathname();
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

  const isLinkActive = (href, external) => {
    if (external) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <div ref={menuRef}>
      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4">
        <button
          onClick={() => setOpen((v) => !v)}
          className={`transition-colors p-1 -m-1 ${
            open ? "text-white" : "text-white/40 hover:text-white"
          }`}
          aria-label="Toggle navigation menu"
        >
          <span className="font-mono text-base tracking-widest leading-none select-none">
            ···
          </span>
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
            minWidth: "170px",
          }}
        >
          {NAV_LINKS.map((link) => {
            const active = isLinkActive(link.href, link.external);

            const content = (
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  {active && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4a853] shadow-[0_0_6px_#d4a853]" />
                  )}
                  <span className={active ? "font-medium" : ""}>
                    {link.label}
                  </span>
                </div>
                {link.external && (
                  <ArrowUpRight size={12} className="text-white/30" />
                )}
              </div>
            );

            const className = `flex items-center justify-between px-4 py-2.5 text-xs font-mono tracking-wider transition-colors ${
              active
                ? "text-[#d4a853] bg-[#d4a853]/10"
                : "text-white/60 hover:text-white hover:bg-white/[0.06]"
            }`;

            if (link.external) {
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className={className}
                >
                  {content}
                </a>
              );
            }

            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className={className}
              >
                {content}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
