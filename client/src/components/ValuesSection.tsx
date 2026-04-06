/**
 * ValuesSection — 핵심 가치
 * Background: Dark navy (#1E293B) — diagonal clip
 * Cards: Blue border left, stagger animation
 */
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { Users, Shield, Zap, BookOpen, Handshake } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "고객 (Customer)",
    en: "Customer First",
    desc: "고객 가치를 최우선으로 생각하고, 고객의 성공이 곧 우리의 성공입니다.",
  },
  {
    icon: Shield,
    title: "윤리 (Ethics)",
    en: "Integrity",
    desc: "정도경영과 기업윤리를 준수하며, 신뢰를 바탕으로 모든 관계를 이어갑니다.",
  },
  {
    icon: Zap,
    title: "참여와 도전",
    en: "Participation & Challenge",
    desc: "주인의식을 갖고 창조적 도전을 통해 새로운 가치를 만들어 냅니다.",
  },
  {
    icon: BookOpen,
    title: "학습과 성장",
    en: "Learning & Growth",
    desc: "끊임없는 학습과 역량 개발로 개인과 조직이 함께 성장합니다.",
  },
  {
    icon: Handshake,
    title: "신뢰와 협업",
    en: "Trust & Collaboration",
    desc: "원칙과 협업을 통해 신뢰를 구축하고, 함께 더 큰 성과를 만듭니다.",
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
          <span className="section-label text-[#93C5FD]">Core Values</span>
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
            아이센스에프앤비의 모든 구성원이 공유하는 5가지 핵심 가치입니다.
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
      className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 border-l-4 border-l-[#2563EB] hover:bg-white/10 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-[#2563EB]/20 rounded-lg flex items-center justify-center flex-shrink-0">
          <Icon size={22} className="text-[#3B82F6]" />
        </div>
        <div>
          <div
            className="text-[10px] font-bold text-[#3B82F6] tracking-widest uppercase mb-1"
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
