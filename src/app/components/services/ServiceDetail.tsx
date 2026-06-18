import { useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Phone,
  Mail,
  Star,
  MapPin,
  Target,
  TrendingUp,
  Shield,
  FileText,
  BarChart2,
  Users,
  Award,
  Package,
  DollarSign,
  CheckSquare,
  Truck,
  Cpu,
  HardHat,
  Wind,
  Zap,
  Monitor,
  ClipboardCheck,
  Activity,
  Wrench,
  AlertTriangle,
} from "lucide-react";
import type { ServiceData } from "./servicesData";

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; style?: React.CSSProperties; className?: string }>> = {
  Target, TrendingUp, Shield, FileText, BarChart2, Users,
  Award, Package, DollarSign, CheckSquare, Truck,
  Cpu, HardHat, Wind, Zap, Monitor, ClipboardCheck,
  Activity, Wrench, AlertTriangle,
};

interface ServiceDetailProps {
  service: ServiceData;
  onBack: () => void;
  onContact: () => void;
}

export function ServiceDetail({ service, onBack, onContact }: ServiceDetailProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const accent = { color: service.accentColor };
  const accentBg = { background: service.accentColor };
  const accentLightBg = { background: service.accentLight };

  return (
    <main className="bg-background text-foreground">

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-gray-900"
          style={{
            backgroundImage: `url(${service.heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(13,13,13,0.95) 30%, rgba(13,13,13,0.5) 70%, rgba(13,13,13,0.2) 100%)",
          }}
          aria-hidden="true"
        />

        <button
          onClick={onBack}
          className="absolute top-24 left-6 sm:left-10 z-10 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all hover:gap-3"
          style={{
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.2)",
            color: "#ffffff",
            fontFamily: "Plus Jakarta Sans, sans-serif",
            backdropFilter: "blur(8px)",
          }}
        >
          <ArrowLeft size={15} /> All Services
        </button>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 pb-16 pt-40">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-5"
            style={{ ...accentLightBg, ...accent, fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            <Star size={11} />
            {service.tag}
          </div>

          <h1 className="text-white mb-4 max-w-3xl" style={{ lineHeight: 1.1 }}>
            {service.title}
          </h1>
          <p
            className="text-xl max-w-2xl mb-8"
            style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.7 }}
          >
            {service.tagline}
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={onContact}
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
              style={{ ...accentBg, fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              Request a Quote <ArrowRight size={16} />
            </button>
            <a
              href="tel:+977-1-0000000"
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold transition-all duration-200 hover:scale-105"
              style={{
                border: "1.5px solid rgba(255,255,255,0.35)",
                color: "#ffffff",
                fontFamily: "Plus Jakarta Sans, sans-serif",
              }}
            >
              <Phone size={16} /> Call Us
            </a>
          </div>
        </div>
      </section>

      {/* ── Deliverables strip ────────────────────────────────────── */}
      <div style={accentBg}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-5">
          <div className="flex flex-wrap gap-x-8 gap-y-3 justify-center sm:justify-start">
            {service.deliverables.map((d) => (
              <div key={d.label} className="flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: "rgba(255,255,255,0.65)" }}>
                  {d.label}
                </span>
                <span className="text-sm font-bold text-white" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                  {d.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Overview ──────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4"
              style={{ ...accentLightBg, ...accent, fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              Overview
            </div>
            <h2 className="mb-6">About Our {service.shortTitle} Service</h2>
            {service.overview.map((para, i) => (
              <p
                key={i}
                className="mb-4 last:mb-0"
                style={{ color: "var(--muted-foreground)", lineHeight: 1.8 }}
              >
                {para}
              </p>
            ))}
          </div>

          {/* Deliverable cards */}
          <div className="grid grid-cols-2 gap-4">
            {service.deliverables.map((d) => (
              <div
                key={d.label}
                className="rounded-2xl p-5 border"
                style={{ background: "var(--card)", borderColor: "var(--border)" }}
              >
                <div className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: "var(--muted-foreground)" }}>
                  {d.label}
                </div>
                <div className="font-bold" style={{ ...accent, fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                  {d.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits ──────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24" style={{ background: "var(--muted)" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-14">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4"
              style={{ ...accentLightBg, ...accent, fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              Key Benefits
            </div>
            <h2 className="mb-4">Why Work With Us?</h2>
            <p className="max-w-xl mx-auto" style={{ color: "var(--muted-foreground)" }}>
              What sets our {service.shortTitle.toLowerCase()} service apart  in quality, reliability, and long-term value.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((b) => {
              const Icon = ICON_MAP[b.icon] ?? Star;
              return (
                <div
                  key={b.title}
                  className="group rounded-2xl p-7 border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={accentLightBg}>
                    <Icon size={22} style={accent} />
                  </div>
                  <h4 className="mb-3" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                    {b.title}
                  </h4>
                  <p className="text-sm" style={{ color: "var(--muted-foreground)", lineHeight: 1.75 }}>
                    {b.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Process ───────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-14">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4"
              style={{ ...accentLightBg, ...accent, fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              How We Work
            </div>
            <h2 className="mb-4">Our Engagement Process</h2>
            <p className="max-w-xl mx-auto" style={{ color: "var(--muted-foreground)" }}>
              A structured, transparent process designed to deliver outcomes on time and on budget.
            </p>
          </div>

          {/* Two-column stepped layout */}
          <div className="grid lg:grid-cols-2 gap-5">
            {service.process.map((step, idx) => (
              <div
                key={step.number}
                className="flex gap-5 rounded-2xl p-6 border transition-all duration-200 hover:shadow-md"
                style={{ background: "var(--card)", borderColor: "var(--border)" }}
              >
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-extrabold text-sm"
                  style={{
                    background: idx < 2 ? service.accentColor : service.accentLight,
                    color: idx < 2 ? "#ffffff" : service.accentColor,
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                  }}
                >
                  {step.number}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h4 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "1rem" }}>
                      {step.title}
                    </h4>
                    <CheckCircle size={16} className="flex-shrink-0 mt-1" style={accent} />
                  </div>
                  <p className="text-sm" style={{ color: "var(--muted-foreground)", lineHeight: 1.75 }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Projects ──────────────────────────────────────── */}
      <section
        className="py-20 lg:py-24"
        style={{ background: "linear-gradient(180deg, #0D0D0D 0%, #0a2a33 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-14">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4"
              style={{
                background: "rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.8)",
                border: "1px solid rgba(255,255,255,0.15)",
                fontFamily: "Plus Jakarta Sans, sans-serif",
              }}
            >
              Project Examples
            </div>
            <h2 className="text-white mb-4">See Our Work in Action</h2>
            <p className="max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.6)" }}>
              Real engagements from our portfolio  demonstrating the depth and breadth of our {service.shortTitle.toLowerCase()} capability across Nepal.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {service.projects.map((p) => (
              <div
                key={p.title}
                className="group rounded-2xl overflow-hidden"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)" }}
                  />
                  <span
                    className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full text-white"
                    style={accentBg}
                  >
                    {p.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h4
                    className="text-white mb-1.5"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "1rem" }}
                  >
                    {p.title}
                  </h4>
                  <div
                    className="flex items-center gap-1.5 text-xs mb-3"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    <MapPin size={11} />
                    {p.location}
                  </div>
                  <div
                    className="text-sm font-bold"
                    style={{ ...accent, fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    {p.scope}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={onContact}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white transition-all duration-200 hover:scale-105"
              style={{
                border: "1.5px solid rgba(255,255,255,0.3)",
                fontFamily: "Plus Jakarta Sans, sans-serif",
              }}
            >
              Start Your Project <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-14">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4"
              style={{ ...accentLightBg, ...accent, fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              FAQ
            </div>
            <h2 className="mb-4">Common Questions</h2>
            <p style={{ color: "var(--muted-foreground)" }}>
              Everything clients typically ask before engaging our {service.shortTitle.toLowerCase()} service.
            </p>
          </div>

          <div className="space-y-3">
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border overflow-hidden transition-colors duration-200"
                  style={{
                    borderColor: isOpen ? service.accentColor : "var(--border)",
                    background: "var(--card)",
                  }}
                >
                  <button
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                  >
                    <span
                      className="font-semibold text-sm sm:text-base"
                      style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                    >
                      {faq.question}
                    </span>
                    <span
                      className="flex-shrink-0"
                      style={isOpen ? accent : { color: "var(--muted-foreground)" }}
                    >
                      {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      className="px-6 pb-5 text-sm"
                      style={{
                        color: "var(--muted-foreground)",
                        lineHeight: 1.8,
                        borderTop: "1px solid var(--border)",
                      }}
                    >
                      <div className="pt-4">{faq.answer}</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section
        className="py-20 lg:py-24 relative overflow-hidden"
        style={accentBg}
      >
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: "#ffffff", transform: "translate(30%,-30%)" }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 blur-3xl"
          style={{ background: "#000000", transform: "translate(-30%,30%)" }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-white mb-5">
            Ready to Engage Our {service.shortTitle} Team?
          </h2>
          <p
            className="text-lg mb-10 max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.8 }}
          >
            Get in touch today for a no-obligation consultation. Our team
            serves clients across all seven provinces of Nepal.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={onContact}
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
              style={{
                background: "#ffffff",
                color: service.accentColor,
                fontFamily: "Plus Jakarta Sans, sans-serif",
              }}
            >
              Request a Quote <ArrowRight size={18} />
            </button>
            <a
              href="tel:+977-1-0000000"
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

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+977-1-0000000"
              className="flex items-center justify-center gap-2 text-sm"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              <Phone size={14} /> +977-1-0000000
            </a>
            <span className="hidden sm:block" style={{ color: "rgba(255,255,255,0.35)" }}>|</span>
            <a
              href="mailto:info@pstrade.com.np"
              className="flex items-center justify-center gap-2 text-sm"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              <Mail size={14} /> info@pstrade.com.np
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
