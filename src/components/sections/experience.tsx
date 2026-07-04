"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { experiences } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="relative py-16 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          label="Experience"
          title="Professional Journey"
          description="Internship and professional training experience"
        />

        <div className="relative">
          {/* Vertical Timeline Line - Optimized position for mobile */}
          <motion.div
            className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 via-fuchsia-500 to-transparent sm:left-8"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            style={{ originY: 0 }}
          />

          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.role}-${exp.company}`}
                className="relative pl-10 sm:pl-20"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                {/* Timeline Icon Badge - Kept centered on the line for mobile */}
                <div className="absolute left-1.5 top-1.5 flex h-5 w-5 sm:h-7 sm:w-7 items-center justify-center rounded-full border-2 border-violet-500 bg-[#050508] sm:left-5 sm:top-0">
                  <Briefcase className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 text-violet-400" />
                </div>

                {/* Experience Card Wrap */}
                <motion.div
                  className="rounded-xl border border-white/10 bg-white/5 p-4 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/10"
                  whileHover={{ x: 4 }}
                >
                  <div className="flex flex-col justify-between gap-2.5 sm:flex-row sm:items-start">
                    <div>
                      <div className="flex flex-wrap items-center gap-1.5">
                        <h3 className="text-base font-bold text-white sm:text-xl tracking-tight">
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 text-[10px] font-medium text-emerald-400">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="mt-0.5 text-xs sm:text-base font-medium text-violet-300">{exp.company}</p>
                      {exp.companyTagline && (
                        <p className="text-[11px] sm:text-sm text-white/40 font-normal mt-0.5">{exp.companyTagline}</p>
                      )}
                    </div>
                    
                    {/* Period and Duration Container */}
                    <div className="flex shrink-0 flex-wrap items-center gap-2 sm:flex-col sm:items-end sm:gap-1.5">
                      <span className="rounded-full border border-violet-500/20 bg-violet-500/5 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-medium text-violet-300">
                        {exp.period}
                      </span>
                      {exp.duration && (
                        <span className="text-[10px] sm:text-xs text-white/40 font-light">{exp.duration}</span>
                      )}
                    </div>
                  </div>

                  <p className="mt-3 text-xs sm:text-base text-white/60 leading-relaxed font-normal">{exp.description}</p>
                  
                  {/* Tech Badges Container */}
                  <div className="mt-3.5 flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-white/5 border border-white/5 px-2 py-0.5 text-[10px] sm:text-xs text-white/40 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
