const swatches = [
  {
    group: "Primary",
    items: [
      { name: "Primary", hex: "#049DBF", token: "--brand-primary", text: "white" },
      { name: "Primary Dark", hex: "#037a96", token: "--brand-primary-dark", text: "white" },
      { name: "Primary Light", hex: "#e6f6fa", token: "--brand-primary-light", text: "#049DBF" },
    ],
  },
  {
    group: "Secondary",
    items: [
      { name: "Secondary", hex: "#F27127", token: "--brand-secondary", text: "white" },
      { name: "Secondary Dark", hex: "#c4591a", token: "--brand-secondary-dark", text: "white" },
      { name: "Secondary Light", hex: "#fef0e6", token: "--brand-secondary-light", text: "#F27127" },
    ],
  },
  {
    group: "Accent",
    items: [
      { name: "Green", hex: "#84BF49", token: "--brand-green", text: "white" },
      { name: "Green Dark", hex: "#639436", token: "--brand-green-dark", text: "white" },
      { name: "Green Light", hex: "#f0f7e7", token: "--brand-green-light", text: "#639436" },
    ],
  },
  {
    group: "Yellow",
    items: [
      { name: "Yellow", hex: "#F2E205", token: "--brand-yellow", text: "#0D0D0D" },
      { name: "Yellow Dark", hex: "#c2b504", token: "--brand-yellow-dark", text: "#0D0D0D" },
    ],
  },
  {
    group: "Neutral",
    items: [
      { name: "Dark", hex: "#0D0D0D", token: "--brand-dark", text: "white" },
      { name: "Gray 600", hex: "#6b7280", token: "--muted-foreground", text: "white" },
      { name: "Gray 200", hex: "#e5e7eb", token: "--border", text: "#0D0D0D" },
      { name: "Gray 50", hex: "#f9fafb", token: "--muted", text: "#0D0D0D" },
      { name: "White", hex: "#ffffff", token: "--background", text: "#0D0D0D", bordered: true },
    ],
  },
];

export function DSColors() {
  return (
    <div className="space-y-10">
      {swatches.map((group) => (
        <div key={group.group}>
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-3">
            {group.group}
          </p>
          <div className="flex flex-wrap gap-4">
            {group.items.map((s) => (
              <div key={s.name} className="flex flex-col gap-2 w-36">
                <div
                  className="h-20 rounded-xl shadow-sm"
                  style={{
                    background: s.hex,
                    border: s.bordered ? "1px solid #e5e7eb" : "none",
                  }}
                />
                <div>
                  <p className="text-sm font-semibold text-foreground">{s.name}</p>
                  <p className="text-xs text-muted-foreground" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                    {s.hex}
                  </p>
                  <p className="text-[10px] text-muted-foreground/70 mt-0.5" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                    {s.token}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Usage guidance */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
        {[
          {
            color: "#049DBF",
            bg: "#e6f6fa",
            label: "Primary Use",
            desc: "CTAs, links, interactive states, primary buttons, focus rings, navigation highlights.",
          },
          {
            color: "#F27127",
            bg: "#fef0e6",
            label: "Secondary Use",
            desc: "Secondary CTAs, highlights, hover accents, promotional banners, energy stats.",
          },
          {
            color: "#84BF49",
            bg: "#f0f7e7",
            label: "Accent Use",
            desc: "Success states, eco badges, sustainability metrics, checkmarks, positive indicators.",
          },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-xl p-4 border"
            style={{ borderColor: item.color + "40", background: item.bg }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full" style={{ background: item.color }} />
              <span className="text-sm font-semibold" style={{ color: item.color }}>
                {item.label}
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
