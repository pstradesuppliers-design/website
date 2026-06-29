import { useEffect } from "react";

const COMPANY_NAME = "P.S. Trade and Suppliers";

export function UnderConstruction() {
  useEffect(() => {
    document.title = `We're Building Something Better — ${COMPANY_NAME}`;
  }, []);

  return (
    <main
      className="py-12 relative min-h-dvh flex flex-col items-center justify-center overflow-hidden selection:bg-[var(--brand-primary)]/20"
      /* ── dark gradient background ── */
      style={{
        background:
          "linear-gradient(135deg, #070f1e 0%, #0a1628 35%, #0c1f33 65%, #081420 100%)",
      }}
    >
      {/* ── decorative ambient glow ── */}
      <div
        className="pointer-events-none absolute -top-48 left-1/2 -translate-x-1/2 h-[420px] w-[680px] max-w-full rounded-full opacity-20 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, var(--brand-primary) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 -right-32 h-64 w-64 rounded-full opacity-10 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, var(--brand-secondary) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* ── ornament grid pattern ── */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.035]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* ── content ── */}
      <div className="relative z-10 mx-auto flex w-full max-w-2xl flex-col items-center px-6 text-center animate-in fade-in duration-1000">
        {/* company name / logo placeholder */}
        <p
          className="mb-16 text-xs font-bold uppercase tracking-[0.3em]"
          style={{ color: "var(--brand-primary)" }}
        >
          {COMPANY_NAME}
        </p>

        {/* Coming Soon badge */}
        <div
          className="mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
          style={{
            borderColor: "rgba(4,157,191,0.35)",
            color: "var(--brand-primary)",
            background: "rgba(4,157,191,0.08)",
          }}
        >
          {/* <span
            className="inline-block h-1.5 w-1.5 rounded-full"
            style={{ background: "var(--brand-primary)" }}
          /> */}
          Coming Soon
        </div>

        {/* construction icon */}
        <div
          className="mb-8 flex items-center justify-center"
          aria-hidden="true"
        >
          <svg
            width="88"
            height="88"
            viewBox="0 0 88 88"
            fill="none"
            className="drop-shadow-lg"
            style={{ animation: "float 4s ease-in-out infinite" }}
          >
            {/* Gear */}
            <g
              style={{
                transformOrigin: "44px 44px",
                animation: "spin 10s linear infinite",
              }}
            >
              {/* Teeth */}
              {[...Array(8)].map((_, i) => (
                <rect
                  key={i}
                  x="41"
                  y="10"
                  width="6"
                  height="10"
                  rx="2"
                  fill="var(--brand-primary)"
                  opacity="0.8"
                  transform={`rotate(${i * 45} 44 44)`}
                />
              ))}

              {/* Outer ring */}
              <circle
                cx="44"
                cy="44"
                r="22"
                stroke="var(--brand-primary)"
                strokeWidth="6"
                fill="rgba(59,130,246,.08)"
              />

              {/* Inner ring */}
              <circle
                cx="44"
                cy="44"
                r="9"
                stroke="var(--brand-primary)"
                strokeWidth="4"
                fill="white"
              />
            </g>

            {/* Wrench */}
          </svg>
        </div>

        {/* heading */}
        <h1
          className="mb-4 text-balance leading-tight text-white"
          style={{
            fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.75rem, 4vw, 3rem)",
          }}
        >
          We're Building Something Better
        </h1>

        {/* message */}
        <p
          className="mx-auto mb-2 max-w-lg text-balance text-base leading-relaxed sm:text-lg"
          style={{ color: "rgba(255,255,255,0.7)" }}
        >
          Our website is currently undergoing improvements to bring you a
          faster, cleaner, and better experience. We're putting the finishing
          touches on everything and will be back very soon.
        </p>

        {/* secondary text */}
        <p className="mb-10 text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
          Thank you for your patience and support.
        </p>
      </div>

      {/* ── footer ── */}
      <footer className="relative z-10 mt-auto w-full pb-8 pt-20 text-center">
        <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
          &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
        </p>
        <p
          className="mt-1 text-[11px] italic tracking-wide"
          style={{ color: "rgba(255,255,255,0.15)" }}
        >
          See you soon.
        </p>
      </footer>

      {/* ── keyframes ── */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-8px); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes wrenchBounce {
          0%, 100% { transform: rotate(-30deg) translateY(0); }
          50%      { transform: rotate(-20deg) translateY(-3px); }
        }
        @keyframes pulse-dot {
          0%, 80%, 100% { opacity: 0.2; transform: scale(0.8); }
          40%           { opacity: 1;   transform: scale(1.2); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-in { animation: fade-in 1s ease-out both; }
      `}</style>
    </main>
  );
}
