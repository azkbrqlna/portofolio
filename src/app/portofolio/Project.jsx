import { ProjectCard } from "@/components/card-project/card-project";
import SectionHeader from "@/components/fragments/header";
import Section from "@/components/fragments/section";
import projectsData from "@/app/data/projects.json" assert { type: "json" };
import { FaNodeJs } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiSocketdotio } from "react-icons/si";

const iconMap = {
  FaNodeJs,
  RiNextjsFill,
  RiTailwindCssFill,
  SiSocketdotio,
};

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeader title="Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((p, i) => (
          <ProjectCard
            key={i}
            {...p}
            Icons={p.icons.map((ic) => ({
              ...ic,
              Icon: iconMap[ic.icon],
            }))}
          />
        ))}
      </div>
    </Section>
  );
}
