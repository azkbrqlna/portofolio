"use client";

import React from "react";
import CyberMatrixBackground from "@/components/ui/CyberMatrixBackground";
import AboutSection from "@/app/portofolio/About";
import CyberSkills from "@/components/fragments/CyberSkills";

export default function AboutPage() {
  return (
    <div className="relative pt-24 min-h-screen">
      <CyberMatrixBackground />
      <div className="relative z-10 space-y-12">
        <AboutSection />
        <CyberSkills />
      </div>
    </div>
  );
}
