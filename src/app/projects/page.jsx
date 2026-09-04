"use client";

import React from "react";
import CyberMatrixBackground from "@/components/ui/CyberMatrixBackground";
import Projects from "@/app/portofolio/Project";

export default function ProjectsPage() {
  return (
    <div className="pt-20 sm:pt-24 md:pt-28 pb-16 min-h-screen font-sans select-none relative">
      <CyberMatrixBackground />
      <div className="relative z-10 max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
        <Projects />
      </div>
    </div>
  );
}
