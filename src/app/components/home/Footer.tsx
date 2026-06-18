import { Phone, Mail, MapPin, Linkedin, Facebook, Twitter, Instagram, ArrowRight } from "lucide-react";
import logoImg from "../../../imports/Screenshot_2026-06-12_at_19.38.22-removebg-preview.png";
import { useNavigate } from "react-router";
import { useSiteData } from "../../context/SiteDataContext";

export function Footer({ onAdmin }: { onAdmin?: () => void }) {
  const navigate = useNavigate();
  const { siteSettings, solutionsData, servicesData } = useSiteData();

  const goTo = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socials = [
    { icon: Linkedin,  href: siteSettings.linkedinUrl,  label: "LinkedIn" },
    { icon: Facebook,  href: siteSettings.facebookUrl,  label: "Facebook" },
    { icon: Instagram, href: siteSettings.instagramUrl, label: "Instagram" },
    { icon: Twitter,   href: siteSettings.twitterUrl,   label: "Twitter/X" },
  ];

  return (
    <footer style={{ background: "#0D0D0D" }}>
      {/* CTA strip */}
      <div style={{ background: "#049DBF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p
              className="text-lg font-bold text-white"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              Ready to switch to renewable energy?
            </p>
            <p className="text-sm text-white/75">
              Free site assessment · Quote in 72 hrs · No obligation
            </p>
          </div>
          <button
            onClick={() => goTo("/contact")}
            className="flex-shrink-0 flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all hover:bg-white/90 active:scale-95"
            style={{ background: "white", color: "#049DBF", fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            Get a Free Quote <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand col  spans 2 */}
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src={logoImg}
                alt="P.S. Trade & Suppliers"
                className="w-10 h-10 object-contain"
              />
              <div>
                <p
                  className="text-sm font-extrabold text-white leading-none"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  {siteSettings.siteName}
                </p>
                <p className="text-[10px]" style={{ color: "rgba(255,255,255,0.45)" }}>
                  {siteSettings.tagline}
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.55)" }}>
              Nepal's trusted renewable energy company  delivering solar, off-grid, water pumping, and backup systems across all 7 provinces since 2080.
            </p>

            {/* Socials */}
            <div className="flex gap-2.5 mb-6">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                >
                  <Icon size={15} className="text-white" />
                </a>
              ))}
            </div>

            {/* Contact quick links */}
            <div className="space-y-2">
              {[
                { href: `tel:${siteSettings.phone1.replace(/[\s\-]/g, "")}`, icon: Phone, text: siteSettings.phone1 },
                { href: `mailto:${siteSettings.email1}`, icon: Mail, text: siteSettings.email1 },
              ].map(({ href, icon: Icon, text }) => (
                <a
                  key={text}
                  href={href}
                  className="flex items-start gap-2 text-sm transition-all duration-200 cursor-pointer"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#F27126")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                >
                  <Icon size={13} className="flex-shrink-0 mt-0.5" />
                  {text}
                </a>
              ))}
              <div className="flex items-start gap-2 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                <MapPin size={13} className="flex-shrink-0 mt-0.5" />
                {siteSettings.address}
              </div>
            </div>
          </div>

          {/* Solutions column */}
          <div>
            <p
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: "#049DBF" }}
            >
              Solutions
            </p>
            <ul className="space-y-2.5">
              {solutionsData.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => goTo(`/solutions/${s.id}`)}
                    className="text-sm transition-all duration-200 cursor-pointer text-left"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#F27126")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                  >
                    {s.shortTitle}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services column */}
          <div>
            <p
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: "#049DBF" }}
            >
              Services
            </p>
            <ul className="space-y-2.5">
              {servicesData.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => goTo(`/services/${s.id}`)}
                    className="text-sm transition-all duration-200 cursor-pointer text-left"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#F27126")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                  >
                    {s.shortTitle}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <p
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: "#049DBF" }}
            >
              Company
            </p>
            <ul className="space-y-2.5">
              {[
                { label: "About Us",     to: "/about" },
                { label: "Our Team",     to: "/team" },
                { label: "Projects",     to: "/projects" },
                { label: "Contact",      to: "/contact" },
              ].map(({ label, to }) => (
                <li key={label}>
                  <button
                    onClick={() => goTo(to)}
                    className="text-sm transition-all duration-200 cursor-pointer text-left"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#F27126")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal column */}
          <div>
            <p
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: "#049DBF" }}
            >
              Legal
            </p>
            <ul className="space-y-2.5">
              {[
                { label: "Privacy Policy",  href: "#" },
                { label: "Terms of Use",    href: "#" },
                { label: "Cookie Policy",   href: "#" },
                { label: "Sitemap",         href: "#" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm transition-all duration-200 cursor-pointer"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#F27126")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 pt-6 border-t flex items-center justify-center gap-4"
          style={{ borderColor: "rgba(255,255,255,0.07)" }}
        >
          <p className="text-xs text-center" style={{ color: "rgba(255,255,255,0.3)" }}>
            © {new Date().getFullYear()} {siteSettings.siteName}. All rights reserved.
          </p>
          {/* {onAdmin && (
            <button
              onClick={onAdmin}
              className="text-xs transition-all hover:opacity-60"
              style={{ color: "rgba(255,255,255,0.15)" }}
              title="Admin"
            >
              Admin
            </button>
          )} */}
        </div>
      </div>
    </footer>
  );
}
