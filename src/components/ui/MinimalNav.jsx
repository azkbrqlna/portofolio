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
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 pointer-events-none">
        <button
          onClick={() => setOpen((v) => !v)}
          className="pointer-events-auto transition-opacity duration-200 p-1 -m-1 text-white hover:opacity-75 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <span className="font-mono text-xl tracking-widest leading-none select-none font-bold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
            ···
          </span>
        </button>

        <span className="pointer-events-auto font-mono text-xs tracking-[0.28em] text-white uppercase select-none font-semibold drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
          azkbrqlna
        </span>
      </header>

      {/* Dropdown menu */}
      {open && (
        <div
          className="fixed top-14 left-6 z-50 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_0_1px_rgba(255,255,255,0.08)] p-1.5 animate-in fade-in zoom-in-95 duration-150 pointer-events-auto"
          style={{
            background: "rgba(15, 16, 21, 0.95)",
            backdropFilter: "blur(24px)",
            minWidth: "185px",
          }}
        >
          {NAV_LINKS.map((link) => {
            const active = isLinkActive(link.href, link.external);

            const content = (
              <div className="flex items-center justify-between w-full">
                <span className={active ? "font-semibold text-white" : "font-normal"}>
                  {link.label}
                </span>
                {link.external && (
                  <ArrowUpRight
                    size={13}
                    className="text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                  />
                )}
              </div>
            );

            const className = `group flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-mono tracking-wider transition-all duration-200 ${
              active
                ? "text-white bg-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
                : "text-white/60 hover:text-white hover:bg-white/[0.04]"
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
