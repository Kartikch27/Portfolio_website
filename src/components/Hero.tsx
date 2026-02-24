import { motion } from "motion/react";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-transparent">
      {/* Background Layer: Mesh Gradient */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Monclar Specific Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-gradient-to-tr from-blue-500/20 via-primary/30 to-purple-500/20 blur-[100px] rounded-full mix-blend-screen opacity-70"></div>
      </div>

      {/* Hero Content Area */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center justify-center text-center mt-12">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-[7.5rem] font-display font-medium tracking-tighter text-white leading-none mb-6"
        >
          Daren Monclar
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-zinc-400 text-lg md:text-xl max-w-xl mx-auto font-sans leading-relaxed"
        >
          Design partner for early-stage and scaling businesses
        </motion.p>
      </div>

      {/* Bottom fade for smooth transition to next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div>
    </section>
  );
}
