"use client";

import React from "react";
import experiences from "@/app/data/experiences.json";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Briefcase, Calendar, Award, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 relative">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff79c6]/10 border border-[#ff79c6]/30 text-[#ff79c6] text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER TIMELINE</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#f8f8f2] tracking-wider">
            WORK EXPERIENCE
          </h2>
          <p className="text-sm text-[#6272a4] max-w-[600px] mt-2 font-mono">
            Professional journey across Network Engineering & Frontend Development.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-[#bd93f9]/30 ml-4 md:ml-32 space-y-12 pl-6 md:pl-10">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Glowing Timeline Node */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#161622] border-2 border-[#ff79c6] shadow-[0_0_15px_#ff79c6] flex items-center justify-center group-hover:scale-125 transition-transform">
                <div className="w-2 h-2 rounded-full bg-[#bd93f9]" />
              </div>

              {/* Date Badge on Desktop Left */}
              <div className="hidden md:block absolute -left-36 top-1 text-xs font-mono text-[#8be9fd] font-bold text-right w-24">
                {exp.period}
              </div>

              {/* Experience Card */}
              <div className="bg-[#161622]/80 backdrop-blur-md border border-[#bd93f9]/20 hover:border-[#bd93f9]/50 rounded-2xl p-6 shadow-[0_0_25px_rgba(22,22,34,0.6)] transition-all">
                {/* Mobile Date */}
                <div className="md:hidden flex items-center gap-2 text-xs font-mono text-[#8be9fd] mb-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.period}</span>
                </div>

                {/* Company & Role */}
                <h3 className="text-xl font-bold text-[#f8f8f2] flex flex-wrap items-center gap-2">
                  <span>{exp.company}</span>
                  <span className="text-sm font-mono text-[#ff79c6] bg-[#1e1e2e] px-3 py-0.5 rounded-full border border-[#ff79c6]/30">
                    as {exp.title}
                  </span>
                </h3>

                {/* Description Bullets */}
                <ul className="mt-4 space-y-2 font-mono text-xs md:text-sm text-[#f8f8f2]/80">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#50fa7b] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills Badges */}
                {exp.skills && exp.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-[#bd93f9]/15">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-mono rounded-lg bg-[#1e1e2e] text-[#bd93f9] border border-[#bd93f9]/30"
                      >
                        #{skill}
                      </span>
                    ))}
                  </div>
                )}

                {/* Certificate Modal Trigger */}
                {exp.certificate && (
                  <div className="mt-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#8be9fd] bg-[#1e1e2e] hover:bg-[#8be9fd] hover:text-[#1e1e2e] border border-[#8be9fd]/40 px-4 py-2 rounded-xl transition-all shadow-sm">
                          <Award className="w-4 h-4" />
                          <span>VIEW CERTIFICATE</span>
                          <FaExternalLinkAlt className="w-3 h-3 ml-1" />
                        </button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-3xl border-[#bd93f9]/40 bg-[#161622] text-[#f8f8f2]">
                        <DialogHeader>
                          <DialogTitle className="text-left font-mono text-lg text-[#bd93f9]">
                            CERTIFICATE // {exp.company}
                          </DialogTitle>
                        </DialogHeader>
                        <div className="flex items-center justify-center mt-4 w-full h-full p-2 bg-[#0d0d15] rounded-xl border border-[#bd93f9]/20">
                          <img
                            src={exp.certificate}
                            alt={`Certificate for ${exp.title} at ${exp.company}`}
                            className="w-full h-auto max-h-[75vh] object-contain rounded-lg"
                            loading="lazy"
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
