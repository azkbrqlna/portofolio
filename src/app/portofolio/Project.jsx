"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import projectsData from "@/app/data/projects.json";
import { FaNodeJs } from "react-icons/fa";
import {
  RiFirebaseFill,
  RiNextjsFill,
  RiTailwindCssFill,
  RiFlutterFill,
} from "react-icons/ri";
import { SiShadcnui, SiSocketdotio } from "react-icons/si";
import { ChevronDown, ArrowUpRight, Sparkles, ExternalLink } from "lucide-react";

const iconMap = {
  FaNodeJs,
  RiNextjsFill,
  RiTailwindCssFill,
  SiSocketdotio,
  RiFirebaseFill,
  SiShadcnui,
  RiFlutterFill,
};

// Image mappings for projects
const projectImages = {
  "My Portfolio": "/images/porto.png",
  "Template Bot": "/images/Whatsapp-Bot.jpg",
  "CashFlowin": "/images/cyberpunk_wide.png",
  "BrongDetector": "/images/copy.jpg",
};

// Category mappings for projects
const projectTypes = {
  "My Portfolio": { type: "WebDev", year: "2025" },
  "Template Bot": { type: "Automation", year: "2025" },
  "CashFlowin": { type: "WebDev", year: "2024" },
  "BrongDetector": { type: "Mobile", year: "2024" },
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [expandedIndex, setExpandedIndex] = useState(0); // Default open first project

  const categories = ["ALL", "WebDev", "Automation", "Mobile"];

  const filteredProjects = projectsData.filter((p) => {
    if (activeCategory === "ALL") return true;
    const info = projectTypes[p.name] || { type: "WebDev" };
    return info.type === activeCategory;
  });

  const toggleExpand = (idx) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="projects" className="py-16 min-h-screen font-sans select-none">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Main 2-Column Archive Layout (Matching Reference Image) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Sidebar: Title & Category Filters */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tighter uppercase font-serif">
                PROJECTS
              </h1>
              <div className="text-sm font-mono text-white/50 mt-1">
                ({filteredProjects.length}) [作品アーカイブ]
              </div>
            </div>

            {/* Category Filter Links */}
            <div className="flex flex-col space-y-3 font-mono text-sm pt-4 border-t border-white/10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setExpandedIndex(0);
                  }}
                  className={`text-left transition-all py-1 px-2 rounded-md ${
                    activeCategory === cat
                      ? "text-[#ffd700] font-bold bg-[#ffd700]/10 border-l-2 border-[#ffd700]"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Accordion Table */}
          <div className="lg:col-span-9 space-y-2">
            
            {/* Table Header Row */}
            <div className="grid grid-cols-12 px-4 py-3 text-xs font-mono text-white/40 border-b border-white/20 uppercase tracking-wider">
              <div className="col-span-6 sm:col-span-7">PROJECT</div>
              <div className="col-span-3 sm:col-span-3">TYPE</div>
              <div className="col-span-3 sm:col-span-2 text-right">YEAR</div>
            </div>

            {/* Project List Items */}
            <div className="divide-y divide-white/10 border-b border-white/10 font-mono">
              {filteredProjects.map((proj, idx) => {
                const isExpanded = expandedIndex === idx;
                const info = projectTypes[proj.name] || { type: "WebDev", year: "2025" };
                const imageSrc = projectImages[proj.name] || "/images/cyberpunk_wide.png";

                return (
                  <div key={idx} className="transition-colors">
                    {/* Interactive List Item Row */}
                    <button
                      onClick={() => toggleExpand(idx)}
                      className={`w-full grid grid-cols-12 items-center px-4 py-4 text-left transition-all hover:bg-white/5 ${
                        isExpanded ? "bg-white/5 text-[#ffd700]" : "text-white"
                      }`}
                    >
                      {/* Project Name + Icon */}
                      <div className="col-span-6 sm:col-span-7 flex items-center gap-3 font-bold text-sm sm:text-base">
                        <span className="text-[#ffd700] shrink-0">❖</span>
                        <span className="truncate">{proj.name}</span>
                      </div>

                      {/* Type */}
                      <div className="col-span-3 sm:col-span-3 text-xs text-white/70">
                        {info.type}
                      </div>

                      {/* Year & Expand Arrow */}
                      <div className="col-span-3 sm:col-span-2 flex items-center justify-end gap-3 text-xs text-white/60">
                        <span>{info.year}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-[#ffd700] transition-transform duration-300 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </button>

                    {/* Expandable Content Drawer */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="overflow-hidden bg-[#161622]/90 border-t border-b border-[#ffd700]/30"
                        >
                          <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                            
                            {/* Left Info Column inside Drawer */}
                            <div className="md:col-span-7 space-y-4">
                              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffd700]/10 border border-[#ffd700]/30 text-[#ffd700] text-xs font-mono">
                                <Sparkles className="w-3.5 h-3.5" />
                                <span>{info.type} // {info.year}</span>
                              </div>

                              <h3 className="text-xl font-bold text-white font-sans">
                                {proj.name}
                              </h3>

                              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-mono">
                                {proj.description}
                              </p>

                              {/* Tech Stack Icons */}
                              {proj.icons && proj.icons.length > 0 && (
                                <div className="space-y-2 pt-2">
                                  <span className="text-[11px] text-white/40 uppercase tracking-widest block">
                                    TECH STACK:
                                  </span>
                                  <div className="flex flex-wrap gap-2">
                                    {proj.icons.map((ic, i) => {
                                      const Icon = iconMap[ic.icon];
                                      return (
                                        <div
                                          key={i}
                                          className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-white"
                                        >
                                          {Icon && <Icon className="w-4 h-4 text-[#ffd700]" />}
                                          <span>{ic.name}</span>
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              )}

                              {/* CTA Button */}
                              <div className="pt-3">
                                <Link
                                  href={proj.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#ffd700] text-[#111116] font-bold text-xs rounded-lg hover:bg-[#ffe033] transition-all shadow-lg tracking-wider"
                                >
                                  <span>{proj.cta || "LAUNCH PROJECT"}</span>
                                  <ArrowUpRight className="w-4 h-4" />
                                </Link>
                              </div>
                            </div>

                            {/* Right Image Preview Column inside Drawer */}
                            <div className="md:col-span-5">
                              <div className="relative w-full h-[200px] sm:h-[220px] rounded-xl overflow-hidden border border-white/20 group">
                                <Image
                                  src={imageSrc}
                                  alt={proj.name}
                                  fill
                                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                              </div>
                            </div>

                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
