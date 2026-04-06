/**
 * AboutSection — 회사 소개
 * Layout: 좌측 텍스트 + 우측 이미지 (비대칭)
 * Background: White
 */
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const CULTURE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663519019650/XTWW3t4ncyzgFM64yU5wmZ/culture-img-We2iyVk4SdeYarcWYUL53c.webp";

export default function AboutSection() {
  const { ref: sectionRef, visible } = useScrollFadeIn();

  return (
    <section id="about" className="py-24 bg-white">
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
            <div className="w-12 h-1 bg-[#2563EB] mb-8" />

            <p
              className="text-lg text-[#374151] leading-relaxed mb-6"
              style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 400 }}
            >
              (주)아이센스에프앤비는 PC방, 벌툰 등 프랜차이즈 가맹점 관리 분야에서
              대한민국 최고를 목표로 하는 기업입니다.
            </p>
            <p
              className="text-base text-[#6B7280] leading-relaxed mb-8"
              style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 400 }}
            >
              홍익인간(弘益人間) — '널리 세상을 이롭게 한다'는 정신을 바탕으로,
              직원의 성공과 행복을 실현하는 최고의 플랫폼이 되겠습니다.
              AI 시대에 맞는 혁신적인 인재와 함께 새로운 미래를 만들어 갑니다.
            </p>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#EFF6FF] rounded-lg p-5 border-l-4 border-[#2563EB]">
                <div
                  className="text-xs font-bold text-[#2563EB] tracking-widest uppercase mb-2"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Mission
                </div>
                <p
                  className="text-sm font-semibold text-[#1E293B] leading-snug"
                  style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
                >
                  홍익인간 정신으로
                  세상을 이롭게
                </p>
              </div>
              <div className="bg-[#1E293B] rounded-lg p-5 border-l-4 border-[#3B82F6]">
                <div
                  className="text-xs font-bold text-[#3B82F6] tracking-widest uppercase mb-2"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Vision
                </div>
                <p
                  className="text-sm font-semibold text-white leading-snug"
                  style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
                >
                  대한민국 1등
                  가맹관리 회사
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
              {/* Blue overlay accent */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/50 to-transparent" />
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
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#2563EB]/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#3B82F6]/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
