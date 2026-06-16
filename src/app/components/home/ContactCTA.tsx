import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";

const HERO_BG = "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1400&h=700&fit=crop&auto=format&q=70";

export function ContactCTA() {
  const navigate = useNavigate();

  return (
    <section id="contact-cta" className="relative py-24 sm:py-32 overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0">
        <img src={HERO_BG} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "rgba(4,15,30,0.88)" }} />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6"
          style={{ background: "rgba(242,113,39,0.2)", color: "#F27127", border: "1px solid rgba(242,113,39,0.35)" }}
        >
          Ready to Get Started?
        </div>

        <h2 className="text-white mb-6" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
          Start Your{" "}
          <span style={{ color: "#049DBF" }}>Energy Journey</span>{" "}
          Today
        </h2>

        <p className="text-gray-300 mb-10 leading-relaxed text-lg">
          Get a free site assessment and custom quotation. Our team responds within 24 hours on business days.
        </p>

        <button
          onClick={() => navigate("/contact")}
          className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl font-bold text-white text-base transition-all hover:scale-105 active:scale-95 shadow-xl"
          style={{
            background: "#049DBF",
            fontFamily: "Plus Jakarta Sans, sans-serif",
            boxShadow: "0 8px 32px rgba(4,157,191,0.45)",
          }}
        >
          Contact Us <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
}
