"use client";

import React, { useState } from "react";
import SwordSlashLoader from "@/components/ui/SwordSlashLoader";
import CyberMatrixBackground from "@/components/ui/CyberMatrixBackground";
import AboutSection from "./portofolio/About";
import CyberSkills from "@/components/fragments/CyberSkills";
import ProjectSection from "./portofolio/Project";
import ExperienceSection from "./portofolio/Experience";

export default function PortfolioPage() {
  const [slashTrigger, setSlashTrigger] = useState(0);

  const handleTriggerSlash = () => {
    setSlashTrigger((prev) => prev + 1);
  };

  return (
    <>
      {/* Katana Sword Slash Opening Loader */}
      <SwordSlashLoader forceTrigger={slashTrigger} />

      {/* Cyber Matrix Animated Canvas */}
      <CyberMatrixBackground />

      {/* Main Portfolio Sections */}
      <div className="relative z-10 space-y-12">
        <AboutSection onTriggerSlash={handleTriggerSlash} />
        <CyberSkills />
        <ProjectSection />
        <ExperienceSection />
      </div>
    </>
  );
}
