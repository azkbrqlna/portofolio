"use client";

import { useState, useEffect } from "react";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { FadeText } from "@/components/ui/fade-text";
import Image from "next/image";
import introTexts from "./data/greetings.json";
import Link from "next/link";

export default function AboutPage() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    setCurrentTextIndex(Math.floor(Math.random() * introTexts.length));
  }, []);

  const currentText = introTexts[currentTextIndex];

  return (
    <div className="relative overflow-hidden ">
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
            <div className="text-3xl font-bold font-cera ">
              <FadeText
                text={
                  <>
                    {currentText.greeting}
                    <div className="italic text-yellow-400 mb-2">
                      Azka Bariqlana
                    </div>
                  </>
                }
                direction="up"
                framerProps={{
                  show: {
                    transition: {
                      duration: 0.8,
                    },
                  },
                }}
              />
            </div>

            <FadeText
              text={<p className="text-lg mb-6">{currentText.description}</p>}
              direction="right"
              framerProps={{
                show: {
                  transition: {
                    delay: 0.5,
                    duration: 0.8,
                  },
                },
              }}
            />
          </div>

          <div className="flex-1 flex justify-center">
            <FadeText
              text={
                <div className="w-48 h-48 rounded-full overflow-hidden  ">
                  <Image
                    src="/images/copy.jpg"
                    alt="Azka Bariqlana"
                    width={192}
                    height={192}
                  />
                </div>
              }
              framerProps={{
                show: {
                  transition: {
                    delay: 1,
                    duration: 0.8,
                  },
                },
              }}
              direction="left"
            />
          </div>
        </div>
      </div>

      <FadeText
        text={
          <>
            <div className="flex flex-col items-center mt-8 mb-8 ">
              <h2 className="text-md font-semibold">Connect with me :</h2>
              <div className="flex justify-center items-center gap-6 mt-8 space-x-1">
                {/* LinkedIn */}
                <Link
                  href="https://www.linkedin.com/in/azka-bariqlana-06a3482a1/"
                  className="w-16 h-16 flex items-center justify-center bg-white dark:bg-neutral-950 border-2 border-black dark:border-white shadow-dark dark:shadow-light
               transform rotate-2 hover:rotate-0 hover:scale-110 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-2xl text-black dark:text-white hover:scale-125 transition-transform duration-200" />
                </Link>

                {/* GitHub */}
                <Link
                  href="https://github.com/azkbrqlna"
                  className="w-16 h-16 flex items-center justify-center bg-white dark:bg-neutral-950 border-2 border-black dark:border-white shadow-dark dark:shadow-light
               transform -rotate-2 hover:rotate-0 hover:scale-110 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-2xl text-black dark:text-white hover:scale-125 transition-transform duration-200" />
                </Link>

                {/* Instagram */}
                <Link
                  href="https://www.instagram.com/azkbrqlnaaa_/"
                  className="w-16 h-16 flex items-center justify-center bg-white dark:bg-neutral-950 border-2 border-black dark:border-white shadow-dark dark:shadow-light
               transform rotate-1 hover:rotate-0 hover:scale-110 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-2xl text-black dark:text-white hover:scale-125 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          </>
        }
        direction="down"
        framerProps={{
          show: {
            transition: {
              delay: 1.5,
              duration: 0.8,
            },
          },
        }}
      />
    </div>
  );
}
