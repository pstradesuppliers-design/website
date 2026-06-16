import { useState } from "react";
import { useNavigate } from "react-router";
import {
  Sun,
  Target,
  Eye,
  Zap,
  Shield,
  Users,
  Leaf,
  Award,
  TrendingUp,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle,
  Globe,
  Handshake,
  HeartHandshake,
  Star,
  Lightbulb,
} from "lucide-react";

// ── Province Coverage Data ────────────────────────────────────────────
const provinces = [
  {
    id: 1,
    name: "Koshi Province",
    capital: "Biratnagar",
    districts: 14,
    status: "active",
    highlight: "Eastern Himalayan solar projects",
  },
  {
    id: 2,
    name: "Madhesh Province",
    capital: "Janakpur",
    districts: 8,
    status: "active",
    highlight: "Terai plains energy distribution",
  },
  {
    id: 3,
    name: "Bagmati Province",
    capital: "Hetauda",
    districts: 13,
    status: "active",
    highlight: "HQ & Kathmandu Valley operations",
  },
  {
    id: 4,
    name: "Gandaki Province",
    capital: "Pokhara",
    districts: 11,
    status: "active",
    highlight: "Annapurna region installations",
  },
  {
    id: 5,
    name: "Lumbini Province",
    capital: "Butwal",
    districts: 12,
    status: "active",
    highlight: "Western Terai rural electrification",
  },
  {
    id: 6,
    name: "Karnali Province",
    capital: "Birendranagar",
    districts: 10,
    status: "expanding",
    highlight: "Remote mountain community access",
  },
  {
    id: 7,
    name: "Sudurpashchim Province",
    capital: "Dhangadhi",
    districts: 9,
    status: "expanding",
    highlight: "Far-west solar expansion",
  },
];

// ── Values Data ───────────────────────────────────────────────────────
const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We operate with complete transparency — honest pricing, clear timelines, and no hidden costs. Our clients always know exactly what they're getting.",
    color: "var(--brand-primary)",
    bg: "var(--brand-primary-light)",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "Every solution we deliver reduces Nepal's carbon footprint. Sustainability isn't a feature — it's the foundation of everything we build.",
    color: "var(--brand-green)",
    bg: "var(--brand-green-light)",
  },
  {
    icon: Users,
    title: "Community First",
    description:
      "From urban rooftop systems to remote mountain villages, we believe clean energy is a right for all Nepalis — not just those near the grid.",
    color: "var(--brand-secondary)",
    bg: "var(--brand-secondary-light)",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We use only certified, premium-grade equipment. Our installations meet international standards and are backed by comprehensive warranties.",
    color: "#8b5cf6",
    bg: "#f5f3ff",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description:
      "We continuously adopt emerging renewable technologies — from smart inverters to hybrid battery systems — keeping our clients ahead of the curve.",
    color: "var(--brand-yellow-dark)",
    bg: "#fefce8",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description:
      "We build long-term relationships. Our after-sales support, maintenance, and monitoring ensure our clients get lasting value from every installation.",
    color: "#0891b2",
    bg: "#ecfeff",
  },
];

// ── Differentiators ───────────────────────────────────────────────────
const differentiators = [
  {
    icon: Zap,
    title: "Full-Cycle Delivery",
    text: "Procurement, engineering, consulting, and asset management under one company — covering the full project lifecycle from sourcing to long-term performance management.",
  },
  {
    icon: Globe,
    title: "Proven Nationwide Footprint",
    text: "300+ solar irrigation and drinking water sites delivered for AEPC across all 7 provinces of Nepal.",
  },
  {
    icon: HeartHandshake,
    title: "Trusted by Global Development Partners",
    text: "Project experience with AEPC, UNOPS, ICIMOD, GIZ, Helvetas, WWF, and Renewable World.",
  },
  {
    icon: CheckCircle,
    title: "Regulatory Compliance",
    text: "Registered Member of the Nepal Engineering Council ('A' Electrical) — meeting professional licensing requirements on every project.",
  },
  {
    icon: Lightbulb,
    title: "Engineering Depth",
    text: "A multidisciplinary team with combined decades of experience in utility-scale solar, rural electrification, and solar water pumping.",
  },
  {
    icon: Star,
    title: "Quality & Sustainability",
    text: "We prioritise eco-friendly materials and vetted global suppliers — delivering high-quality solutions tailored to each client's specific needs.",
  },
];

// ── Stats ─────────────────────────────────────────────────────────────
const stats = [
  { value: "300+", label: "Solar Sites Deployed" },
  { value: "5.4 MW+", label: "Utility-Scale Engineered" },
  { value: "200+", label: "Water Projects" },
  { value: "18+", label: "Years Combined Experience" },
];

export function AboutUs() {
  const [activeProvince, setActiveProvince] = useState<number | null>(null);
  const navigate = useNavigate();

  const scrollTo = (href: string) => {
    if (href === "#contact-cta") { navigate("/contact"); return; }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="bg-background text-foreground">
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[70vh] flex items-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0D0D0D 0%, #0a2a33 50%, #063d4a 100%)",
        }}
      >
        {/* Background image overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1682760344243-45faeb1b9736?w=1600&h=900&fit=crop&auto=format)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(13,13,13,0.9) 40%, rgba(4,157,191,0.15) 100%)",
          }}
          aria-hidden="true"
        />

        {/* Decorative orbs */}
        <div
          className="absolute top-20 right-20 w-64 h-64 rounded-full opacity-10 blur-3xl"
          style={{ background: "var(--brand-primary)" }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-10 left-10 w-48 h-48 rounded-full opacity-10 blur-3xl"
          style={{ background: "var(--brand-green)" }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Badge */}
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
              Powering Nepal's Clean Future
            </div>

            <h1
              className="mb-6"
              style={{ color: "#ffffff", lineHeight: 1.1 }}
            >
              About{" "}
              <span style={{ color: "var(--brand-primary)" }}>
                P.S. Trade
              </span>{" "}
              &amp;{" "}
              <span style={{ color: "var(--brand-green)" }}>Suppliers</span>
            </h1>

            <p
              className="text-lg mb-8 max-w-lg"
              style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.8 }}
            >
              P.S. Trade and Suppliers Pvt. Ltd. is a Kathmandu-based solar EPC and trading company committed to delivering superior goods and energy solutions across Nepal — combining reliable commodity trading with end-to-end renewable energy delivery.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("#contact-cta")}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
                style={{
                  background: "var(--brand-secondary)",
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                }}
              >
                Get a Free Quote <ArrowRight size={16} />
              </button>
              <button
                onClick={() => scrollTo("#coverage")}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-200 hover:scale-105"
                style={{
                  border: "1.5px solid rgba(255,255,255,0.3)",
                  color: "#ffffff",
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                }}
              >
                Our Coverage <MapPin size={16} />
              </button>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl p-6 text-center"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div
                  className="text-4xl font-extrabold mb-1"
                  style={{
                    color: "var(--brand-primary)",
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                  }}
                >
                  {s.value}
                </div>
                <div
                  className="text-sm"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Company Overview ──────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image stack */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&auto=format"
                  alt="P.S. Trade & Suppliers team collaborating on renewable energy projects"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating accent card */}
              <div
                className="absolute -bottom-6 -right-6 rounded-2xl p-5 shadow-xl"
                style={{ background: "var(--brand-primary)", maxWidth: 220 }}
              >
                <Sun size={28} className="text-white mb-2" />
                <div
                  className="font-bold text-white text-sm"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  Clean Energy for Every Nepali
                </div>
                <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.75)" }}>
                  Solar · Wind · Hydro · Battery
                </div>
              </div>
            </div>

            {/* Text */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4"
                style={{
                  background: "var(--brand-primary-light)",
                  color: "var(--brand-primary)",
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                }}
              >
                <Sun size={12} /> Company Overview
              </div>
              <h2 className="mb-5">Who We Are</h2>
              <p className="mb-4" style={{ color: "var(--muted-foreground)" }}>
                P.S. Trade and Suppliers Pvt. Ltd. is a Kathmandu-based business organisation committed to delivering superior goods and energy solutions across Nepal. As a trusted dealer in the sale and purchase of commodities, and a registered solar EPC company, we combine reliable commodity trading with end-to-end renewable energy delivery — from feasibility study to installation to long-term asset management.
              </p>
              <p className="mb-6" style={{ color: "var(--muted-foreground)" }}>
                Our work spans nationwide solar irrigation infrastructure with the Alternative Energy Promotion Centre (AEPC), clean energy partnerships with INGOs and NGOs such as Practical Action, WWF, SABAL Nepal, RERL, Helvetas, Renewable World, and ICIMOD, and turnkey on-grid/off-grid installations for hotels, hospitals, schools, and government organisations.
              </p>
              <ul className="space-y-3">
                {[
                  "Registered Member of the Nepal Engineering Council ('A' Electrical)",
                  "Extensive supplier network delivering certified, eco-friendly solar components",
                  "Nationwide reach across Koshi, Madhesh, Bagmati, Gandaki, Lumbini, Karnali & Sudurpashchim",
                  "P.S. Trade and Suppliers — your go-to partner for quality, reliability, and sustainable energy in Nepal",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle
                      size={18}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: "var(--brand-green)" }}
                    />
                    <span className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ──────────────────────────────────────── */}
      <section
        className="py-20 lg:py-28"
        style={{ background: "var(--muted)" }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4"
              style={{
                background: "var(--brand-primary-light)",
                color: "var(--brand-primary)",
                fontFamily: "Plus Jakarta Sans, sans-serif",
              }}
            >
              <Zap size={12} /> Purpose &amp; Direction
            </div>
            <h2>Our Mission &amp; Vision</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div
              className="rounded-3xl p-10 relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, var(--brand-primary) 0%, #037a96 100%)",
              }}
            >
              <div
                className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10"
                style={{
                  background: "#ffffff",
                  transform: "translate(30%, -30%)",
                }}
                aria-hidden="true"
              />
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: "rgba(255,255,255,0.15)" }}
              >
                <Target size={28} className="text-white" />
              </div>
              <h3 className="text-white mb-4">Mission</h3>
              <p style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.8 }}>
                To deliver high-quality products and services to our clients, fostering reliable partnerships through innovation, efficiency, and exceptional customer service, while contributing to sustainable growth and community development.
              </p>
            </div>

            {/* Vision */}
            <div
              className="rounded-3xl p-10 relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, var(--brand-green) 0%, #4a8a28 100%)",
              }}
            >
              <div
                className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10"
                style={{
                  background: "#ffffff",
                  transform: "translate(30%, -30%)",
                }}
                aria-hidden="true"
              />
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: "rgba(255,255,255,0.15)" }}
              >
                <Eye size={28} className="text-white" />
              </div>
              <h3 className="text-white mb-4">Vision</h3>
              <p style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.8 }}>
                To be a leading and trusted supplier, recognised for our commitment to excellence, sustainability, and innovation, driving long-term growth while positively impacting the communities we serve across Nepal and South Asia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What Makes Us Different ───────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4"
              style={{
                background: "var(--brand-secondary-light)",
                color: "var(--brand-secondary)",
                fontFamily: "Plus Jakarta Sans, sans-serif",
              }}
            >
              <Star size={12} /> Our Edge
            </div>
            <h2 className="mb-4">What Makes Us Different</h2>
            <p
              className="max-w-xl mx-auto"
              style={{ color: "var(--muted-foreground)" }}
            >
              Dozens of companies supply solar panels. We deliver complete
              energy transformations — backed by expertise, local presence,
              and a genuine commitment to Nepal's future.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((d) => (
              <div
                key={d.title}
                className="group rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{
                  background: "var(--card)",
                  borderColor: "var(--border)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: "var(--brand-primary-light)",
                  }}
                >
                  <d.icon size={22} style={{ color: "var(--brand-primary)" }} />
                </div>
                <h4
                  className="mb-3"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  {d.title}
                </h4>
                <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                  {d.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Company Values ────────────────────────────────────────── */}
      <section
        className="py-20 lg:py-28"
        style={{
          background:
            "linear-gradient(180deg, #0D0D0D 0%, #0a2a33 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4"
              style={{
                background: "rgba(132,191,73,0.15)",
                color: "var(--brand-green)",
                border: "1px solid rgba(132,191,73,0.25)",
                fontFamily: "Plus Jakarta Sans, sans-serif",
              }}
            >
              <HeartHandshake size={12} /> Core Principles
            </div>
            <h2 style={{ color: "#ffffff" }} className="mb-4">
              Our Company Values
            </h2>
            <p style={{ color: "rgba(255,255,255,0.6)" }} className="max-w-xl mx-auto">
              These values guide every project we undertake, every
              relationship we build, and every decision we make as an
              organisation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: v.bg }}
                >
                  <v.icon size={22} style={{ color: v.color }} />
                </div>
                <h4
                  className="mb-3"
                  style={{
                    color: "#ffffff",
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                  }}
                >
                  {v.title}
                </h4>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.75 }}>
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Province Coverage ─────────────────────────────────────── */}
      <section id="coverage" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4"
              style={{
                background: "var(--brand-primary-light)",
                color: "var(--brand-primary)",
                fontFamily: "Plus Jakarta Sans, sans-serif",
              }}
            >
              <MapPin size={12} /> National Presence
            </div>
            <h2 className="mb-4">Province Coverage Across Nepal</h2>
            <p
              className="max-w-xl mx-auto"
              style={{ color: "var(--muted-foreground)" }}
            >
              We are proud to serve all seven provinces of Nepal — from the
              high Himalayas to the Terai plains — with dedicated field teams
              and local expertise in every region.
            </p>
          </div>

          {/* Nepal schematic map */}
          <div className="mb-10 rounded-3xl overflow-hidden shadow-xl relative">
            <img
              src="https://images.unsplash.com/photo-1731772013413-eb9bc3a3f312?w=1400&h=500&fit=crop&auto=format"
              alt="Power infrastructure across Nepal's mountain and valley landscape"
              className="w-full h-64 object-cover"
            />
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ background: "rgba(13,13,13,0.55)" }}
            >
              <div className="text-center text-white">
                <MapPin size={36} className="mx-auto mb-2 opacity-90" />
                <div
                  className="text-xl font-bold"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  Serving All 7 Provinces of Nepal
                </div>
                <div className="text-sm mt-1 opacity-75">
                  Active operations · Remote installations · Community projects
                </div>
              </div>
            </div>
          </div>

          {/* Province cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {provinces.map((p) => (
              <button
                key={p.id}
                onClick={() =>
                  setActiveProvince(activeProvince === p.id ? null : p.id)
                }
                className="text-left rounded-2xl p-5 border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                style={{
                  background:
                    activeProvince === p.id
                      ? "var(--brand-primary-light)"
                      : "var(--card)",
                  borderColor:
                    activeProvince === p.id
                      ? "var(--brand-primary)"
                      : "var(--border)",
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm"
                    style={{
                      background:
                        p.status === "active"
                          ? "var(--brand-primary)"
                          : "var(--brand-secondary)",
                      color: "#ffffff",
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                    }}
                  >
                    P{p.id}
                  </div>
                  <span
                    className="text-xs font-semibold px-2 py-0.5 rounded-full"
                    style={{
                      background:
                        p.status === "active"
                          ? "var(--brand-green-light)"
                          : "var(--brand-secondary-light)",
                      color:
                        p.status === "active"
                          ? "var(--brand-green-dark)"
                          : "var(--brand-secondary-dark)",
                    }}
                  >
                    {p.status === "active" ? "Active" : "Expanding"}
                  </span>
                </div>
                <div
                  className="font-bold mb-0.5 text-sm"
                  style={{
                    color: "var(--foreground)",
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                  }}
                >
                  {p.name}
                </div>
                <div
                  className="text-xs mb-3"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Capital: {p.capital} · {p.districts} districts
                </div>

                {activeProvince === p.id && (
                  <div
                    className="text-xs mt-2 pt-3 border-t"
                    style={{
                      color: "var(--brand-primary)",
                      borderColor: "var(--brand-primary)",
                      opacity: 0.7,
                    }}
                  >
                    {p.highlight}
                  </div>
                )}
              </button>
            ))}

            {/* Legend card */}
            <div
              className="rounded-2xl p-5 border flex flex-col justify-center"
              style={{
                background: "var(--muted)",
                borderColor: "var(--border)",
              }}
            >
              <div className="font-bold text-sm mb-4" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                Coverage Status
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ background: "var(--brand-green)" }}
                  />
                  <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>
                    Active — full operations
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ background: "var(--brand-secondary)" }}
                  />
                  <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>
                    Expanding — growing presence
                  </span>
                </div>
              </div>
              <div
                className="mt-5 text-xs"
                style={{ color: "var(--muted-foreground)" }}
              >
                Click any province card to see regional highlights.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Call to Action ────────────────────────────────────────── */}
      <section
        id="about-cta"
        className="py-20 lg:py-28 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, var(--brand-primary) 0%, #026b82 60%, #04313d 100%)",
        }}
      >
        {/* Decorative elements */}
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: "var(--brand-green)", transform: "translate(30%, -30%)" }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-10 blur-3xl"
          style={{ background: "#ffffff", transform: "translate(-30%, 30%)" }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
            style={{
              background: "rgba(255,255,255,0.15)",
              color: "#ffffff",
              border: "1px solid rgba(255,255,255,0.25)",
              fontFamily: "Plus Jakarta Sans, sans-serif",
            }}
          >
            <Zap size={14} />
            Ready to Go Solar?
          </div>

          <h2 className="text-white mb-5">
            Start Your Clean Energy Journey Today
          </h2>
          <p
            className="text-lg mb-10 max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.8 }}
          >
            Whether you're a homeowner, a business owner, or a municipality
            looking to power your community with renewable energy — our team
            is ready to design a solution tailored to your needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <button
              onClick={() => scrollTo("#contact-cta")}
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
              style={{
                background: "var(--brand-secondary)",
                fontFamily: "Plus Jakarta Sans, sans-serif",
              }}
            >
              Get a Free Quote <ArrowRight size={18} />
            </button>
            <a
              href="tel:+97715249406"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold transition-all duration-200 hover:scale-105"
              style={{
                border: "2px solid rgba(255,255,255,0.4)",
                color: "#ffffff",
                fontFamily: "Plus Jakarta Sans, sans-serif",
              }}
            >
              <Phone size={18} /> Call Us Now
            </a>
          </div>

          {/* Contact pills */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+97715249406"
              className="flex items-center gap-2 text-sm"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              <Phone size={14} />
              +977-1-5249406
            </a>
            <span
              className="hidden sm:block"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              |
            </span>
            <a
              href="mailto:pstradesuppliers9@gmail.com"
              className="flex items-center gap-2 text-sm"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              <Mail size={14} />
              pstradesuppliers9@gmail.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
