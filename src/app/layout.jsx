"use client";

import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { inter, ceraRoundPro } from "@/utils/fonts";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter} ${ceraRoundPro} bg-[#0d0d15] text-[#f8f8f2] flex flex-col min-h-screen font-sans antialiased selection:bg-[#ffd700] selection:text-[#111116]`}
      >
        <Navbar />
        <main className="flex-1 flex flex-col min-h-0 overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
