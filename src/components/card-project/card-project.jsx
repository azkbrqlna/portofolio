"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Terminal, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function ProjectCard({ name, description, href, cta, Icons = [], index = 0 }) {
  return (
    <TooltipProvider>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className="bg-[#161622]/90 backdrop-blur-md border border-[#bd93f9]/20 hover:border-[#ff79c6]/60 rounded-2xl p-6 shadow-[0_0_20px_rgba(22,22,34,0.7)] transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_0_30px_rgba(255,121,198,0.2)] relative overflow-hidden"
      >
        {/* Subtle Cyber Corner Bracket */}
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#bd93f9]/40 group-hover:border-[#ff79c6] transition-colors" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#bd93f9]/40 group-hover:border-[#ff79c6] transition-colors" />

        <div>
          {/* Top HUD Row */}
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#bd93f9]/15">
            <div className="flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-[#ff79c6]" />
              <span className="text-[11px] font-mono text-[#bd93f9] tracking-wider">
                PROJ_SYS // #0{index + 1}
              </span>
            </div>

            {/* Tech Icons */}
            {Icons.length > 0 && (
              <div className="flex items-center gap-2">
                {Icons.map(({ Icon, name }, idx) => (
                  <Tooltip key={idx} delayDuration={200}>
                    <TooltipTrigger asChild>
                      <div className="p-1.5 rounded-lg bg-[#1e1e2e] border border-[#bd93f9]/20 hover:border-[#bd93f9] text-[#f8f8f2] transition-transform hover:scale-110">
                        {Icon && <Icon className="h-4 w-4 text-[#8be9fd]" />}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="bg-[#1e1e2e] text-[#f8f8f2] border border-[#bd93f9]/40 font-mono text-xs shadow-lg">
                      {name}
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            )}
          </div>

          {/* Title & Description */}
          <h3 className="text-xl font-bold text-[#f8f8f2] group-hover:text-[#ff79c6] transition-colors mb-2">
            {name}
          </h3>
          <p className="text-xs md:text-sm text-[#f8f8f2]/80 leading-relaxed font-mono mb-6">
            {description}
          </p>
        </div>

        {/* Action Footer */}
        <div className="pt-4 border-t border-[#bd93f9]/10 flex items-center justify-between">
          <span className="text-[10px] font-mono text-[#50fa7b] flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#50fa7b] animate-ping" />
            DEPLOYED
          </span>

          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1e1e2e] border border-[#bd93f9]/40 hover:border-[#ff79c6] text-[#f8f8f2] text-xs font-mono font-bold hover:bg-[#ff79c6] hover:text-[#1e1e2e] transition-all shadow-sm"
          >
            <span>{cta || "EXPLORE"}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>
    </TooltipProvider>
  );
}
