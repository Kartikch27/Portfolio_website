import { motion } from "motion/react";

const awards = [
  "Gold Award Visual Branding",
  "Best Framer Template 2025",
  "Site of the Day Awwwards"
];

export default function Awards() {
  return (
    <section id="awards" className="py-32 px-6 max-w-5xl mx-auto text-center relative flex flex-col items-center">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] bg-gradient-to-r from-blue-500/10 via-primary/20 to-purple-500/10 blur-[80px] -z-10 pointer-events-none rounded-full"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] dot-grid opacity-20 -z-10 blur-[1px]"></div>

      <div className="w-full flex flex-col items-center mb-24">
        <h2 className="text-5xl md:text-7xl lg:text-[5rem] font-display tracking-tighter mb-8">Recognitions</h2>
        <p className="text-zinc-400 text-lg md:text-xl font-sans font-light max-w-md mx-auto">
          Honors and highlights from a journey of meaningful design
        </p>
      </div>

      <div className="relative w-full flex flex-col items-center z-10">
        {awards.map((award, i) => {
          const isActive = i === 1; // "Best Framer Template 2025"
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`
                relative flex items-center justify-center 
                w-full max-w-xl py-6 px-10 rounded-full transition-all duration-500
                ${isActive
                  ? 'bg-surface border border-white/20 text-white shadow-2xl z-20 scale-100 my-[-10px] sm:my-[-15px] hover:border-white/30'
                  : 'bg-surface/50 border border-white/5 text-zinc-400 hover:text-white hover:bg-surface hover:border-white/10 scale-[0.93] z-10'
                }
              `}
              style={isActive ? {
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0px 1px 1px 0px rgba(255, 255, 255, 0.1)"
              } : {}}
            >
              {/* Inner subtle glow for active item */}
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent rounded-full opacity-50 pointer-events-none"></div>
              )}

              <span className={`font-sans tracking-wide ${isActive ? 'text-xl font-medium' : 'text-lg font-normal'}`}>
                {award}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
