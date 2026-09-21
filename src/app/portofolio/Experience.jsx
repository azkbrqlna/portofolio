"use client";

import React from "react";
import experiences from "@/app/data/experiences.json";
import { Award, ArrowUpRight, MapPin, ExternalLink } from "lucide-react";
import {
  SiAngular,
  SiBootstrap,
  SiGit,
  SiGithub,
} from "react-icons/si";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ICON_MAP = {
  SiAngular,
  SiBootstrap,
  SiGit,
  SiGithub,
};

export default function ExperienceSection() {
  return (
    <div className="space-y-10">
      {experiences.map((exp, idx) => (
        <div key={exp.id || idx} className="space-y-4">
          {/* Top Section: Avatar + Company Info (Left) & Year/Duration (Right) */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
            {/* Left: Avatar + Details */}
            <div className="flex items-start gap-3.5">
              {/* Company Initial / Logo Badge */}
              <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0 overflow-hidden">
                {exp.logo ? (
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="w-full h-full object-contain p-1 rounded-lg"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      const fallback = e.currentTarget.nextElementSibling;
                      if (fallback) fallback.style.display = "flex";
                    }}
                  />
                ) : null}
                <div
                  style={{ display: exp.logo ? "none" : "flex" }}
                  className="w-7 h-7 rounded-full border border-sky-400/40 items-center justify-center text-sky-300 font-bold text-xs tracking-wide"
                >
                  {exp.initial || exp.company.charAt(0)}
                </div>
              </div>

              {/* Company Name, Category, Link, Location */}
              <div className="space-y-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-[16px] font-semibold text-white tracking-tight">
                    {exp.company}
                  </h3>
                  {exp.category && (
                    <span className="text-[11px] font-medium text-white/65 bg-white/[0.06] border border-white/10 px-2 py-0.5 rounded-full">
                      {exp.category}
                    </span>
                  )}
                </div>

                {/* Website Link */}
                {exp.website && (
                  <div>
                    <a
                      href={exp.websiteUrl || `https://${exp.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-xs text-white/40 hover:text-[#d4a853] transition-colors"
                    >
                      {exp.website}
                      <ExternalLink size={10} className="opacity-70" />
                    </a>
                  </div>
                )}

                {/* Location & Work Type (Internship) */}
                <div className="flex items-center gap-1.5 text-xs text-white/45 pt-0.5">
                  <MapPin size={12} className="text-white/40 shrink-0" />
                  <span>
                    {exp.location} • {exp.workType || "Internship"}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Year & Duration */}
            <div className="shrink-0 text-left sm:text-right pl-[50px] sm:pl-0">
              <span className="text-sm sm:text-[15px] font-semibold text-white tracking-tight font-sans">
                {exp.yearDuration || exp.period}
              </span>
            </div>
          </div>

          {/* Tech Stack Row */}
          <div className="pl-0 sm:pl-[50px]">
            <div className="flex items-center gap-2.5 flex-wrap text-xs">
              <span className="text-white/45 font-mono text-xs">Tech Stack:</span>

              {/* Networking: text badges without logo */}
              {exp.useTextTechStack ? (
                <div className="flex flex-wrap items-center gap-1.5">
                  {exp.skills?.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="font-mono text-[11px] text-white/70 bg-white/[0.04] border border-white/[0.08] px-2 py-0.5 rounded hover:border-white/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              ) : (
                /* Non-networking: tech stack icons */
                <div className="flex flex-wrap items-center gap-2.5">
                  {exp.techStackIcons ? (
                    exp.techStackIcons.map((tech, tIdx) => {
                      const IconComponent = ICON_MAP[tech.icon];
                      return (
                        <div
                          key={tIdx}
                          className="p-1 rounded bg-white/[0.03] border border-white/[0.06] hover:border-white/20 transition-all"
                          title={tech.name}
                        >
                          {IconComponent ? (
                            <IconComponent
                              size={18}
                              style={{ color: tech.color || "#FFFFFF" }}
                            />
                          ) : (
                            <span className="font-mono text-xs text-white/80">
                              {tech.name}
                            </span>
                          )}
                        </div>
                      );
                    })
                  ) : (
                    exp.skills?.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="font-mono text-[11px] text-white/70 border border-white/[0.08] px-2 py-0.5 rounded"
                      >
                        {skill}
                      </span>
                    ))
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Role Details, Summary, Bullet Points & Certificate */}
          <div className="pl-0 sm:pl-[50px] space-y-2.5 pt-1">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h4 className="text-[15px] font-semibold text-white/95">
                {exp.title}
              </h4>

              {/* Certificate Modal Trigger */}
              {exp.certificate && (
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[#d4a853] hover:text-[#d4a853]/80 transition-colors">
                      <Award size={12} />
                      <span>View Certificate</span>
                      <ArrowUpRight size={11} />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-[92vw] sm:max-w-[540px] p-4 sm:p-5 bg-[#0f0f14] border border-white/15 text-white gap-3 rounded-2xl shadow-2xl shadow-black/90">
                    <DialogHeader className="pr-8 text-left">
                      <DialogTitle className="font-mono text-xs sm:text-sm text-[#d4a853] flex items-center gap-2 truncate">
                        <Award size={14} className="shrink-0 text-[#d4a853]" />
                        <span className="truncate">{exp.company} — {exp.title}</span>
                      </DialogTitle>
                    </DialogHeader>
                    <div className="w-full flex items-center justify-center bg-black/60 rounded-xl border border-white/10 overflow-hidden p-1.5 sm:p-2">
                      <img
                        src={exp.certificate}
                        alt={`Certificate — ${exp.title}`}
                        className="w-full h-auto max-h-[50vh] sm:max-h-[360px] object-contain rounded-lg block"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex items-center justify-between text-[11px] font-mono text-white/40 pt-0.5">
                      <span>{exp.period || "Verified Credential"}</span>
                      <a
                        href={exp.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#d4a853] hover:text-[#d4a853]/80 hover:underline transition-colors"
                      >
                        <span>Open Original</span>
                        <ExternalLink size={11} />
                      </a>
                    </div>
                  </DialogContent>
                </Dialog>
              )}
            </div>

            {/* Summary */}
            {exp.summary && (
              <p className="text-[13.5px] text-white/70 leading-relaxed font-normal">
                {exp.summary}
              </p>
            )}

            {/* Bullet points list */}
            <ul className="space-y-1.5 text-[13.5px] text-white/55 leading-relaxed">
              {exp.description?.map((item, dIdx) => (
                <li key={dIdx} className="flex items-start gap-2">
                  <span className="text-white/30 shrink-0 select-none">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Divider between items */}
          {idx < experiences.length - 1 && (
            <div className="pt-6">
              <hr className="dotted-divider" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}