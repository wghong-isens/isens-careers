/**
 * Home Page — 아이센스에프앤비 채용 웹사이트
 * Design: Kinetic Manifesto (Swiss Typography + Motion Design)
 * Sections: Hero → About → Values → Talent → Positions → Process → Benefits → Footer
 */
import { useAuth } from "@/_core/hooks/useAuth";
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
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  const { user, loading, error, isAuthenticated, logout } = useAuth();

  // 현재는 인증 상태를 무시하고 채용 페이지를 표시합니다.
  // 관리자 기능 추가 시 인증 상태를 활용합니다.

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
