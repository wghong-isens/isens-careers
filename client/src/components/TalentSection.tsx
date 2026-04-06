/**
 * TalentSection — AI 시대 인재상
 * Background: White
 * Layout: 좌측 AI 이미지 + 우측 역량 카드
 */
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { Target, Cpu, CheckCircle } from "lucide-react";

const AI_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663519019650/XTWW3t4ncyzgFM64yU5wmZ/ai-talent-XN4zEqreWLzLkUznsYJuxt.webp";

const competencies = [
  {
    icon: Target,
    title: "문제 정의 역량",
    en: "Problem Definer",
    desc: "AI에게 무엇을 시킬지 결정하는 '질문의 힘'. 핵심 문제를 정확히 정의하고 AI를 도구로 활용합니다.",
    color: "#FF8C00",
  },
  {
    icon: Cpu,
    title: "기술 융합 역량",
    en: "AI Orchestrator",
    desc: "다양한 AI 도구를 업무에 즉시 도입하고, 기술과 비즈니스를 연결하는 능력입니다.",
    color: "#E67E00",
  },
  {
    icon: CheckCircle,
    title: "가치 검증 역량",
    en: "Value Critic",
    desc: "AI 결과물의 오류를 식별하고 인간 중심의 통찰력으로 최종 가치를 판단합니다.",
    color: "#3730A3",
  },
];

const evaluationCriteria = [
  { label: "AI 리터러시", tag: "Tech", desc: "AI 도구(LLM 등) 활용 능력 및 데이터 문해력" },
  { label: "학습 민첩성", tag: "Meta", desc: "새로운 기술을 스스로 학습하여 업무에 적용한 경험" },
  { label: "비판적 사고", tag: "Think", desc: "AI 데이터의 허구를 가려내고 사업에 맞게 재해석하는 능력" },
  { label: "변화 수용성", tag: "Attitude", desc: "기술 도입에 대한 긍정적 태도 및 동료와의 기술 공유 마인드" },
];

export default function TalentSection() {
  const { ref, visible } = useScrollFadeIn();

  return (
    <section id="talent" className="py-24 bg-white">
      <div className="container">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="section-label">Talent Profile</span>
          <h2
            className="text-4xl lg:text-5xl font-black text-[#1E293B] mt-3 mb-4"
            style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
          >
            우리가 찾는 인재
          </h2>
          <p
            className="text-[#6B7280] text-lg max-w-2xl mx-auto"
            style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 400 }}
          >
            AI 시대의 새로운 인재상 — <strong className="text-[#FF8C00]">AI 오케스트레이터</strong>
          </p>
        </div>

        {/* Main Content: Image + Competencies */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Left: AI Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={AI_IMG}
                alt="AI 시대 인재"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 to-transparent rounded-2xl" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <p
                  className="text-white font-bold text-base"
                  style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
                >
                  AI Orchestrator
                </p>
                <p
                  className="text-white/70 text-sm mt-1"
                  style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
                >
                  AI를 도구로 삼아 더 큰 가치를 만드는 인재
                </p>
              </div>
            </div>
          </div>

          {/* Right: 3 Competencies */}
          <div className="flex flex-col gap-5">
            {competencies.map((comp, i) => (
              <CompetencyCard key={comp.en} comp={comp} index={i} />
            ))}
          </div>
        </div>

        {/* Evaluation Criteria */}
        <EvaluationCriteria />
      </div>
    </section>
  );
}

function CompetencyCard({
  comp,
  index,
}: {
  comp: (typeof competencies)[0];
  index: number;
}) {
  const { ref, visible } = useScrollFadeIn();
  const Icon = comp.icon;

  return (
    <div
      ref={ref}
      className={`flex gap-5 p-5 rounded-xl border border-gray-100 hover:border-[#FF8C00]/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${
        visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
      }`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: `${comp.color}15` }}
      >
        <Icon size={22} style={{ color: comp.color }} />
      </div>
      <div>
        <div
          className="text-[10px] font-bold tracking-widest uppercase mb-1"
          style={{ fontFamily: "'DM Sans', sans-serif", color: comp.color }}
        >
          {comp.en}
        </div>
        <h3
          className="font-bold text-[#1E293B] mb-1"
          style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
        >
          {comp.title}
        </h3>
        <p
          className="text-sm text-[#6B7280] leading-relaxed"
          style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 400 }}
        >
          {comp.desc}
        </p>
      </div>
    </div>
  );
}

function EvaluationCriteria() {
  const { ref, visible } = useScrollFadeIn();

  return (
    <div
      ref={ref}
      className={`bg-[#F8FAFC] rounded-2xl p-8 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-6 bg-[#FF8C00] rounded-full" />
        <h3
          className="text-xl font-bold text-[#1E293B]"
          style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
        >
          채용 평가 기준 4가지
        </h3>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {evaluationCriteria.map((crit) => (
          <div
            key={crit.tag}
            className="bg-white rounded-xl p-4 border border-gray-100 flex gap-4 items-start"
          >
            <div className="bg-[#FF8C00] text-white text-xs font-bold px-2.5 py-1 rounded flex-shrink-0"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {crit.tag}
            </div>
            <div>
              <p
                className="font-semibold text-[#1E293B] text-sm"
                style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
              >
                {crit.label}
              </p>
              <p
                className="text-xs text-[#6B7280] mt-1 leading-relaxed"
                style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 400 }}
              >
                {crit.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
