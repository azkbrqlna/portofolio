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
  "My Portfolio":   { type: "WebDev",     year: "2026" },
  "Template Bot":   { type: "Automation", year: "2025" },
  "BrongDetector":  { type: "Mobile",     year: "2025" },
  "Asha Backyard":  { type: "Mobile",     year: "2026" },
};

export default function Projects() {
  return (
    <div className="divide-y divide-white/[0.06]">
      {projectsData.map((proj, idx) => {
        const meta = projectMeta[proj.name] || { type: "WebDev", year: "2025" };

        return (
          <div
            key={proj.name}
            className="group py-5 p-4 -mx-4 rounded-xl hover:bg-white/[0.025] border border-transparent hover:border-white/[0.06] transition-all duration-200"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                {/* Name + type */}
                <div className="flex items-baseline gap-2 mb-1 flex-wrap">
                  <h3 className="text-[15px] font-semibold text-white/85 group-hover:text-[#d4a853] transition-colors">
                    {proj.name}
                  </h3>
                  <span className="font-mono text-[10px] text-white/25 uppercase tracking-widest">
                    {meta.type} · {meta.year}
                  </span>
                </div>

                {/* Description */}
                <p className="text-[13px] text-white/45 leading-relaxed mb-3">
                  {proj.description}
                </p>

                {/* Tech icons */}
                <div className="flex flex-wrap gap-2">
                  {proj.icons?.map((ic, i) => {
                    const Icon = iconMap[ic.icon];
                    return (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 font-mono text-[11px] text-white/30 border border-white/[0.07] px-2 py-0.5 rounded"
                      >
                        {Icon && <Icon className="w-3 h-3" />}
                        {ic.name}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Arrow link */}
              <Link
                href={proj.href}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 mt-1 text-white/20 hover:text-[#d4a853] transition-colors"
                aria-label={`View ${proj.name}`}
              >
                <ArrowUpRight size={18} strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
