import React from "react";
import MinimalNav from "@/components/ui/MinimalNav";
import SocialSidebar from "@/components/ui/SocialSidebar";
import EmailSidebar from "@/components/ui/EmailSidebar";
import CyberMatrixBackground from "@/components/ui/CyberMatrixBackground";
import ClientLayout from "@/components/ui/ClientLayout";
import { inter } from "@/utils/fonts";
import "./globals.css";

export const metadata = {
  title: "Azka Bariqlana | Full-Stack Developer",
  description:
    "Portfolio of Azka Bariqlana (azkbrqlna) — Full-Stack Developer & Security Enthusiast based in Semarang, Indonesia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter} bg-[#0c0d12] text-[#e8e8f0] min-h-screen antialiased selection:bg-[#d4a853] selection:text-[#0c0d12]`}
      >
        <ClientLayout>
          <CyberMatrixBackground />
          <MinimalNav />
          <SocialSidebar />
          <EmailSidebar />
          <main className="relative z-10">{children}</main>
        </ClientLayout>
      </body>
    </html>
  );
}
