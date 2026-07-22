"use client";

import React, { useState } from "react";
import CyberMatrixBackground from "@/components/ui/CyberMatrixBackground";
import GlitchText from "@/components/ui/GlitchText";
import { Mail, Linkedin, Github, Instagram, Send, ShieldCheck, ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSending(true);
    try {
      const response = await fetch("https://formsubmit.co/ajax/1034855942d3b434b5d08eed280388f", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
          _captcha: "false",
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        // Fallback direct mailto dispatch
        window.location.href = `mailto:azkbrqlna@gmail.com?subject=Portfolio Transmission from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}`;
        setSubmitted(true);
      }
    } catch (err) {
      window.location.href = `mailto:azkbrqlna@gmail.com?subject=Portfolio Transmission from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}`;
      setSubmitted(true);
    } finally {
      setIsSending(false);
    }
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

          {/* Right Column: Encrypted Transmission Form */}
          <div className="lg:col-span-9">
            <div className="bg-[#161622]/90 backdrop-blur-md border border-white/15 p-6 sm:p-8 md:p-10 rounded-xl shadow-xl space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono">
                <div className="flex items-center gap-2 text-white">
                  <ShieldCheck className="w-5 h-5 text-[#ffd700]" />
                  <h2 className="font-bold text-sm sm:text-base tracking-wider uppercase font-sans">
                    ENCRYPTED MESSAGE PROTOCOL
                  </h2>
                </div>
                <span className="text-[10px] text-[#50fa7b] flex items-center gap-1.5 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#50fa7b] animate-ping" />
                  GMAIL ENDPOINT // 200 OK
                </span>
              </div>

              {submitted ? (
                <div className="p-8 bg-[#ffd700]/10 border border-[#ffd700]/40 rounded-xl text-center font-mono space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-[#ffd700] mx-auto" />
                  <div className="text-[#ffd700] font-bold text-lg tracking-wider uppercase">
                    TRANSMISSION DISPATCHED TO GMAIL // SUCCESS
                  </div>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-[500px] mx-auto">
                    Thank you, <span className="text-[#ffd700] font-bold">{formData.name}</span>. Your message has been encrypted and delivered directly to <span className="text-[#ffd700] font-bold">azkbrqlna@gmail.com</span>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 font-mono text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
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
                        className="w-full bg-[#0c0c12] border border-white/20 focus:border-[#ffd700] rounded-lg px-4 py-3.5 text-white focus:outline-none transition-colors"
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
                        className="w-full bg-[#0c0c12] border border-white/20 focus:border-[#ffd700] rounded-lg px-4 py-3.5 text-white focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/70 mb-1.5 font-bold uppercase tracking-wider text-[11px]">
                      03 // TRANSMISSION CONTENT
                    </label>
                    <textarea
                      rows={6}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message, project inquiry, or security feedback..."
                      className="w-full bg-[#0c0c12] border border-white/20 focus:border-[#ffd700] rounded-lg px-4 py-3.5 text-white focus:outline-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full bg-[#ffd700] text-[#111116] font-bold py-4 rounded-lg hover:bg-[#ffe033] transition-all flex items-center justify-center gap-2 tracking-wider shadow-lg active:scale-[0.99] text-xs font-mono uppercase disabled:opacity-50 cursor-pointer"
                  >
                    {isSending ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>ENCRYPTING & DISPATCHING TO GMAIL...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>DISPATCH TRANSMISSION TO GMAIL</span>
                      </>
                    )}
                  </button>
                </form>
              )}
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
