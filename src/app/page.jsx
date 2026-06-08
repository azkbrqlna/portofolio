"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const [time, setTime] = useState("");
  const [isGlitching, setIsGlitching] = useState(true);

  useEffect(() => {
    // Clock setup
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-GB", { hour12: false }));
    };
    updateTime(); 
    const timer = setInterval(updateTime, 1000);

    // Stop glitch effect 3.5 seconds after component mounts
    const glitchTimer = setTimeout(() => {
      setIsGlitching(false);
    }, 3500);

    return () => {
      clearInterval(timer);
      clearTimeout(glitchTimer);
    };
  }, []);

  const roles = [
    "Full-Stack Developer", 
    "Mobile Engineer", 
    "Cybersecurity Researcher"
  ];

  const projects = [
    { id: "001", name: "ArthaMind", desc: "Web-based financial management platform for UMKM (Dockerized)", type: "APP" },
    { id: "002", name: "Asha Backyard", desc: "Coffee shop digital ordering mobile application (Flutter & Firebase)", type: "MOBILE" },
    { id: "003", name: "NutriQ AI", desc: "Nutrition tracking platform utilizing AI API integrations", type: "PLATFORM" },
    { id: "004", name: "BrongDetector", desc: "Mobile application for motorcycle exhaust noise level measurement", type: "MOBILE" },
    { id: "005", name: "IoT Patient Assistance", desc: "ESP32 and C++ firmware integrated with real-time Flutter dashboard", type: "FIRMWARE" },
    { id: "006", name: "PiwBites", desc: "E-commerce product platform", type: "E-COM" },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col justify-between p-6 md:p-12 lg:p-16 max-w-[1800px] mx-auto relative">
      
      {/* Absolute Header Navigation */}
      <nav className="absolute top-8 right-8 md:top-12 md:right-16 flex space-x-6 text-[11px] tracking-[0.2em] font-mono text-cyber-muted uppercase z-50">
        <Link href="#" className="hover:text-cyber-accent transition-colors duration-300">About</Link>
        <Link href="/archive" className="hover:text-cyber-accent transition-colors duration-300">Archive</Link>
        <Link href="#" className="hover:text-cyber-accent transition-colors duration-300">Contact</Link>
      </nav>

      <div className="flex flex-col lg:flex-row justify-between w-full flex-1 mt-20 lg:mt-32 gap-16 lg:gap-8">
        
        {/* Left Column: Identity & Bio */}
        <div className="w-full lg:w-[45%] flex flex-col justify-start z-10 relative">
          
          <div className="mb-2 font-mono text-[10px] text-cyber-accent tracking-widest uppercase">
            [ SYS_ROOT // INITIALIZED ]
          </div>
          
          {/* Identity */}
          <div className="mb-10">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-cyber-text uppercase tracking-tighter leading-[0.9]">
              <span className={`block ${isGlitching ? 'glitch-text' : ''}`} data-text="AZKA">AZKA</span>
              <span className={`block ${isGlitching ? 'glitch-text' : ''}`} data-text="BARIQLANA">BARIQLANA</span>
            </h1>
          </div>

          {/* Roles */}
          <div className="mb-8 flex flex-col gap-2">
            {roles.map((role, idx) => (
              <div key={idx} className="flex items-center gap-3 text-sm md:text-[15px] text-cyber-muted font-mono">
                <span className="w-2 h-[2px] bg-cyber-accent opacity-70"></span>
                {role}
              </div>
            ))}
          </div>

          {/* Bio Snippet */}
          <div className="max-w-md text-[#888888] text-[13px] md:text-[14px] leading-relaxed mb-12">
            Architecting robust digital infrastructure and mobile ecosystems. Emphasizing security-first development methodologies and deep-level system integrations. 
            <span className="block mt-4 text-cyber-text text-[11px] font-mono border-b border-cyber-elevated inline-block pb-1">
              Certified via SKPI (Surat Keterangan Pendamping Ijazah).
            </span>
          </div>
          
        </div>

        {/* Right Column: Clean Project List */}
        <div className="w-full lg:w-[45%] flex flex-col z-10 pt-4 lg:pt-0">
          <div className="flex justify-between items-center mb-8 border-b border-cyber-elevated pb-4">
            <h3 className="text-[11px] tracking-[0.2em] text-[#666666] uppercase font-mono">Featured Deployments</h3>
            <Link href="/archive" className="text-[10px] text-cyber-accent hover:text-cyber-accentAlt transition-colors uppercase tracking-widest font-mono">View All</Link>
          </div>
          
          <div className="flex flex-col">
            {projects.map((item, idx) => (
              <motion.div 
                key={item.id} 
                className="group flex items-start gap-4 py-5 border-b border-cyber-elevated/50 hover:bg-cyber-surface/30 transition-all duration-300 cursor-pointer relative px-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + (idx * 0.1) }}
              >
                {/* Minimal Hover Accent Line */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-cyber-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <span className="text-[10px] font-mono text-cyber-muted mt-1 w-6">{item.id}</span>
                <div className="flex flex-col flex-1">
                  <h4 className="text-[15px] font-medium text-[#E0E0E0] group-hover:text-cyber-accent transition-colors duration-300">
                    {item.name}
                  </h4>
                  <p className="text-[13px] text-[#888888] mt-1 pr-4">
                    {item.desc}
                  </p>
                </div>
                <div className="hidden sm:block text-[10px] font-mono px-2 py-1 border border-cyber-highest text-[#666666] group-hover:border-cyber-accent/30 group-hover:text-cyber-accent/80 transition-colors">
                  {item.type}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Footer Area */}
      <div className="flex justify-between items-end w-full mt-24 text-[10px] sm:text-[11px] text-[#666666] tracking-[0.2em] font-mono uppercase">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-cyber-accent rounded-full animate-pulse"></span>
          SYS.TIME: {time}
        </div>
        <div>
          <span>&copy; 2026 AZKA_BARIQLANA</span>
        </div>
      </div>

    </div>
  );
}
