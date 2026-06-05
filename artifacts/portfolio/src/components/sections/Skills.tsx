import { motion } from "framer-motion";
import { 
  SiPython, SiMysql, SiJavascript, SiFlask, SiDjango, 
  SiGit, SiPandas, SiNumpy, SiScikitlearn 
} from "react-icons/si";

const skillCategories = [
  {
    title: "Programming",
    skills: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "SQL", icon: SiMysql, color: "#4479A1" },
      { name: "Java", icon: null, color: "#007396" },
    ]
  },
  {
    title: "Data Science",
    skills: [
      { name: "Pandas", icon: SiPandas, color: "#150458" },
      { name: "NumPy", icon: SiNumpy, color: "#013243" },
      { name: "Matplotlib", icon: null, color: "#11557c" },
      { name: "Seaborn", icon: null, color: "#4C72B0" },
    ]
  },
  {
    title: "Machine Learning",
    skills: [
      { name: "Regression", icon: null, color: "#8B5CF6" },
      { name: "Classification", icon: null, color: "#06B6D4" },
      { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
    ]
  },
  {
    title: "Analytics & DB",
    skills: [
      { name: "Power BI", icon: null, color: "#F2C811" },
      { name: "Dashboarding", icon: null, color: "#EC4899" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "DBMS", icon: null, color: "#A78BFA" },
    ]
  },
  {
    title: "Web & Tools",
    skills: [
      { name: "HTML/CSS/JS", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Flask", icon: SiFlask, color: "#ffffff" },
      { name: "Django", icon: SiDjango, color: "#092E20" },
      { name: "Git/VS Code", icon: SiGit, color: "#F05032" },
    ]
  },
  {
    title: "Core Concepts",
    skills: [
      { name: "DSA", icon: null, color: "#34D399" },
      { name: "OOP", icon: null, color: "#8B5CF6" },
      { name: "ETL/ELT", icon: null, color: "#06B6D4" },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
            <span className="text-primary">02.</span> Technical Arsenal
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-primary/20 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[50px] group-hover:bg-primary/10 transition-colors" />
              
              <h3 className="text-xl font-bold text-foreground mb-6 font-heading border-b border-white/10 pb-3">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, j) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-sm font-medium text-muted-foreground hover:text-white hover:border-white/30 transition-colors cursor-default"
                  >
                    {skill.icon && <skill.icon style={{ color: skill.color }} className="text-base opacity-80" />}
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
