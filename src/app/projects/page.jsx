import Header from "@/components/Header/Header";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { FadeText } from "@/components/ui/fade-text";
import Image from "next/image";
import { FaNodeJs } from "react-icons/fa";
import { RiNextjsFill, RiNodejsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiInertia, SiLaravel, SiReact, SiSocketdotio } from "react-icons/si";

const cardClass = {
  bg: "absolute inset-0 h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-2",
};

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
        className={cardClass.bg}
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
        className={cardClass.bg}
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
        className={cardClass.bg}
      />
    ),
  },
];

export default function ProjectsPage() {
  return (
    <div className="pt-24 container mx-auto py-20 ">
      <Header title="Projects" subtitle="A collection of my projects" />

      <FadeText
        text={
          <BentoGrid className="flex flex-wrap gap-6 justify-center items-stretch">
            {projects.map((project, idx) => (
              <BentoCard
                key={idx}
                {...project}
                className="relative w-full max-w-sm h-80 overflow-hidden rounded-lg shadow-lg group"
              />
            ))}
          </BentoGrid>
        }
        direction="up"
        framerProps={{
          show: {
            transition: {
              delay: 1,
              duration: 1,
            },
          },
        }}
      />
    </div>
  );
}
