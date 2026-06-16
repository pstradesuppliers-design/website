import { useState } from "react";

interface Column {
  name: string;
  type: string;
  constraints: string[];
  note?: string;
}

interface Table {
  id: string;
  name: string;
  color: string;
  columns: Column[];
}

const tables: Table[] = [
  {
    id: "pages",
    name: "pages",
    color: "border-blue-400",
    columns: [
      { name: "id", type: "uuid", constraints: ["PK", "DEFAULT uuid_generate_v4()"] },
      { name: "slug", type: "varchar(100)", constraints: ["UNIQUE", "NOT NULL"] },
      { name: "title", type: "varchar(200)", constraints: ["NOT NULL"] },
      { name: "meta_title", type: "varchar(200)", constraints: [] },
      { name: "meta_description", type: "text", constraints: [] },
      { name: "hero_image_url", type: "text", constraints: [] },
      { name: "content", type: "jsonb", constraints: [], note: "flexible content blocks" },
      { name: "is_published", type: "boolean", constraints: ["DEFAULT true"] },
      { name: "created_at", type: "timestamptz", constraints: ["DEFAULT now()"] },
      { name: "updated_at", type: "timestamptz", constraints: ["DEFAULT now()"] },
    ],
  },
  {
    id: "solutions",
    name: "solutions",
    color: "border-primary",
    columns: [
      { name: "id", type: "uuid", constraints: ["PK", "DEFAULT uuid_generate_v4()"] },
      { name: "slug", type: "varchar(100)", constraints: ["UNIQUE", "NOT NULL"] },
      { name: "title", type: "varchar(200)", constraints: ["NOT NULL"] },
      { name: "subtitle", type: "varchar(300)", constraints: [] },
      { name: "description", type: "text", constraints: [] },
      { name: "icon", type: "varchar(100)", constraints: [] },
      { name: "cover_image_url", type: "text", constraints: [] },
      { name: "sort_order", type: "integer", constraints: ["DEFAULT 0"] },
      { name: "is_published", type: "boolean", constraints: ["DEFAULT true"] },
      { name: "meta_title", type: "varchar(200)", constraints: [] },
      { name: "meta_description", type: "text", constraints: [] },
      { name: "created_at", type: "timestamptz", constraints: ["DEFAULT now()"] },
      { name: "updated_at", type: "timestamptz", constraints: ["DEFAULT now()"] },
    ],
  },
  {
    id: "services",
    name: "services",
    color: "border-cyan-400",
    columns: [
      { name: "id", type: "uuid", constraints: ["PK", "DEFAULT uuid_generate_v4()"] },
      { name: "slug", type: "varchar(100)", constraints: ["UNIQUE", "NOT NULL"] },
      { name: "title", type: "varchar(200)", constraints: ["NOT NULL"] },
      { name: "subtitle", type: "varchar(300)", constraints: [] },
      { name: "description", type: "text", constraints: [] },
      { name: "icon", type: "varchar(100)", constraints: [] },
      { name: "cover_image_url", type: "text", constraints: [] },
      { name: "sort_order", type: "integer", constraints: ["DEFAULT 0"] },
      { name: "is_published", type: "boolean", constraints: ["DEFAULT true"] },
      { name: "meta_title", type: "varchar(200)", constraints: [] },
      { name: "meta_description", type: "text", constraints: [] },
      { name: "created_at", type: "timestamptz", constraints: ["DEFAULT now()"] },
      { name: "updated_at", type: "timestamptz", constraints: ["DEFAULT now()"] },
    ],
  },
  {
    id: "projects",
    name: "projects",
    color: "border-amber-400",
    columns: [
      { name: "id", type: "uuid", constraints: ["PK", "DEFAULT uuid_generate_v4()"] },
      { name: "slug", type: "varchar(100)", constraints: ["UNIQUE", "NOT NULL"] },
      { name: "title", type: "varchar(200)", constraints: ["NOT NULL"] },
      { name: "client", type: "varchar(200)", constraints: [] },
      { name: "location", type: "varchar(200)", constraints: [] },
      { name: "capacity_kw", type: "numeric(10,2)", constraints: [] },
      { name: "completion_date", type: "date", constraints: [] },
      { name: "description", type: "text", constraints: [] },
      { name: "cover_image_url", type: "text", constraints: [] },
      { name: "gallery_urls", type: "text[]", constraints: [] },
      { name: "status", type: "varchar(50)", constraints: ["DEFAULT 'completed'"], note: "completed|ongoing|upcoming" },
      { name: "is_featured", type: "boolean", constraints: ["DEFAULT false"] },
      { name: "is_published", type: "boolean", constraints: ["DEFAULT true"] },
      { name: "meta_title", type: "varchar(200)", constraints: [] },
      { name: "meta_description", type: "text", constraints: [] },
      { name: "created_at", type: "timestamptz", constraints: ["DEFAULT now()"] },
      { name: "updated_at", type: "timestamptz", constraints: ["DEFAULT now()"] },
    ],
  },
  {
    id: "project_solutions",
    name: "project_solutions",
    color: "border-primary/60",
    columns: [
      { name: "project_id", type: "uuid", constraints: ["FK → projects.id", "ON DELETE CASCADE"] },
      { name: "solution_id", type: "uuid", constraints: ["FK → solutions.id", "ON DELETE CASCADE"] },
      { name: "PRIMARY KEY", type: "(project_id, solution_id)", constraints: [] },
    ],
  },
  {
    id: "project_services",
    name: "project_services",
    color: "border-cyan-400/60",
    columns: [
      { name: "project_id", type: "uuid", constraints: ["FK → projects.id", "ON DELETE CASCADE"] },
      { name: "service_id", type: "uuid", constraints: ["FK → services.id", "ON DELETE CASCADE"] },
      { name: "PRIMARY KEY", type: "(project_id, service_id)", constraints: [] },
    ],
  },
  {
    id: "team_members",
    name: "team_members",
    color: "border-purple-400",
    columns: [
      { name: "id", type: "uuid", constraints: ["PK", "DEFAULT uuid_generate_v4()"] },
      { name: "slug", type: "varchar(100)", constraints: ["UNIQUE", "NOT NULL"] },
      { name: "full_name", type: "varchar(200)", constraints: ["NOT NULL"] },
      { name: "role", type: "varchar(200)", constraints: [] },
      { name: "department", type: "varchar(100)", constraints: [] },
      { name: "bio", type: "text", constraints: [] },
      { name: "photo_url", type: "text", constraints: [] },
      { name: "email", type: "varchar(200)", constraints: [] },
      { name: "linkedin_url", type: "text", constraints: [] },
      { name: "sort_order", type: "integer", constraints: ["DEFAULT 0"] },
      { name: "is_published", type: "boolean", constraints: ["DEFAULT true"] },
      { name: "created_at", type: "timestamptz", constraints: ["DEFAULT now()"] },
      { name: "updated_at", type: "timestamptz", constraints: ["DEFAULT now()"] },
    ],
  },
  {
    id: "faqs",
    name: "faqs",
    color: "border-rose-400",
    columns: [
      { name: "id", type: "uuid", constraints: ["PK", "DEFAULT uuid_generate_v4()"] },
      { name: "question", type: "text", constraints: ["NOT NULL"] },
      { name: "answer", type: "text", constraints: ["NOT NULL"] },
      { name: "entity_type", type: "varchar(50)", constraints: ["NOT NULL"], note: "solution | service" },
      { name: "entity_id", type: "uuid", constraints: ["NOT NULL"], note: "FK to solutions or services" },
      { name: "sort_order", type: "integer", constraints: ["DEFAULT 0"] },
      { name: "is_published", type: "boolean", constraints: ["DEFAULT true"] },
      { name: "created_at", type: "timestamptz", constraints: ["DEFAULT now()"] },
    ],
  },
  {
    id: "contact_submissions",
    name: "contact_submissions",
    color: "border-orange-400",
    columns: [
      { name: "id", type: "uuid", constraints: ["PK", "DEFAULT uuid_generate_v4()"] },
      { name: "full_name", type: "varchar(200)", constraints: ["NOT NULL"] },
      { name: "email", type: "varchar(200)", constraints: ["NOT NULL"] },
      { name: "phone", type: "varchar(30)", constraints: [] },
      { name: "company", type: "varchar(200)", constraints: [] },
      { name: "subject", type: "varchar(300)", constraints: [] },
      { name: "message", type: "text", constraints: ["NOT NULL"] },
      { name: "service_interest", type: "uuid", constraints: [], note: "FK → services.id (optional)" },
      { name: "status", type: "varchar(50)", constraints: ["DEFAULT 'new'"], note: "new|read|replied|archived" },
      { name: "ip_address", type: "inet", constraints: [] },
      { name: "submitted_at", type: "timestamptz", constraints: ["DEFAULT now()"] },
    ],
  },
  {
    id: "media",
    name: "media",
    color: "border-teal-400",
    columns: [
      { name: "id", type: "uuid", constraints: ["PK", "DEFAULT uuid_generate_v4()"] },
      { name: "filename", type: "varchar(300)", constraints: ["NOT NULL"] },
      { name: "url", type: "text", constraints: ["NOT NULL"] },
      { name: "alt_text", type: "varchar(300)", constraints: [] },
      { name: "mime_type", type: "varchar(100)", constraints: [] },
      { name: "size_bytes", type: "bigint", constraints: [] },
      { name: "width", type: "integer", constraints: [] },
      { name: "height", type: "integer", constraints: [] },
      { name: "uploaded_at", type: "timestamptz", constraints: ["DEFAULT now()"] },
    ],
  },
  {
    id: "admin_users",
    name: "admin_users",
    color: "border-slate-400",
    columns: [
      { name: "id", type: "uuid", constraints: ["PK", "DEFAULT uuid_generate_v4()"] },
      { name: "email", type: "varchar(200)", constraints: ["UNIQUE", "NOT NULL"] },
      { name: "password_hash", type: "text", constraints: ["NOT NULL"] },
      { name: "full_name", type: "varchar(200)", constraints: [] },
      { name: "role", type: "varchar(50)", constraints: ["DEFAULT 'editor'"], note: "superadmin|editor" },
      { name: "last_login", type: "timestamptz", constraints: [] },
      { name: "created_at", type: "timestamptz", constraints: ["DEFAULT now()"] },
    ],
  },
];

function constraintBadge(c: string) {
  if (c.startsWith("PK")) return "text-primary border-primary/40 bg-primary/10";
  if (c.startsWith("FK")) return "text-cyan-300 border-cyan-400/40 bg-cyan-400/10";
  if (c.startsWith("UNIQUE")) return "text-amber-300 border-amber-400/40 bg-amber-400/10";
  if (c.startsWith("NOT NULL")) return "text-rose-300 border-rose-400/40 bg-rose-400/10";
  if (c.startsWith("DEFAULT")) return "text-muted-foreground border-border/50 bg-muted/30";
  if (c.startsWith("ON DELETE")) return "text-orange-300 border-orange-400/40 bg-orange-400/10";
  return "text-muted-foreground border-border/50 bg-muted/30";
}

function TableCard({ table }: { table: Table }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className={`rounded border ${table.color} bg-card overflow-hidden`}>
      <div
        className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-muted/20 transition-colors"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${table.color.replace("border-", "bg-")}`} />
          <span className="text-sm text-foreground" style={{ fontFamily: "Space Mono, monospace" }}>
            {table.name}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">{table.columns.length} cols</span>
          <span className="text-muted-foreground text-xs">{expanded ? "▾" : "▸"}</span>
        </div>
      </div>
      {expanded && (
        <div className="border-t border-border/50">
          {table.columns.map((col, i) => (
            <div
              key={col.name}
              className={`flex items-start gap-3 px-4 py-2 text-xs ${
                i % 2 === 0 ? "bg-transparent" : "bg-muted/10"
              }`}
            >
              <div className="w-36 flex-shrink-0">
                <span
                  className={col.constraints.some((c) => c.startsWith("PK")) ? "text-primary" : "text-foreground/90"}
                  style={{ fontFamily: "Space Mono, monospace" }}
                >
                  {col.name}
                </span>
              </div>
              <div className="w-32 flex-shrink-0">
                <span className="text-muted-foreground" style={{ fontFamily: "Space Mono, monospace" }}>
                  {col.type}
                </span>
              </div>
              <div className="flex flex-wrap gap-1 flex-1">
                {col.constraints.map((c) => (
                  <span
                    key={c}
                    className={`px-1.5 py-0.5 rounded border text-[10px] ${constraintBadge(c)}`}
                    style={{ fontFamily: "Space Mono, monospace" }}
                  >
                    {c}
                  </span>
                ))}
                {col.note && (
                  <span className="text-muted-foreground/70 text-[10px] italic mt-0.5">— {col.note}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function SchemaView() {
  return (
    <div>
      <div className="flex items-center gap-4 mb-6 flex-wrap">
        {[
          { cls: "text-primary border-primary/40 bg-primary/10", label: "PK" },
          { cls: "text-cyan-300 border-cyan-400/40 bg-cyan-400/10", label: "FK" },
          { cls: "text-amber-300 border-amber-400/40 bg-amber-400/10", label: "UNIQUE" },
          { cls: "text-rose-300 border-rose-400/40 bg-rose-400/10", label: "NOT NULL" },
          { cls: "text-orange-300 border-orange-400/40 bg-orange-400/10", label: "CASCADE" },
        ].map((item) => (
          <span
            key={item.label}
            className={`text-xs px-2 py-1 rounded border ${item.cls}`}
            style={{ fontFamily: "Space Mono, monospace" }}
          >
            {item.label}
          </span>
        ))}
      </div>
      <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(600px, 1fr))" }}>
        {tables.map((table) => (
          <TableCard key={table.id} table={table} />
        ))}
      </div>
    </div>
  );
}
