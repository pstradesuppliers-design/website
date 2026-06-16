import { useState, useMemo } from "react";
import { useSiteData } from "../../context/SiteDataContext";
import {
  Phone, Mail, MapPin, MessageCircle, Send, CheckCircle,
  Clock, ArrowRight, AlertCircle,
} from "lucide-react";

// ── Types ─────────────────────────────────────────────────────────────
interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

export interface Submission extends FormData {
  id: string;
  submittedAt: string;
}

const EMPTY_FORM: FormData = {
  name: "", phone: "", email: "", service: "", message: "",
};

const SERVICES = [
  "On Grid Solar System",
  "Off Grid Solar System",
  "Solar Water Pumping System",
  "Solar Water Heater",
  "Inverter Backup System",
  "Energy Consulting",
  "Equipment Procurement",
  "Engineering & Installation",
  "Asset Management & O&M",
  "General Enquiry",
];

// CONTACT_INFO is built dynamically from siteSettings inside the component


// ── Field component ───────────────────────────────────────────────────
function Field({
  label, required = false, error, children,
}: {
  label: string; required?: boolean; error?: string; children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label
        className="block text-sm font-semibold"
        style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
      >
        {label}
        {required && <span style={{ color: "#ef4444" }}> *</span>}
      </label>
      {children}
      {error && (
        <p className="flex items-center gap-1.5 text-xs" style={{ color: "#ef4444" }}>
          <AlertCircle size={12} /> {error}
        </p>
      )}
    </div>
  );
}

const inputCls = "w-full rounded-xl px-4 py-3 text-sm border focus:outline-none focus:ring-2 transition-all";
const inputStyle = { borderColor: "var(--border)", background: "var(--input-background)" };

// ── Validation ────────────────────────────────────────────────────────
function validate(form: FormData) {
  const errs: Partial<Record<keyof FormData, string>> = {};
  if (!form.name.trim())    errs.name    = "Your name is required.";
  if (!form.phone.trim())   errs.phone   = "Phone number is required.";
  else if (!/^\+?[\d\s\-()]{7,15}$/.test(form.phone.trim()))
    errs.phone = "Enter a valid phone number.";
  if (!form.email.trim())   errs.email   = "Email address is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errs.email = "Enter a valid email address.";
  if (!form.service)        errs.service = "Please select a service.";
  if (!form.message.trim()) errs.message = "Please include a message.";
  else if (form.message.trim().length < 20)
    errs.message = "Message must be at least 20 characters.";
  return errs;
}

// ── Main component ────────────────────────────────────────────────────
interface ContactPageProps {
  submissions: Submission[];
  onSubmit: (s: Submission) => void;
}

export function ContactPage({ submissions, onSubmit }: ContactPageProps) {
  const { siteSettings } = useSiteData();
  const [form, setForm] = useState<FormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const contactInfo = useMemo(() => [
    {
      icon: Phone,
      label: "Call Us",
      lines: [
        `${siteSettings.phone1} (Office)`,
        `${siteSettings.phone2} / +977-9764569056`,
      ],
      action: { href: `tel:${siteSettings.phone1.replace(/[\s\-]/g, "")}`, text: "Call now" },
      color: "var(--brand-primary)",
      bg: "var(--brand-primary-light)",
    },
    {
      icon: Mail,
      label: "Email Us",
      lines: [siteSettings.email1],
      action: { href: `mailto:${siteSettings.email1}`, text: "Send email" },
      color: "var(--brand-green)",
      bg: "var(--brand-green-light)",
    },
    {
      icon: MapPin,
      label: "Head Office",
      lines: [siteSettings.address],
      action: { href: "https://share.google/pcdHM994ZWVuE02FZ", text: "Get directions" },
      color: "var(--brand-secondary)",
      bg: "var(--brand-secondary-light)",
    },
    {
      icon: Clock,
      label: "Office Hours",
      lines: ["Sun – Fri: 09:00 – 18:00", "Saturday: 10:00 – 14:00 (enquiries only)"],
      action: null,
      color: "#7c3aed",
      bg: "#f5f3ff",
    },
  ], [siteSettings]);

  const set = (k: keyof FormData, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setStatus("submitting");

    // Simulate async submission (replace with Supabase insert + email API call)
    await new Promise((r) => setTimeout(r, 1200));

    const submission: Submission = {
      ...form,
      id: `SUB-${Date.now()}`,
      submittedAt: new Date().toLocaleString("en-US", {
        dateStyle: "medium", timeStyle: "short",
      }),
    };

    onSubmit(submission);
    setForm(EMPTY_FORM);
    setErrors({});
    setStatus("success");
  };

  const resetForm = () => setStatus("idle");

  return (
    <main className="bg-background text-foreground">

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section
        className="relative pt-36 pb-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0D0D0D 0%, #063d4a 55%, #0D0D0D 100%)" }}
      >
        <div
          className="absolute top-12 right-16 w-80 h-80 rounded-full opacity-10 blur-3xl"
          style={{ background: "var(--brand-primary)" }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-10 w-60 h-60 rounded-full opacity-10 blur-3xl"
          style={{ background: "var(--brand-green)" }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
            style={{
              background: "rgba(4,157,191,0.18)", color: "var(--brand-primary)",
              border: "1px solid rgba(4,157,191,0.3)", fontFamily: "Plus Jakarta Sans, sans-serif",
            }}
          >
            <MessageCircle size={14} /> Get in Touch
          </div>
          <h1 className="text-white mb-5" style={{ lineHeight: 1.1 }}>
            Let's Talk About Your{" "}
            <span style={{ color: "var(--brand-primary)" }}>Energy Project</span>
          </h1>
          <p
            className="text-xl max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.8 }}
          >
            Whether you're ready to install or just exploring options — our team is here to
            answer questions, arrange a free site survey, and provide a no-obligation quote.
          </p>
        </div>
      </section>

      {/* ── Contact info cards ────────────────────────────────────── */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {contactInfo.map((c) => (
              <div
                key={c.label}
                className="rounded-2xl p-6 border"
                style={{ background: "var(--card)", borderColor: "var(--border)" }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: c.bg }}
                >
                  <c.icon size={20} style={{ color: c.color }} />
                </div>
                <div
                  className="text-xs font-bold uppercase tracking-wider mb-2"
                  style={{ color: c.color, fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  {c.label}
                </div>
                {c.lines.map((line) => (
                  <p key={line} className="text-sm leading-snug mb-0.5" style={{ color: "var(--muted-foreground)" }}>
                    {line}
                  </p>
                ))}
                {c.action && (
                  <a
                    href={c.action.href}
                    target={c.action.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold mt-3 transition-all hover:gap-2.5"
                    style={{ color: c.color }}
                  >
                    {c.action.text} <ArrowRight size={12} />
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* ── Form + Map ──────────────────────────────────────────── */}
          <div className="grid lg:grid-cols-2 gap-10 items-start">

            {/* Contact form */}
            <div
              className="rounded-3xl border p-8 sm:p-10"
              style={{ background: "var(--card)", borderColor: "var(--border)" }}
            >
              {status === "success" ? (
                <div className="text-center py-10">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ background: "var(--brand-green-light)" }}
                  >
                    <CheckCircle size={40} style={{ color: "var(--brand-green)" }} />
                  </div>
                  <h3 className="mb-3" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                    Message Received!
                  </h3>
                  <p className="mb-2" style={{ color: "var(--muted-foreground)", lineHeight: 1.7 }}>
                    Thank you for reaching out. A member of our team will contact you within
                    one business day.
                  </p>
                  <p className="text-sm mb-8" style={{ color: "var(--muted-foreground)" }}>
                    For urgent enquiries, call us directly on{" "}
                    <a href={`tel:${siteSettings.phone1.replace(/[\s\-]/g, "")}`} style={{ color: "var(--brand-primary)" }} className="font-semibold">
                      {siteSettings.phone1}
                    </a>
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      onClick={resetForm}
                      className="px-6 py-3 rounded-xl text-sm font-bold text-white transition-all hover:scale-105"
                      style={{ background: "var(--brand-primary)", fontFamily: "Plus Jakarta Sans, sans-serif" }}
                    >
                      Send Another Message
                    </button>
                    <a
                      href={`https://wa.me/${siteSettings.whatsapp}?text=Hi%2C%20I%27m%20interested%20in%20your%20renewable%20energy%20solutions.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all hover:scale-105"
                      style={{
                        background: "#25d366", color: "#ffffff",
                        fontFamily: "Plus Jakarta Sans, sans-serif",
                      }}
                    >
                      <MessageCircle size={16} /> WhatsApp Us
                    </a>
                  </div>
                </div>
              ) : (
                <>
                  <h2 className="mb-2" style={{ fontSize: "1.6rem" }}>Send Us a Message</h2>
                  <p className="text-sm mb-8" style={{ color: "var(--muted-foreground)" }}>
                    Fill in the form below and we'll get back to you within one business day.
                  </p>

                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    {/* Name */}
                    <Field label="Full Name" required error={errors.name}>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => set("name", e.target.value)}
                        placeholder="Hari Bahadur Thapa"
                        className={inputCls}
                        style={{
                          ...inputStyle,
                          borderColor: errors.name ? "#ef4444" : "var(--border)",
                        }}
                      />
                    </Field>

                    {/* Phone + Email */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Field label="Phone Number" required error={errors.phone}>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => set("phone", e.target.value)}
                          placeholder="+977 984 000 0000"
                          className={inputCls}
                          style={{
                            ...inputStyle,
                            borderColor: errors.phone ? "#ef4444" : "var(--border)",
                          }}
                        />
                      </Field>
                      <Field label="Email Address" required error={errors.email}>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => set("email", e.target.value)}
                          placeholder="hari@example.com"
                          className={inputCls}
                          style={{
                            ...inputStyle,
                            borderColor: errors.email ? "#ef4444" : "var(--border)",
                          }}
                        />
                      </Field>
                    </div>

                    {/* Service */}
                    <Field label="Service Interested In" required error={errors.service}>
                      <select
                        value={form.service}
                        onChange={(e) => set("service", e.target.value)}
                        className={inputCls}
                        style={{
                          ...inputStyle,
                          borderColor: errors.service ? "#ef4444" : "var(--border)",
                          color: form.service ? "var(--foreground)" : "var(--muted-foreground)",
                        }}
                      >
                        <option value="">Select a service…</option>
                        {SERVICES.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </Field>

                    {/* Message */}
                    <Field label="Message" required error={errors.message}>
                      <textarea
                        value={form.message}
                        onChange={(e) => set("message", e.target.value)}
                        placeholder="Tell us about your project — location, approximate system size, current energy setup, or any questions you have…"
                        rows={5}
                        className={inputCls}
                        style={{
                          ...inputStyle,
                          resize: "none",
                          borderColor: errors.message ? "#ef4444" : "var(--border)",
                        }}
                      />
                      <p className="text-xs text-right" style={{ color: "var(--muted-foreground)" }}>
                        {form.message.length} chars {form.message.length < 20 && form.message.length > 0 && "(min 20)"}
                      </p>
                    </Field>

                    {/* Submit */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-white transition-all hover:scale-105 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
                        style={{
                          background: "var(--brand-primary)",
                          fontFamily: "Plus Jakarta Sans, sans-serif",
                        }}
                      >
                        {status === "submitting" ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                            Sending…
                          </>
                        ) : (
                          <><Send size={16} /> Send Message</>
                        )}
                      </button>

                      <a
                        href="https://wa.me/9779840000001?text=Hi%2C%20I%27m%20interested%20in%20your%20renewable%20energy%20solutions."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold transition-all hover:scale-105"
                        style={{
                          background: "#25d366", color: "#ffffff",
                          fontFamily: "Plus Jakarta Sans, sans-serif",
                        }}
                      >
                        <MessageCircle size={16} /> WhatsApp
                      </a>
                    </div>

                    <p className="text-xs text-center" style={{ color: "var(--muted-foreground)" }}>
                      By submitting, you agree to be contacted by our team regarding your enquiry.
                    </p>
                  </form>
                </>
              )}
            </div>

            {/* Map + offices */}
            <div className="space-y-6">
              {/* Google Map embed */}
              <div className="rounded-3xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
                <iframe
                  title="P.S. Trade & Suppliers — Head Office, Sano Bharyang-2, Kathmandu"
                  src={siteSettings.mapEmbed}
                  width="100%"
                  height="320"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* WhatsApp CTA */}
              <a
                href={`https://wa.me/${siteSettings.whatsapp}?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20your%20renewable%20energy%20solutions.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl p-5 transition-all hover:-translate-y-0.5 hover:shadow-lg"
                style={{ background: "#25d366" }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(255,255,255,0.2)" }}
                >
                  <MessageCircle size={24} className="text-white" />
                </div>
                <div>
                  <div className="font-bold text-white" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                    Chat on WhatsApp
                  </div>
                  <div className="text-sm" style={{ color: "rgba(255,255,255,0.85)" }}>
                    Fastest response — typically within 30 minutes during business hours
                  </div>
                </div>
                <ArrowRight size={20} className="text-white ml-auto flex-shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Submission log (session-only) ─────────────────────────── */}
      {submissions.length > 0 && (
        <section className="py-14" style={{ background: "var(--muted)" }}>
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="flex items-center gap-3 mb-6">
              <h3 style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                Form Submissions
              </h3>
              <span
                className="px-2.5 py-0.5 rounded-full text-xs font-bold text-white"
                style={{ background: "var(--brand-primary)" }}
              >
                {submissions.length}
              </span>
              <span
                className="ml-auto text-xs px-3 py-1 rounded-full font-semibold"
                style={{ background: "var(--brand-secondary-light)", color: "var(--brand-secondary-dark)" }}
              >
                Session only — connect Supabase to persist
              </span>
            </div>
            <div className="space-y-3">
              {[...submissions].reverse().map((s) => (
                <div
                  key={s.id}
                  className="rounded-2xl p-5 border grid sm:grid-cols-4 gap-4 items-start"
                  style={{ background: "var(--card)", borderColor: "var(--border)" }}
                >
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide mb-0.5" style={{ color: "var(--muted-foreground)" }}>Submitted</p>
                    <p className="text-sm font-semibold" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{s.submittedAt}</p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--muted-foreground)" }}>{s.id}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide mb-0.5" style={{ color: "var(--muted-foreground)" }}>Contact</p>
                    <p className="text-sm font-bold" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{s.name}</p>
                    <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{s.email}</p>
                    <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{s.phone}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide mb-0.5" style={{ color: "var(--muted-foreground)" }}>Service</p>
                    <p className="text-sm" style={{ color: "var(--brand-primary)" }}>{s.service}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide mb-0.5" style={{ color: "var(--muted-foreground)" }}>Message</p>
                    <p className="text-sm line-clamp-3" style={{ color: "var(--muted-foreground)", lineHeight: 1.6 }}>{s.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
