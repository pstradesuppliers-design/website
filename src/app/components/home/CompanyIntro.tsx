import { CheckCircle, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";
import TEAM_IMG from "../../../imports/group.webp";

const ENGINEER_IMG = "https://images.unsplash.com/photo-1648135327756-b606e2eb8caa?w=400&h=400&fit=crop&auto=format&q=80";

const highlights = [
  "Registered Member of the Nepal Engineering Council ('A' Electrical)",
  "Procurement, engineering, consulting, and asset management under one company",
  "Delivered 300+ solar sites nationwide in partnership with AEPC",
  "Trusted by UNOPS, ICIMOD, Helvetas, GIZ, WWF, and Renewable World",
];

export function CompanyIntro() {
  const navigate = useNavigate();

  return (
    <section id="intro" className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Images column */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl" style={{ aspectRatio: "4/3" }}>
              <img src={TEAM_IMG} alt="P.S. Trade and Suppliers team" className="w-full h-full object-cover" />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top right, rgba(4,157,191,0.25), transparent)" }}
              />
            </div>
            {/* Floating badge card */}
            <div
              className="absolute -bottom-6 -right-4 sm:right-0 rounded-2xl p-4 shadow-xl"
              style={{ background: "#0D0D0D", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <img
                src={ENGINEER_IMG}
                alt="Engineer on site"
                className="w-24 h-20 object-cover rounded-xl mb-3"
              />
              <p className="text-xs font-semibold text-white mb-0.5" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                Field Engineers Nationwide
              </p>
              <p className="text-[10px]" style={{ color: "rgba(255,255,255,0.5)" }}>
                All 7 provinces covered
              </p>
            </div>
            {/* Year badge */}
            <div
              className="absolute -top-4 -left-4 sm:left-0 w-20 h-20 rounded-2xl flex flex-col items-center justify-center shadow-lg"
              style={{ background: "#049DBF" }}
            >
              <span className="text-2xl font-black text-white" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>18+</span>
              <span className="text-[9px] text-white/80 text-center leading-tight">Years<br/>Experience</span>
            </div>
          </div>

          {/* Text column */}
          <div className="order-1 lg:order-2">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
              style={{ background: "#e6f6fa", color: "#049DBF" }}
            >
              About P.S. Trade and Suppliers
            </div>

            <h2 className="mb-5" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
              Nepal's Trusted{" "}
              <span style={{ color: "#049DBF" }}>Solar EPC Partner</span>
            </h2>

            <p className="text-gray-600 leading-relaxed mb-5">
              P.S. Trade and Suppliers Pvt. Ltd. is a Kathmandu-based business organisation committed to delivering superior goods and energy solutions across Nepal. As a trusted solar EPC (engineering, procurement, and construction) company, we combine reliable commodity trading with end-to-end renewable energy delivery  from feasibility study to installation to long-term asset management.
            </p>
            <p className="text-gray-600 leading-relaxed mb-7">
              With an extensive supplier network and an engineering team registered with the Nepal Engineering Council ('A' Electrical), we are well-positioned to deliver physical commodities and energy solutions efficiently, reliably, and responsibly  both nationally and across South Asia.
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} className="flex-shrink-0 mt-0.5" style={{ color: "#84BF49" }} />
                  <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => navigate("/solutions")}
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-white text-sm font-bold transition-all hover:scale-105 active:scale-95"
                style={{ background: "#049DBF", fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                Explore Solutions <ArrowRight size={16} />
              </button>
              <button
                onClick={() => navigate("/projects")}
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all border-2 hover:bg-gray-50"
                style={{ borderColor: "#e5e7eb", color: "#374151", fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                View Our Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
