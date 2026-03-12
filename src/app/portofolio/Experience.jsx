import experiences from "@/app/data/experiences.json" assert { type: "json" };
import SectionHeader from "@/components/fragments/header";
import Section from "@/components/fragments/section";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";


export default function ExperienceSection() {
  return (
    <Section id="experience">
      <SectionHeader title="Experience"/>

      <div className="space-y-12">
        {experiences.map((exp, idx) => (
          <div key={idx} className="reveal-bottom">
            {/* Header */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:items-center md:justify-between gap-2">
              <h3 className="text-xl font-semibold dark:text-white">
                {exp.company}
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  as {exp.title}
                </p>
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 md:text-right">
                {exp.period}
              </p>
            </div>

            {/* Descriptions */}
            <ul className="list-disc pl-5 mt-3 text-zinc-700 dark:text-zinc-200 space-y-2">
              {exp.description.map((item, i) => (
                <li key={i} className="text-sm leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>

            {/* Skills */}
            {exp.skills && exp.skills.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-200 text-zinc-800 dark:bg-zinc-700 dark:text-zinc-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}

            {/* Certificate */}
            {exp.certificate && (
              <div className="mt-3">
                <Link
                  href={exp.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold underline"
                >
                  Certificate
                  <FaExternalLinkAlt className="ml-1 w-3 h-3" />
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
