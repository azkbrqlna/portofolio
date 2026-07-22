"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Shield, Code, Terminal, Sparkles, ExternalLink, Activity, Cpu } from "lucide-react";
import CyberTerminal from "@/components/ui/CyberTerminal";

export default function AboutSection({ onTriggerSlash }) {
  return (
    <section id="about" className="relative pt-28 pb-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Main Hero Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Bio & Taglines */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Top Cyber Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1e1e2e] border border-[#bd93f9]/40 text-[#bd93f9] text-xs font-mono mb-6 shadow-[0_0_15px_rgba(189,147,249,0.2)] w-fit">
              <span className="w-2 h-2 rounded-full bg-[#50fa7b] animate-ping" />
              <span>SYS.OPERATOR // FULLSTACK & CYBERSEC</span>
            </div>

            {/* Main Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#f8f8f2] mb-4">
              Hello, I'm <br />
              <span className="bg-gradient-to-r from-[#bd93f9] via-[#ff79c6] to-[#ff5555] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(189,147,249,0.4)]">
                Azka Bariqlana
              </span>
            </h1>

            {/* Role & Bio */}
            <p className="text-base sm:text-lg text-[#f8f8f2]/90 leading-relaxed mb-6">
              Fullstack Web Developer & Cybersecurity Trainee focused on building high-performance web applications and ensuring robust network security infrastructure.
            </p>

            {/* Quick Cyber Stats Bar */}
            <div className="grid grid-cols-3 gap-3 my-4 p-4 bg-[#161622]/80 backdrop-blur-md border border-[#bd93f9]/20 rounded-2xl font-mono">
              <div className="text-center border-r border-[#bd93f9]/20 pr-2">
                <div className="text-xl sm:text-2xl font-bold text-[#8be9fd]">02+</div>
                <div className="text-[10px] sm:text-xs text-[#6272a4]">YRS EXP</div>
              </div>
              <div className="text-center border-r border-[#bd93f9]/20 px-2">
                <div className="text-xl sm:text-2xl font-bold text-[#ff79c6]">04+</div>
                <div className="text-[10px] sm:text-xs text-[#6272a4]">PROJECTS</div>
              </div>
              <div className="text-center pl-2">
                <div className="text-xl sm:text-2xl font-bold text-[#50fa7b]">100%</div>
                <div className="text-[10px] sm:text-xs text-[#6272a4]">UPTIME</div>
              </div>
            </div>

            {/* Interactive Cyber Terminal */}
            <CyberTerminal onTriggerSlash={onTriggerSlash} />

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-2">
              <span className="text-xs font-mono text-[#6272a4] uppercase tracking-wider">
                Connect Terminal:
              </span>
              <div className="flex items-center gap-3">
                {[
                  {
                    href: "https://www.linkedin.com/in/azka-bariqlana-06a3482a1/",
                    icon: FaLinkedin,
                    color: "#8be9fd",
                  },
                  {
                    href: "https://github.com/azkbrqlna",
                    icon: FaGithub,
                    color: "#bd93f9",
                  },
                  {
                    href: "https://www.instagram.com/azkbrqlnaaa_/",
                    icon: FaInstagram,
                    color: "#ff79c6",
                  },
                  {
                    href: "mailto:azkbrqlna@gmail.com",
                    icon: SiGmail,
                    color: "#ff5555",
                  },
                ].map(({ href, icon: Icon, color }, i) => (
                  <Link
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-[#1e1e2e] border border-[#bd93f9]/30 hover:border-[#bd93f9] text-[#f8f8f2] transition-all transform hover:scale-110 shadow-sm"
                    style={{ hoverColor: color }}
                  >
                    <Icon className="text-lg" style={{ color }} />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: User Photo in Holographic HUD Reticle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative w-64 sm:w-72 md:w-80 h-64 sm:h-72 md:h-80">
              
              {/* Outer Rotating HUD Reticle */}
              <div className="absolute -inset-4 rounded-full border-2 border-dashed border-[#bd93f9]/40 animate-[spin_20s_linear_infinite] pointer-events-none" />
              
              {/* Inner Glowing Ring */}
              <div className="absolute -inset-2 rounded-full border-2 border-[#ff79c6]/60 shadow-[0_0_30px_rgba(255,121,198,0.4)] pointer-events-none" />

              {/* Photo Frame Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#bd93f9] shadow-[0_0_40px_rgba(189,147,249,0.5)] group">
                <Image
                  src="/images/copy.jpg"
                  alt="Azka Bariqlana"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                {/* Hologram Scanline Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#bd93f9]/10 to-transparent pointer-events-none opacity-60 animate-pulse" />
              </div>

              {/* Floating Cyber Status Tags */}
              <div className="absolute -top-3 -right-3 bg-[#161622] border border-[#50fa7b] text-[#50fa7b] text-[10px] font-mono px-3 py-1 rounded-lg shadow-[0_0_15px_rgba(80,250,123,0.3)] flex items-center gap-1.5">
                <Activity className="w-3 h-3 animate-pulse" />
                <span>ONLINE</span>
              </div>

              <div className="absolute -bottom-3 -left-3 bg-[#161622] border border-[#ff79c6] text-[#ff79c6] text-[10px] font-mono px-3 py-1 rounded-lg shadow-[0_0_15px_rgba(255,121,198,0.3)] flex items-center gap-1.5">
                <Cpu className="w-3 h-3" />
                <span>CORE: ACTIVE</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
