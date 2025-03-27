import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
  Icons = [],
  description,
  href,
  cta,
}) => (
  <TooltipProvider>
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
        {Icons.length > 0 && (
          <div className="flex gap-2">
            {Icons.map(({ Icon, name }, idx) => (
              <Tooltip key={idx} delayDuration={200}>
                <TooltipTrigger asChild>
                  <div>
                    <Icon className="h-9 w-9 origin-left transform-gpu text-neutral-900 dark:text-white transition-all duration-300 ease-in-out group-hover:scale-[0.85] hover:scale-110" />
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  className="bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 rounded-md px-2 py-1 text-xs shadow-lg font-cera"
                >
                  {name}
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        )}
        <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 ">
          {name}
        </h3>
        <p
          className={cn(
            "max-w-lg text-neutral-800 dark:text-neutral-300 text-sm",
            description && description.length > 100
              ? "line-clamp-2 group-hover:line-clamp-none"
              : ""
          )}
        >
          {description}
        </p>
      </div>

      {/* Button Section */}
      <div
        className={cn(
          "absolute bottom-0 z-30 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        )}
      >
        <Link href={href} passHref target="_blank" rel="noopener noreferrer">
          <Button variant="default" size="sm" className="w-full font-cera ">
            {cta}
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>

      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
    </div>
  </TooltipProvider>
);

export { BentoCard, BentoGrid };
