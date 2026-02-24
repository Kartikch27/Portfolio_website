import { motion } from "motion/react";

const experiences = [
  {
    role: "Associate ML Engineer",
    company: "Unified Mentor Private Limited",
    date: "Mar. 2024 – Present",
    description: "Build, train, and evaluate production-grade ML models. Develop end-to-end data preprocessing workflows and implement MLOps best practices using cloud platforms."
  },
  {
    role: "ML Intern",
    company: "Unified Mentor Private Limited",
    date: "Oct. 2023 – Mar. 2024",
    description: "Supported development of ML models, implemented baseline models, and built small-scale data ingestion pipelines."
  },
  {
    role: "Full Stack Intern",
    company: "Code Casa Pvt. Ltd.",
    date: "Jan. 2023 – Jun. 2023",
    description: "Developed responsive web applications using MERN stack. Created RESTful backend services and dynamic user interfaces."
  }
];

export default function Services() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto border-t border-border">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <p className="text-sm text-zinc-500 tracking-widest uppercase mb-6">// EXPERIENCE</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Delivering results for top brands
          </h2>
          <button className="px-8 py-4 rounded-full bg-surface border border-border hover:bg-white hover:text-black transition-colors font-medium">
            Download Resume
          </button>
        </div>
        
        <div className="lg:col-span-7 space-y-12">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">{exp.role}</h3>
                <span className="text-zinc-500 text-sm font-mono mt-2 md:mt-0">{exp.date}</span>
              </div>
              <p className="text-primary/80 mb-4">{exp.company}</p>
              <p className="text-zinc-400 leading-relaxed">
                {exp.description}
              </p>
              {i !== experiences.length - 1 && <div className="w-full h-px bg-border mt-12"></div>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
