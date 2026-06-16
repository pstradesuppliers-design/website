import { useState, useMemo } from "react";
import { MapPin, Zap, ArrowRight, FolderKanban } from "lucide-react";
import { useNavigate } from "react-router";
import { useSiteData } from "../../context/SiteDataContext";
import type { ProjectStatus } from "../projects/projectsData";

const STATUS_STYLE: Record<ProjectStatus, { bg: string; color: string }> = {
  Completed: { bg: "#f0f7e7",   color: "#4a7c21" },
  Ongoing:   { bg: "#fef0e6",   color: "#c05c1a" },
  Planned:   { bg: "#e6f6fa",   color: "#036b82" },
};

const FILTERS = ["All", "Completed", "Ongoing"] as const;
type Filter = typeof FILTERS[number];

export function FeaturedProjects() {
  const navigate = useNavigate();
  const { projectsData } = useSiteData();
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const featured = useMemo(() => {
    const all = activeFilter === "All"
      ? projectsData
      : projectsData.filter((p) => p.status === activeFilter);
    return all.slice(0, 6);
  }, [projectsData, activeFilter]);

  return (
    <section id="projects" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
              style={{ background: "#fef0e6", color: "#F27127" }}
            >
              <FolderKanban size={12} /> Featured Projects
            </div>
            <h2 style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
              Real Results, Real{" "}
              <span style={{ color: "#F27127" }}>Impact</span>
            </h2>
          </div>
          <button
            onClick={() => navigate("/contact")}
            className="flex-shrink-0 flex items-center gap-2 text-sm font-bold"
            style={{ color: "#049DBF", fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            Start your project <ArrowRight size={15} />
          </button>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200"
              style={{
                background: activeFilter === f ? "#049DBF" : "#f3f4f6",
                color: activeFilter === f ? "#ffffff" : "#6b7280",
                fontFamily: "Plus Jakarta Sans, sans-serif",
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((p) => {
            const ss = STATUS_STYLE[p.status];
            return (
              <div
                key={p.id}
                className="group rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 bg-white cursor-pointer"
                onClick={() => navigate(`/projects/${p.id}`)}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={p.coverImage}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(13,13,13,0.6) 0%, transparent 50%)" }}
                  />
                  {/* Status badge */}
                  <div className="absolute top-3 left-3">
                    <span
                      className="text-xs font-bold px-2.5 py-1 rounded-full"
                      style={ss}
                    >
                      {p.status}
                    </span>
                  </div>
                  {/* Province tag */}
                  <div className="absolute top-3 right-3">
                    <span
                      className="text-xs font-bold px-2.5 py-1 rounded-full text-white"
                      style={{ background: "#049DBF" }}
                    >
                      {p.province}
                    </span>
                  </div>
                  {/* Capacity overlay */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full" style={{ background: "rgba(0,0,0,0.6)" }}>
                    <Zap size={11} style={{ color: "#F2E205" }} />
                    <span className="text-xs font-bold text-white">{p.capacity}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h4 className="mb-1 leading-snug line-clamp-2" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                    {p.title}
                  </h4>
                  <p className="text-sm text-gray-500 mb-3">{p.client}</p>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-3">
                    <MapPin size={12} style={{ color: "#049DBF" }} />
                    {p.location}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{ background: "#f3f4f6", color: "#6b7280" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-2">
                    {p.shortDescription}
                  </p>

                  <button
                    className="flex items-center gap-1.5 text-xs font-bold group-hover:gap-2.5 transition-all duration-300"
                    style={{ color: "#049DBF", fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    View case study <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* View all */}
        <div className="mt-10 text-center">
          <button
            onClick={() => navigate("/projects")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold border-2 transition-all hover:bg-gray-50"
            style={{ borderColor: "#e5e7eb", color: "#374151", fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            View All {projectsData.length}+ Projects <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
