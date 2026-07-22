"use client";

import React from "react";
import CyberMatrixBackground from "@/components/ui/CyberMatrixBackground";
import ExperienceSection from "@/app/portofolio/Experience";

export default function ExperiencePage() {
  return (
    <div className="relative pt-24 min-h-screen">
      <CyberMatrixBackground />
      <div className="relative z-10">
        <ExperienceSection />
      </div>
    </div>
  );
}
