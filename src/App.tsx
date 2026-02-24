import TopNav from "./components/TopNav";
import Hero from "./components/Hero";
import FeaturedWorks from "./components/FeaturedWorks";
import Services from "./components/Services";
import Awards from "./components/Awards";
import Journal from "./components/Journal";
import FAQs from "./components/FAQs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BottomNav from "./components/BottomNav";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary/30 pb-24">
      <TopNav />
      <Hero />
      <FeaturedWorks />
      <Services />
      <Awards />
      <Journal />
      <FAQs />
      <Contact />
      <Footer />
      <BottomNav />
    </div>
  );
}
