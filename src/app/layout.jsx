// import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar/Navbar";

import { inter, ceraRoundPro } from "@/utils/fonts";
import "./globals.css";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: {
    template: "%s | Azkbrqlna",
    default: "Azkbrqlna",
  },
  description: "Generated by create next app",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter} ${ceraRoundPro}`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}