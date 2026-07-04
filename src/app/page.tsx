import { CursorGlow } from "@/components/effects/cursor-glow";
import { LoadingScreen } from "@/components/effects/loading-screen";
import { ParticleBackground } from "@/components/effects/particle-background";
import { ScrollProgress } from "@/components/effects/scroll-progress";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Education } from "@/components/sections/education";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <ParticleBackground />
      <CursorGlow />

      <div className="bg-mesh relative min-h-screen">
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div
            className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-violet-600/20 blur-[120px]"
            aria-hidden
          />
          <div
            className="absolute -right-32 top-1/2 h-96 w-96 rounded-full bg-fuchsia-600/15 blur-[120px]"
            aria-hidden
          />
          <div
            className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[100px]"
            aria-hidden
          />
        </div>

        <Navbar />
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
