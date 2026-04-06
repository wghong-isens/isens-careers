/**
 * Home Page — 아이센스에프앤비 채용 웹사이트
 * Design: Kinetic Manifesto (Swiss Typography + Motion Design)
 * Sections: Hero → About → Values → Talent → Positions → Process → Benefits → Footer
 */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ValuesSection from "@/components/ValuesSection";
import TalentSection from "@/components/TalentSection";
import PositionsSection from "@/components/PositionsSection";
import ProcessSection from "@/components/ProcessSection";
import BenefitsSection from "@/components/BenefitsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ValuesSection />
      <TalentSection />
      <PositionsSection />
      <ProcessSection />
      <BenefitsSection />
      <Footer />
    </div>
  );
}
