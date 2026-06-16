import { Sun, Wind, Battery, Zap, ArrowRight, MapPin, Calendar, CheckCircle, Star } from "lucide-react";
import { Button } from "./DSButtons";

export function DSCards() {
  return (
    <div className="space-y-12">
      {/* Solution Cards */}
      <div>
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-4">Solution Cards</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Sun, label: "Solar Energy", desc: "Grid-tied, off-grid and hybrid solar installations for homes and businesses.", color: "#F2E205", bg: "#fefce8" },
            { icon: Wind, label: "Wind Energy", desc: "Small and large-scale wind turbine systems for high-wind-potential sites.", color: "#049DBF", bg: "#e6f6fa" },
            { icon: Battery, label: "Energy Storage", desc: "Lithium-ion and flow battery systems for reliable backup and peak shaving.", color: "#84BF49", bg: "#f0f7e7" },
            { icon: Zap, label: "Hybrid Systems", desc: "Combined solar-wind-battery solutions optimised for maximum uptime.", color: "#F27127", bg: "#fef0e6" },
          ].map(({ icon: Icon, label, desc, color, bg }) => (
            <div
              key={label}
              className="group rounded-2xl border border-border bg-card p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: bg }}
              >
                <Icon size={22} style={{ color }} />
              </div>
              <h4 className="mb-2">{label}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{desc}</p>
              <div className="flex items-center gap-1 text-sm font-semibold transition-colors group-hover:gap-2" style={{ color: "#049DBF" }}>
                Learn more <ArrowRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Card */}
      <div>
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-4">Project Cards</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              title: "Nairobi Commercial Solar Farm",
              client: "Westgate Holdings Ltd",
              location: "Nairobi, Kenya",
              date: "March 2024",
              capacity: "850 kW",
              status: "Completed",
              tags: ["Solar", "Commercial"],
              img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=340&fit=crop&auto=format",
            },
            {
              title: "Mombasa Port Hybrid System",
              client: "Kenya Ports Authority",
              location: "Mombasa, Kenya",
              date: "January 2024",
              capacity: "1.2 MW",
              status: "Completed",
              tags: ["Hybrid", "Industrial"],
              img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&h=340&fit=crop&auto=format",
            },
            {
              title: "Kisumu Rural Electrification",
              client: "Rural Electrification Authority",
              location: "Kisumu, Kenya",
              date: "Ongoing",
              capacity: "320 kW",
              status: "Ongoing",
              tags: ["Solar", "Storage", "Off-grid"],
              img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&h=340&fit=crop&auto=format",
            },
          ].map((p) => (
            <div key={p.title} className="group rounded-2xl border border-border bg-card overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-44 bg-muted overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-semibold px-2 py-0.5 rounded-full"
                      style={{ background: "#049DBF", color: "white" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="absolute top-3 right-3">
                  <span
                    className="text-xs font-semibold px-2 py-0.5 rounded-full"
                    style={{
                      background: p.status === "Completed" ? "#84BF49" : "#F27127",
                      color: "white",
                    }}
                  >
                    {p.status}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h4 className="mb-1 leading-snug">{p.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">{p.client}</p>
                <div className="flex flex-col gap-1.5 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1.5">
                    <MapPin size={12} style={{ color: "#049DBF" }} /> {p.location}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar size={12} style={{ color: "#049DBF" }} /> {p.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Zap size={12} style={{ color: "#F27127" }} />
                    <span className="font-semibold" style={{ color: "#F27127" }}>
                      {p.capacity}
                    </span>
                  </div>
                </div>
                <Button variant="outline" size="sm" iconRight={<ArrowRight size={14} />}>
                  View Project
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stat Cards */}
      <div>
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-4">Stat / KPI Cards</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Projects Completed", value: "312+", change: "+24 this year", color: "#049DBF", bg: "#e6f6fa" },
            { label: "MW Installed", value: "42.8", change: "↑ 18% vs last year", color: "#84BF49", bg: "#f0f7e7" },
            { label: "Clients Served", value: "1,400+", change: "Across East Africa", color: "#F27127", bg: "#fef0e6" },
            { label: "CO₂ Offset (t/yr)", value: "28,500", change: "↑ 31% vs last year", color: "#F2E205", bg: "#fefce8", dark: true },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <div
                className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center"
                style={{ background: s.bg }}
              >
                <div className="w-3 h-3 rounded-full" style={{ background: s.color }} />
              </div>
              <p className="text-3xl font-extrabold mb-0.5" style={{ fontFamily: "Plus Jakarta Sans, sans-serif", color: s.color }}>
                {s.value}
              </p>
              <p className="text-sm font-medium text-foreground mb-1">{s.label}</p>
              <p className="text-xs text-muted-foreground">{s.change}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Card */}
      <div>
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-4">Team Cards</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { name: "Dr. Amara Osei", role: "Chief Executive Officer", dept: "Leadership", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&auto=format", rating: 5 },
            { name: "Fatima Al-Rashid", role: "Head of Engineering", dept: "Technical", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop&auto=format", rating: 5 },
            { name: "James Kimani", role: "Project Manager", dept: "Operations", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&auto=format", rating: 5 },
          ].map((m) => (
            <div key={m.name} className="rounded-2xl border border-border bg-card p-5 text-center hover:shadow-lg transition-all duration-300">
              <img
                src={m.img}
                alt={m.name}
                className="w-20 h-20 rounded-full object-cover mx-auto mb-3 ring-2"
                style={{ ringColor: "#049DBF20" }}
              />
              <div className="inline-block px-2 py-0.5 rounded-full text-xs font-medium mb-2" style={{ background: "#e6f6fa", color: "#049DBF" }}>
                {m.dept}
              </div>
              <h4 className="mb-0.5">{m.name}</h4>
              <p className="text-sm text-muted-foreground mb-3">{m.role}</p>
              <div className="flex justify-center gap-0.5">
                {[...Array(m.rating)].map((_, i) => (
                  <Star key={i} size={12} fill="#F2E205" stroke="#F2E205" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial Card */}
      <div>
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-4">Testimonial Card</p>
        <div className="max-w-2xl">
          <div className="rounded-2xl border border-border bg-card p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full" style={{ background: "#049DBF" }} />
            <div className="text-4xl leading-none mb-4" style={{ color: "#049DBF", fontFamily: "Georgia, serif" }}>"</div>
            <p className="text-base text-foreground leading-relaxed mb-5">
              P.S. Trade & Suppliers transformed our facility's energy profile entirely. Our electricity bills dropped by 78% in the first six months and the installation team was exceptional — professional, on schedule, and meticulous.
            </p>
            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&auto=format"
                alt="Client"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold">Sarah Wanjiku</p>
                <p className="text-xs text-muted-foreground">Operations Director, Nakumatt Industries</p>
              </div>
              <div className="ml-auto flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#F2E205" stroke="#F2E205" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature / Benefit Card */}
      <div>
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-4">Feature / Benefit Cards</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: "Certified Installations", desc: "Every system is installed by ERC-licensed engineers with full documentation and warranty.", color: "#049DBF" },
            { title: "24/7 Monitoring", desc: "Remote SCADA and IoT monitoring ensures your system performs at peak efficiency always.", color: "#84BF49" },
            { title: "10-Year Guarantee", desc: "We back every installation with a decade-long performance guarantee and service contract.", color: "#F27127" },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl border border-border bg-card p-5 flex gap-4">
              <div className="flex-shrink-0 mt-0.5">
                <CheckCircle size={20} style={{ color: f.color }} />
              </div>
              <div>
                <h4 className="mb-1.5">{f.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
