import Header from "@/components/Header/Header";
import experiences from "@/app/data/experiences.json";
import BlurFade from "@/components/ui/blur-fade";

export default function ExperiencePage() {
  return (
    <div className="pt-24 container mx-auto py-20">
      <Header title="Experience" subtitle="A journey of learning and growth" />
      <section className="mt-10 space-y-12">
        {experiences.map((exp, idx) => (
          <BlurFade key={idx} delay={0.5} direction="up" inView>
            <div className="bg-zinc-100 dark:bg-neutral-900 p-6 rounded-lg border-2 border-zinc-900 dark:border-zinc-200 shadow-dark dark:shadow-light">
              <h3 className="text-xl font-semibold dark:text-white">
                {exp.title}
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                {exp.company} - {exp.period}
              </p>
              <ul className="list-disc pl-6 mt-3 text-zinc-700 dark:text-zinc-200">
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </BlurFade>
        ))}
      </section>
    </div>
  );
}
