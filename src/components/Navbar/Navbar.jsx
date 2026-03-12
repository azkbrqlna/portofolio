"use client";

import { useState, useEffect } from "react";
import NavItem from "./NavItem";
import Link from "next/link";
import { HiUser, HiBriefcase, HiFolder, HiDocumentText } from "react-icons/hi";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id], div[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <nav className="fixed bottom-4 left-0 w-full md:bottom-auto md:top-0 md:h-screen z-50 flex justify-center md:justify-start md:items-center p-4 pointer-events-none">
      {/* Tambahkan md:items-start dan p-2 di layar md agar tidak lari ke tengah */}
      <div className="group pointer-events-auto flex flex-row md:flex-col items-center md:items-start gap-6 md:gap-2 px-6 py-3 md:p-2 bg-white/90 dark:bg-neutral-950/90 backdrop-blur-md border border-neutral-300 dark:border-neutral-800 rounded-full md:rounded-2xl shadow-lg transition-all duration-300 w-auto md:w-[60px] md:hover:w-[160px] overflow-hidden">
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

        <div className="w-px h-6 md:w-full md:h-px bg-neutral-300 dark:bg-neutral-800 my-0 md:my-1"></div>

        {/* Tambahkan w-auto md:w-full overflow-hidden di sini */}
        <Link
          href="https://ik.imagekit.io/Nothspec/CV_AzkaBariqlana.pdf"
          passHref
          target="_blank"
          rel="noopener noreferrer"
          className="font-cera flex items-center gap-4 p-2 rounded-full md:rounded-xl transition-all duration-300 w-auto md:w-full overflow-hidden text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:text-neutral-300 hover:text-rose-500 dark:hover:text-rose-400 group/resume"
        >
          <div className="flex-shrink-0 transition-colors duration-300 flex items-center justify-center w-[20px]">
            <HiDocumentText size={20} />
          </div>
          <span className="hidden md:block whitespace-nowrap text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Resume
          </span>
        </Link>
      </div>
    </nav>
  );
}
