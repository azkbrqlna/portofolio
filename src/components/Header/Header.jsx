import { FadeText } from "../ui/fade-text";
import GradualSpacing from "../ui/gradual-spacing";

export default function Header({ title, subtitle }) {
  return (
    <header className="text-center mb-8">
      <GradualSpacing
        text={title}
        className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 uppercase"
      />
      <FadeText
        text={
          <p className="mt-2 text-md text-zinc-700 dark:text-zinc-300">
            {subtitle}
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
  );
}