"use client";

import React, { useState } from "react";
import LoadingScreen from "@/components/ui/LoadingScreen";

export default function ClientLayout({ children }) {
  const [loaded, setLoaded] = useState(false);
  const [show, setShow] = useState(false);

  const handleComplete = () => {
    setLoaded(true);
    // Short delay so loading screen fade-out finishes before content appears
    setTimeout(() => setShow(true), 300);
  };

  return (
    <>
      {!loaded && <LoadingScreen onComplete={handleComplete} />}
      {show && (
        <div
          style={{
            animation: "fadeInContent 0.5s ease both",
          }}
        >
          {children}
        </div>
      )}
    </>
  );
}
