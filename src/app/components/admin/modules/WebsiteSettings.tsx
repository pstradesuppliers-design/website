import { useState } from "react";
import { Save, Globe, Phone, Mail, MapPin, Share2, Search } from "lucide-react";
import { useSiteData } from "../../../context/SiteDataContext";
import type { SiteSettings } from "../../../context/SiteDataContext";
import { ImageUploader } from "../shared/ImageUploader";

type Tab = "company" | "contact" | "seo" | "social";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label className="block text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--muted-foreground)" }}>{label}</label>
      {children}
    </div>
  );
}

const inp = "w-full rounded-xl px-3 py-2.5 text-sm border focus:outline-none focus:ring-2";
const inpStyle = { borderColor: "var(--border)", background: "var(--input-background)" };

export function WebsiteSettings() {
  const { siteSettings, setSiteSettings } = useSiteData();
  const [draft, setDraft] = useState<SiteSettings>(siteSettings);
  const [tab, setTab] = useState<Tab>("company");
  const [saved, setSaved] = useState(false);

  const set = <K extends keyof SiteSettings>(k: K, v: SiteSettings[K]) =>
    setDraft((d) => ({ ...d, [k]: v }));

  const handleSave = () => {
    setSiteSettings(draft);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const tabs: { id: Tab; label: string; icon: React.ComponentType<{ size?: number }> }[] = [
    { id: "company", label: "Company Info", icon: Globe },
    { id: "contact", label: "Contact Info", icon: Phone },
    { id: "seo",     label: "SEO",          icon: Search },
    { id: "social",  label: "Social Links", icon: Share2 },
  ];

  return (
    <div className="p-6">
      <div className="flex items-center justify-between gap-4 mb-6">
        <div>
          <h2 style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>Website Settings</h2>
          <p className="text-sm mt-1" style={{ color: "var(--muted-foreground)" }}>
            Changes are applied to the live website immediately on save.
          </p>
        </div>
        <button
          onClick={handleSave}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90"
          style={{ background: saved ? "var(--brand-green)" : "var(--brand-primary)", fontFamily: "Plus Jakarta Sans, sans-serif" }}
        >
          <Save size={15} /> {saved ? "Saved!" : "Save Changes"}
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 p-1 rounded-xl mb-6" style={{ background: "var(--muted)" }}>
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold transition-all"
            style={{
              background: tab === t.id ? "var(--card)" : "transparent",
              color: tab === t.id ? "var(--foreground)" : "var(--muted-foreground)",
              boxShadow: tab === t.id ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
            }}
          >
            <t.icon size={13} /> {t.label}
          </button>
        ))}
      </div>

      <div className="rounded-2xl border p-6 space-y-5" style={{ background: "var(--card)", borderColor: "var(--border)" }}>

        {tab === "company" && (
          <>
            <Field label="Site Name">
              <input type="text" value={draft.siteName} onChange={(e) => set("siteName", e.target.value)} className={inp} style={inpStyle} />
            </Field>
            <Field label="Tagline">
              <input type="text" value={draft.tagline} onChange={(e) => set("tagline", e.target.value)} className={inp} style={inpStyle} />
            </Field>
            <Field label="Physical Address">
              <textarea value={draft.address} onChange={(e) => set("address", e.target.value)} rows={2} className={inp} style={{ ...inpStyle, resize: "none" }} />
            </Field>
            <Field label="Google Maps Embed URL">
              <textarea value={draft.mapEmbed} onChange={(e) => set("mapEmbed", e.target.value)} rows={3} className={inp} style={{ ...inpStyle, resize: "none", fontFamily: "monospace", fontSize: "11px" }} />
            </Field>
          </>
        )}

        {tab === "contact" && (
          <>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Primary Phone">
                <input type="tel" value={draft.phone1} onChange={(e) => set("phone1", e.target.value)} className={inp} style={inpStyle} />
              </Field>
              <Field label="Secondary Phone">
                <input type="tel" value={draft.phone2} onChange={(e) => set("phone2", e.target.value)} className={inp} style={inpStyle} />
              </Field>
              <Field label="Primary Email">
                <input type="email" value={draft.email1} onChange={(e) => set("email1", e.target.value)} className={inp} style={inpStyle} />
              </Field>
              <Field label="Sales Email">
                <input type="email" value={draft.email2} onChange={(e) => set("email2", e.target.value)} className={inp} style={inpStyle} />
              </Field>
              <Field label="WhatsApp Number (with country code)">
                <input type="text" value={draft.whatsapp} onChange={(e) => set("whatsapp", e.target.value)} className={inp} style={inpStyle} placeholder="+9779840000001" />
              </Field>
            </div>
          </>
        )}

        {tab === "seo" && (
          <>
            <Field label="SEO Page Title">
              <input type="text" value={draft.seoTitle} onChange={(e) => set("seoTitle", e.target.value)} className={inp} style={inpStyle} />
              <p className="text-xs mt-1" style={{ color: "var(--muted-foreground)" }}>{draft.seoTitle.length}/60 chars — keep under 60 for best Google display</p>
            </Field>
            <Field label="Meta Description">
              <textarea value={draft.seoDescription} onChange={(e) => set("seoDescription", e.target.value)} rows={3} className={inp} style={{ ...inpStyle, resize: "none" }} />
              <p className="text-xs mt-1" style={{ color: "var(--muted-foreground)" }}>{draft.seoDescription.length}/160 chars</p>
            </Field>
            <Field label="Keywords (comma-separated)">
              <input type="text" value={draft.seoKeywords} onChange={(e) => set("seoKeywords", e.target.value)} className={inp} style={inpStyle} />
            </Field>
            <ImageUploader
              label="Social Share Image (OG Image) — 1200×630px recommended"
              value={draft.seoImage}
              onChange={(url) => set("seoImage", url)}
              aspectRatio="1200/630"
            />
            {/* Live preview */}
            {(draft.seoTitle || draft.seoDescription) && (
              <div className="rounded-xl p-4 border" style={{ background: "#f8f9ff", borderColor: "#e2e4f0" }}>
                <p className="text-xs font-semibold mb-2" style={{ color: "var(--muted-foreground)" }}>Google Search Preview</p>
                <p className="text-sm font-semibold" style={{ color: "#1a0dab", fontFamily: "Arial, sans-serif" }}>{draft.seoTitle}</p>
                <p className="text-xs" style={{ color: "#006621", fontFamily: "Arial, sans-serif" }}>pstrade.com.np</p>
                <p className="text-xs mt-0.5" style={{ color: "#545454", fontFamily: "Arial, sans-serif", lineHeight: 1.5 }}>{draft.seoDescription}</p>
              </div>
            )}
          </>
        )}

        {tab === "social" && (
          <>
            {[
              { key: "facebookUrl"  as const, label: "Facebook URL",   placeholder: "https://facebook.com/pstrade" },
              { key: "linkedinUrl"  as const, label: "LinkedIn URL",   placeholder: "https://linkedin.com/company/pstrade" },
              { key: "instagramUrl" as const, label: "Instagram URL",  placeholder: "https://instagram.com/pstrade" },
              { key: "twitterUrl"   as const, label: "Twitter / X URL", placeholder: "https://twitter.com/pstrade" },
            ].map(({ key, label, placeholder }) => (
              <Field key={key} label={label}>
                <input
                  type="url"
                  value={draft[key]}
                  onChange={(e) => set(key, e.target.value)}
                  placeholder={placeholder}
                  className={inp}
                  style={inpStyle}
                />
              </Field>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
