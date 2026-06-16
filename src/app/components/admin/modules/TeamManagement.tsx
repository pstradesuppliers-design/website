import { useState } from "react";
import { Plus, Pencil, Trash2, Search, X, GraduationCap, Briefcase, FolderKanban } from "lucide-react";
import { useSiteData } from "../../../context/SiteDataContext";
import type { TeamMember, Education, Experience, MajorProject } from "../../team/teamData";
import { ImageUploader } from "../shared/ImageUploader";
import { ConfirmDialog } from "../shared/ConfirmDialog";

const DEPTS = ["Leadership", "Engineering", "Procurement", "Consulting", "Asset Management", "Operations", "Finance"];

const BLANK: TeamMember = {
  id: "", name: "", position: "", department: "Engineering",
  photo: "", shortBio: "", fullBio: "", email: "", phone: "",
  skills: [], education: [], experience: [], projects: [],
};

type EditorTab = "basic" | "education" | "experience" | "projects";

function TabBtn({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 text-sm font-semibold rounded-lg transition-all"
      style={{
        background: active ? "var(--brand-primary)" : "transparent",
        color: active ? "#ffffff" : "var(--muted-foreground)",
        fontFamily: "Plus Jakarta Sans, sans-serif",
      }}
    >
      {children}
    </button>
  );
}

const inp = "w-full rounded-xl px-3 py-2.5 text-sm border focus:outline-none focus:ring-2";
const inpSm = "rounded-lg px-3 py-2 text-sm border focus:outline-none focus:ring-2 w-full";
const inpStyle = { borderColor: "var(--border)", background: "var(--input-background)" };

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label className="block text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--muted-foreground)" }}>{label}</label>
      {children}
    </div>
  );
}

export function TeamManagement() {
  const { teamData, addTeamMember, updateTeamMember, deleteTeamMember } = useSiteData();
  const [search, setSearch] = useState("");
  const [editing, setEditing] = useState<TeamMember | null>(null);
  const [toDelete, setToDelete] = useState<string | null>(null);
  const [edTab, setEdTab] = useState<EditorTab>("basic");

  const filtered = teamData.filter(
    (m) => m.name.toLowerCase().includes(search.toLowerCase()) ||
           m.position.toLowerCase().includes(search.toLowerCase()) ||
           m.department.toLowerCase().includes(search.toLowerCase())
  );

  const openNew = () => { setEditing({ ...BLANK, id: `member-${Date.now()}` }); setEdTab("basic"); };
  const openEdit = (m: TeamMember) => { setEditing({ ...m }); setEdTab("basic"); };
  const set = <K extends keyof TeamMember>(k: K, v: TeamMember[K]) =>
    setEditing((e) => e ? { ...e, [k]: v } : e);

  const setEdu = (i: number, k: keyof Education, v: string) =>
    setEditing((e) => { if (!e) return e; const arr = [...e.education]; arr[i] = { ...arr[i], [k]: v }; return { ...e, education: arr }; });
  const addEdu = () => setEditing((e) => e ? { ...e, education: [...e.education, { degree: "", institution: "", year: "" }] } : e);
  const removeEdu = (i: number) => setEditing((e) => e ? { ...e, education: e.education.filter((_, idx) => idx !== i) } : e);

  const setExp = (i: number, k: keyof Experience, v: string) =>
    setEditing((e) => { if (!e) return e; const arr = [...e.experience]; arr[i] = { ...arr[i], [k]: v }; return { ...e, experience: arr }; });
  const addExp = () => setEditing((e) => e ? { ...e, experience: [...e.experience, { role: "", company: "", duration: "", description: "" }] } : e);
  const removeExp = (i: number) => setEditing((e) => e ? { ...e, experience: e.experience.filter((_, idx) => idx !== i) } : e);

  const setProj = (i: number, k: keyof MajorProject, v: string) =>
    setEditing((e) => { if (!e) return e; const arr = [...e.projects]; arr[i] = { ...arr[i], [k]: v }; return { ...e, projects: arr }; });
  const addProj = () => setEditing((e) => e ? { ...e, projects: [...e.projects, { title: "", location: "", capacity: "", description: "" }] } : e);
  const removeProj = (i: number) => setEditing((e) => e ? { ...e, projects: e.projects.filter((_, idx) => idx !== i) } : e);

  const handleSave = () => {
    if (!editing) return;
    if (teamData.some((m) => m.id === editing.id)) updateTeamMember(editing);
    else addTeamMember(editing);
    setEditing(null);
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between gap-4 mb-6">
        <div>
          <h2 style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>Team Management</h2>
          <p className="text-sm mt-1" style={{ color: "var(--muted-foreground)" }}>{teamData.length} members</p>
        </div>
        <button onClick={openNew} className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-white" style={{ background: "var(--brand-primary)", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
          <Plus size={15} /> Add Member
        </button>
      </div>

      <div className="flex items-center gap-2 rounded-xl border px-3 py-2 mb-5" style={{ borderColor: "var(--border)", background: "var(--card)" }}>
        <Search size={15} style={{ color: "var(--muted-foreground)" }} />
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search members…" className="flex-1 text-sm bg-transparent focus:outline-none" />
        {search && <button onClick={() => setSearch("")}><X size={14} style={{ color: "var(--muted-foreground)" }} /></button>}
      </div>

      <div className="space-y-3">
        {filtered.map((m) => (
          <div key={m.id} className="rounded-2xl border p-4 flex items-center gap-4" style={{ background: "var(--card)", borderColor: "var(--border)" }}>
            <img src={m.photo} alt={m.name} className="w-12 h-12 rounded-xl object-cover flex-shrink-0 bg-gray-100" />
            <div className="flex-1 min-w-0">
              <p className="font-bold text-sm truncate" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{m.name}</p>
              <p className="text-xs truncate" style={{ color: "var(--muted-foreground)" }}>{m.position} · {m.department}</p>
            </div>
            <div className="flex gap-2 flex-shrink-0">
              <button onClick={() => openEdit(m)} className="w-8 h-8 rounded-lg flex items-center justify-center hover:opacity-80" style={{ background: "var(--brand-primary-light)", color: "var(--brand-primary)" }}><Pencil size={14} /></button>
              <button onClick={() => setToDelete(m.id)} className="w-8 h-8 rounded-lg flex items-center justify-center hover:opacity-80" style={{ background: "#fef2f2", color: "#ef4444" }}><Trash2 size={14} /></button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit panel */}
      {editing && (
        <div className="fixed inset-0 z-[100] flex" style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}>
          <div className="ml-auto w-full max-w-2xl h-full overflow-y-auto shadow-2xl flex flex-col" style={{ background: "var(--background)" }}>
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b sticky top-0 z-10" style={{ borderColor: "var(--border)", background: "var(--background)" }}>
              <h4 style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                {teamData.some((m) => m.id === editing.id) ? "Edit" : "Add"} Team Member
              </h4>
              <div className="flex gap-2">
                <button onClick={() => setEditing(null)} className="px-4 py-2 rounded-xl text-sm font-semibold" style={{ background: "var(--muted)" }}>Cancel</button>
                <button onClick={handleSave} className="px-4 py-2 rounded-xl text-sm font-bold text-white" style={{ background: "var(--brand-primary)", fontFamily: "Plus Jakarta Sans, sans-serif" }}>Save</button>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-1 px-6 py-3 border-b" style={{ borderColor: "var(--border)" }}>
              {(["basic", "education", "experience", "projects"] as EditorTab[]).map((t) => (
                <TabBtn key={t} active={edTab === t} onClick={() => setEdTab(t)}>
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </TabBtn>
              ))}
            </div>

            <div className="p-6 space-y-5 flex-1">
              {edTab === "basic" && (
                <>
                  <ImageUploader label="Photo" value={editing.photo} onChange={(v) => set("photo", v)} aspectRatio="1/1" />
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Full Name"><input type="text" value={editing.name} onChange={(e) => set("name", e.target.value)} className={inp} style={inpStyle} /></Field>
                    <Field label="Position">
                      <input type="text" value={editing.position} onChange={(e) => set("position", e.target.value)} className={inp} style={inpStyle} />
                    </Field>
                    <Field label="Department">
                      <select value={editing.department} onChange={(e) => set("department", e.target.value)} className={inp} style={inpStyle}>
                        {DEPTS.map((d) => <option key={d}>{d}</option>)}
                      </select>
                    </Field>
                    <Field label="Email"><input type="email" value={editing.email} onChange={(e) => set("email", e.target.value)} className={inp} style={inpStyle} /></Field>
                    <Field label="Phone"><input type="tel" value={editing.phone} onChange={(e) => set("phone", e.target.value)} className={inp} style={inpStyle} /></Field>
                  </div>
                  <Field label="Short Bio (card summary)">
                    <textarea value={editing.shortBio} onChange={(e) => set("shortBio", e.target.value)} rows={2} className={inp} style={{ ...inpStyle, resize: "none" }} />
                  </Field>
                  <Field label="Full Biography">
                    <textarea value={editing.fullBio} onChange={(e) => set("fullBio", e.target.value)} rows={6} className={inp} style={{ ...inpStyle, resize: "none" }} />
                  </Field>
                  <Field label="Skills (comma-separated)">
                    <input type="text" value={editing.skills.join(", ")} onChange={(e) => set("skills", e.target.value.split(",").map((s) => s.trim()).filter(Boolean))} className={inp} style={inpStyle} />
                  </Field>
                </>
              )}

              {edTab === "education" && (
                <div className="space-y-4">
                  {editing.education.map((edu, i) => (
                    <div key={i} className="rounded-2xl border p-4 space-y-3 relative" style={{ borderColor: "var(--border)" }}>
                      <button onClick={() => removeEdu(i)} className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center rounded-lg" style={{ background: "#fef2f2", color: "#ef4444" }}><X size={11} /></button>
                      <Field label="Degree / Qualification"><input type="text" value={edu.degree} onChange={(e) => setEdu(i, "degree", e.target.value)} className={inpSm} style={inpStyle} /></Field>
                      <div className="grid grid-cols-2 gap-3">
                        <Field label="Institution"><input type="text" value={edu.institution} onChange={(e) => setEdu(i, "institution", e.target.value)} className={inpSm} style={inpStyle} /></Field>
                        <Field label="Year"><input type="text" value={edu.year} onChange={(e) => setEdu(i, "year", e.target.value)} className={inpSm} style={inpStyle} /></Field>
                      </div>
                    </div>
                  ))}
                  <button onClick={addEdu} className="w-full py-2.5 rounded-xl text-sm font-semibold border-2 border-dashed flex items-center justify-center gap-2" style={{ borderColor: "var(--brand-primary)", color: "var(--brand-primary)" }}>
                    <GraduationCap size={14} /> Add Education
                  </button>
                </div>
              )}

              {edTab === "experience" && (
                <div className="space-y-4">
                  {editing.experience.map((exp, i) => (
                    <div key={i} className="rounded-2xl border p-4 space-y-3 relative" style={{ borderColor: "var(--border)" }}>
                      <button onClick={() => removeExp(i)} className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center rounded-lg" style={{ background: "#fef2f2", color: "#ef4444" }}><X size={11} /></button>
                      <Field label="Role"><input type="text" value={exp.role} onChange={(e) => setExp(i, "role", e.target.value)} className={inpSm} style={inpStyle} /></Field>
                      <div className="grid grid-cols-2 gap-3">
                        <Field label="Company"><input type="text" value={exp.company} onChange={(e) => setExp(i, "company", e.target.value)} className={inpSm} style={inpStyle} /></Field>
                        <Field label="Duration"><input type="text" value={exp.duration} onChange={(e) => setExp(i, "duration", e.target.value)} className={inpSm} style={inpStyle} /></Field>
                      </div>
                      <Field label="Description"><textarea value={exp.description} onChange={(e) => setExp(i, "description", e.target.value)} rows={3} className={inpSm} style={{ ...inpStyle, resize: "none" }} /></Field>
                    </div>
                  ))}
                  <button onClick={addExp} className="w-full py-2.5 rounded-xl text-sm font-semibold border-2 border-dashed flex items-center justify-center gap-2" style={{ borderColor: "var(--brand-primary)", color: "var(--brand-primary)" }}>
                    <Briefcase size={14} /> Add Experience
                  </button>
                </div>
              )}

              {edTab === "projects" && (
                <div className="space-y-4">
                  {editing.projects.map((proj, i) => (
                    <div key={i} className="rounded-2xl border p-4 space-y-3 relative" style={{ borderColor: "var(--border)" }}>
                      <button onClick={() => removeProj(i)} className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center rounded-lg" style={{ background: "#fef2f2", color: "#ef4444" }}><X size={11} /></button>
                      <Field label="Project Title"><input type="text" value={proj.title} onChange={(e) => setProj(i, "title", e.target.value)} className={inpSm} style={inpStyle} /></Field>
                      <div className="grid grid-cols-2 gap-3">
                        <Field label="Location"><input type="text" value={proj.location} onChange={(e) => setProj(i, "location", e.target.value)} className={inpSm} style={inpStyle} /></Field>
                        <Field label="Capacity / Scope"><input type="text" value={proj.capacity} onChange={(e) => setProj(i, "capacity", e.target.value)} className={inpSm} style={inpStyle} /></Field>
                      </div>
                      <Field label="Description"><textarea value={proj.description} onChange={(e) => setProj(i, "description", e.target.value)} rows={3} className={inpSm} style={{ ...inpStyle, resize: "none" }} /></Field>
                    </div>
                  ))}
                  <button onClick={addProj} className="w-full py-2.5 rounded-xl text-sm font-semibold border-2 border-dashed flex items-center justify-center gap-2" style={{ borderColor: "var(--brand-primary)", color: "var(--brand-primary)" }}>
                    <FolderKanban size={14} /> Add Project
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {toDelete && (
        <ConfirmDialog
          title="Remove team member?"
          message="This team member will be removed from the website. This cannot be undone."
          onConfirm={() => { deleteTeamMember(toDelete); setToDelete(null); }}
          onCancel={() => setToDelete(null)}
        />
      )}
    </div>
  );
}
