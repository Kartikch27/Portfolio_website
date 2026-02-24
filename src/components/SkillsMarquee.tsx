import { motion } from "motion/react";

const skills = [
  "Python", "JavaScript", "SQL", "Java", "TensorFlow", "PyTorch", "Scikit-learn", 
  "React.js", "Node.js", "AWS", "Docker", "MongoDB"
];

export default function SkillsMarquee() {
  return (
    <div className="py-12 border-y border-border overflow-hidden bg-surface/50">
      <div className="text-center text-sm text-zinc-500 mb-8 uppercase tracking-widest">
        Technical Arsenal
      </div>
      <div className="relative flex overflow-x-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        >
          {[...skills, ...skills, ...skills].map((skill, i) => (
            <div key={i} className="mx-8 text-2xl md:text-4xl font-display font-medium text-zinc-700 flex items-center gap-8">
              {skill}
              <span className="text-primary/50 text-xl">✦</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
