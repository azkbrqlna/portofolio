import { Button } from "../ui/button";
import TypingAnimation from "../ui/typing-animation";
import NavItem from "./NavItem";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6">
      <div className="text-2xl">
        <TypingAnimation className="font-cera text-md">
          Azkbrqlna_
        </TypingAnimation>
      </div>
      <div className="flex items-center space-x-8">
        <div className="flex justify-end items-center space-x-6">
          <NavItem href="/">About</NavItem>
          <NavItem href="/experience">Experience</NavItem>
          <NavItem href="/skills">Skills</NavItem>
          <NavItem href="/projects">Project</NavItem>
        </div>

        {/* Wrap Button in Link */}
        <Link
          href="https://drive.google.com/file/d/1i-uA3AYSPpRyU3U5W1ETKHz2h90Zthy6/view?usp=sharing"
          passHref
        >
          <Button as="a">CV</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
