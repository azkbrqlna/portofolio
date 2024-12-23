"use client";

import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { FadeText } from "@/components/ui/fade-text";
import DockItems from "@/components/Dock/Dock";

export default function HomePage() {
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
      <div className="flex flex-col mt-10 md:flex-row justify-center">
        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8 text-center md:text-left px-8">
          <div className="flex-1 max-w-lg">
            <div className="text-4xl font-bold font-cera ">
              <FadeText
                text={
                  <>
                    Hey there! I'm{" "}
                    <span className="italic text-yellow-400">
                      Azka Bariqlana
                    </span>
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
              text={
                <p className="text-lg mb-6">
                  I'm a web developer focused on building modern,
                  high-performance websites. My goal is to blend creativity with
                  technical skills to create user-friendly and visually
                  appealing web applications.
                </p>
              }
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
                <img
                  src="/images/copy.jpg"
                  alt="Azka Bariqlana"
                  className="w-48 h-48 rounded-full shadow-lg object-cover"
                />
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
          <div className="flex flex-col items-center mt-10  ">
            <h2 className="text-md font-semibold">Connect with me:</h2>
            <div className="flex space-x-1 text-xl">
              <DockItems href="https://www.linkedin.com/in/azka-bariqlana-06a3482a1/">
                <FaLinkedin />
              </DockItems>
              <DockItems href="https://github.com/azkbrqlna">
                <FaGithub />
              </DockItems>
              <DockItems href="https://www.instagram.com/azkbrqlnaaa_/">
                <FaInstagram />
              </DockItems>
            </div>
          </div>
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
