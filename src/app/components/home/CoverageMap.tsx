import { MapPin, CheckCircle } from "lucide-react";
import mapImg from "../../../imports/ChatGPT_Image_Jun_13__2026__07_58_51_PM.png";

const provinces = [
  {
    name: "Koshi Province",
    capital: "Biratnagar",
    projects: 4,
    color: "#049DBF",
    highlights: ["Biratnagar 500 kW industrial", "Sunsari agri-pump programme", "Telecom tower solar"],
  },
  {
    name: "Madhesh Province",
    capital: "Janakpur",
    projects: 1,
    color: "#84BF49",
    highlights: ["Janakpur residential estate (40 homes)"],
  },
  {
    name: "Bagmati Province",
    capital: "Kathmandu",
    projects: 4,
    color: "#F27127",
    highlights: ["Lalitpur commercial portfolio 1.2 MW", "Chitwan irrigation cooperative", "IT critical power backup"],
  },
  {
    name: "Gandaki Province",
    capital: "Pokhara",
    projects: 2,
    color: "#049DBF",
    highlights: ["Pokhara hotel solar thermal", "Mustang high-altitude lodge"],
  },
  {
    name: "Lumbini Province",
    capital: "Butwal",
    projects: 1,
    color: "#84BF49",
    highlights: ["Lumbini Industrial Park 2.5 MW solar plant"],
  },
  {
    name: "Karnali Province",
    capital: "Birendranagar",
    projects: 2,
    color: "#F27127",
    highlights: ["Humla community electrification", "Telecom tower off-grid solar"],
  },
  {
    name: "Sudurpashchim Province",
    capital: "Dhangadhi",
    projects: 1,
    color: "#049DBF",
    highlights: ["Dhangadhi hospital hybrid solar + backup"],
  },
];

const totalProjects = provinces.reduce((s, p) => s + p.projects, 0);

export function CoverageMap() {
  return (
    <section className="py-20 sm:py-28" style={{ background: "#f9fafb" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
            style={{ background: "#f0f7e7", color: "#84BF49" }}
          >
            <MapPin size={13} /> Coverage Area
          </div>
          <h2 style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
            Operating Across{" "}
            <span style={{ color: "#84BF49" }}>All 7 Provinces</span>
          </h2>
          <p className="text-gray-500 mt-4 leading-relaxed">
            With field teams and project experience in every province of Nepal  from the Terai plains to the high Himalaya  we can mobilise on-site anywhere in the country.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Map image */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#84BF49" }} />
              <span className="text-xs font-semibold text-gray-500">
                Active presence  {totalProjects}+ completed installations
              </span>
            </div>
            <img
              src={mapImg}
              alt="Nepal province coverage map"
              className="w-full rounded-2xl object-contain"
              style={{ maxHeight: 420 }}
            />
            {/* Province colour legend */}
            <div className="flex flex-wrap gap-3 mt-4 justify-center">
              {[
                { color: "#049DBF", label: "Primary operations" },
                { color: "#84BF49", label: "Active projects" },
                { color: "#F27127", label: "Expanding reach" },
              ].map((l) => (
                <div key={l.label} className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: l.color }} />
                  <span className="text-xs text-gray-500">{l.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Province breakdown */}
          <div className="space-y-3">
            {provinces.map((p) => (
              <div
                key={p.name}
                className="bg-white rounded-2xl p-4 border border-gray-100 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: p.color }} />
                    <span className="text-sm font-bold text-gray-800" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                      {p.name}
                    </span>
                    <span className="text-xs text-gray-400">· {p.capital}</span>
                  </div>
                  <span
                    className="text-xs font-extrabold px-2 py-0.5 rounded-full"
                    style={{
                      color: p.color,
                      background: p.color + "18",
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                    }}
                  >
                    {p.projects} project{p.projects !== 1 ? "s" : ""}
                  </span>
                </div>
                {/* Progress bar */}
                <div className="h-1 rounded-full bg-gray-100 mb-2">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${(p.projects / 4) * 100}%`, background: p.color }}
                  />
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {p.highlights.map((h) => (
                    <span key={h} className="text-[10px] px-2 py-0.5 rounded-full bg-gray-50 text-gray-500 border border-gray-100">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Footer note */}
            <div
              className="rounded-2xl p-4 flex items-start gap-3"
              style={{ background: "#e6f6fa", border: "1px solid rgba(4,157,191,0.3)" }}
            >
              <CheckCircle size={18} className="flex-shrink-0 mt-0.5" style={{ color: "#049DBF" }} />
              <div>
                <p className="text-sm font-bold text-gray-800 mb-0.5" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                  Nationwide reach  all 7 provinces
                </p>
                <p className="text-xs text-gray-500">
                  From Kathmandu Valley rooftops to remote Himalayan villages  our engineers and technicians operate across every province of Nepal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
