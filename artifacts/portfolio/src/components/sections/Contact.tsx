import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") || "Guest";
    
    toast({
      title: "Message Sent!",
      description: `Thanks for reaching out, ${name}. I'll get back to you soon.`,
    });
    
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Abstract background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono tracking-wider mb-4">06. What's Next?</p>
          <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            I'm currently looking for new opportunities and internships in Data Science and Analytics. 
            Whether you have a question or just want to say hi, my inbox is always open!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center space-y-8"
          >
            <ContactMethod 
              icon={<Mail className="text-primary w-6 h-6" />}
              title="Email Me"
              content="ishikapandey0011@gmail.com"
              href="mailto:ishikapandey0011@gmail.com"
            />
            <ContactMethod 
              icon={<Linkedin className="text-accent w-6 h-6" />}
              title="LinkedIn"
              content="Connect professionally"
              href="https://www.linkedin.com/in/ishika-pandey-988199345"
            />
            <ContactMethod 
              icon={<Github className="text-white w-6 h-6" />}
              title="GitHub"
              content="Check out my code"
              href="https://github.com/Ishika08549"
            />
          </motion.div>

          {/* Contact Form Placeholder (UI only) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form className="glass-panel p-8 rounded-2xl border border-white/5 space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  required
                  className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required
                  className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors resize-none"
                  placeholder="Hello Ishika..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-[0_0_20px_rgba(139,92,246,0.2)]"
              >
                Send Message <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactMethod({ icon, title, content, href }: { icon: React.ReactNode, title: string, content: string, href: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center gap-6 group p-4 rounded-xl hover:bg-white/5 transition-colors"
    >
      <div className="w-14 h-14 rounded-full glass border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-primary/50 transition-all duration-300 shadow-lg">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted-foreground">{content}</p>
      </div>
    </a>
  );
}
