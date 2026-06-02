import { motion } from "framer-motion";
import { Award, ShieldCheck, CheckCircle } from "lucide-react";

const certifications = [
  {
    title: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    icon: <ShieldCheck className="w-8 h-8 text-accent" />,
    color: "border-accent/30 hover:border-accent shadow-[0_0_0_rgba(6,182,212,0)] hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]"
  },
  {
    title: "SQL (Basic to Intermediate)",
    issuer: "HackerRank Certified",
    icon: <CheckCircle className="w-8 h-8 text-green-400" />,
    color: "border-green-400/30 hover:border-green-400 shadow-[0_0_0_rgba(74,222,128,0)] hover:shadow-[0_0_20px_rgba(74,222,128,0.2)]"
  },
  {
    title: "Python, MySQL, Data Science, Power BI",
    issuer: "TestDome Certified",
    icon: <Award className="w-8 h-8 text-primary" />,
    color: "border-primary/30 hover:border-primary shadow-[0_0_0_rgba(139,92,246,0)] hover:shadow-[0_0_20px_rgba(139,92,246,0.2)]"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 justify-center flex gap-2">
            <span className="text-primary">04.</span> Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -5 }}
              className={`glass p-8 rounded-2xl border transition-all duration-300 flex flex-col items-center text-center group ${cert.color}`}
            >
              <div className="mb-6 p-4 rounded-full bg-background/50 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                {cert.icon}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 leading-tight">
                {cert.title}
              </h3>
              <p className="text-sm font-mono text-muted-foreground uppercase tracking-wider mt-auto">
                {cert.issuer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
