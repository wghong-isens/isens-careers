/**
 * AboutSection — 회사 소개
 * Layout: 좌측 텍스트 + 우측 이미지 (비대칭)
 * Background: White
 */
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const CULTURE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663519019650/XTWW3t4ncyzgFM64yU5wmZ/about-company-image-eEu8TVzYG4pRpX943ho7C8.webp";

export default function AboutSection() {
  const { ref: sectionRef, visible } = useScrollFadeIn();

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-[#FFF9F0]">
      <div className="container">
        <div
          ref={sectionRef}
          className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Left: Text Content */}
          <div>
            <span className="section-label">About Us</span>
            <h2
              className="text-4xl lg:text-5xl font-black text-[#1E293B] mt-3 mb-6 leading-tight"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              대한민국 1등
              <br />
              가맹관리 회사
            </h2>
            <div className="w-12 h-1 bg-[#FF8C00] mb-8" />

            <p
              className="text-lg text-[#374151] leading-relaxed mb-6"
              style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 400 }}
            >
              아이센스는 '사람을 위한 선(善)이 장기적 성과를 만든다'는 믿음 아래, 직원과 가맹점주의 성장을 최우선으로 지원하는 혁신적인 프랜차이즈 플랫폼 기업입니다.
            </p>
            <p
              className="text-base text-[#6B7280] leading-relaxed mb-8"
              style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 400 }}
            >
              우리는 AI 기술과 독창적인 브랜딩을 통해 PC방, 만화카페 문화를 선도하며,
              모든 이해관계자와 함께 성공하는 '홍익인간'의 사명을 실현합니다.
            </p>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#FFF5E6] rounded-lg p-5 border-l-4 border-[#FF8C00]">
                <div
                  className="text-xs font-bold text-[#FF8C00] tracking-widest uppercase mb-2"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Mission
                </div>
                <p
                  className="text-sm font-semibold text-[#1E293B] leading-snug"
                  style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
                >
                  널리 세상을
                  이롭게 한다
                </p>
              </div>
              <div className="bg-[#FF8C00] rounded-lg p-5 border-l-4 border-[#FF8C00]">
                <div
                  className="text-xs font-bold text-[#FFB84D] tracking-widest uppercase mb-2"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Vision
                </div>
                <p
                  className="text-sm font-semibold text-white leading-snug"
                  style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
                >
                  타의 추종을 불허할
                  1등 회사
                </p>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={CULTURE_IMG}
                alt="아이센스에프앤비 팀 문화"
                className="w-full h-[420px] object-cover"
              />
              {/* Warm overlay accent */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#FF8C00]/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p
                  className="text-white font-semibold text-base"
                  style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
                >
                  함께 성장하는 문화
                </p>
                <p
                  className="text-white/70 text-sm mt-1"
                  style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
                >
                  협업과 학습이 일상이 되는 공간
                </p>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#FF8C00]/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#FFB84D]/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
