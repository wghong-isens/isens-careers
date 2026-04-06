/**
 * HeroSection — Kinetic Manifesto Design System
 * Full-bleed hero with diagonal clip-path, animated text entrance
 * Background: Dark navy overlay on hero image
 * Text: White on dark — strong contrast
 */
import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663519019650/XTWW3t4ncyzgFM64yU5wmZ/hero-bg-We2iyVk4SdeYarcWYUL53c.webp";

export default function HeroSection() {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    setTimeout(() => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 100);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      {/* Bright overlay with orange accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-[#FFE8D1]/20 to-[#FF8C00]/20" />
      {/* Light brightness boost */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/20" />

      {/* Diagonal bottom cut */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-white"
        style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
      />

      {/* Content */}
      <div className="relative z-10 container pt-20">
        <div className="max-w-3xl">
          {/* Label */}
          <div
            className="inline-flex items-center gap-2 mb-6 opacity-0 translate-y-8 transition-all duration-700"
            style={{ transitionDelay: "0.1s" }}
            ref={(el) => {
              if (el) {
                setTimeout(() => {
                  el.style.opacity = "1";
                  el.style.transform = "translateY(0)";
                }, 200);
              }
            }}
          >
            <div className="w-8 h-px bg-[#FFB84D]" />
            <span
              className="text-[#FFD699] text-xs font-bold tracking-[0.2em] uppercase"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              i-Sens F&B Careers
            </span>
          </div>

          {/* Main Title */}
          <div
            ref={titleRef}
            className="opacity-0 translate-y-10 transition-all duration-700"
            style={{ transitionDelay: "0.2s" }}
          >
            <h1
              className="text-5xl lg:text-7xl font-black text-[#1E293B] leading-[1.05] mb-6"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              AI 시대를 이끌
              <br />
              <span className="text-[#FF8C00]">인재</span>를 찾습니다
            </h1>
          </div>

          {/* Subtitle */}
          <div
            className="opacity-0 translate-y-8 transition-all duration-700"
            style={{ transitionDelay: "0.4s" }}
            ref={(el) => {
              if (el) {
                setTimeout(() => {
                  el.style.opacity = "1";
                  el.style.transform = "translateY(0)";
                }, 500);
              }
            }}
          >
            <p
              className="text-lg lg:text-xl text-[#374151] mb-4 leading-relaxed"
              style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 400 }}
            >
              홍익인간(弘益人間)의 정신으로
              <br />
              대한민국 1등 가맹관리 회사를 함께 만들어 갑니다.
            </p>
            <p
              className="text-base text-[#6B7280]"
              style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
            >
              (주)아이센스에프앤비 — 직원의 성공과 행복을 실현하는 최고의 플랫폼
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap gap-4 mt-10 opacity-0 translate-y-8 transition-all duration-700"
            style={{ transitionDelay: "0.6s" }}
            ref={(el) => {
              if (el) {
                setTimeout(() => {
                  el.style.opacity = "1";
                  el.style.transform = "translateY(0)";
                }, 700);
              }
            }}
          >
            <button
              onClick={() => document.getElementById("positions")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-[#FF8C00] text-white px-8 py-4 rounded font-bold text-base hover:bg-[#E67E00] transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              채용 포지션 보기
            </button>
            <button
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="border-2 border-[#FF8C00] text-[#FF8C00] px-8 py-4 rounded font-semibold text-base hover:bg-[#FF8C00] hover:text-white transition-all"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              회사 소개
            </button>
          </div>

          {/* Stats */}
          <div
            className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-[#FFB84D]/30 opacity-0 translate-y-8 transition-all duration-700"
            style={{ transitionDelay: "0.8s" }}
            ref={(el) => {
              if (el) {
                setTimeout(() => {
                  el.style.opacity = "1";
                  el.style.transform = "translateY(0)";
                }, 900);
              }
            }}
          >
            {[
              { num: "9+", label: "채용 부서" },
              { num: "AI", label: "전사 도입" },
              { num: "1등", label: "가맹관리 목표" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span
                  className="text-3xl font-black text-[#FF8C00]"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {stat.num}
                </span>
                <span
                  className="text-sm text-[#6B7280] mt-1"
                  style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-[#FF8C00]/60 hover:text-[#FF8C00] transition-colors animate-bounce"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
}
