import { useState } from "react";
import { User, Mail, Phone, Building2, MessageSquare, ChevronDown, CheckCircle, AlertCircle, Upload } from "lucide-react";
import { Button } from "./DSButtons";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: React.ReactNode;
  error?: string;
  hint?: string;
}

function Input({ label, icon, error, hint, id, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-foreground">
        {label}
        {props.required && <span style={{ color: "#F27127" }} className="ml-1">*</span>}
      </label>
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            {icon}
          </div>
        )}
        <input
          id={id}
          className={`w-full rounded-xl border text-sm text-foreground placeholder:text-muted-foreground/60 transition-all duration-200 outline-none py-2.5 pr-4 ${icon ? "pl-10" : "pl-4"} ${
            error
              ? "border-red-400 bg-red-50 focus:ring-2 focus:ring-red-400/30"
              : "border-border bg-input-background focus:border-[#049DBF] focus:ring-2 focus:ring-[#049DBF]/20"
          }`}
          {...props}
        />
        {error && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <AlertCircle size={16} className="text-red-500" />
          </div>
        )}
      </div>
      {error && <p className="text-xs text-red-500 flex items-center gap-1"><AlertCircle size={12} />{error}</p>}
      {hint && !error && <p className="text-xs text-muted-foreground">{hint}</p>}
    </div>
  );
}

function Select({ label, options, id, required }: { label: string; options: string[]; id: string; required?: boolean }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-foreground">
        {label}
        {required && <span style={{ color: "#F27127" }} className="ml-1">*</span>}
      </label>
      <div className="relative">
        <select
          id={id}
          className="w-full rounded-xl border border-border bg-input-background text-sm text-foreground py-2.5 pl-4 pr-10 appearance-none outline-none transition-all duration-200 focus:border-[#049DBF] focus:ring-2 focus:ring-[#049DBF]/20 cursor-pointer"
        >
          {options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
        <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
      </div>
    </div>
  );
}

function Textarea({ label, id, required, placeholder, rows = 4 }: { label: string; id: string; required?: boolean; placeholder?: string; rows?: number }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-foreground">
        {label}
        {required && <span style={{ color: "#F27127" }} className="ml-1">*</span>}
      </label>
      <textarea
        id={id}
        rows={rows}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-input-background text-sm text-foreground placeholder:text-muted-foreground/60 py-2.5 px-4 outline-none transition-all duration-200 focus:border-[#049DBF] focus:ring-2 focus:ring-[#049DBF]/20 resize-none"
      />
    </div>
  );
}

export function DSForms() {
  const [submitted, setSubmitted] = useState(false);
  const [checked, setChecked] = useState<string[]>([]);

  const toggleCheck = (v: string) =>
    setChecked((prev) => (prev.includes(v) ? prev.filter((x) => x !== v) : [...prev, v]));

  return (
    <div className="space-y-12">
      {/* Contact Form */}
      <div>
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-4">Contact Form</p>
        <div className="max-w-2xl rounded-2xl border border-border bg-card p-8">
          <h3 className="mb-1">Send Us a Message</h3>
          <p className="text-sm text-muted-foreground mb-6">Our team responds within 24 hours on business days.</p>

          {submitted ? (
            <div className="rounded-xl p-6 text-center" style={{ background: "#f0f7e7", border: "1px solid #84BF4940" }}>
              <CheckCircle size={40} className="mx-auto mb-3" style={{ color: "#84BF49" }} />
              <h4 className="mb-1">Message Sent!</h4>
              <p className="text-sm text-muted-foreground">We'll be in touch within 24 hours.</p>
              <button className="mt-4 text-sm font-semibold" style={{ color: "#049DBF" }} onClick={() => setSubmitted(false)}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Input id="fname" label="Full Name" placeholder="Dr. Amara Osei" icon={<User size={16} />} required />
                <Input id="email" label="Email Address" type="email" placeholder="amara@company.com" icon={<Mail size={16} />} required />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Input id="phone" label="Phone Number" type="tel" placeholder="+254 700 000 000" icon={<Phone size={16} />} />
                <Input id="company" label="Company / Organisation" placeholder="Westgate Holdings" icon={<Building2 size={16} />} />
              </div>
              <Select
                id="service"
                label="Service of Interest"
                required
                options={[
                  "Select a service…",
                  "Solar Energy Installation",
                  "Wind Energy System",
                  "Energy Storage",
                  "Hybrid Systems",
                  "Energy Auditing",
                  "Consulting & Design",
                  "Maintenance & O&M",
                ]}
              />
              <Textarea
                id="message"
                label="Message"
                required
                placeholder="Tell us about your energy needs, site details, or project timeline…"
                rows={5}
              />
              {/* Checkboxes */}
              <div>
                <p className="text-sm font-semibold mb-2">I'm interested in (select all that apply)</p>
                <div className="flex flex-wrap gap-2">
                  {["Free Site Assessment", "Product Brochure", "Pricing Information", "Financing Options"].map((v) => (
                    <button
                      key={v}
                      type="button"
                      onClick={() => toggleCheck(v)}
                      className="text-xs px-3 py-1.5 rounded-full border transition-all duration-200 font-medium"
                      style={{
                        borderColor: checked.includes(v) ? "#049DBF" : "var(--border)",
                        background: checked.includes(v) ? "#e6f6fa" : "transparent",
                        color: checked.includes(v) ? "#049DBF" : "var(--muted-foreground)",
                      }}
                    >
                      {checked.includes(v) && "✓ "}{v}
                    </button>
                  ))}
                </div>
              </div>
              <Button type="submit" size="lg" fullWidth iconRight={<MessageSquare size={16} />}>
                Send Message
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                By submitting you agree to our Privacy Policy. We never share your data.
              </p>
            </form>
          )}
        </div>
      </div>

      {/* Input states */}
      <div>
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-4">Input States</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl">
          <Input id="s-default" label="Default" placeholder="Enter value" />
          <Input id="s-filled" label="Filled" defaultValue="Nairobi, Kenya" />
          <Input id="s-error" label="Error" defaultValue="bad-email" error="Please enter a valid email address" />
          <Input id="s-disabled" label="Disabled" defaultValue="Not editable" disabled />
        </div>
      </div>

      {/* File upload */}
      <div>
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-4">File Upload</p>
        <div
          className="max-w-sm rounded-2xl border-2 border-dashed p-8 text-center cursor-pointer transition-colors hover:border-[#049DBF] hover:bg-[#e6f6fa]/30"
          style={{ borderColor: "var(--border)" }}
        >
          <Upload size={32} className="mx-auto mb-3 text-muted-foreground" />
          <p className="text-sm font-semibold mb-1">Upload site plan or photos</p>
          <p className="text-xs text-muted-foreground mb-3">PNG, JPG, PDF up to 10 MB</p>
          <Button size="sm" variant="outline">Browse Files</Button>
        </div>
      </div>
    </div>
  );
}
