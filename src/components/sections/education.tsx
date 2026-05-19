"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { certificates, education } from "@/data/portfolio";

export function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Education"
          title="Academic Background"
          description="Formal education and professional certifications"
        />

        <div className="space-y-6">
          {education.map((item, i) => (
            <motion.div
              key={item.degree}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all hover:border-violet-500/30 sm:p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/20 text-violet-300">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{item.degree}</h3>
                  <p className="mt-1 font-medium text-violet-300">{item.institution}</p>
                  <p className="text-sm text-white/50">{item.location}</p>
                  <span className="mt-2 inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs text-violet-300">
                    {item.period}
                  </span>
                  <p className="mt-4 text-white/60 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}

          {certificates.map((cert, i) => (
            <motion.div
              key={cert.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all hover:border-fuchsia-500/30 sm:p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-fuchsia-500/20 text-fuchsia-300">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{cert.title}</h3>
                  <p className="mt-1 font-medium text-fuchsia-300">{cert.issuer}</p>
                  <p className="text-sm text-white/50">{cert.location}</p>
                  <span className="mt-2 inline-block rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 px-3 py-1 text-xs text-fuchsia-300">
                    {cert.period}
                  </span>
                  <p className="mt-4 text-white/60 leading-relaxed">{cert.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
