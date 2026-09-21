"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);

      // Only do section tracking on homepage
      if (pathname !== "/") return;

      // urutan dari bawah ke atas biar detect yang paling dekat
      const sections = ["contact", "experience", "projects", "about", "home"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const isHome = pathname === "/";

  const navItems = [
    { id: "home", label: "HOME" },
    { id: "about", label: "ABOUT" },
    { id: "projects", label: "PROJECTS" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "contact", label: "CONTACT" },
  ];

  const cvLink = "https://ik.imagekit.io/Nothspec/CV_AzkaBariqlana.pdf";

  const handleNavClick = (e, id) => {
    if (isHome) {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      setIsOpen(false);
    }
  };

  const getHref = (id) => {
    if (isHome) return `#${id}`;
    return id === "home" ? "/" : `/#${id}`;
  };

  return (
    <header className="fixed top-4 right-4 sm:top-6 sm:right-6 lg:right-10 z-50 font-mono text-xs select-none">
      {/* Desktop Navigation */}
      <div
        className={`hidden md:flex items-center gap-8 px-6 py-2.5 rounded-full transition-all duration-300 ${isScrolled
            ? "bg-[#111116]/85 backdrop-blur-md border border-white/10 shadow-2xl shadow-black/50 hover:border-[#ffd700]/30"
            : "bg-transparent border border-transparent shadow-none"
          }`}
      >
        <nav className="flex items-center gap-6 lg:gap-8 tracking-widest font-bold">
          {navItems.map((item) => {
            const isActive = isHome
              ? activeSection === item.id
              : pathname === (item.id === "home" ? "/" : `/${item.id}`);
            return (
              <Link
                key={item.id}
                href={getHref(item.id)}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`relative py-1 transition-colors group ${isActive ? "text-[#ffd700]" : "text-white/80 hover:text-white"
                  }`}
              >
                <span>{item.label}</span>
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#ffd700] transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                />
              </Link>
            );
          })}

          {/* CV Link */}
          <Link
            href={cvLink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative py-1 transition-colors group text-[#ffd700] flex items-center gap-1 font-bold"
            title="View CV / Resume"
          >
            <span>CV</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[2px] bg-[#ffd700] transition-all duration-300" />
          </Link>
        </nav>
      </div>

      {/* Mobile Navigation Toggle */}
      <div className="md:hidden flex items-center gap-4 bg-[#111116]/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
        <Link
          href={cvLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#ffd700] font-bold text-xs flex items-center gap-1"
        >
          <span>CV</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white hover:text-[#ffd700] transition-colors"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-14 right-0 bg-[#111116]/95 border border-white/20 p-5 rounded-xl shadow-2xl flex flex-col gap-4 min-w-[180px] backdrop-blur-xl">
          {navItems.map((item) => {
            const isActive = isHome
              ? activeSection === item.id
              : pathname === (item.id === "home" ? "/" : `/${item.id}`);
            return (
              <Link
                key={item.id}
                href={getHref(item.id)}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`relative py-1 font-mono text-xs transition-colors group w-fit ${isActive ? "text-[#ffd700] font-bold" : "text-white/80 hover:text-white"
                  }`}
              >
                <span>{item.label}</span>
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#ffd700] transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                />
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}