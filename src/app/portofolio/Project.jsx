"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import projectsData from "@/app/data/projects.json";
import CyberMatrixBackground from "@/components/ui/CyberMatrixBackground";
import { FaNodeJs } from "react-icons/fa";
import {
  RiFirebaseFill,
  RiNextjsFill,
  RiTailwindCssFill,
  RiFlutterFill,
} from "react-icons/ri";
import { SiShadcnui, SiSocketdotio } from "react-icons/si";
import { ChevronDown, ArrowUpRight, Sparkles, FolderGit2, Terminal, Code } from "lucide-react";

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

  const categories = [
    { id: "ALL", label: "ALL WORKS", icon: "❖" },
    { id: "WebDev", label: "WEB DEV", icon: "💻" },
    { id: "Automation", label: "AUTOMATION", icon: "🤖" },
    { id: "Mobile", label: "MOBILE APPS", icon: "📱" },
  ];

  const filteredProjects = projectsData.filter((p) => {
    if (activeCategory === "ALL") return true;
    const info = projectTypes[p.name] || { type: "WebDev" };
    return info.type === activeCategory;
  });

  const toggleExpand = (idx) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <>
      {/* Background Matrix Canvas */}
      <CyberMatrixBackground />

      <section id="projects" className="relative z-10 pt-28 md:pt-32 pb-16 min-h-screen font-sans select-none">
        <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main 2-Column Archive Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Sidebar: Title & Category Filters */}
            <div className="lg:col-span-3 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffd700]/10 border border-[#ffd700]/30 text-[#ffd700] text-xs font-mono mb-3">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>SYS_ARCHIVE // PROJECTS</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter uppercase font-serif leading-none drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                  PROJECTS
                </h1>
                <div className="text-sm font-mono text-white/50 mt-2">
                  ({filteredProjects.length}) [作品アーカイブ]
                </div>
              </div>

              {/* Category Filter Links */}
              <div className="flex flex-col space-y-2.5 font-mono text-xs pt-4 border-t border-white/15">
                <span className="text-[10px] text-white/40 uppercase tracking-widest block mb-1">
                  FILTER CATEGORY:
                </span>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setExpandedIndex(0);
                    }}
                    className={`flex items-center justify-between transition-all py-2.5 px-4 rounded-lg text-left ${
                      activeCategory === cat.id
                        ? "text-[#111116] font-bold bg-[#ffd700] shadow-[0_0_20px_rgba(255,215,0,0.4)]"
                        : "text-white/70 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10"
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span className="opacity-70 text-[10px]">{cat.icon}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Interactive Accordion Table */}
            <div className="lg:col-span-9 space-y-3">
              
              {/* Table Header Row */}
              <div className="grid grid-cols-12 px-6 py-3.5 text-xs font-mono text-white/50 bg-black/40 border border-white/15 rounded-t-xl uppercase tracking-wider">
                <div className="col-span-6 sm:col-span-6">PROJECT NAME</div>
                <div className="col-span-3 sm:col-span-4">STACK & TYPE</div>
                <div className="col-span-3 sm:col-span-2 text-right">YEAR</div>
              </div>

              {/* Project List Items */}
              <div className="space-y-3 font-mono">
                {filteredProjects.map((proj, idx) => {
                  const isExpanded = expandedIndex === idx;
                  const info = projectTypes[proj.name] || { type: "WebDev", year: "2025" };
                  const imageSrc = projectImages[proj.name] || "/images/cyberpunk_wide.png";

                  return (
                    <div
                      key={idx}
                      className={`rounded-xl overflow-hidden border transition-all duration-300 ${
                        isExpanded
                          ? "border-[#ffd700] bg-[#14141f]/95 shadow-[0_0_30px_rgba(255,215,0,0.15)]"
                          : "border-white/15 bg-black/40 hover:border-white/40 hover:bg-white/5"
                      }`}
                    >
                      {/* Interactive List Item Row */}
                      <button
                        onClick={() => toggleExpand(idx)}
                        className={`w-full grid grid-cols-12 items-center px-6 py-5 text-left transition-all ${
                          isExpanded ? "text-[#ffd700]" : "text-white"
                        }`}
                      >
                        {/* Project Name + Icon */}
                        <div className="col-span-6 sm:col-span-6 flex items-center gap-3 font-bold text-base sm:text-lg md:text-xl">
                          <span className={`shrink-0 ${isExpanded ? "text-[#ffd700]" : "text-white/40"}`}>
                            ❖
                          </span>
                          <span className="truncate tracking-wide">{proj.name}</span>
                        </div>

                        {/* Type & Quick Tech Icons */}
                        <div className="col-span-3 sm:col-span-4 flex items-center gap-3">
                          <span className="text-xs px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white/70">
                            {info.type}
                          </span>
                        </div>

                        {/* Year & Expand Arrow */}
                        <div className="col-span-3 sm:col-span-2 flex items-center justify-end gap-3 text-xs sm:text-sm text-white/60">
                          <span className="font-semibold">{info.year}</span>
                          <div className={`p-1 rounded-full border ${isExpanded ? "border-[#ffd700] text-[#ffd700]" : "border-white/20 text-white/50"}`}>
                            <ChevronDown
                              className={`w-4 h-4 transition-transform duration-300 ${
                                isExpanded ? "rotate-180" : ""
                              }`}
                            />
                          </div>
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
                            className="border-t border-[#ffd700]/30 bg-[#161624]/95"
                          >
                            <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                              
                              {/* Left Info Column inside Drawer */}
                              <div className="lg:col-span-7 space-y-5">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffd700]/10 border border-[#ffd700]/30 text-[#ffd700] text-xs font-mono">
                                  <Sparkles className="w-3.5 h-3.5" />
                                  <span>{info.type} // {info.year} RELEASE</span>
                                </div>

                                <h3 className="text-2xl sm:text-3xl font-bold text-white font-sans tracking-wide">
                                  {proj.name}
                                </h3>

                                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-mono">
                                  {proj.description}
                                </p>

                                {/* Tech Stack Badges */}
                                {proj.icons && proj.icons.length > 0 && (
                                  <div className="space-y-2.5 pt-2">
                                    <span className="text-[11px] text-[#ffd700] uppercase tracking-widest block font-bold">
                                      TECH STACK & TOOLS:
                                    </span>
                                    <div className="flex flex-wrap gap-2.5">
                                      {proj.icons.map((ic, i) => {
                                        const Icon = iconMap[ic.icon];
                                        return (
                                          <div
                                            key={i}
                                            className="flex items-center gap-2 px-3.5 py-1.5 bg-white/5 border border-white/15 rounded-lg text-xs text-white hover:border-[#ffd700] transition-colors"
                                          >
                                            {Icon && <Icon className="w-4 h-4 text-[#ffd700]" />}
                                            <span>{ic.name}</span>
                                          </div>
                                        );
                                      })}
                                    </div>
                                  </div>
                                )}

                                {/* Action Buttons */}
                                <div className="pt-4 flex items-center gap-4 flex-wrap">
                                  <Link
                                    href={proj.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#ffd700] hover:bg-[#ffe033] text-[#111116] font-bold text-xs rounded-lg transition-all shadow-lg tracking-wider active:scale-95"
                                  >
                                    <span>{proj.cta || "LAUNCH LIVE DEMO"}</span>
                                    <ArrowUpRight className="w-4 h-4" />
                                  </Link>
                                </div>
                              </div>

                              {/* Right Image Preview Column inside Drawer */}
                              <div className="lg:col-span-5">
                                <div className="relative w-full h-[240px] sm:h-[280px] lg:h-[320px] rounded-xl overflow-hidden border border-[#ffd700]/30 group shadow-2xl">
                                  {/* Cyber Corner Brackets */}
                                  <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#ffd700] z-20" />
                                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#ffd700] z-20" />

                                  <Image
                                    src={imageSrc}
                                    alt={proj.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                                  <div className="absolute bottom-3 right-3 z-20 text-[10px] font-mono text-white/60 tracking-widest bg-black/60 px-2 py-1 rounded backdrop-blur-sm border border-white/10">
                                    LIVE_PREVIEW // {proj.name}
                                  </div>
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

          {/* Bottom Right Vertical Scroll Watermark */}
          <div className="hidden lg:flex fixed right-6 bottom-12 z-30 flex-col items-center gap-2 font-mono text-xs text-white/50 tracking-widest pointer-events-none select-none">
            <span className="writing-mode-vertical">SCROLL [スクロール]</span>
            <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent" />
          </div>

        </div>
      </section>
    </>
  );
}
