import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";

const inter_init = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains_mono_init = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const playfair_display_init = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700"],
  display: "swap",
});

export const inter = inter_init.variable;
export const jetbrainsMono = jetbrains_mono_init.variable;
export const playfairDisplay = playfair_display_init.variable;
