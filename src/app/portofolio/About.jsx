"use client";

import Image from "next/image";
import { useState } from "react";
import introTexts from "@/app/data/greetings.json";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";

export default function AboutSection() {
  const [currentTextIndex] = useState(0);
  const currentText = introTexts[currentTextIndex];

  return (
    <section id="about" className="relative overflow-hidden">
      <AnimatedGridPattern
        numSquares={15}
        maxOpacity={0.5}
        duration={2}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(550px_circle_at_center,white,transparent)]",
          "absolute inset-0 h-full w-full skew-y-12"
        )}
      />
      <div className="pt-24 flex flex-col mt-10 md:flex-row justify-center">
        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8 text-center md:text-left px-8">
          <div className="flex-1 max-w-lg">
            <div className="text-3xl font-bold font-cera reveal-right">
              {currentText.greeting}
              <div className="italic text-yellow-400 mb-2">Azka Bariqlana</div>
            </div>
            <p className="text-lg mb-6 reveal-left">
              {currentText.description}
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-48 h-48 rounded-full overflow-hidden reveal-top">
              <Image
                src="/images/copy.jpg"
                alt="Azka Bariqlana"
                width={192}
                height={192}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
