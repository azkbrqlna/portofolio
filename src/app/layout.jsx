"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import SwordSlashLoader from "@/components/ui/SwordSlashLoader";
import { inter, ceraRoundPro } from "@/utils/fonts";
import "./globals.css";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [slashTrigger, setSlashTrigger] = useState(0);

  const isHome = pathname === "/";

  const handleTriggerSlash = () => {
    setSlashTrigger((prev) => prev + 1);
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter} ${ceraRoundPro} bg-[#0d0d15] text-[#f8f8f2] flex flex-col font-sans antialiased selection:bg-[#ffd700] selection:text-[#111116] ${
          isHome
            ? "min-h-screen lg:h-screen lg:max-h-screen lg:overflow-hidden"
            : "min-h-screen"
        }`}
      >
        {/* Katana Sword Slash Opening Loader (Triggers on initial page load/refresh across ALL pages) */}
        <SwordSlashLoader forceTrigger={slashTrigger} />

        <Navbar />
        <main className="flex-1 flex flex-col min-h-0 overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
