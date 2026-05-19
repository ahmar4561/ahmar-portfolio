"use client";

import type { ElementType } from "react";
import { motion } from "framer-motion";
import {
  Braces,
  Cloud,
  Code,
  Database,
  Flame,
  GitBranch,
  Globe,
  Layers,
  Server,
  Zap,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { skills } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const iconMap: Record<string, ElementType> = {
  react: Zap,
  nextjs: Layers,
  javascript: Code,
  typescript: Braces,
  tailwind: Globe,
  bootstrap: Layers,
  html: Code,
  css: Braces,
  github: GitBranch,
  vscode: Code,
  vercel: Cloud,
  api: Globe,
  performance: Zap,
  globe: Globe,
  code: Code,
};

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <motion.div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-violet-950/20 via-transparent to-transparent"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Skills"
          title="Technologies I Master"
          description="A comprehensive toolkit for building world-class applications"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skills.map((skill, i) => {
            const Icon = iconMap[skill.icon] || Code;
            return (
              <motion.div
                key={skill.name}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-500 hover:border-violet-500/30 hover:shadow-xl hover:shadow-violet-500/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                <div
                  className={cn(
                    "absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br opacity-20 blur-2xl transition-opacity group-hover:opacity-40",
                    skill.color
                  )}
                />
                <div
                  className={cn(
                    "mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-lg",
                    skill.color
                  )}
                >
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">
                  {skill.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
