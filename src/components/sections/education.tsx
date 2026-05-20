"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { certificates, education } from "@/data/portfolio";

export function Education() {
  return (
    <section id="education" className="relative py-16 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          label="Education"
          title="Academic Background"
          description="Formal education and professional certifications"
        />

        <div className="space-y-4 sm:space-y-6">
          {/* Education Degrees Matrix */}
          {education.map((item, i) => (
            <motion.div
              key={item.degree}
              className="rounded-xl border border-white/10 bg-white/5 p-4.5 sm:p-8 backdrop-blur-xl transition-all hover:border-violet-500/30"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex flex-col gap-3.5 sm:flex-row sm:items-start sm:gap-4">
                {/* Icon Wrap */}
                <div className="flex h-9 w-9 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-violet-500/20 text-violet-300">
                  <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                
                {/* Meta Content Layout */}
                <div className="flex-1">
                  <h3 className="text-base sm:text-xl font-bold text-white tracking-tight">{item.degree}</h3>
                  <p className="mt-0.5 text-xs sm:text-base font-medium text-violet-300">{item.institution}</p>
                  <p className="text-[11px] sm:text-sm text-white/40 mt-0.5">{item.location}</p>
                  
                  <span className="mt-2 inline-block rounded-full border border-violet-500/20 bg-violet-500/5 px-2.5 py-0.5 text-[10px] sm:text-xs font-medium text-violet-300">
                    {item.period}
                  </span>
                  
                  <p className="mt-3 text-xs sm:text-base text-white/60 leading-relaxed font-normal">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Professional Certificates Matrix */}
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.title}
              className="rounded-xl border border-white/10 bg-white/5 p-4.5 sm:p-8 backdrop-blur-xl transition-all hover:border-fuchsia-500/30"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex flex-col gap-3.5 sm:flex-row sm:items-start sm:gap-4">
                {/* Icon Wrap */}
                <div className="flex h-9 w-9 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-fuchsia-500/20 text-fuchsia-300">
                  <Award className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                
                {/* Meta Content Layout */}
                <div className="flex-1">
                  <h3 className="text-base sm:text-xl font-bold text-white tracking-tight">{cert.title}</h3>
                  <p className="mt-0.5 text-xs sm:text-base font-medium text-fuchsia-300">{cert.issuer}</p>
                  <p className="text-[11px] sm:text-sm text-white/40 mt-0.5">{cert.location}</p>
                  
                  <span className="mt-2 inline-block rounded-full border border-fuchsia-500/20 bg-fuchsia-500/5 px-2.5 py-0.5 text-[10px] sm:text-xs font-medium text-fuchsia-300">
                    {cert.period}
                  </span>
                  
                  <p className="mt-3 text-xs sm:text-base text-white/60 leading-relaxed font-normal">{cert.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
