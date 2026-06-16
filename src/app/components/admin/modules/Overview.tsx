import { Users, FolderKanban, Zap, Wrench, Mail, TrendingUp, MapPin, Clock } from "lucide-react";
import { useSiteData } from "../../../context/SiteDataContext";

export function Overview() {
  const { teamData, projectsData, servicesData, solutionsData, contactSubmissions } = useSiteData();

  const stats = [
    { label: "Team Members",         value: teamData.length,                    icon: Users,        color: "var(--brand-primary)",   bg: "var(--brand-primary-light)" },
    { label: "Projects",             value: projectsData.length,                icon: FolderKanban, color: "var(--brand-green)",     bg: "var(--brand-green-light)" },
    { label: "Solutions",            value: solutionsData.length,               icon: Zap,          color: "var(--brand-secondary)", bg: "var(--brand-secondary-light)" },
    { label: "Services",             value: servicesData.length,                icon: Wrench,       color: "#7c3aed",                bg: "#f5f3ff" },
    { label: "Contact Leads",        value: contactSubmissions.length,          icon: Mail,         color: "#0891b2",                bg: "#ecfeff" },
    { label: "Completed Projects",   value: projectsData.filter((p) => p.status === "Completed").length, icon: TrendingUp, color: "var(--brand-green)", bg: "var(--brand-green-light)" },
    { label: "Provinces Covered",    value: 7,                                  icon: MapPin,       color: "#d97706",                bg: "#fef3c7" },
    { label: "Ongoing Projects",     value: projectsData.filter((p) => p.status === "Ongoing").length,   icon: Clock,      color: "var(--brand-secondary)", bg: "var(--brand-secondary-light)" },
  ];

  const recentLeads = [...contactSubmissions].reverse().slice(0, 5);
  const provinces = [...new Set(projectsData.map((p) => p.province))];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>Dashboard Overview</h2>
        <p className="text-sm mt-1" style={{ color: "var(--muted-foreground)" }}>
          Real-time snapshot of your website content and enquiries.
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl p-5 border" style={{ background: "var(--card)", borderColor: "var(--border)" }}>
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: s.bg }}>
                <s.icon size={17} style={{ color: s.color }} />
              </div>
              <span className="text-2xl font-extrabold" style={{ color: s.color, fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                {s.value}
              </span>
            </div>
            <p className="text-xs font-semibold" style={{ color: "var(--muted-foreground)" }}>{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent leads */}
        <div className="rounded-2xl border overflow-hidden" style={{ background: "var(--card)", borderColor: "var(--border)" }}>
          <div className="px-5 py-4 border-b flex items-center justify-between" style={{ borderColor: "var(--border)" }}>
            <h4 style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>Recent Contact Leads</h4>
            <span className="text-xs px-2 py-0.5 rounded-full font-semibold" style={{ background: "var(--brand-primary-light)", color: "var(--brand-primary)" }}>
              {contactSubmissions.length} total
            </span>
          </div>
          {recentLeads.length === 0 ? (
            <div className="px-5 py-8 text-center text-sm" style={{ color: "var(--muted-foreground)" }}>No leads yet.</div>
          ) : (
            <div className="divide-y" style={{ borderColor: "var(--border)" }}>
              {recentLeads.map((lead) => (
                <div key={lead.id} className="px-5 py-3 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-sm font-semibold truncate" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{lead.name}</p>
                    <p className="text-xs truncate" style={{ color: "var(--muted-foreground)" }}>{lead.service}</p>
                  </div>
                  <span className="text-xs flex-shrink-0" style={{ color: "var(--muted-foreground)" }}>{lead.submittedAt}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Province coverage */}
        <div className="rounded-2xl border overflow-hidden" style={{ background: "var(--card)", borderColor: "var(--border)" }}>
          <div className="px-5 py-4 border-b" style={{ borderColor: "var(--border)" }}>
            <h4 style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>Projects by Province</h4>
          </div>
          <div className="p-5 space-y-3">
            {provinces.map((prov) => {
              const count = projectsData.filter((p) => p.province === prov).length;
              const pct = Math.round((count / projectsData.length) * 100);
              return (
                <div key={prov}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-semibold">{prov}</span>
                    <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>{count} project{count !== 1 ? "s" : ""}</span>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "var(--muted)" }}>
                    <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, background: "var(--brand-primary)" }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
