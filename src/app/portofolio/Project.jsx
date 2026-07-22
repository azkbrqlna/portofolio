"use client";

import React, { useState } from "react";
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
import { FolderGit2, Sparkles, Terminal } from "lucide-react";

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
  const [filter, setFilter] = useState("all");

  const japaneseMarquee = [
    "プロジェクト",
    "ポートフォリオ",
    "AZKBRQLNA",
    "ウェブ開発",
    "アプリ",
    "サイバーセキュリティ",
  ];

  return (
    <section id="projects" className="py-12 relative min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-8 text-center select-none">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffd700]/10 border border-[#ffd700]/30 text-[#ffd700] text-xs font-mono mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>SYSTEM ARCHITECTURE // WORKS</span>
          </div>

          <div className="flex items-baseline gap-3 flex-wrap justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-wider uppercase font-sans">
              FEATURED PROJECTS
            </h1>
            <span className="text-lg sm:text-xl font-mono text-[#ffd700] font-bold">
              [作品 - プロジェクト]
            </span>
          </div>

          <p className="text-xs sm:text-sm text-white/70 max-w-[650px] mt-3 font-mono leading-relaxed">
            Fullstack web applications, WhatsApp automation bots, financial management tools, and real-time mobile audio utilities.
          </p>
        </div>

        {/* Japanese Marquee Banner for Projects */}
        <div className="w-full overflow-hidden border-y border-[#ffd700]/40 py-2.5 my-8 bg-black/40 backdrop-blur-sm select-none">
          <div className="animate-marquee items-center gap-12 font-mono text-xs md:text-sm font-bold tracking-widest">
            {[...japaneseMarquee, ...japaneseMarquee, ...japaneseMarquee].map((text, idx) => (
              <div key={idx} className="flex items-center gap-8 text-[#ffd700] drop-shadow-[0_0_10px_#ffd700]">
                <span>{text}</span>
                <span className="text-white/30 text-xs">◆</span>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
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
