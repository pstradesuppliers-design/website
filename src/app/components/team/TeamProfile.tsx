import { useState } from "react";
import {
  ArrowLeft, Mail, Phone, Pencil, Check, X, Plus, Trash2,
  GraduationCap, Briefcase, Star,
} from "lucide-react";
import type { TeamMember, Education, Experience } from "./teamData";

const DEPT_COLORS: Record<string, { bg: string; color: string }> = {
  Leadership:         { bg: "var(--brand-primary-light)",   color: "var(--brand-primary)" },
  Engineering:        { bg: "var(--brand-green-light)",     color: "var(--brand-green)" },
  Procurement:        { bg: "var(--brand-secondary-light)", color: "var(--brand-secondary)" },
  Consulting:         { bg: "#fef3c7",                      color: "#d97706" },
  "Asset Management": { bg: "#f5f3ff",                      color: "#7c3aed" },
  Operations:         { bg: "#ecfeff",                      color: "#0891b2" },
  Finance:            { bg: "#fdf2f8",                      color: "#be185d" },
};

// ── Reusable inline field editors ────────────────────────────────────
function EditableText({
  value, onChange, editing, className = "", style = {}, multiline = false, placeholder = "",
}: {
  value: string; onChange: (v: string) => void; editing: boolean;
  className?: string; style?: React.CSSProperties; multiline?: boolean; placeholder?: string;
}) {
  if (!editing) return <span className={className} style={style}>{value}</span>;
  if (multiline)
    return (
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={4}
        className="w-full rounded-lg px-3 py-2 text-sm border resize-none focus:outline-none focus:ring-2"
        style={{ borderColor: "var(--border)", background: "var(--input-background)", ...style }}
      />
    );
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full rounded-lg px-3 py-2 text-sm border focus:outline-none focus:ring-2"
      style={{ borderColor: "var(--border)", background: "var(--input-background)", ...style }}
    />
  );
}

// ── Section wrapper ───────────────────────────────────────────────────
function Section({ icon: Icon, title, color, children }: {
  icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  title: string; color: string; children: React.ReactNode;
}) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${color}22` }}>
          <Icon size={18} style={{ color }} />
        </div>
        <h3 style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{title}</h3>
      </div>
      {children}
    </div>
  );
}

interface TeamProfileProps {
  member: TeamMember;
  onBack: () => void;
  onUpdate: (updated: TeamMember) => void;
}

export function TeamProfile({ member, onBack, onUpdate }: TeamProfileProps) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState<TeamMember>(member);
  const [adminUnlocked, setAdminUnlocked] = useState(false);
  const [adminInput, setAdminInput] = useState("");
  const [adminError, setAdminError] = useState(false);
  const ADMIN_PASSWORD = "admin123";

  const deptStyle = DEPT_COLORS[draft.department] ?? { bg: "var(--muted)", color: "var(--muted-foreground)" };

  // ── field helpers ────────────────────────────────────────────────
  const set = <K extends keyof TeamMember>(key: K, value: TeamMember[K]) =>
    setDraft((d) => ({ ...d, [key]: value }));

  const setEdu = (i: number, key: keyof Education, value: string) =>
    setDraft((d) => {
      const arr = [...d.education];
      arr[i] = { ...arr[i], [key]: value };
      return { ...d, education: arr };
    });

  const setExp = (i: number, key: keyof Experience, value: string) =>
    setDraft((d) => {
      const arr = [...d.experience];
      arr[i] = { ...arr[i], [key]: value };
      return { ...d, experience: arr };
    });

  const addEdu = () => setDraft((d) => ({
    ...d, education: [...d.education, { degree: "", institution: "", year: "" }],
  }));
  const removeEdu = (i: number) => setDraft((d) => ({
    ...d, education: d.education.filter((_, idx) => idx !== i),
  }));

  const addExp = () => setDraft((d) => ({
    ...d, experience: [...d.experience, { role: "", company: "", duration: "", description: "" }],
  }));
  const removeExp = (i: number) => setDraft((d) => ({
    ...d, experience: d.experience.filter((_, idx) => idx !== i),
  }));

  const addSkill = () => setDraft((d) => ({ ...d, skills: [...d.skills, ""] }));
  const setSkill = (i: number, v: string) => setDraft((d) => {
    const arr = [...d.skills]; arr[i] = v; return { ...d, skills: arr };
  });
  const removeSkill = (i: number) => setDraft((d) => ({
    ...d, skills: d.skills.filter((_, idx) => idx !== i),
  }));

  const handleSave = () => { onUpdate(draft); setEditing(false); };
  const handleCancel = () => { setDraft(member); setEditing(false); };

  const handleAdminUnlock = () => {
    if (adminInput === ADMIN_PASSWORD) {
      setAdminUnlocked(true);
      setAdminError(false);
      setAdminInput("");
    } else {
      setAdminError(true);
    }
  };

  return (
    <main className="bg-background text-foreground">

      {/* ── Top bar ───────────────────────────────────────────────── */}
      <div
        className="sticky top-16 z-40 border-b flex items-center justify-between gap-4 px-6 sm:px-8 py-3"
        style={{ background: "rgba(255,255,255,0.97)", backdropFilter: "blur(12px)", borderColor: "var(--border)" }}
      >
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3"
          style={{ color: "var(--muted-foreground)", fontFamily: "Plus Jakarta Sans, sans-serif" }}
        >
          <ArrowLeft size={15} /> All Team Members
        </button>

        <div className="flex items-center gap-2">
          {!adminUnlocked ? (
            <div className="flex items-center gap-2">
              <input
                type="password"
                value={adminInput}
                onChange={(e) => { setAdminInput(e.target.value); setAdminError(false); }}
                onKeyDown={(e) => e.key === "Enter" && handleAdminUnlock()}
                placeholder="Admin password"
                className="text-sm px-3 py-1.5 rounded-lg border focus:outline-none focus:ring-2 w-36"
                style={{
                  borderColor: adminError ? "#ef4444" : "var(--border)",
                  background: "var(--input-background)",
                }}
              />
              <button
                onClick={handleAdminUnlock}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold transition-all hover:opacity-80"
                style={{ background: "var(--muted)", color: "var(--muted-foreground)", fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                <Star size={13} /> Admin
              </button>
              {adminError && (
                <span className="text-xs" style={{ color: "#ef4444" }}>Incorrect password</span>
              )}
            </div>
          ) : !editing ? (
            <button
              onClick={() => setEditing(true)}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ background: "var(--brand-primary)", fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              <Pencil size={13} /> Edit Profile
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={handleCancel}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold transition-all hover:opacity-80"
                style={{ background: "var(--muted)", color: "var(--muted-foreground)", fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                <X size={13} /> Discard
              </button>
              <button
                onClick={handleSave}
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90"
                style={{ background: "var(--brand-green)", fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                <Check size={13} /> Save Changes
              </button>
            </div>
          )}
        </div>
      </div>

      {editing && (
        <div
          className="px-6 sm:px-8 py-2 text-xs font-semibold text-center"
          style={{ background: "#fef3c7", color: "#92400e" }}
        >
          Edit mode active — all fields are now editable. Click "Save Changes" when done.
        </div>
      )}

      {/* ── Hero / Header ─────────────────────────────────────────── */}
      <section
        className="relative pt-24 pb-0 overflow-hidden"
        style={{ background: "linear-gradient(180deg, #0D0D0D 0%, #0a2a33 100%)" }}
      >
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: deptStyle.color, transform: "translate(30%,-30%)" }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 pb-0">
          <div className="flex flex-col lg:flex-row gap-10 items-start">

            {/* Photo */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-3xl overflow-hidden border-4" style={{ borderColor: deptStyle.color }}>
                  <img
                    src={draft.photo}
                    alt={draft.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {editing && (
                  <div className="mt-2">
                    <label className="block text-xs mb-1" style={{ color: "rgba(255,255,255,0.6)" }}>Photo URL</label>
                    <input
                      type="text"
                      value={draft.photo}
                      onChange={(e) => set("photo", e.target.value)}
                      className="w-full text-xs rounded-lg px-2 py-1.5 border focus:outline-none"
                      style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.08)", color: "#ffffff" }}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Name / Position / Contact */}
            <div className="flex-1 pb-10">
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
                style={{ background: deptStyle.bg, color: deptStyle.color, fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                {draft.department}
              </div>

              {editing ? (
                <div className="space-y-3 mb-4">
                  <input
                    type="text"
                    value={draft.name}
                    onChange={(e) => set("name", e.target.value)}
                    className="block rounded-xl px-4 py-2 border text-3xl font-bold focus:outline-none w-full"
                    style={{
                      borderColor: "var(--brand-primary)",
                      background: "rgba(255,255,255,0.08)",
                      color: "#ffffff",
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                    }}
                  />
                  <input
                    type="text"
                    value={draft.position}
                    onChange={(e) => set("position", e.target.value)}
                    className="block rounded-xl px-4 py-2 border text-lg focus:outline-none w-full"
                    style={{
                      borderColor: "rgba(255,255,255,0.2)",
                      background: "rgba(255,255,255,0.06)",
                      color: deptStyle.color,
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                    }}
                  />
                  <input
                    type="text"
                    value={draft.department}
                    onChange={(e) => set("department", e.target.value)}
                    className="block rounded-xl px-4 py-2 border text-sm focus:outline-none w-48"
                    style={{
                      borderColor: "rgba(255,255,255,0.15)",
                      background: "rgba(255,255,255,0.05)",
                      color: "rgba(255,255,255,0.7)",
                    }}
                    placeholder="Department"
                  />
                </div>
              ) : (
                <>
                  <h1 className="text-white mb-2" style={{ lineHeight: 1.1 }}>{draft.name}</h1>
                  <p className="text-lg font-semibold mb-4" style={{ color: deptStyle.color, fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                    {draft.position}
                  </p>
                </>
              )}

              {/* Short bio */}
              {editing ? (
                <div className="mb-5">
                  <label className="block text-xs mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>Short Bio (card summary)</label>
                  <textarea
                    value={draft.shortBio}
                    onChange={(e) => set("shortBio", e.target.value)}
                    rows={2}
                    className="w-full rounded-xl px-3 py-2 text-sm border focus:outline-none resize-none"
                    style={{ borderColor: "rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.8)" }}
                  />
                </div>
              ) : (
                <p className="text-base mb-6 max-w-2xl" style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.7 }}>
                  {draft.shortBio}
                </p>
              )}

              {/* Contact */}
              <div className="flex flex-wrap gap-4">
                {editing ? (
                  <>
                    <div className="flex items-center gap-2">
                      <Mail size={14} style={{ color: deptStyle.color }} />
                      <input
                        type="email"
                        value={draft.email}
                        onChange={(e) => set("email", e.target.value)}
                        className="text-sm rounded-lg px-2 py-1 border focus:outline-none"
                        style={{ borderColor: "rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.8)" }}
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone size={14} style={{ color: deptStyle.color }} />
                      <input
                        type="text"
                        value={draft.phone}
                        onChange={(e) => set("phone", e.target.value)}
                        className="text-sm rounded-lg px-2 py-1 border focus:outline-none"
                        style={{ borderColor: "rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.8)" }}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <a href={`mailto:${draft.email}`} className="flex items-center gap-2 text-sm font-semibold transition-all hover:opacity-80" style={{ color: deptStyle.color }}>
                      <Mail size={15} /> {draft.email}
                    </a>
                    <a href={`tel:${draft.phone}`} className="flex items-center gap-2 text-sm font-semibold transition-all hover:opacity-80" style={{ color: "rgba(255,255,255,0.65)" }}>
                      <Phone size={15} /> {draft.phone}
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main content ──────────────────────────────────────────── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 grid lg:grid-cols-3 gap-10">

          {/* Left column: Full bio + experience + projects */}
          <div className="lg:col-span-2 space-y-2">

            {/* Full bio */}
            <Section icon={Briefcase} title="Biography" color={deptStyle.color}>
              {editing ? (
                <textarea
                  value={draft.fullBio}
                  onChange={(e) => set("fullBio", e.target.value)}
                  rows={8}
                  className="w-full rounded-xl px-4 py-3 text-sm border focus:outline-none resize-none"
                  style={{ borderColor: "var(--border)", background: "var(--input-background)", lineHeight: 1.8 }}
                />
              ) : (
                <div className="space-y-4">
                  {draft.fullBio.split("\n\n").map((para, i) => (
                    <p key={i} style={{ color: "var(--muted-foreground)", lineHeight: 1.8 }}>{para}</p>
                  ))}
                </div>
              )}
            </Section>

            {/* Experience */}
            <Section icon={Briefcase} title="Experience" color={deptStyle.color}>
              <div className="space-y-4">
                {draft.experience.map((exp, i) => (
                  <div
                    key={i}
                    className="rounded-2xl p-5 border relative"
                    style={{ background: "var(--card)", borderColor: "var(--border)" }}
                  >
                    {editing && (
                      <button
                        onClick={() => removeExp(i)}
                        className="absolute top-3 right-3 w-7 h-7 rounded-lg flex items-center justify-center transition-colors hover:bg-red-50"
                        style={{ color: "#ef4444" }}
                      >
                        <Trash2 size={13} />
                      </button>
                    )}
                    {editing ? (
                      <div className="space-y-2 pr-8">
                        <input type="text" value={exp.role} onChange={(e) => setExp(i, "role", e.target.value)} placeholder="Role / Position" className="w-full rounded-lg px-3 py-2 border text-sm font-bold focus:outline-none" style={{ borderColor: "var(--border)", background: "var(--input-background)", fontFamily: "Plus Jakarta Sans, sans-serif" }} />
                        <div className="grid grid-cols-2 gap-2">
                          <input type="text" value={exp.company} onChange={(e) => setExp(i, "company", e.target.value)} placeholder="Company" className="rounded-lg px-3 py-2 border text-sm focus:outline-none" style={{ borderColor: "var(--border)", background: "var(--input-background)" }} />
                          <input type="text" value={exp.duration} onChange={(e) => setExp(i, "duration", e.target.value)} placeholder="Duration (e.g. 2019 – Present)" className="rounded-lg px-3 py-2 border text-sm focus:outline-none" style={{ borderColor: "var(--border)", background: "var(--input-background)" }} />
                        </div>
                        <textarea value={exp.description} onChange={(e) => setExp(i, "description", e.target.value)} rows={3} placeholder="Description" className="w-full rounded-lg px-3 py-2 border text-sm focus:outline-none resize-none" style={{ borderColor: "var(--border)", background: "var(--input-background)" }} />
                      </div>
                    ) : (
                      <>
                        <div className="flex items-start justify-between gap-4 mb-1">
                          <h4 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "0.95rem" }}>{exp.role}</h4>
                          <span className="text-xs flex-shrink-0 px-2 py-0.5 rounded-full font-semibold" style={{ background: deptStyle.bg, color: deptStyle.color }}>
                            {exp.duration}
                          </span>
                        </div>
                        <p className="text-xs font-semibold mb-2" style={{ color: deptStyle.color }}>{exp.company}</p>
                        <p className="text-sm" style={{ color: "var(--muted-foreground)", lineHeight: 1.7 }}>{exp.description}</p>
                      </>
                    )}
                  </div>
                ))}
                {editing && (
                  <button
                    onClick={addExp}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border-2 border-dashed transition-all hover:opacity-70 w-full justify-center"
                    style={{ borderColor: deptStyle.color, color: deptStyle.color }}
                  >
                    <Plus size={15} /> Add Experience
                  </button>
                )}
              </div>
            </Section>

          </div>

          {/* Right column: Education + Skills */}
          <div className="space-y-2">

            {/* Education */}
            <Section icon={GraduationCap} title="Education" color={deptStyle.color}>
              <div className="space-y-4">
                {draft.education.map((edu, i) => (
                  <div key={i} className="rounded-2xl p-5 border relative" style={{ background: "var(--card)", borderColor: "var(--border)" }}>
                    {editing && (
                      <button onClick={() => removeEdu(i)} className="absolute top-3 right-3 w-7 h-7 rounded-lg flex items-center justify-center transition-colors hover:bg-red-50" style={{ color: "#ef4444" }}>
                        <Trash2 size={13} />
                      </button>
                    )}
                    {editing ? (
                      <div className="space-y-2 pr-8">
                        <input type="text" value={edu.degree} onChange={(e) => setEdu(i, "degree", e.target.value)} placeholder="Degree / Qualification" className="w-full rounded-lg px-3 py-2 border text-sm font-semibold focus:outline-none" style={{ borderColor: "var(--border)", background: "var(--input-background)", fontFamily: "Plus Jakarta Sans, sans-serif" }} />
                        <input type="text" value={edu.institution} onChange={(e) => setEdu(i, "institution", e.target.value)} placeholder="Institution" className="w-full rounded-lg px-3 py-2 border text-sm focus:outline-none" style={{ borderColor: "var(--border)", background: "var(--input-background)" }} />
                        <input type="text" value={edu.year} onChange={(e) => setEdu(i, "year", e.target.value)} placeholder="Year" className="w-full rounded-lg px-3 py-2 border text-sm focus:outline-none" style={{ borderColor: "var(--border)", background: "var(--input-background)" }} />
                      </div>
                    ) : (
                      <>
                        <h4 className="mb-1" style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "0.9rem" }}>{edu.degree}</h4>
                        <p className="text-sm mb-1" style={{ color: "var(--muted-foreground)" }}>{edu.institution}</p>
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: deptStyle.bg, color: deptStyle.color }}>
                          {edu.year}
                        </span>
                      </>
                    )}
                  </div>
                ))}
                {editing && (
                  <button
                    onClick={addEdu}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border-2 border-dashed transition-all hover:opacity-70 w-full justify-center"
                    style={{ borderColor: deptStyle.color, color: deptStyle.color }}
                  >
                    <Plus size={15} /> Add Education
                  </button>
                )}
              </div>
            </Section>

            {/* Skills */}
            <Section icon={Star} title="Skills & Expertise" color={deptStyle.color}>
              <div className="flex flex-wrap gap-2">
                {draft.skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-1">
                    {editing ? (
                      <div className="flex items-center gap-1">
                        <input
                          type="text"
                          value={skill}
                          onChange={(e) => setSkill(i, e.target.value)}
                          className="text-xs rounded-lg px-2 py-1 border focus:outline-none w-32"
                          style={{ borderColor: deptStyle.color, background: deptStyle.bg, color: deptStyle.color }}
                        />
                        <button onClick={() => removeSkill(i)} className="w-5 h-5 rounded flex items-center justify-center" style={{ color: "#ef4444" }}>
                          <X size={10} />
                        </button>
                      </div>
                    ) : (
                      <span
                        className="text-xs font-semibold px-3 py-1.5 rounded-full"
                        style={{ background: deptStyle.bg, color: deptStyle.color }}
                      >
                        {skill}
                      </span>
                    )}
                  </div>
                ))}
                {editing && (
                  <button
                    onClick={addSkill}
                    className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full border-2 border-dashed transition-all hover:opacity-70"
                    style={{ borderColor: deptStyle.color, color: deptStyle.color }}
                  >
                    <Plus size={11} /> Add
                  </button>
                )}
              </div>
            </Section>

          </div>
        </div>
      </section>
    </main>
  );
}
