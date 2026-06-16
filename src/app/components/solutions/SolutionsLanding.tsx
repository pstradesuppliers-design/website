import { ArrowRight, Sun, Zap, Droplets, Flame, Battery } from "lucide-react";
import { useNavigate } from "react-router";
import type { SolutionId } from "./solutionsData";
import { useSiteData } from "../../context/SiteDataContext";

function ConsultationButton() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/contact")}
      className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-white/15 border border-white/25 transition-all duration-200 hover:bg-white/25 self-start"
      style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
    >
      Get Free Consultation <ArrowRight size={15} />
    </button>
  );
}

const SOLUTION_ICONS: Record<SolutionId, React.ComponentType<{ size?: number; style?: React.CSSProperties }>> = {
  "on-grid-solar": Sun,
  "off-grid-solar": Zap,
  "solar-water-pumping": Droplets,
  "solar-water-heater": Flame,
  "inverter-backup": Battery,
};

interface SolutionsLandingProps {
  onSelectSolution: (id: SolutionId) => void;
}

export function SolutionsLanding({ onSelectSolution }: SolutionsLandingProps) {
  const { solutionsData: solutionsList } = useSiteData();
  return (
    <main className="bg-background text-foreground">

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section
        className="relative pt-36 pb-24 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0D0D0D 0%, #063d4a 60%, #0D0D0D 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=1600&h=600&fit=crop&auto=format)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(13,13,13,0.85) 0%, rgba(6,61,74,0.8) 100%)" }}
          aria-hidden="true"
        />
        {/* Decorative orbs */}
        <div
          className="absolute top-20 right-10 w-72 h-72 rounded-full opacity-10 blur-3xl"
          style={{ background: "var(--brand-primary)" }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-20 w-56 h-56 rounded-full opacity-10 blur-3xl"
          style={{ background: "var(--brand-green)" }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
            style={{
              background: "rgba(4,157,191,0.18)",
              color: "var(--brand-primary)",
              border: "1px solid rgba(4,157,191,0.3)",
              fontFamily: "Plus Jakarta Sans, sans-serif",
            }}
          >
            <Sun size={14} />
            Renewable Energy Solutions
          </div>

          <h1 className="text-white mb-6" style={{ lineHeight: 1.1 }}>
            Clean Energy Solutions for{" "}
            <span style={{ color: "var(--brand-primary)" }}>Every Need</span>
          </h1>

          <p
            className="text-xl max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.8 }}
          >
            From grid-tied solar to off-grid installations, solar pumping to
            battery backup — P.S. Trade &amp; Suppliers delivers the complete
            spectrum of renewable energy solutions across Nepal.
          </p>
        </div>
      </section>

      {/* ── Solutions Grid ────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-14">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-2"
              style={{ color: "var(--muted-foreground)", fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              5 specialist solutions
            </p>
            <h2>Choose Your Energy Solution</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutionsList.map((s, idx) => {
              const Icon = SOLUTION_ICONS[s.id as SolutionId] ?? Sun;
              const isWide = idx === 0; // first card spans full width on large screens
              return (
                <button
                  key={s.id}
                  onClick={() => onSelectSolution(s.id as SolutionId)}
                  className={`group text-left rounded-3xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 ${isWide ? "lg:col-span-2" : ""}`}
                  style={{ borderColor: "var(--border)", background: "var(--card)" }}
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={`${s.heroImage.split("?")[0]}?w=800&h=400&fit=crop&auto=format`}
                      alt={s.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(to top, rgba(13,13,13,0.72) 0%, transparent 55%)" }}
                    />
                    {/* Tag badge */}
                    <span
                      className="absolute top-4 left-4 text-xs font-bold px-2.5 py-1 rounded-full text-white"
                      style={{ background: s.accentColor }}
                    >
                      {s.tag}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-7">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: s.accentLight }}
                    >
                      <Icon size={20} style={{ color: s.accentColor }} />
                    </div>
                    <h3
                      className="mb-2"
                      style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "1.2rem" }}
                    >
                      {s.title}
                    </h3>
                    <p
                      className="text-sm mb-5 line-clamp-2"
                      style={{ color: "var(--muted-foreground)", lineHeight: 1.75 }}
                    >
                      {s.description}
                    </p>
                    <div
                      className="flex items-center gap-1.5 text-sm font-bold transition-all duration-300 group-hover:gap-3"
                      style={{ color: s.accentColor, fontFamily: "Plus Jakarta Sans, sans-serif" }}
                    >
                      Learn more <ArrowRight size={15} />
                    </div>
                  </div>
                </button>
              );
            })}

            {/* CTA card */}
            <div
              className="rounded-3xl p-8 flex flex-col justify-between"
              style={{
                background: "linear-gradient(135deg, var(--brand-primary) 0%, #026b82 100%)",
              }}
            >
              <div>
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "rgba(255,255,255,0.15)" }}
                >
                  <Zap size={20} className="text-white" />
                </div>
                <h3
                  className="text-white mb-3"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "1.2rem" }}
                >
                  Not Sure Which Solution Is Right For You?
                </h3>
                <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.75 }}>
                  Our engineers will assess your site, analyse your energy needs,
                  and recommend the best solution for your budget.
                </p>
              </div>
              <ConsultationButton />
            </div>
          </div>
        </div>
      </section>

      {/* ── Why PS Trade ──────────────────────────────────────────── */}
      <section className="py-20 lg:py-24" style={{ background: "var(--muted)" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Why Choose P.S. Trade &amp; Suppliers?</h2>
            <p className="max-w-xl mx-auto" style={{ color: "var(--muted-foreground)" }}>
              A single, trusted partner for every renewable energy need across Nepal's seven provinces.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { num: "500+", label: "Projects Completed", sub: "Across Nepal" },
              { num: "7", label: "Provinces Covered", sub: "Nationwide reach" },
              { num: "15+", label: "Years Experience", sub: "Since 2009" },
              { num: "98%", label: "Satisfaction Rate", sub: "Verified reviews" },
            ].map((stat) => (
              <div
                key={stat.num}
                className="rounded-2xl p-7 text-center border"
                style={{ background: "var(--card)", borderColor: "var(--border)" }}
              >
                <div
                  className="text-4xl font-extrabold mb-1"
                  style={{ color: "var(--brand-primary)", fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  {stat.num}
                </div>
                <div
                  className="font-semibold mb-0.5"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  {stat.label}
                </div>
                <div className="text-xs" style={{ color: "var(--muted-foreground)" }}>
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
