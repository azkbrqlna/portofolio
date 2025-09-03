"use client";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export function ProjectCard({ name, description, href, cta, Icons = [] }) {
  return (
    <TooltipProvider>
      <Card className="flex flex-col justify-between">
        {/* Bagian Icon */}
        {Icons.length > 0 && (
          <div className="flex gap-2 px-6 pt-6">
            {Icons.map(({ Icon, name }, idx) => (
              <Tooltip key={idx} delayDuration={200}>
                <TooltipTrigger asChild>
                  <div className="cursor-pointer">
                    <Icon className="h-7 w-7 text-neutral-800 dark:text-neutral-200 transition-transform duration-200 hover:scale-110" />
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

        {/* Header + Button sejajar */}
        <CardHeader className="flex flex-row items-center justify-between gap-4">
          <div>
            <CardTitle className="text-lg font-semibold">{name}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>

          <Link href={href} passHref target="_blank" rel="noopener noreferrer">
            <Button variant="default" size="sm" className="font-cera">
              {cta}
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </CardHeader>
      </Card>
    </TooltipProvider>
  );
}
