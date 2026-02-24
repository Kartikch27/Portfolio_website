import { motion } from "motion/react";

const posts = [
    {
        date: "Jun 27, 2025",
        category: "Creative Process",
        title: "Why I start every project with words, not wireframes",
        link: "/blog/words-not-wireframes"
    },
    {
        date: "Jun 24, 2025",
        category: "Branding",
        title: "How I explain branding to clients",
        link: "/blog/branding-clients"
    },
    {
        date: "Jun 12, 2025",
        category: "Growth Strategy",
        title: "Where I look for inspiration (hint: not Dribbble)",
        link: "/blog/inspiration"
    }
];

export default function Journal() {
    return (
        <section id="journal" className="py-32 px-6 max-w-5xl mx-auto flex flex-col items-center">
            {/* Section Header */}
            <div className="w-full flex flex-col items-center mb-24 text-center">
                <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-10">// BLOG // </p>
                <h2 className="text-5xl md:text-7xl lg:text-[5rem] font-display tracking-tighter mb-8">The Journal</h2>
                <p className="text-zinc-400 text-lg md:text-xl font-sans font-light max-w-md mx-auto">
                    Personal thoughts, process snapshots, and lessons learned along the way
                </p>
            </div>

            {/* Posts List */}
            <div className="w-full flex flex-col gap-4 mb-20">
                {posts.map((post, i) => (
                    <motion.a
                        href={post.link}
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="group flex flex-col md:flex-row md:items-center justify-between p-8 md:p-10 rounded-3xl bg-surface/50 border border-border hover:bg-surface hover:border-white/20 transition-all duration-500 gap-6"
                    >
                        <div className="flex flex-col gap-3 flex-1">
                            <div className="flex items-center gap-4 text-sm font-mono text-zinc-500 uppercase tracking-wider">
                                <span>{post.date}</span>
                                <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
                                <span className="text-primary/80">{post.category}</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-display text-white group-hover:text-primary transition-colors duration-300 pr-4">
                                {post.title}
                            </h3>
                        </div>

                        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 transform transition-all duration-500 group-hover:-rotate-45 group-hover:bg-white group-hover:text-black shrink-0">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </motion.a>
                ))}
            </div>

            {/* Footer CTA */}
            <motion.a
                href="/blog"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="group flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 transition-all duration-300"
            >
                <div className="w-2 h-2 rounded-full bg-white group-hover:scale-150 transition-transform duration-300"></div>
                <span className="text-sm font-semibold tracking-wider text-white">SEE MORE POSTS</span>
            </motion.a>
        </section>
    );
}
