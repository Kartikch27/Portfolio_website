import { motion } from "motion/react";
import { FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    title: "Realis",
    link: "/work/realis",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
  },
  {
    title: "Norden Basic",
    link: "/work/norden-basic",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2574&auto=format&fit=crop",
  },
  {
    title: "Montierre",
    link: "/work/montierre",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2640&auto=format&fit=crop",
  },
  {
    title: "Omnic",
    link: "/work/omnic",
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd64bd40?q=80&w=2670&auto=format&fit=crop",
  }
];

export default function FeaturedWorks() {
  return (
    <section id="works" className="py-32 px-6 max-w-6xl mx-auto flex flex-col items-center">
      {/* Logocloud (Trusted by...) */}
      <div className="w-full flex flex-col items-center mb-40">
        <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest mb-16">Trusted by the biggest brand worldwide</p>
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60">
          <span className="text-xl font-bold font-sans text-white/50 hover:text-white transition-colors duration-300">Monclar</span>
          <span className="text-xl font-bold font-sans text-white/50 hover:text-white transition-colors duration-300">Realis</span>
          <span className="text-xl font-bold font-sans text-white/50 hover:text-white transition-colors duration-300">Norden</span>
          <span className="text-xl font-bold font-sans text-white/50 hover:text-white transition-colors duration-300">Omnic</span>
        </div>
      </div>

      {/* Heading */}
      <div className="text-center mb-24 w-full">
        <h2 className="text-4xl md:text-6xl lg:text-[5rem] font-display tracking-tight mb-8">
          <span className="text-xl md:text-3xl align-top mr-2 font-sans opacity-50">©</span>
          Featured Works
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full mb-40">
        {projects.map((project, i) => (
          <motion.a
            href={project.link}
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`group relative flex flex-col gap-6 ${i % 2 !== 0 ? 'md:mt-24' : ''}`}
          >
            <div className="relative overflow-hidden rounded-[2rem] bg-surface aspect-[4/5] w-full border border-white/5">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />

              {/* Gradient overlay for text readability */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Title (Appears on Hover) */}
              <div className="absolute bottom-10 left-0 w-full flex justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="text-2xl font-display text-white tracking-widest uppercase backdrop-blur-md bg-black/30 px-6 py-3 rounded-full border border-white/10">
                  {project.title}
                </h3>
              </div>

              {/* Top-Right Arrow */}
              <div className="absolute top-8 right-8 text-white/50 group-hover:text-white transition-colors duration-300">
                <FiArrowUpRight className="w-8 h-8" />
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Footer CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full flex flex-col items-center text-center mt-20"
      >
        <h3 className="text-4xl md:text-[3.5rem] font-display tracking-tight mb-8">Love what you see?</h3>
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-sans font-light">
          Explore my works and discover what I can achieve for you. Let's create something together.
        </p>
        <a href="#contact" className="group flex items-center gap-3 px-8 py-4 rounded-full glass-panel hover:bg-white/10 transition-all duration-300 shadow-xl border border-white/10">
          <div className="w-2 h-2 rounded-full bg-white group-hover:scale-150 transition-transform duration-300"></div>
          <span className="text-sm font-semibold tracking-wider text-white">VIEW WORK</span>
        </a>
      </motion.div>
    </section>
  );
}
