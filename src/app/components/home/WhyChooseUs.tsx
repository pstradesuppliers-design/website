import { ShieldCheck, Zap, Users, Globe, Wrench, Award } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Nepal Engineering Council Registered",
    desc: "Registered Member of the Nepal Engineering Council ('A' Electrical) — every installation meets professional licensing requirements.",
    color: "#049DBF",
    bg: "#e6f6fa",
  },
  {
    icon: Globe,
    title: "Proven Nationwide Footprint",
    desc: "300+ solar irrigation and drinking water sites delivered for AEPC across all 7 provinces of Nepal.",
    color: "#84BF49",
    bg: "#f0f7e7",
  },
  {
    icon: Users,
    title: "Trusted by Global Development Partners",
    desc: "Project experience with AEPC, UNOPS, ICIMOD, GIZ, Helvetas, WWF, and Renewable World.",
    color: "#F27127",
    bg: "#fef0e6",
  },
  {
    icon: Zap,
    title: "Full-Cycle Delivery",
    desc: "Procurement, engineering, consulting, and asset management under one company — from feasibility to long-term asset management.",
    color: "#049DBF",
    bg: "#e6f6fa",
  },
  {
    icon: Wrench,
    title: "Engineering Depth",
    desc: "A multidisciplinary team with combined decades of experience in utility-scale solar, rural electrification, and solar water pumping.",
    color: "#84BF49",
    bg: "#f0f7e7",
  },
  {
    icon: Award,
    title: "Quality & Sustainability",
    desc: "We prioritise eco-friendly materials and certified suppliers — delivering high-quality, sustainable energy solutions tailored to each client.",
    color: "#F27127",
    bg: "#fef0e6",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-28" style={{ background: "#f9fafb" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
            style={{ background: "#e6f6fa", color: "#049DBF" }}
          >
            Why Choose Us
          </div>
          <h2 style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
            The P.S. Trade{" "}
            <span style={{ color: "#049DBF" }}>Difference</span>
          </h2>
          <p className="text-gray-500 mt-4 leading-relaxed">
            P.S. Trade and Suppliers blends reliable commodity trading with full-cycle solar EPC delivery — under one roof, across all 7 provinces of Nepal.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map(({ icon: Icon, title, desc, color, bg }, i) => (
            <div
              key={title}
              className="group bg-white rounded-2xl p-6 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-default"
              style={{ borderColor: "#e5e7eb" }}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ background: bg }}
                >
                  <Icon size={22} style={{ color }} />
                </div>
                <span
                  className="text-4xl font-black"
                  style={{ color: "#e5e7eb", fontFamily: "Plus Jakarta Sans, sans-serif", lineHeight: 1 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h4 className="mb-2" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              <div
                className="mt-4 h-0.5 rounded-full w-0 group-hover:w-full transition-all duration-500"
                style={{ background: color }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
