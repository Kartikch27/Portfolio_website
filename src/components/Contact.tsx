import { motion } from "motion/react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 max-w-5xl mx-auto flex flex-col items-center text-center relative mt-20">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[300px] bg-gradient-to-t from-primary/10 to-transparent blur-[80px] -z-10 pointer-events-none rounded-full"></div>

      <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-10">// LET'S TALK // </p>

      <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-display tracking-tighter leading-none mb-12">
        Drop Me<br />a Line
      </h2>

      <p className="text-zinc-400 text-lg md:text-xl font-sans font-light max-w-lg mx-auto mb-16">
        Got a project in mind or just want to say hi? I'm always open to new opportunities and interesting conversations.
      </p>

      <motion.a
        href="mailto:kartikchaurasiya2710@gmail.com"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="group flex flex-col items-center gap-4"
      >
        <div className="flex items-center gap-3 px-10 py-5 rounded-full glass-panel hover:bg-white/10 transition-all duration-300 shadow-xl border border-white/20">
          <div className="w-2 h-2 rounded-full bg-white group-hover:scale-150 transition-transform duration-300"></div>
          <span className="text-sm font-semibold tracking-wider text-white">GET IN TOUCH</span>
        </div>
        <p className="text-sm font-mono text-zinc-500 mt-4 group-hover:text-zinc-400 transition-colors">
          kartikchaurasiya2710@gmail.com
        </p>
      </motion.a>
    </section>
  );
}
