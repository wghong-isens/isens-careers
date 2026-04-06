/**
 * ValuesSection — 핵심 가치
 * Background: Dark navy (#1E293B) — diagonal clip
 * Cards: Orange border left, stagger animation
 */
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { Users, Smile, Zap, BookOpen, Scale } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "사람 중심",
    en: "People First",
    desc: "모든 직원이 스스로 책임과 권한을 가지고 주도적으로 경영하는 '자가 경영'을 추구합니다.",
  },
  {
    icon: Smile,
    title: "고객 감동",
    en: "Customer Delight",
    desc: "최종 고객의 편익을 최우선으로 생각하고, 아낌없이 주는 설계를 통해 최고의 경험을 제공합니다.",
  },
  {
    icon: Zap,
    title: "혁신과 도전",
    en: "Innovation & Challenge",
    desc: "AI, 푸드테크, 로봇 기술을 적극 도입하고, '벤치마킹+1' 전략으로 새로운 가치를 창조합니다.",
  },
  {
    icon: BookOpen,
    title: "학습 문화",
    en: "Learning Culture",
    desc: "'학습 후 시험', '릴레이 강의' 등을 통해 지식을 체화하고 전 직원이 함께 성장합니다.",
  },
  {
    icon: Scale,
    title: "정도 경영",
    en: "Ethical Management",
    desc: "원칙과 윤리를 준수하고, 동료 및 파트너사와의 신뢰를 구축하여 함께 성장합니다.",
  },
];

export default function ValuesSection() {
  const { ref, visible } = useScrollFadeIn();

  return (
    <section
      id="values"
      className="py-24 bg-[#1E293B] relative"
      style={{
        clipPath: "polygon(0 4%, 100% 0, 100% 96%, 0 100%)",
        marginTop: "-3rem",
        paddingTop: "7rem",
        paddingBottom: "7rem",
      }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 40px,
              rgba(255,255,255,0.3) 40px,
              rgba(255,255,255,0.3) 41px
            ), repeating-linear-gradient(
              90deg,
              transparent,
              transparent 40px,
              rgba(255,255,255,0.3) 40px,
              rgba(255,255,255,0.3) 41px
            )`,
          }}
        />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="section-label text-[#FFD699]">Core Values</span>
          <h2
            className="text-4xl lg:text-5xl font-black text-white mt-3 mb-4"
            style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
          >
            우리가 믿는 핵심 가치
          </h2>
          <p
            className="text-[#94A3B8] text-lg max-w-2xl mx-auto"
            style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 400 }}
          >
            아이센스는 사람 중심, 고객 감동, 혁신과 도전, 정도 경영을 추구합니다.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <ValueCard key={value.title} value={value} Icon={Icon} index={i} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ValueCard({
  value,
  Icon,
  index,
}: {
  value: (typeof values)[0];
  Icon: React.ElementType;
  index: number;
}) {
  const { ref, visible } = useScrollFadeIn();

  return (
    <div
      ref={ref}
      className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 border-l-4 border-l-[#FF8C00] hover:bg-white/10 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-[#FF8C00]/20 rounded-lg flex items-center justify-center flex-shrink-0">
          <Icon size={22} className="text-[#FFB84D]" />
        </div>
        <div>
          <div
            className="text-[10px] font-bold text-[#FFB84D] tracking-widest uppercase mb-1"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {value.en}
          </div>
          <h3
            className="text-base font-bold text-white mb-2"
            style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
          >
            {value.title}
          </h3>
          <p
            className="text-sm text-[#94A3B8] leading-relaxed"
            style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 400 }}
          >
            {value.desc}
          </p>
        </div>
      </div>
    </div>
  );
}
