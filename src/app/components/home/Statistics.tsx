import { useEffect, useRef, useState } from "react";

interface StatItem {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  desc: string;
  color: string;
}

const stats: StatItem[] = [
  { value: 300, suffix: "+", label: "Solar Sites Deployed", desc: "Nationwide solar irrigation and drinking water sites delivered across Nepal", color: "#049DBF" },
  { value: 5, suffix: ".4 MW+", label: "Utility-Scale Solar Engineered", desc: "Large-scale solar PV systems designed and commissioned", color: "#84BF49" },
  { value: 200, suffix: "+", label: "Irrigation & Water Projects", desc: "Solar water pumping systems for agriculture and rural communities", color: "#F27127" },
  { value: 7, suffix: "", label: "Provinces Served", desc: "Full national coverage from Koshi to Sudurpashchim", color: "#049DBF" },
  { value: 18, suffix: "+", label: "Years Combined Experience", desc: "Decades of renewable energy leadership across our team", color: "#84BF49" },
  { value: 6, suffix: "+ partners", label: "INGO & Development Partners", desc: "AEPC, UNOPS, ICIMOD, Helvetas, GIZ, WWF & Renewable World", color: "#F27127" },
];

function AnimatedNumber({ target, suffix, prefix, color, active }: { target: number; suffix: string; prefix?: string; color: string; active: boolean }) {
  const [display, setDisplay] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!active) return;
    const start = Date.now();
    const duration = 1800;
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);

    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      setDisplay(Math.round(ease(progress) * target));
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active, target]);

  return (
    <span className="text-5xl sm:text-6xl font-black" style={{ color, fontFamily: "Plus Jakarta Sans, sans-serif" }}>
      {prefix}{display.toLocaleString()}{suffix}
    </span>
  );
}

export function Statistics() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 sm:py-28 relative overflow-hidden"
      style={{ background: "#0D0D0D" }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute -top-20 -left-20 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "#049DBF" }}
      />
      <div
        className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "#84BF49" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
            style={{ background: "rgba(4,157,191,0.15)", color: "#049DBF", border: "1px solid rgba(4,157,191,0.3)" }}
          >
            By the Numbers
          </div>
          <h2 className="text-white" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
            Measurable Impact,{" "}
            <span style={{ color: "#84BF49" }}>Every Day</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto leading-relaxed">
            Numbers that reflect real projects, real impact, and real energy transformation across Nepal's seven provinces.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.05)" }}>
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="p-8 sm:p-10 flex flex-col"
              style={{ background: "#0D0D0D" }}
            >
              <AnimatedNumber
                target={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix}
                color={stat.color}
                active={visible}
              />
              <p
                className="text-base font-bold text-white mt-3 mb-1"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                {stat.label}
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">{stat.desc}</p>
              <div
                className="mt-4 h-0.5 rounded-full"
                style={{ background: stat.color, width: visible ? "48px" : "0px", transition: "width 1s ease 0.5s" }}
              />
            </div>
          ))}
        </div>

        {/* Bottom quote */}
        <div
          className="mt-16 rounded-2xl p-8 text-center"
          style={{ background: "rgba(4,157,191,0.08)", border: "1px solid rgba(4,157,191,0.2)" }}
        >
          <p className="text-lg text-white font-semibold italic mb-3" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
            "Renewable energy isn't just about cutting electricity bills — it's about securing energy independence for every Nepali."
          </p>
          <p className="text-sm" style={{ color: "#049DBF" }}>— Er. Prashant Bajracharya, Managing Director, P.S. Trade and Suppliers</p>
        </div>
      </div>
    </section>
  );
}
