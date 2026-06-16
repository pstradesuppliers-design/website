import { useState, useMemo } from "react";
import { useSiteData } from "../../context/SiteDataContext";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Phone,
  Mail,
  Zap,
  TrendingDown,
  RefreshCw,
  Leaf,
  Shield,
  BarChart2,
  Wifi,
  MapPin,
  Moon,
  DollarSign,
  Settings,
  Cloud,
  Droplets,
  Sprout,
  Volume2,
  Clock,
  Waves,
  Globe,
  Flame,
  Thermometer,
  Building2,
  Wind,
  Wrench,
  Sun,
  Star,
} from "lucide-react";
import type { Solution } from "./solutionsData";

// ── Icon map ──────────────────────────────────────────────────────────
const ICON_MAP: Record<string, React.ComponentType<{ size?: number; style?: React.CSSProperties; className?: string }>> = {
  TrendingDown, RefreshCw, Zap, Leaf, Shield, BarChart2,
  Wifi, MapPin, Moon, DollarSign, Settings, Cloud,
  Droplets, Sprout, Volume2, Clock, Waves, Globe,
  Flame, Thermometer, Building2, Wind, Wrench, Sun, Star,
};

interface SolutionDetailProps {
  solution: Solution;
  onBack: () => void;
  onNavigateSolution: (id: string) => void;
  onContact: () => void;
}

export function SolutionDetail({
  solution,
  onBack,
  onNavigateSolution,
  onContact,
}: SolutionDetailProps) {
  const { projectsData } = useSiteData();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Projects linked to this solution via the admin taxonomy
  const relatedProjects = useMemo(
    () => projectsData.filter((p) => p.solutions.includes(solution.id)),
    [projectsData, solution.id]
  );

  const accentStyle = { color: solution.accentColor };
  const accentBg = { background: solution.accentColor };
  const accentLightBg = { background: solution.accentLight };

  return (
    <main className="bg-background text-foreground">

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative min-h-[72vh] flex items-end overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-gray-900"
          style={{
            backgroundImage: `url(${solution.heroImage})`,
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
              "linear-gradient(to top, rgba(13,13,13,0.95) 30%, rgba(13,13,13,0.45) 70%, rgba(13,13,13,0.2) 100%)",
          }}
          aria-hidden="true"
        />

        {/* Back button */}
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
          <ArrowLeft size={15} /> All Solutions
        </button>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 pb-16 pt-40">
          {/* Tag */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-5"
            style={{ ...accentLightBg, ...accentStyle }}
          >
            <Star size={11} />
            {solution.tag}
          </div>

          <h1 className="text-white mb-4 max-w-3xl" style={{ lineHeight: 1.1 }}>
            {solution.title}
          </h1>
          <p
            className="text-xl max-w-2xl mb-8"
            style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.7 }}
          >
            {solution.tagline}
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={onContact}
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
              style={{
                ...accentBg,
                fontFamily: "Plus Jakarta Sans, sans-serif",
              }}
            >
              Get a Free Quote <ArrowRight size={16} />
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

      {/* ── Specs strip ───────────────────────────────────────────── */}
      <div style={{ background: solution.accentColor }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-5">
          <div className="flex flex-wrap gap-x-8 gap-y-3 justify-center sm:justify-start">
            {solution.specs.map((spec) => (
              <div key={spec.label} className="flex items-center gap-2">
                <span
                  className="text-xs font-semibold uppercase tracking-wide"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                >
                  {spec.label}
                </span>
                <span
                  className="text-sm font-bold text-white"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  {spec.value}
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
              style={{ ...accentLightBg, ...accentStyle, fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              Overview
            </div>
            <h2 className="mb-6">What Is a {solution.shortTitle}?</h2>
            {solution.overview.map((para, i) => (
              <p
                key={i}
                className="mb-4 last:mb-0"
                style={{ color: "var(--muted-foreground)", lineHeight: 1.8 }}
              >
                {para}
              </p>
            ))}
          </div>

          {/* Spec cards */}
          <div className="grid grid-cols-2 gap-4">
            {solution.specs.map((spec) => (
              <div
                key={spec.label}
                className="rounded-2xl p-5 border"
                style={{
                  background: "var(--card)",
                  borderColor: "var(--border)",
                }}
              >
                <div
                  className="text-xs font-semibold uppercase tracking-wide mb-1"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {spec.label}
                </div>
                <div
                  className="font-bold"
                  style={{ ...accentStyle, fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  {spec.value}
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
              style={{ ...accentLightBg, ...accentStyle, fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              Key Benefits
            </div>
            <h2 className="mb-4">Why Choose a {solution.shortTitle}?</h2>
            <p className="max-w-xl mx-auto" style={{ color: "var(--muted-foreground)" }}>
              Real-world advantages that make this the right investment for your
              energy needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solution.benefits.map((b) => {
              const Icon = ICON_MAP[b.icon] ?? Zap;
              return (
                <div
                  key={b.title}
                  className="group rounded-2xl p-7 border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={accentLightBg}
                  >
                    <Icon size={22} style={accentStyle} />
                  </div>
                  <h4
                    className="mb-3"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
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
              style={{ ...accentLightBg, ...accentStyle, fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              Our Process
            </div>
            <h2 className="mb-4">How We Deliver Your System</h2>
            <p className="max-w-xl mx-auto" style={{ color: "var(--muted-foreground)" }}>
              A clear, transparent journey from your first enquiry to a fully
              operational system — with our team guiding every step.
            </p>
          </div>

          <div className="relative">
            {/* Vertical connector line */}
            <div
              className="absolute left-7 top-8 bottom-8 w-px hidden sm:block"
              style={{ background: "var(--border)" }}
              aria-hidden="true"
            />

            <div className="space-y-6">
              {solution.process.map((step, idx) => (
                <div key={step.number} className="flex gap-6 items-start">
                  {/* Step number */}
                  <div
                    className="relative z-10 flex-shrink-0 w-14 h-14 rounded-2xl flex flex-col items-center justify-center font-extrabold text-sm shadow-sm"
                    style={{
                      background: idx === 0 ? solution.accentColor : "var(--card)",
                      color: idx === 0 ? "#ffffff" : solution.accentColor,
                      border: `2px solid ${idx === 0 ? "transparent" : "var(--border)"}`,
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                    }}
                  >
                    {step.number}
                  </div>

                  {/* Content */}
                  <div
                    className="flex-1 rounded-2xl p-6 border"
                    style={{
                      background: "var(--card)",
                      borderColor: "var(--border)",
                    }}
                  >
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h4 style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                        {step.title}
                      </h4>
                      <CheckCircle
                        size={18}
                        className="flex-shrink-0 mt-1"
                        style={accentStyle}
                      />
                    </div>
                    <p className="text-sm" style={{ color: "var(--muted-foreground)", lineHeight: 1.75 }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Projects ──────────────────────────────────────── */}
      <section
        className="py-20 lg:py-24"
        style={{
          background: "linear-gradient(180deg, #0D0D0D 0%, #0a2a33 100%)",
        }}
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
              Related Projects
            </div>
            <h2 className="text-white mb-4">See It In Action</h2>
            <p className="max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.6)" }}>
              Real installations completed by our team across Nepal —
              delivering measurable impact for our clients.
            </p>
          </div>

          {relatedProjects.length === 0 ? (
            <div className="text-center py-10 mb-10">
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                No projects linked to this solution yet. Add projects from the Admin → Projects panel and select this solution.
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-3 gap-6 mb-10">
              {relatedProjects.map((p) => (
                <div
                  key={p.id}
                  className="group rounded-2xl overflow-hidden cursor-pointer"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={p.coverImage}
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
                      {p.status}
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
                      style={{ color: "rgba(255,255,255,0.55)" }}
                    >
                      <MapPin size={11} />
                      {p.location}
                    </div>
                    <div
                      className="text-sm font-bold"
                      style={{ ...accentStyle, fontFamily: "Plus Jakarta Sans, sans-serif" }}
                    >
                      {p.capacity}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="text-center">
            <button
              onClick={onContact}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white transition-all duration-200 hover:scale-105"
              style={{
                border: "1.5px solid rgba(255,255,255,0.3)",
                fontFamily: "Plus Jakarta Sans, sans-serif",
              }}
            >
              Discuss Your Project <ArrowRight size={16} />
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
              style={{ ...accentLightBg, ...accentStyle, fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              FAQ
            </div>
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <p style={{ color: "var(--muted-foreground)" }}>
              Everything you need to know about {solution.shortTitle} systems.
            </p>
          </div>

          <div className="space-y-3">
            {solution.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border overflow-hidden transition-all duration-200"
                  style={{
                    borderColor: isOpen ? solution.accentColor : "var(--border)",
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
                    <span className="flex-shrink-0" style={isOpen ? accentStyle : { color: "var(--muted-foreground)" }}>
                      {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      className="px-6 pb-5 text-sm"
                      style={{ color: "var(--muted-foreground)", lineHeight: 1.8, borderTop: "1px solid var(--border)" }}
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
        style={{ background: solution.accentColor }}
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
            Ready to Install Your {solution.shortTitle}?
          </h2>
          <p
            className="text-lg mb-10 max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.8 }}
          >
            Get a free site survey and no-obligation quote from our engineering
            team. We cover all 7 provinces of Nepal.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={onContact}
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
              style={{
                background: "#ffffff",
                color: solution.accentColor,
                fontFamily: "Plus Jakarta Sans, sans-serif",
              }}
            >
              Get a Free Quote <ArrowRight size={18} />
            </button>
            <a
              href="tel:+977-1-0000000"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold transition-all duration-200 hover:scale-105"
              style={{
                border: "2px solid rgba(255,255,255,0.45)",
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
