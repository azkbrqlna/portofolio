import { ProjectCard } from "@/components/card-project/card-project";
import SectionHeader from "@/components/fragments/header";
import Section from "@/components/fragments/section";
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
  },
];

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeader title="Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </Section>
  );
}
