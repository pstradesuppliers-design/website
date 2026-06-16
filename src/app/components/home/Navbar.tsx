import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { Menu, X, Phone } from "lucide-react";
import { useSiteData } from "../../context/SiteDataContext";
import logoImg from "../../../imports/Screenshot_2026-06-12_at_19.38.22-removebg-preview.png";

const navLinks = [
  { label: "Solutions", to: "/solutions",  matchPrefix: "/solutions" },
  { label: "Services",  to: "/services",   matchPrefix: "/services" },
  { label: "Projects",  to: "/projects",   matchPrefix: "/projects" },
  { label: "Team",      to: "/team",       matchPrefix: "/team" },
  { label: "About Us",  to: "/about",      matchPrefix: "/about" },
  { label: "Contact",   to: "/contact",    matchPrefix: "/contact" },
];

export function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { siteSettings } = useSiteData();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setOpen(false); }, [location.pathname]);

  const isActive = (prefix: string) =>
    location.pathname === prefix || location.pathname.startsWith(`${prefix}/`);

  const goTo = (to: string) => {
    navigate(to);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(false);
  };

  const isHome = location.pathname === "/";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 1px 24px rgba(0,0,0,0.08)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">

        {/* Logo */}
        <button
          onClick={() => goTo("/")}
          className="flex items-center gap-2.5 flex-shrink-0"
        >
          <img
            src={logoImg}
            alt="P.S. Trade & Suppliers"
            className="w-10 h-10 object-contain"
          />
          <div className="leading-none">
            <span
              className="text-sm font-extrabold block"
              style={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
                color: "#F27126",
              }}
            >
              P.S. Trade &amp; Suppliers
            </span>
            <span
              className="text-[10px] block"
              style={{ color: scrolled || !isHome ? "#6b7280" : "rgba(255,255,255,0.7)" }}
            >
              Renewable Energy Solutions
            </span>
          </div>
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = isActive(link.matchPrefix);
            return (
              <button
                key={link.label}
                onClick={() => goTo(link.to)}
                className="px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:bg-white/20"
                style={{
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                  color: active
                    ? "var(--brand-primary)"
                    : scrolled || !isHome
                    ? "#374151"
                    : "rgba(255,255,255,0.92)",
                }}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right actions */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${siteSettings.phone1.replace(/[\s\-]/g, "")}`}
            className="flex items-center gap-1.5 text-sm font-semibold transition-colors"
            style={{ color: scrolled || !isHome ? "#049DBF" : "rgba(255,255,255,0.9)" }}
          >
            <Phone size={14} />
            {siteSettings.phone1}
          </a>
          <button
            onClick={() => goTo("/contact")}
            className="px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:scale-105 active:scale-95 shadow-md"
            style={{ background: "#F27127", fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            Get a Free Quote
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 rounded-xl"
          style={{ color: scrolled || !isHome ? "#0D0D0D" : "#ffffff" }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className="lg:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: open ? "480px" : "0",
          background: "rgba(255,255,255,0.98)",
          backdropFilter: "blur(16px)",
        }}
      >
        <div className="px-4 pb-5 pt-2 space-y-1 border-t border-gray-100">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => goTo(link.to)}
              className="w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-colors hover:bg-gray-50"
              style={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
                color: isActive(link.matchPrefix) ? "var(--brand-primary)" : "#374151",
              }}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 space-y-2">
            <a
              href={`tel:${siteSettings.phone1.replace(/[\s\-]/g, "")}`}
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold"
              style={{ color: "#049DBF" }}
            >
              <Phone size={15} /> {siteSettings.phone1}
            </a>
            <button
              onClick={() => goTo("/contact")}
              className="w-full py-3 rounded-xl text-sm font-bold text-white"
              style={{ background: "#F27127" }}
            >
              Get a Free Quote
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
