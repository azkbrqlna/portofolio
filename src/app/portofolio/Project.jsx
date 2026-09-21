"use client";

import React from "react";
import Link from "next/link";
import projectsData from "@/app/data/projects.json";
import { ArrowUpRight } from "lucide-react";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  RiFirebaseFill,
  RiNextjsFill,
  RiTailwindCssFill,
  RiFlutterFill,
} from "react-icons/ri";
import { SiShadcnui, SiSocketdotio, SiLaravel, SiPostgresql } from "react-icons/si";

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

const projectMeta = {
  "Template Bot":  { type: "Automation", year: "2025", image: "/images/Whatsapp-Bot.jpg" },
  "BrongDetector": { type: "Mobile",     year: "2025", image: "/images/brong-detector.jpeg" },
  "Asha Backyard": { type: "Mobile",     year: "2026", image: "/images/asha-backyard.jpeg" },
};

export default function Projects() {
  return (
    <div className="divide-y divide-white/[0.06]">
      {projectsData.map((proj) => {
        const meta = projectMeta[proj.name] || { type: "WebDev", year: "2025", image: null };

        return (
          <div
            key={proj.name}
            className="group py-5 p-3 sm:p-4 -mx-3 sm:-mx-4 rounded-xl hover:bg-white/[0.025] border border-transparent hover:border-white/[0.06] transition-all duration-200"
          >
            <div className="flex flex-col sm:flex-row items-start gap-4">
              {/* Thumbnail Image */}
              {meta.image && (
                <div className="relative w-full sm:w-28 sm:h-20 h-36 rounded-lg overflow-hidden border border-white/10 shrink-0 bg-white/5">
                  <img
                    src={meta.image}
                    alt={proj.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              )}

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline justify-between gap-2 mb-1">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <h3 className="text-[15px] font-semibold text-white/90 group-hover:text-[#d4a853] transition-colors">
                      {proj.name}
                    </h3>
                    <span className="font-mono text-[10px] text-white/25 uppercase tracking-widest">
                      {meta.type} · {meta.year}
                    </span>
                  </div>

                  <Link
                    href={proj.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/25 group-hover:text-[#d4a853] transition-colors shrink-0 p-1"
                    aria-label={`View ${proj.name}`}
                  >
                    <ArrowUpRight size={17} strokeWidth={1.5} />
                  </Link>
                </div>

                <p className="text-[13px] text-white/50 leading-relaxed mb-3">
                  {proj.description}
                </p>

                {/* Tech icons */}
                <div className="flex flex-wrap gap-1.5">
                  {proj.icons?.map((ic, i) => {
                    const Icon = iconMap[ic.icon];
                    return (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 font-mono text-[10.5px] text-white/35 border border-white/[0.07] px-2 py-0.5 rounded bg-white/[0.02]"
                      >
                        {Icon && <Icon className="w-3 h-3" />}
                        {ic.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
