import { ArrowRight, Sun, Zap, Droplets, Flame, Battery } from "lucide-react";
import { useNavigate } from "react-router";
import { useSiteData } from "../../context/SiteDataContext";
import type { SolutionId } from "../solutions/solutionsData";

const SOLUTION_ICONS: Record<SolutionId, React.ComponentType<{ size?: number; style?: React.CSSProperties }>> = {
  "on-grid-solar": Sun,
  "off-grid-solar": Zap,
  "solar-water-pumping": Droplets,
  "solar-water-heater": Flame,
  "inverter-backup": Battery,
};

export function Solutions() {
  const navigate = useNavigate();
  const { solutionsData } = useSiteData();

  return (
    <section id="solutions" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div className="max-w-xl">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
              style={{ background: "#e6f6fa", color: "#049DBF" }}
            >
              Our Solutions
            </div>
            <h2 style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
              Energy Solutions Built for{" "}
              <span style={{ color: "#049DBF" }}>Your Needs</span>
            </h2>
          </div>
          <button
            onClick={() => navigate("/contact")}
            className="flex-shrink-0 flex items-center gap-2 text-sm font-bold transition-colors"
            style={{ color: "#049DBF", fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            Discuss requirements <ArrowRight size={15} />
          </button>
        </div>

        {/* Solutions grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutionsData.map((s) => {
            const Icon = SOLUTION_ICONS[s.id as SolutionId] ?? Sun;
            return (
              <div
                key={s.id}
                className="group relative rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => navigate(`/solutions/${s.id}`)}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={`${s.heroImage.split("?")[0]}?w=700&h=480&fit=crop&auto=format&q=80`}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(13,13,13,0.75) 0%, transparent 60%)" }}
                  />
                  {/* Tag */}
                  <div className="absolute top-3 left-3">
                    <span
                      className="text-xs font-bold px-2.5 py-1 rounded-full text-white"
                      style={{ background: s.accentColor }}
                    >
                      {s.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 bg-white">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: s.accentLight }}
                  >
                    <Icon size={18} style={{ color: s.accentColor }} />
                  </div>
                  <h3 className="mb-2" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                    {s.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">{s.tagline}</p>

                  {/* Key specs */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {s.specs.slice(0, 3).map((spec) => (
                      <span
                        key={spec.label}
                        className="text-xs font-semibold px-2.5 py-1 rounded-full"
                        style={{ background: "#f3f4f6", color: "#374151" }}
                      >
                        {spec.value}
                      </span>
                    ))}
                  </div>

                  <div
                    className="flex items-center gap-1.5 text-sm font-bold group-hover:gap-3 transition-all duration-300"
                    style={{ color: s.accentColor }}
                  >
                    Learn more <ArrowRight size={15} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View all CTA */}
        <div className="mt-10 text-center">
          <button
            onClick={() => navigate("/solutions")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold border-2 transition-all hover:bg-gray-50"
            style={{ borderColor: "#e5e7eb", color: "#374151", fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            View All Solutions <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
