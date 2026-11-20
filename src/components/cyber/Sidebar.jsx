"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
  {
    path: "/",
    label: "[ SYS_ROOT ]",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="shrink-0">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    path: "/archive",
    label: "[ ARCHIVE_DIR ]",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="shrink-0">
        <path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="M3 15h6M3 18h6" />
      </svg>
    ),
  },
  {
    path: "#", // Placeholder for contact/comms
    label: "[ COMMS ]",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="shrink-0">
        <polygon points="22 2 15 22 11 13 2 9 22 2" />
        <path d="M22 2 11 13" />
      </svg>
    ),
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="fixed left-0 top-0 h-screen w-16 md:w-20 bg-cyber-surface border-r border-cyber-elevated z-50 flex flex-col items-center py-8">
      {/* Top Logo / Marker */}
      <div className="mb-12">
        <div className="w-8 h-8 border border-cyber-accent bg-cyber-base flex items-center justify-center transform rotate-45 group hover:border-cyber-accentAlt transition-colors cursor-crosshair">
          <div className="w-2 h-2 bg-cyber-accent group-hover:bg-cyber-accentAlt animate-pulse"></div>
        </div>
      </div>

      {/* Nav Links */}
      <div className="flex-1 flex flex-col gap-8 w-full">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link key={item.path} href={item.path} className="relative group flex items-center justify-center w-full h-12">
              {/* Active Indicator Line */}
              {isActive && (
                <motion.div
                  layoutId="active-nav"
                  className="absolute left-0 w-1 h-full bg-cyber-accent border-glow"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
              
              <div className={`relative flex items-center justify-center w-10 h-10 transition-colors duration-300 ${isActive ? "text-cyber-accent" : "text-cyber-muted group-hover:text-cyber-text"}`}>
                {item.icon}
              </div>

              {/* Hover Label */}
              <div className="absolute left-full ml-2 px-3 py-1 bg-cyber-elevated border border-cyber-highest text-cyber-accent text-xs font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
                {item.label}
              </div>
            </Link>
          );
        })}
      </div>

      {/* Bottom marker */}
      <div className="mt-auto flex flex-col items-center gap-2 text-cyber-muted opacity-30">
        <div className="w-[1px] h-12 bg-cyber-muted"></div>
        <span className="text-[10px] font-mono [writing-mode:vertical-lr] transform rotate-180 tracking-widest">v1.0.4_SYS</span>
      </div>
    </nav>
  );
}
