import { motion } from "framer-motion";
import { MapPin, GraduationCap, Target, Zap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
            <span className="text-primary">01.</span> About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            className="lg:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              I am a <strong className="text-foreground">1st-year B.Tech Computer Science (AIML)</strong> student at GLA University, 
              deeply fascinated by the intersection of data, algorithms, and human impact. I don't just write code; 
              I build systems that transform chaotic data into structured intelligence.
            </p>
            <p>
              My journey started with a curiosity about how machines learn, which quickly evolved into a passion for 
              <strong className="text-foreground"> Data Science, Machine Learning, and ETL pipeline architecture</strong>. 
              Whether it's predicting car prices or analyzing employee burnout, I approach problems with analytical rigor and creative engineering.
            </p>
            <p>
              When I'm not training models or cleaning datasets, I'm actively expanding my horizons into Full Stack development (Flask, Django) 
              to deploy my ML solutions as accessible web applications. I thrive in high-energy environments and love sharing knowledge—recently 
              conducting a Data Science workshop for my peers.
            </p>
          </motion.div>

          <motion.div 
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <InfoCard 
              icon={<MapPin className="text-primary" />}
              title="Location"
              content="Delhi, India"
              delay={0}
            />
            <InfoCard 
              icon={<GraduationCap className="text-accent" />}
              title="Education"
              content="GLA University"
              sub="B.Tech CS AIML (2024-2028)"
              delay={0.1}
            />
            <InfoCard 
              icon={<Target className="text-secondary" />}
              title="Aspirations"
              content="Data Scientist"
              sub="ML Engineer Intern"
              delay={0.2}
            />
            <InfoCard 
              icon={<Zap className="text-primary" />}
              title="Core Focus"
              content="Scalable Systems"
              sub="Data-Driven Insights"
              delay={0.3}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, title, content, sub, delay }: { icon: React.ReactNode, title: string, content: string, sub?: string, delay: number }) {
  return (
    <motion.div 
      className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay + 0.4 }}
      whileHover={{ y: -5 }}
    >
      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-sm text-muted-foreground font-mono uppercase tracking-wider mb-1">{title}</h3>
      <p className="text-lg font-semibold text-foreground">{content}</p>
      {sub && <p className="text-sm text-muted-foreground mt-1">{sub}</p>}
    </motion.div>
  );
}
