import "./globals.css";
import Preloader from "@/components/cyber/Preloader";

export const metadata = {
  title: "AZKA BARIQLANA",
  description: "Cybersecurity Researcher & Full-Stack Developer Portfolio",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#151515] text-[#E0E0E0] font-sans antialiased selection:bg-[#333] selection:text-white overflow-x-hidden">
        <Preloader />
        <main className="min-h-screen relative w-full flex justify-center">
          {children}
        </main>
      </body>
    </html>
  );
}
