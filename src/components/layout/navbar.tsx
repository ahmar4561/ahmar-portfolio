"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/data/portfolio";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

const sectionIds = [
  "home",
  "about",
  "skills",
  "projects",
  "experience",
  "education",
  "contact",
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-white/5 bg-[#050508]/80 py-3 backdrop-blur-2xl"
          : "bg-transparent py-5"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 2.2 }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
          className="group flex items-center gap-2"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-600 text-sm font-bold text-white">
            AM
          </div>
          <span className="hidden font-semibold text-white sm:block">
            {siteConfig.shortName}
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={cn(
                    "relative rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                    isActive ? "text-white" : "text-white/50 hover:text-white/80"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 -z-10 rounded-lg bg-white/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#contact");
          }}
          className="hidden rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-violet-500/20 transition-all hover:shadow-violet-500/40 lg:block"
        >
          Hire Me
        </a>

        <button
          type="button"
          className="rounded-lg p-2 text-white/80 hover:bg-white/10 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/5 bg-[#050508]/95 backdrop-blur-2xl lg:hidden"
          >
            <ul className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="block rounded-lg px-4 py-3 text-white/70 hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#contact");
                  }}
                  className="mt-2 block rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-3 text-center font-medium text-white"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
