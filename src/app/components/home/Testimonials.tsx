import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useSiteData } from "../../context/SiteDataContext";

export function Testimonials() {
  const { testimonialsData } = useSiteData();
  const [current, setCurrent] = useState(0);

  const total = testimonialsData.length;
  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const visible = [
    testimonialsData[current % total],
    testimonialsData[(current + 1) % total],
    testimonialsData[(current + 2) % total],
  ];

  if (total === 0) return null;

  return (
    <section className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
              style={{ background: "#fef0e6", color: "#F27127" }}
            >
              Client Testimonials
            </div>
            <h2 style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
              Trusted Across{" "}
              <span style={{ color: "#F27127" }}>Nepal's Seven Provinces</span>
            </h2>
          </div>
          {/* Nav arrows */}
          <div className="flex gap-3">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-xl border-2 flex items-center justify-center transition-all hover:border-gray-400 hover:bg-gray-50"
              style={{ borderColor: "#e5e7eb" }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} className="text-gray-500" />
            </button>
            <button
              onClick={next}
              className="w-11 h-11 rounded-xl flex items-center justify-center transition-all hover:opacity-90"
              style={{ background: "#049DBF" }}
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} className="text-white" />
            </button>
          </div>
        </div>

        {/* Cards  desktop: 3 visible, mobile: 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((t, i) => (
            <div
              key={t.id + i}
              className="rounded-2xl border p-6 flex flex-col transition-all duration-300"
              style={{
                borderColor: i === 0 ? "#049DBF" : "#e5e7eb",
                background: i === 0 ? "#e6f6fa" : "#ffffff",
                transform: i === 0 ? "scale(1.02)" : "scale(1)",
                boxShadow: i === 0 ? "0 8px 32px rgba(4,157,191,0.15)" : "none",
              }}
            >
              {/* Quote icon */}
              <div className="mb-4">
                <Quote size={24} style={{ color: i === 0 ? "#049DBF" : "#e5e7eb" }} />
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={14} fill="#F2E205" stroke="#F2E205" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-5">"{t.text}"</p>

              {/* Savings highlight */}
              <div
                className="rounded-xl px-4 py-3 mb-5 flex items-center gap-3"
                style={{ background: i === 0 ? "rgba(4,157,191,0.12)" : "#f9fafb" }}
              >
                <div>
                  <p className="text-lg font-extrabold" style={{ color: "#049DBF", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                    {t.savings}
                  </p>
                  <p className="text-xs text-gray-500">{t.savingsLabel}</p>
                </div>
                <div className="ml-auto text-xs font-semibold text-gray-400">{t.system}</div>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                  style={{ border: `2px solid ${i === 0 ? "#049DBF" : "transparent"}` }}
                />
                <div>
                  <p className="text-sm font-bold text-gray-800" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                    {t.name}
                  </p>
                  <p className="text-xs text-gray-500">{t.role} · {t.company}</p>
                </div>
                <span
                  className="ml-auto text-xs font-semibold px-2 py-0.5 rounded-full"
                  style={{ background: "#f0f7e7", color: "#4a7c21" }}
                >
                  {t.province} Province
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonialsData.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === current ? 24 : 8,
                height: 8,
                background: i === current ? "#049DBF" : "#e5e7eb",
              }}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Overall rating bar */}
        <div
          className="mt-12 rounded-2xl p-6 flex flex-wrap gap-6 items-center justify-between"
          style={{ background: "#f9fafb", border: "1px solid #e5e7eb" }}
        >
          <div className="flex items-center gap-4">
            <div>
              <p className="text-5xl font-extrabold" style={{ color: "#049DBF", fontFamily: "Plus Jakarta Sans, sans-serif" }}>4.9</p>
              <div className="flex gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#F2E205" stroke="#F2E205" />)}
              </div>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-800" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>Average Rating</p>
              <p className="text-xs text-gray-500">Based on 500+ verified installations</p>
            </div>
          </div>
          {/* Rating breakdown */}
          <div className="flex flex-col gap-1.5 flex-1 max-w-xs">
            {[["5 stars", 89], ["4 stars", 8], ["3 stars", 2], ["2 stars", 1]].map(([label, pct]) => (
              <div key={label as string} className="flex items-center gap-2 text-xs">
                <span className="text-gray-500 w-12">{label}</span>
                <div className="flex-1 h-1.5 rounded-full bg-gray-200">
                  <div className="h-full rounded-full" style={{ width: `${pct}%`, background: "#F2E205" }} />
                </div>
                <span className="text-gray-400 w-8 text-right">{pct}%</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-2xl font-extrabold" style={{ color: "#84BF49", fontFamily: "Plus Jakarta Sans, sans-serif" }}>500+</p>
            <p className="text-xs text-gray-500">Completed Projects</p>
          </div>
        </div>
      </div>
    </section>
  );
}
