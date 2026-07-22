"use client";

import React from "react";
import CyberMatrixBackground from "@/components/ui/CyberMatrixBackground";
import Projects from "@/app/portofolio/Project";

export default function ProjectsPage() {
  return (
    <div className="relative pt-24 min-h-screen">
      <CyberMatrixBackground />
      <div className="relative z-10">
        <Projects />
      </div>
    </div>
  );
}
