"use client";

import Image from "next/image";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function AboutSection() {
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
              Welcome! I am
              <div className="italic text-yellow-400 mb-2">Azka Bariqlana</div>
            </div>
            <p className="text-lg mb-6 reveal-left">
              I am currently interested in web development and also have a
              curiosity about cybersecurity
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

      {/* Social Media */}
      <div className="flex flex-col items-center mt-24 mb-8 reveal-right">
        <h2 className="text-md font-semibold">Connect with me :</h2>
        <div className="flex justify-center items-center gap-8 mt-8">
          {[
            {
              href: "https://www.linkedin.com/in/azka-bariqlana-06a3482a1/",
              icon: FaLinkedin,
            },
            {
              href: "https://github.com/azkbrqlna",
              icon: FaGithub,
            },
            {
              href: "https://www.instagram.com/azkbrqlnaaa_/",
              icon: FaInstagram,
            },
            {
              href: "mailto:azkbrqlna@gmail.com",
              icon: SiGmail,
            },
          ].map(({ href, icon: Icon }, i) => (
            <Link
              key={i}
              href={href}
              className={`transition-all duration-300 transform hover:scale-125`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className={`text-2xl text-black dark:text-white`} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
