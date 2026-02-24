import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit" }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-32 overflow-hidden">
      {/* Top Bar */}
      <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center text-xs font-mono text-zinc-400 uppercase tracking-widest z-10">
        <div>Gurgaon, IN • {time}</div>
        <div className="flex items-center gap-2 bg-surface-light px-3 py-1.5 rounded-full border border-border">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
          Available for work
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      {/* Main Content */}
      <div className="text-center z-10 px-4 max-w-4xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6">
            Kartik<br />Chaurasiya
          </h1>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto"
        >
          5x Hackathon Winner — AI/ML Enthusiast — Full Stack Developer
        </motion.p>
      </div>

      {/* Profile Image / Abstract Shape */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[40vh] -z-10"
      >
        <div className="w-full h-full bg-gradient-to-t from-background via-background/80 to-transparent absolute inset-0 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
          alt="Abstract Background" 
          className="w-full h-full object-cover opacity-30"
          style={{ maskImage: 'linear-gradient(to top, transparent, black)', WebkitMaskImage: 'linear-gradient(to top, transparent, black)' }}
        />
      </motion.div>
    </section>
  );
}
