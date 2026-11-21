"use client";

import React from "react";
import Link from "next/link";
import projectsData from "@/app/data/projects.json";
import { ArrowUpRight, Github } from "lucide-react";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  RiFirebaseFill,
  RiNextjsFill,
  RiTailwindCssFill,
  RiFlutterFill,
  RiReactjsFill,
} from "react-icons/ri";
import { SiShadcnui, SiSocketdotio, SiLaravel, SiPostgresql, SiVite } from "react-icons/si";

const iconMap = {
  FaNodeJs,
  RiNextjsFill,
  RiTailwindCssFill,
  RiReactjsFill,
  SiVite,
  SiSocketdotio,
  RiFirebaseFill,
  SiShadcnui,
  RiFlutterFill,
  SiLaravel,
  SiPostgresql,
  BiLogoPostgresql,
};

const projectMeta = {
  "Papdulu":       { type: "WebDev",     year: "2026", image: "/images/papdulu.png" },
  "Asha Backyard": { type: "Mobile",     year: "2026", image: "/images/asha-backyard.jpeg" },
  "BrongDetector": { type: "Mobile",     year: "2025", image: "/images/brong-detector.jpeg" },
  "Template Bot":  { type: "Automation", year: "2025", image: "/images/Whatsapp-Bot.jpg" },
};

export default function Projects() {
  return (
    <div className="space-y-8">
      {projectsData.map((proj) => {
        const meta = projectMeta[proj.name] || { type: "WebDev", year: "2025", image: null };

        const githubLink =
          proj.github && proj.github.trim() !== "" && proj.github.trim() !== "#"
            ? proj.github
            : proj.href && proj.href.includes("github.com")
            ? proj.href
            : null;

        const liveLink =
          proj.href &&
          !proj.href.includes("github.com") &&
          proj.href.trim() !== "" &&
          proj.href.trim() !== "#"
            ? proj.href
            : null;

        const hasRedirect = Boolean(githubLink || liveLink);

        return (
          <div
            key={proj.name}
            className="group"
          >
            <div className="flex flex-col sm:flex-row items-start gap-4">
              {/* Thumbnail Image */}
              {meta.image && (
                <div className="relative w-full sm:w-28 sm:h-20 h-36 rounded-lg overflow-hidden border border-white/10 shrink-0 bg-white/5">
                  <img
                    src={meta.image}
                    alt={proj.name}
                    className={`w-full h-full object-cover transition-transform duration-300 ${
                      hasRedirect ? "group-hover:scale-105" : ""
                    }`}
                    loading="lazy"
                  />
                </div>
              )}

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline justify-between gap-2 mb-1">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <h3
                      className={`text-[15px] font-semibold text-white/90 transition-colors ${
                        hasRedirect ? "group-hover:text-[#d4a853]" : ""
                      }`}
                    >
                      {proj.name}
                    </h3>
                    <span className="font-mono text-[10px] text-white/25 uppercase tracking-widest">
                      {meta.type} · {meta.year}
                    </span>
                  </div>

                  {/* Links: GitHub & Live Site */}
                  {hasRedirect && (
                    <div className="flex items-center gap-1.5 shrink-0">
                      {/* Both GitHub and Live Site exist (e.g. Papdulu) */}
                      {githubLink && liveLink && (
                        <>
                          <Link
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/30 hover:text-white transition-colors p-1"
                            title="View Source Code on GitHub"
                            aria-label={`View ${proj.name} on GitHub`}
                          >
                            <Github size={16} strokeWidth={1.5} />
                          </Link>
                          <Link
                            href={liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/30 hover:text-[#d4a853] transition-colors p-1"
                            title="Visit Live Website"
                            aria-label={`Visit Live ${proj.name}`}
                          >
                            <ArrowUpRight size={17} strokeWidth={1.5} />
                          </Link>
                        </>
                      )}

                      {/* Only GitHub link exists (e.g. Template Bot, BrongDetector) */}
                      {githubLink && !liveLink && (
                        <Link
                          href={githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/30 hover:text-white transition-colors p-1"
                          title="View on GitHub"
                          aria-label={`View ${proj.name} on GitHub`}
                        >
                          <Github size={16} strokeWidth={1.5} />
                        </Link>
                      )}

                      {/* Only Live Website exists */}
                      {!githubLink && liveLink && (
                        <Link
                          href={liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/30 hover:text-[#d4a853] transition-colors p-1"
                          title="Visit Live Website"
                          aria-label={`Visit Live ${proj.name}`}
                        >
                          <ArrowUpRight size={17} strokeWidth={1.5} />
                        </Link>
                      )}
                    </div>
                  )}
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
