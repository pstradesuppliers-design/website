import { ArrowRight, Lightbulb, Package, HardHat, Activity } from "lucide-react";
import { useNavigate } from "react-router";
import type { ServiceId } from "./servicesData";
import { useSiteData } from "../../context/SiteDataContext";

const SERVICE_ICONS: Record<ServiceId, React.ComponentType<{ size?: number; style?: React.CSSProperties }>> = {
  consulting: Lightbulb,
  procurement: Package,
  engineering: HardHat,
  "asset-management": Activity,
};

interface ServicesLandingProps {
  onSelectService: (id: ServiceId) => void;
}

export function ServicesLanding({ onSelectService }: ServicesLandingProps) {
  const navigate = useNavigate();
  const { servicesData: servicesList } = useSiteData();
  return (
    <main className="bg-background text-foreground">

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section
        className="relative pt-36 pb-24 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0D0D0D 0%, #1a0a2e 50%, #0a1a33 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1668097613572-40b7c11c8727?w=1600&h=600&fit=crop&auto=format)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(13,13,13,0.88) 0%, rgba(13,13,13,0.75) 100%)" }}
          aria-hidden="true"
        />
        <div
          className="absolute top-16 right-16 w-80 h-80 rounded-full opacity-10 blur-3xl"
          style={{ background: "var(--brand-green)" }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-10 w-60 h-60 rounded-full opacity-10 blur-3xl"
          style={{ background: "var(--brand-primary)" }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
            style={{
              background: "rgba(132,191,73,0.18)",
              color: "var(--brand-green)",
              border: "1px solid rgba(132,191,73,0.3)",
              fontFamily: "Plus Jakarta Sans, sans-serif",
            }}
          >
            <HardHat size={14} />
            Professional Services
          </div>

          <h1 className="text-white mb-6" style={{ lineHeight: 1.1 }}>
            Expert Services Across the{" "}
            <span style={{ color: "var(--brand-green)" }}>Full Project Lifecycle</span>
          </h1>

          <p
            className="text-xl max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.8 }}
          >
            From initial energy consulting and equipment procurement through to
            precision engineering and long-term asset management — P.S. Trade
            &amp; Suppliers is your end-to-end partner across Nepal.
          </p>
        </div>
      </section>

      {/* ── Services Grid ─────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-14">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-2"
              style={{ color: "var(--muted-foreground)", fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              4 specialist services
            </p>
            <h2>What We Do</h2>
          </div>

          {/* 2×2 grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {servicesList.map((s) => {
              const Icon = SERVICE_ICONS[s.id as ServiceId] ?? Lightbulb;
              return (
                <button
                  key={s.id}
                  onClick={() => onSelectService(s.id as ServiceId)}
                  className="group text-left rounded-3xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none"
                  style={{ borderColor: "var(--border)", background: "var(--card)" }}
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={`${s.heroImage.split("?")[0]}?w=800&h=420&fit=crop&auto=format`}
                      alt={s.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(to top, rgba(13,13,13,0.7) 0%, transparent 55%)" }}
                    />
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
                      style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "1.3rem" }}
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
          </div>

          {/* Bottom CTA strip */}
          <div
            className="rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6"
            style={{
              background: "linear-gradient(135deg, var(--brand-primary) 0%, #026b82 100%)",
            }}
          >
            <div>
              <h3
                className="text-white mb-2"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                Need a Combined Service Package?
              </h3>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
                Many clients engage us for consulting, procurement, and
                engineering together — as a fully managed project.
              </p>
            </div>
            <button
              onClick={() => navigate("/contact")}
              className="flex-shrink-0 flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold transition-all duration-200 hover:scale-105 bg-white"
              style={{
                color: "var(--brand-primary)",
                fontFamily: "Plus Jakarta Sans, sans-serif",
              }}
            >
              Get a Free Consultation <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ── Why PS Trade ──────────────────────────────────────────── */}
      <section className="py-20 lg:py-24" style={{ background: "var(--muted)" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4"
                style={{
                  background: "var(--brand-primary-light)",
                  color: "var(--brand-primary)",
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                }}
              >
                One Trusted Partner
              </div>
              <h2 className="mb-6">The Advantage of a Single Expert Partner</h2>
              <p className="mb-4" style={{ color: "var(--muted-foreground)", lineHeight: 1.8 }}>
                Managing multiple contractors — a consultant, a supplier, an
                installer, and a maintenance provider — is costly, complex, and
                creates accountability gaps. When something goes wrong, each
                contractor points to another.
              </p>
              <p className="mb-8" style={{ color: "var(--muted-foreground)", lineHeight: 1.8 }}>
                P.S. Trade &amp; Suppliers offers all four services under one
                roof, with one contract, one point of contact, and complete
                accountability from first consultation to long-term asset care.
              </p>
              <div className="space-y-3">
                {[
                  "One contract, one point of accountability",
                  "Seamless handover between service phases",
                  "In-house engineers — no sub-contractor risk",
                  "Nationwide presence across all 7 provinces",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: "var(--brand-primary)" }}
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "500+", label: "Projects Delivered", sub: "Across Nepal" },
                { num: "80+", label: "Team Members", sub: "Engineers & technicians" },
                { num: "15+", label: "Years Experience", sub: "Since 2009" },
                { num: "7", label: "Provinces Covered", sub: "Full national reach" },
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
                  <div className="font-semibold mb-0.5 text-sm" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                    {stat.label}
                  </div>
                  <div className="text-xs" style={{ color: "var(--muted-foreground)" }}>
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
