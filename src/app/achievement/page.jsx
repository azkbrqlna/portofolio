"use client";

import React, { useState } from "react";
import Link from "next/link";
import experiences from "@/app/data/experiences.json";
import { Award, ArrowUpRight, ArrowLeft } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function AchievementPage() {
  const achievements = experiences.filter((exp) => exp.certificate);

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-[680px] px-6 pt-24 pb-24">
        {/* Header */}
        <div className="pt-8 pb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-white/40 hover:text-[#d4a853] transition-colors mb-6"
          >
            <ArrowLeft size={13} />
            <span>Back to Home</span>
          </Link>

          <h1
            className="text-3xl sm:text-4xl font-serif font-semibold text-[#e8e8f0] tracking-tight leading-tight mb-2"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Achievements & Certifications
          </h1>
          <p className="font-mono text-xs text-white/35 tracking-wider uppercase">
            Verified Credentials & Professional Certificates
          </p>
        </div>

        <hr className="dotted-divider mb-12" />

        {/* Certificates Grid/List */}
        <div className="space-y-10">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:border-white/[0.15] transition-all space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4a853]" />
                    <span className="font-mono text-[11px] text-[#d4a853] uppercase tracking-widest">
                      Certificate
                    </span>
                  </div>
                  <h2 className="text-base font-semibold text-white/90">
                    {item.title}
                  </h2>
                  <p className="font-mono text-xs text-white/40 mt-0.5">
                    {item.company} · {item.period}
                  </p>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-xs text-[#d4a853] bg-[#d4a853]/10 hover:bg-[#d4a853]/20 border border-[#d4a853]/30 transition-colors shrink-0 self-start">
                      <Award size={13} />
                      <span>View Certificate</span>
                      <ArrowUpRight size={12} />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-3xl p-6">
                    <DialogHeader>
                      <DialogTitle className="font-mono text-sm text-[#d4a853] flex items-center gap-2">
                        <Award size={14} />
                        {item.company} — {item.title}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="overflow-hidden rounded-xl border border-white/10 mt-2 bg-black/40">
                      <img
                        src={item.certificate}
                        alt={`Certificate — ${item.title}`}
                        className="w-full rounded-lg object-contain max-h-[80vh]"
                        loading="lazy"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              {/* Certificate Preview Image */}
              <div className="relative w-full h-44 sm:h-52 rounded-lg overflow-hidden border border-white/10 bg-white/5">
                <img
                  src={item.certificate}
                  alt={`Preview ${item.title}`}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {item.skills?.map((s, i) => (
                  <span
                    key={i}
                    className="font-mono text-[10.5px] text-white/35 border border-white/[0.07] px-2 py-0.5 rounded bg-white/[0.02]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="pt-12 mt-16 border-t border-white/[0.06] text-center">
          <p className="font-mono text-[10px] tracking-widest text-white/25 uppercase">
            Azka Bariqlana · {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
}
