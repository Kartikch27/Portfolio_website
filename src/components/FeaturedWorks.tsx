import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Production ML Pipeline",
    category: "Machine Learning",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "MERN E-Commerce",
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  },
  {
    title: "Data Ingestion Engine",
    category: "Data Engineering",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  }
];

export default function FeaturedWorks() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">© Featured Works</h2>
        <p className="text-zinc-400 text-lg">A curated collection of technical projects</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`group relative rounded-3xl overflow-hidden bg-surface aspect-[4/3] cursor-pointer ${i === 2 ? 'md:col-span-2 md:aspect-[21/9]' : ''}`}
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80"></div>
            
            <div className="absolute bottom-0 left-0 w-full p-8 flex justify-between items-end">
              <div>
                <p className="text-sm text-zinc-300 mb-2">{project.category}</p>
                <h3 className="text-2xl font-semibold">{project.title}</h3>
              </div>
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-20 text-center">
        <h3 className="text-3xl md:text-5xl font-bold mb-8">Love what you see?</h3>
        <p className="text-zinc-400 mb-10 max-w-xl mx-auto">Explore my technical solutions and discover what I can build for you. Let's create something robust together.</p>
        <button className="px-8 py-4 rounded-full bg-surface border border-border hover:bg-white hover:text-black transition-colors font-medium">
          View GitHub
        </button>
      </div>
    </section>
  );
}
