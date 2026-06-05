import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, Terminal, Code2, Database } from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center pt-20 overflow-hidden">
      {/* Decorative abstract elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start"
          >
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading leading-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Ishika <span className="text-gradient">Pandey</span>
            </motion.h1>

            <motion.h2 
              className="text-2xl md:text-4xl text-muted-foreground font-light mb-8 flex items-center gap-3 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Building <span className="text-foreground font-medium">Data Pipelines</span>
              <span className="text-accent">&amp;</span>
              <span className="text-foreground font-medium">ML Models</span>
            </motion.h2>

            <motion.p 
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              1st-year B.Tech CS (AIML) student at GLA University. Passionate about transforming raw data into actionable insights and engineering intelligent systems. Actively seeking Data Science & Analytics internships.
            </motion.p>

            <motion.div 
              className="flex flex-wrap items-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full overflow-hidden shadow-[0_0_30px_rgba(139,92,246,0.3)]"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center gap-2">
                  Connect With Me
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>

              <div className="flex items-center gap-4">
                <SocialLink href="https://github.com/Ishika08549" icon={<Github size={22} />} label="GitHub" />
                <SocialLink href="https://www.linkedin.com/in/ishika-pandey-988199345" icon={<Linkedin size={22} />} label="LinkedIn" />
                <SocialLink href="mailto:ishikapandey0011@gmail.com" icon={<Mail size={22} />} label="Email" />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating elements indicating skills */}
        <motion.div 
          className="absolute right-[10%] top-[30%] hidden lg:flex items-center justify-center w-16 h-16 rounded-2xl glass-panel text-primary border-primary/20"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Code2 size={28} />
        </motion.div>
        <motion.div 
          className="absolute right-[25%] top-[60%] hidden lg:flex items-center justify-center w-20 h-20 rounded-2xl glass-panel text-accent border-accent/20"
          animate={{ y: [0, 25, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Database size={32} />
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="p-3 rounded-full glass border-white/10 text-muted-foreground hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-colors shadow-lg"
    >
      {icon}
    </motion.a>
  );
}
