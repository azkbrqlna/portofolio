"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SwordSlashLoader from "@/components/ui/SwordSlashLoader";
import CyberMatrixBackground from "@/components/ui/CyberMatrixBackground";
import { ArrowRight, Sparkles, Terminal, Code, ShieldCheck, ExternalLink, Zap } from "lucide-react";

export default function HomePage() {
  const [slashTrigger, setSlashTrigger] = useState(0);

  const handleTriggerSlash = () => {
    setSlashTrigger((prev) => prev + 1);
  };

  const japaneseMarqueeItems = [
    "アズカ・バリクラナ",
    "サイバー",
    "AZKBRQLNA",
    "アズカ・バリクラナ",
    "サイバー",
    "FULLSTACK",
    "アズカ・バリクラナ",
    "CYBERSEC",
  ];

  return (
    <>
      {/* Katana Sword Slash Opening Loader */}
      <SwordSlashLoader forceTrigger={slashTrigger} />

      {/* Cyber Matrix Canvas */}
      <CyberMatrixBackground />

      <main className="relative z-10 pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto min-h-screen flex flex-col justify-between overflow-x-hidden select-none">
        
        {/* ================= HERO SECTION (REFERENCE DESIGN MATCH) ================= */}
        <section className="relative w-full my-4">
          
          {/* Top Title Row: AZKBRQLNA + Bracketed Japanese Text + Tech Badge */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-6">
            <div className="flex items-baseline gap-4 flex-wrap">
              <h1 className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter text-white uppercase leading-none font-sans drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                AZKBRQLNA
              </h1>
              <span className="text-xl sm:text-2xl font-mono text-white/70 font-semibold tracking-widest">
                [アズカ・バリクラナ]
              </span>
            </div>

            {/* Tech Badge above tall card */}
            <div className="hidden lg:flex items-center justify-end mb-2">
              <div className="bg-white text-black font-mono text-xs font-bold px-4 py-1.5 rounded-sm tracking-widest shadow-md">
                80-A45
              </div>
            </div>
          </div>

          {/* Moving Japanese Marquee Banner */}
          <div className="w-full overflow-hidden border-y border-[#ffd700]/40 py-3 my-8 bg-black/40 backdrop-blur-sm">
            <div className="animate-marquee items-center gap-12 font-mono text-sm md:text-base font-bold tracking-widest">
              {[...japaneseMarqueeItems, ...japaneseMarqueeItems, ...japaneseMarqueeItems].map((text, idx) => (
                <div key={idx} className="flex items-center gap-8 text-[#ffd700] drop-shadow-[0_0_10px_#ffd700]">
                  <span>{text}</span>
                  <span className="text-white/30 text-xs">◆</span>
                </div>
              ))}
            </div>
          </div>

          {/* Main Asymmetric Grid Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-8">
            
            {/* Left Editorial Column */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-8 pr-0 lg:pr-4">
              <div className="space-y-4">
                <p className="font-mono text-xs sm:text-sm text-white/80 leading-relaxed tracking-wider uppercase">
                  IN AN INDUSTRY WHERE SEEMINGLY EVERYTHING HAS ALREADY BEEN SAID,{" "}
                  <span className="text-[#ffd700] font-bold">アズカ・バリクラナ</span>{" "}
                  SEEKS TO COMMENT MORE THAN STATE.
                </p>
                <div className="p-4 bg-white/5 border border-white/10 rounded-xl font-mono text-xs text-white/70 space-y-1">
                  <div className="flex items-center gap-2 text-[#ffd700]">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>SPECIFICATION // FULLSTACK & CYBERSEC</span>
                  </div>
                  <div>SYS.OP: AZKA BARIQLANA</div>
                  <div>STATUS: ACTIVE & DEPLOYED</div>
                </div>
              </div>

              {/* Bottom Badges (Starburst & AR Circle Reticle) */}
              <div className="flex items-center gap-6 pt-4">
                {/* Starburst Icon */}
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[#ffd700] shadow-[0_0_15px_#ffd700]">
                  <Sparkles className="w-5 h-5 animate-spin" style={{ animationDuration: "12s" }} />
                </div>

                {/* AR Circle Badge */}
                <div className="w-12 h-12 rounded-full border border-dashed border-white/40 flex items-center justify-center font-mono text-[11px] font-bold text-white tracking-widest">
                  AR
                </div>
              </div>
            </div>

            {/* Center Horizontal Image Card */}
            <div className="lg:col-span-5 flex flex-col justify-end">
              <div className="relative w-full h-[280px] sm:h-[340px] bg-[#1a1a24] border border-white/15 rounded-sm overflow-hidden group">
                {/* Top Badge */}
                <div className="absolute top-0 left-0 z-20 bg-white text-black font-mono text-xs font-bold px-3 py-1 tracking-wider shadow-md">
                  407
                </div>

                {/* Image */}
                <Image
                  src="/images/cyberpunk_wide.png"
                  alt="AZKBRQLNA Cyber Portrait Wide"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />

                {/* Overlay Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                {/* Right Edge Watermark */}
                <div className="absolute right-2 bottom-4 z-20 writing-mode-vertical font-mono text-[10px] text-white/50 tracking-widest uppercase">
                  c.FUTURE
                </div>
              </div>
            </div>

            {/* Right Tall Vertical Image Card */}
            <div className="lg:col-span-3 flex flex-col">
              <div className="relative w-full h-[360px] sm:h-[440px] bg-[#1a1a24] border border-white/15 rounded-sm overflow-hidden group">
                {/* Mobile Top Badge */}
                <div className="lg:hidden absolute top-0 right-0 z-20 bg-white text-black font-mono text-xs font-bold px-3 py-1 tracking-wider">
                  80-A45
                </div>

                {/* Image */}
                <Image
                  src="/images/cyberpunk_tall.png"
                  alt="AZKBRQLNA Cyber Portrait Tall"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />

                {/* Overlay Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                {/* Right Edge Watermark */}
                <div className="absolute right-2 bottom-4 z-20 writing-mode-vertical font-mono text-[10px] text-white/50 tracking-widest uppercase">
                  c.FUTURE
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Right Vertical Scroll Text */}
          <div className="hidden lg:flex fixed right-6 bottom-12 z-30 flex-col items-center gap-2 font-mono text-xs text-white/50 tracking-widest">
            <span className="writing-mode-vertical">SCROLL [スクロール]</span>
            <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent" />
          </div>

        </section>

        {/* ================= SUB-NAVIGATION DIRECTORY CARDS ================= */}
        <section className="mt-24 pt-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="font-mono text-xs text-[#ffd700] tracking-widest uppercase">
                // MULTI-PAGE SYSTEM DIRECTORY
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-wider mt-1">
                EXPLORE MODULES
              </h2>
            </div>
            <p className="font-mono text-xs text-white/60 max-w-sm">
              Navigate to specialized pages for detailed project showcases, career experience, and technical skills.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "PROJECTS",
                desc: "Fullstack apps, WhatsApp bots, & Flutter mobile tools",
                href: "/projects",
                icon: Code,
                badge: "04 WORKS",
              },
              {
                title: "EXPERIENCE",
                desc: "Network Engineering at NEXA & Frontend Dev at GVP",
                href: "/experience",
                icon: ShieldCheck,
                badge: "2 CAREERS",
              },
              {
                title: "ABOUT ME",
                desc: "Fullstack architecture & cybersecurity background",
                href: "/about",
                icon: Terminal,
                badge: "PROFILE",
              },
              {
                title: "CONTACT",
                desc: "Interactive terminal & direct communication line",
                href: "/contact",
                icon: Zap,
                badge: "TERMINAL",
              },
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <Link key={idx} href={card.href} className="group">
                  <div className="bg-[#161622]/80 backdrop-blur-md border border-white/15 group-hover:border-[#ffd700] p-6 rounded-xl transition-all duration-300 shadow-md group-hover:shadow-[0_0_20px_rgba(255,215,0,0.2)] flex flex-col justify-between h-52">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-2 bg-white/5 rounded-lg text-[#ffd700] group-hover:bg-[#ffd700] group-hover:text-black transition-colors">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="font-mono text-[10px] text-white/50 border border-white/10 px-2 py-0.5 rounded">
                          {card.badge}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#ffd700] transition-colors font-sans tracking-wide">
                        {card.title}
                      </h3>
                      <p className="font-mono text-xs text-white/70 mt-2 line-clamp-2">
                        {card.desc}
                      </p>
                    </div>

                    <div className="flex items-center justify-between font-mono text-xs text-[#ffd700] pt-4 border-t border-white/10">
                      <span>ENTER MODULE</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

      </main>
    </>
  );
}
