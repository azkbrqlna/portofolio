"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import projectsData from "@/app/data/projects.json";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import GlitchTitle from "@/components/ui/GlitchTitle";
import {
  RiFirebaseFill,
  RiNextjsFill,
  RiTailwindCssFill,
  RiFlutterFill,
} from "react-icons/ri";
import { SiShadcnui, SiSocketdotio, SiLaravel, SiPostgresql } from "react-icons/si";
import { ArrowUpRight, Folder } from "lucide-react";

const iconMap = {
  FaNodeJs,
  RiNextjsFill,
  RiTailwindCssFill,
  SiSocketdotio,
  RiFirebaseFill,
  SiShadcnui,
  RiFlutterFill,
  SiLaravel,
  SiPostgresql,
  BiLogoPostgresql,
};

// Image mappings for projects
const projectImages = {
  "My Portfolio": "/images/porto.png",
  "Template Bot": "/images/Whatsapp-Bot.jpg",
  "BrongDetector": "/images/brong-detector.jpeg",
  "Asha Backyard": "/images/asha-backyard.jpeg",
};

// Category mappings for projects
const projectTypes = {
  "My Portfolio": { type: "WebDev", year: "2026" },
  "Template Bot": { type: "Automation", year: "2025" },
  "BrongDetector": { type: "Mobile", year: "2025" },
  "Asha Backyard": { type: "Mobile", year: "2026" },
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const categories = ["ALL", "WebDev", "Automation", "Mobile"];

  const filteredProjects = projectsData.filter((p) => {
    if (activeCategory === "ALL") return true;
    const info = projectTypes[p.name] || { type: "WebDev" };
    return info.type === activeCategory;
  });

  return (
    <section id="projects" className="w-full">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <GlitchTitle
            text="PROJECTS"
            delay={150}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tighter uppercase font-sans leading-none"
          />
          <div className="text-xs font-mono text-[#ffd700] mt-2 font-bold tracking-widest uppercase">
            SELECTED WORKS
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 font-mono text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full transition-all border ${activeCategory === cat
                ? "text-[#111116] bg-[#ffd700] border-[#ffd700] font-bold shadow-lg shadow-[#ffd700]/20"
                : "text-white/60 bg-white/5 border-white/10 hover:text-white hover:bg-white/10 hover:border-white/20"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {filteredProjects.map((proj, idx) => {
          const info = projectTypes[proj.name] || { type: "WebDev", year: "2025" };
          const imageSrc = projectImages[proj.name] || "/images/porto.png";

          return (
            <motion.div
              key={proj.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="group relative bg-[#161622]/80 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-[#ffd700]/40 transition-all duration-500 hover:shadow-xl hover:shadow-[#ffd700]/5">
                {/* Project Image */}
                <div className="relative w-full h-[200px] sm:h-[220px] overflow-hidden">
                  <Image
                    src={imageSrc}
                    alt={proj.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161622] via-[#161622]/20 to-transparent" />

                  {/* Type & Year Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-[#111116]/80 backdrop-blur-sm border border-white/20 text-[10px] font-mono text-[#ffd700] font-bold uppercase">
                      {info.type}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-[#111116]/80 backdrop-blur-sm border border-white/20 text-[10px] font-mono text-white/60">
                      {info.year}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 space-y-4">
                  {/* Project Name */}
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg sm:text-xl font-bold text-white font-sans group-hover:text-[#ffd700] transition-colors leading-tight">
                      {proj.name}
                    </h3>
                    <Folder className="w-5 h-5 text-white/30 group-hover:text-[#ffd700] transition-colors shrink-0 mt-0.5" />
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-mono line-clamp-3">
                    {proj.description}
                  </p>

                  {/* Tech Stack Badges */}
                  {proj.icons && proj.icons.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {proj.icons.map((ic, i) => {
                        const Icon = iconMap[ic.icon];
                        return (
                          <div
                            key={i}
                            className="flex items-center gap-1.5 px-2.5 py-1 bg-white/5 border border-white/10 rounded-lg text-[11px] text-white/80 font-mono group-hover:border-[#ffd700]/20 transition-colors"
                          >
                            {Icon && <Icon className="w-3.5 h-3.5 text-[#ffd700]" />}
                            <span>{ic.name}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* CTA Button */}
                  <Link
                    href={proj.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-[#ffd700] text-white hover:text-[#111116] border border-white/10 hover:border-[#ffd700] font-bold text-xs rounded-lg transition-all tracking-wider font-mono group/btn"
                  >
                    <span>{proj.cta || "VIEW PROJECT"}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
