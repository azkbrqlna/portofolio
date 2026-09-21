"use client";

import React from "react";
import CyberMatrixBackground from "@/components/ui/CyberMatrixBackground";
import GlitchText from "@/components/ui/GlitchText";
import GlitchTitle from "@/components/ui/GlitchTitle";
import HeroTerminal from "@/components/ui/HeroTerminal";
import Projects from "@/app/portofolio/Project";
import ExperienceSection from "@/app/portofolio/Experience";
import ContactSection from "@/components/ContactSection";
import { Terminal, Shield, Code2, ArrowRight, Github, Linkedin } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Particle Background */}
      <CyberMatrixBackground />

      <div className="relative z-10 w-full overflow-x-hidden select-none">

        {/* ═══════════════════════════════════════════ */}
        {/* HERO SECTION */}
        {/* ═══════════════════════════════════════════ */}
        <section
          id="home"
          className="min-h-screen flex flex-col justify-center pt-20 sm:pt-24 lg:pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-[1450px] w-full mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[70vh]">

            {/* ── LEFT: Identity Block ── */}
            <div className="flex flex-col gap-7">

              {/* Role badge */}
              <div className="flex items-center gap-2 w-fit">
                <div className="w-1.5 h-1.5 rounded-full bg-[#28c840] animate-pulse" />
                <span className="font-mono text-[10px] tracking-[0.25em] text-white/45 uppercase">
                  Fullstack Developer · Cybersecurity Enthusiast
                </span>
              </div>

              {/* Name */}
              <div>
                <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-white uppercase leading-none font-sans">
                  <GlitchText text="AZKBRQLNA" delay={200} />
                </h1>
                <p className="mt-3 font-mono text-sm text-white/50 tracking-wide">
                  Azka Bariqlana — building the web, securing the stack.
                </p>
              </div>

              {/* Bio */}
              <p className="font-mono text-xs sm:text-sm text-white/60 leading-relaxed tracking-wide max-w-lg">
                Undergraduate student at{" "}
                <span className="text-white/80 font-bold">Politeknik Negeri Semarang</span>,
                crafting modern fullstack applications and exploring the boundaries
                of{" "}
                <span className="text-[#ffd700] font-bold">cybersecurity</span>.
              </p>

              {/* Highlight Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <div className="flex items-center gap-3 border border-white/10 bg-white/[0.02] backdrop-blur-sm px-3 py-2.5 rounded-lg hover:border-[#ffd700]/40 transition-colors">
                  <Code2 className="w-4 h-4 text-[#ffd700] shrink-0" />
                  <div className="flex flex-col">
                    <span className="font-mono text-[9px] tracking-widest text-white/35">BUILDING</span>
                    <span className="font-mono text-[10px] tracking-wide text-white/80">Web Apps</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 border border-white/10 bg-white/[0.02] backdrop-blur-sm px-3 py-2.5 rounded-lg hover:border-[#ffd700]/40 transition-colors">
                  <Shield className="w-4 h-4 text-[#ffd700] shrink-0" />
                  <div className="flex flex-col">
                    <span className="font-mono text-[9px] tracking-widest text-white/35">EXPLORING</span>
                    <span className="font-mono text-[10px] tracking-wide text-white/80">Security</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 border border-white/10 bg-white/[0.02] backdrop-blur-sm px-3 py-2.5 rounded-lg hover:border-[#ffd700]/40 transition-colors">
                  <Terminal className="w-4 h-4 text-[#ffd700] shrink-0" />
                  <div className="flex flex-col">
                    <span className="font-mono text-[9px] tracking-widest text-white/35">LEARNING</span>
                    <span className="font-mono text-[10px] tracking-wide text-white/80">Best Practices</span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="flex items-center gap-2 font-mono text-xs tracking-widest uppercase px-5 py-2.5 rounded-lg bg-[#ffd700] text-black font-bold hover:bg-[#ffe84d] transition-colors"
                >
                  View Projects
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#contact"
                  className="flex items-center gap-2 font-mono text-xs tracking-widest uppercase px-5 py-2.5 rounded-lg border border-white/15 text-white/70 hover:border-[#ffd700]/50 hover:text-white transition-colors"
                >
                  Contact Me
                </a>
              </div>

            </div>

            {/* ── RIGHT: Terminal Widget ── */}
            <div className="w-full">
              <HeroTerminal />
            </div>

          </div>

          {/* Scroll indicator */}
          <div className="flex items-center justify-center gap-2 text-white/25 font-mono text-[10px] tracking-widest animate-pulse mt-12">
            <div className="w-8 h-px bg-white/15" />
            <span>SCROLL DOWN</span>
            <div className="w-8 h-px bg-white/15" />
          </div>
        </section>

        {/* ═══════════════════════════════════════════ */}
        {/* INTRO / SUMMARY SECTION */}
        {/* ═══════════════════════════════════════════ */}
        <section
          id="about"
          className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-[1450px] w-full mx-auto"
        >
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <GlitchTitle
                text="ABOUT ME"
                delay={150}
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tighter uppercase font-sans leading-none"
              />
              <div className="text-xs font-mono text-[#ffd700] mt-2 font-bold tracking-widest uppercase">
                WHO I AM
              </div>
            </div>
            <div className="font-mono text-xs text-white/40 tracking-widest uppercase">
              POLITEKNIK NEGERI SEMARANG
            </div>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left: Summary */}
            <div className="lg:col-span-7 space-y-5">
              <p className="font-mono text-sm sm:text-base text-white/90 leading-relaxed tracking-wide">
                Hi, I am <span className="text-[#ffd700] font-bold">Azka Bariqlana</span>. I am an{" "}
                <span className="text-[#ffd700] font-bold">
                  undergraduate student
                </span>{" "}
                from{" "}
                <span className="text-white font-bold border-b border-[#ffd700]/60">
                  Politeknik Negeri Semarang
                </span>
                , currently pursuing my degree with a strong focus on software
                engineering and modern web development. My academic journey has
                shaped me into a curious, disciplined, and detail-oriented
                developer who thrives on turning complex problems into clean,
                functional solutions.
              </p>

              <p className="font-mono text-sm sm:text-base text-white/70 leading-relaxed tracking-wide">
                Beyond the classroom, I&apos;ve immersed myself in building
                fullstack applications — from crafting intuitive user interfaces
                to designing reliable backends. Alongside development, my
                growing passion for{" "}
                <span className="text-[#ffd700] font-bold">cybersecurity</span>{" "}
                drives me to understand how systems are protected, tested, and
                hardened against real-world threats.
              </p>

              <p className="font-mono text-sm sm:text-base text-white/70 leading-relaxed tracking-wide">
                I believe in continuous learning, writing code that lasts, and
                collaborating with people who care about the craft. Whether
                it&apos;s shipping a new feature, exploring a security concept,
                or contributing to a team — I bring the same energy:{" "}
                <span className="text-white font-bold">
                  build, break, learn, repeat.
                </span>
              </p>
            </div>

            {/* Right: Info Cards */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { k: "EDUCATION", v: "Politeknik Negeri Semarang" },
                  { k: "ROLE", v: "Undergraduate Student" },
                  { k: "SPECIALTY", v: "Fullstack Development" },
                  { k: "INTEREST", v: "Cybersecurity" },
                  { k: "LOCATION", v: "Semarang, Indonesia" },
                  { k: "LANGUAGES", v: "ID / EN" },
                ].map((item) => (
                  <div
                    key={item.k}
                    className="flex flex-col border border-white/10 bg-white/[0.02] backdrop-blur-sm p-3 rounded-lg hover:border-[#ffd700]/40 transition-colors"
                  >
                    <span className="font-mono text-[9px] tracking-widest text-white/40 mb-1">
                      {item.k}
                    </span>
                    <span className="font-mono text-xs sm:text-sm tracking-wide text-white">
                      {item.v}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#ffd700]/30 to-transparent" />
        </div>

        {/* ═══════════════════════════════════════════ */}
        {/* PROJECTS SECTION */}
        {/* ═══════════════════════════════════════════ */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-[1450px] w-full mx-auto">
          <Projects />
        </section>

        {/* Section Divider */}
        <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#ffd700]/30 to-transparent" />
        </div>

        {/* ═══════════════════════════════════════════ */}
        {/* EXPERIENCE SECTION */}
        {/* ═══════════════════════════════════════════ */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-[1450px] w-full mx-auto">
          <ExperienceSection />
        </section>

        {/* Section Divider */}
        <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#ffd700]/30 to-transparent" />
        </div>

        {/* ═══════════════════════════════════════════ */}
        {/* CONTACT SECTION */}
        {/* ═══════════════════════════════════════════ */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-[1450px] w-full mx-auto">
          <ContactSection />
        </section>

      </div>
    </>
  );
}