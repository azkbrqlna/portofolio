import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { FadeText } from "@/components/ui/fade-text";
import GradualSpacing from "@/components/ui/gradual-spacing";
import Image from "next/image";
import { RiNextjsFill, RiNodejsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiInertia, SiLaravel, SiReact, SiSocketdotio } from "react-icons/si";

const cardClass = {
  bg: "absolute inset-0 h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-2",
};

const projects = [
  {
    Icons: [RiNextjsFill, RiTailwindCssFill],
    name: "My Portfolio",
    description: "A simple portfolio website",
    href: "",
    cta: "View Project",
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
    Icons: [SiSocketdotio, RiNodejsFill],
    name: "Template Bot",
    description:
      "template for building a WhatsApp bot using Whiskey Socket Baileys with Node.js",
    href: "#",
    cta: "View Project",
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
    Icons: [SiLaravel, SiInertia, SiReact],
    name: "Warehouse Management System",
    description:
      "Final project for graduation requirements at SMK Negeri 7 Semarang. I served as a backend developer.",
    href: "#",
    cta: "View Project",
    background: (
      <Image
        src="/images/wms.png"
        layout="fill"
        alt="WMS"
        className={cardClass.bg}
      />
    ),
  },
];

export default function ProjectsPage() {
  return (
    <div className="pt-24 container mx-auto py-20 ">
      <header className="text-center mb-8">
        <GradualSpacing
          text="My Projects"
          className="text-3xl font-bold text-zinc-900 dark:text-zinc-100"
        />
        <FadeText
          text={
            <p className="mt-2 text-lg text-zinc-700 dark:text-zinc-300">
              A collection of some projects I made
            </p>
          }
          direction="down"
          framerProps={{
            show: {
              transition: {
                delay: 0.5,
                duration: 0.8,
              },
            },
          }}
        />
      </header>

      <FadeText
        text={
          <BentoGrid className="flex flex-wrap gap-6 justify-center items-stretch">
            {projects.map((project, idx) => (
              <BentoCard
                key={idx}
                {...project}
                className="relative w-full max-w-sm  h-80 overflow-hidden rounded-lg shadow-lg group "
              >
                <div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <a href={project.href}>{project.cta}</a>
                  {project.background}
                </div>
              </BentoCard>
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
