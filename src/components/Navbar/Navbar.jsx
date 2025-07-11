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
    <nav className="fixed top-0 left-0 w-full font-cera bg-white dark:bg-neutral-950 z-50 flex justify-between items-center p-4 border-b border-neutral-300 dark:border-neutral-800">
      <TypingAnimation className="text-xl">Portfolio</TypingAnimation>

      <div className="flex items-center space-x-8">
        {/* Desktop Menu */}
        <div className="hidden md:flex justify-end items-center space-x-6">
          <NavItem href="#about">About</NavItem>
          <NavItem href="#projects">Projects</NavItem>
          <NavItem href="#experience">Experience</NavItem>
        </div>

        {/* Resume Button */}
        <Link
          href="https://drive.google.com/file/d/1L4LwS6IP6CN_kAMrjFI6VqZ3397YXNI4/view?usp=sharing"
          passHref
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="hidden md:block">Resume</Button>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="md:hidden flex items-center space-x-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <HiX size={25} /> : <HiMenuAlt3 size={25} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 right-6 bg-white dark:bg-neutral-900 shadow-lg rounded-lg p-4 md:hidden z-50 border border-neutral-300 dark:border-neutral-900 transform transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center space-y-4">
          <NavItem href="#about" onClick={toggleMobileMenu}>
            About
          </NavItem>
          <NavItem href="#projects" onClick={toggleMobileMenu}>
            Projects
          </NavItem>
          <NavItem href="#experience" onClick={toggleMobileMenu}>
            Experience
          </NavItem>
          <Link
            href="https://drive.google.com/file/d/1L4LwS6IP6CN_kAMrjFI6VqZ3397YXNI4/view?usp=sharing"
            passHref
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-full" onClick={toggleMobileMenu}>
              Resume
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
