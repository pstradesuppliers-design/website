import { useState, useMemo } from "react";
import {
  Search, MapPin, Zap, X, SlidersHorizontal, FolderKanban, ArrowRight,
} from "lucide-react";
import { PROVINCES, SOLUTION_LABELS, SERVICE_LABELS } from "./projectsData";
import type { Province, Project } from "./projectsData";
import { useSiteData } from "../../context/SiteDataContext";

const STATUS_STYLE: Record<string, { bg: string; color: string }> = {
  Completed: { bg: "var(--brand-green-light)",     color: "var(--brand-green-dark)" },
  Ongoing:   { bg: "var(--brand-secondary-light)", color: "var(--brand-secondary-dark)" },
  Planned:   { bg: "var(--brand-primary-light)",   color: "var(--brand-primary)" },
};

interface Filters {
  search: string;
  province: Province | "";
  solution: string;
  service: string;
  status: string;
}

const EMPTY: Filters = { search: "", province: "", solution: "", service: "", status: "" };

interface ProjectsLandingProps {
  onSelectProject: (id: string) => void;
}

export function ProjectsLanding({ onSelectProject }: ProjectsLandingProps) {
  const { projectsData: projects } = useSiteData();
  const [filters, setFilters] = useState<Filters>(EMPTY);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const set = <K extends keyof Filters>(k: K, v: Filters[K]) =>
    setFilters((f) => ({ ...f, [k]: v }));

  const activeCount = Object.values(filters).filter(Boolean).length;

  const filtered = useMemo<Project[]>(() => {
    const q = filters.search.toLowerCase();
    return projects.filter((p) => {
      if (q && !p.title.toLowerCase().includes(q) &&
          !p.client.toLowerCase().includes(q) &&
          !p.location.toLowerCase().includes(q) &&
          !p.tags.some((t) => t.toLowerCase().includes(q))) return false;
      if (filters.province && p.province !== filters.province) return false;
      if (filters.solution && !p.solutions.includes(filters.solution as never)) return false;
      if (filters.service  && !p.services.includes(filters.service as never))  return false;
      if (filters.status   && p.status !== filters.status)  return false;
      return true;
    });
  }, [filters]);

  return (
    <main className="bg-background text-foreground">

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section
        className="relative pt-36 pb-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0D0D0D 0%, #063d4a 60%, #0D0D0D 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1770936994282-8811fb7129ac?w=1600&h=600&fit=crop&auto=format)`,
            backgroundSize: "cover", backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(13,13,13,0.88), rgba(6,61,74,0.82))" }}
          aria-hidden="true"
        />
        <div
          className="absolute top-16 right-16 w-80 h-80 rounded-full opacity-10 blur-3xl"
          style={{ background: "var(--brand-primary)" }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
            style={{
              background: "rgba(4,157,191,0.18)", color: "var(--brand-primary)",
              border: "1px solid rgba(4,157,191,0.3)", fontFamily: "Plus Jakarta Sans, sans-serif",
            }}
          >
            <FolderKanban size={14} /> Our Portfolio
          </div>
          <h1 className="text-white mb-5" style={{ lineHeight: 1.1 }}>
            Projects Across{" "}
            <span style={{ color: "var(--brand-primary)" }}>Nepal's Seven Provinces</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-10" style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.8 }}>
            From remote mountain villages to industrial parks — explore our portfolio of{" "}
            {projects.length} completed and ongoing renewable energy projects.
          </p>

          {/* Search bar */}
          <div
            className="flex items-center gap-3 max-w-xl mx-auto rounded-2xl px-4 py-3"
            style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", backdropFilter: "blur(12px)" }}
          >
            <Search size={18} style={{ color: "rgba(255,255,255,0.5)" }} />
            <input
              type="text"
              value={filters.search}
              onChange={(e) => set("search", e.target.value)}
              placeholder="Search projects, clients, locations…"
              className="flex-1 bg-transparent text-white placeholder-white/40 text-sm focus:outline-none"
            />
            {filters.search && (
              <button onClick={() => set("search", "")} className="opacity-60 hover:opacity-100">
                <X size={15} className="text-white" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ── Stats strip ───────────────────────────────────────────── */}
      <div style={{ background: "var(--brand-primary)" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4 flex flex-wrap gap-x-10 gap-y-2 justify-center sm:justify-start">
          {[
            { v: `${projects.length}`, l: "Total Projects" },
            { v: projects.filter((p) => p.status === "Completed").length.toString(), l: "Completed" },
            { v: projects.filter((p) => p.status === "Ongoing").length.toString(), l: "Ongoing" },
            { v: "7", l: "Provinces Covered" },
          ].map((s) => (
            <div key={s.l} className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: "rgba(255,255,255,0.65)" }}>{s.l}</span>
              <span className="text-sm font-bold text-white" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{s.v}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Filters + Grid ────────────────────────────────────────── */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">

          {/* Filter bar */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            {/* Toggle panel */}
            <button
              onClick={() => setFiltersOpen((o) => !o)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold border transition-all"
              style={{
                borderColor: activeCount > 0 ? "var(--brand-primary)" : "var(--border)",
                background: activeCount > 0 ? "var(--brand-primary-light)" : "var(--card)",
                color: activeCount > 0 ? "var(--brand-primary)" : "var(--foreground)",
                fontFamily: "Plus Jakarta Sans, sans-serif",
              }}
            >
              <SlidersHorizontal size={15} />
              Filters
              {activeCount > 0 && (
                <span
                  className="w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center text-white"
                  style={{ background: "var(--brand-primary)" }}
                >
                  {activeCount}
                </span>
              )}
            </button>

            {/* Quick province chips */}
            <div className="flex flex-wrap gap-2">
              {PROVINCES.map((prov) => (
                <button
                  key={prov}
                  onClick={() => set("province", filters.province === prov ? "" : prov)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all"
                  style={{
                    borderColor: filters.province === prov ? "var(--brand-primary)" : "var(--border)",
                    background: filters.province === prov ? "var(--brand-primary-light)" : "transparent",
                    color: filters.province === prov ? "var(--brand-primary)" : "var(--muted-foreground)",
                  }}
                >
                  <MapPin size={10} /> {prov}
                </button>
              ))}
            </div>

            {/* Clear */}
            {activeCount > 0 && (
              <button
                onClick={() => setFilters(EMPTY)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all hover:opacity-80"
                style={{ color: "#ef4444", background: "#fef2f2" }}
              >
                <X size={12} /> Clear all
              </button>
            )}

            {/* Result count */}
            <span className="ml-auto text-sm" style={{ color: "var(--muted-foreground)" }}>
              {filtered.length} project{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>

          {/* Expanded filter panel */}
          {filtersOpen && (
            <div
              className="rounded-2xl p-6 mb-8 grid sm:grid-cols-3 gap-5 border"
              style={{ background: "var(--card)", borderColor: "var(--border)" }}
            >
              {/* Solution filter */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--muted-foreground)" }}>
                  Solution
                </label>
                <select
                  value={filters.solution}
                  onChange={(e) => set("solution", e.target.value)}
                  className="w-full rounded-xl px-3 py-2.5 text-sm border focus:outline-none focus:ring-2"
                  style={{ borderColor: "var(--border)", background: "var(--input-background)" }}
                >
                  <option value="">All Solutions</option>
                  {Object.entries(SOLUTION_LABELS).map(([id, label]) => (
                    <option key={id} value={id}>{label}</option>
                  ))}
                </select>
              </div>

              {/* Service filter */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--muted-foreground)" }}>
                  Service
                </label>
                <select
                  value={filters.service}
                  onChange={(e) => set("service", e.target.value)}
                  className="w-full rounded-xl px-3 py-2.5 text-sm border focus:outline-none focus:ring-2"
                  style={{ borderColor: "var(--border)", background: "var(--input-background)" }}
                >
                  <option value="">All Services</option>
                  {Object.entries(SERVICE_LABELS).map(([id, label]) => (
                    <option key={id} value={id}>{label}</option>
                  ))}
                </select>
              </div>

              {/* Status filter */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--muted-foreground)" }}>
                  Status
                </label>
                <select
                  value={filters.status}
                  onChange={(e) => set("status", e.target.value)}
                  className="w-full rounded-xl px-3 py-2.5 text-sm border focus:outline-none focus:ring-2"
                  style={{ borderColor: "var(--border)", background: "var(--input-background)" }}
                >
                  <option value="">All Statuses</option>
                  <option value="Completed">Completed</option>
                  <option value="Ongoing">Ongoing</option>
                  <option value="Planned">Planned</option>
                </select>
              </div>
            </div>
          )}

          {/* Project cards */}
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <Search size={40} className="mx-auto mb-4" style={{ color: "var(--muted-foreground)" }} />
              <h3 className="mb-2">No projects match your filters</h3>
              <p className="mb-5" style={{ color: "var(--muted-foreground)" }}>Try adjusting your search or clearing the filters.</p>
              <button
                onClick={() => setFilters(EMPTY)}
                className="px-5 py-2.5 rounded-xl text-sm font-bold text-white"
                style={{ background: "var(--brand-primary)", fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map((p) => {
                const ss = STATUS_STYLE[p.status] ?? STATUS_STYLE.Completed;
                return (
                  <button
                    key={p.id}
                    onClick={() => onSelectProject(p.id)}
                    className="group text-left rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none"
                    style={{ background: "var(--card)", borderColor: "var(--border)" }}
                  >
                    {/* Cover image */}
                    <div className="relative h-48 overflow-hidden bg-gray-100">
                      <img
                        src={p.coverImage}
                        alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div
                        className="absolute inset-0"
                        style={{ background: "linear-gradient(to top, rgba(13,13,13,0.65) 0%, transparent 55%)" }}
                      />
                      {/* Status badge */}
                      <span
                        className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full"
                        style={ss}
                      >
                        {p.status}
                      </span>
                      {/* Province */}
                      <div
                        className="absolute bottom-3 left-3 flex items-center gap-1 text-xs font-semibold text-white"
                      >
                        <MapPin size={11} /> {p.province} Province
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-5">
                      <h3
                        className="mb-1 line-clamp-2"
                        style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "1rem", lineHeight: 1.35 }}
                      >
                        {p.title}
                      </h3>
                      <p className="text-xs mb-3" style={{ color: "var(--muted-foreground)" }}>
                        {p.client}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        <div
                          className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full"
                          style={{ background: "var(--brand-primary-light)", color: "var(--brand-primary)" }}
                        >
                          <Zap size={10} /> {p.capacity}
                        </div>
                        {p.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2.5 py-1 rounded-full"
                            style={{ background: "var(--muted)", color: "var(--muted-foreground)" }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <p
                        className="text-sm mb-4 line-clamp-2"
                        style={{ color: "var(--muted-foreground)", lineHeight: 1.6 }}
                      >
                        {p.shortDescription}
                      </p>

                      <div
                        className="flex items-center gap-1.5 text-sm font-bold transition-all duration-300 group-hover:gap-3"
                        style={{ color: "var(--brand-primary)", fontFamily: "Plus Jakarta Sans, sans-serif" }}
                      >
                        View Project <ArrowRight size={14} />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
