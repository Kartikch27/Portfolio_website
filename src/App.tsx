import Hero from "./components/Hero";
import SkillsMarquee from "./components/SkillsMarquee";
import FeaturedWorks from "./components/FeaturedWorks";
import Services from "./components/Services";
import Awards from "./components/Awards";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BottomNav from "./components/BottomNav";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-primary/30 pb-24">
      <Hero />
      <SkillsMarquee />
      <FeaturedWorks />
      <Services />
      <Awards />
      <Contact />
      <Footer />
      <BottomNav />
    </div>
  );
}
