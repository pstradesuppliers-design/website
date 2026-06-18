import { Mail, Phone, ArrowRight, Users } from "lucide-react";
import type { TeamMember } from "./teamData";

const DEPT_COLORS: Record<string, { bg: string; color: string }> = {
  Leadership:      { bg: "var(--brand-primary-light)",    color: "var(--brand-primary)" },
  Engineering:     { bg: "var(--brand-green-light)",      color: "var(--brand-green)" },
  Procurement:     { bg: "var(--brand-secondary-light)",  color: "var(--brand-secondary)" },
  Consulting:      { bg: "#fef3c7",                       color: "#d97706" },
  "Asset Management": { bg: "#f5f3ff",                   color: "#7c3aed" },
  Operations:      { bg: "#ecfeff",                       color: "#0891b2" },
  Finance:         { bg: "#fdf2f8",                       color: "#be185d" },
};

interface TeamGridProps {
  members: TeamMember[];
  onSelectMember: (id: string) => void;
}

export function TeamGrid({ members, onSelectMember }: TeamGridProps) {
  const departments = Array.from(new Set(members.map((m) => m.department)));

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
          className="absolute top-16 right-16 w-80 h-80 rounded-full opacity-10 blur-3xl"
          style={{ background: "var(--brand-primary)" }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-10 w-60 h-60 rounded-full opacity-10 blur-3xl"
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
            <Users size={14} /> Our People
          </div>
          <h1 className="text-white mb-6" style={{ lineHeight: 1.1 }}>
            Meet the Team Behind{" "}
            <span style={{ color: "var(--brand-primary)" }}>Nepal's Clean Energy</span>
          </h1>
          <p
            className="text-xl max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.8 }}
          >
            Engineers, consultants, logistics specialists, and field technicians
             united by a shared mission to deliver world-class renewable energy
            across all seven provinces of Nepal.
          </p>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────────── */}
      <div style={{ background: "var(--brand-primary)" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-5 flex flex-wrap gap-x-10 gap-y-3 justify-center sm:justify-start">
          {[
            { value: `${members.length}`, label: "Team Members" },
            { value: departments.length.toString(), label: "Departments" },
            { value: "80+", label: "Total Staff" },
            { value: "7", label: "Provinces Served" },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: "rgba(255,255,255,0.65)" }}>
                {s.label}
              </span>
              <span className="text-sm font-bold text-white" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                {s.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Team Grid ─────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">

          {departments.map((dept) => {
            const deptMembers = members.filter((m) => m.department === dept);
            const deptStyle = DEPT_COLORS[dept] ?? { bg: "var(--muted)", color: "var(--muted-foreground)" };
            return (
              <div key={dept} className="mb-16 last:mb-0">
                {/* Department header */}
                <div className="flex items-center gap-3 mb-8">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                    style={{ background: deptStyle.bg, color: deptStyle.color, fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    {dept}
                  </span>
                  <div className="h-px flex-1" style={{ background: "var(--border)" }} />
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {deptMembers.map((member) => (
                    <button
                      key={member.id}
                      onClick={() => onSelectMember(member.id)}
                      className="group text-left rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none"
                      style={{ background: "var(--card)", borderColor: "var(--border)" }}
                    >
                      {/* Photo */}
                      <div className="relative h-56 overflow-hidden bg-gray-100">
                        <img
                          src={member.photo}
                          alt={member.name}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Dept badge */}
                        <span
                          className="absolute top-3 left-3 text-xs font-bold px-2 py-0.5 rounded-full"
                          style={{ background: deptStyle.bg, color: deptStyle.color }}
                        >
                          {dept}
                        </span>
                      </div>

                      {/* Info */}
                      <div className="p-5">
                        <h4
                          className="mb-0.5"
                          style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "1rem" }}
                        >
                          {member.name}
                        </h4>
                        <p
                          className="text-xs font-semibold mb-3"
                          style={{ color: deptStyle.color, fontFamily: "Plus Jakarta Sans, sans-serif" }}
                        >
                          {member.position}
                        </p>
                        <p
                          className="text-sm mb-4 line-clamp-2"
                          style={{ color: "var(--muted-foreground)", lineHeight: 1.6 }}
                        >
                          {member.shortBio}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex gap-2">
                            <a
                              href={`mailto:${member.email}`}
                              onClick={(e) => e.stopPropagation()}
                              className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:opacity-80"
                              style={{ background: deptStyle.bg }}
                              title={member.email}
                            >
                              <Mail size={13} style={{ color: deptStyle.color }} />
                            </a>
                            <a
                              href={`tel:${member.phone}`}
                              onClick={(e) => e.stopPropagation()}
                              className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:opacity-80"
                              style={{ background: deptStyle.bg }}
                              title={member.phone}
                            >
                              <Phone size={13} style={{ color: deptStyle.color }} />
                            </a>
                          </div>
                          <div
                            className="flex items-center gap-1 text-xs font-bold transition-all duration-300 group-hover:gap-2"
                            style={{ color: deptStyle.color, fontFamily: "Plus Jakarta Sans, sans-serif" }}
                          >
                            Profile <ArrowRight size={12} />
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>


    </main>
  );
}
