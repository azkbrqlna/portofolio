"use client";

import React from "react";
import Link from "next/link";
import achievements from "@/app/data/achievements.json";
import {
  ArrowLeft,
  ExternalLink,
  Trophy,
  Maximize2,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function AchievementsPage() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-[680px] px-6 pt-24 pb-28">
        {/* Navigation Link */}
        <div className="pt-6 pb-6">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 font-mono text-xs text-white/45 hover:text-[#d4a853] transition-colors duration-200 mb-8"
          >
            <ArrowLeft
              size={13}
              className="transition-transform duration-200 group-hover:-translate-x-1"
            />
            <span>Back to Home</span>
          </Link>

          {/* Page Heading */}
          <div className="space-y-2">
            <h1
              className="text-3xl sm:text-4xl font-serif font-semibold text-[#e8e8f0] tracking-tight leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Achievements
            </h1>
            <p className="text-[15px] text-white/65 leading-relaxed">
              Competitive honors, technical awards, and recognized milestones in
              web engineering and software architecture.
            </p>
          </div>
        </div>

        <hr className="dotted-divider mb-12" />

        {/* Achievements List - No cards, no outer borders, pure editorial flow */}
        <div className="space-y-12">
          {achievements.map((item, idx) => (
            <article key={item.id || idx} className="space-y-5">
              {/* Header Badges: Award title & date */}
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1.5">
                <div className="flex items-center gap-2">
                  <Trophy size={14} className="text-[#d4a853] shrink-0" />
                  <span className="font-mono text-xs font-semibold text-[#d4a853] tracking-wide">
                    {item.award}
                  </span>
                  <span className="text-white/20">·</span>
                  <span className="font-mono text-xs text-white/45">
                    {item.category}
                  </span>
                </div>

                <span className="font-mono text-[11px] text-white/45">
                  {item.date}
                </span>
              </div>

              {/* Title & Organization */}
              <div className="space-y-1.5">
                <h2
                  className="text-2xl sm:text-3xl font-serif font-semibold text-[#e8e8f0] tracking-tight leading-snug"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {item.title}
                </h2>

                <p className="font-mono text-xs text-white/60">
                  {item.organizer}
                </p>

                {item.theme && (
                  <p className="text-xs text-white/40 italic pt-0.5">
                    Theme: &ldquo;{item.theme}&rdquo;
                  </p>
                )}
              </div>

              {/* Description */}
              <p className="text-[15px] text-white/65 leading-relaxed">
                {item.description}
              </p>

              {/* Media Showcase Grid: Photo + Certificate */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 pb-2">
                {/* 1. Ceremony Photo */}
                <div className="space-y-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-black/40 cursor-pointer group">
                        <img
                          src={item.photo.src}
                          alt={item.photo.alt}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                        {/* Hover Overlay Hint */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-1.5 text-xs font-mono text-white backdrop-blur-[2px]">
                          <Maximize2 size={13} />
                          <span>View Photo</span>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-[92vw] sm:max-w-[640px] p-4 bg-[#0f0f14] border border-white/10 text-white gap-3 rounded-2xl shadow-2xl shadow-black/95">
                      <DialogHeader className="pr-6 text-left">
                        <DialogTitle className="font-mono text-xs sm:text-sm text-white/90">
                          {item.photo.alt}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="w-full bg-black/80 rounded-xl overflow-hidden flex items-center justify-center p-2">
                        <img
                          src={item.photo.src}
                          alt={item.photo.alt}
                          className="w-full h-auto max-h-[65vh] object-contain rounded-lg"
                        />
                      </div>
                      <div className="flex justify-end pt-1">
                        <a
                          href={item.photo.src}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-mono text-xs text-[#d4a853] hover:underline"
                        >
                          <span>Open original</span>
                          <ExternalLink size={12} />
                        </a>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <p className="font-mono text-[11px] text-white/40">
                    Award Ceremony Photo
                  </p>
                </div>

                {/* 2. Official Certificate */}
                <div className="space-y-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-black/40 cursor-pointer group">
                        <img
                          src={item.certificate.src}
                          alt={item.certificate.alt}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                        {/* Hover Overlay Hint */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-1.5 text-xs font-mono text-white backdrop-blur-[2px]">
                          <Maximize2 size={13} />
                          <span>View Certificate</span>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-[92vw] sm:max-w-[640px] p-4 bg-[#0f0f14] border border-white/10 text-white gap-3 rounded-2xl shadow-2xl shadow-black/95">
                      <DialogHeader className="pr-6 text-left">
                        <DialogTitle className="font-mono text-xs sm:text-sm text-white/90">
                          {item.certificate.alt}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="w-full bg-black/80 rounded-xl overflow-hidden flex items-center justify-center p-2">
                        <img
                          src={item.certificate.src}
                          alt={item.certificate.alt}
                          className="w-full h-auto max-h-[65vh] object-contain rounded-lg"
                        />
                      </div>
                      <div className="flex justify-end pt-1">
                        <a
                          href={item.certificate.src}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-mono text-xs text-[#d4a853] hover:underline"
                        >
                          <span>Open original</span>
                          <ExternalLink size={12} />
                        </a>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <p className="font-mono text-[11px] text-white/40">
                    Official Certificate
                  </p>
                </div>
              </div>

              {/* Tags */}
              {item.tags && item.tags.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <span className="font-mono text-xs text-white/40">Tags:</span>
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="font-mono text-[11px] text-white/60"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              {idx < achievements.length - 1 && (
                <hr className="dotted-divider pt-8" />
              )}
            </article>
          ))}
        </div>

        {/* Footer */}
        <div className="pt-20 mt-16 text-center">
          <p className="font-mono text-[10px] tracking-widest text-white/30 uppercase">
            Azka Bariqlana · {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
}
