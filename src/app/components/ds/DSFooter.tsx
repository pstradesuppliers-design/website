import { Sun, Mail, Phone, MapPin, Linkedin, Facebook, Youtube, ArrowRight } from "lucide-react";

export function DSFooter() {
  return (
    <div className="space-y-12">
      {/* Full footer */}
      <div>
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-4">Full Footer</p>
        <footer className="rounded-2xl overflow-hidden" style={{ background: "#0D0D0D" }}>
          {/* Top CTA strip */}
          <div className="px-8 py-6 flex items-center justify-between gap-4 flex-wrap" style={{ background: "#049DBF" }}>
            <div>
              <p className="text-lg font-bold text-white" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                Ready to switch to renewable energy?
              </p>
              <p className="text-sm text-white/80">Get your free site assessment and custom quotation today.</p>
            </div>
            <button
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:bg-white/90"
              style={{ background: "white", color: "#049DBF", fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              Request a Free Quote <ArrowRight size={16} />
            </button>
          </div>

          {/* Main footer body */}
          <div className="px-8 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Brand */}
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "#049DBF" }}>
                    <Sun size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-extrabold text-white" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                      P.S. Trade & Suppliers
                    </p>
                    <p className="text-[10px]" style={{ color: "rgba(255,255,255,0.5)" }}>Renewable Energy Solutions</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.6)" }}>
                  East Africa's trusted partner for solar, wind, and hybrid energy systems since 2012. ERC licensed, ISO 9001 certified.
                </p>
                <div className="flex gap-3">
                  {[Linkedin, Facebook, Youtube].map((Icon, i) => (
                    <button
                      key={i}
                      className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                      style={{ background: "rgba(255,255,255,0.1)" }}
                    >
                      <Icon size={16} className="text-white" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Solutions */}
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#049DBF" }}>
                  Solutions
                </p>
                <ul className="space-y-3">
                  {["Solar Energy", "Wind Energy", "Energy Storage", "Hybrid Systems"].map((item) => (
                    <li key={item}>
                      <button
                        className="text-sm transition-colors hover:text-white"
                        style={{ color: "rgba(255,255,255,0.6)", fontFamily: "Inter, sans-serif" }}
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#84BF49" }}>
                  Services
                </p>
                <ul className="space-y-3">
                  {["Installation", "Maintenance & O&M", "Consulting & Design", "Energy Auditing"].map((item) => (
                    <li key={item}>
                      <button
                        className="text-sm transition-colors hover:text-white"
                        style={{ color: "rgba(255,255,255,0.6)", fontFamily: "Inter, sans-serif" }}
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#F27127" }}>
                  Contact Us
                </p>
                <ul className="space-y-3">
                  {[
                    { icon: Phone, text: "+254 700 000 000" },
                    { icon: Mail, text: "info@pstrade.co.ke" },
                    { icon: MapPin, text: "Westlands, Nairobi, Kenya" },
                  ].map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-start gap-2.5">
                      <Icon size={14} className="mt-0.5 flex-shrink-0" style={{ color: "rgba(255,255,255,0.4)" }} />
                      <span className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>{text}</span>
                    </li>
                  ))}
                </ul>

                {/* Newsletter */}
                <div className="mt-5">
                  <p className="text-xs font-semibold text-white/70 mb-2">Newsletter</p>
                  <div className="flex gap-2">
                    <input
                      placeholder="Your email"
                      className="flex-1 px-3 py-2 rounded-lg text-xs outline-none text-foreground"
                      style={{ background: "rgba(255,255,255,0.1)", color: "white" }}
                    />
                    <button
                      className="px-3 py-2 rounded-lg text-xs font-semibold text-white transition-all hover:bg-[#037a96]"
                      style={{ background: "#049DBF" }}
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="px-8 py-4 flex items-center justify-between flex-wrap gap-3"
            style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
          >
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
              © 2025 P.S. Trade & Suppliers. All rights reserved.
            </p>
            <div className="flex gap-4">
              {["Privacy Policy", "Terms of Use", "Cookie Policy"].map((link) => (
                <button key={link} className="text-xs transition-colors hover:text-white/70" style={{ color: "rgba(255,255,255,0.4)" }}>
                  {link}
                </button>
              ))}
            </div>
          </div>
        </footer>
      </div>

      {/* Minimal footer */}
      <div>
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-4">Minimal Footer</p>
        <footer className="rounded-2xl border border-border bg-card px-6 py-4 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ background: "#049DBF" }}>
              <Sun size={12} className="text-white" />
            </div>
            <span className="text-xs font-semibold text-foreground">P.S. Trade & Suppliers</span>
          </div>
          <p className="text-xs text-muted-foreground">© 2025 · Nairobi, Kenya</p>
          <div className="flex gap-4">
            {["Privacy", "Terms"].map((l) => (
              <button key={l} className="text-xs text-muted-foreground hover:text-[#049DBF] transition-colors">{l}</button>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}
