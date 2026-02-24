import { motion } from "motion/react";
import { useEffect, useState } from "react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "menu", label: "Menu", action: true },
  { id: "contact", label: "Contact" }
];

export default function BottomNav() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) return;

      let current = activeSection;
      let minDistance = Infinity;

      ['home', 'contact'].forEach(id => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementCenter = rect.top + rect.height / 2;
          const viewportCenter = window.innerHeight / 2;
          const distance = Math.abs(elementCenter - viewportCenter);

          if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            if (distance < minDistance) {
              minDistance = distance;
              current = id;
            }
          }
        }
      });

      if (current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection, isMenuOpen]);

  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.action) {
      setIsMenuOpen(!isMenuOpen);
      return;
    }

    setIsMenuOpen(false);
    setActiveSection(item.id);
    const element = document.getElementById(item.id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Bottom Center Pill Navigation */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
        <motion.nav
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center p-1.5 glass-panel rounded-full shadow-2xl"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id && !item.action && !isMenuOpen;
            const isMenuAndOpen = item.action && isMenuOpen;

            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`flex items-center justify-center min-w-[100px] h-11 rounded-full cursor-pointer transition-all duration-300 ${isActive || isMenuAndOpen ? "bg-white text-black shadow-md" : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
              >
                <span className={`font-mono text-[13px] tracking-widest uppercase transition-colors duration-300 ${isActive || isMenuAndOpen ? "font-semibold" : "font-medium"}`}>
                  {item.label}
                </span>

                {/* Visual indicator for Menu toggle */}
                {item.action && (
                  <div className={`ml-2 w-1.5 h-1.5 rounded-full transition-colors duration-300 ${isMenuAndOpen ? 'bg-black' : 'bg-primary'}`}></div>
                )}
              </button>
            );
          })}
        </motion.nav>
      </div>

      {/* Floating Action Menu (Fullscreen overlay) */}
      <motion.div
        initial={{ opacity: 0, pointerEvents: "none" }}
        animate={{ opacity: isMenuOpen ? 1 : 0, pointerEvents: isMenuOpen ? "auto" : "none" }}
        transition={{ duration: 0.4 }}
        className="fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center px-6"
      >
        <div className="flex flex-col gap-8 text-center">
          {['works', 'services', 'awards', 'journal', 'faqs'].map((section) => (
            <button
              key={section}
              onClick={() => {
                setIsMenuOpen(false);
                const element = document.getElementById(section);
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-4xl md:text-6xl font-display font-medium text-white hover:text-primary transition-colors capitalize tracking-tighter"
            >
              {section}
            </button>
          ))}
        </div>
      </motion.div>
    </>
  );
}
