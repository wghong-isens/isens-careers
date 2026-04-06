/**
 * ValuesSection — 4대 핵심 가치
 * Background: Dark navy (#1E293B) — diagonal clip
 * Cards: Orange border left, detailed content
 */
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { Users, BookOpen, Heart, Zap } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "사람 중심",
    subtitle: "Human-centric & 홍익인간",
    description: "회사의 모든 활동은 '사람을 이롭게 하는 것'에서 시작합니다. 이는 고객, 동료, 가맹점주, 그리고 직원 자신을 포함합니다.",
    practices: [
      "동료애: 가장 가까운 동료부터 돕고, 동료의 성장을 지원",
      "고객 감동: 최종 고객의 편익을 최우선으로 하는 설계",
      "자가 경영: 모든 직원이 스스로 주인의식을 갖고 경영",
    ],
  },
  {
    icon: BookOpen,
    title: "성장과 학습",
    subtitle: "Growth & Learning",
    description: "성장을 멈춘 조직은 생존할 수 없습니다. 모든 직원은 끊임없이 배우고, 지식을 '교재화'하여 동료에게 전수합니다.",
    practices: [
      "학습 의무화: 하루 2시간 업무, 6시간 학습",
      "체계적 교육: '학습-시험-강의' 시스템",
      "벤치마킹+1: 업계 최고를 모방하되, 우리만의 가치를 더함",
    ],
  },
  {
    icon: Heart,
    title: "선(善)과 윤리",
    subtitle: "Goodness & Ethics",
    description: "'착하게 하는 것', 즉 '선(善)'이 모든 의사결정의 최종 기준입니다. 단기 이익보다 윤리적이고 올바른 길을 선택합니다.",
    practices: [
      "정도 경영: 원칙과 규칙 준수, 비리 철저히 금지",
      "신뢰 자산: 100% 클레임 처리, 약속 이행",
      "이타적 거래: 협력업체와의 동반성장 추구",
    ],
  },
  {
    icon: Zap,
    title: "시스템과 효율",
    subtitle: "System & Efficiency",
    description: "철학과 비전이 실제 성과로 이어지기 위해서는 반드시 측정 가능하고 재현 가능한 '시스템'이 필요합니다.",
    practices: [
      "업무 자동화: AI와 자동화 시스템으로 반복 업무 최소화",
      "핵심 집중: 목표 달성을 위한 가장 중요한 지렛대 찾기",
      "데이터 기반 관리: KPI, OKR, 대시보드를 통한 공정한 평가",
    ],
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
          className={`text-center mb-20 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="section-label text-[#FFD699]">Core Values</span>
          <h2
            className="text-4xl lg:text-5xl font-black text-white mt-4 mb-6"
            style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
          >
            아이센스 그룹의 4대 핵심 가치
          </h2>
          <p
            className="text-[#94A3B8] text-lg max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 400 }}
          >
            선한 인재들이 끊임없이 배우고 성장하여, 올바른 방식으로 탁월한 성과를 내는 시스템을 만듭니다.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <ValueCard key={value.title} value={value} Icon={Icon} index={i} />
            );
          })}
        </div>

        {/* Bottom Message */}
        <div
          className={`mt-16 pt-12 border-t border-white/10 text-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.4s" }}
        >
          <p
            className="text-white/80 text-base leading-relaxed max-w-2xl mx-auto"
            style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 400 }}
          >
            이 가치들은 서로 유기적으로 연결되어, 아이센스의 큰 그림을 완성합니다.
          </p>
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
      className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 border-l-4 border-l-[#FF8C00] hover:bg-white/10 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="w-14 h-14 bg-[#FF8C00]/20 rounded-lg flex items-center justify-center flex-shrink-0">
          <Icon size={28} className="text-[#FFB84D]" />
        </div>
        <div>
          <h3
            className="text-xl font-black text-white mb-1"
            style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
          >
            {value.title}
          </h3>
          <p
            className="text-sm text-[#FFB84D] font-semibold"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {value.subtitle}
          </p>
        </div>
      </div>

      <p
        className="text-sm text-[#CBD5E1] leading-relaxed mb-5"
        style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 400 }}
      >
        {value.description}
      </p>

      <div className="space-y-2">
        <p
          className="text-xs font-bold text-[#FFB84D] tracking-widest uppercase"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          실천 방안
        </p>
        <ul className="space-y-2">
          {value.practices.map((practice, idx) => (
            <li
              key={idx}
              className="text-sm text-[#94A3B8] leading-relaxed flex gap-2"
              style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 400 }}
            >
              <span className="text-[#FF8C00] font-bold flex-shrink-0">•</span>
              <span>{practice}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
