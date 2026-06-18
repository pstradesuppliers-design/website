import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AdminLogin } from "./AdminLogin";
import { AdminSidebar } from "./AdminSidebar";
import type { AdminModule } from "./AdminSidebar";
import { Overview } from "./modules/Overview";
import { TeamManagement } from "./modules/TeamManagement";
import { ProjectManagement } from "./modules/ProjectManagement";
import { SolutionManagement } from "./modules/SolutionManagement";
import { ServiceManagement } from "./modules/ServiceManagement";
import { FAQManagement } from "./modules/FAQManagement";
import { ContactLeads } from "./modules/ContactLeads";
import { WebsiteSettings } from "./modules/WebsiteSettings";

interface AdminAppProps {
  onExit: () => void;
}

export function AdminApp({ onExit }: AdminAppProps) {
  const [authed, setAuthed] = useState(false);
  const [module, setModule] = useState<AdminModule>("overview");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  if (!authed) {
    return <AdminLogin onLogin={() => setAuthed(true)} onBackToSite={onExit} />;
  }

  const MODULE_TITLES: Record<AdminModule, string> = {
    overview: "Dashboard Overview",
    team: "Team Management",
    projects: "Project Management",
    solutions: "Solution Management",
    services: "Service Management",
    faqs: "FAQ Management",
    leads: "Contact Leads",
    settings: "Website Settings",
  };

  const renderModule = () => {
    switch (module) {
      case "overview":  return <Overview />;
      case "team":      return <TeamManagement />;
      case "projects":  return <ProjectManagement />;
      case "solutions": return <SolutionManagement />;
      case "services":  return <ServiceManagement />;
      case "faqs":      return <FAQManagement />;
      case "leads":     return <ContactLeads />;
      case "settings":  return <WebsiteSettings />;
    }
  };

  const handleModuleChange = (m: AdminModule) => {
    setModule(m);
    setMobileSidebarOpen(false);
  };

  return (
    <div className="flex h-screen overflow-hidden" style={{ background: "var(--background)" }}>
      {/* Mobile sidebar overlay */}
      {mobileSidebarOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          style={{ background: "rgba(0,0,0,0.5)" }}
          onClick={() => setMobileSidebarOpen(false)}
        />
      )}

      {/* Sidebar  desktop always visible, mobile as overlay */}
      <div
        className={`fixed lg:relative z-50 h-full transition-transform duration-300 lg:translate-x-0 ${mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <AdminSidebar
          active={module}
          onChange={handleModuleChange}
          onViewSite={onExit}
          onLogout={() => setAuthed(false)}
          collapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed((c) => !c)}
        />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top bar */}
        <header
          className="flex items-center gap-4 px-4 sm:px-6 h-14 border-b flex-shrink-0"
          style={{ borderColor: "var(--border)", background: "var(--card)" }}
        >
          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-1.5 rounded-lg"
            onClick={() => setMobileSidebarOpen((o) => !o)}
          >
            {mobileSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Desktop collapse toggle */}
          <button
            className="hidden lg:block p-1.5 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setSidebarCollapsed((c) => !c)}
          >
            <Menu size={18} style={{ color: "var(--muted-foreground)" }} />
          </button>

          <h3
            className="font-bold text-sm"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            {MODULE_TITLES[module]}
          </h3>

          <div className="ml-auto flex items-center gap-2">
            <span
              className="hidden sm:inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full font-semibold"
              style={{ background: "var(--brand-green-light)", color: "var(--brand-green-dark)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--brand-green)" }} />
              Live
            </span>
            <button
              onClick={onExit}
              className="text-xs px-3 py-1.5 rounded-lg font-semibold transition-all hover:opacity-80"
              style={{ background: "var(--muted)", color: "var(--muted-foreground)", fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              View Site ↗
            </button>
          </div>
        </header>

        {/* Module content */}
        <main className="flex-1 overflow-y-auto">
          {renderModule()}
        </main>
      </div>
    </div>
  );
}
