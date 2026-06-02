import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Cursor from "@/components/Cursor";
import BackgroundParticles from "@/components/BackgroundParticles";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";

export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen w-full bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary-foreground font-sans">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary origin-left z-50"
        style={{ scaleX }}
      />
      
      <Cursor />
      <BackgroundParticles />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Achievements />
        <Contact />
      </main>

      <footer className="py-8 text-center text-muted-foreground glass border-t-0 border-b-0 border-l-0 border-r-0 relative z-10">
        <p className="text-sm">
          Designed & Built by Ishika Pandey &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
