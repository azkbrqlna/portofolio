"use client";

import { useState, useEffect } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaNodeJs } from "react-icons/fa";
import { RiNextjsFill, RiNodejsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiInertia, SiLaravel, SiReact, SiSocketdotio } from "react-icons/si";
import { Button } from "@/components/ui/button";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import Image from "next/image";
import introTexts from "@/app/data/greetings.json";
import experiences from "@/app/data/experiences.json";
import { BentoCard } from "@/components/ui/bento-grid";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import ScrollReveal from "scrollreveal";

export default function PortfolioPage() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("scrollreveal").then((ScrollReveal) => {
        const sr = ScrollReveal.default();

        sr.reveal(".reveal-bottom", {
          origin: "bottom",
          distance: "20px",
          duration: 1000,
          easing: "ease-in-out",
          reset: true,
        });

        sr.reveal(".reveal-left", {
          origin: "left",
          distance: "20px",
          duration: 1000,
          easing: "ease-in-out",
          reset: true,
        });

        sr.reveal(".reveal-right", {
          origin: "right",
          distance: "20px",
          duration: 1000,
          easing: "ease-in-out",
          reset: true,
        });

        sr.reveal(".reveal-top", {
          origin: "top",
          distance: "20px",
          duration: 1000,
          easing: "ease-in-out",
          reset: true,
        });
      });
    }
  }, []);

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const currentText = introTexts[currentTextIndex];

  const projects = [
    {
      Icons: [
        { Icon: RiNextjsFill, name: "Next.js" },
        { Icon: RiTailwindCssFill, name: "Tailwind CSS" },
      ],
      name: "My Portfolio",
      description: "A simple portfolio website.",
      href: "https://github.com/azkbrqlna/portofolio",
      cta: "Learn More",
      background: (
        <Image
          src="/images/porto.png"
          layout="fill"
          alt="porto"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-2"
        />
      ),
    },
    {
      Icons: [
        { Icon: FaNodeJs, name: "Node.js" },
        { Icon: SiSocketdotio, name: "Whiskey socket" },
      ],
      name: "Template Bot",
      description:
        "Template for building a WhatsApp bot using Whiskey Socket Baileys with NodeJS.",
      href: "https://github.com/azkbrqlna/Template-Bot",
      cta: "Learn More",
      background: (
        <Image
          src="/images/Whatsapp-Bot.jpg"
          layout="fill"
          alt="whatsapp-bot"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-2"
        />
      ),
    },
    {
      Icons: [
        { Icon: SiLaravel, name: "Laravel" },
        { Icon: SiInertia, name: "Inertia.js" },
        { Icon: SiReact, name: "React" },
      ],
      name: "Warehouse Management System",
      description:
        "Final project for graduation requirements at SMK Negeri 7 Semarang. I served as a backend developer.",
      href: "https://github.com/azkbrqlna/WarehouseManagement",
      cta: "Learn More",
      background: (
        <Image
          src="/images/wms.png"
          layout="fill"
          alt="wms"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-2"
        />
      ),
    },
  ];

  return (
    <>
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
                <div className="italic text-yellow-400 mb-2">
                  Azka Bariqlana
                </div>
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
        <div className="flex flex-col items-center mt-8 mb-8 reveal-right">
          <h2 className="text-md font-semibold">Connect with me :</h2>
          <div className="flex justify-center items-center gap-6 mt-8 space-x-1">
            <Link
              href="https://www.linkedin.com/in/azka-bariqlana-06a3482a1/"
              className="w-16 h-16 flex items-center justify-center bg-white dark:bg-neutral-950 border-2 border-black dark:border-white shadow-dark dark:shadow-light transform rotate-2 hover:rotate-0 hover:scale-110 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl text-black dark:text-white hover:scale-125 transition-transform duration-200" />
            </Link>
            <Link
              href="https://github.com/azkbrqlna"
              className="w-16 h-16 flex items-center justify-center bg-white dark:bg-neutral-950 border-2 border-black dark:border-white shadow-dark dark:shadow-light transform -rotate-2 hover:rotate-0 hover:scale-110 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-2xl text-black dark:text-white hover:scale-125 transition-transform duration-200" />
            </Link>
            <Link
              href="https://www.instagram.com/azkbrqlnaaa_/"
              className="w-16 h-16 flex items-center justify-center bg-white dark:bg-neutral-950 border-2 border-black dark:border-white shadow-dark dark:shadow-light transform rotate-1 hover:rotate-0 hover:scale-110 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-2xl text-black dark:text-white hover:scale-125 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="pt-24 container mx-auto px-4 sm:px-6 md:px-20 py-20"
      >
        <h2 className="text-3xl font-bold mb-10 text-center reveal-left">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="reveal-right">
              <BentoCard
                {...project}
                className="relative h-80 overflow-hidden rounded-xl shadow-lg group transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      <section
        id="experience"
        className="pt-24 container mx-auto px-4 sm:px-6 md:px-10 py-20"
      >
        <h2 className="text-3xl font-bold mb-4 text-center reveal-left">
          Experience
        </h2>
        <div className="relative mt-16">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-zinc-500 dark:bg-zinc-700"></div>
          <div className="space-y-16">
            {experiences.map((exp, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`relative w-full flex flex-col md:flex-row ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  } px-4 reveal-bottom`}
                >
                  <div className="w-full md:w-1/2 max-w-xl">
                    <div className="p-6 rounded-lg border-2 border-zinc-900 dark:border-zinc-200 shadow-dark dark:shadow-light">
                      <h3 className="text-xl font-semibold dark:text-white">
                        {exp.title}
                      </h3>
                      <p className="text-zinc-500 dark:text-zinc-400">
                        {exp.company} – {exp.period}
                      </p>
                      <ul className="list-disc pl-5 mt-3 text-zinc-700 dark:text-zinc-200 space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                      {exp.certificate && (
                        <div className="mt-4 flex justify-end">
                          <Button>
                            <Link
                              href={exp.certificate}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Certificate
                            </Link>
                            <ArrowRightIcon className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="w-4 h-4 bg-zinc-900 dark:bg-zinc-100 rounded-full block border-2 border-white dark:border-zinc-900 shadow"></span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
