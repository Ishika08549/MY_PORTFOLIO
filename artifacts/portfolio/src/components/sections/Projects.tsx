import { motion } from "framer-motion";
import { ExternalLink, Github, Database, Activity, Car } from "lucide-react";

const projects = [
  {
    title: "Car Price Prediction Model",
    description: "Developed a robust Machine Learning model using Linear & Polynomial Regression to predict car prices. Conducted extensive data cleaning, feature engineering, and validation using Scikit-learn.",
    tech: ["Python", "Scikit-learn", "Pandas", "Regression"],
    icon: <Car className="w-6 h-6 text-primary" />,
    color: "from-primary/20 to-transparent",
    border: "group-hover:border-primary/50",
    link: "https://github.com/Ishika08549",
  },
  {
    title: "Employee Burnout & Productivity Analysis",
    description: "Built an ML classification system to predict employee burnout risk based on operational metrics. Created powerful data visualizations to extract actionable decision-making insights.",
    tech: ["Python", "Classification", "Matplotlib", "Seaborn"],
    icon: <Activity className="w-6 h-6 text-secondary" />,
    color: "from-secondary/20 to-transparent",
    border: "group-hover:border-secondary/50",
    link: "https://github.com/Ishika08549",
  },
  {
    title: "Cryptocurrency ETL Pipeline",
    description: "Architected an end-to-end Python ETL pipeline fetching real-time cryptocurrency data via APIs. Automated data processing and transformation before loading into a structured MySQL database.",
    tech: ["Python", "ETL", "APIs", "MySQL"],
    icon: <Database className="w-6 h-6 text-accent" />,
    color: "from-accent/20 to-transparent",
    border: "group-hover:border-accent/50",
    link: "https://github.com/Ishika08549",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
              <span className="text-primary">03.</span> Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent rounded-full" />
          </div>
          
          <a href="https://github.com/Ishika08549" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:text-primary-foreground hover:bg-primary px-4 py-2 rounded-full border border-primary/30 transition-all w-max text-sm font-medium">
            <Github size={16} />
            View all on GitHub
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className={`glass-panel rounded-2xl border border-white/5 transition-all duration-500 overflow-hidden group flex flex-col h-full ${project.border}`}
            >
              <div className={`h-32 bg-gradient-to-br ${project.color} p-6 flex flex-col justify-between relative overflow-hidden`}>
                {/* Decorative grid pattern */}
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
                
                <div className="flex justify-between items-start relative z-10">
                  <div className="p-3 bg-background/50 backdrop-blur-md rounded-xl border border-white/10">
                    {project.icon}
                  </div>
                  <div className="flex gap-3">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold font-heading mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map(tech => (
                    <span key={tech} className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-muted-foreground border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
