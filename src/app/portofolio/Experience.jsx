"use client";

import React, { useState } from "react";
import experiences from "@/app/data/experiences.json";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Briefcase, Calendar, Award, CheckCircle2, ChevronDown, Terminal, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ExperienceSection() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [expandedIndex, setExpandedIndex] = useState(0); // Default open first experience

  const categories = ["ALL", "Networking", "Frontend"];

  const filteredExperiences = experiences.filter((exp) => {
    if (activeCategory === "ALL") return true;
    if (activeCategory === "Networking") return exp.title.includes("Network");
    if (activeCategory === "Frontend") return exp.title.includes("Frontend");
    return true;
  });

  const toggleExpand = (idx) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="experience" className="pt-24 md:pt-28 pb-16 min-h-screen font-sans select-none relative">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main 2-Column Archive Layout (Matching Home & Projects) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Left Sidebar: Title & Category Filters */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tighter uppercase font-sans leading-none">
                EXPERIENCE
              </h1>
              <div className="text-xs font-mono text-[#ffd700] mt-2 font-bold tracking-widest uppercase">
                CAREER TIMELINE // 0{filteredExperiences.length}
              </div>
            </div>

            {/* Category Filter Links */}
            <div className="flex flex-col space-y-2.5 font-mono text-xs pt-4 border-t border-white/10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setExpandedIndex(0);
                  }}
                  className={`text-left transition-all py-2 px-3 rounded-lg ${
                    activeCategory === cat
                      ? "text-[#ffd700] font-bold bg-[#ffd700]/10 border-l-2 border-[#ffd700]"
                      : "text-white/60 hover:text-white hover:bg-white/5"
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
            <div className="grid grid-cols-12 px-6 py-3 text-xs font-mono text-white/40 border-b border-white/20 uppercase tracking-wider">
              <div className="col-span-6 sm:col-span-6">ROLE / COMPANY</div>
              <div className="col-span-3 sm:col-span-3">FOCUS</div>
              <div className="col-span-3 sm:col-span-3 text-right">PERIOD</div>
            </div>

            {/* Experience List Items */}
            <div className="divide-y divide-white/10 border-b border-white/10 font-mono">
              {filteredExperiences.map((exp, idx) => {
                const isExpanded = expandedIndex === idx;

                return (
                  <div key={idx} className="transition-colors">
                    {/* Interactive List Item Row */}
                    <button
                      onClick={() => toggleExpand(idx)}
                      className={`w-full grid grid-cols-12 items-center px-6 py-5 text-left transition-all hover:bg-white/5 ${
                        isExpanded ? "bg-white/5 text-[#ffd700]" : "text-white"
                      }`}
                    >
                      {/* Experience Number + Role & Company */}
                      <div className="col-span-6 sm:col-span-6 flex items-center gap-4 font-bold text-base sm:text-lg">
                        <span className="text-xs font-mono text-[#ffd700] shrink-0 font-bold">
                          0{idx + 1}
                        </span>
                        <div className="flex flex-col truncate">
                          <span className="truncate">{exp.title}</span>
                          <span className="text-xs font-mono text-white/50 font-normal truncate">
                            {exp.company}
                          </span>
                        </div>
                      </div>

                      {/* Focus Tag */}
                      <div className="col-span-3 sm:col-span-3 text-xs sm:text-sm text-white/70">
                        {exp.title.includes("Network") ? "Network Engineering" : "Frontend Web"}
                      </div>

                      {/* Period & Expand Arrow */}
                      <div className="col-span-3 sm:col-span-3 flex items-center justify-end gap-3 text-xs text-white/60">
                        <span className="truncate">{exp.period}</span>
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
                          <div className="p-8 space-y-6">

                            {/* Role Header Badge */}
                            <div className="flex flex-wrap items-center justify-between gap-4">
                              <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffd700]/10 border border-[#ffd700]/30 text-[#ffd700] text-xs font-mono mb-2">
                                  <Terminal className="w-3.5 h-3.5" />
                                  <span>{exp.company}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white font-sans">
                                  {exp.title}
                                </h3>
                              </div>

                              <div className="text-xs font-mono text-white/60 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                                {exp.period}
                              </div>
                            </div>

                            {/* Description Bullets */}
                            <div className="space-y-3 pt-2">
                              <span className="text-[11px] text-white/40 uppercase tracking-widest block font-mono">
                                RESPONSIBILITIES & ACHIEVEMENTS:
                              </span>
                              <ul className="space-y-2.5 font-mono text-xs sm:text-sm text-white/80">
                                {exp.description.map((item, i) => (
                                  <li key={i} className="flex items-start gap-3 leading-relaxed">
                                    <span className="text-[#ffd700] shrink-0 mt-0.5">◆</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Skills Badges */}
                            {exp.skills && exp.skills.length > 0 && (
                              <div className="space-y-2 pt-3 border-t border-white/10">
                                <span className="text-[11px] text-white/40 uppercase tracking-widest block font-mono">
                                  SKILLS APPLIED:
                                </span>
                                <div className="flex flex-wrap gap-2">
                                  {exp.skills.map((skill, i) => (
                                    <span
                                      key={i}
                                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-[#ffd700] font-mono"
                                    >
                                      #{skill}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Certificate Modal Button */}
                            {exp.certificate && (
                              <div className="pt-4 border-t border-white/10">
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#ffd700] text-[#111116] font-bold text-xs rounded-lg hover:bg-[#ffe033] transition-all shadow-lg tracking-wider font-mono">
                                      <Award className="w-4 h-4" />
                                      <span>VIEW CERTIFICATE</span>
                                      <ArrowUpRight className="w-4 h-4 ml-1" />
                                    </button>
                                  </DialogTrigger>
                                  <DialogContent className="sm:max-w-4xl border-[#ffd700]/40 bg-[#111116] text-white">
                                    <DialogHeader>
                                      <DialogTitle className="text-left font-mono text-base text-[#ffd700] flex items-center gap-2">
                                        <Award className="w-4 h-4" />
                                        <span>CERTIFICATE // {exp.company}</span>
                                      </DialogTitle>
                                    </DialogHeader>
                                    <div className="flex items-center justify-center mt-4 w-full h-full p-2 bg-[#0c0c12] rounded-xl border border-white/10">
                                      <img
                                        src={exp.certificate}
                                        alt={`Certificate for ${exp.title} at ${exp.company}`}
                                        className="w-full h-auto max-h-[75vh] object-contain rounded-lg shadow-2xl"
                                        loading="lazy"
                                      />
                                    </div>
                                  </DialogContent>
                                </Dialog>
                              </div>
                            )}

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
  );
}
