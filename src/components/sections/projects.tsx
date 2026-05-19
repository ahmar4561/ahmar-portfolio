"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, PlayCircle } from "lucide-react";
import { GithubIcon } from "@/components/icons/social-icons";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";

// Complete and optimized projects list with your AI Final Year Project on top
const realProjects = [
  {
    title: "Intelligent Food Advisor",
    period: "Feb 2025 - Sep 2025",
    description: "An advanced AI system that features EfficientNetV2B2 for food image classification and utilizes the Mistral 7B LLM to generate personalized health insights based on dynamic nutritional data.",
    tech: ["Python", "FastAPI", "TensorFlow", "Mistral 7B", "AI/ML"],
    imagePath: "/food-advisor.png", // Make sure to drop your project image in public folder with this name
    liveUrl: "https://youtu.be/M5WwUZ6wkmI", // Your real YouTube demo link
    githubUrl: "https://github.com/ahmar4561", // Links directly to your GitHub profile
    isVideo: true,
  },
  {
    title: "Ahmar Luxe Store",
    period: "Feb 2026",
    description: "Premium minimalist full-stack luxury e-commerce platform focused on a high-end user experience, sleek UI design, and integrated checkout workflow.",
    tech: ["Next.js 15", "React", "Tailwind CSS", "E-Commerce"],
    imagePath: "/ahmar-luxe-store.png",
    liveUrl: "https://ahmar-luxe-store.vercel.app",
    githubUrl: "https://github.com/ahmar4561/ahmar-luxe-store",
    isVideo: false,
  },
  {
    title: "TaskAI",
    period: "Feb 2026 - Mar 2026",
    description: "An AI-powered strategic roadmap generator and SaaS application that leverages Google Gemini API for comprehensive task breakdowns and intelligent natural language processing.",
    tech: ["Next.js 15", "Tailwind CSS", "Gemini API", "SaaS AI"],
    imagePath: "/task-ai.jpg",
    liveUrl: "https://ai-task-management-system.vercel.app",
    githubUrl: "https://github.com/ahmar4561/ai-task-management-system.git",
    isVideo: false,
  },
  {
    title: "Pro-SaaS-Dashboard",
    period: "Jan 2026",
    description: "High-performance data visualization dashboard featuring real-time interactive charts with Chart.js, clean dark mode functionality, and optimized server-side rendering.",
    tech: ["Next.js 15", "Tailwind CSS", "Chart.js", "Data Analytics"],
    imagePath: "/pro-saas-dashboard.jpg",
    liveUrl: "https://pro-saas-dashboard.vercel.app",
    githubUrl: "https://github.com/ahmar4561/Pro-SaaS-Dashboard.git",
    isVideo: false,
  },
  {
    title: "HSI Pakistan",
    period: "May 2026",
    description: "Human Security Initiative (HSI) Pakistan official frontend development. Built sections for organizational mission, strategic global programs, impact metrics, and highly responsive user layouts.",
    tech: ["HTML5", "Tailwind CSS", "JavaScript", "Responsive Design"],
    imagePath: "/hsi-pakistan.jpeg",
    liveUrl: "https://hsi-pakistan.vercel.app",
    githubUrl: "https://github.com/ahmar4561/hsi-pakistan.git",
    isVideo: false,
  },
  {
    title: "Hotel Management System",
    period: "Apr 2024 - May 2024",
    description: "Web-based management application for premium restaurant and hotel booking. Includes comprehensive CRUD systems for room allocation, customer onboarding, and smooth SQL workflows.",
    tech: ["HTML", "Tailwind CSS", "JavaScript", "SQL Database"],
    imagePath: "/hotel-management.jpg",
    liveUrl: "https://memon-restaurant.vercel.app/",
    githubUrl: "https://github.com/ahmar4561/memon-restaurant.git",
    isVideo: false,
  }
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Portfolio"
          title="Featured Projects"
          description="A showcase of my best work — real applications built with modern engineering practices"
        />

        <motion.div className="grid gap-8 lg:grid-cols-2">
          {realProjects.map((project, i) => (
            <motion.article
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:border-violet-500/30 hover:shadow-2xl hover:shadow-violet-500/10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -4 }}
            >
              {/* Project Image Container */}
              <div className="relative h-56 overflow-hidden bg-[#0c0c14] sm:h-64">
                <Image
                  src={project.imagePath}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={i < 2}
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="rounded-2xl border border-white/20 bg-black/50 px-6 py-4 backdrop-blur-md">
                    <p className="text-center text-lg font-bold text-white drop-shadow-lg">
                      {project.isVideo ? "Watch Demo Video" : "View Project"}
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent opacity-80" />
              </div>

              {/* Project Content */}
              <div className="p-6 sm:p-8">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <h3 className="text-xl font-bold text-white sm:text-2xl">
                    {project.title}
                  </h3>
                  {project.period && (
                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-white/50">
                      {project.period}
                    </span>
                  )}
                </div>
                <p className="mt-3 text-white/60 leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-violet-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.liveUrl !== "#" && (
                    <Button asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.isVideo ? <PlayCircle size={16} /> : <ExternalLink size={16} />}
                        {project.isVideo ? "Watch Demo" : "Live Demo"}
                      </a>
                    </Button>
                  )}
                  <Button variant="outline" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GithubIcon size={16} />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}