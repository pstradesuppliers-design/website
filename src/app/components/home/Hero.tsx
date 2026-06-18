import { ArrowRight, ShieldCheck, Award, Users } from "lucide-react";
import { useNavigate } from "react-router";

const HERO_BG = "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&h=1080&fit=crop&auto=format&q=80";

export function Hero() {
  const navigate = useNavigate();

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={HERO_BG} alt="Solar farm" className="w-full h-full object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(105deg, rgba(4,15,30,0.92) 0%, rgba(4,157,191,0.30) 60%, rgba(4,15,30,0.55) 100%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{ background: "linear-gradient(to top, #ffffff, transparent)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-20 w-full">
        <div className="max-w-3xl">
          {/* Badge
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-semibold"
            style={{ background: "rgba(4,157,191,0.18)", border: "1px solid rgba(4,157,191,0.45)", color: "#7ee8fa" }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#049DBF" }} />
            Nepal's Trusted Solar EPC Company
          </div> */}

          {/* Headline */}
          <h1
            className="mb-6 text-white leading-tight"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 800 }}
          >
            Driving Nepal's Growth Through{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #049DBF, #84BF49)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Clean and Reliable Energy
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.82)" }}>
            Trusted nationwide for on-grid and off-grid solar, water pumping, and energy infrastructure — backed by engineers with two decades of renewable energy experience across all 7 provinces of Nepal.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-10">
            <button
              onClick={() => navigate("/contact")}
              className="flex items-center gap-2 px-7 py-4 rounded-xl text-white font-bold text-base transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
              style={{
                background: "#F27127",
                fontFamily: "Plus Jakarta Sans, sans-serif",
                boxShadow: "0 8px 32px rgba(242,113,39,0.4)",
              }}
            >
              Get a Free Site Consultation <ArrowRight size={18} />
            </button>
            <button
              onClick={() => navigate("/solutions")}
              className="flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-base transition-all duration-200 hover:bg-white/20"
              style={{
                border: "2px solid rgba(255,255,255,0.6)",
                color: "#ffffff",
                fontFamily: "Plus Jakarta Sans, sans-serif",
              }}
            >
              Explore Our Solutions <ArrowRight size={18} />
            </button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-5">
            {[
              { icon: ShieldCheck, text: "Nepal Engineering Council ('A' Electrical)" },
              { icon: Award, text: "AEPC Registered" },
              { icon: Users, text: "18+ Years Combined Experience" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2">
                <Icon size={16} style={{ color: "#84BF49" }} />
                <span className="text-sm font-semibold" style={{ color: "rgba(255,255,255,0.85)" }}>
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Floating stats card */}
        <div
          className="absolute bottom-20 right-4 sm:right-8 hidden lg:grid grid-cols-2 gap-px rounded-2xl overflow-hidden shadow-2xl"
          style={{ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.15)" }}
        >
          {[
            { value: "300+", label: "Solar Sites" },
            { value: "5.4 MW+", label: "Engineered" },
            { value: "200+", label: "Water Projects" },
            { value: "7", label: "Provinces" },
          ].map((s) => (
            <div key={s.label} className="px-6 py-4 text-center" style={{ background: "rgba(0,0,0,0.25)" }}>
              <p className="text-xl font-extrabold text-white" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                {s.value}
              </p>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
        <div className="w-px h-8 bg-white/30" />
        <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
      </div>
    </section>
  );
}
