/**
 * BenefitsSection — 복리후생 & 성장 지원
 * Background: White
 * Layout: 2-column grid with icon cards
 */
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { Clock, Bot, TrendingUp, Award, Users, BookOpen, Target, Smile } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "업무 2시간, 학습 6시간",
    desc: "하루 8시간 중 6시간을 학습에 투자합니다. 성장을 위한 시간을 회사가 보장합니다.",
    color: "#2563EB",
  },
  {
    icon: Bot,
    title: "AI 도구 전사 지원",
    desc: "구글 제미나이 등 최신 AI 도구를 전 직원에게 지원합니다. AI와 함께 일하는 환경을 만듭니다.",
    color: "#1D4ED8",
  },
  {
    icon: TrendingUp,
    title: "공정한 성과 보상",
    desc: "KPI/OKR 기반의 투명한 성과 관리와 역할별 급여 구간으로 공정한 보상 체계를 운영합니다.",
    color: "#2563EB",
  },
  {
    icon: Award,
    title: "브랜드 이익 배당",
    desc: "사내 브랜드 이익의 최소 10%를 구성원에게 배당하는 이익 공유 문화를 지향합니다.",
    color: "#1D4ED8",
  },
  {
    icon: BookOpen,
    title: "교재화 & 리턴 티칭",
    desc: "지식을 매뉴얼·체크리스트·FAQ로 교재화하고, 배운 것을 동료에게 가르치는 문화입니다.",
    color: "#2563EB",
  },
  {
    icon: Target,
    title: "30-60-90일 온보딩",
    desc: "신입사원이 빠르게 적응하고 성과를 낼 수 있도록 체계적인 3개월 적응 로드맵을 제공합니다.",
    color: "#1D4ED8",
  },
  {
    icon: Users,
    title: "자가 경영 문화",
    desc: "전 직원이 CEO 마인드로 일합니다. 주인의식을 갖고 스스로 목표를 설정하고 실행합니다.",
    color: "#2563EB",
  },
  {
    icon: Smile,
    title: "성장 중심 피드백",
    desc: "정기적인 1:1 체크인과 건설적인 피드백 문화로 개인의 성장을 지속적으로 지원합니다.",
    color: "#1D4ED8",
  },
];

const onboarding = [
  {
    period: "입사 30일",
    title: "회사/제품 이해",
    items: ["회사와 팀 소개 교육", "제품과 서비스 기본 교육", "필수 업무 도구 활용법", "멘토와 주간 체크인"],
  },
  {
    period: "입사 60일",
    title: "첫 업무 프로젝트",
    items: ["소규모 실무 과제 수행", "팀원들과 협업 프로젝트", "중간 피드백 세션", "업무 역량 점검 및 보완"],
  },
  {
    period: "입사 90일",
    title: "현업과제 도전",
    items: ["독자적인 업무 진행", "실제 고객/사용자 과제", "90일 종합 평가", "정규직 전환 및 성장 계획"],
  },
];

export default function BenefitsSection() {
  const { ref, visible } = useScrollFadeIn();

  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="container">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="section-label">Benefits & Growth</span>
          <h2
            className="text-4xl lg:text-5xl font-black text-[#1E293B] mt-3 mb-4"
            style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
          >
            복리후생 & 성장 지원
          </h2>
          <p
            className="text-[#6B7280] text-lg max-w-2xl mx-auto"
            style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 400 }}
          >
            직원의 성공과 행복을 실현하는 최고의 플랫폼이 되겠습니다.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {benefits.map((benefit, i) => (
            <BenefitCard key={benefit.title} benefit={benefit} index={i} />
          ))}
        </div>

        {/* Onboarding Roadmap */}
        <OnboardingRoadmap />
      </div>
    </section>
  );
}

function BenefitCard({
  benefit,
  index,
}: {
  benefit: (typeof benefits)[0];
  index: number;
}) {
  const { ref, visible } = useScrollFadeIn();
  const Icon = benefit.icon;

  return (
    <div
      ref={ref}
      className={`p-5 rounded-xl border border-gray-100 hover:border-[#2563EB]/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${(index % 4) * 0.1}s` }}
    >
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
        style={{ backgroundColor: `${benefit.color}10` }}
      >
        <Icon size={20} style={{ color: benefit.color }} />
      </div>
      <h3
        className="font-bold text-[#1E293B] text-sm mb-2"
        style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
      >
        {benefit.title}
      </h3>
      <p
        className="text-xs text-[#6B7280] leading-relaxed"
        style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 400 }}
      >
        {benefit.desc}
      </p>
    </div>
  );
}

function OnboardingRoadmap() {
  const { ref, visible } = useScrollFadeIn();

  return (
    <div
      ref={ref}
      className={`bg-[#F8FAFC] rounded-2xl p-8 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="w-1 h-6 bg-[#2563EB] rounded-full" />
        <h3
          className="text-xl font-bold text-[#1E293B]"
          style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
        >
          30-60-90일 온보딩 로드맵
        </h3>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {onboarding.map((phase, i) => (
          <div key={phase.period} className="relative">
            {/* Connector */}
            {i < onboarding.length - 1 && (
              <div className="hidden md:block absolute top-6 left-full w-full h-px bg-[#2563EB]/30 z-0" />
            )}

            <div className="relative z-10 bg-white rounded-xl p-5 border border-gray-100 border-t-4 border-t-[#2563EB]">
              <div
                className="text-xs font-bold text-[#2563EB] tracking-widest uppercase mb-2"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {phase.period}
              </div>
              <h4
                className="font-bold text-[#1E293B] mb-3"
                style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
              >
                {phase.title}
              </h4>
              <ul className="flex flex-col gap-1.5">
                {phase.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-xs text-[#6B7280]"
                    style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
