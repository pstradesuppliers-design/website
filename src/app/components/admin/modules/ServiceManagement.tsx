import { useState } from "react";
import { Pencil, Trash2, X, Plus, Save } from "lucide-react";
import { useSiteData } from "../../../context/SiteDataContext";
import type { ServiceData } from "../../services/servicesData";
import { ImageUploader } from "../shared/ImageUploader";
import { ConfirmDialog } from "../shared/ConfirmDialog";

type EdTab = "basic" | "deliverables" | "benefits" | "process" | "faqs";

const inp = "w-full rounded-xl px-3 py-2.5 text-sm border focus:outline-none focus:ring-2";
const inpSm = "rounded-lg px-3 py-2 text-sm border focus:outline-none w-full";
const inpStyle = { borderColor: "var(--border)", background: "var(--input-background)" };

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label className="block text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--muted-foreground)" }}>{label}</label>
      {children}
    </div>
  );
}

export function ServiceManagement() {
  const { servicesData, updateService, deleteService } = useSiteData();
  const [editing, setEditing] = useState<ServiceData | null>(null);
  const [toDelete, setToDelete] = useState<string | null>(null);
  const [edTab, setEdTab] = useState<EdTab>("basic");
  const [saved, setSaved] = useState(false);

  const openEdit = (s: ServiceData) => { setEditing(JSON.parse(JSON.stringify(s))); setEdTab("basic"); setSaved(false); };
  const set = <K extends keyof ServiceData>(k: K, v: ServiceData[K]) => setEditing((e) => e ? { ...e, [k]: v } : e);

  const handleSave = () => {
    if (!editing) return;
    updateService(editing);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const setBenefit = (i: number, k: string, v: string) =>
    setEditing((e) => { if (!e) return e; const arr = [...e.benefits]; (arr[i] as Record<string,string>)[k] = v; return { ...e, benefits: arr }; });
  const addBenefit = () => setEditing((e) => e ? { ...e, benefits: [...e.benefits, { icon: "Star", title: "", description: "" }] } : e);
  const removeBenefit = (i: number) => setEditing((e) => e ? { ...e, benefits: e.benefits.filter((_, idx) => idx !== i) } : e);

  const setProcess = (i: number, k: string, v: string) =>
    setEditing((e) => { if (!e) return e; const arr = [...e.process]; (arr[i] as Record<string,string>)[k] = v; return { ...e, process: arr }; });
  const addProcess = () => setEditing((e) => e ? { ...e, process: [...e.process, { number: String(e.process.length + 1).padStart(2,"0"), title: "", description: "" }] } : e);
  const removeProcess = (i: number) => setEditing((e) => e ? { ...e, process: e.process.filter((_, idx) => idx !== i) } : e);

  const setFaq = (i: number, k: "question" | "answer", v: string) =>
    setEditing((e) => { if (!e) return e; const arr = [...e.faqs]; arr[i] = { ...arr[i], [k]: v }; return { ...e, faqs: arr }; });
  const addFaq = () => setEditing((e) => e ? { ...e, faqs: [...e.faqs, { question: "", answer: "" }] } : e);
  const removeFaq = (i: number) => setEditing((e) => e ? { ...e, faqs: e.faqs.filter((_, idx) => idx !== i) } : e);

  const setDeliv = (i: number, k: "label" | "value", v: string) =>
    setEditing((e) => { if (!e) return e; const arr = [...e.deliverables]; arr[i] = { ...arr[i], [k]: v }; return { ...e, deliverables: arr }; });
  const addDeliv = () => setEditing((e) => e ? { ...e, deliverables: [...e.deliverables, { label: "", value: "" }] } : e);
  const removeDeliv = (i: number) => setEditing((e) => e ? { ...e, deliverables: e.deliverables.filter((_, idx) => idx !== i) } : e);

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>Service Management</h2>
        <p className="text-sm mt-1" style={{ color: "var(--muted-foreground)" }}>{servicesData.length} services  click Edit to manage content</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        {servicesData.map((s) => (
          <div key={s.id} className="rounded-2xl border overflow-hidden flex" style={{ background: "var(--card)", borderColor: "var(--border)" }}>
            <div className="w-24 relative overflow-hidden flex-shrink-0">
              <img src={s.heroImage} alt={s.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 p-4 flex flex-col justify-between min-w-0">
              <div>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: s.accentLight, color: s.accentColor }}>{s.tag}</span>
                <p className="font-bold text-sm mt-1 truncate" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{s.title}</p>
                <p className="text-xs line-clamp-1 mt-0.5" style={{ color: "var(--muted-foreground)" }}>{s.tagline}</p>
              </div>
              <div className="flex gap-2 mt-3">
                <button onClick={() => openEdit(s)} className="flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs font-semibold" style={{ background: s.accentLight, color: s.accentColor }}>
                  <Pencil size={11} /> Edit
                </button>
                <button onClick={() => setToDelete(s.id)} className="w-8 flex items-center justify-center rounded-lg" style={{ background: "#fef2f2", color: "#ef4444" }}>
                  <Trash2 size={12} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Editor panel */}
      {editing && (
        <div className="fixed inset-0 z-[100] flex" style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}>
          <div className="ml-auto w-full max-w-2xl h-full overflow-y-auto shadow-2xl flex flex-col" style={{ background: "var(--background)" }}>
            <div className="flex items-center justify-between px-6 py-4 border-b sticky top-0 z-10" style={{ borderColor: "var(--border)", background: "var(--background)" }}>
              <h4 style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>Edit: {editing.shortTitle}</h4>
              <div className="flex gap-2">
                <button onClick={() => setEditing(null)} className="px-4 py-2 rounded-xl text-sm font-semibold" style={{ background: "var(--muted)" }}>Close</button>
                <button onClick={handleSave} className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-white"
                  style={{ background: saved ? "var(--brand-green)" : "var(--brand-primary)", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                  <Save size={14} /> {saved ? "Saved!" : "Save"}
                </button>
              </div>
            </div>

            <div className="flex gap-1 px-6 py-3 border-b overflow-x-auto" style={{ borderColor: "var(--border)" }}>
              {(["basic", "deliverables", "benefits", "process", "faqs"] as EdTab[]).map((t) => (
                <button key={t} onClick={() => setEdTab(t)}
                  className="px-3 py-2 text-xs font-semibold rounded-lg transition-all flex-shrink-0"
                  style={{ background: edTab === t ? "var(--brand-primary)" : "transparent", color: edTab === t ? "#fff" : "var(--muted-foreground)" }}>
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </button>
              ))}
            </div>

            <div className="p-6 space-y-5 flex-1">
              {edTab === "basic" && (
                <>
                  <ImageUploader label="Hero Image" value={editing.heroImage} onChange={(v) => set("heroImage", v)} />
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Title"><input type="text" value={editing.title} onChange={(e) => set("title", e.target.value)} className={inp} style={inpStyle} /></Field>
                    <Field label="Short Title"><input type="text" value={editing.shortTitle} onChange={(e) => set("shortTitle", e.target.value)} className={inp} style={inpStyle} /></Field>
                    <Field label="Tag"><input type="text" value={editing.tag} onChange={(e) => set("tag", e.target.value)} className={inp} style={inpStyle} /></Field>
                    <Field label="Accent Color"><input type="text" value={editing.accentColor} onChange={(e) => set("accentColor", e.target.value)} className={inp} style={inpStyle} /></Field>
                  </div>
                  <Field label="Tagline"><input type="text" value={editing.tagline} onChange={(e) => set("tagline", e.target.value)} className={inp} style={inpStyle} /></Field>
                  <Field label="Description"><textarea value={editing.description} onChange={(e) => set("description", e.target.value)} rows={3} className={inp} style={{ ...inpStyle, resize: "none" }} /></Field>
                  <Field label="Overview (double line-break = new paragraph)">
                    <textarea value={editing.overview.join("\n\n")} onChange={(e) => set("overview", e.target.value.split("\n\n").filter(Boolean))} rows={6} className={inp} style={{ ...inpStyle, resize: "none" }} />
                  </Field>
                </>
              )}

              {edTab === "deliverables" && (
                <div className="space-y-3">
                  {editing.deliverables.map((d, i) => (
                    <div key={i} className="flex gap-2">
                      <input type="text" value={d.label} onChange={(e) => setDeliv(i, "label", e.target.value)} placeholder="Label" className={inpSm} style={inpStyle} />
                      <input type="text" value={d.value} onChange={(e) => setDeliv(i, "value", e.target.value)} placeholder="Value" className={inpSm} style={inpStyle} />
                      <button onClick={() => removeDeliv(i)} className="w-9 flex-shrink-0 flex items-center justify-center rounded-lg" style={{ background: "#fef2f2", color: "#ef4444" }}><X size={13} /></button>
                    </div>
                  ))}
                  <button onClick={addDeliv} className="w-full py-2.5 rounded-xl text-sm font-semibold border-2 border-dashed flex items-center justify-center gap-2" style={{ borderColor: "var(--brand-primary)", color: "var(--brand-primary)" }}>
                    <Plus size={13} /> Add Deliverable
                  </button>
                </div>
              )}

              {edTab === "benefits" && (
                <div className="space-y-4">
                  {editing.benefits.map((b, i) => (
                    <div key={i} className="rounded-2xl border p-4 space-y-3 relative" style={{ borderColor: "var(--border)" }}>
                      <button onClick={() => removeBenefit(i)} className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center rounded-lg" style={{ background: "#fef2f2", color: "#ef4444" }}><X size={11} /></button>
                      <Field label="Title"><input type="text" value={b.title} onChange={(e) => setBenefit(i, "title", e.target.value)} className={inpSm} style={inpStyle} /></Field>
                      <Field label="Description"><textarea value={b.description} onChange={(e) => setBenefit(i, "description", e.target.value)} rows={3} className={inpSm} style={{ ...inpStyle, resize: "none" }} /></Field>
                    </div>
                  ))}
                  <button onClick={addBenefit} className="w-full py-2.5 rounded-xl text-sm font-semibold border-2 border-dashed flex items-center justify-center gap-2" style={{ borderColor: "var(--brand-primary)", color: "var(--brand-primary)" }}>
                    <Plus size={13} /> Add Benefit
                  </button>
                </div>
              )}

              {edTab === "process" && (
                <div className="space-y-4">
                  {editing.process.map((step, i) => (
                    <div key={i} className="rounded-2xl border p-4 space-y-3 relative" style={{ borderColor: "var(--border)" }}>
                      <button onClick={() => removeProcess(i)} className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center rounded-lg" style={{ background: "#fef2f2", color: "#ef4444" }}><X size={11} /></button>
                      <div className="grid grid-cols-4 gap-2">
                        <Field label="Step #"><input type="text" value={step.number} onChange={(e) => setProcess(i, "number", e.target.value)} className={inpSm} style={inpStyle} /></Field>
                        <div className="col-span-3"><Field label="Title"><input type="text" value={step.title} onChange={(e) => setProcess(i, "title", e.target.value)} className={inpSm} style={inpStyle} /></Field></div>
                      </div>
                      <Field label="Description"><textarea value={step.description} onChange={(e) => setProcess(i, "description", e.target.value)} rows={3} className={inpSm} style={{ ...inpStyle, resize: "none" }} /></Field>
                    </div>
                  ))}
                  <button onClick={addProcess} className="w-full py-2.5 rounded-xl text-sm font-semibold border-2 border-dashed flex items-center justify-center gap-2" style={{ borderColor: "var(--brand-primary)", color: "var(--brand-primary)" }}>
                    <Plus size={13} /> Add Step
                  </button>
                </div>
              )}

              {edTab === "faqs" && (
                <div className="space-y-4">
                  {editing.faqs.map((faq, i) => (
                    <div key={i} className="rounded-2xl border p-4 space-y-3 relative" style={{ borderColor: "var(--border)" }}>
                      <button onClick={() => removeFaq(i)} className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center rounded-lg" style={{ background: "#fef2f2", color: "#ef4444" }}><X size={11} /></button>
                      <Field label="Question"><input type="text" value={faq.question} onChange={(e) => setFaq(i, "question", e.target.value)} className={inpSm} style={inpStyle} /></Field>
                      <Field label="Answer"><textarea value={faq.answer} onChange={(e) => setFaq(i, "answer", e.target.value)} rows={4} className={inpSm} style={{ ...inpStyle, resize: "none" }} /></Field>
                    </div>
                  ))}
                  <button onClick={addFaq} className="w-full py-2.5 rounded-xl text-sm font-semibold border-2 border-dashed flex items-center justify-center gap-2" style={{ borderColor: "var(--brand-primary)", color: "var(--brand-primary)" }}>
                    <Plus size={13} /> Add FAQ
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {toDelete && (
        <ConfirmDialog
          title="Delete this service?"
          message="This service page will be removed from the website."
          onConfirm={() => { deleteService(toDelete); setToDelete(null); }}
          onCancel={() => setToDelete(null)}
        />
      )}
    </div>
  );
}
