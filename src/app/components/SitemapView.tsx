import { useState } from "react";

type NodeType = "root" | "main" | "sub" | "dynamic" | "admin";

interface SitemapNode {
  id: string;
  label: string;
  url: string;
  type: NodeType;
  children?: SitemapNode[];
  badge?: string;
}

const sitemapData: SitemapNode = {
  id: "root",
  label: "pstrade.com",
  url: "/",
  type: "root",
  children: [
    {
      id: "home",
      label: "Home",
      url: "/",
      type: "main",
      badge: "INDEX",
    },
    {
      id: "about",
      label: "About Us",
      url: "/about",
      type: "main",
      children: [
        { id: "about-mission", label: "Mission & Vision", url: "/about#mission", type: "sub" },
        { id: "about-history", label: "Company History", url: "/about#history", type: "sub" },
        { id: "about-certifications", label: "Certifications", url: "/about#certifications", type: "sub" },
      ],
    },
    {
      id: "solutions",
      label: "Solutions",
      url: "/solutions",
      type: "main",
      children: [
        { id: "sol-solar", label: "Solar Energy", url: "/solutions/solar-energy", type: "sub" },
        { id: "sol-wind", label: "Wind Energy", url: "/solutions/wind-energy", type: "sub" },
        { id: "sol-storage", label: "Energy Storage", url: "/solutions/energy-storage", type: "sub" },
        { id: "sol-hybrid", label: "Hybrid Systems", url: "/solutions/hybrid-systems", type: "sub" },
        { id: "sol-faq", label: "Solution FAQs", url: "/solutions/[slug]#faq", type: "dynamic", badge: "FAQ" },
      ],
    },
    {
      id: "services",
      label: "Services",
      url: "/services",
      type: "main",
      children: [
        { id: "srv-install", label: "Installation", url: "/services/installation", type: "sub" },
        { id: "srv-maintenance", label: "Maintenance & O&M", url: "/services/maintenance", type: "sub" },
        { id: "srv-consulting", label: "Consulting & Design", url: "/services/consulting", type: "sub" },
        { id: "srv-audit", label: "Energy Auditing", url: "/services/energy-auditing", type: "sub" },
        { id: "srv-faq", label: "Service FAQs", url: "/services/[slug]#faq", type: "dynamic", badge: "FAQ" },
      ],
    },
    {
      id: "projects",
      label: "Projects",
      url: "/projects",
      type: "main",
      children: [
        { id: "proj-list", label: "All Projects", url: "/projects", type: "sub" },
        { id: "proj-filter", label: "Filter by Service/Solution", url: "/projects?service=&solution=", type: "sub" },
        { id: "proj-detail", label: "Project Detail", url: "/projects/[slug]", type: "dynamic", badge: "DYNAMIC" },
      ],
    },
    {
      id: "team",
      label: "Team",
      url: "/team",
      type: "main",
      children: [
        { id: "team-list", label: "All Members", url: "/team", type: "sub" },
        { id: "team-profile", label: "Member Profile", url: "/team/[slug]", type: "dynamic", badge: "DYNAMIC" },
      ],
    },
    {
      id: "contact",
      label: "Contact",
      url: "/contact",
      type: "main",
      children: [
        { id: "contact-form", label: "Contact Form", url: "/contact#form", type: "sub" },
        { id: "contact-map", label: "Google Map", url: "/contact#map", type: "sub" },
      ],
    },
    {
      id: "admin",
      label: "Admin Dashboard",
      url: "/admin",
      type: "admin",
      badge: "PROTECTED",
      children: [
        { id: "admin-pages", label: "Pages", url: "/admin/pages", type: "admin" },
        { id: "admin-solutions", label: "Solutions", url: "/admin/solutions", type: "admin" },
        { id: "admin-services", label: "Services", url: "/admin/services", type: "admin" },
        { id: "admin-projects", label: "Projects", url: "/admin/projects", type: "admin" },
        { id: "admin-team", label: "Team Members", url: "/admin/team", type: "admin" },
        { id: "admin-faqs", label: "FAQs", url: "/admin/faqs", type: "admin" },
        { id: "admin-contacts", label: "Contact Submissions", url: "/admin/contacts", type: "admin" },
        { id: "admin-media", label: "Media Library", url: "/admin/media", type: "admin" },
      ],
    },
  ],
};

const typeConfig: Record<NodeType, { bg: string; border: string; text: string; dot: string }> = {
  root: { bg: "bg-primary/10", border: "border-primary", text: "text-primary", dot: "bg-primary" },
  main: { bg: "bg-secondary", border: "border-border", text: "text-foreground", dot: "bg-blue-400" },
  sub: { bg: "bg-muted/50", border: "border-border/50", text: "text-foreground/80", dot: "bg-muted-foreground" },
  dynamic: { bg: "bg-amber-500/10", border: "border-amber-500/40", text: "text-amber-400", dot: "bg-amber-400" },
  admin: { bg: "bg-purple-500/10", border: "border-purple-500/40", text: "text-purple-300", dot: "bg-purple-400" },
};

function SitemapNode({ node, depth = 0 }: { node: SitemapNode; depth?: number }) {
  const [expanded, setExpanded] = useState(depth < 2);
  const config = typeConfig[node.type];
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="flex flex-col gap-1" style={{ marginLeft: depth === 0 ? 0 : 24 }}>
      <div className="flex items-start gap-2">
        {depth > 0 && (
          <div className="flex flex-col items-center mt-2" style={{ minWidth: 16 }}>
            <div className="w-px bg-border/40" style={{ height: 12 }} />
            <div className="w-3 h-px bg-border/40" />
          </div>
        )}
        <div
          className={`flex-1 flex items-center gap-2 px-3 py-2 rounded border cursor-pointer transition-all hover:brightness-110 ${config.bg} ${config.border}`}
          onClick={() => hasChildren && setExpanded(!expanded)}
        >
          <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${config.dot}`} />
          <div className="flex-1 min-w-0">
            <span className={`text-sm ${config.text}`} style={{ fontFamily: "Geist, sans-serif" }}>
              {node.label}
            </span>
            <span className="text-xs text-muted-foreground ml-2" style={{ fontFamily: "Space Mono, monospace" }}>
              {node.url}
            </span>
          </div>
          {node.badge && (
            <span
              className={`text-xs px-1.5 py-0.5 rounded border ${
                node.type === "admin"
                  ? "border-purple-500/40 text-purple-300 bg-purple-500/10"
                  : node.type === "dynamic"
                  ? "border-amber-500/40 text-amber-400 bg-amber-500/10"
                  : node.type === "root"
                  ? "border-primary/40 text-primary bg-primary/10"
                  : "border-border/50 text-muted-foreground bg-muted/30"
              }`}
              style={{ fontFamily: "Space Mono, monospace" }}
            >
              {node.badge}
            </span>
          )}
          {hasChildren && (
            <span className="text-muted-foreground text-xs ml-1">{expanded ? "▾" : "▸"}</span>
          )}
        </div>
      </div>
      {hasChildren && expanded && (
        <div className="flex flex-col gap-1">
          {node.children!.map((child) => (
            <SitemapNode key={child.id} node={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export function SitemapView() {
  return (
    <div>
      <div className="flex items-center gap-4 mb-6 flex-wrap">
        {[
          { dot: "bg-primary", label: "Root / Index" },
          { dot: "bg-blue-400", label: "Main Pages" },
          { dot: "bg-muted-foreground", label: "Subsections / Anchors" },
          { dot: "bg-amber-400", label: "Dynamic Routes" },
          { dot: "bg-purple-400", label: "Admin Routes" },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-1.5">
            <div className={`w-2 h-2 rounded-full ${item.dot}`} />
            <span className="text-xs text-muted-foreground" style={{ fontFamily: "Space Mono, monospace" }}>
              {item.label}
            </span>
          </div>
        ))}
      </div>
      <SitemapNode node={sitemapData} depth={0} />
    </div>
  );
}
