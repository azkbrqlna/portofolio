import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button"; // Importing the new Button component
import Link from "next/link";

// Truncate description if it exceeds 100 characters
function truncateDescription(description) {
  if (description && description.length > 100) {
    return description.substring(0, 100) + "..."; // Add ellipsis if longer than 100 characters
  }
  return description; // Otherwise, return the original description
}

const BentoGrid = ({ children, className }) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icons = [], // Icons is now an array
  description,
  href,
  cta,
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      // light styles
      "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className
    )}
  >
    <div>{background}</div>

    <div
      className="absolute inset-0 z-10 bg-gradient-to-t 
  from-white/60 to-transparent 
  dark:from-black dark:to-transparent 
  "
    ></div>

    <div className="z-20 flex flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
      {/* Render multiple icons */}
      {Icons.length > 0 && (
        <div className="flex gap-2">
          {Icons.map((Icon, idx) => (
            <Icon
              key={idx}
              className="h-9 w-9 origin-left transform-gpu text-black dark:text-white transition-all duration-300 ease-in-out group-hover:scale-[0.85]"
            />
          ))}
        </div>
      )}
      <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
        {name}
      </h3>
      <p className="max-w-lg text-neutral-800 dark:text-neutral-300">
        {truncateDescription(description)}
      </p>
    </div>

    {/* Button Section */}
    <div
      className={cn(
        "absolute bottom-0 z-30 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
      )}
    >
      <Link href={href} passHref target="_blank" rel="noopener noreferrer">
        <Button
          variant="default"
          size="sm"
          className="w-full font-cera dark:hover:bg-white dark:hover:text-black  hover:bg-black hover:text-white"
        >
          {cta}
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Button>
      </Link>
    </div>

    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);

export { BentoCard, BentoGrid };
