/**
 * AboutSection — 회사 소개
 * 개선된 레이아웃: 미션/비전 강조 + 핵심 정보 카드
 * Background: 밝은 그라데이션
 */
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const CULTURE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663519019650/XTWW3t4ncyzgFM64yU5wmZ/about-company-image-eEu8TVzYG4pRpX943ho7C8.webp";

export default function AboutSection() {
  const { ref: sectionRef, visible } = useScrollFadeIn();
  const { ref: missionRef, visible: missionVisible } = useScrollFadeIn();
  const { ref: cardsRef, visible: cardsVisible } = useScrollFadeIn();

  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-to-b from-white via-[#FFFBF7] to-white">
      <div className="container">
        {/* 섹션 헤더 */}
        <div
          ref={sectionRef}
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span
            className="inline-block text-sm font-bold text-[#FF8C00] tracking-widest uppercase mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            About Company
          </span>
          <h2
            className="text-4xl lg:text-5xl font-black text-[#1E293B] mb-4 leading-tight"
            style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
          >
            대한민국 1등 가맹관리 회사
          </h2>
          <p
            className="text-lg text-[#6B7280] max-w-2xl mx-auto"
            style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
          >
            홍익인간의 정신으로 모든 이해관계자와 함께 성장하는 혁신적인 프랜차이즈 플랫폼
          </p>
        </div>

        {/* 미션 & 비전 강조 섹션 */}
        <div
          ref={missionRef}
          className={`grid lg:grid-cols-2 gap-8 mb-20 transition-all duration-700 ${
            missionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Mission */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFF5E6] to-[#FFE8CC] rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-gradient-to-br from-[#FFF9F0] to-[#FFF5E6] rounded-2xl p-8 lg:p-10 border border-[#FFE8CC] shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#FF8C00]/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <p
                    className="text-xs font-bold text-[#FF8C00] tracking-widest uppercase"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Our Mission
                  </p>
                  <h3
                    className="text-2xl lg:text-3xl font-black text-[#1E293B] mt-2 leading-tight"
                    style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
                  >
                    널리 세상을
                    <br />
                    이롭게 한다
                  </h3>
                </div>
              </div>
              <p
                className="text-base text-[#6B7280] leading-relaxed"
                style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
              >
                사람을 위한 선(善)이 장기적 성과를 만든다는 믿음 아래, 직원과 가맹점주의 성장을 최우선으로 지원합니다.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF8C00] to-[#FFB84D] rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-gradient-to-br from-[#FF8C00] to-[#FF9F1C] rounded-2xl p-8 lg:p-10 border border-[#FFB84D] shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <p
                    className="text-xs font-bold text-white/80 tracking-widest uppercase"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Our Vision
                  </p>
                  <h3
                    className="text-2xl lg:text-3xl font-black text-white mt-2 leading-tight"
                    style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
                  >
                    타의 추종을 불허할
                    <br />
                    1등 회사
                  </h3>
                </div>
              </div>
              <p
                className="text-base text-white/90 leading-relaxed"
                style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
              >
                AI 기술과 독창적인 브랜딩을 통해 PC방, 만화카페 문화를 선도하며 모든 이해관계자와 함께 성공합니다.
              </p>
            </div>
          </div>
        </div>

        {/* 회사 소개 + 이미지 섹션 */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* 좌측: 텍스트 콘텐츠 */}
          <div
            ref={cardsRef}
            className={`transition-all duration-700 ${
              cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3
              className="text-3xl lg:text-4xl font-black text-[#1E293B] mb-6 leading-tight"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              혁신적인 프랜차이즈
              <br />
              플랫폼 기업
            </h3>

            <div className="w-12 h-1 bg-[#FF8C00] mb-8" />

            <p
              className="text-lg text-[#374151] leading-relaxed mb-6"
              style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 400 }}
            >
              아이센스는 직원과 가맹점주의 성장을 최우선으로 지원하는 혁신적인 프랜차이즈 플랫폼 기업입니다.
            </p>

            <p
              className="text-base text-[#6B7280] leading-relaxed mb-8"
              style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 400 }}
            >
              우리는 AI 기술과 독창적인 브랜딩을 통해 PC방, 만화카페 문화를 선도하며, 모든 이해관계자와 함께 성공하는 '홍익인간'의 사명을 실현합니다. 직원의 성공과 행복을 실현하는 최고의 플랫폼이 되기 위해 끊임없이 노력하고 있습니다.
            </p>

            {/* 핵심 정보 카드들 */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-[#FFF5E6] to-[#FFE8CC] rounded-lg p-6 border border-[#FFE8CC]">
                <p
                  className="text-xs font-bold text-[#FF8C00] tracking-widest uppercase mb-2"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Specialization
                </p>
                <p
                  className="text-sm font-semibold text-[#1E293B]"
                  style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
                >
                  PC방 · 만화카페
                  <br />
                  가맹관리
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#E8F5FF] to-[#D0E8FF] rounded-lg p-6 border border-[#B3D9FF]">
                <p
                  className="text-xs font-bold text-[#0066CC] tracking-widest uppercase mb-2"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Technology
                </p>
                <p
                  className="text-sm font-semibold text-[#1E293B]"
                  style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
                >
                  AI 기술 도입
                  <br />
                  전사 운영
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#F0FFE8] to-[#E0FFCC] rounded-lg p-6 border border-[#C8FF99]">
                <p
                  className="text-xs font-bold text-[#22C55E] tracking-widest uppercase mb-2"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Culture
                </p>
                <p
                  className="text-sm font-semibold text-[#1E293B]"
                  style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
                >
                  함께 성장하는
                  <br />
                  문화
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#FFE8F5] to-[#FFD0E8] rounded-lg p-6 border border-[#FFB3D9]">
                <p
                  className="text-xs font-bold text-[#EC4899] tracking-widest uppercase mb-2"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Philosophy
                </p>
                <p
                  className="text-sm font-semibold text-[#1E293B]"
                  style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
                >
                  홍익인간의
                  <br />
                  정신
                </p>
              </div>
            </div>
          </div>

          {/* 우측: 이미지 */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={CULTURE_IMG}
                alt="아이센스에프앤비 팀 문화"
                className="w-full h-[450px] object-cover"
              />
              {/* 따뜻한 오버레이 */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#FF8C00]/50 via-transparent to-transparent" />
              
              {/* 하단 정보 박스 */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 lg:p-8">
                <p
                  className="text-white font-bold text-lg"
                  style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
                >
                  함께 성장하는 문화
                </p>
                <p
                  className="text-white/80 text-sm mt-2"
                  style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
                >
                  협업과 학습이 일상이 되는 공간에서 모든 직원이 최고의 성과를 만들어냅니다.
                </p>
              </div>
            </div>

            {/* 장식 요소 */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#FF8C00]/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#FFB84D]/5 rounded-full blur-3xl" />
          </div>
        </div>

        {/* 회사 가치 하이라이트 */}
        <div className="bg-gradient-to-r from-[#FF8C00]/5 via-transparent to-[#FF8C00]/5 rounded-2xl p-8 lg:p-12 border border-[#FF8C00]/10">
          <h3
            className="text-2xl lg:text-3xl font-black text-[#1E293B] mb-6 text-center"
            style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
          >
            우리의 약속
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-3">👥</div>
              <h4
                className="font-bold text-[#1E293B] mb-2"
                style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
              >
                사람 중심
              </h4>
              <p
                className="text-sm text-[#6B7280]"
                style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
              >
                모든 의사결정의 중심에 사람을 두고 직원과 가맹점주의 행복을 최우선으로 합니다.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📈</div>
              <h4
                className="font-bold text-[#1E293B] mb-2"
                style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
              >
                성장과 학습
              </h4>
              <p
                className="text-sm text-[#6B7280]"
                style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
              >
                끊임없는 자기 개발과 조직의 성장을 추구하며 새로운 도전을 장려합니다.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">⚙️</div>
              <h4
                className="font-bold text-[#1E293B] mb-2"
                style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
              >
                시스템과 효율
              </h4>
              <p
                className="text-sm text-[#6B7280]"
                style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
              >
                체계적인 시스템과 효율적인 운영으로 최고의 성과를 만들어냅니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
