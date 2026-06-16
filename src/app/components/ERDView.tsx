interface Relationship {
  from: string;
  to: string;
  label: string;
  type: "one-to-many" | "many-to-many" | "optional";
  color: string;
}

const entities = [
  { id: "solutions", label: "solutions", color: "#00e676", x: 60, y: 60 },
  { id: "services", label: "services", color: "#22d3ee", x: 60, y: 220 },
  { id: "projects", label: "projects", color: "#fbbf24", x: 320, y: 140 },
  { id: "project_solutions", label: "project_solutions", color: "#00e67660", x: 180, y: 60 },
  { id: "project_services", label: "project_services", color: "#22d3ee60", x: 180, y: 220 },
  { id: "faqs", label: "faqs", color: "#f43f5e", x: 60, y: 380 },
  { id: "team_members", label: "team_members", color: "#a78bfa", x: 320, y: 380 },
  { id: "contact_submissions", label: "contact_submissions", color: "#fb923c", x: 580, y: 220 },
  { id: "media", label: "media", color: "#2dd4bf", x: 580, y: 380 },
  { id: "pages", label: "pages", color: "#60a5fa", x: 580, y: 60 },
  { id: "admin_users", label: "admin_users", color: "#94a3b8", x: 320, y: 20 },
];

const relationships: Relationship[] = [
  { from: "solutions", to: "project_solutions", label: "1..N", type: "one-to-many", color: "#00e676" },
  { from: "services", to: "project_services", label: "1..N", type: "one-to-many", color: "#22d3ee" },
  { from: "projects", to: "project_solutions", label: "1..N", type: "one-to-many", color: "#fbbf24" },
  { from: "projects", to: "project_services", label: "1..N", type: "one-to-many", color: "#fbbf24" },
  { from: "solutions", to: "faqs", label: "1..N", type: "one-to-many", color: "#00e676" },
  { from: "services", to: "faqs", label: "1..N", type: "one-to-many", color: "#22d3ee" },
  { from: "services", to: "contact_submissions", label: "optional", type: "optional", color: "#6b7fa3" },
];

const ERD_TABLES = [
  {
    name: "solutions",
    color: "#00e676",
    fields: ["id (PK)", "slug", "title", "description", "cover_image_url", "sort_order"],
  },
  {
    name: "services",
    color: "#22d3ee",
    fields: ["id (PK)", "slug", "title", "description", "cover_image_url", "sort_order"],
  },
  {
    name: "projects",
    color: "#fbbf24",
    fields: ["id (PK)", "slug", "title", "client", "location", "capacity_kw", "status", "is_featured"],
  },
  {
    name: "project_solutions (pivot)",
    color: "#a3e635",
    fields: ["project_id (FK)", "solution_id (FK)"],
  },
  {
    name: "project_services (pivot)",
    color: "#67e8f9",
    fields: ["project_id (FK)", "service_id (FK)"],
  },
  {
    name: "faqs",
    color: "#f43f5e",
    fields: ["id (PK)", "question", "answer", "entity_type", "entity_id (polymorphic FK)"],
  },
  {
    name: "team_members",
    color: "#a78bfa",
    fields: ["id (PK)", "slug", "full_name", "role", "department", "bio"],
  },
  {
    name: "contact_submissions",
    color: "#fb923c",
    fields: ["id (PK)", "full_name", "email", "phone", "message", "service_interest (FK?)", "status"],
  },
  {
    name: "pages",
    color: "#60a5fa",
    fields: ["id (PK)", "slug", "title", "content (jsonb)", "is_published"],
  },
  {
    name: "media",
    color: "#2dd4bf",
    fields: ["id (PK)", "filename", "url", "alt_text", "mime_type", "size_bytes"],
  },
  {
    name: "admin_users",
    color: "#94a3b8",
    fields: ["id (PK)", "email", "password_hash", "role"],
  },
];

const relationshipDefs = [
  {
    from: "solutions",
    to: "project_solutions (pivot)",
    label: "1 : N",
    note: "solution linked to many projects",
    color: "#00e676",
  },
  {
    from: "services",
    to: "project_services (pivot)",
    label: "1 : N",
    note: "service linked to many projects",
    color: "#22d3ee",
  },
  {
    from: "projects",
    to: "project_solutions (pivot)",
    label: "1 : N",
    note: "project has many solutions",
    color: "#fbbf24",
  },
  {
    from: "projects",
    to: "project_services (pivot)",
    label: "1 : N",
    note: "project has many services",
    color: "#fbbf24",
  },
  {
    from: "solutions",
    to: "faqs",
    label: "1 : N",
    note: "solution has FAQ items",
    color: "#00e676",
  },
  {
    from: "services",
    to: "faqs",
    label: "1 : N",
    note: "service has FAQ items",
    color: "#22d3ee",
  },
  {
    from: "services",
    to: "contact_submissions",
    label: "1 : 0..N",
    note: "optional service interest on contact form",
    color: "#6b7fa3",
  },
];

function TableBlock({ table }: { table: (typeof ERD_TABLES)[0] }) {
  return (
    <div
      className="rounded border bg-card overflow-hidden"
      style={{ borderColor: table.color + "60" }}
    >
      <div className="px-3 py-2" style={{ backgroundColor: table.color + "18" }}>
        <span className="text-sm" style={{ fontFamily: "Space Mono, monospace", color: table.color }}>
          {table.name}
        </span>
      </div>
      <div className="divide-y divide-border/30">
        {table.fields.map((f) => (
          <div key={f} className="px-3 py-1.5">
            <span
              className={`text-xs ${f.includes("PK") ? "" : f.includes("FK") ? "text-cyan-300" : "text-foreground/70"}`}
              style={{
                fontFamily: "Space Mono, monospace",
                color: f.includes("PK") ? table.color : undefined,
              }}
            >
              {f}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ERDView() {
  return (
    <div className="space-y-8">
      {/* Relationship table */}
      <div>
        <h3 className="text-sm text-muted-foreground mb-3" style={{ fontFamily: "Space Mono, monospace" }}>
          RELATIONSHIP DEFINITIONS
        </h3>
        <div className="rounded border border-border overflow-hidden">
          <table className="w-full text-xs" style={{ fontFamily: "Space Mono, monospace" }}>
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left px-4 py-2 text-muted-foreground">FROM TABLE</th>
                <th className="text-left px-4 py-2 text-muted-foreground">TO TABLE</th>
                <th className="text-left px-4 py-2 text-muted-foreground">CARDINALITY</th>
                <th className="text-left px-4 py-2 text-muted-foreground">DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              {relationshipDefs.map((r, i) => (
                <tr key={i} className="border-b border-border/40 hover:bg-muted/10 transition-colors">
                  <td className="px-4 py-2" style={{ color: r.color }}>
                    {r.from}
                  </td>
                  <td className="px-4 py-2 text-foreground/80">{r.to}</td>
                  <td className="px-4 py-2">
                    <span
                      className="px-2 py-0.5 rounded border text-[10px]"
                      style={{ color: r.color, borderColor: r.color + "40", backgroundColor: r.color + "10" }}
                    >
                      {r.label}
                    </span>
                  </td>
                  <td className="px-4 py-2 text-muted-foreground">{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Entity blocks */}
      <div>
        <h3 className="text-sm text-muted-foreground mb-3" style={{ fontFamily: "Space Mono, monospace" }}>
          ENTITY DEFINITIONS
        </h3>
        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }}
        >
          {ERD_TABLES.map((t) => (
            <TableBlock key={t.name} table={t} />
          ))}
        </div>
      </div>

      {/* Notes */}
      <div className="rounded border border-amber-400/30 bg-amber-400/5 p-4 space-y-2">
        <p className="text-xs text-amber-300" style={{ fontFamily: "Space Mono, monospace" }}>
          DESIGN NOTES
        </p>
        {[
          "Projects ↔ Solutions and Projects ↔ Services are many-to-many via pivot tables, allowing any project to reference multiple solutions and services.",
          "FAQs use a polymorphic entity_type + entity_id pattern so one table serves both Solutions and Services without separate FK columns.",
          "contact_submissions.service_interest is a nullable FK — the contact form can optionally capture service interest.",
          "All slugs are UNIQUE and indexed — they drive SEO-friendly URLs and dynamic routing.",
          "jsonb content field in pages allows flexible block-based page building without schema migrations.",
        ].map((n, i) => (
          <p key={i} className="text-xs text-muted-foreground leading-relaxed">
            <span className="text-amber-400">→</span> {n}
          </p>
        ))}
      </div>
    </div>
  );
}
