"use client";

import React, { useState } from "react";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiPhp,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiLaravel,
  SiExpress,
  SiNodedotjs,
  SiBootstrap,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiDocker,
  SiLinux,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma,
  SiWireshark,
  SiKalilinux,
  SiBurpsuite,
  SiFlutter,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

const SKILL_CATEGORIES = [
  {
    title: "Programming Language",
    items: [
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6", href: "https://www.typescriptlang.org/" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "Python", icon: SiPython, color: "#3776AB", href: "https://www.python.org/" },
      { name: "PHP", icon: SiPhp, color: "#777BB4", href: "https://www.php.net/" },
      { name: "Flutter", icon: SiFlutter, color: "#02569B", href: "https://flutter.dev/" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    ],
  },
  {
    title: "Framework and Library",
    items: [
      { name: "Next JS", icon: SiNextdotjs, color: "#FFFFFF", href: "https://nextjs.org/" },
      { name: "React", icon: SiReact, color: "#61DAFB", href: "https://react.dev/" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", href: "https://tailwindcss.com/" },
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20", href: "https://laravel.com/" },
      { name: "Express JS", icon: SiExpress, color: "#FFFFFF", href: "https://expressjs.com/" },
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E", href: "https://nodejs.org/" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3", href: "https://getbootstrap.com/" },
    ],
  },
  {
    title: "DBMS",
    items: [
      { name: "MySQL", icon: SiMysql, color: "#4479A1", href: "https://www.mysql.com/" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", href: "https://www.postgresql.org/" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248", href: "https://www.mongodb.com/" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28", href: "https://firebase.google.com/" },
    ],
  },
  {
    title: "DevOps & Infrastructure",
    items: [
      { name: "Docker", icon: SiDocker, color: "#2496ED", href: "https://www.docker.com/" },
      { name: "Linux", icon: SiLinux, color: "#FCC624", href: "https://www.kernel.org/" },
      { name: "Git", icon: SiGit, color: "#F05032", href: "https://git-scm.com/" },
      { name: "Github", icon: SiGithub, color: "#FFFFFF", href: "https://github.com/" },
    ],
  },
  {
    title: "Tools & Design",
    items: [
      { name: "VS Code", icon: TbBrandVscode, color: "#007ACC", href: "https://code.visualstudio.com/" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37", href: "https://www.postman.com/" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E", href: "https://www.figma.com/" },
    ],
  },
  {
    title: "Cyber Security",
    items: [
      { name: "Kali Linux", icon: SiKalilinux, color: "#557C94", href: "https://www.kali.org/" },
      { name: "Wireshark", icon: SiWireshark, color: "#1679A7", href: "https://www.wireshark.org/" },
      { name: "Burp Suite", icon: SiBurpsuite, color: "#FF6633", href: "https://portswigger.net/burp" },
    ],
  },
];

function SkillItem({ item }) {
  const [hovered, setHovered] = useState(false);
  const Icon = item.icon;

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group inline-flex items-center gap-2.5 py-1 text-white/70 hover:text-white transition-colors duration-150"
    >
      <Icon
        className="w-4 h-4 shrink-0 transition-colors duration-200"
        style={{ color: hovered ? item.color : "rgba(255,255,255,0.45)" }}
      />
      <span className="text-[13.5px] font-sans group-hover:underline underline-offset-4 decoration-white/30 transition-all">
        {item.name}
      </span>
    </a>
  );
}

export default function SkillsSection() {
  return (
    <div className="space-y-8">
      {SKILL_CATEGORIES.map((cat) => (
        <div key={cat.title} className="space-y-3">
          <h3 className="text-[14px] font-sans font-medium text-white/90">
            {cat.title}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-3.5 gap-x-6">
            {cat.items.map((item) => (
              <SkillItem key={item.name} item={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
