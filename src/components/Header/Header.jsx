import { FadeText } from "../ui/fade-text";
import GradualSpacing from "../ui/gradual-spacing";

export default function Header({ title, subtitle }) {
  return (
    <header className="text-center mb-8">
      <GradualSpacing
        text={title}
        className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 uppercase"
      />
      <FadeText
        text={
          <p className="mt-2 text-md text-neutral-700 dark:text-neutral-300">
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
