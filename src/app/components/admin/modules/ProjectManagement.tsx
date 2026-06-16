import { useState } from "react";
import { Plus, Pencil, Trash2, Search, X, Image } from "lucide-react";
import { useSiteData } from "../../../context/SiteDataContext";
import type { Project, Province, ProjectStatus } from "../../projects/projectsData";
import { PROVINCES, SOLUTION_LABELS, SERVICE_LABELS } from "../../projects/projectsData";
import { ImageUploader } from "../shared/ImageUploader";
import { ConfirmDialog } from "../shared/ConfirmDialog";
import type { SolutionId } from "../../solutions/solutionsData";
import type { ServiceId } from "../../services/servicesData";

const STATUSES: ProjectStatus[] = ["Completed", "Ongoing", "Planned"];
const STATUS_COLORS: Record<string, { bg: string; color: string }> = {
  Completed: { bg: "var(--brand-green-light)",     color: "var(--brand-green-dark)" },
  Ongoing:   { bg: "var(--brand-secondary-light)", color: "var(--brand-secondary-dark)" },
  Planned:   { bg: "var(--brand-primary-light)",   color: "var(--brand-primary)" },
};

const BLANK_PROJECT: Project = {
  id: "", title: "", client: "", location: "", province: "Bagmati", district: "",
  capacity: "", status: "Planned", completedDate: "", duration: "", coverImage: "",
  gallery: [], shortDescription: "", fullDescription: "", challenge: "", outcome: "",
  stats: [], solutions: [], services: [], tags: [],
};

const inp = "w-full rounded-xl px-3 py-2.5 text-sm border focus:outline-none focus:ring-2";
const inpStyle = { borderColor: "var(--border)", background: "var(--input-background)" };

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label className="block text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--muted-foreground)" }}>{label}</label>
      {children}
    </div>
  );
}

type EdTab = "basic" | "content" | "gallery" | "taxonomy";

export function ProjectManagement() {
  const { projectsData, addProject, updateProject, deleteProject, solutionsData } = useSiteData();
  const [search, setSearch] = useState("");
  const [editing, setEditing] = useState<Project | null>(null);
  const [toDelete, setToDelete] = useState<string | null>(null);
  const [edTab, setEdTab] = useState<EdTab>("basic");

  const filtered = projectsData.filter(
    (p) => p.title.toLowerCase().includes(search.toLowerCase()) ||
           p.client.toLowerCase().includes(search.toLowerCase()) ||
           p.province.toLowerCase().includes(search.toLowerCase())
  );

  const openNew = () => { setEditing({ ...BLANK_PROJECT, id: `proj-${Date.now()}` }); setEdTab("basic"); };
  const openEdit = (p: Project) => { setEditing({ ...p, gallery: [...p.gallery], stats: [...p.stats], solutions: [...p.solutions], services: [...p.services], tags: [...p.tags] }); setEdTab("basic"); };
  const set = <K extends keyof Project>(k: K, v: Project[K]) => setEditing((e) => e ? { ...e, [k]: v } : e);

  const handleSave = () => {
    if (!editing) return;
    if (projectsData.some((p) => p.id === editing.id)) updateProject(editing);
    else addProject(editing);
    setEditing(null);
  };

  const toggleSolution = (id: SolutionId) => {
    if (!editing) return;
    const arr = editing.solutions.includes(id) ? editing.solutions.filter((s) => s !== id) : [...editing.solutions, id];
    set("solutions", arr);
  };

  const toggleService = (id: ServiceId) => {
    if (!editing) return;
    const arr = editing.services.includes(id) ? editing.services.filter((s) => s !== id) : [...editing.services, id];
    set("services", arr);
  };

  const addGalleryImage = () => setEditing((e) => e ? { ...e, gallery: [...e.gallery, { url: "", caption: "" }] } : e);
  const setGallery = (i: number, k: "url" | "caption", v: string) =>
    setEditing((e) => { if (!e) return e; const arr = [...e.gallery]; arr[i] = { ...arr[i], [k]: v }; return { ...e, gallery: arr }; });
  const removeGallery = (i: number) => setEditing((e) => e ? { ...e, gallery: e.gallery.filter((_, idx) => idx !== i) } : e);

  const addStat = () => setEditing((e) => e ? { ...e, stats: [...e.stats, { label: "", value: "" }] } : e);
  const setStat = (i: number, k: "label" | "value", v: string) =>
    setEditing((e) => { if (!e) return e; const arr = [...e.stats]; arr[i] = { ...arr[i], [k]: v }; return { ...e, stats: arr }; });
  const removeStat = (i: number) => setEditing((e) => e ? { ...e, stats: e.stats.filter((_, idx) => idx !== i) } : e);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between gap-4 mb-6">
        <div>
          <h2 style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>Project Management</h2>
          <p className="text-sm mt-1" style={{ color: "var(--muted-foreground)" }}>{projectsData.length} projects</p>
        </div>
        <button onClick={openNew} className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-white" style={{ background: "var(--brand-primary)", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
          <Plus size={15} /> Add Project
        </button>
      </div>

      <div className="flex items-center gap-2 rounded-xl border px-3 py-2 mb-5" style={{ borderColor: "var(--border)", background: "var(--card)" }}>
        <Search size={15} style={{ color: "var(--muted-foreground)" }} />
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search projects…" className="flex-1 text-sm bg-transparent focus:outline-none" />
        {search && <button onClick={() => setSearch("")}><X size={14} style={{ color: "var(--muted-foreground)" }} /></button>}
      </div>

      <div className="space-y-3">
        {filtered.map((p) => {
          const ss = STATUS_COLORS[p.status] ?? STATUS_COLORS.Planned;
          return (
            <div key={p.id} className="rounded-2xl border p-4 flex items-center gap-4" style={{ background: "var(--card)", borderColor: "var(--border)" }}>
              <img src={p.coverImage} alt={p.title} className="w-16 h-12 rounded-xl object-cover flex-shrink-0 bg-gray-100" />
              <div className="flex-1 min-w-0">
                <p className="font-bold text-sm truncate" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{p.title}</p>
                <p className="text-xs truncate" style={{ color: "var(--muted-foreground)" }}>{p.province} · {p.capacity}</p>
              </div>
              <span className="text-xs px-2 py-0.5 rounded-full font-semibold flex-shrink-0" style={ss}>{p.status}</span>
              <div className="flex gap-2 flex-shrink-0">
                <button onClick={() => openEdit(p)} className="w-8 h-8 rounded-lg flex items-center justify-center hover:opacity-80" style={{ background: "var(--brand-primary-light)", color: "var(--brand-primary)" }}><Pencil size={14} /></button>
                <button onClick={() => setToDelete(p.id)} className="w-8 h-8 rounded-lg flex items-center justify-center hover:opacity-80" style={{ background: "#fef2f2", color: "#ef4444" }}><Trash2 size={14} /></button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Editor panel */}
      {editing && (
        <div className="fixed inset-0 z-[100] flex" style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}>
          <div className="ml-auto w-full max-w-2xl h-full overflow-y-auto shadow-2xl flex flex-col" style={{ background: "var(--background)" }}>
            <div className="flex items-center justify-between px-6 py-4 border-b sticky top-0 z-10" style={{ borderColor: "var(--border)", background: "var(--background)" }}>
              <h4 style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                {projectsData.some((p) => p.id === editing.id) ? "Edit" : "Add"} Project
              </h4>
              <div className="flex gap-2">
                <button onClick={() => setEditing(null)} className="px-4 py-2 rounded-xl text-sm font-semibold" style={{ background: "var(--muted)" }}>Cancel</button>
                <button onClick={handleSave} className="px-4 py-2 rounded-xl text-sm font-bold text-white" style={{ background: "var(--brand-primary)", fontFamily: "Plus Jakarta Sans, sans-serif" }}>Save</button>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-1 px-6 py-3 border-b overflow-x-auto" style={{ borderColor: "var(--border)" }}>
              {(["basic", "content", "gallery", "taxonomy"] as EdTab[]).map((t) => (
                <button key={t} onClick={() => setEdTab(t)}
                  className="px-4 py-2 text-sm font-semibold rounded-lg transition-all flex-shrink-0"
                  style={{ background: edTab === t ? "var(--brand-primary)" : "transparent", color: edTab === t ? "#fff" : "var(--muted-foreground)" }}>
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </button>
              ))}
            </div>

            <div className="p-6 space-y-5 flex-1">
              {edTab === "basic" && (
                <>
                  <ImageUploader label="Cover Image" value={editing.coverImage} onChange={(v) => set("coverImage", v)} />
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Project Title"><input type="text" value={editing.title} onChange={(e) => set("title", e.target.value)} className={inp} style={inpStyle} /></Field>
                    <Field label="Client Name"><input type="text" value={editing.client} onChange={(e) => set("client", e.target.value)} className={inp} style={inpStyle} /></Field>
                    <Field label="Province">
                      <select value={editing.province} onChange={(e) => set("province", e.target.value as Province)} className={inp} style={inpStyle}>
                        {PROVINCES.map((p) => <option key={p}>{p}</option>)}
                      </select>
                    </Field>
                    <Field label="District"><input type="text" value={editing.district} onChange={(e) => set("district", e.target.value)} className={inp} style={inpStyle} /></Field>
                    <Field label="Location (full)"><input type="text" value={editing.location} onChange={(e) => set("location", e.target.value)} className={inp} style={inpStyle} /></Field>
                    <Field label="Capacity"><input type="text" value={editing.capacity} onChange={(e) => set("capacity", e.target.value)} className={inp} style={inpStyle} placeholder="e.g. 500 kW" /></Field>
                    <Field label="Status">
                      <select value={editing.status} onChange={(e) => set("status", e.target.value as ProjectStatus)} className={inp} style={inpStyle}>
                        {STATUSES.map((s) => <option key={s}>{s}</option>)}
                      </select>
                    </Field>
                    <Field label="Completed Date"><input type="text" value={editing.completedDate} onChange={(e) => set("completedDate", e.target.value)} className={inp} style={inpStyle} placeholder="March 2024" /></Field>
                    <Field label="Duration"><input type="text" value={editing.duration} onChange={(e) => set("duration", e.target.value)} className={inp} style={inpStyle} placeholder="14 weeks" /></Field>
                  </div>
                  <Field label="Tags (comma-separated)">
                    <input type="text" value={editing.tags.join(", ")} onChange={(e) => set("tags", e.target.value.split(",").map((t) => t.trim()).filter(Boolean))} className={inp} style={inpStyle} />
                  </Field>
                  {/* Stats */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--muted-foreground)" }}>Key Stats (6 recommended)</label>
                    <div className="space-y-2">
                      {editing.stats.map((s, i) => (
                        <div key={i} className="flex gap-2">
                          <input type="text" value={s.label} onChange={(e) => setStat(i, "label", e.target.value)} placeholder="Label" className="flex-1 rounded-lg px-3 py-2 text-sm border focus:outline-none" style={inpStyle} />
                          <input type="text" value={s.value} onChange={(e) => setStat(i, "value", e.target.value)} placeholder="Value" className="flex-1 rounded-lg px-3 py-2 text-sm border focus:outline-none" style={inpStyle} />
                          <button onClick={() => removeStat(i)} className="w-9 flex-shrink-0 flex items-center justify-center rounded-lg" style={{ background: "#fef2f2", color: "#ef4444" }}><X size={13} /></button>
                        </div>
                      ))}
                      <button onClick={addStat} className="w-full py-2 rounded-xl text-sm font-semibold border-2 border-dashed flex items-center justify-center gap-2" style={{ borderColor: "var(--brand-primary)", color: "var(--brand-primary)" }}>
                        <Plus size={13} /> Add Stat
                      </button>
                    </div>
                  </div>
                </>
              )}

              {edTab === "content" && (
                <>
                  <Field label="Short Description (card)">
                    <textarea value={editing.shortDescription} onChange={(e) => set("shortDescription", e.target.value)} rows={3} className={inp} style={{ ...inpStyle, resize: "none" }} />
                  </Field>
                  <Field label="Full Description">
                    <textarea value={editing.fullDescription} onChange={(e) => set("fullDescription", e.target.value)} rows={6} className={inp} style={{ ...inpStyle, resize: "none" }} />
                  </Field>
                  <Field label="The Challenge">
                    <textarea value={editing.challenge} onChange={(e) => set("challenge", e.target.value)} rows={4} className={inp} style={{ ...inpStyle, resize: "none" }} />
                  </Field>
                  <Field label="The Outcome">
                    <textarea value={editing.outcome} onChange={(e) => set("outcome", e.target.value)} rows={4} className={inp} style={{ ...inpStyle, resize: "none" }} />
                  </Field>
                </>
              )}

              {edTab === "gallery" && (
                <div className="space-y-4">
                  {editing.gallery.map((img, i) => (
                    <div key={i} className="rounded-2xl border p-4 space-y-3 relative" style={{ borderColor: "var(--border)" }}>
                      <button onClick={() => removeGallery(i)} className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center rounded-lg" style={{ background: "#fef2f2", color: "#ef4444" }}><X size={11} /></button>
                      <ImageUploader label={`Image ${i + 1}`} value={img.url} onChange={(v) => setGallery(i, "url", v)} aspectRatio="4/3" />
                      <Field label="Caption">
                        <input type="text" value={img.caption} onChange={(e) => setGallery(i, "caption", e.target.value)} placeholder="Describe this image…" className="w-full rounded-lg px-3 py-2 text-sm border focus:outline-none" style={inpStyle} />
                      </Field>
                    </div>
                  ))}
                  <button onClick={addGalleryImage} className="w-full py-2.5 rounded-xl text-sm font-semibold border-2 border-dashed flex items-center justify-center gap-2" style={{ borderColor: "var(--brand-primary)", color: "var(--brand-primary)" }}>
                    <Image size={14} /> Add Gallery Image
                  </button>
                </div>
              )}

              {edTab === "taxonomy" && (
                <>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--muted-foreground)" }}>
                      Solution Category
                    </label>
                    <p className="text-xs mb-3" style={{ color: "var(--muted-foreground)" }}>
                      Select which solution this project belongs to. It will appear in that solution's "See It In Action" section.
                    </p>
                    <div className="space-y-2">
                      {solutionsData.map((s) => (
                        <label
                          key={s.id}
                          className="flex items-center gap-3 rounded-xl px-4 py-3 cursor-pointer border transition-all"
                          style={{
                            borderColor: editing.solutions.includes(s.id as SolutionId) ? s.accentColor : "var(--border)",
                            background: editing.solutions.includes(s.id as SolutionId) ? s.accentLight : "var(--card)",
                          }}
                        >
                          <input
                            type="checkbox"
                            checked={editing.solutions.includes(s.id as SolutionId)}
                            onChange={() => toggleSolution(s.id as SolutionId)}
                            className="w-4 h-4 rounded flex-shrink-0"
                            style={{ accentColor: s.accentColor }}
                          />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{s.title}</p>
                            <p className="text-xs truncate" style={{ color: "var(--muted-foreground)" }}>{s.tagline}</p>
                          </div>
                          <span
                            className="text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0"
                            style={{ background: s.accentColor, color: "#fff" }}
                          >
                            {s.tag}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: "var(--muted-foreground)" }}>Services Delivered</label>
                    <div className="space-y-2">
                      {Object.entries(SERVICE_LABELS).map(([id, label]) => (
                        <label key={id} className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" checked={editing.services.includes(id as ServiceId)} onChange={() => toggleService(id as ServiceId)} className="w-4 h-4 rounded" style={{ accentColor: "var(--brand-primary)" }} />
                          <span className="text-sm">{label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {toDelete && (
        <ConfirmDialog
          title="Delete this project?"
          message="This project will be removed from the website and all related pages."
          onConfirm={() => { deleteProject(toDelete); setToDelete(null); }}
          onCancel={() => setToDelete(null)}
        />
      )}
    </div>
  );
}
