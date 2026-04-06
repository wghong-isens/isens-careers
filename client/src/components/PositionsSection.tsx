/**
 * PositionsSection — 채용 포지션
 * Background: Light gray (#F8FAFC)
 * Cards: Blue left border, hover lift
 */
import { useState } from "react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { ChevronRight, MapPin, Clock } from "lucide-react";


const positions = [
  {
    dept: "가맹부",
    role: "가맹점 관리 컨설턴트",
    type: "정규직",
    location: "서울",
    tags: ["가맹관리", "컨설팅", "고객관리"],
    desc: "PC방 및 프랜차이즈 가맹점의 운영 효율화를 지원하는 현장 중심 컨설턴트 역할입니다.",
  },
  {
    dept: "디자인부",
    role: "브랜드 경험 설계자",
    type: "정규직",
    location: "서울",
    tags: ["브랜드 디자인", "UX/UI", "마케팅"],
    desc: "아이센스에프앤비 브랜드의 시각적 경험을 설계하고 고객 접점을 강화하는 역할입니다.",
  },
  {
    dept: "영업부",
    role: "상권 전략가 / 창업 파트너",
    type: "정규직",
    location: "서울/전국",
    tags: ["영업", "상권분석", "창업지원"],
    desc: "신규 가맹점 개설을 위한 상권 분석과 예비 창업자 컨설팅을 담당합니다.",
  },
  {
    dept: "전략마케팅부",
    role: "디지털 마케터",
    type: "정규직",
    location: "서울",
    tags: ["디지털마케팅", "SNS", "콘텐츠"],
    desc: "온라인 채널을 통한 브랜드 인지도 향상과 고객 유입 전략을 수립·실행합니다.",
  },
  {
    dept: "IT개발부",
    role: "풀스택 개발자",
    type: "정규직",
    location: "서울",
    tags: ["개발", "AI", "자동화"],
    desc: "가맹관리 시스템과 AI 기반 업무 자동화 솔루션을 개발합니다.",
  },
  {
    dept: "전략기획실",
    role: "전략 기획 담당",
    type: "정규직",
    location: "서울",
    tags: ["전략기획", "데이터분석", "OKR"],
    desc: "회사의 중장기 전략 수립과 성과 관리 체계(OKR/KPI)를 운영합니다.",
  },
  {
    dept: "인사총무부",
    role: "HR 전문가",
    type: "정규직",
    location: "서울",
    tags: ["채용", "교육", "조직문화"],
    desc: "AI 시대에 맞는 인재 채용, 교육 체계 구축, 조직 문화 혁신을 담당합니다.",
  },
  {
    dept: "재경법무부",
    role: "재무/법무 담당",
    type: "정규직",
    location: "서울",
    tags: ["재무", "법무", "계약"],
    desc: "회사의 재무 관리와 가맹 계약 관련 법무 업무를 담당합니다.",
  },
  {
    dept: "인테리어부",
    role: "공간 디자이너",
    type: "정규직",
    location: "서울",
    tags: ["인테리어", "공간설계", "브랜드"],
    desc: "PC방 및 프랜차이즈 매장의 브랜드 아이덴티티를 반영한 공간 설계를 담당합니다.",
  },
];

const deptColors: Record<string, string> = {
  "가맹부": "#FF8C00",
  "디자인부": "#7C3AED",
  "영업부": "#059669",
  "전략마케팅부": "#D97706",
  "IT개발부": "#DC2626",
  "전략기획실": "#0891B2",
  "인사총무부": "#FF8C00",
  "재경법무부": "#374151",
  "인테리어부": "#B45309",
};

export default function PositionsSection() {
  const { ref, visible } = useScrollFadeIn();
  const [filter, setFilter] = useState("전체");
  const depts = ["전체", ...Array.from(new Set(positions.map((p) => p.dept)))];

  const filtered =
    filter === "전체" ? positions : positions.filter((p) => p.dept === filter);

  return (
    <section id="positions" className="py-24 bg-[#F8FAFC]">
      <div className="container">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="section-label">Open Positions</span>
          <h2
            className="text-4xl lg:text-5xl font-black text-[#1E293B] mt-3 mb-4"
            style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
          >
            채용 포지션
          </h2>
          <p
            className="text-[#6B7280] text-lg"
            style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 400 }}
          >
            총 {positions.length}개 포지션에서 함께할 인재를 찾습니다
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {depts.map((dept) => (
            <button
              key={dept}
              onClick={() => setFilter(dept)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === dept
                  ? "bg-[#FF8C00] text-white shadow-md shadow-blue-500/20"
                  : "bg-white text-[#374151] border border-gray-200 hover:border-[#FF8C00] hover:text-[#FF8C00]"
              }`}
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Position Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((pos, i) => (
            <PositionCard key={`${pos.dept}-${pos.role}`} pos={pos} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PositionCard({
  pos,
  index,
}: {
  pos: (typeof positions)[0];
  index: number;
}) {
  const { ref, visible } = useScrollFadeIn();
  const color = deptColors[pos.dept] || "#FF8C00";

  return (
    <div
      ref={ref}
      className={`bg-white rounded-xl p-6 border border-gray-100 border-l-4 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        borderLeftColor: color,
        transitionDelay: `${(index % 3) * 0.1}s`,
      }}
    >
      {/* Dept Badge */}
      <div className="flex items-center justify-between mb-3">
        <span
          className="text-xs font-bold px-2.5 py-1 rounded-full"
          style={{
            backgroundColor: `${color}15`,
            color: color,
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          {pos.dept}
        </span>
        <div className="flex items-center gap-1 text-xs text-[#9CA3AF]">
          <Clock size={12} />
          <span style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>{pos.type}</span>
        </div>
      </div>

      {/* Role */}
      <h3
        className="text-lg font-bold text-[#1E293B] mb-2"
        style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
      >
        {pos.role}
      </h3>

      {/* Location */}
      <div className="flex items-center gap-1 text-xs text-[#9CA3AF] mb-3">
        <MapPin size={12} />
        <span style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>{pos.location}</span>
      </div>

      {/* Description */}
      <p
        className="text-sm text-[#6B7280] leading-relaxed mb-4"
        style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 400 }}
      >
        {pos.desc}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {pos.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 bg-[#F1F5F9] text-[#64748B] rounded"
            style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Apply Button */}
      <a
        href={`mailto:isenshr@isens.camp?subject=${encodeURIComponent(`[지원] ${pos.dept} - ${pos.role}`)}`}
        className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all hover:gap-3"
        style={{
          backgroundColor: `${color}10`,
          color: color,
          fontFamily: "'Noto Sans KR', sans-serif",
        }}
      >
        지원하기
        <ChevronRight size={16} />
      </a>
    </div>
  );
}
