import Image from "next/image";
import { BentoCard } from "@/components/ui/bento-grid";
import { FaNodeJs } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiInertia, SiLaravel, SiReact, SiSocketdotio } from "react-icons/si";

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

export default function ProjectSection() {
  return (
    <section id="projects" className="relative overflow-visible pt-24 pb-24">
      <div className="flex flex-col justify-center">
        <div className="relative z-10 px-8 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center reveal-left">
            Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 overflow-visible">
            {projects.map((project, idx) => (
              <div key={idx} className="reveal-right">
                <BentoCard
                  {...project}
                  className="relative h-80 overflow-hidden rounded-xl shadow-lg group transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
