import { ArrowRight, CheckCircle, Lightbulb, Package, HardHat, Activity } from "lucide-react";
import { useNavigate } from "react-router";
import { useSiteData } from "../../context/SiteDataContext";
import type { ServiceId } from "../services/servicesData";

const SERVICE_ICONS: Record<ServiceId, React.ComponentType<{ size?: number; style?: React.CSSProperties }>> = {
  "consulting": Lightbulb,
  "procurement": Package,
  "engineering": HardHat,
  "asset-management": Activity,
};

export function Services() {
  const navigate = useNavigate();
  const { servicesData } = useSiteData();

  return (
    <section id="services" className="py-20 sm:py-28" style={{ background: "#0D0D0D" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div className="max-w-xl">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
              style={{ background: "rgba(4,157,191,0.15)", color: "#049DBF", border: "1px solid rgba(4,157,191,0.3)" }}
            >
              Our Services
            </div>
            <h2 className="text-white" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
              Everything You Need,{" "}
              <span style={{ color: "#049DBF" }}>Under One Roof</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-xs">
            From the first site visit to decades of monitoring  we're with you at every step.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {servicesData.map((service, idx) => {
            const Icon = SERVICE_ICONS[service.id as ServiceId] ?? Lightbulb;
            const number = String(idx + 1).padStart(2, "0");
            return (
              <div
                key={service.id}
                className="group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                style={{ background: "#1a1a1a", border: "1px solid rgba(255,255,255,0.06)" }}
                onClick={() => navigate(`/services/${service.id}`)}
              >
                {/* Number + Icon */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: service.accentLight }}
                  >
                    <Icon size={22} style={{ color: service.accentColor }} />
                  </div>
                  <span
                    className="text-3xl font-black"
                    style={{ color: "rgba(255,255,255,0.06)", fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    {number}
                  </span>
                </div>

                <h4 className="text-white mb-2" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                  {service.title}
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed mb-5">{service.tagline}</p>

                {/* Key benefits */}
                <ul className="space-y-2 mb-6">
                  {service.benefits.slice(0, 4).map((b) => (
                    <li key={b.title} className="flex items-start gap-2.5">
                      <CheckCircle size={13} className="flex-shrink-0 mt-0.5" style={{ color: service.accentColor }} />
                      <span className="text-xs text-gray-400 leading-relaxed">{b.title}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div
                  className="flex items-center gap-1.5 text-xs font-bold group-hover:gap-3 transition-all duration-300"
                  style={{ color: service.accentColor }}
                >
                  Learn more <ArrowRight size={13} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate("/contact")}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all hover:scale-105 active:scale-95"
            style={{ background: "#F27127", fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            Discuss Your Project <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
