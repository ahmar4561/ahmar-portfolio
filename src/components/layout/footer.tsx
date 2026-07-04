"use client";

import { motion } from "framer-motion";
import { SocialLinks } from "@/components/shared/social-links";
import { navLinks, siteConfig } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-[#050508]/50 py-12 backdrop-blur-xl">
      <motion.div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold text-white">{siteConfig.name}</p>
            <p className="mt-1 text-sm text-white/50">Full Stack Developer · {siteConfig.location}</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/50 transition-colors hover:text-violet-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <SocialLinks size={18} iconClassName="h-10 w-10" />
        </div>

        <div className="mt-10 border-t border-white/5 pt-8 text-center">
          <p className="text-sm text-white/40">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
