import { useState } from "react";
import { Plus, Pencil, Trash2, Search, X, ChevronDown, ChevronUp } from "lucide-react";
import { useSiteData } from "../../../context/SiteDataContext";
import { ConfirmDialog } from "../shared/ConfirmDialog";
import type { FAQItem as SolutionFAQ } from "../../solutions/solutionsData";
import type { FAQItem as ServiceFAQ } from "../../services/servicesData";

type FAQEntry = {
  key: string;
  type: "solution" | "service";
  parentId: string;
  parentTitle: string;
  index: number;
  question: string;
  answer: string;
};

const inp = "w-full rounded-xl px-3 py-2.5 text-sm border focus:outline-none focus:ring-2";
const inpStyle = { borderColor: "var(--border)", background: "var(--input-background)" };

export function FAQManagement() {
  const { solutionsData, servicesData, updateSolution, updateService } = useSiteData();
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState<"all" | "solution" | "service">("all");
  const [editing, setEditing] = useState<FAQEntry | null>(null);
  const [toDelete, setToDelete] = useState<FAQEntry | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);

  // Flatten all FAQs into a single list
  const allFAQs: FAQEntry[] = [
    ...solutionsData.flatMap((sol) =>
      sol.faqs.map((faq, i) => ({
        key: `sol-${sol.id}-${i}`,
        type: "solution" as const,
        parentId: sol.id,
        parentTitle: sol.shortTitle,
        index: i,
        question: faq.question,
        answer: faq.answer,
      }))
    ),
    ...servicesData.flatMap((svc) =>
      svc.faqs.map((faq, i) => ({
        key: `svc-${svc.id}-${i}`,
        type: "service" as const,
        parentId: svc.id,
        parentTitle: svc.shortTitle,
        index: i,
        question: faq.question,
        answer: faq.answer,
      }))
    ),
  ];

  const filtered = allFAQs.filter((f) => {
    if (typeFilter !== "all" && f.type !== typeFilter) return false;
    if (search && !f.question.toLowerCase().includes(search.toLowerCase()) &&
        !f.parentTitle.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const saveEdit = () => {
    if (!editing) return;
    if (editing.type === "solution") {
      const sol = solutionsData.find((s) => s.id === editing.parentId);
      if (!sol) return;
      const faqs = [...sol.faqs];
      if (editing.index >= faqs.length) {
        faqs.push({ question: editing.question, answer: editing.answer });
      } else {
        faqs[editing.index] = { question: editing.question, answer: editing.answer };
      }
      updateSolution({ ...sol, faqs });
    } else {
      const svc = servicesData.find((s) => s.id === editing.parentId);
      if (!svc) return;
      const faqs = [...svc.faqs];
      if (editing.index >= faqs.length) {
        faqs.push({ question: editing.question, answer: editing.answer });
      } else {
        faqs[editing.index] = { question: editing.question, answer: editing.answer };
      }
      updateService({ ...svc, faqs });
    }
    setEditing(null);
  };

  const handleDelete = (entry: FAQEntry) => {
    if (entry.type === "solution") {
      const sol = solutionsData.find((s) => s.id === entry.parentId);
      if (!sol) return;
      updateSolution({ ...sol, faqs: sol.faqs.filter((_, i) => i !== entry.index) });
    } else {
      const svc = servicesData.find((s) => s.id === entry.parentId);
      if (!svc) return;
      updateService({ ...svc, faqs: svc.faqs.filter((_, i) => i !== entry.index) });
    }
    setToDelete(null);
  };

  const openNew = (type: "solution" | "service", parentId: string, parentTitle: string, newIndex: number) => {
    setEditing({ key: "", type, parentId, parentTitle, index: newIndex, question: "", answer: "" });
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between gap-4 mb-6">
        <div>
          <h2 style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>FAQ Management</h2>
          <p className="text-sm mt-1" style={{ color: "var(--muted-foreground)" }}>
            {allFAQs.length} FAQs across {solutionsData.length} solutions and {servicesData.length} services
          </p>
        </div>
      </div>

      {/* Filter bar */}
      <div className="flex flex-wrap gap-3 mb-5">
        <div className="flex items-center gap-2 flex-1 rounded-xl border px-3 py-2" style={{ borderColor: "var(--border)", background: "var(--card)" }}>
          <Search size={15} style={{ color: "var(--muted-foreground)" }} />
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search FAQs…" className="flex-1 text-sm bg-transparent focus:outline-none" />
          {search && <button onClick={() => setSearch("")}><X size={14} style={{ color: "var(--muted-foreground)" }} /></button>}
        </div>
        <div className="flex rounded-xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
          {(["all", "solution", "service"] as const).map((t) => (
            <button key={t} onClick={() => setTypeFilter(t)}
              className="px-4 py-2 text-xs font-semibold transition-all"
              style={{ background: typeFilter === t ? "var(--brand-primary)" : "var(--card)", color: typeFilter === t ? "#fff" : "var(--muted-foreground)" }}>
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>
        <span className="flex items-center text-sm px-3" style={{ color: "var(--muted-foreground)" }}>{filtered.length} shown</span>
      </div>

      {/* Add new FAQ buttons */}
      <div className="flex flex-wrap gap-2 mb-6">
        {typeFilter !== "service" && solutionsData.map((sol) => (
          <button key={sol.id} onClick={() => openNew("solution", sol.id, sol.shortTitle, sol.faqs.length)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border-2 border-dashed transition-all hover:opacity-70"
            style={{ borderColor: "var(--brand-primary)", color: "var(--brand-primary)" }}>
            <Plus size={11} /> {sol.shortTitle} FAQ
          </button>
        ))}
        {typeFilter !== "solution" && servicesData.map((svc) => (
          <button key={svc.id} onClick={() => openNew("service", svc.id, svc.shortTitle, svc.faqs.length)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border-2 border-dashed transition-all hover:opacity-70"
            style={{ borderColor: "var(--brand-secondary)", color: "var(--brand-secondary)" }}>
            <Plus size={11} /> {svc.shortTitle} FAQ
          </button>
        ))}
      </div>

      {/* FAQ list */}
      <div className="space-y-2">
        {filtered.map((faq) => (
          <div key={faq.key} className="rounded-2xl border overflow-hidden" style={{ background: "var(--card)", borderColor: "var(--border)" }}>
            <div className="flex items-center gap-3 px-4 py-3">
              <span
                className="text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0"
                style={{
                  background: faq.type === "solution" ? "var(--brand-primary-light)" : "var(--brand-secondary-light)",
                  color: faq.type === "solution" ? "var(--brand-primary)" : "var(--brand-secondary)",
                }}
              >
                {faq.parentTitle}
              </span>
              <p className="flex-1 text-sm font-semibold truncate" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{faq.question}</p>
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <button onClick={() => setEditing({ ...faq })}
                  className="w-7 h-7 rounded-lg flex items-center justify-center hover:opacity-80"
                  style={{ background: "var(--brand-primary-light)", color: "var(--brand-primary)" }}>
                  <Pencil size={12} />
                </button>
                <button onClick={() => setToDelete(faq)}
                  className="w-7 h-7 rounded-lg flex items-center justify-center hover:opacity-80"
                  style={{ background: "#fef2f2", color: "#ef4444" }}>
                  <Trash2 size={12} />
                </button>
                <button onClick={() => setExpanded(expanded === faq.key ? null : faq.key)}
                  className="w-7 h-7 rounded-lg flex items-center justify-center"
                  style={{ color: "var(--muted-foreground)" }}>
                  {expanded === faq.key ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>
              </div>
            </div>
            {expanded === faq.key && (
              <div className="px-4 pb-4 pt-0">
                <p className="text-sm" style={{ color: "var(--muted-foreground)", lineHeight: 1.75 }}>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="text-center py-16" style={{ color: "var(--muted-foreground)" }}>
            <p className="text-sm">No FAQs match your filters.</p>
          </div>
        )}
      </div>

      {/* Edit modal */}
      {editing && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}>
          <div className="rounded-2xl p-6 w-full max-w-xl shadow-2xl" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
            <div className="flex items-center justify-between mb-5">
              <h4 style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                {editing.question ? "Edit" : "Add"} FAQ  {editing.parentTitle}
              </h4>
              <button onClick={() => setEditing(null)}><X size={18} style={{ color: "var(--muted-foreground)" }} /></button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide mb-1.5" style={{ color: "var(--muted-foreground)" }}>Question</label>
                <input type="text" value={editing.question} onChange={(e) => setEditing((d) => d ? { ...d, question: e.target.value } : d)} className={inp} style={inpStyle} placeholder="Enter the question…" />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide mb-1.5" style={{ color: "var(--muted-foreground)" }}>Answer</label>
                <textarea value={editing.answer} onChange={(e) => setEditing((d) => d ? { ...d, answer: e.target.value } : d)} rows={6} className={inp} style={{ ...inpStyle, resize: "none" }} placeholder="Enter the answer…" />
              </div>
            </div>
            <div className="flex gap-3 justify-end mt-5">
              <button onClick={() => setEditing(null)} className="px-4 py-2.5 rounded-xl text-sm font-semibold" style={{ background: "var(--muted)" }}>Cancel</button>
              <button onClick={saveEdit} disabled={!editing.question || !editing.answer}
                className="px-5 py-2.5 rounded-xl text-sm font-bold text-white disabled:opacity-50"
                style={{ background: "var(--brand-primary)", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                Save FAQ
              </button>
            </div>
          </div>
        </div>
      )}

      {toDelete && (
        <ConfirmDialog
          title="Delete this FAQ?"
          message={`"${toDelete.question}" will be permanently removed from ${toDelete.parentTitle}.`}
          onConfirm={() => handleDelete(toDelete)}
          onCancel={() => setToDelete(null)}
        />
      )}
    </div>
  );
}
