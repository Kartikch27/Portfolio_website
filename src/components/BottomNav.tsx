import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FiX, FiArrowRight } from "react-icons/fi";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "works", label: "Works" },
  { id: "services", label: "Services" },
  { id: "awards", label: "Awards" }
];

export default function BottomNav() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries.filter(entry => entry.isIntersecting);
        if (visibleSections.length > 0) {
          // Top-most visible section gets priority
          const sorted = visibleSections.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          setActiveSection(sorted[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -80% 0px" } // Trigger when element hits top 20% of viewport
    );

    NAV_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <nav className="flex items-center gap-6 px-6 py-3 bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">

          {/* Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-white/70 hover:text-white transition-colors flex items-center justify-center p-1"
            aria-label="Open Menu"
          >
            <div className="flex gap-1 h-3">
              <div className="w-[2px] bg-current rounded-full"></div>
              <div className="w-[2px] bg-current rounded-full"></div>
              <div className="w-[2px] bg-current rounded-full"></div>
            </div>
          </button>

          {/* Home Link (Current View Context) */}
          <button
            onClick={() => scrollToSection("home")}
            className="text-sm font-medium text-white transition-colors capitalize tracking-wide hidden sm:block"
          >
            {activeSection !== 'contact' ? activeSection : 'Contact'}
          </button>

          {/* Divider */}
          <div className="h-4 w-[1px] bg-white/20"></div>

          {/* Contact CTA */}
          <button
            onClick={() => scrollToSection("contact")}
            className="flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors group tracking-wide"
          >
            Contact
            <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

        </nav>
      </div>

      {/* Fullscreen Overlay Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-3xl px-6 py-12 flex flex-col justify-between"
          >
            <div className="w-full max-w-5xl mx-auto flex justify-between items-center">
              <span className="text-xl font-display font-medium">Menu</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-4 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-colors"
                aria-label="Close Menu"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 w-full max-w-5xl mx-auto flex flex-col justify-center gap-8 md:gap-12 mt-12">
              {NAV_LINKS.map((link, index) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => scrollToSection(link.id)}
                  className="group flex items-center justify-between text-left"
                >
                  <span className={`text-5xl md:text-8xl font-display tracking-tighter transition-colors duration-300 ${activeSection === link.id ? 'text-white' : 'text-zinc-600 group-hover:text-white/80'}`}>
                    {link.label}
                  </span>
                  {activeSection === link.id && (
                    <motion.div layoutId="menu-active-dot" className="w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full" />
                  )}
                </motion.button>
              ))}

              {/* Contact explicitly in menu */}
              <motion.button
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => scrollToSection("contact")}
                className="group flex items-center justify-between text-left mt-8 pt-8 border-t border-white/10"
              >
                <span className={`text-4xl md:text-6xl font-display tracking-tighter transition-colors duration-300 ${activeSection === 'contact' ? 'text-white' : 'text-zinc-600 group-hover:text-white/80'}`}>
                  Contact
                </span>
                {activeSection === 'contact' && (
                  <motion.div layoutId="menu-active-dot" className="w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full" />
                )}
              </motion.button>

            </div>

            <div className="w-full max-w-5xl mx-auto flex justify-between items-end mt-12 text-sm text-zinc-500 uppercase tracking-widest">
              <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">Twitter</a>
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-white transition-colors">Dribbble</a>
              </div>
              <span className="hidden md:block">Inspired by Monclar</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
