"use client";

import React, { useState } from "react";
import LoadingScreen from "@/components/ui/LoadingScreen";

export default function ClientLayout({ children }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      <div className="relative z-0 min-h-screen">
        {children}
      </div>
    </>
  );
}
