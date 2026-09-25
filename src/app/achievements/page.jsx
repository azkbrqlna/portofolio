"use client";

import React from "react";
import Link from "next/link";
import achievements from "@/app/data/achievements.json";
import { ArrowLeft, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function AchievementsPage() {
  const item = achievements[0];

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-[680px] px-6 pt-24 pb-24">
        {/* Navigation */}
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
            Achievements
          </h1>
          <p className="font-mono text-xs text-white/35 tracking-wider uppercase">
            Honors & Competition Awards
          </p>
        </div>

        <hr className="dotted-divider mb-12" />

        {/* Achievement Item (No Card Wrapper) */}
        {item && (
          <div className="space-y-6">
            {/* Header info */}
            <div>
              <h2
                className="text-2xl mt-4 font-serif font-semibold text-[#e8e8f0] tracking-tight leading-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {item.title}
              </h2>

              <p className="text-xs font-mono text-white/40 mt-1">
                {item.organizer}
              </p>
            </div>

            <p className="text-[14.5px] text-white/60 leading-relaxed">
              {item.description}
            </p>

            {/* Images Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {/* Competition Photo */}
              <div className="space-y-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10 bg-white/5 cursor-pointer group">
                      <img
                        src={item.photo.src}
                        alt={item.photo.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-[92vw] sm:max-w-[600px] p-4 bg-[#0f0f14] border border-white/15 text-white gap-3 rounded-xl">
                    <DialogHeader className="pr-6 text-left">
                      <DialogTitle className="font-mono text-xs text-white/80">
                        {item.photo.alt}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="w-full bg-black/60 rounded-lg overflow-hidden flex items-center justify-center p-1">
                      <img
                        src={item.photo.src}
                        alt={item.photo.alt}
                        className="w-full h-auto max-h-[60vh] object-contain rounded"
                      />
                    </div>
                    <div className="flex justify-end pt-1">
                      <a
                        href={item.photo.src}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-xs text-[#d4a853] hover:underline"
                      >
                        <span>Open original</span>
                        <ExternalLink size={11} />
                      </a>
                    </div>
                  </DialogContent>
                </Dialog>
                <p className="font-mono text-[11px] text-white/40 text-center">
                  Competition Photo
                </p>
              </div>

              {/* Certificate */}
              <div className="space-y-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10 bg-white/5 cursor-pointer group">
                      <img
                        src={item.certificate.src}
                        alt={item.certificate.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-[92vw] sm:max-w-[600px] p-4 bg-[#0f0f14] border border-white/15 text-white gap-3 rounded-xl">
                    <DialogHeader className="pr-6 text-left">
                      <DialogTitle className="font-mono text-xs text-white/80">
                        {item.certificate.alt}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="w-full bg-black/60 rounded-lg overflow-hidden flex items-center justify-center p-1">
                      <img
                        src={item.certificate.src}
                        alt={item.certificate.alt}
                        className="w-full h-auto max-h-[60vh] object-contain rounded"
                      />
                    </div>
                    <div className="flex justify-end pt-1">
                      <a
                        href={item.certificate.src}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-xs text-[#d4a853] hover:underline"
                      >
                        <span>Open original</span>
                        <ExternalLink size={11} />
                      </a>
                    </div>
                  </DialogContent>
                </Dialog>
                <p className="font-mono text-[11px] text-white/40 text-center">
                  Official Certificate
                </p>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
              {item.tags?.map((tag, i) => (
                <span
                  key={i}
                  className="font-mono text-[10.5px] text-white/35 border border-white/[0.07] px-2 py-0.5 rounded bg-white/[0.02]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

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
