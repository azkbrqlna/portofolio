"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { User, FolderGit2, Briefcase, FileText, Zap, Shield, Sparkles } from "lucide-react";

export default function Navbar({ onTriggerSlash }) {
  const [activeSection, setActiveSection] = useState("#about");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const navItems = [
    { href: "#about", icon: User, label: "ABOUT", color: "#8be9fd" },
    { href: "#skills", icon: Sparkles, label: "SKILLS", color: "#bd93f9" },
    { href: "#projects", icon: FolderGit2, label: "PROJECTS", color: "#ff79c6" },
    { href: "#experience", icon: Briefcase, label: "EXPERIENCE", color: "#50fa7b" },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="pointer-events-auto flex items-center justify-between gap-4 px-5 py-2.5 bg-[#161622]/90 backdrop-blur-xl border border-[#bd93f9]/30 rounded-2xl shadow-[0_0_25px_rgba(189,147,249,0.2)] max-w-4xl w-full">
        
        {/* Brand / Logo */}
        <Link href="#about" className="flex items-center gap-2 font-mono text-sm font-bold text-[#f8f8f2] hover:text-[#bd93f9] transition-colors">
          <Shield className="w-5 h-5 text-[#ff5555]" />
          <span className="hidden sm:inline">AZK.DEV</span>
        </Link>

        {/* Navigation Items */}
        <nav className="flex items-center gap-1 sm:gap-2 font-mono text-xs">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all ${
                  isActive
                    ? "bg-[#1e1e2e] text-[#f8f8f2] border border-[#bd93f9] shadow-[0_0_12px_rgba(189,147,249,0.4)]"
                    : "text-[#6272a4] hover:text-[#f8f8f2] hover:bg-[#1e1e2e]/50"
                }`}
              >
                <Icon className="w-3.5 h-3.5" style={{ color: isActive ? item.color : undefined }} />
                <span className="hidden md:inline">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Actions: Sword Slash Trigger & Resume */}
        <div className="flex items-center gap-2 font-mono text-xs">
          <button
            onClick={() => onTriggerSlash && onTriggerSlash()}
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#ff5555]/20 hover:bg-[#ff5555] text-[#ff5555] hover:text-[#1e1e2e] border border-[#ff5555]/40 text-xs font-bold transition-all shadow-sm"
            title="Trigger Katana Sword Slash Animation"
          >
            <Zap className="w-3.5 h-3.5 fill-current" />
            <span className="hidden sm:inline">SLASH</span>
          </button>

          <Link
            href="https://ik.imagekit.io/Nothspec/CV_AzkaBariqlana.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#1e1e2e] hover:bg-[#bd93f9] text-[#bd93f9] hover:text-[#1e1e2e] border border-[#bd93f9]/40 font-bold transition-all shadow-sm"
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">CV</span>
          </Link>
        </div>

      </div>
    </header>
  );
}
