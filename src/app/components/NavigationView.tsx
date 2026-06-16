interface NavItem {
  label: string;
  href: string;
  description?: string;
  children?: NavItem[];
  cta?: boolean;
  badge?: string;
}

const primaryNav: NavItem[] = [
  { label: "Home", href: "/", description: "Back to homepage" },
  {
    label: "About Us",
    href: "/about",
    description: "Our company, mission & certifications",
    children: [
      { label: "Mission & Vision", href: "/about#mission" },
      { label: "Company History", href: "/about#history" },
      { label: "Certifications", href: "/about#certifications" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    description: "Our renewable energy solution categories",
    children: [
      { label: "Solar Energy", href: "/solutions/solar-energy", badge: "POPULAR" },
      { label: "Wind Energy", href: "/solutions/wind-energy" },
      { label: "Energy Storage", href: "/solutions/energy-storage" },
      { label: "Hybrid Systems", href: "/solutions/hybrid-systems" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    description: "What we do for our clients",
    children: [
      { label: "Installation", href: "/services/installation" },
      { label: "Maintenance & O&M", href: "/services/maintenance" },
      { label: "Consulting & Design", href: "/services/consulting" },
      { label: "Energy Auditing", href: "/services/energy-auditing" },
    ],
  },
  {
    label: "Projects",
    href: "/projects",
    description: "Our completed & ongoing installations",
  },
  {
    label: "Team",
    href: "/team",
    description: "Meet our experts",
  },
  { label: "Contact", href: "/contact", description: "Get in touch", cta: true },
];

const adminNav: NavItem[] = [
  { label: "Dashboard", href: "/admin" },
  { label: "Pages", href: "/admin/pages" },
  { label: "Solutions", href: "/admin/solutions" },
  { label: "Services", href: "/admin/services" },
  { label: "Projects", href: "/admin/projects" },
  { label: "Team", href: "/admin/team" },
  { label: "FAQs", href: "/admin/faqs" },
  { label: "Contacts", href: "/admin/contacts" },
  { label: "Media", href: "/admin/media" },
];

const footerNav = {
  "Company": [
    { label: "About Us", href: "/about" },
    { label: "Team", href: "/team" },
    { label: "Projects", href: "/projects" },
  ],
  "Solutions": [
    { label: "Solar Energy", href: "/solutions/solar-energy" },
    { label: "Wind Energy", href: "/solutions/wind-energy" },
    { label: "Energy Storage", href: "/solutions/energy-storage" },
    { label: "Hybrid Systems", href: "/solutions/hybrid-systems" },
  ],
  "Services": [
    { label: "Installation", href: "/services/installation" },
    { label: "Maintenance", href: "/services/maintenance" },
    { label: "Consulting", href: "/services/consulting" },
    { label: "Energy Auditing", href: "/services/energy-auditing" },
  ],
  "Legal": [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};

function NavItemRow({ item, depth = 0 }: { item: NavItem; depth?: number }) {
  return (
    <div>
      <div
        className="flex items-center gap-3 px-4 py-2.5 hover:bg-muted/20 transition-colors"
        style={{ paddingLeft: depth > 0 ? 40 : 16 }}
      >
        {depth > 0 && <div className="w-3 h-px bg-border/50 flex-shrink-0" />}
        <div className="flex items-center gap-2 flex-1">
          <span
            className={`text-sm ${item.cta ? "text-primary" : depth > 0 ? "text-foreground/70" : "text-foreground"}`}
            style={{ fontFamily: "Geist, sans-serif" }}
          >
            {item.label}
          </span>
          {item.badge && (
            <span
              className="text-[10px] px-1.5 py-0.5 rounded border border-primary/40 text-primary bg-primary/10"
              style={{ fontFamily: "Space Mono, monospace" }}
            >
              {item.badge}
            </span>
          )}
          {item.cta && (
            <span
              className="text-[10px] px-1.5 py-0.5 rounded border border-primary/40 text-primary bg-primary/10"
              style={{ fontFamily: "Space Mono, monospace" }}
            >
              CTA
            </span>
          )}
        </div>
        <span className="text-xs text-muted-foreground" style={{ fontFamily: "Space Mono, monospace" }}>
          {item.href}
        </span>
        {item.description && depth === 0 && (
          <span className="text-xs text-muted-foreground/60 hidden lg:block ml-2 max-w-48 truncate">
            — {item.description}
          </span>
        )}
      </div>
      {item.children?.map((child) => (
        <NavItemRow key={child.href} item={child} depth={depth + 1} />
      ))}
    </div>
  );
}

export function NavigationView() {
  return (
    <div className="space-y-8">
      {/* Primary Navigation */}
      <div>
        <h3 className="text-sm text-muted-foreground mb-3" style={{ fontFamily: "Space Mono, monospace" }}>
          PRIMARY NAVIGATION (Header)
        </h3>
        <div className="rounded border border-border overflow-hidden">
          {/* Simulated header bar */}
          <div className="bg-card border-b border-border px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-primary/20 border border-primary/40 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-primary/60" />
              </div>
              <span className="text-sm text-foreground" style={{ fontFamily: "Geist, sans-serif" }}>
                P.S. Trade & Suppliers
              </span>
            </div>
            <div className="flex items-center gap-4">
              {primaryNav.slice(0, -1).map((item) => (
                <div key={item.href} className="flex items-center gap-1">
                  <span className="text-xs text-foreground/70" style={{ fontFamily: "Geist, sans-serif" }}>
                    {item.label}
                  </span>
                  {item.children && <span className="text-muted-foreground text-[10px]">▾</span>}
                </div>
              ))}
              <div className="px-3 py-1 rounded bg-primary text-primary-foreground text-xs" style={{ fontFamily: "Geist, sans-serif" }}>
                Contact
              </div>
            </div>
          </div>
          {/* Navigation tree */}
          <div className="divide-y divide-border/30">
            {primaryNav.map((item) => (
              <NavItemRow key={item.href} item={item} depth={0} />
            ))}
          </div>
        </div>
      </div>

      {/* Admin Navigation */}
      <div>
        <h3 className="text-sm text-muted-foreground mb-3" style={{ fontFamily: "Space Mono, monospace" }}>
          ADMIN SIDEBAR NAVIGATION (Protected)
        </h3>
        <div className="rounded border border-purple-400/30 overflow-hidden" style={{ maxWidth: 400 }}>
          <div className="bg-purple-400/10 border-b border-purple-400/30 px-4 py-3">
            <span className="text-xs text-purple-300" style={{ fontFamily: "Space Mono, monospace" }}>
              /admin — AUTHENTICATED ONLY
            </span>
          </div>
          <div className="divide-y divide-border/30">
            {adminNav.map((item) => (
              <div key={item.href} className="flex items-center justify-between px-4 py-2.5 hover:bg-muted/20 transition-colors">
                <span className="text-sm text-foreground/80" style={{ fontFamily: "Geist, sans-serif" }}>
                  {item.label}
                </span>
                <span className="text-xs text-muted-foreground" style={{ fontFamily: "Space Mono, monospace" }}>
                  {item.href}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div>
        <h3 className="text-sm text-muted-foreground mb-3" style={{ fontFamily: "Space Mono, monospace" }}>
          FOOTER NAVIGATION
        </h3>
        <div className="rounded border border-border bg-card overflow-hidden">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border/40">
            {Object.entries(footerNav).map(([section, links]) => (
              <div key={section} className="p-4">
                <div className="text-xs text-muted-foreground mb-3" style={{ fontFamily: "Space Mono, monospace" }}>
                  {section.toUpperCase()}
                </div>
                <div className="space-y-2">
                  {links.map((link) => (
                    <div key={link.href} className="flex items-center justify-between gap-2">
                      <span className="text-xs text-foreground/70" style={{ fontFamily: "Geist, sans-serif" }}>
                        {link.label}
                      </span>
                      <span className="text-[10px] text-muted-foreground/50" style={{ fontFamily: "Space Mono, monospace" }}>
                        {link.href}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* Footer bottom bar */}
          <div className="border-t border-border/50 px-4 py-3 flex items-center justify-between bg-muted/10">
            <span className="text-xs text-muted-foreground" style={{ fontFamily: "Space Mono, monospace" }}>
              © 2025 P.S. Trade & Suppliers. All rights reserved.
            </span>
            <div className="flex items-center gap-3">
              <span className="text-xs text-muted-foreground/50" style={{ fontFamily: "Space Mono, monospace" }}>
                LinkedIn
              </span>
              <span className="text-xs text-muted-foreground/50" style={{ fontFamily: "Space Mono, monospace" }}>
                Facebook
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb pattern */}
      <div>
        <h3 className="text-sm text-muted-foreground mb-3" style={{ fontFamily: "Space Mono, monospace" }}>
          BREADCRUMB PATTERNS
        </h3>
        <div className="space-y-2">
          {[
            ["Home", "Solutions", "Solar Energy"],
            ["Home", "Services", "Installation"],
            ["Home", "Projects", "Nairobi Commercial Solar Farm"],
            ["Home", "Team", "Dr. Amara Osei"],
          ].map((crumb, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2 rounded border border-border/50 bg-card"
            >
              {crumb.map((segment, j) => (
                <div key={j} className="flex items-center gap-2">
                  {j > 0 && <span className="text-muted-foreground text-xs">/</span>}
                  <span
                    className={`text-xs ${j === crumb.length - 1 ? "text-foreground" : "text-primary underline"}`}
                    style={{ fontFamily: "Geist, sans-serif" }}
                  >
                    {segment}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
