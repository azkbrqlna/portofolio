import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

const cardClass = {
  bg: "absolute inset-0 h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105",
};
const projects = [
  {
    Icon: FaGithub,
    name: "Project 1",
    description: "Description for project 1",
    href: "#",
    cta: "View Project",
    background: (
      <img src="/images/copy.jpg" alt="Project 1" className={cardClass.bg} />
    ),
  },
  {
    Icon: FaGithub,
    name: "Project 2",
    description: "Description for project 2",
    href: "#",
    cta: "View Project",
    background: (
      <img src="/images/copy.jpg" alt="Project 2" className={cardClass.bg} />
    ),
  },
  {
    Icon: FaInstagram,
    name: "Project 3",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
          exercitationem iste sint id omnis ipsa. Aut maxime officiis temporibus
          consectetur ab suscipit, dicta perspiciatis nulla possimus. Cumque
          suscipit error velit.`,
    href: "https://www.google.com",
    cta: "View Project",
    background: (
      <img src="/images/copy.jpg" alt="Project 3" className={cardClass.bg} />
    ),
  },
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-5">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-zinc-900">My Projects</h1>
        <p className="mt-2 text-lg text-zinc-700">
          A collection of some projects I made
        </p>
      </header>

      {/* Projects Grid */}
      <BentoGrid className="flex flex-wrap gap-6 justify-center m-5 items-stretch">
        {projects.map((project, idx) => (
          <BentoCard
            key={idx}
            {...project}
            className="relative w-full max-w-xs h-64 overflow-hidden rounded-lg shadow-lg  group"
          >
            <project.Icon />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.href}>{project.cta}</a>
            {project.background}
          </BentoCard>
        ))}
      </BentoGrid>
    </div>
  );
}
