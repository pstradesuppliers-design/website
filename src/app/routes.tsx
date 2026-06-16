import {
  createBrowserRouter,
  useParams,
  useNavigate,
  Navigate,
} from "react-router";
import { RootLayout } from "./components/layout/RootLayout";
import { AdminLayout } from "./components/layout/AdminLayout";

// Pages
import { Hero } from "./components/home/Hero";
import { CompanyIntro } from "./components/home/CompanyIntro";
import { WhyChooseUs } from "./components/home/WhyChooseUs";
import { Solutions } from "./components/home/Solutions";
import { Services } from "./components/home/Services";
import { FeaturedProjects } from "./components/home/FeaturedProjects";
import { CoverageMap } from "./components/home/CoverageMap";
import { Statistics } from "./components/home/Statistics";
import { Testimonials } from "./components/home/Testimonials";
import { ContactCTA } from "./components/home/ContactCTA";

import { AboutUs } from "./components/about/AboutUs";

import { SolutionsLanding } from "./components/solutions/SolutionsLanding";
import { SolutionDetail } from "./components/solutions/SolutionDetail";

import { ServicesLanding } from "./components/services/ServicesLanding";
import { ServiceDetail } from "./components/services/ServiceDetail";

import { TeamGrid } from "./components/team/TeamGrid";
import { TeamProfile } from "./components/team/TeamProfile";

import { ProjectsLanding } from "./components/projects/ProjectsLanding";
import { ProjectDetail } from "./components/projects/ProjectDetail";

import { ContactPage } from "./components/contact/ContactPage";
import { AdminApp } from "./components/admin/AdminApp";

import { useSiteData } from "./context/SiteDataContext";

// ── Home ─-────────────────────────────────────────────────────────────
function HomePage() {
  return (
    <>
      <Hero />
      <CompanyIntro />
      <WhyChooseUs />
      <Solutions />
      <Services />
      <FeaturedProjects />
      <CoverageMap />
      <Statistics />
      {/* <Testimonials /> */}
      <ContactCTA />
    </>
  );
}

// ── Solutions ─────────────────────────────────────────────────────────
function SolutionsPage() {
  const navigate = useNavigate();
  return (
    <SolutionsLanding onSelectSolution={(id) => navigate(`/solutions/${id}`)} />
  );
}

function SolutionDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { solutionsData } = useSiteData();
  const navigate = useNavigate();
  const solution = solutionsData.find((s) => s.id === id);
  if (!solution) return <Navigate to="/solutions" replace />;
  return (
    <SolutionDetail
      solution={solution}
      onBack={() => navigate("/solutions")}
      onNavigateSolution={(sid) => navigate(`/solutions/${sid}`)}
      onContact={() => navigate("/contact")}
    />
  );
}

// ── Services ──────────────────────────────────────────────────────────
function ServicesPage() {
  const navigate = useNavigate();
  return (
    <ServicesLanding onSelectService={(id) => navigate(`/services/${id}`)} />
  );
}

function ServiceDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { servicesData } = useSiteData();
  const navigate = useNavigate();
  const service = servicesData.find((s) => s.id === id);
  if (!service) return <Navigate to="/services" replace />;
  return (
    <ServiceDetail
      service={service}
      onBack={() => navigate("/services")}
      onContact={() => navigate("/contact")}
    />
  );
}

// ── Team ──────────────────────────────────────────────────────────────
function TeamPage() {
  const { teamData } = useSiteData();
  const navigate = useNavigate();
  return (
    <TeamGrid
      members={teamData}
      onSelectMember={(id) => navigate(`/team/${id}`)}
    />
  );
}

function TeamProfilePage() {
  const { id } = useParams<{ id: string }>();
  const { teamData, updateTeamMember } = useSiteData();
  const navigate = useNavigate();
  const member = teamData.find((m) => m.id === id);
  if (!member) return <Navigate to="/team" replace />;
  return (
    <TeamProfile
      member={member}
      onBack={() => navigate("/team")}
      onUpdate={updateTeamMember}
    />
  );
}

// ── Projects ──────────────────────────────────────────────────────────
function ProjectsPage() {
  const navigate = useNavigate();
  return (
    <ProjectsLanding onSelectProject={(id) => navigate(`/projects/${id}`)} />
  );
}

function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { projectsData } = useSiteData();
  const navigate = useNavigate();
  const project = projectsData.find((p) => p.id === id);
  if (!project) return <Navigate to="/projects" replace />;
  return (
    <ProjectDetail
      project={project}
      onBack={() => navigate("/projects")}
      onSelectProject={(pid) => navigate(`/projects/${pid}`)}
      onContact={() => navigate("/contact")}
    />
  );
}

// ── Contact ───────────────────────────────────────────────────────────
function ContactRoute() {
  const { contactSubmissions, addContactSubmission } = useSiteData();
  return (
    <ContactPage
      submissions={contactSubmissions}
      onSubmit={addContactSubmission}
    />
  );
}

// ── Admin ─────────────────────────────────────────────────────────────
function AdminRoute() {
  const navigate = useNavigate();
  return <AdminApp onExit={() => navigate("/")} />;
}

// ── 404 ───────────────────────────────────────────────────────────────
function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <p
        className="text-7xl font-extrabold mb-4"
        style={{
          color: "var(--brand-primary)",
          fontFamily: "Plus Jakarta Sans, sans-serif",
        }}
      >
        404
      </p>
      <h2 className="mb-3">Page Not Found</h2>
      <p className="mb-8" style={{ color: "var(--muted-foreground)" }}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 rounded-xl font-bold text-white"
        style={{
          background: "var(--brand-primary)",
          fontFamily: "Plus Jakarta Sans, sans-serif",
        }}
      >
        Back to Home
      </button>
    </div>
  );
}

// ── Router ────────────────────────────────────────────────────────────
export const router = createBrowserRouter([
  {
    // Admin — full-screen layout (no site Navbar/Footer)
    path: "/admin",
    Component: AdminLayout,
    children: [{ index: true, Component: AdminRoute }],
  },
  {
    // Public site — shared Navbar + Footer layout
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutUs },
      { path: "solutions", Component: SolutionsPage },
      { path: "solutions/:id", Component: SolutionDetailPage },
      { path: "services", Component: ServicesPage },
      { path: "services/:id", Component: ServiceDetailPage },
      { path: "team", Component: TeamPage },
      { path: "team/:id", Component: TeamProfilePage },
      { path: "projects", Component: ProjectsPage },
      { path: "projects/:id", Component: ProjectDetailPage },
      { path: "contact", Component: ContactRoute },
      { path: "*", Component: NotFound },
    ],
  },
]);
