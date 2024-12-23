"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import TypingAnimation from "../ui/typing-animation";
import NavItem from "./NavItem";
import Link from "next/link";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="relative flex justify-between items-center p-6">
      <div className="text-2xl">
        <TypingAnimation className="font-cera text-md">
          Azkbrqlna_
        </TypingAnimation>
      </div>
      <div className="flex items-center space-x-8">
        <div className="hidden md:flex justify-end items-center space-x-6">
          <NavItem href="/">About</NavItem>
          <NavItem href="/experience">Experience</NavItem>
          <NavItem href="/skills">Skills</NavItem>
          <NavItem href="/projects">Project</NavItem>
        </div>

        <Link
          href="https://drive.google.com/file/d/1i-uA3AYSPpRyU3U5W1ETKHz2h90Zthy6/view?usp=sharing"
          passHref
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="hidden md:block">CV</Button>
        </Link>

        <button
          className="md:hidden flex items-center space-x-2"
          onClick={toggleMobileMenu}
        >
          <Menu className="w-6 h-6 text-black dark:text-white" />
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-16 right-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 md:hidden z-50">
          <div className="flex flex-col items-center space-y-4">
            <NavItem href="/" onClick={toggleMobileMenu}>
              About
            </NavItem>
            <NavItem href="/experience" onClick={toggleMobileMenu}>
              Experience
            </NavItem>
            <NavItem href="/skills" onClick={toggleMobileMenu}>
              Skills
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
              <Button className="w-full">CV</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
