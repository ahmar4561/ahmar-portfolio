"use client";

import type { ElementType } from "react";
import { motion } from "framer-motion";
import {
  Braces,
  Cloud,
  Code,
  GitBranch,
  Globe,
  Layers,
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
    <section id="skills" className="relative py-16 sm:py-32">
      <motion.div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-violet-950/20 via-transparent to-transparent"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          label="Skills"
          title="Technologies I Master"
          description="A comprehensive toolkit for building world-class applications"
        />

        {/* Grid Updated: Fixed 2 columns on mobile screens instead of 1 column */}
        <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skills.map((skill, i) => {
            const Icon = iconMap[skill.icon] || Code;
            return (
              <motion.div
                key={skill.name}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4 sm:p-6 backdrop-blur-xl transition-all duration-500 hover:border-violet-500/30 hover:shadow-xl hover:shadow-violet-500/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.03, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div
                  className={cn(
                    "absolute -right-8 -top-8 h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-gradient-to-br opacity-15 transition-opacity group-hover:opacity-35 blur-2xl",
                    skill.color
                  )}
                />
                
                {/* Icon Sizing Adjusted for Responsiveness */}
                <div
                  className={cn(
                    "mb-3 sm:mb-4 flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-br text-white shadow-md",
                    skill.color
                  )}
                >
                  <Icon className="h-4 w-4 sm:h-6 sm:w-6" />
                </div>
                
                <h3 className="text-sm sm:text-lg font-semibold text-white tracking-tight">{skill.name}</h3>
                
                {/* Dynamic clamp to keep the grid perfectly uniform on mobile */}
                <p className="mt-1 sm:mt-2 text-[11px] sm:text-sm leading-normal text-white/40 line-clamp-2 sm:line-clamp-none">
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
