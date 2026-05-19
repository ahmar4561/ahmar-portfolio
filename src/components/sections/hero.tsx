"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { SocialLinks } from "@/components/shared/social-links";
import { Button } from "@/components/ui/button";
import { heroTechBadges, siteConfig } from "@/data/portfolio";

const badgePositions = [
  { top: "5%", left: "-8%", delay: 0 },
  { top: "20%", right: "-12%", delay: 0.2 },
  { bottom: "30%", left: "-15%", delay: 0.4 },
  { bottom: "10%", right: "-8%", delay: 0.6 },
  { top: "45%", right: "-18%", delay: 0.8 },
  { bottom: "45%", left: "-5%", delay: 1 },
];

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
    >
      <div className="mx-auto grid max-w-7xl flex-1 grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 2.4 }}
        >
          <motion.span
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm text-violet-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5 }}
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Software Engineer Intern @ Bloomrix
          </motion.span>

          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Full Stack Developer{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Building Modern Web Experiences
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">
            BS Computer Science graduate from QUEST Nawabshah. I build high-performance,
            scalable web apps with Next.js 15, React, and Tailwind CSS — from SaaS
            dashboards to luxury e-commerce platforms.
          </p>

          <p className="mt-3 text-sm text-white/40">
            {siteConfig.location} · {siteConfig.email} · {siteConfig.phone}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button size="lg" onClick={scrollToProjects}>
              View Projects
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href={siteConfig.cvPath} download="Ahmar-Ali-Memon-CV.pdf">
                <Download className="mr-1" size={18} />
                Download CV
              </a>
            </Button>
          </div>

          <div className="mt-10">
            <SocialLinks
              platforms={[
                "github",
                "linkedin",
                "email",
                "whatsapp",
                "facebook",
                "instagram",
                "fiverr",
                "upwork",
              ]}
            />
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto flex max-w-md justify-center lg:max-w-none"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 2.6 }}
        >
          <div className="relative">
            <motion.div
              className="absolute -inset-4 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 opacity-75 blur-2xl"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            <div className="relative rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-400 p-1">
              <div className="relative h-72 w-72 overflow-hidden rounded-full bg-[#0a0a12] sm:h-80 sm:w-80 lg:h-96 lg:w-96">
                <Image
                  src="/profile-pic.jpeg"
                  alt={siteConfig.name}
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 288px, 384px"
                />
              </div>
            </div>

            {heroTechBadges.map((badge, i) => {
              const pos = badgePositions[i];
              return (
                <motion.span
                  key={badge}
                  className="absolute z-10 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-xl sm:px-4 sm:text-sm"
                  style={{
                    top: pos.top,
                    left: pos.left,
                    right: pos.right,
                    bottom: pos.bottom,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                  transition={{
                    opacity: { delay: 2.8 + pos.delay },
                    scale: { delay: 2.8 + pos.delay },
                    y: { duration: 3, repeat: Infinity, delay: pos.delay },
                  }}
                >
                  {badge}
                </motion.span>
              );
            })}
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 transition-colors hover:text-violet-400"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Scroll to about"
      >
        <ArrowDown size={24} />
      </motion.a>
    </section>
  );
}