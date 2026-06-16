import { useState } from "react";
import { Menu, X, Sun, ChevronDown, Phone, Search, Bell } from "lucide-react";

const navLinks = ["Solutions", "Services", "Projects", "About Us"];

export function DSNavigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="space-y-12">
      {/* Primary navigation */}
      <div>
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-4">Primary Navigation</p>
        <div className="rounded-2xl border border-border overflow-hidden shadow-sm">
          <nav className="bg-white px-6 py-0 flex items-center justify-between h-16 relative">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "#049DBF" }}>
                <Sun size={18} className="text-white" />
              </div>
              <div>
                <span className="text-sm font-extrabold text-foreground" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                  P.S. Trade
                </span>
                <span className="text-[10px] text-muted-foreground block -mt-0.5 leading-none">& Suppliers</span>
              </div>
            </div>

            {/* Center links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link}
                  className="relative"
                  onMouseEnter={() => setHovered(link)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <button
                    className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:bg-[#e6f6fa]"
                    style={{
                      color: hovered === link ? "#049DBF" : "var(--foreground)",
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                    }}
                  >
                    {link}
                    {(link === "Solutions" || link === "Services") && (
                      <ChevronDown size={14} className="transition-transform" style={{ transform: hovered === link ? "rotate(180deg)" : "none" }} />
                    )}
                  </button>
                  {/* Mega dropdown preview */}
                  {hovered === link && (link === "Solutions" || link === "Services") && (
                    <div className="absolute top-full left-0 mt-1 w-56 rounded-xl border border-border bg-white shadow-xl p-2 z-50">
                      {(link === "Solutions"
                        ? ["Solar Energy", "Wind Energy", "Energy Storage", "Hybrid Systems"]
                        : ["Installation", "Maintenance & O&M", "Consulting", "Energy Auditing"]
                      ).map((item) => (
                        <button
                          key={item}
                          className="w-full text-left px-3 py-2 rounded-lg text-sm hover:bg-[#e6f6fa] text-foreground hover:text-[#049DBF] transition-colors font-medium"
                          style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right actions */}
            <div className="hidden md:flex items-center gap-3">
              <button className="flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-[#049DBF] transition-colors">
                <Phone size={14} />
                +254 700 000 000
              </button>
              <button
                className="px-4 py-2 rounded-xl text-sm font-semibold text-white transition-all hover:bg-[#037a96] active:scale-[0.98]"
                style={{ background: "#049DBF" }}
              >
                Get a Quote
              </button>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-muted/50"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>

          {/* Mobile drawer */}
          {mobileOpen && (
            <div className="md:hidden border-t border-border bg-white">
              <div className="p-4 space-y-1">
                {navLinks.map((link) => (
                  <button
                    key={link}
                    className="w-full text-left px-3 py-3 rounded-lg text-sm font-semibold hover:bg-[#e6f6fa] hover:text-[#049DBF] transition-colors"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    {link}
                  </button>
                ))}
                <div className="pt-3 border-t border-border">
                  <button
                    className="w-full px-4 py-3 rounded-xl text-sm font-semibold text-white transition-all"
                    style={{ background: "#049DBF" }}
                  >
                    Get a Quote
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Dark navigation */}
      <div>
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-4">Dark Navigation</p>
        <div className="rounded-2xl overflow-hidden shadow-sm" style={{ background: "#0D0D0D" }}>
          <nav className="px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "#049DBF" }}>
                <Sun size={18} className="text-white" />
              </div>
              <div>
                <span className="text-sm font-extrabold text-white" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                  P.S. Trade & Suppliers
                </span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link, i) => (
                <button
                  key={link}
                  className="px-3 py-2 rounded-lg text-sm font-semibold transition-colors"
                  style={{
                    color: i === 0 ? "#049DBF" : "rgba(255,255,255,0.7)",
                    background: i === 0 ? "rgba(4,157,191,0.12)" : "transparent",
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                  }}
                >
                  {link}
                </button>
              ))}
            </div>
            <button
              className="px-4 py-2 rounded-xl text-sm font-semibold text-white"
              style={{ background: "#F27127" }}
            >
              Get a Quote
            </button>
          </nav>
        </div>
      </div>

      {/* Transparent / overlay nav */}
      <div>
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-4">Transparent / Hero Overlay</p>
        <div className="rounded-2xl overflow-hidden relative h-28" style={{
          background: "linear-gradient(135deg, #049DBF 0%, #037a96 100%)"
        }}>
          <nav className="absolute top-0 left-0 right-0 px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
                <Sun size={18} className="text-white" />
              </div>
              <span className="text-sm font-extrabold text-white" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                P.S. Trade & Suppliers
              </span>
            </div>
            <div className="hidden md:flex items-center gap-4">
              {navLinks.map((link) => (
                <button key={link} className="text-sm font-semibold text-white/80 hover:text-white transition-colors" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                  {link}
                </button>
              ))}
            </div>
            <button className="px-4 py-2 rounded-xl text-sm font-semibold transition-all" style={{ background: "rgba(255,255,255,0.2)", color: "white", backdropFilter: "blur(8px)" }}>
              Get a Quote
            </button>
          </nav>
        </div>
      </div>

      {/* Admin top bar */}
      <div>
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-4">Admin / Dashboard Topbar</p>
        <div className="rounded-2xl border border-border overflow-hidden">
          <nav className="bg-white px-6 h-14 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button className="p-1.5 rounded-lg hover:bg-muted/50 text-muted-foreground">
                <Menu size={18} />
              </button>
              <div className="relative hidden sm:block">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  placeholder="Search…"
                  className="pl-9 pr-4 py-1.5 rounded-lg border border-border bg-muted/30 text-sm outline-none focus:border-[#049DBF] focus:ring-1 focus:ring-[#049DBF]/20 w-64"
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="relative p-2 rounded-lg hover:bg-muted/50 text-muted-foreground">
                <Bell size={18} />
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full" style={{ background: "#F27127" }} />
              </button>
              <div className="flex items-center gap-2 pl-3 border-l border-border">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=40&h=40&fit=crop&auto=format"
                  alt="Admin"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="hidden sm:block">
                  <p className="text-xs font-semibold leading-none">Dr. Amara Osei</p>
                  <p className="text-[10px] text-muted-foreground">Super Admin</p>
                </div>
                <ChevronDown size={14} className="text-muted-foreground" />
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div>
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-4">Breadcrumbs</p>
        <div className="flex flex-col gap-3">
          {[
            ["Home", "Solutions", "Solar Energy"],
            ["Home", "Projects", "Nairobi Commercial Solar Farm"],
            ["Home", "Team", "Dr. Amara Osei"],
          ].map((crumbs, i) => (
            <div key={i} className="flex items-center gap-2 text-sm">
              {crumbs.map((c, j) => (
                <div key={j} className="flex items-center gap-2">
                  {j > 0 && <span className="text-muted-foreground/50">/</span>}
                  <span
                    className="font-medium transition-colors"
                    style={{
                      color: j === crumbs.length - 1 ? "var(--foreground)" : "#049DBF",
                      textDecoration: j < crumbs.length - 1 ? "underline" : "none",
                      cursor: j < crumbs.length - 1 ? "pointer" : "default",
                    }}
                  >
                    {c}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
