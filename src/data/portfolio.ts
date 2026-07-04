export const siteConfig = {
  name: "Ahmar Ali Memon",
  shortName: "Ahmar Memon",
  title: "Ahmar Ali Memon | Full Stack Developer",
  description:
    "Result-oriented Full Stack Developer with a BS in Computer Science. Building high-performance, scalable web applications with Next.js, React, and Tailwind CSS.",
  location: "Karachi, Pakistan",
  email: "ahmaralimemon187@gmail.com",
  phone: "+923456187264",
  whatsapp: "https://wa.me/923456187264",
  github: "https://github.com/ahmar4561",
  linkedin: "https://www.linkedin.com/in/contactahmarmemon",
  fiverr: "https://www.fiverr.com/s/99ljzLD",
  upwork: "https://www.upwork.com/freelancers/~019d5afef895beea6a?mp_source=share",
  cvPath: "/Ahmar-Ali-Memon-CV.pdf",
};

export type SocialPlatform =
  | "github"
  | "linkedin"
  | "email"
  | "whatsapp"
  | "fiverr"
  | "upwork";

export const socialLinks: {
  platform: SocialPlatform;
  href: string;
  label: string;
}[] = [
  { platform: "github", href: siteConfig.github, label: "GitHub" },
  { platform: "linkedin", href: siteConfig.linkedin, label: "LinkedIn" },
  { platform: "email", href: `mailto:${siteConfig.email}`, label: "Email" },
  { platform: "whatsapp", href: siteConfig.whatsapp, label: "WhatsApp" },
  { platform: "fiverr", href: siteConfig.fiverr, label: "Fiverr" },
  { platform: "upwork", href: siteConfig.upwork, label: "Upwork" },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const summary =
  "Result-oriented Full Stack Developer with a BS in Computer Science. Expertise in building high-performance, scalable web applications using Next.js 15, React, and Tailwind CSS. Strong track record of developing complex SaaS dashboards and modern digital solutions. Dedicated to clean code architecture, professional-grade software development, and staying ahead of modern web trends.";

export const heroTechBadges = [
  "Next.js 15",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "JavaScript",
  "Git",
];

export const stats = [
  { label: "Projects Completed", value: 7, suffix: "" },
  { label: "Technologies", value: 16, suffix: "+" },
  { label: "Years of Study", value: 4, suffix: "+" },
  { label: "Certifications", value: 1, suffix: "" },
];

export const skills = [
  {
    name: "Next.js 15",
    description: "App Router, SSR, and full-stack React applications",
    icon: "nextjs",
    color: "from-neutral-200 to-neutral-500",
  },
  {
    name: "React.js",
    description: "Component-driven UIs with hooks and modern patterns",
    icon: "react",
    color: "from-cyan-400 to-blue-500",
  },
  {
    name: "TypeScript",
    description: "Type-safe scalable application architecture",
    icon: "typescript",
    color: "from-blue-500 to-blue-700",
  },
  {
    name: "JavaScript (ES6+)",
    description: "Modern syntax, async patterns, and DOM mastery",
    icon: "javascript",
    color: "from-yellow-400 to-amber-500",
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first responsive design systems",
    icon: "tailwind",
    color: "from-teal-400 to-cyan-500",
  },
  {
    name: "Bootstrap",
    description: "Rapid responsive layout and component styling",
    icon: "bootstrap",
    color: "from-purple-500 to-indigo-600",
  },
  {
    name: "HTML5",
    description: "Semantic markup and accessible web structure",
    icon: "html",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "CSS3",
    description: "Animations, flexbox, grid, and modern styling",
    icon: "css",
    color: "from-blue-400 to-blue-600",
  },
  {
    name: "Git & GitHub",
    description: "Version control and collaborative workflows",
    icon: "github",
    color: "from-purple-400 to-violet-600",
  },
  {
    name: "VS Code",
    description: "Efficient development with extensions and debugging",
    icon: "vscode",
    color: "from-sky-400 to-blue-500",
  },
  {
    name: "Vercel",
    description: "Deployment, previews, and production hosting",
    icon: "vercel",
    color: "from-gray-100 to-gray-400",
  },
  {
    name: "Postman",
    description: "API testing, documentation, and integration",
    icon: "api",
    color: "from-orange-400 to-amber-500",
  },
  {
    name: "Performance Optimization",
    description: "Fast load times, Core Web Vitals, and caching",
    icon: "performance",
    color: "from-emerald-400 to-green-600",
  },
  {
    name: "Cross-Browser Compatibility",
    description: "Consistent experience across all major browsers",
    icon: "globe",
    color: "from-indigo-400 to-purple-500",
  },
  {
    name: "Technical Implementation",
    description: "Translating requirements into production-ready code",
    icon: "code",
    color: "from-violet-400 to-fuchsia-500",
  },
];

export const projects = [
  {
    title: "ATS MDCAT Platform",
    description:
      "Live, full-stack exam platform built in one week with self-enrollment, auto-generated roll numbers, a timed 180-question exam engine with negative marking, anti-cheating system, real-time scoring, automatic merit list, and digital certificates.",
    period: "Jun 2026",
    liveUrl: "https://ats-webiste-develop-by-ahmar-ali-me.vercel.app/",
    githubUrl: "https://github.com/ahmar4561/ATS-webiste-develop-by-Ahmar-Ali-memon.git",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    gradient: "from-sky-600 via-blue-600 to-indigo-600",
  },
  {
    title: "Full Stack Developer Portfolio",
    description:
      "Sleek, dark-themed minimalist personal portfolio optimized for performance and responsiveness. Built with Next.js 15 and Tailwind CSS.",
    period: "Jan 2026",
    liveUrl: "https://ahmar4561.github.io/my-portfolio/",
    githubUrl: "https://github.com/ahmar4561",
    tech: ["Next.js 15", "Tailwind CSS", "TypeScript"],
    gradient: "from-violet-600 via-purple-600 to-fuchsia-600",
  },
  {
    title: "Ahmar Luxe Store",
    description:
      "Premium minimalist full-stack luxury e-commerce platform with complex frontend architecture and streamlined checkout experience.",
    period: "Feb 2026",
    liveUrl: "https://ahmar-luxe-store-e77d.vercel.app/",
    githubUrl: "https://github.com/ahmar4561",
    tech: ["Next.js 15", "Tailwind CSS", "E-Commerce"],
    gradient: "from-fuchsia-600 via-pink-600 to-rose-600",
  },
  {
    title: "Intelligent Food Advisor",
    description:
      "AI-based recommendation system (Final Year Project) that suggests meal options based on user preferences and dietary constraints.",
    period: "Feb 2025 — Sep 2025",
    liveUrl: "https://github.com/ahmar4561",
    githubUrl: "https://github.com/ahmar4561",
    tech: ["Python", "Machine Learning", "AI"],
    gradient: "from-emerald-600 via-teal-600 to-cyan-600",
  },
  {
    title: "TaskAI — Strategic Roadmap Generator",
    description:
      "AI-powered SaaS application that generates strategic roadmaps from user input using NLP and the Gemini API.",
    period: "Feb 2026 — Mar 2026",
    liveUrl: "https://ai-task-management-system.vercel.app/",
    githubUrl: "https://github.com/ahmar4561",
    tech: ["Next.js 15", "Gemini API", "SaaS"],
    gradient: "from-blue-600 via-indigo-600 to-violet-600",
  },
  {
    title: "Pro SaaS Dashboard",
    description:
      "High-performance professional data visualization platform with real-time charts, analytics, and dark mode UI.",
    period: "Jan 2026",
    liveUrl: "https://ahmar4561.github.io/Pro-SaaS-Dashboard/",
    githubUrl: "https://github.com/ahmar4561/Pro-SaaS-Dashboard",
    tech: ["Next.js 15", "Tailwind CSS", "Chart.js"],
    gradient: "from-orange-500 via-rose-500 to-pink-600",
  },
  {
    title: "Hotel Management System",
    description:
      "Academic web-based system for room booking and customer management with full CRUD operations and responsive UI.",
    period: "Apr 2024 — May 2024",
    liveUrl: "https://github.com/ahmar4561",
    githubUrl: "https://github.com/ahmar4561",
    tech: ["HTML", "CSS", "Tailwind", "JavaScript", "SQL"],
    gradient: "from-amber-500 via-orange-600 to-red-600",
  },
];

export const experiences = [
  {
    role: "Software Engineer Intern",
    company: "Bloomrix",
    companyTagline: "IT Services & IT Consulting · Multinational",
    period: "May 13, 2026 — Present",
    duration: "16-week internship",
    description:
      "Currently interning as a Software Engineer, contributing to modern web development projects within a technology and growth-focused IT services company serving 250+ enterprises globally.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Git"],
    current: true,
  },
  {
    role: "Certified Web Developer",
    company: "PITP — Government of Sindh & Sukkur IBA University",
    companyTagline: "QUEST Nawabshah",
    period: "2024",
    duration: "2-month professional training",
    description:
      "Completed intensive web development training covering modern frontend technologies, responsive design, and professional-grade project implementation.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Responsive Design"],
    current: false,
  },
];

export const education = [
  {
    degree: "Bachelor of Computer Science",
    institution:
      "Quaid-e-Awam University of Engineering, Science & Technology (QUEST)",
    location: "Nawabshah, Pakistan",
    period: "Dec 2021 — Sep 2025",
    description:
      "Comprehensive study of computer science fundamentals, software engineering, databases, and modern web development practices.",
  },
];

export const certificates = [
  {
    title: "Certified Web Developer",
    issuer: "PITP, Government of Sindh & Sukkur IBA University",
    location: "QUEST Nawabshah",
    period: "Dec 2023 — Feb 2024",
    description:
      "Two-month training in professional web development, modern frontend technologies, and responsive design.",
  },
];