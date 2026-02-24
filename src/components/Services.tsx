import { motion } from "motion/react";

const services = [
  {
    title: "Branding & Strategy",
    description: "Build your brand on a solid, thoughtful foundation. I'll help you develop a clear strategy that informs your visuals and guides your decisions for the long run."
  },
  {
    title: "Visual Creative",
    description: "Design that tells your story & grabs attention. Create visuals that work across platforms from pitch decks, campaigns, social content, and more."
  },
  {
    title: "Full Stack Development",
    description: "End-to-end web applications built with modern frameworks. From responsive frontend interfaces to robust backend architectures and databases."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 max-w-7xl mx-auto relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 w-full">
        {/* Left Column - Sticky Heading */}
        <div className="flex flex-col items-start lg:sticky lg:top-40 h-fit w-full max-w-md">
          <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-10">// SERVICES // </p>
          <h2 className="text-4xl md:text-6xl lg:text-[4.5rem] font-display leading-[1.1] tracking-tighter mb-16 text-white text-balance">
            Delivering<br />results for top<br />brands
          </h2>
          <a href="#contact" className="hidden lg:flex items-center gap-3 px-8 py-4 rounded-full glass-panel hover:bg-white/10 transition-all duration-300 shadow-xl mt-4">
            <span className="text-sm font-semibold tracking-wider text-white">SEE SERVICE DETAILS</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform -rotate-45">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Right Column - Service Cards */}
        <div className="flex flex-col gap-6 w-full">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-surface rounded-3xl p-10 md:p-14 border border-border group hover:border-white/20 transition-all duration-500 flex flex-col gap-6 relative overflow-hidden"
            >
              {/* Subtle hover glow inside card */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              <h3 className="text-3xl font-display text-white">{service.title}</h3>
              <p className="text-zinc-400 leading-relaxed text-lg font-sans font-light">
                {service.description}
              </p>
            </motion.div>
          ))}

          {/* Mobile CTA Button (Hidden on Desktop) */}
          <a href="#contact" className="lg:hidden flex items-center justify-center gap-3 px-8 py-4 rounded-full glass-panel hover:bg-white/10 transition-all duration-300 shadow-xl mt-8 w-fit mx-auto">
            <span className="text-sm font-semibold tracking-wider text-white">SEE SERVICE DETAILS</span>
          </a>
        </div>
      </div>
    </section>
  );
}
