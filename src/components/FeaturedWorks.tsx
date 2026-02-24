import { motion } from "motion/react";

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
          <span className="text-xl font-bold font-sans text-white/80 grayscale hover:grayscale-0 transition-all duration-300">Monclar</span>
          <span className="text-xl font-bold font-sans text-white/80 grayscale hover:grayscale-0 transition-all duration-300">Realis</span>
          <span className="text-xl font-bold font-sans text-white/80 grayscale hover:grayscale-0 transition-all duration-300">Norden</span>
          <span className="text-xl font-bold font-sans text-white/80 grayscale hover:grayscale-0 transition-all duration-300">Omnic</span>
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
            <div className="relative overflow-hidden rounded-[2rem] bg-surface aspect-[4/5] w-full transform transition-transform duration-700 group-hover:-translate-y-2">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <div className="flex items-center justify-between px-2">
              <h3 className="text-2xl font-display text-white group-hover:text-primary transition-colors duration-300">{project.title}</h3>
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transform transition-all duration-500 group-hover:bg-primary group-hover:-rotate-45">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
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
        <a href="#contact" className="group flex items-center gap-3 px-8 py-4 rounded-full glass-panel hover:bg-white/10 transition-all duration-300 shadow-xl">
          <div className="w-2 h-2 rounded-full bg-white group-hover:scale-150 transition-transform duration-300"></div>
          <span className="text-sm font-semibold tracking-wider text-white">VIEW WORK</span>
        </a>
      </motion.div>
    </section>
  );
}
