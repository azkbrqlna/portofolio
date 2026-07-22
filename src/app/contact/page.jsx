"use client";

import React, { useState } from "react";
import CyberMatrixBackground from "@/components/ui/CyberMatrixBackground";
import CyberTerminal from "@/components/ui/CyberTerminal";
import GlitchText from "@/components/ui/GlitchText";
import { Mail, Linkedin, Github, Instagram, Send, Terminal as TerminalIcon, ShieldCheck, ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const contactChannels = [
    {
      label: "EMAIL ADDRESS",
      value: "azkbrqlna@gmail.com",
      href: "mailto:azkbrqlna@gmail.com",
      icon: Mail,
      accent: "text-[#ffd700]",
    },
    {
      label: "LINKEDIN",
      value: "Azka Bariqlana",
      href: "https://www.linkedin.com/in/azka-bariqlana-06a3482a1/",
      icon: Linkedin,
      accent: "text-[#8be9fd]",
    },
    {
      label: "GITHUB",
      value: "@azkbrqlna",
      href: "https://github.com/azkbrqlna",
      icon: Github,
      accent: "text-[#bd93f9]",
    },
    {
      label: "INSTAGRAM",
      value: "@azkbrqlna",
      href: "https://instagram.com/azkbrqlna",
      icon: Instagram,
      accent: "text-[#ff79c6]",
    },
  ];

  return (
    <div className="pt-20 sm:pt-24 md:pt-28 pb-16 min-h-screen font-sans select-none relative">
      <CyberMatrixBackground />

      <div className="relative z-10 max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Layout (Matching Home, Projects & Experience) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Sidebar: Title & Direct Channels */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tighter uppercase font-sans leading-none">
                <GlitchText text="CONTACT" delay={150} />
              </h1>
              <div className="text-xs font-mono text-[#ffd700] mt-2 font-bold tracking-widest uppercase">
                DIRECT TRANSMISSION // 01
              </div>
            </div>

            {/* Direct Channels Links */}
            <div className="space-y-3 font-mono text-xs pt-4 border-t border-white/10">
              <span className="text-[11px] text-white/40 uppercase tracking-widest block font-mono">
                DIRECT CHANNELS:
              </span>

              {contactChannels.map((ch, idx) => {
                const Icon = ch.icon;
                return (
                  <a
                    key={idx}
                    href={ch.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-[#ffd700] text-white transition-all group"
                  >
                    <div className="flex items-center gap-3 truncate">
                      <Icon className={`w-4 h-4 ${ch.accent} shrink-0`} />
                      <div className="flex flex-col truncate">
                        <span className="text-[10px] text-white/40 uppercase">{ch.label}</span>
                        <span className="font-bold truncate group-hover:text-[#ffd700] transition-colors">
                          {ch.value}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-[#ffd700] shrink-0" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Column: Encrypted Transmission Form & Terminal */}
          <div className="lg:col-span-9 grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Encrypted Contact Form */}
            <div className="lg:col-span-7 bg-[#161622]/90 backdrop-blur-md border border-white/15 p-6 sm:p-8 rounded-xl shadow-xl space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono">
                <div className="flex items-center gap-2 text-white">
                  <ShieldCheck className="w-5 h-5 text-[#ffd700]" />
                  <h2 className="font-bold text-sm sm:text-base tracking-wider uppercase font-sans">
                    ENCRYPTED MESSAGE PROTOCOL
                  </h2>
                </div>
                <span className="text-[10px] text-[#50fa7b] flex items-center gap-1.5 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#50fa7b] animate-ping" />
                  ONLINE // 200 OK
                </span>
              </div>

              {submitted ? (
                <div className="p-6 bg-[#ffd700]/10 border border-[#ffd700]/40 rounded-xl text-center font-mono space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-[#ffd700] mx-auto" />
                  <div className="text-[#ffd700] font-bold text-base tracking-wider uppercase">
                    TRANSMISSION DISPATCHED // SUCCESS
                  </div>
                  <p className="text-xs text-white/80 leading-relaxed">
                    Thank you, <span className="text-[#ffd700] font-bold">{formData.name}</span>. Your message has been encrypted and successfully delivered to Azka Bariqlana.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                  <div>
                    <label className="block text-white/70 mb-1.5 font-bold uppercase tracking-wider text-[11px]">
                      01 // OPERATOR NAME
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your full name..."
                      className="w-full bg-[#0c0c12] border border-white/20 focus:border-[#ffd700] rounded-lg px-4 py-3 text-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-white/70 mb-1.5 font-bold uppercase tracking-wider text-[11px]">
                      02 // EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="operator@domain.com"
                      className="w-full bg-[#0c0c12] border border-white/20 focus:border-[#ffd700] rounded-lg px-4 py-3 text-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-white/70 mb-1.5 font-bold uppercase tracking-wider text-[11px]">
                      03 // TRANSMISSION CONTENT
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message, project inquiry, or security feedback..."
                      className="w-full bg-[#0c0c12] border border-white/20 focus:border-[#ffd700] rounded-lg px-4 py-3 text-white focus:outline-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#ffd700] text-[#111116] font-bold py-3.5 rounded-lg hover:bg-[#ffe033] transition-all flex items-center justify-center gap-2 tracking-wider shadow-lg active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4" />
                    <span>DISPATCH TRANSMISSION</span>
                  </button>
                </form>
              )}
            </div>

            {/* Interactive Cyber Terminal Widget */}
            <div className="lg:col-span-5 flex flex-col space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#ffd700] font-bold tracking-wider">
                <TerminalIcon className="w-4 h-4" />
                <span>CYBER TERMINAL INTERFACE</span>
              </div>
              <CyberTerminal />
            </div>

          </div>

        </div>

        {/* Bottom Right Vertical Scroll Watermark */}
        <div className="hidden lg:flex fixed right-6 bottom-12 z-30 flex-col items-center gap-2 font-mono text-xs text-white/50 tracking-widest pointer-events-none select-none">
          <span className="writing-mode-vertical">SCROLL [スクロール]</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent" />
        </div>

      </div>
    </div>
  );
}
