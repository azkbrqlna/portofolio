"use client";

import React, { useState } from "react";
import Image from "next/image";
import CyberMatrixBackground from "@/components/ui/CyberMatrixBackground";
import InteractiveCmd from "@/components/ui/InteractiveCmd";
import GlitchText from "@/components/ui/GlitchText";

export default function HomePage() {
  const [slashTrigger, setSlashTrigger] = useState(0);

  const handleTriggerSlash = () => {
    setSlashTrigger((prev) => prev + 1);
  };

  const japaneseMarqueeItems = [
    "アズカ・バリクラナ",
    "フルスタック開発",
    "サイバーセキュリティ",
    "ウェブエンジニア",
    "次世代テクノロジー",
    "ネットワーク構築",
    "暗号化プロトコル",
    "ミクロティック",
    "フロントエンド",
    "システム設計",
    "コードイノベーション",
  ];

  return (
    <>
      {/* Cyber Matrix Canvas */}
      <CyberMatrixBackground />

      <main className="relative z-10 pt-28 sm:pt-32 lg:pt-36 pb-6 px-4 sm:px-6 lg:px-8 max-w-[1450px] mx-auto min-h-screen lg:h-screen lg:max-h-screen flex flex-col justify-between overflow-x-hidden lg:overflow-hidden select-none">

        <section className="relative w-full h-full flex flex-col justify-between py-1">

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-2 mb-2">
            <div className="flex items-baseline gap-3 flex-wrap">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white uppercase leading-none font-sans drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                <GlitchText text="AZKBRQLNA" delay={200} />
              </h1>
              <span className="text-base sm:text-lg lg:text-xl font-mono text-white/70 font-semibold tracking-widest">
                [アズカ・バリクラナ]
              </span>
            </div>
          </div>

          {/* Moving Japanese Marquee Banner */}
          <div className="w-full overflow-hidden border-y border-[#ffd700]/40 py-2 my-2 bg-black/40 backdrop-blur-sm">
            <div className="animate-marquee items-center gap-12 font-mono text-xs md:text-sm font-bold tracking-widest">
              {[...japaneseMarqueeItems, ...japaneseMarqueeItems, ...japaneseMarqueeItems].map((text, idx) => (
                <div key={idx} className="flex items-center gap-8 text-[#ffd700] drop-shadow-[0_0_10px_#ffd700]">
                  <span>{text}</span>
                  <span className="text-white/30 text-xs">◆</span>
                </div>
              ))}
            </div>
          </div>

          {/* Main Asymmetric Grid Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center flex-1 my-auto">

            {/* Left Editorial Column */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-4 pr-0 lg:pr-2">
              <div className="space-y-3">
                <p className="font-mono text-xs text-white/80 leading-relaxed tracking-wider uppercase">
                  IN AN INDUSTRY WHERE SEEMINGLY EVERYTHING HAS ALREADY BEEN SAID,{" "}
                  <span className="text-[#ffd700] font-bold">アズカ・バリクラナ</span>{" "}
                  SEEKS TO COMMENT MORE THAN STATE.
                </p>
                {/* Interactive Command Prompt Window */}
                <InteractiveCmd onTriggerSlash={handleTriggerSlash} />
              </div>
            </div>

            {/* Center Horizontal Image Card */}
            <div className="lg:col-span-5 flex flex-col justify-end">
              <div className="relative w-full h-[200px] sm:h-[240px] lg:h-[270px] bg-[#1a1a24] border border-white/15 rounded-sm overflow-hidden group">
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
              <div className="relative w-full h-[240px] sm:h-[300px] lg:h-[330px] bg-[#1a1a24] border border-white/15 rounded-sm overflow-hidden group">
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

          {/* Bottom Right Vertical Watermark */}
          <div className="hidden lg:flex fixed right-6 bottom-8 z-30 flex-col items-center gap-2 font-mono text-xs text-white/40 tracking-widest">
            <span className="writing-mode-vertical">AZKBRQLNA [アズカ]</span>
            <div className="w-px h-6 bg-gradient-to-b from-white/40 to-transparent" />
          </div>

        </section>

      </main>
    </>
  );
}
