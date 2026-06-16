interface Route {
  method?: string;
  pattern: string;
  description: string;
  params?: string;
  query?: string;
  auth?: boolean;
  category: string;
  color: string;
}

const routes: Route[] = [
  // Public - Core
  { pattern: "/", description: "Homepage — hero, highlights, stats", category: "PUBLIC / CORE", color: "text-primary" },
  { pattern: "/about", description: "Company overview, mission, history, certifications", category: "PUBLIC / CORE", color: "text-primary" },
  { pattern: "/contact", description: "Contact form + embedded Google Map", category: "PUBLIC / CORE", color: "text-primary" },

  // Solutions
  { pattern: "/solutions", description: "All solutions listing", category: "SOLUTIONS", color: "text-green-300" },
  { pattern: "/solutions/:slug", description: "Single solution detail + FAQ section", params: ":slug — solution.slug", category: "SOLUTIONS", color: "text-green-300" },

  // Services
  { pattern: "/services", description: "All services listing", category: "SERVICES", color: "text-cyan-300" },
  { pattern: "/services/:slug", description: "Single service detail + FAQ section", params: ":slug — service.slug", category: "SERVICES", color: "text-cyan-300" },

  // Projects
  { pattern: "/projects", description: "Project portfolio grid", category: "PROJECTS", color: "text-amber-300" },
  {
    pattern: "/projects?service=:slug&solution=:slug",
    description: "Filtered project list by service or solution",
    query: "service (optional), solution (optional)",
    category: "PROJECTS",
    color: "text-amber-300",
  },
  { pattern: "/projects/:slug", description: "Individual project detail page", params: ":slug — project.slug", category: "PROJECTS", color: "text-amber-300" },

  // Team
  { pattern: "/team", description: "All team members grid", category: "TEAM", color: "text-purple-300" },
  { pattern: "/team/:slug", description: "Individual team member profile", params: ":slug — team_member.slug", category: "TEAM", color: "text-purple-300" },

  // Admin
  { pattern: "/admin", description: "Dashboard overview — stats, quick links", auth: true, category: "ADMIN", color: "text-slate-300" },
  { pattern: "/admin/login", description: "Admin authentication", auth: false, category: "ADMIN", color: "text-slate-300" },
  { pattern: "/admin/pages", description: "Manage static pages", auth: true, category: "ADMIN", color: "text-slate-300" },
  { pattern: "/admin/pages/:id/edit", description: "Edit page content (block editor)", auth: true, params: ":id — page uuid", category: "ADMIN", color: "text-slate-300" },
  { pattern: "/admin/solutions", description: "List & manage solutions", auth: true, category: "ADMIN", color: "text-slate-300" },
  { pattern: "/admin/solutions/new", description: "Create new solution", auth: true, category: "ADMIN", color: "text-slate-300" },
  { pattern: "/admin/solutions/:id/edit", description: "Edit solution + manage its FAQs", auth: true, params: ":id — solution uuid", category: "ADMIN", color: "text-slate-300" },
  { pattern: "/admin/services", description: "List & manage services", auth: true, category: "ADMIN", color: "text-slate-300" },
  { pattern: "/admin/services/new", description: "Create new service", auth: true, category: "ADMIN", color: "text-slate-300" },
  { pattern: "/admin/services/:id/edit", description: "Edit service + manage its FAQs", auth: true, params: ":id — service uuid", category: "ADMIN", color: "text-slate-300" },
  { pattern: "/admin/projects", description: "List & manage projects", auth: true, category: "ADMIN", color: "text-slate-300" },
  { pattern: "/admin/projects/new", description: "Create new project + link services/solutions", auth: true, category: "ADMIN", color: "text-slate-300" },
  { pattern: "/admin/projects/:id/edit", description: "Edit project", auth: true, params: ":id — project uuid", category: "ADMIN", color: "text-slate-300" },
  { pattern: "/admin/team", description: "List & manage team members", auth: true, category: "ADMIN", color: "text-slate-300" },
  { pattern: "/admin/team/new", description: "Create team member profile", auth: true, category: "ADMIN", color: "text-slate-300" },
  { pattern: "/admin/team/:id/edit", description: "Edit team member", auth: true, params: ":id — member uuid", category: "ADMIN", color: "text-slate-300" },
  { pattern: "/admin/contacts", description: "View contact form submissions", auth: true, category: "ADMIN", color: "text-slate-300" },
  { pattern: "/admin/contacts/:id", description: "View single contact submission", auth: true, params: ":id — submission uuid", category: "ADMIN", color: "text-slate-300" },
  { pattern: "/admin/media", description: "Media library — upload & manage assets", auth: true, category: "ADMIN", color: "text-slate-300" },
];

const categoryOrder = ["PUBLIC / CORE", "SOLUTIONS", "SERVICES", "PROJECTS", "TEAM", "ADMIN"];
const categoryColor: Record<string, string> = {
  "PUBLIC / CORE": "text-primary border-primary/40 bg-primary/10",
  "SOLUTIONS": "text-green-300 border-green-400/40 bg-green-400/10",
  "SERVICES": "text-cyan-300 border-cyan-400/40 bg-cyan-400/10",
  "PROJECTS": "text-amber-300 border-amber-400/40 bg-amber-400/10",
  "TEAM": "text-purple-300 border-purple-400/40 bg-purple-400/10",
  "ADMIN": "text-slate-300 border-slate-400/40 bg-slate-400/10",
};

export function URLStructureView() {
  const grouped = categoryOrder.reduce((acc, cat) => {
    acc[cat] = routes.filter((r) => r.category === cat);
    return acc;
  }, {} as Record<string, Route[]>);

  return (
    <div className="space-y-6">
      {categoryOrder.map((cat) => (
        <div key={cat}>
          <div className="flex items-center gap-3 mb-3">
            <span
              className={`text-xs px-2 py-1 rounded border ${categoryColor[cat]}`}
              style={{ fontFamily: "Space Mono, monospace" }}
            >
              {cat}
            </span>
            <div className="flex-1 h-px bg-border/40" />
          </div>
          <div className="rounded border border-border overflow-hidden">
            <table className="w-full" style={{ fontFamily: "Space Mono, monospace" }}>
              <thead>
                <tr className="border-b border-border bg-muted/20">
                  <th className="text-left px-4 py-2 text-xs text-muted-foreground w-72">ROUTE PATTERN</th>
                  <th className="text-left px-4 py-2 text-xs text-muted-foreground">DESCRIPTION</th>
                  <th className="text-left px-4 py-2 text-xs text-muted-foreground w-48">PARAMS / QUERY</th>
                  <th className="text-left px-4 py-2 text-xs text-muted-foreground w-20">AUTH</th>
                </tr>
              </thead>
              <tbody>
                {grouped[cat].map((r, i) => (
                  <tr key={i} className="border-b border-border/30 hover:bg-muted/10 transition-colors">
                    <td className="px-4 py-2.5">
                      <span className={`text-xs ${r.color}`}>{r.pattern}</span>
                    </td>
                    <td className="px-4 py-2.5">
                      <span className="text-xs text-foreground/80">{r.description}</span>
                    </td>
                    <td className="px-4 py-2.5">
                      {r.params && (
                        <span className="text-xs text-amber-300/80 block">{r.params}</span>
                      )}
                      {r.query && (
                        <span className="text-xs text-cyan-300/80 block">{r.query}</span>
                      )}
                    </td>
                    <td className="px-4 py-2.5">
                      {r.auth === true && (
                        <span className="text-xs px-1.5 py-0.5 rounded border border-rose-400/40 text-rose-300 bg-rose-400/10">
                          ● PROTECTED
                        </span>
                      )}
                      {r.auth === false && (
                        <span className="text-xs px-1.5 py-0.5 rounded border border-border/50 text-muted-foreground">
                          PUBLIC
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}
