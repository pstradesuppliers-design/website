import { useState } from "react";
import {
  ArrowLeft, MapPin, Zap, Calendar, Clock, ArrowRight,
  Phone, Mail, ChevronLeft, ChevronRight, X,
} from "lucide-react";
import type { Project } from "./projectsData";
import { SOLUTION_LABELS, SERVICE_LABELS, projects as allProjects } from "./projectsData";

const STATUS_STYLE: Record<string, { bg: string; color: string }> = {
  Completed: { bg: "var(--brand-green-light)",     color: "var(--brand-green-dark)" },
  Ongoing:   { bg: "var(--brand-secondary-light)", color: "var(--brand-secondary-dark)" },
  Planned:   { bg: "var(--brand-primary-light)",   color: "var(--brand-primary)" },
};

const SOLUTION_COLORS: Record<string, string> = {
  "on-grid-solar":       "var(--brand-primary)",
  "off-grid-solar":      "var(--brand-green)",
  "solar-water-pumping": "var(--brand-secondary)",
  "solar-water-heater":  "#d97706",
  "inverter-backup":     "#7c3aed",
};

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
  onSelectProject: (id: string) => void;
  onContact: () => void;
}

export function ProjectDetail({ project, onBack, onSelectProject, onContact }: ProjectDetailProps) {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [activeImg, setActiveImg] = useState(0);

  const ss = STATUS_STYLE[project.status] ?? STATUS_STYLE.Completed;

  const related = allProjects
    .filter(
      (p) =>
        p.id !== project.id &&
        (p.province === project.province ||
          p.solutions.some((s) => project.solutions.includes(s)))
    )
    .slice(0, 3);

  const openGallery = (idx: number) => { setActiveImg(idx); setGalleryOpen(true); };
  const prev = () => setActiveImg((i) => (i - 1 + project.gallery.length) % project.gallery.length);
  const next = () => setActiveImg((i) => (i + 1) % project.gallery.length);

  return (
    <main className="bg-background text-foreground">

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative min-h-[68vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-gray-900"
          style={{
            backgroundImage: `url(${project.coverImage})`,
            backgroundSize: "cover", backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(13,13,13,0.95) 30%, rgba(13,13,13,0.4) 75%, rgba(13,13,13,0.15) 100%)" }}
          aria-hidden="true"
        />

        <button
          onClick={onBack}
          className="absolute top-24 left-6 sm:left-10 z-10 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all hover:gap-3"
          style={{
            background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)",
            color: "#ffffff", fontFamily: "Plus Jakarta Sans, sans-serif", backdropFilter: "blur(8px)",
          }}
        >
          <ArrowLeft size={15} /> All Projects
        </button>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 pb-14 pt-40">
          <div className="flex flex-wrap gap-2 mb-5">
            <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={ss}>{project.status}</span>
            {project.tags.map((t) => (
              <span key={t} className="text-xs px-2.5 py-1 rounded-full font-semibold" style={{ background: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.8)" }}>
                {t}
              </span>
            ))}
          </div>

          <h1 className="text-white mb-4 max-w-4xl" style={{ lineHeight: 1.08 }}>
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-6 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
            <span className="flex items-center gap-1.5"><MapPin size={14} /> {project.location}</span>
            <span className="flex items-center gap-1.5"><Zap size={14} style={{ color: "var(--brand-primary)" }} /> {project.capacity}</span>
            <span className="flex items-center gap-1.5"><Calendar size={14} /> {project.completedDate}</span>
            <span className="flex items-center gap-1.5"><Clock size={14} /> {project.duration}</span>
          </div>
        </div>
      </section>

      {/* ── Stats strip ───────────────────────────────────────────── */}
      <div style={{ background: "var(--brand-primary)" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4">
          <div className="flex flex-wrap gap-x-8 gap-y-2 justify-start">
            {project.stats.map((s) => (
              <div key={s.label} className="flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: "rgba(255,255,255,0.65)" }}>{s.label}</span>
                <span className="text-sm font-bold text-white" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main content ──────────────────────────────────────────── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 grid lg:grid-cols-3 gap-12">

          {/* Left — description */}
          <div className="lg:col-span-2 space-y-10">

            {/* Description */}
            <div>
              <h2 className="mb-5">Project Overview</h2>
              {project.fullDescription.split("\n\n").map((para, i) => (
                <p key={i} className="mb-4 last:mb-0" style={{ color: "var(--muted-foreground)", lineHeight: 1.8 }}>{para}</p>
              ))}
            </div>

            {/* Challenge & Outcome */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="rounded-2xl p-6 border" style={{ background: "#fff7ed", borderColor: "#fed7aa" }}>
                <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "var(--brand-secondary)" }}>The Challenge</div>
                <p className="text-sm" style={{ color: "#7c2d12", lineHeight: 1.75 }}>{project.challenge}</p>
              </div>
              <div className="rounded-2xl p-6 border" style={{ background: "var(--brand-green-light)", borderColor: "#bbf7d0" }}>
                <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "var(--brand-green-dark)" }}>The Outcome</div>
                <p className="text-sm" style={{ color: "#14532d", lineHeight: 1.75 }}>{project.outcome}</p>
              </div>
            </div>

            {/* Gallery */}
            <div>
              <h3 className="mb-5" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>Project Gallery</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => openGallery(idx)}
                    className="group relative rounded-xl overflow-hidden aspect-square focus:outline-none"
                    style={{ background: "var(--muted)" }}
                  >
                    <img
                      src={img.url}
                      alt={img.caption}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
                      style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)" }}
                    >
                      <p className="text-white text-xs p-2 line-clamp-2">{img.caption}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right — meta sidebar */}
          <div className="space-y-5">

            {/* Project details card */}
            <div className="rounded-2xl border p-6 space-y-4" style={{ background: "var(--card)", borderColor: "var(--border)" }}>
              <h4 style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>Project Details</h4>
              {[
                { label: "Client",    value: project.client },
                { label: "Province",  value: `${project.province} Province` },
                { label: "District",  value: project.district },
                { label: "Capacity",  value: project.capacity },
                { label: "Status",    value: project.status },
                { label: "Completed", value: project.completedDate },
                { label: "Duration",  value: project.duration },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-start justify-between gap-3 py-2 border-b last:border-0" style={{ borderColor: "var(--border)" }}>
                  <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--muted-foreground)" }}>{label}</span>
                  <span className="text-sm font-semibold text-right" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{value}</span>
                </div>
              ))}
            </div>

            {/* Solutions */}
            <div className="rounded-2xl border p-6" style={{ background: "var(--card)", borderColor: "var(--border)" }}>
              <h4 className="mb-4" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>Solutions Used</h4>
              <div className="space-y-2">
                {project.solutions.map((sol) => (
                  <div
                    key={sol}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-semibold"
                    style={{ background: `${SOLUTION_COLORS[sol] ?? "var(--brand-primary)"}18`, color: SOLUTION_COLORS[sol] ?? "var(--brand-primary)" }}
                  >
                    <Zap size={13} />
                    {SOLUTION_LABELS[sol] ?? sol}
                  </div>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="rounded-2xl border p-6" style={{ background: "var(--card)", borderColor: "var(--border)" }}>
              <h4 className="mb-4" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>Services Delivered</h4>
              <div className="space-y-2">
                {project.services.map((svc) => (
                  <div
                    key={svc}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-semibold"
                    style={{ background: "var(--muted)", color: "var(--muted-foreground)" }}
                  >
                    <ArrowRight size={12} />
                    {SERVICE_LABELS[svc] ?? svc}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div
              className="rounded-2xl p-6 text-center"
              style={{ background: "linear-gradient(135deg, var(--brand-primary) 0%, #026b82 100%)" }}
            >
              <p className="text-white font-semibold mb-1" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                Interested in a similar project?
              </p>
              <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.75)" }}>
                Our team can design a solution for your site.
              </p>
              <button
                onClick={onContact}
                className="w-full py-3 rounded-xl font-bold text-sm bg-white transition-all hover:scale-105"
                style={{ color: "var(--brand-primary)", fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                Get a Free Quote
              </button>
              <a
                href="tel:+977-1-0000000"
                className="flex items-center justify-center gap-2 text-xs mt-3"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                <Phone size={12} /> +977-1-0000000
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related projects ──────────────────────────────────────── */}
      {related.length > 0 && (
        <section
          className="py-16 lg:py-20"
          style={{ background: "linear-gradient(180deg, #0D0D0D 0%, #0a2a33 100%)" }}
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <h2 className="text-white mb-10">Related Projects</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {related.map((p) => {
                const rs = STATUS_STYLE[p.status] ?? STATUS_STYLE.Completed;
                return (
                  <button
                    key={p.id}
                    onClick={() => onSelectProject(p.id)}
                    className="group text-left rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={p.coverImage}
                        alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)" }} />
                      <span className="absolute top-3 left-3 text-xs font-bold px-2 py-0.5 rounded-full" style={rs}>{p.status}</span>
                      <span className="absolute bottom-3 left-3 flex items-center gap-1 text-xs text-white font-semibold"><MapPin size={10} />{p.province}</span>
                    </div>
                    <div className="p-5">
                      <h4 className="text-white mb-1 line-clamp-2" style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "0.95rem", lineHeight: 1.35 }}>
                        {p.title}
                      </h4>
                      <div className="flex items-center gap-1.5 text-xs font-bold mt-3 transition-all group-hover:gap-2.5" style={{ color: "var(--brand-primary)" }}>
                        <Zap size={11} /> {p.capacity} <ArrowRight size={11} className="ml-auto" />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section
        className="py-16 lg:py-20 relative overflow-hidden"
        style={{ background: "var(--brand-primary)" }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background: "#fff", transform: "translate(30%,-30%)" }} aria-hidden="true" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-white mb-5">Ready to Start Your Project?</h2>
          <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.8 }}>
            Get a free site survey and no-obligation quote. We serve all 7 provinces of Nepal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onContact}
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold bg-white transition-all hover:scale-105"
              style={{ color: "var(--brand-primary)", fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              Get a Free Quote <ArrowRight size={18} />
            </button>
            <a
              href="mailto:info@pstrade.com.np"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold transition-all hover:scale-105"
              style={{ border: "2px solid rgba(255,255,255,0.4)", color: "#ffffff", fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              <Mail size={18} /> Email Us
            </a>
          </div>
        </div>
      </section>

      {/* ── Lightbox ──────────────────────────────────────────────── */}
      {galleryOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.93)", backdropFilter: "blur(8px)" }}
          onClick={() => setGalleryOpen(false)}
        >
          <button
            onClick={() => setGalleryOpen(false)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:bg-white/20"
            style={{ color: "#ffffff" }}
          >
            <X size={22} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 sm:left-10 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:bg-white/20"
            style={{ color: "#ffffff" }}
          >
            <ChevronLeft size={28} />
          </button>

          <div
            className="w-full max-w-4xl mx-10 flex flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={project.gallery[activeImg].url}
              alt={project.gallery[activeImg].caption}
              className="w-full max-h-[70vh] object-contain rounded-2xl"
            />
            <p className="text-sm text-center px-4" style={{ color: "rgba(255,255,255,0.7)" }}>
              {project.gallery[activeImg].caption}
            </p>
            {/* Thumbnails */}
            <div className="flex gap-2">
              {project.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImg(idx)}
                  className="w-14 h-10 rounded-lg overflow-hidden border-2 transition-all"
                  style={{ borderColor: idx === activeImg ? "var(--brand-primary)" : "transparent" }}
                >
                  <img src={img.url} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 sm:right-10 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:bg-white/20"
            style={{ color: "#ffffff" }}
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </main>
  );
}
