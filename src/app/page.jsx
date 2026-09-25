"use client";

import React from "react";
import Projects from "@/app/portofolio/Project";
import ExperienceSection from "@/app/portofolio/Experience";
import ContactSection from "@/app/portofolio/Contact";
import SkillsSection from "@/app/portofolio/Skills";
import GithubContributions from "@/app/portofolio/GithubContributions";

/* ── Reusable section heading ──────────────────────────────── */
function SectionHeading({ title }) {
  return (
    <h2
      className="text-2xl font-serif font-semibold text-[#e8e8f0] mb-6"
      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
    >
      {title}
    </h2>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* ── Single centered column ── */}
      <div className="mx-auto max-w-[680px] px-6 pt-24 pb-24">

        {/* ══════════════════════════════════ */}
        {/* HERO */}
        {/* ══════════════════════════════════ */}
        <section id="home" className="pt-12 pb-8">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-4">
            <h1
              className="text-3xl sm:text-4xl font-serif font-semibold text-[#e8e8f0] tracking-tight leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Azka Bariqlana
            </h1>
          </div>


          {/* Bio */}
          <p className="text-[15px] text-white/65 leading-relaxed">
            Currently focused on{" "}
            <a href="#projects" className="accent-link">Web Development</a>,
            learning more about{" "}
            <a href="#experience" className="accent-link">Cyber Security</a>,
            and studying at{" "}
            <span className="text-white/80">Politeknik Negeri Semarang</span>.
            Always curious and excited to keep growing.
          </p>
        </section>

        {/* ══════════════════════════════════ */}
        {/* GITHUB CONTRIBUTIONS */}
        {/* ══════════════════════════════════ */}
        <section id="contributions" className="pb-14">
          <GithubContributions />
        </section>

        <hr className="dotted-divider mb-14" />

        {/* ══════════════════════════════════ */}
        {/* ABOUT */}
        {/* ══════════════════════════════════ */}
        <section id="about" className="pb-14">
          <SectionHeading title="About" />
          <div className="space-y-4 text-[15px] text-white/60 leading-relaxed">
            <p>
              I'm an undergraduate student at{" "}
              <span className="text-white/80">Politeknik Negeri Semarang</span>{" "}
              pursuing a degree in Informatics Engineering. I build modern,
              performant web applications from front to back and have a growing
              interest in how systems can be secured and hardened.
            </p>
            <p>
              I enjoy writing clean, maintainable code and collaborating with
              people who care about craft. My philosophy:{" "}
              <span className="text-white/80 italic">build, break, learn, repeat.</span>
            </p>
          </div>
        </section>

        <hr className="dotted-divider mb-14" />

        {/* ══════════════════════════════════ */}
        {/* EXPERIENCE */}
        {/* ══════════════════════════════════ */}
        <section id="experience" className="pb-14">
          <SectionHeading title="Experience" />
          <ExperienceSection />
        </section>

        <hr className="dotted-divider mb-14" />

        {/* ══════════════════════════════════ */}
        {/* PROJECTS */}
        {/* ══════════════════════════════════ */}
        <section id="projects" className="pb-14">
          <SectionHeading title="Projects" />
          <Projects />
        </section>


        <hr className="dotted-divider mb-14" />

        {/* ══════════════════════════════════ */}
        {/* SKILL SETS */}
        {/* ══════════════════════════════════ */}
        <section id="skills" className="pb-14">
          <SectionHeading title="My Stacks" />
          <SkillsSection />
        </section>

        <hr className="dotted-divider mb-14" />

        {/* ══════════════════════════════════ */}
        {/* CONTACT */}
        {/* ══════════════════════════════════ */}
        <section id="contact" className="pb-8">
          <SectionHeading title="Let's get in touch" />
          <ContactSection />
        </section>

        {/* Footer */}
        <div className="pt-8 border-t border-white/[0.06] text-center">
          <p className="font-mono text-[10px] tracking-widest text-white/25 uppercase">
            Azka Bariqlana · {new Date().getFullYear()}
          </p>
        </div>

      </div>
    </div>
  );
}