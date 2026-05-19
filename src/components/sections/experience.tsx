"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { experiences } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Experience"
          title="Professional Journey"
          description="Internship and professional training experience"
        />

        <div className="relative">
          <motion.div
            className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 via-fuchsia-500 to-transparent sm:left-8"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            style={{ originY: 0 }}
          />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.role}-${exp.company}`}
                className="relative pl-16 sm:pl-20"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <div className="absolute left-3 flex h-7 w-7 items-center justify-center rounded-full border-2 border-violet-500 bg-[#050508] sm:left-5">
                  <Briefcase size={14} className="text-violet-400" />
                </div>

                <motion.div
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/10 sm:p-8"
                  whileHover={{ x: 4 }}
                >
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg font-bold text-white sm:text-xl">
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs font-medium text-emerald-300">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="mt-1 font-medium text-violet-300">{exp.company}</p>
                      {exp.companyTagline && (
                        <p className="text-sm text-white/40">{exp.companyTagline}</p>
                      )}
                    </div>
                    <div className="flex shrink-0 flex-col items-start gap-1 sm:items-end">
                      <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300">
                        {exp.period}
                      </span>
                      {exp.duration && (
                        <span className="text-xs text-white/40">{exp.duration}</span>
                      )}
                    </div>
                  </div>
                  <p className="mt-4 text-white/60 leading-relaxed">{exp.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg bg-white/5 px-2.5 py-1 text-xs text-white/50"
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
