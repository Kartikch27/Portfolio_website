import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", {
        timeZone: "America/New_York",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Background Layer: Mesh Gradient & Dot Grid */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 dot-grid opacity-30"></div>
        {/* Monclar Specific Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-gradient-to-tr from-blue-500/20 via-primary/30 to-purple-500/20 blur-[100px] rounded-full mix-blend-screen opacity-70"></div>
      </div>

      {/* Top Bar Navigation */}
      <div className="absolute top-0 w-full px-6 py-8 flex justify-between items-start z-50">
        <div className="flex-1 text-xs font-mono text-zinc-400 uppercase tracking-widest">
          NEW YORK, US<br />{time}
        </div>

        <div className="flex-1 flex justify-end">
          <div className="flex items-center gap-2 px-4 py-2 bg-surface-light backdrop-blur-md border border-border rounded-full shadow-lg">
            <div className="w-2 h-2 rounded-full bg-green-400 relative">
              <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75"></div>
            </div>
            <span className="text-white text-xs font-medium tracking-wide">AVAILABLE FOR WORK</span>
          </div>
        </div>
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
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none"></div>
    </section>
  );
}
