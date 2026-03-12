"use client";

import { useState, useEffect } from "react";
import NavItem from "./NavItem";
import Link from "next/link";
import { HiUser, HiBriefcase, HiFolder, HiDocumentText } from "react-icons/hi";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    // Memilih semua elemen yang memiliki ID (seperti id="about", id="projects")
    const sections = document.querySelectorAll("section[id], div[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Jika section tersebut masuk ke area tengah layar, jadikan aktif
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px", // Memicu perubahan saat section berada di tengah layar
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <nav className="fixed left-0 top-0 h-screen z-50 flex items-center p-4 pointer-events-none">
      <div className="group pointer-events-auto flex flex-col gap-4 p-3 bg-white/90 dark:bg-neutral-950/90 backdrop-blur-md border border-neutral-300 dark:border-neutral-800 rounded-2xl shadow-lg transition-all duration-300 w-[60px] hover:w-[160px] overflow-hidden">
        {/* Berikan activeColor yang berbeda untuk masing-masing item */}
        <NavItem
          href="#about"
          icon={<HiUser size={20} />}
          text="About"
          isActive={activeSection === "#about"}
          activeColor="text-blue-500 dark:text-blue-400"
        />
        <NavItem
          href="#projects"
          icon={<HiFolder size={20} />}
          text="Projects"
          isActive={activeSection === "#projects"}
          activeColor="text-emerald-500 dark:text-emerald-400"
        />
        <NavItem
          href="#experience"
          icon={<HiBriefcase size={20} />}
          text="Experience"
          isActive={activeSection === "#experience"}
          activeColor="text-purple-500 dark:text-purple-400"
        />

        <div className="h-px bg-neutral-300 dark:bg-neutral-800 my-1 w-full"></div>

        <Link
          href="https://ik.imagekit.io/Nothspec/CV_AzkaBariqlana.pdf"
          passHref
          target="_blank"
          rel="noopener noreferrer"
          className="font-cera flex items-center gap-4 p-2 rounded-xl transition-all duration-300 text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:text-neutral-300 hover:text-rose-500 dark:hover:text-rose-400 group/resume"
        >
          <div className="flex-shrink-0 transition-colors duration-300">
            <HiDocumentText size={20} />
          </div>
          <span className="whitespace-nowrap text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Resume
          </span>
        </Link>
      </div>
    </nav>
  );
}
