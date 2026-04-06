/**
 * ProcessSection — 채용 프로세스
 * Background: Dark navy (#1E293B) with diagonal clip
 * Layout: Horizontal step timeline
 */
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { FileText, Monitor, MessageSquare, CheckCircle } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: FileText,
    title: "서류 및 포트폴리오",
    en: "Application",
    desc: "AI 활용 사례를 필수로 기재해 주세요. 어떤 AI 도구를 어떻게 활용했는지 구체적으로 작성할수록 좋습니다.",
    duration: "1주 이내",
  },
  {
    step: "02",
    icon: Monitor,
    title: "실무 역량 평가",
    en: "Open AI Test",
    desc: "AI 사용이 허용된 환경에서 실제 비즈니스 과제를 부여합니다. AI를 얼마나 잘 활용하는지 평가합니다.",
    duration: "2~3시간",
  },
  {
    step: "03",
    icon: MessageSquare,
    title: "심층 면접",
    en: "Critical Thinking Interview",
    desc: "AI 오답(Hallucination) 사례를 식별하는 능력과 비판적 사고력을 검증하는 심층 면접입니다.",
    duration: "1시간",
  },
  {
    step: "04",
    icon: CheckCircle,
    title: "최종 합격",
    en: "Final Offer",
    desc: "합격 후 30-60-90일 온보딩 로드맵을 통해 빠르게 적응하고 성과를 낼 수 있도록 지원합니다.",
    duration: "합격 통보",
  },
];

export default function ProcessSection() {
  const { ref, visible } = useScrollFadeIn();

  return (
    <section
      id="process"
      className="py-24 bg-gradient-to-b from-[#FFF9F0] to-[#FFE8D1] relative"
      style={{
        clipPath: "polygon(0 4%, 100% 0, 100% 96%, 0 100%)",
        marginTop: "-3rem",
        paddingTop: "7rem",
        paddingBottom: "7rem",
      }}
    >
      <div className="container relative z-10">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="section-label text-[#FF8C00]">Hiring Process</span>
          <h2
            className="text-4xl lg:text-5xl font-black text-[#1E293B] mt-3 mb-4"
            style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
          >
            채용 프로세스
          </h2>
          <p
            className="text-[#6B7280] text-lg max-w-2xl mx-auto"
            style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 400 }}
          >
            AI 시대에 맞는 공정하고 투명한 채용 과정을 안내합니다.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-[#FFB84D]/30 z-0" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, i) => (
              <StepCard key={step.step} step={step} index={i} />
            ))}
          </div>
        </div>

        {/* Bottom Note */}
        <div
          className="mt-12 bg-[#FF8C00]/10 border border-[#FFB84D]/30 rounded-xl p-6 text-center"
        >
          <p
            className="text-[#374151] text-sm leading-relaxed"
            style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 400 }}
          >
            모든 전형은 <strong className="text-[#FF8C00]">AI 활용을 권장</strong>합니다.
            AI를 잘 쓰는 사람이 우리가 찾는 인재입니다.
            전형 결과는 각 단계 완료 후 <strong className="text-[#FF8C00]">1주일 이내</strong>에 개별 통보된니다.
          </p>
        </div>
      </div>
    </section>
  );
}

function StepCard({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
}) {
  const { ref, visible } = useScrollFadeIn();
  const Icon = step.icon;

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center text-center transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      {/* Step number + Icon */}
      <div className="relative mb-5">
        <div className="w-20 h-20 bg-[#FF8C00] rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
          <Icon size={28} className="text-white" />
        </div>
        <div
          className="absolute -top-2 -right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center"
        >
          <span
            className="text-[#FF8C00] text-xs font-black"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {step.step}
          </span>
        </div>
      </div>

      {/* Content */}
      <div
        className="text-[10px] font-bold text-[#FFB84D] tracking-widest uppercase mb-2"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {step.en}
      </div>
      <h3
        className="text-base font-bold text-white mb-3"
        style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
      >
        {step.title}
      </h3>
      <p
        className="text-sm text-[#6B7280] leading-relaxed mb-3"
        style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 400 }}
      >
        {step.desc}
      </p>
      <span
        className="text-xs bg-[#FFE8D1] text-[#FF8C00] px-3 py-1 rounded-full"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {step.duration}
      </span>
    </div>
  );
}
