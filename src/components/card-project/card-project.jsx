"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Terminal, FolderGit2 } from "lucide-react";
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
        className="bg-[#161622]/90 backdrop-blur-md border border-white/15 hover:border-[#ffd700] rounded-xl p-6 shadow-xl transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_0_30px_rgba(255,215,0,0.25)] relative overflow-hidden select-none"
      >
        {/* Gold Cyber Corner Brackets */}
        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white/20 group-hover:border-[#ffd700] transition-colors" />
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-white/20 group-hover:border-[#ffd700] transition-colors" />

        <div>
          {/* Top HUD Row */}
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10 font-mono">
            <div className="flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-[#ffd700]" />
              <span className="text-[11px] text-[#ffd700] font-bold tracking-wider">
                PROJ_ID // #0{index + 1}
              </span>
              <span className="text-[10px] text-white/40">[作品 #0{index + 1}]</span>
            </div>

            {/* Tech Icons */}
            {Icons.length > 0 && (
              <div className="flex items-center gap-2">
                {Icons.map(({ Icon, name }, idx) => (
                  <Tooltip key={idx} delayDuration={200}>
                    <TooltipTrigger asChild>
                      <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-[#ffd700] text-white transition-transform hover:scale-110">
                        {Icon && <Icon className="h-4 w-4 text-[#ffd700]" />}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="bg-[#181824] text-[#ffd700] border border-[#ffd700]/40 font-mono text-xs shadow-lg">
                      {name}
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            )}
          </div>

          {/* Title & Description */}
          <h3 className="text-xl font-bold text-white group-hover:text-[#ffd700] transition-colors mb-2 tracking-wide font-sans">
            {name}
          </h3>
          <p className="text-xs md:text-sm text-white/80 leading-relaxed font-mono mb-6">
            {description}
          </p>
        </div>

        {/* Action Footer */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono">
          <span className="text-[10px] text-[#50fa7b] flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#50fa7b] animate-ping" />
            LIVE // DEPLOYED
          </span>

          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#ffd700]/10 border border-[#ffd700]/40 hover:bg-[#ffd700] hover:text-[#111116] text-[#ffd700] text-xs font-bold transition-all shadow-sm tracking-wider"
          >
            <span>{cta || "EXPLORE"}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>
    </TooltipProvider>
  );
}
