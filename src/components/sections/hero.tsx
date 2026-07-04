"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { SocialLinks } from "@/components/shared/social-links";
import { Button } from "@/components/ui/button";
import { heroTechBadges, siteConfig } from "@/data/portfolio";

const badgePositions = [
  { top: "5%", left: "-5%", delay: 0 },
  { top: "20%", right: "-8%", delay: 0.2 },
  { bottom: "35%", left: "-10%", delay: 0.4 },
  { bottom: "15%", right: "-5%", delay: 0.6 },
  { top: "45%", right: "-12%", delay: 0.8 },
  { bottom: "45%", left: "-2%", delay: 1 },
];

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-12 sm:pt-28 md:pt-24"
    >
      <div className="mx-auto grid max-w-7xl flex-1 grid-cols-1 items-center gap-10 sm:gap-14 lg:grid-cols-2 lg:gap-16 px-5 sm:px-6 lg:px-8">
        
        {/* Text Content - Mobile par order 2 taake image pehle aaye ya text bad mein setup balanced ho */}
        <motion.div
          className="text-center lg:text-left order-2 lg:order-1 z-10"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3.5 py-1 text-xs text-violet-300"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Software Engineer Intern @ Bloomrix
          </motion.span>

          {/* Responsive Font Size: Mobile par sleek text-3xl, tablet par text-4xl, desktop par 6xl */}
          <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Full Stack Developer{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent block sm:inline">
              Building Modern Web Experiences
            </span>
          </h1>

          {/* Description Text: Compact text-sm on mobile */}
          <p className="mt-4 max-w-md mx-auto lg:mx-0 text-sm sm:text-lg leading-relaxed text-white/60 px-2 sm:px-0">
            BS Computer Science graduate from QUEST Nawabshah. I build high-performance,
            scalable web apps with Next.js 15, React, and Tailwind CSS — from SaaS
            dashboards to luxury e-commerce platforms.
          </p>

          <p className="mt-4 text-xs sm:text-sm text-white/40 tracking-wide">
            {siteConfig.location} · {siteConfig.email} · {siteConfig.phone}
          </p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center lg:justify-start gap-3 px-4 sm:px-0">
            <Button size="lg" onClick={scrollToProjects} className="w-full sm:w-auto h-11 text-sm font-medium">
              View Projects
            </Button>
            <Button variant="outline" size="lg" asChild className="w-full sm:w-auto h-11 text-sm font-medium">
              <a href={siteConfig.cvPath} download="Ahmar-Ali-Memon-CV.pdf">
                <Download className="mr-1.5" size={16} />
                Download CV
              </a>
            </Button>
          </div>

          <div className="mt-8 flex justify-center lg:justify-start">
            <SocialLinks
              platforms={[
                "github",
                "linkedin",
                "email",
                "whatsapp",
                "fiverr",
                "upwork",
              ]}
            />
          </div>
        </motion.div>

        {/* Profile Image Section - Mobile par clean sizing aur optimized badges */}
        <motion.div
          className="relative mx-auto flex justify-center order-1 lg:order-2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Main Image Wrapper: Mobile par compact size taake screen se baahir na jaye */}
          <div className="relative scale-90 sm:scale-100 my-4">
            <motion.div
              className="absolute -inset-3 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 opacity-60 blur-xl"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <div className="relative rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-400 p-[3px]">
              {/* Profile Frame Sizes Perfectly Set */}
              <div className="relative h-56 w-56 overflow-hidden rounded-full bg-[#0a0a12] sm:h-76 sm:w-76 lg:h-92 lg:w-92">
                <Image
                  src="/profile-pic.jpeg"
                  alt={siteConfig.name}
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 640px) 224px, (max-width: 1024px) 304px, 368px"
                />
              </div>
            </div>

            {/* Badges Layout Configured for Smaller Screens */}
            {heroTechBadges.map((badge, i) => {
              const pos = badgePositions[i];
              return (
                <motion.span
                  key={badge}
                  className="absolute z-10 rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-[10px] font-semibold text-white/90 backdrop-blur-md sm:px-3.5 sm:py-1.5 sm:text-xs whitespace-nowrap shadow-md"
                  style={{
                    top: pos.top,
                    left: pos.left,
                    right: pos.right,
                    bottom: pos.bottom,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
                  transition={{
                    opacity: { delay: 0.6 + pos.delay },
                    scale: { delay: 0.6 + pos.delay },
                    y: { duration: 3.5, repeat: Infinity, delay: pos.delay },
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
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/30 transition-colors hover:text-violet-400 hidden md:block"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Scroll to about"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );  
}
