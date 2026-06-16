import { useState } from "react";
import { Mail, Trash2, Search, Download, Eye, X } from "lucide-react";
import { useSiteData } from "../../../context/SiteDataContext";
import { ConfirmDialog } from "../shared/ConfirmDialog";
import type { Submission } from "../../contact/ContactPage";

export function ContactLeads() {
  const { contactSubmissions, deleteContactSubmission } = useSiteData();
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Submission | null>(null);
  const [toDelete, setToDelete] = useState<string | null>(null);

  const filtered = contactSubmissions.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.email.toLowerCase().includes(search.toLowerCase()) ||
      s.service.toLowerCase().includes(search.toLowerCase())
  );

  const exportCSV = () => {
    const headers = ["ID", "Name", "Email", "Phone", "Service", "Message", "Submitted"];
    const rows = contactSubmissions.map((s) =>
      [s.id, s.name, s.email, s.phone, s.service, `"${s.message.replace(/"/g, "'")}"`, s.submittedAt].join(",")
    );
    const csv = [headers.join(","), ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href = url; a.download = "contact-leads.csv"; a.click();
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between gap-4 mb-6">
        <div>
          <h2 style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>Contact Leads</h2>
          <p className="text-sm mt-1" style={{ color: "var(--muted-foreground)" }}>
            {contactSubmissions.length} submission{contactSubmissions.length !== 1 ? "s" : ""} received
          </p>
        </div>
        {contactSubmissions.length > 0 && (
          <button
            onClick={exportCSV}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold border transition-all hover:opacity-80"
            style={{ borderColor: "var(--border)", fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            <Download size={15} /> Export CSV
          </button>
        )}
      </div>

      {/* Search */}
      <div className="flex items-center gap-2 rounded-xl border px-3 py-2 mb-5" style={{ borderColor: "var(--border)", background: "var(--card)" }}>
        <Search size={15} style={{ color: "var(--muted-foreground)" }} />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name, email, or service…"
          className="flex-1 text-sm bg-transparent focus:outline-none"
        />
        {search && <button onClick={() => setSearch("")}><X size={14} style={{ color: "var(--muted-foreground)" }} /></button>}
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-20" style={{ color: "var(--muted-foreground)" }}>
          <Mail size={40} className="mx-auto mb-3 opacity-30" />
          <p className="text-sm">{search ? "No leads match your search." : "No contact leads yet."}</p>
        </div>
      ) : (
        <div className="space-y-3">
          {[...filtered].reverse().map((lead) => (
            <div
              key={lead.id}
              className="rounded-2xl border p-4 grid sm:grid-cols-4 gap-3 items-center"
              style={{ background: "var(--card)", borderColor: "var(--border)" }}
            >
              <div>
                <p className="text-sm font-bold" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{lead.name}</p>
                <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{lead.submittedAt}</p>
              </div>
              <div>
                <a href={`mailto:${lead.email}`} className="text-xs block truncate hover:underline" style={{ color: "var(--brand-primary)" }}>{lead.email}</a>
                <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{lead.phone}</p>
              </div>
              <div>
                <span className="text-xs px-2 py-1 rounded-full font-semibold" style={{ background: "var(--brand-primary-light)", color: "var(--brand-primary)" }}>
                  {lead.service}
                </span>
              </div>
              <div className="flex items-center gap-2 justify-end">
                <button
                  onClick={() => setSelected(lead)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:opacity-80"
                  style={{ background: "var(--brand-primary-light)", color: "var(--brand-primary)" }}
                  title="View"
                >
                  <Eye size={14} />
                </button>
                <button
                  onClick={() => setToDelete(lead.id)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:opacity-80"
                  style={{ background: "#fef2f2", color: "#ef4444" }}
                  title="Delete"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* View detail modal */}
      {selected && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}>
          <div className="rounded-2xl p-6 w-full max-w-lg shadow-2xl" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
            <div className="flex items-center justify-between mb-5">
              <h4 style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>Lead Details — {selected.id}</h4>
              <button onClick={() => setSelected(null)}><X size={18} style={{ color: "var(--muted-foreground)" }} /></button>
            </div>
            <div className="space-y-3">
              {[
                { label: "Name",     value: selected.name },
                { label: "Email",    value: selected.email },
                { label: "Phone",    value: selected.phone },
                { label: "Service",  value: selected.service },
                { label: "Submitted", value: selected.submittedAt },
              ].map(({ label, value }) => (
                <div key={label} className="flex gap-3 py-2 border-b" style={{ borderColor: "var(--border)" }}>
                  <span className="text-xs font-semibold uppercase tracking-wide w-20 flex-shrink-0 mt-0.5" style={{ color: "var(--muted-foreground)" }}>{label}</span>
                  <span className="text-sm">{value}</span>
                </div>
              ))}
              <div className="py-2">
                <span className="block text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--muted-foreground)" }}>Message</span>
                <p className="text-sm p-3 rounded-xl" style={{ background: "var(--muted)", lineHeight: 1.7 }}>{selected.message}</p>
              </div>
            </div>
            <div className="flex gap-2 mt-5">
              <a href={`mailto:${selected.email}?subject=Re: ${selected.service}`}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold text-white"
                style={{ background: "var(--brand-primary)", fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                <Mail size={15} /> Reply by Email
              </a>
              <button onClick={() => setSelected(null)} className="px-4 py-2.5 rounded-xl text-sm font-semibold" style={{ background: "var(--muted)" }}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {toDelete && (
        <ConfirmDialog
          title="Delete this lead?"
          message="This contact submission will be permanently removed. This action cannot be undone."
          onConfirm={() => { deleteContactSubmission(toDelete); setToDelete(null); }}
          onCancel={() => setToDelete(null)}
        />
      )}
    </div>
  );
}
