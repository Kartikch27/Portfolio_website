import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const faqs = [
    {
        question: "Do you work with startups?",
        answer: "Yes, I specialize in working with early-stage startups to build their brand foundation from the ground up."
    },
    {
        question: "How long does a branding project take?",
        answer: "A typical full branding project takes 4-6 weeks from initial discovery to final handoff. This timeline ensures we have time for deep research, thoughtful design, and meaningful iterations."
    },
    {
        question: "What is your design process like?",
        answer: "My process always starts with strategy. We begin with a deep dive into your business goals, target audience, and market positioning before moving into visual exploration."
    },
    {
        question: "Do you also do web development?",
        answer: "Yes, I offer end-to-end services. After designing your brand and website, I can develop it using modern frameworks like React, Next.js, or implement it in Framer."
    }
];

export default function FAQs() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faqs" className="py-32 px-6 max-w-4xl mx-auto flex flex-col items-center">
            {/* Section Header */}
            <div className="w-full flex flex-col items-center text-center mb-24">
                <h2 className="text-5xl md:text-7xl lg:text-[5rem] font-display tracking-tighter mb-8">FAQs</h2>
                <p className="text-zinc-400 text-lg md:text-xl font-sans font-light max-w-md mx-auto">
                    Common questions about my process, pricing, and how we can work together
                </p>
            </div>

            {/* Accordion List */}
            <div className="w-full flex flex-col gap-4">
                {faqs.map((faq, i) => {
                    const isOpen = openIndex === i;
                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className={`
                group rounded-3xl border overflow-hidden transition-all duration-300
                ${isOpen ? 'bg-surface border-white/20' : 'bg-surface/50 border-white/5 hover:border-white/10 hover:bg-surface'}
              `}
                        >
                            <button
                                onClick={() => setOpenIndex(isOpen ? null : i)}
                                className="w-full flex items-center justify-between p-8 md:p-10 text-left focus:outline-none"
                            >
                                <h3 className={`text-xl md:text-2xl font-display transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-white'}`}>
                                    {faq.question}
                                </h3>
                                <div className={`
                  w-10 h-10 rounded-full border flex items-center justify-center shrink-0 transition-all duration-500
                  ${isOpen ? 'bg-primary border-primary text-black rotate-45' : 'bg-white/5 border-white/10 text-white group-hover:bg-white group-hover:text-black'}
                `}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </button>

                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        <div className="px-8 md:px-10 pb-10 text-zinc-400 text-lg md:text-xl font-sans font-light leading-relaxed max-w-2xl">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
