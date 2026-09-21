"use client";

import React from "react";
import experiences from "@/app/data/experiences.json";
import { Award, ArrowUpRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ExperienceSection() {
  return (
    <div className="space-y-8">
      {experiences.map((exp, idx) => (
        <div key={idx} className="group">
          {/* Icon + Title row */}
          <div className="flex items-start gap-4">
            {/* Icon dot */}
            <div
              className="mt-1 w-8 h-8 rounded-full flex items-center justify-center shrink-0"
              style={{ background: "rgba(212,168,83,0.1)", border: "1px solid rgba(212,168,83,0.25)" }}
            >
              <span className="font-mono text-[10px] text-[#d4a853]">
                {String(idx + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="flex-1 min-w-0">
              {/* Title + type badge */}
              <div className="flex flex-wrap items-baseline gap-2 mb-0.5">
                <h3 className="text-[15px] font-semibold text-white/90">
                  {exp.title}
                </h3>
              </div>

              {/* Company · Period */}
              <p className="font-mono text-[12px] text-white/35 mb-3">
                {exp.company} · {exp.period}
              </p>

              {/* Description — left border style */}
              <div className="border-l border-white/10 pl-4 space-y-1.5">
                {exp.description.map((item, i) => (
                  <p key={i} className="text-[14px] text-white/50 leading-relaxed">
                    {item}
                  </p>
                ))}
              </div>

              {/* Skills + Certificate */}
              <div className="mt-4 flex flex-wrap items-center gap-3">
                {/* Skill tags */}
                {exp.skills?.map((skill, i) => (
                  <span
                    key={i}
                    className="font-mono text-[11px] text-white/35 border border-white/[0.07] px-2 py-0.5 rounded"
                  >
                    {skill}
                  </span>
                ))}

                {/* Certificate */}
                {exp.certificate && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[#d4a853] hover:text-[#d4a853]/70 transition-colors">
                        <Award size={12} />
                        View Certificate
                        <ArrowUpRight size={11} />
                      </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-3xl p-6">
                      <DialogHeader>
                        <DialogTitle className="font-mono text-sm text-[#d4a853] flex items-center gap-2">
                          <Award size={14} />
                          {exp.company}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="overflow-hidden rounded-xl border border-white/10 mt-2 bg-black/40">
                        <img
                          src={exp.certificate}
                          alt={`Certificate — ${exp.title}`}
                          className="w-full rounded-lg object-contain max-h-[80vh]"
                          loading="lazy"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}