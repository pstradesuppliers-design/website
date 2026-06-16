import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";
import { Sun, Zap, TrendingUp, DollarSign, AlertTriangle, CheckCircle, Clock, LayoutDashboard, Settings, Users, FolderOpen, MessageSquare, ChevronRight, BarChart2 } from "lucide-react";

const energyData = [
  { month: "Jan", solar: 280, wind: 80, storage: 40 },
  { month: "Feb", solar: 320, wind: 95, storage: 55 },
  { month: "Mar", solar: 380, wind: 110, storage: 60 },
  { month: "Apr", solar: 420, wind: 130, storage: 75 },
  { month: "May", solar: 460, wind: 120, storage: 80 },
  { month: "Jun", solar: 500, wind: 140, storage: 90 },
  { month: "Jul", solar: 480, wind: 135, storage: 85 },
  { month: "Aug", solar: 490, wind: 145, storage: 92 },
];

const projectStatus = [
  { name: "Completed", value: 267, color: "#84BF49" },
  { name: "Ongoing", value: 32, color: "#049DBF" },
  { name: "Upcoming", value: 13, color: "#F27127" },
];

const recentProjects = [
  { name: "Nairobi Solar Farm", client: "Westgate Holdings", capacity: "850 kW", status: "Completed", statusColor: "#84BF49" },
  { name: "Mombasa Port Hybrid", client: "Kenya Ports Authority", capacity: "1.2 MW", status: "Ongoing", statusColor: "#049DBF" },
  { name: "Kisumu Rural Grid", client: "REA Kenya", capacity: "320 kW", status: "Ongoing", statusColor: "#049DBF" },
  { name: "Eldoret Hospital Solar", client: "MOH Kenya", capacity: "180 kW", status: "Upcoming", statusColor: "#F27127" },
];

const alerts = [
  { msg: "Inverter fault — Westgate Site 3", type: "error", time: "12 min ago" },
  { msg: "Battery bank at 85% capacity — Kisumu", type: "warning", time: "1 hr ago" },
  { msg: "System check passed — Mombasa Port", type: "success", time: "3 hr ago" },
  { msg: "Maintenance due in 7 days — Eldoret", type: "warning", time: "Today" },
];

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Sun, label: "Solutions" },
  { icon: Zap, label: "Services" },
  { icon: FolderOpen, label: "Projects" },
  { icon: Users, label: "Team" },
  { icon: MessageSquare, label: "Contacts", badge: 4 },
  { icon: BarChart2, label: "Reports" },
  { icon: Settings, label: "Settings" },
];

function StatCard({ icon: Icon, label, value, change, color, bg }: { icon: any; label: string; value: string; change: string; color: string; bg: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 flex items-start gap-4">
      <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: bg }}>
        <Icon size={20} style={{ color }} />
      </div>
      <div className="flex-1">
        <p className="text-xs text-muted-foreground mb-0.5">{label}</p>
        <p className="text-2xl font-extrabold text-foreground" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{value}</p>
        <p className="text-xs font-medium mt-0.5" style={{ color }}>{change}</p>
      </div>
    </div>
  );
}

export function DSDashboard() {
  return (
    <div className="space-y-8">
      <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Admin Dashboard Layout</p>

      {/* Dashboard shell */}
      <div className="rounded-2xl border border-border overflow-hidden flex" style={{ height: 620 }}>
        {/* Sidebar */}
        <aside className="w-56 flex-shrink-0 flex flex-col" style={{ background: "#0D0D0D" }}>
          {/* Logo */}
          <div className="px-4 py-4 border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "#049DBF" }}>
                <Sun size={16} className="text-white" />
              </div>
              <div>
                <p className="text-xs font-bold text-white leading-none" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>P.S. Trade</p>
                <p className="text-[9px]" style={{ color: "rgba(255,255,255,0.4)" }}>Admin</p>
              </div>
            </div>
          </div>

          {/* Nav items */}
          <nav className="flex-1 py-3 px-2 space-y-0.5 overflow-y-auto">
            {sidebarItems.map((item) => (
              <button
                key={item.label}
                className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium transition-all"
                style={{
                  background: item.active ? "rgba(4,157,191,0.15)" : "transparent",
                  color: item.active ? "#049DBF" : "rgba(255,255,255,0.55)",
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                }}
              >
                <item.icon size={16} />
                <span className="flex-1 text-left">{item.label}</span>
                {item.badge && (
                  <span className="text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold" style={{ background: "#F27127", color: "white" }}>
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </nav>

          {/* User */}
          <div className="px-3 py-3 border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
            <div className="flex items-center gap-2">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=40&h=40&fit=crop&auto=format" alt="" className="w-7 h-7 rounded-full object-cover" />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-white truncate" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>Dr. Amara Osei</p>
                <p className="text-[9px]" style={{ color: "rgba(255,255,255,0.4)" }}>Super Admin</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1 flex flex-col overflow-hidden bg-muted/20">
          {/* Topbar */}
          <div className="bg-white border-b border-border px-5 h-12 flex items-center justify-between flex-shrink-0">
            <div>
              <p className="text-sm font-bold text-foreground" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>Dashboard</p>
              <p className="text-xs text-muted-foreground">Good morning, Dr. Osei — Friday, 12 Jun 2026</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <AlertTriangle size={16} style={{ color: "#F27127" }} />
                <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full text-[8px] flex items-center justify-center font-bold" style={{ background: "#F27127", color: "white" }}>2</span>
              </div>
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=40&h=40&fit=crop&auto=format" alt="" className="w-7 h-7 rounded-full object-cover ml-2" />
            </div>
          </div>

          {/* Dashboard body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {/* KPI cards */}
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-3">
              <StatCard icon={Sun} label="Total Capacity (MW)" value="42.8" change="↑ 18% this year" color="#049DBF" bg="#e6f6fa" />
              <StatCard icon={Zap} label="Active Projects" value="32" change="↑ 4 new this month" color="#84BF49" bg="#f0f7e7" />
              <StatCard icon={TrendingUp} label="CO₂ Offset (t/yr)" value="28.5K" change="↑ 31% vs last year" color="#F27127" bg="#fef0e6" />
              <StatCard icon={DollarSign} label="Revenue (KES M)" value="124.3" change="↑ 22% vs last year" color="#c2b504" bg="#fefce8" />
            </div>

            {/* Charts row */}
            <div className="grid grid-cols-3 gap-3">
              {/* Area chart */}
              <div className="col-span-2 bg-white rounded-xl border border-border p-4">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-semibold text-foreground" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>Energy Generation (MWh)</p>
                  <div className="flex gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full inline-block" style={{ background: "#049DBF" }} />Solar</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full inline-block" style={{ background: "#84BF49" }} />Wind</span>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={120}>
                  <AreaChart data={energyData} margin={{ top: 4, right: 4, bottom: 0, left: -20 }}>
                    <defs>
                      <linearGradient id="solar" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#049DBF" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#049DBF" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="wind" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#84BF49" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#84BF49" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="month" tick={{ fontSize: 10, fill: "#6b7280" }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 10, fill: "#6b7280" }} axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #e5e7eb" }} />
                    <Area type="monotone" dataKey="solar" stroke="#049DBF" strokeWidth={2} fill="url(#solar)" />
                    <Area type="monotone" dataKey="wind" stroke="#84BF49" strokeWidth={2} fill="url(#wind)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Pie chart */}
              <div className="bg-white rounded-xl border border-border p-4">
                <p className="text-sm font-semibold text-foreground mb-3" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>Projects by Status</p>
                <ResponsiveContainer width="100%" height={100}>
                  <PieChart>
                    <Pie data={projectStatus} cx="50%" cy="50%" innerRadius={30} outerRadius={46} dataKey="value" paddingAngle={3}>
                      {projectStatus.map((entry, i) => (
                        <Cell key={`cell-${i}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ fontSize: 11, borderRadius: 8 }} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="space-y-1 mt-2">
                  {projectStatus.map((s) => (
                    <div key={s.name} className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full" style={{ background: s.color }} />
                        <span className="text-muted-foreground">{s.name}</span>
                      </div>
                      <span className="font-semibold" style={{ color: s.color }}>{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent projects + Alerts */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-xl border border-border p-4">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-semibold" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>Recent Projects</p>
                  <button className="text-xs text-[#049DBF] font-semibold flex items-center gap-0.5 hover:gap-1 transition-all">
                    All <ChevronRight size={12} />
                  </button>
                </div>
                <div className="space-y-2">
                  {recentProjects.map((p) => (
                    <div key={p.name} className="flex items-center justify-between py-1.5 border-b border-border/50 last:border-0">
                      <div>
                        <p className="text-xs font-semibold text-foreground">{p.name}</p>
                        <p className="text-[10px] text-muted-foreground">{p.client} · {p.capacity}</p>
                      </div>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ background: p.statusColor + "20", color: p.statusColor }}>
                        {p.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl border border-border p-4">
                <p className="text-sm font-semibold mb-3" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>System Alerts</p>
                <div className="space-y-2">
                  {alerts.map((a, i) => (
                    <div key={i} className="flex items-start gap-2.5 py-1.5 border-b border-border/50 last:border-0">
                      {a.type === "error" && <AlertTriangle size={14} className="mt-0.5 flex-shrink-0" style={{ color: "#ef4444" }} />}
                      {a.type === "warning" && <AlertTriangle size={14} className="mt-0.5 flex-shrink-0" style={{ color: "#F27127" }} />}
                      {a.type === "success" && <CheckCircle size={14} className="mt-0.5 flex-shrink-0" style={{ color: "#84BF49" }} />}
                      <div className="flex-1">
                        <p className="text-xs text-foreground">{a.msg}</p>
                      </div>
                      <p className="text-[10px] text-muted-foreground whitespace-nowrap flex items-center gap-0.5">
                        <Clock size={9} /> {a.time}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
