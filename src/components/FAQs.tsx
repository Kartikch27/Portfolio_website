import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const FAQ_DATA = [
    {
        question: "Do you offer free consultations?",
        answer: "Yes, the initial 30-minute discovery call is completely free. We use this time to understand your needs and determine if we're a good fit."
    },
    {
        question: "What do you need from me to get started?",
        answer: "I request a brief overview of your project goals, any existing brand guidelines, and examples of sites or designs you admire. Once we agree to proceed, we'll have a formal onboarding."
    },
    {
        question: "How does the design process work?",
        answer: "My process involves 4 stages: Discovery (understanding your goals), Wireframing (structural layout), High-Fidelity Design (visuals & interactions), and Development/Handoff."
    },
    {
        question: "How long does a branding project take?",
        answer: "A standard branding project typically takes 3-6 weeks, depending on the scope and the speed of feedback cycles."
    },
    {
        question: "How much do your services cost?",
        answer: "Pricing is project-based. A custom website design typically starts at $3,500, while complete branding packages start at $5,000. I provide detailed proposals after our initial call."
    },
    {
        question: "Do you offer ongoing support after the project ends?",
        answer: "Yes, I offer monthly retainer packages for continuing design support, updates, and optimization once the main project has launched."
    }
];

export default function FAQs() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faqs" className="py-32 px-6 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16">

                {/* Left Col - Sticky Heading */}
                <div className="flex flex-col items-start lg:sticky lg:top-32 h-fit">
                    <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-6">// FAQ //</p>
                    <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-6">
                        Frequently<br />Asked<br />Questions
                    </h2>
                    <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
                        Everything you need to know about the product and billing.
                    </p>
                </div>

                {/* Right Col - Accordion List */}
                <div className="flex flex-col border-t border-white/10">
                    {FAQ_DATA.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                className="border-b border-white/10"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between py-8 text-left group gap-4"
                                >
                                    <span className={`text-xl md:text-2xl font-display tracking-tight transition-colors duration-300 ${isOpen ? 'text-white' : 'text-zinc-300 group-hover:text-white'}`}>
                                        {faq.question}
                                    </span>

                                    {/* Simple Arrow Indicator */}
                                    <motion.div
                                        animate={{ rotate: isOpen ? 180 : 0 }}
                                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                        className="text-zinc-500 group-hover:text-white transition-colors flex-shrink-0"
                                    >
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </motion.div>
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                            className="overflow-hidden"
                                        >
                                            <p className="pb-8 text-zinc-400 leading-relaxed text-sm md:text-base pr-12">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
