"use client";

import React from "react";
import { ProjectCard } from "@/components/card-project/card-project";
import projectsData from "@/app/data/projects.json";
import { FaNodeJs } from "react-icons/fa";
import {
  RiFirebaseFill,
  RiNextjsFill,
  RiTailwindCssFill,
  RiFlutterFill,
} from "react-icons/ri";
import { SiShadcnui, SiSocketdotio } from "react-icons/si";
import { FolderGit2 } from "lucide-react";

const iconMap = {
  FaNodeJs,
  RiNextjsFill,
  RiTailwindCssFill,
  SiSocketdotio,
  RiFirebaseFill,
  SiShadcnui,
  RiFlutterFill,
};

export default function Projects() {
  return (
    <section id="projects" className="py-16 relative">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8be9fd]/10 border border-[#8be9fd]/30 text-[#8be9fd] text-xs font-mono mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>FEATURED WORK</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#f8f8f2] tracking-wider">
            FEATURED PROJECTS
          </h2>
          <p className="text-sm text-[#6272a4] max-w-[600px] mt-2 font-mono">
            Fullstack applications, automation tools, and mobile utilities crafted with clean architecture.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((p, i) => (
            <ProjectCard
              key={i}
              index={i}
              {...p}
              Icons={p.icons.map((ic) => ({
                ...ic,
                Icon: iconMap[ic.icon],
              }))}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
