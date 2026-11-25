"use client";

import React, { useState } from "react";
import LoadingScreen from "@/components/ui/LoadingScreen";
import SmoothScroll from "@/components/ui/SmoothScroll";

export default function ClientLayout({ children }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <SmoothScroll />
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      <div className="relative z-0 min-h-screen">
        {children}
      </div>
    </>
  );
}
