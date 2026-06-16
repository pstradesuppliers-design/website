import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { initialTeamData } from "../components/team/teamData";
import type { TeamMember } from "../components/team/teamData";
import { projects as initialProjects } from "../components/projects/projectsData";
import type { Project } from "../components/projects/projectsData";
import { services as initialServices } from "../components/services/servicesData";
import type { ServiceData } from "../components/services/servicesData";
import { solutions as initialSolutions } from "../components/solutions/solutionsData";
import type { Solution } from "../components/solutions/solutionsData";
import type { Submission } from "../components/contact/ContactPage";
import { initialTestimonialsData } from "../components/testimonials/testimonialsData";
import type { Testimonial } from "../components/testimonials/testimonialsData";

// ── Site Settings ─────────────────────────────────────────────────────
export interface SiteSettings {
  siteName: string;
  tagline: string;
  phone1: string;
  phone2: string;
  email1: string;
  email2: string;
  whatsapp: string;
  address: string;
  mapEmbed: string;
  facebookUrl: string;
  linkedinUrl: string;
  twitterUrl: string;
  instagramUrl: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  seoImage: string;
}

const defaultSettings: SiteSettings = {
  siteName: "P.S. Trade and Suppliers",
  tagline: "Solar EPC Company in Nepal",
  phone1: "+977-1-5249406",
  phone2: "+977-9851183589",
  email1: "pstradesuppliers9@gmail.com",
  email2: "pstradesuppliers9@gmail.com",
  whatsapp: "+9779764569056",
  address: "Sano Bharyang-2, Kathmandu, Bagmati Province, Nepal",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.903941126385!2d85.2881548!3d27.720252000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19000116f271%3A0x266d776a7d1885b0!2sP.%20S.%20Trade%20and%20Suppliers%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1781361177807!5m2!1sen!2snp",
  facebookUrl: "https://facebook.com/pstrade",
  linkedinUrl: "https://linkedin.com/company/pstrade",
  twitterUrl: "https://twitter.com/pstrade",
  instagramUrl: "https://instagram.com/pstrade",
  seoTitle: "Solar EPC Company in Nepal | P.S. Trade and Suppliers",
  seoDescription:
    "P.S. Trade and Suppliers is a Kathmandu-based solar EPC company delivering on-grid, off-grid, solar pumping and inverter backup systems across Nepal.",
  seoKeywords: "solar company in Nepal, solar EPC company Nepal, renewable energy company Kathmandu, on-grid solar system Nepal, off-grid solar Nepal, solar water pumping system Nepal, inverter backup system Nepal, solar panel installation Kathmandu, AEPC registered solar company",
  seoImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=630&fit=crop",
};

// ── Context shape ─────────────────────────────────────────────────────
interface SiteDataCtx {
  // Data
  teamData: TeamMember[];
  projectsData: Project[];
  servicesData: ServiceData[];
  solutionsData: Solution[];
  contactSubmissions: Submission[];
  siteSettings: SiteSettings;
  testimonialsData: Testimonial[];

  // Team
  setTeamData: React.Dispatch<React.SetStateAction<TeamMember[]>>;
  addTeamMember: (m: TeamMember) => void;
  updateTeamMember: (m: TeamMember) => void;
  deleteTeamMember: (id: string) => void;

  // Projects
  setProjectsData: React.Dispatch<React.SetStateAction<Project[]>>;
  addProject: (p: Project) => void;
  updateProject: (p: Project) => void;
  deleteProject: (id: string) => void;

  // Services
  setServicesData: React.Dispatch<React.SetStateAction<ServiceData[]>>;
  updateService: (s: ServiceData) => void;
  addService: (s: ServiceData) => void;
  deleteService: (id: string) => void;

  // Solutions
  setSolutionsData: React.Dispatch<React.SetStateAction<Solution[]>>;
  updateSolution: (s: Solution) => void;
  addSolution: (s: Solution) => void;
  deleteSolution: (id: string) => void;

  // Contact
  addContactSubmission: (s: Submission) => void;
  deleteContactSubmission: (id: string) => void;

  // Testimonials
  setTestimonialsData: React.Dispatch<React.SetStateAction<Testimonial[]>>;
  addTestimonial: (t: Testimonial) => void;
  updateTestimonial: (t: Testimonial) => void;
  deleteTestimonial: (id: string) => void;

  // Settings
  setSiteSettings: React.Dispatch<React.SetStateAction<SiteSettings>>;
}

const SiteDataContext = createContext<SiteDataCtx | null>(null);

export function SiteDataProvider({ children }: { children: ReactNode }) {
  const [teamData, setTeamData] = useState<TeamMember[]>(initialTeamData);
  const [projectsData, setProjectsData] = useState<Project[]>(initialProjects);
  const [servicesData, setServicesData] = useState<ServiceData[]>(initialServices);
  const [solutionsData, setSolutionsData] = useState<Solution[]>(initialSolutions);
  const [contactSubmissions, setContactSubmissions] = useState<Submission[]>([]);
  const [siteSettings, setSiteSettings] = useState<SiteSettings>(defaultSettings);
  const [testimonialsData, setTestimonialsData] = useState<Testimonial[]>(initialTestimonialsData);

  // Apply SEO metadata whenever settings change
  useEffect(() => {
    document.title = siteSettings.seoTitle || siteSettings.siteName;
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) { el = document.createElement("meta"); el.name = name; document.head.appendChild(el); }
      el.content = content;
    };
    const setOg = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
      if (!el) { el = document.createElement("meta"); el.setAttribute("property", property); document.head.appendChild(el); }
      el.content = content;
    };
    setMeta("description", siteSettings.seoDescription);
    setMeta("keywords", siteSettings.seoKeywords);
    setOg("og:title", siteSettings.seoTitle);
    setOg("og:description", siteSettings.seoDescription);
    setOg("og:image", siteSettings.seoImage);
  }, [siteSettings]);

  const ctx: SiteDataCtx = {
    teamData, projectsData, servicesData, solutionsData, contactSubmissions, siteSettings, testimonialsData,
    setTeamData, setProjectsData, setServicesData, setSolutionsData, setSiteSettings, setTestimonialsData,

    addTeamMember: (m) => setTeamData((p) => [...p, m]),
    updateTeamMember: (m) => setTeamData((p) => p.map((x) => x.id === m.id ? m : x)),
    deleteTeamMember: (id) => setTeamData((p) => p.filter((x) => x.id !== id)),

    addProject: (proj) => setProjectsData((p) => [...p, proj]),
    updateProject: (proj) => setProjectsData((p) => p.map((x) => x.id === proj.id ? proj : x)),
    deleteProject: (id) => setProjectsData((p) => p.filter((x) => x.id !== id)),

    addService: (s) => setServicesData((p) => [...p, s]),
    updateService: (s) => setServicesData((p) => p.map((x) => x.id === s.id ? s : x)),
    deleteService: (id) => setServicesData((p) => p.filter((x) => x.id !== id)),

    addSolution: (s) => setSolutionsData((p) => [...p, s]),
    updateSolution: (s) => setSolutionsData((p) => p.map((x) => x.id === s.id ? s : x)),
    deleteSolution: (id) => setSolutionsData((p) => p.filter((x) => x.id !== id)),

    addContactSubmission: (s) => setContactSubmissions((p) => [...p, s]),
    deleteContactSubmission: (id) => setContactSubmissions((p) => p.filter((x) => x.id !== id)),

    addTestimonial: (t) => setTestimonialsData((p) => [...p, t]),
    updateTestimonial: (t) => setTestimonialsData((p) => p.map((x) => x.id === t.id ? t : x)),
    deleteTestimonial: (id) => setTestimonialsData((p) => p.filter((x) => x.id !== id)),
  };

  return <SiteDataContext.Provider value={ctx}>{children}</SiteDataContext.Provider>;
}

export function useSiteData() {
  const ctx = useContext(SiteDataContext);
  if (!ctx) {
    // Fallback for isolated component previews outside the provider tree
    return {
      teamData: initialTeamData,
      projectsData: initialProjects,
      servicesData: initialServices,
      solutionsData: initialSolutions,
      contactSubmissions: [] as Submission[],
      siteSettings: defaultSettings,
      testimonialsData: initialTestimonialsData,
      setTeamData: () => {},
      setProjectsData: () => {},
      setServicesData: () => {},
      setSolutionsData: () => {},
      setSiteSettings: () => {},
      setTestimonialsData: () => {},
      addTeamMember: () => {},
      updateTeamMember: () => {},
      deleteTeamMember: () => {},
      addProject: () => {},
      updateProject: () => {},
      deleteProject: () => {},
      addService: () => {},
      updateService: () => {},
      deleteService: () => {},
      addSolution: () => {},
      updateSolution: () => {},
      deleteSolution: () => {},
      addContactSubmission: () => {},
      deleteContactSubmission: () => {},
      addTestimonial: () => {},
      updateTestimonial: () => {},
      deleteTestimonial: () => {},
    } as SiteDataCtx;
  }
  return ctx;
}
