"use client";

import React, { useState } from "react";
import { Code, ShieldCheck, Cpu, Terminal, Sparkles, Database, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function CyberSkills() {
  const [activeTab, setActiveTab] = useState("all");

  const skillCategories = [
    {
      id: "web",
      title: "Frontend & Web Dev",
      icon: Globe,
      color: "#8be9fd",
      skills: [
        { name: "Next.js", level: 90, icon: "⚡" },
        { name: "React", level: 88, icon: "⚛️" },
        { name: "Tailwind CSS", level: 92, icon: "🎨" },
        { name: "Angular", level: 80, icon: "🅰️" },
        { name: "Bootstrap", level: 85, icon: "🅱️" },
        { name: "JavaScript (ES6+)", level: 90, icon: "📜" },
      ],
    },
    {
      id: "cyber",
      title: "Networking & Security",
      icon: ShieldCheck,
      color: "#ff5555",
      skills: [
        { name: "MikroTik RouterOS", level: 88, icon: "📡" },
        { name: "Network Infrastructure", level: 85, icon: "🌐" },
        { name: "Troubleshooting", level: 92, icon: "🔧" },
        { name: "Fiber Optics Installation", level: 82, icon: "🔌" },
        { name: "Web Application Audit", level: 78, icon: "🛡️" },
      ],
    },
    {
      id: "tools",
      title: "Backend & Ecosystem",
      icon: Cpu,
      color: "#bd93f9",
      skills: [
        { name: "Node.js", level: 85, icon: "🟢" },
        { name: "RESTful APIs", level: 88, icon: "🔗" },
        { name: "Git / GitHub", level: 90, icon: "🐙" },
        { name: "Firebase", level: 80, icon: "🔥" },
        { name: "Flutter", level: 75, icon: "📱" },
      ],
    },
  ];

  const filteredCategories =
    activeTab === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="py-16 relative">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#bd93f9]/10 border border-[#bd93f9]/30 text-[#bd93f9] text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#f8f8f2] tracking-wider">
            SKILL MATRIX & EXPERTISE
          </h2>
          <p className="text-sm text-[#6272a4] max-[#600px] mt-2 font-mono">
            Bridging high-performance frontend architecture with robust network security infrastructure.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 font-mono text-xs">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-xl border transition-all ${
                activeTab === "all"
                  ? "bg-[#bd93f9] text-[#1e1e2e] border-[#bd93f9] font-bold shadow-[0_0_15px_rgba(189,147,249,0.4)]"
                  : "bg-[#1e1e2e]/80 text-[#6272a4] border-[#bd93f9]/20 hover:text-[#f8f8f2]"
              }`}
            >
              [ ALL MATRIX ]
            </button>
            {skillCategories.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all ${
                    activeTab === tab.id
                      ? "bg-[#bd93f9] text-[#1e1e2e] border-[#bd93f9] font-bold shadow-[0_0_15px_rgba(189,147,249,0.4)]"
                      : "bg-[#1e1e2e]/80 text-[#6272a4] border-[#bd93f9]/20 hover:text-[#f8f8f2]"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-[#161622]/80 backdrop-blur-md border border-[#bd93f9]/20 hover:border-[#bd93f9]/50 rounded-2xl p-6 shadow-[0_0_20px_rgba(22,22,34,0.6)] transition-all group"
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#bd93f9]/15">
                  <div
                    className="p-3 rounded-xl bg-[#1e1e2e] border border-[#bd93f9]/30"
                    style={{ color: category.color }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#f8f8f2]">
                      {category.title}
                    </h3>
                    <span className="text-xs font-mono text-[#6272a4]">
                      {category.skills.length} CORE MODULES
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5 font-mono text-xs">
                      <div className="flex items-center justify-between text-[#f8f8f2]">
                        <span className="flex items-center gap-2">
                          <span>{skill.icon}</span>
                          <span className="font-semibold">{skill.name}</span>
                        </span>
                        <span style={{ color: category.color }} className="font-bold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-[#1e1e2e] rounded-full overflow-hidden border border-[#bd93f9]/10">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: sIdx * 0.08 }}
                          className="h-full rounded-full"
                          style={{
                            backgroundColor: category.color,
                            boxShadow: `0 0 10px ${category.color}`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
