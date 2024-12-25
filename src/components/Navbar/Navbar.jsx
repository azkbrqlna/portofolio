"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import TypingAnimation from "../ui/typing-animation";
import NavItem from "./NavItem";
import Link from "next/link";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-neutral-950 z-50 flex justify-between items-center p-6 border-b border-zinc-300 dark:border-zinc-800">
      <div className="text-2xl">
        <TypingAnimation className="font-cera text-md">
          Portofolio
        </TypingAnimation>
      </div>
      <div className="flex items-center space-x-8">
        <div className="hidden md:flex justify-end items-center space-x-6">
          <NavItem href="/">About</NavItem>
          <NavItem href="/projects">Projects</NavItem>
        </div>

        <Link
          href="https://drive.google.com/file/d/1i-uA3AYSPpRyU3U5W1ETKHz2h90Zthy6/view?usp=sharing"
          passHref
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="hidden md:block">Resume</Button>
        </Link>

        <button
          className="md:hidden flex items-center space-x-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
        </button>
      </div>

      <div
        className={`absolute top-16 right-6 bg-white dark:bg-zinc-800 shadow-lg rounded-lg p-4 md:hidden z-50 border border-zinc-300 dark:border-zinc-800 transform transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center space-y-4">
          <NavItem href="/" onClick={toggleMobileMenu}>
            About
          </NavItem>
          <NavItem href="/projects" onClick={toggleMobileMenu}>
            Project
          </NavItem>
          <Link
            href="https://drive.google.com/file/d/1i-uA3AYSPpRyU3U5W1ETKHz2h90Zthy6/view?usp=sharing"
            passHref
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-full">Resume</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
