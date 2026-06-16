import {
  LayoutDashboard, Users, FolderKanban, Zap, Wrench,
  HelpCircle, Mail, Settings, ExternalLink, LogOut,
} from "lucide-react";
import logoImg from "../../../imports/Screenshot_2026-06-12_at_19.38.22-removebg-preview.png";

export type AdminModule =
  | "overview" | "team" | "projects" | "solutions"
  | "services" | "faqs" | "leads" | "settings";

const NAV: { id: AdminModule; label: string; icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }> }[] = [
  { id: "overview",  label: "Overview",          icon: LayoutDashboard },
  { id: "team",      label: "Team Management",    icon: Users },
  { id: "projects",  label: "Projects",           icon: FolderKanban },
  { id: "solutions", label: "Solutions",          icon: Zap },
  { id: "services",  label: "Services",           icon: Wrench },
  { id: "faqs",      label: "FAQ Management",     icon: HelpCircle },
  { id: "leads",     label: "Contact Leads",      icon: Mail },
  { id: "settings",  label: "Website Settings",   icon: Settings },
];

interface AdminSidebarProps {
  active: AdminModule;
  onChange: (m: AdminModule) => void;
  onViewSite: () => void;
  onLogout: () => void;
  collapsed: boolean;
  onToggle: () => void;
}

export function AdminSidebar({ active, onChange, onViewSite, onLogout, collapsed }: AdminSidebarProps) {
  return (
    <aside
      className="flex flex-col h-full transition-all duration-300 overflow-hidden"
      style={{
        width: collapsed ? 64 : 240,
        background: "#0D0D0D",
        borderRight: "1px solid rgba(255,255,255,0.07)",
        flexShrink: 0,
      }}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 py-5" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <img src={logoImg} alt="P.S. Trade" className="w-8 h-8 object-contain flex-shrink-0" />
        {!collapsed && (
          <div className="leading-none overflow-hidden">
            <div className="text-xs font-extrabold text-white truncate" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
              P.S. Trade
            </div>
            <div className="text-[10px] mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>Admin Panel</div>
          </div>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 py-3 space-y-0.5 overflow-y-auto px-2">
        {NAV.map((item) => {
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onChange(item.id)}
              title={collapsed ? item.label : undefined}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-150 text-left"
              style={{
                background: isActive ? "rgba(4,157,191,0.18)" : "transparent",
                color: isActive ? "var(--brand-primary)" : "rgba(255,255,255,0.55)",
                fontFamily: "Plus Jakarta Sans, sans-serif",
              }}
            >
              <item.icon size={17} style={{ flexShrink: 0 }} />
              {!collapsed && <span className="truncate">{item.label}</span>}
            </button>
          );
        })}
      </nav>

      {/* Bottom actions */}
      <div className="px-2 py-3 space-y-1" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <button
          onClick={onViewSite}
          title={collapsed ? "View Website" : undefined}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all hover:bg-white/5"
          style={{ color: "rgba(255,255,255,0.5)", fontFamily: "Plus Jakarta Sans, sans-serif" }}
        >
          <ExternalLink size={16} style={{ flexShrink: 0 }} />
          {!collapsed && "View Website"}
        </button>
        <button
          onClick={onLogout}
          title={collapsed ? "Logout" : undefined}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all hover:bg-red-500/10"
          style={{ color: "#f87171", fontFamily: "Plus Jakarta Sans, sans-serif" }}
        >
          <LogOut size={16} style={{ flexShrink: 0 }} />
          {!collapsed && "Logout"}
        </button>
      </div>
    </aside>
  );
}
