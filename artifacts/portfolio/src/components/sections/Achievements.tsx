import { motion } from "framer-motion";
import { Mic, BookOpen } from "lucide-react";

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
            <span className="text-primary">05.</span> Milestones
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent rounded-full" />
        </motion.div>

        <div className="relative border-l border-white/10 pl-8 ml-4 md:ml-8 space-y-12">
          {/* Achievement 1 */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute -left-[51px] bg-background p-2 rounded-full border border-primary/50 text-primary">
              <Mic size={20} />
            </div>
            <div className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors">
              <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full mb-4 inline-block border border-primary/20">
                2025
              </span>
              <h3 className="text-xl md:text-2xl font-bold font-heading text-foreground mb-3">
                Conducted Data Science Workshop
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Organized and led a comprehensive Data Science workshop for peers, covering fundamentals of data manipulation, visualization, and basic machine learning concepts. Shared practical knowledge and fostered a collaborative learning environment.
              </p>
            </div>
          </motion.div>

          {/* Achievement 2 */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute -left-[51px] bg-background p-2 rounded-full border border-accent/50 text-accent">
              <BookOpen size={20} />
            </div>
            <div className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5 hover:border-accent/20 transition-colors relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-[40px]" />
              <span className="text-xs font-mono text-accent bg-accent/10 px-3 py-1 rounded-full mb-4 inline-block border border-accent/20">
                Ongoing
              </span>
              <h3 className="text-xl md:text-2xl font-bold font-heading text-foreground mb-3">
                Expanding to Full Stack
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Currently actively learning and building with full-stack web technologies including Flask and Django. The goal is to evolve beyond creating standalone ML models and develop complete, end-to-end data products with interactive user interfaces.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
