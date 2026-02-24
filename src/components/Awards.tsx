import { motion } from "motion/react";

const awards = [
  "5x Hackathon Winner",
  "Postman API Fundamental Student Expert",
  "NISM Certifications",
  "Java Programming Masterclass"
];

export default function Awards() {
  return (
    <section className="py-32 px-6 max-w-4xl mx-auto text-center border-t border-border">
      <p className="text-sm text-zinc-500 tracking-widest uppercase mb-6">// RECOGNITIONS //</p>
      <h2 className="text-4xl md:text-6xl font-bold mb-6">Recognitions</h2>
      <p className="text-zinc-400 mb-16">Honors and highlights from a journey of continuous learning</p>
      
      <div className="flex flex-col gap-4">
        {awards.map((award, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="p-6 rounded-2xl bg-surface border border-border hover:border-primary/50 transition-colors text-lg md:text-xl font-medium"
          >
            {award}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
