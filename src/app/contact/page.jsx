"use client";

import React, { useState } from "react";
import CyberMatrixBackground from "@/components/ui/CyberMatrixBackground";
import CyberTerminal from "@/components/ui/CyberTerminal";
import { Mail, Linkedin, Github, Instagram, Send, Terminal as TerminalIcon, ShieldCheck } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div className="relative pt-28 pb-16 min-h-screen">
      <CyberMatrixBackground />
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffd700]/10 border border-[#ffd700]/30 text-[#ffd700] text-xs font-mono mb-3">
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>COMMUNICATION PROTOCOL</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-wider">
            GET IN TOUCH
          </h1>
          <p className="text-sm text-white/60 max-w-[600px] mt-2 font-mono">
            Connect via direct transmission or test the interactive cyber terminal below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Form */}
          <div className="lg:col-span-7 bg-[#161622]/90 backdrop-blur-md border border-white/15 p-6 md:p-8 rounded-2xl shadow-xl">
            <h2 className="text-xl font-bold text-white mb-6 font-mono flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#ffd700]" />
              <span>DIRECT TRANSMISSION</span>
            </h2>

            {submitted ? (
              <div className="p-6 bg-[#ffd700]/10 border border-[#ffd700]/40 rounded-xl text-center font-mono space-y-2">
                <div className="text-[#ffd700] font-bold text-lg">TRANSMISSION RECEIVED // 200 OK</div>
                <p className="text-xs text-white/70">
                  Thank you, {formData.name}. Your message has been encrypted and dispatched to Azka Bariqlana.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs md:text-sm">
                <div>
                  <label className="block text-white/70 mb-1.5 font-bold">OPERATOR NAME</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name..."
                    className="w-full bg-[#111116] border border-white/20 focus:border-[#ffd700] rounded-xl px-4 py-3 text-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-white/70 mb-1.5 font-bold">EMAIL ADDRESS</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="operator@domain.com"
                    className="w-full bg-[#111116] border border-white/20 focus:border-[#ffd700] rounded-xl px-4 py-3 text-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-white/70 mb-1.5 font-bold">TRANSMISSION MESSAGE</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message or inquiry..."
                    className="w-full bg-[#111116] border border-white/20 focus:border-[#ffd700] rounded-xl px-4 py-3 text-white focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#ffd700] text-[#111116] font-bold py-3 rounded-xl hover:bg-[#ffe033] transition-colors flex items-center justify-center gap-2 tracking-wider"
                >
                  <Send className="w-4 h-4" />
                  <span>DISPATCH MESSAGE</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Links & Interactive Terminal */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#161622]/90 backdrop-blur-md border border-white/15 p-6 rounded-2xl space-y-4 font-mono text-xs">
              <h3 className="text-sm font-bold text-[#ffd700] uppercase tracking-wider">
                Direct Channels
              </h3>
              
              <a
                href="mailto:azkbrqlna@gmail.com"
                className="flex items-center gap-3 p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-[#ffd700]" />
                <span>azkbrqlna@gmail.com</span>
              </a>

              <a
                href="https://www.linkedin.com/in/azka-bariqlana-06a3482a1/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 text-white transition-colors"
              >
                <Linkedin className="w-4 h-4 text-[#8be9fd]" />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href="https://github.com/azkbrqlna"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 text-white transition-colors"
              >
                <Github className="w-4 h-4 text-[#bd93f9]" />
                <span>GitHub Repository</span>
              </a>
            </div>

            {/* Interactive Terminal Widget */}
            <CyberTerminal />
          </div>

        </div>
      </div>
    </div>
  );
}
