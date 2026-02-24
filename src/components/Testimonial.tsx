import { motion } from "motion/react";

const logos = [
    { name: "squarrow", icon: "◩" },
    { name: "Atomic", icon: "⚛" },
    { name: "SOLID PANEL", icon: "▧", active: true },
    { name: "ARROW", icon: "↗" },
    { name: "Sonar", icon: "≋" }
];

export default function Testimonial() {
    return (
        <section className="py-32 px-6 max-w-5xl mx-auto flex flex-col items-center text-center">
            {/* Quote Icon */}
            <div className="text-zinc-800 text-8xl font-serif leading-none mb-8 opacity-50">"</div>

            {/* Testimonial Text */}
            <h2 className="text-3xl md:text-5xl lg:text-5xl font-display font-medium leading-[1.3] text-white tracking-tight max-w-4xl mb-16">
                "The branding work captured the soul of our business. Every detail felt intentional and true to our voice"
            </h2>

            {/* Author Info */}
            <div className="mb-20">
                <p className="text-white font-medium mb-1">Maelis Durant</p>
                <p className="text-zinc-500 text-sm">Head of Design</p>
            </div>

            {/* Logo Row */}
            <div className="flex flex-wrap justify-center gap-4 w-full">
                {logos.map((logo, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        className={`
              flex items-center gap-3 px-8 py-8 rounded-3xl transition-all duration-300
              ${logo.active
                                ? 'bg-[#111] border border-white/5 text-white scale-110 z-10 shadow-2xl relative'
                                : 'bg-white/[0.02] border border-transparent text-white/40 hover:text-white/80 hover:bg-white/5 scale-95 grayscale hover:grayscale-0'
                            }
            `}
                        style={logo.active ? { boxShadow: "inset 0px 1px 1px 0px rgba(255, 255, 255, 0.05)" } : {}}
                    >
                        <span className="text-2xl">{logo.icon}</span>
                        <span className="font-semibold text-lg">{logo.name}</span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
