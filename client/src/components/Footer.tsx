/**
 * Footer — 아이센스에프앤비
 * Background: Dark slate (#0F172A)
 */

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0F172A] text-white pt-16 pb-8">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#FF8C00] rounded flex items-center justify-center">
                <span className="text-white font-black text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>i</span>
              </div>
              <div>
                <div className="font-black text-sm" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
                  아이센스에프앤비
                </div>
                <div className="text-[10px] text-[#FFB84D] tracking-widest uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  i-Sens F&B
                </div>
              </div>
            </div>
            <p
              className="text-[#64748B] text-sm leading-relaxed"
              style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 400 }}
            >
              홍익인간(弘益人間) 정신으로
              <br />
              대한민국 1등 가맹관리 회사를 만들어 갑니다.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-xs font-bold text-[#FFB84D] tracking-widest uppercase mb-4"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "회사 소개", id: "about" },
                { label: "핵심 가치", id: "values" },
                { label: "인재상", id: "talent" },
                { label: "채용 포지션", id: "positions" },
                { label: "채용 프로세스", id: "process" },
                { label: "복리후생", id: "benefits" },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-left text-sm text-[#94A3B8] hover:text-white transition-colors"
                  style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact & CTA */}
          <div>
            <h4
              className="text-xs font-bold text-[#FFB84D] tracking-widest uppercase mb-4"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              채용 문의
            </h4>
            <p
              className="text-sm text-[#94A3B8] mb-4"
              style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 400 }}
            >
              채용 관련 문의사항이 있으시면
              <br />
              인사총무부로 연락해 주세요.
            </p>
            <a
              href="mailto:isenshr@isens.camp"
              className="inline-block bg-[#FF8C00] text-white px-5 py-2.5 rounded text-sm font-semibold hover:bg-[#E67E00] transition-colors"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              채용 문의하기
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-xs text-[#475569]"
            style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
          >
            © 2026 (주)아이센스에프앤비. All rights reserved.
          </p>
          <p
            className="text-xs text-[#475569]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            i-Sens F&B Co., Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
}
