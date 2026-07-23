"use client";

import React, { useState } from "react";
import CyberMatrixBackground from "@/components/ui/CyberMatrixBackground";
import GlitchText from "@/components/ui/GlitchText";
import { Mail, Linkedin, Github, Instagram, Send, ShieldCheck, ArrowUpRight, CheckCircle2, Loader2, AlertTriangle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "", honeypot: "" });
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [lastSentTime, setLastSentTime] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    // 1. Anti-Spam Check: Invisible Honeypot Trap (Bots will fill this field, humans won't)
    if (formData.honeypot) {
      console.warn("Spam bot detected via honeypot trap.");
      setSubmitted(true);
      return;
    }

    // 2. Anti-Spam Check: Minimum text length to prevent dummy spam
    if (formData.name.trim().length < 2) {
      setErrorMsg("VALIDATION ERROR // Name must be at least 2 characters.");
      return;
    }
    if (formData.message.trim().length < 10) {
      setErrorMsg("VALIDATION ERROR // Message content must be at least 10 characters.");
      return;
    }

    // 3. Anti-Spam Rate Limit Cooldown (60 seconds per dispatch)
    const now = Date.now();
    if (now - lastSentTime < 60000) {
      const remainingSeconds = Math.ceil((60000 - (now - lastSentTime)) / 1000);
      setErrorMsg(`RATE LIMIT EXCEEDED // Please wait ${remainingSeconds}s before dispatching another message.`);
      return;
    }

    setIsSending(true);

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("message", formData.message);
      data.append("_subject", `New Portfolio Transmission from ${formData.name}`);
      data.append("_captcha", "false");

      const response = await fetch("https://formsubmit.co/ajax/azkbrqlna@gmail.com", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (response.ok || result.success === "true" || result.success === true) {
        setSubmitted(true);
        setLastSentTime(Date.now());
      } else {
        // Direct mailto fallback
        window.location.href = `mailto:azkbrqlna@gmail.com?subject=Portfolio Transmission from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}`;
        setSubmitted(true);
        setLastSentTime(Date.now());
      }
    } catch (err) {
      console.error("Transmission dispatch error:", err);
      window.location.href = `mailto:azkbrqlna@gmail.com?subject=Portfolio Transmission from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}`;
      setSubmitted(true);
      setLastSentTime(Date.now());
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
      href: "https://www.linkedin.com/in/azkbrqlna",
      icon: Linkedin,
      accent: "text-[#ffd700]",
    },
    {
      label: "GITHUB",
      value: "azkbrqlna",
      href: "https://github.com/azkbrqlna",
      icon: Github,
      accent: "text-[#ffd700]",
    },
    {
      label: "INSTAGRAM",
      value: "@azkbrqlnaaa_",
      href: "https://instagram.com/azkbrqlnaaa_",
      icon: Instagram,
      accent: "text-[#ffd700]",
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
                    SEND YOUR MESSAGE
                  </h2>
                </div>

              </div>

              {/* Error Alert Display */}
              {errorMsg && (
                <div className="p-4 bg-[#ff5555]/10 border border-[#ff5555]/40 rounded-lg text-[#ff5555] text-xs font-mono flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {submitted ? (
                <div className="p-8 bg-[#ffd700]/10 border border-[#ffd700]/40 rounded-xl text-center font-mono space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-[#ffd700] mx-auto" />
                  <div className="text-[#ffd700] font-bold text-lg tracking-wider uppercase">
                    TRANSMISSION DISPATCHED TO GMAIL // SUCCESS
                  </div>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-[500px] mx-auto">
                    Thank you, <span className="text-[#ffd700] font-bold">{formData.name}</span>. Your message has been encrypted and delivered directly to <span className="text-[#ffd700] font-bold">azkbrqlna@gmail.com</span>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", message: "", honeypot: "" });
                    }}
                    className="mt-4 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-mono font-bold"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 font-mono text-xs">

                  {/* 🛑 Invisible Honeypot Trap Input for Spam Bots */}
                  <input
                    type="text"
                    name="website_url_honeypot"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    className="hidden opacity-0 pointer-events-none absolute -z-50"
                    tabIndex={-1}
                    autoComplete="off"
                  />

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
                      03 // TRANSMISSION CONTENT (MIN 10 CHARS)
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
