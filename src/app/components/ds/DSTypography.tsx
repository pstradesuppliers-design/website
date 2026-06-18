const typeScale = [
  { label: "Display / H1", size: "clamp(2rem,4vw,3.5rem)", weight: "800", family: "Plus Jakarta Sans", usage: "Hero headlines, page titles" },
  { label: "H2", size: "clamp(1.5rem,3vw,2.5rem)", weight: "700", family: "Plus Jakarta Sans", usage: "Section headings" },
  { label: "H3", size: "clamp(1.25rem,2vw,1.75rem)", weight: "700", family: "Plus Jakarta Sans", usage: "Card headings, sub-sections" },
  { label: "H4", size: "1.25rem / 20px", weight: "600", family: "Plus Jakarta Sans", usage: "Component headings, labels" },
  { label: "Large Body", size: "1.125rem / 18px", weight: "400", family: "Inter", usage: "Lead paragraphs, intros" },
  { label: "Body", size: "1rem / 16px", weight: "400", family: "Inter", usage: "Default body copy, descriptions" },
  { label: "Small", size: "0.875rem / 14px", weight: "400", family: "Inter", usage: "Captions, meta info, table data" },
  { label: "Caption", size: "0.75rem / 12px", weight: "500", family: "Inter", usage: "Labels, tags, timestamps" },
  { label: "Mono", size: "0.875rem / 14px", weight: "400", family: "JetBrains Mono", usage: "Code, tokens, technical values" },
];

export function DSTypography() {
  return (
    <div className="space-y-12">
      {/* Specimen */}
      <div className="rounded-2xl border border-border bg-card p-8 space-y-6">
        <div>
          <h1 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 800, lineHeight: 1.1 }}>
            Powering a{" "}
            <span style={{ color: "var(--brand-primary)" }}>Sustainable</span>{" "}
            Future
          </h1>
          <h2 className="mt-3" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
            Solar & Renewable Energy Solutions
          </h2>
          <h3 className="mt-2" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
            Industrial, Commercial & Residential
          </h3>
        </div>
        <p className="text-lg text-muted-foreground" style={{ fontFamily: "Inter, sans-serif" }}>
          P.S. Trade & Suppliers delivers end-to-end renewable energy systems  from consultation and design through to installation, commissioning, and lifetime maintenance.
        </p>
        <p className="text-base text-muted-foreground" style={{ fontFamily: "Inter, sans-serif" }}>
          With over a decade of experience across East Africa, we've helped hundreds of clients reduce their carbon footprint and achieve energy independence.
        </p>
        <p className="text-sm text-muted-foreground" style={{ fontFamily: "Inter, sans-serif" }}>
          Projects · Certifications · Energy Auditing · Maintenance & O&M
        </p>
        <p className="text-xs text-muted-foreground uppercase tracking-widest" style={{ fontFamily: "Inter, sans-serif" }}>
          Est. 2012 · Licensed & Insured · ISO 9001 Certified
        </p>
        <p className="text-sm" style={{ fontFamily: "JetBrains Mono, monospace", color: "var(--brand-primary)" }}>
          capacity: 4.2 MW · projects: 312 · uptime: 99.8%
        </p>
      </div>

      {/* Scale table */}
      <div className="rounded-2xl border border-border overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              {["Style", "Size", "Weight", "Family", "Usage"].map((h) => (
                <th key={h} className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {typeScale.map((row, i) => (
              <tr key={row.label} className={`border-b border-border/50 ${i % 2 === 0 ? "" : "bg-muted/20"}`}>
                <td className="px-4 py-3 text-sm font-medium text-foreground">{row.label}</td>
                <td className="px-4 py-3 text-xs text-muted-foreground" style={{ fontFamily: "JetBrains Mono, monospace" }}>{row.size}</td>
                <td className="px-4 py-3 text-xs text-muted-foreground" style={{ fontFamily: "JetBrains Mono, monospace" }}>{row.weight}</td>
                <td className="px-4 py-3 text-xs text-muted-foreground">{row.family}</td>
                <td className="px-4 py-3 text-xs text-muted-foreground">{row.usage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Font pairings */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { name: "Plus Jakarta Sans", role: "Headings & UI", weights: ["300", "400", "500", "600", "700", "800"], color: "#049DBF" },
          { name: "Inter", role: "Body & Labels", weights: ["300", "400", "500", "600"], color: "#84BF49" },
          { name: "JetBrains Mono", role: "Code & Data", weights: ["400", "500"], color: "#F27127" },
        ].map((font) => (
          <div key={font.name} className="rounded-2xl border border-border bg-card p-5">
            <div
              className="text-xs font-medium uppercase tracking-wider mb-3"
              style={{ color: font.color }}
            >
              {font.role}
            </div>
            <p
              className="text-2xl mb-1"
              style={{ fontFamily: `${font.name}, sans-serif`, fontWeight: 700 }}
            >
              {font.name}
            </p>
            <p className="text-sm text-muted-foreground mb-4" style={{ fontFamily: `${font.name}, sans-serif` }}>
              ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
              abcdefghijklmnopqrstuvwxyz<br />
              0123456789 !@#$%&
            </p>
            <div className="flex flex-wrap gap-1">
              {font.weights.map((w) => (
                <span
                  key={w}
                  className="text-xs px-2 py-0.5 rounded-full border border-border text-muted-foreground"
                  style={{ fontFamily: "JetBrains Mono, monospace" }}
                >
                  {w}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
