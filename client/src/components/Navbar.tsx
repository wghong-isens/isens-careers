/**
 * Navbar Component — Kinetic Manifesto Design System
 * Style: Swiss Typography + Motion Design
 * Colors: White bg → Blue primary (#FF8C00), Navy text (#1E293B)
 * Behavior: Sticky with scroll-aware background transition
 */
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "회사 소개", id: "about" },
    { label: "핵심 가치", id: "values" },
    { label: "인재상", id: "talent" },
    { label: "채용 포지션", id: "positions" },
    { label: "채용 프로세스", id: "process" },
    { label: "복리후생", id: "benefits" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-0 group hover:opacity-80 transition-opacity"
          >
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663519019650/XTWW3t4ncyzgFM64yU5wmZ/로고_9f3d91e7.png"
              alt="아이센스 로고"
              className="h-14 lg:h-16 w-auto"
            />
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`text-sm font-medium transition-colors hover:text-[#FF8C00] ${
                  scrolled ? "text-[#374151]" : "text-white/90"
                }`}
                style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollTo("positions")}
              className="bg-[#FF8C00] text-white px-5 py-2.5 rounded text-sm font-semibold hover:bg-[#E67E00] transition-colors"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              지금 지원하기
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`lg:hidden transition-colors ${
              scrolled ? "text-[#1E293B]" : "text-white"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-left px-4 py-3 text-sm font-medium text-[#374151] hover:text-[#FF8C00] hover:bg-blue-50 rounded transition-colors"
                style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 px-4">
              <button
                onClick={() => scrollTo("positions")}
                className="w-full bg-[#FF8C00] text-white px-5 py-3 rounded text-sm font-semibold hover:bg-[#E67E00] transition-colors"
                style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
              >
                지금 지원하기
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
