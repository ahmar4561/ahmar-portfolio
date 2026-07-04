"use client";

import { motion } from "framer-motion";
import { Code2, GraduationCap, Rocket, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { siteConfig, stats, summary } from "@/data/portfolio";
import { useCounter } from "@/hooks/use-counter";

function StatCard({
  label,
  value,
  suffix,
}: {
  label: string;
  value: number;
  suffix: string;
}) {
  const { count, ref } = useCounter(value);

  return (
    <motion.div
      ref={ref}
      className="group rounded-xl border border-white/10 bg-white/5 p-4 sm:p-6 text-center backdrop-blur-xl transition-all duration-300 hover:border-violet-500/30 hover:bg-white/8 hover:shadow-lg hover:shadow-violet-500/10"
      whileHover={{ y: -4 }}
    >
      <p className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-2xl sm:text-5xl font-bold text-transparent">
        {count}
        {suffix}
      </p>
      <p className="mt-1 sm:mt-2 text-[11px] sm:text-sm font-medium text-white/50 tracking-wide">{label}</p>
    </motion.div>
  );
}

const highlights = [
  {
    icon: Code2,
    title: "Next.js 15 Specialist",
    text: "Building SaaS dashboards, e-commerce platforms, and portfolios with App Router and Tailwind CSS.",
  },
  {
    icon: GraduationCap,
    title: "BS Computer Science",
    text: "Graduate from QUEST Nawabshah with hands-on final year and academic projects.",
  },
  {
    icon: Rocket,
    title: "Performance Focused",
    text: "Optimizing applications for speed, cross-browser compatibility, and Core Web Vitals.",
  },
  {
    icon: Sparkles,
    title: "Currently @ Bloomrix",
    text: "Software Engineer Intern contributing to modern web solutions at a global IT services company.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-16 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          label="About Me"
          title="Ahmar Ali Memon"
          description="Full Stack Developer based in Karachi, Pakistan"
        />

        <motion.div
          className="grid gap-8 lg:grid-cols-2 lg:gap-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
            <p className="text-sm sm:text-lg leading-relaxed text-white/70 px-1 sm:px-0">{summary}</p>
            <p className="text-xs sm:text-base leading-relaxed text-white/50 px-1 sm:px-0">
              Skilled in{" "}
              <span className="text-violet-300">
                Next.js 15, React.js, TypeScript, JavaScript (ES6+), Tailwind CSS,
                Bootstrap, HTML5, and CSS3
              </span>
              . Experienced with Git, GitHub, VS Code, Vercel, and Postman for
              professional development workflows.
            </p>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-left text-xs sm:text-sm text-white/60 max-w-md mx-auto lg:mx-0">
              <p>
                <span className="font-medium text-white">Email:</span> {siteConfig.email}
              </p>
              <p className="mt-1.5">
                <span className="font-medium text-white">Phone:</span> {siteConfig.phone}
              </p>
              <p className="mt-1.5">
                <span className="font-medium text-white">Location:</span>{" "}
                {siteConfig.location}
              </p>
            </div>
          </div>

          {/* Highlights Grid: 2 columns on small screens instead of stacked */}
          <div className="grid gap-3.5 grid-cols-2">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                className="rounded-xl border border-white/10 bg-white/5 p-3.5 sm:p-5 backdrop-blur-xl transition-all hover:border-violet-500/20"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="mb-2.5 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl bg-violet-500/20 text-violet-300">
                  <item.icon size={16} />
                </div>
                <h3 className="text-xs sm:text-base font-semibold text-white tracking-tight">{item.title}</h3>
                <p className="mt-1 text-[10px] sm:text-sm leading-normal text-white/40">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Grid: Ultra premium responsive fix. Forced 2 columns on mobile instead of 1 column */}
        <div className="mt-10 sm:mt-16 grid grid-cols-2 gap-3.5 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
