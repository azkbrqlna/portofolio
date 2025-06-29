import experiences from "@/app/data/experiences.json";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export default function ExperienceSection() {
  return (
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
                    <h3 className="text-lg font-semibold dark:text-white">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      {exp.company} – {exp.period}
                    </p>
                    <ul className="list-disc pl-5 mt-3 text-zinc-700 dark:text-zinc-200 space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm">
                          {item}
                        </li>
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
  );
}
