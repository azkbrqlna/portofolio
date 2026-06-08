"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const archiveData = {
  projects: [
    { id: "p1", name: "ArthaMind.exe", type: "APP", desc: "Web-based financial management platform for UMKM (Dockerized).", stack: ["React", "Laravel", "Docker"], date: "2023-11" },
    { id: "p2", name: "Asha_Backyard.apk", type: "MOBILE", desc: "Coffee shop digital ordering mobile application.", stack: ["Flutter", "Firebase"], date: "2023-08" },
    { id: "p3", name: "NutriQ_AI.sys", type: "PLATFORM", desc: "Nutrition tracking platform utilizing AI API integrations.", stack: ["Next.js", "AI APIs"], date: "2024-01" },
    { id: "p4", name: "BrongDetector.apk", type: "MOBILE", desc: "Mobile application for motorcycle exhaust noise level measurement.", stack: ["Flutter", "Audio Processing"], date: "2024-03" },
    { id: "p5", name: "IoT_Patient_Assistance.bin", type: "FIRMWARE", desc: "ESP32 and C++ firmware integrated with a real-time Flutter dashboard.", stack: ["ESP32", "C++", "Flutter"], date: "2024-05" },
    { id: "p6", name: "PiwBites_Store.web", type: "E-COM", desc: "E-commerce product platform.", stack: ["React", "Node.js"], date: "2023-04" },
  ],
  cyber_write_ups: [
    { id: "c1", name: "SQL_Injection_Bypass.md", type: "WRITEUP", desc: "Advanced SQLi vulnerability research and bypass techniques.", stack: ["Burp Suite", "SQLMap"], date: "2024-02" },
    { id: "c2", name: "XSS_Payload_Crafting.txt", type: "WRITEUP", desc: "Cross-Site Scripting (XSS) analysis and payload execution in modern frameworks.", stack: ["Manual Testing"], date: "2024-04" },
    { id: "c3", name: "LFI_to_RCE_Nmap.log", type: "WRITEUP", desc: "Exploiting Local File Inclusion (LFI) to achieve Remote Code Execution.", stack: ["Nmap", "Burp Suite"], date: "2024-06" },
  ]
};

export default function ArchivePage() {
  const [activeTab, setActiveTab] = useState("projects");
  const [expandedId, setExpandedId] = useState(null);

  const currentData = activeTab === "projects" ? archiveData.projects : archiveData.cyber_write_ups;

  return (
    <div className="min-h-screen w-full flex flex-col p-8 md:p-16 lg:p-24 font-mono">
      
      {/* Directory Header */}
      <div className="mb-12 border-b border-cyber-highest pb-6">
        <div className="text-cyber-muted text-sm mb-2 flex items-center gap-2">
          <span className="text-cyber-accent">root</span> / 
          <span>azka_bariqlana</span> / 
          <span className="text-cyber-text">archive</span> /
          <span className="animate-pulse">_</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold uppercase text-cyber-text tracking-tighter">
          Directory Index
        </h1>
      </div>

      {/* Tabs / Sub-directories */}
      <div className="flex gap-4 mb-8 text-sm">
        <button 
          onClick={() => { setActiveTab("projects"); setExpandedId(null); }}
          className={`px-4 py-2 border transition-colors ${activeTab === "projects" ? "bg-cyber-accent text-cyber-base border-cyber-accent" : "bg-transparent text-cyber-muted border-cyber-highest hover:text-cyber-text hover:border-cyber-elevated"}`}
        >
          [ ./Projects_and_Apps ]
        </button>
        <button 
          onClick={() => { setActiveTab("cyber_write_ups"); setExpandedId(null); }}
          className={`px-4 py-2 border transition-colors ${activeTab === "cyber_write_ups" ? "bg-cyber-accent text-cyber-base border-cyber-accent" : "bg-transparent text-cyber-muted border-cyber-highest hover:text-cyber-text hover:border-cyber-elevated"}`}
        >
          [ ./Cyber_Write_Ups ]
        </button>
      </div>

      {/* File List Header */}
      <div className="grid grid-cols-12 gap-4 text-xs text-cyber-muted border-b border-cyber-highest pb-2 mb-2 px-4 uppercase tracking-widest hidden md:grid">
        <div className="col-span-1">PERM</div>
        <div className="col-span-4">FILE_NAME</div>
        <div className="col-span-2">TYPE</div>
        <div className="col-span-3">PRIMARY_STACK</div>
        <div className="col-span-2 text-right">MODIFIED</div>
      </div>

      {/* File List */}
      <div className="flex flex-col gap-1">
        {currentData.map((item) => (
          <div key={item.id} className="group flex flex-col border border-transparent hover:border-cyber-highest hover:bg-cyber-surface transition-all duration-200 cursor-pointer relative" onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}>
            
            {/* Hover Accent Line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyber-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center text-sm px-4 py-3">
              <div className="md:col-span-1 text-cyber-muted text-xs hidden md:block">-rw-r--r--</div>
              <div className="md:col-span-4 font-bold text-cyber-text group-hover:text-cyber-accent transition-colors flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-cyber-muted group-hover:text-cyber-accent">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                {item.name}
              </div>
              <div className="md:col-span-2 text-xs text-cyber-muted">{item.type}</div>
              <div className="md:col-span-3 text-xs text-cyber-muted truncate hidden md:block">
                [{item.stack.join(", ")}]
              </div>
              <div className="md:col-span-2 text-right text-xs text-cyber-muted hidden md:block">{item.date}</div>
            </div>

            {/* Expanded Details */}
            <AnimatePresence>
              {expandedId === item.id && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden bg-cyber-elevated/30"
                >
                  <div className="p-4 md:pl-[14%] border-t border-cyber-highest border-dashed">
                    <p className="text-sm text-cyber-text mb-4 font-sans">{item.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.stack.map((tech, idx) => (
                        <span key={idx} className="text-[10px] uppercase tracking-widest border border-cyber-highest px-2 py-1 text-cyber-muted bg-cyber-base">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <button className="text-xs text-cyber-accent hover:text-cyber-accentAlt underline decoration-dashed underline-offset-4">
                      [ EXECUTE_FILE ]
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
      
      {/* End of Directory */}
      <div className="mt-8 text-cyber-muted text-xs flex items-center gap-4">
        <div className="flex-1 h-[1px] bg-cyber-highest"></div>
        <span>END_OF_DIR</span>
        <div className="flex-1 h-[1px] bg-cyber-highest"></div>
      </div>

    </div>
  );
}
