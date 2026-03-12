import experiences from "@/app/data/experiences.json" assert { type: "json" };
import SectionHeader from "@/components/fragments/header";
import Section from "@/components/fragments/section";
import { FaExternalLinkAlt } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ExperienceSection() {
  return (
    <Section id="experience">
      <SectionHeader title="Experience" />

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

            {/* Certificate Modal */}
            {exp.certificate && (
              <div className="mt-3">
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="inline-flex items-center text-sm font-semibold underline text-zinc-900 dark:text-zinc-100 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                      Certificate
                      <FaExternalLinkAlt className="ml-1 w-3 h-3" />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-3xl border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-950">
                    <DialogHeader>
                      <DialogTitle className="text-left font-cera text-xl">
                        Certificate - {exp.company}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="flex items-center justify-center mt-4 w-full h-full">
                      {/* Menggunakan tag img standar agar tidak terpengaruh konfigurasi next/image domains */}
                      <img
                        src={exp.certificate}
                        alt={`Certificate for ${exp.title} at ${exp.company}`}
                        className="w-full h-auto max-h-[75vh] object-contain rounded-md"
                        loading="lazy"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
