export interface Education {
  degree: string;
  institution: string;
  year: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
}

export interface MajorProject {
  title: string;
  location: string;
  capacity: string;
  description: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  department: string;
  photo: string;
  shortBio: string;
  fullBio: string;
  email: string;
  phone: string;
  skills: string[];
  education: Education[];
  experience: Experience[];
  projects: MajorProject[];
}

export const initialTeamData: TeamMember[] = [
  {
    id: "prashant-bajracharya",
    name: "Er. Prashant Bajracharya",
    position: "Managing Director & Senior Solar Business Expert",
    department: "Leadership",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=600&fit=crop&auto=format",
    shortBio: "Over 18 years of experience spanning engineering management, institutional sales, and large-scale project operations in renewable energy across Nepal.",
    fullBio: "Er. Prashant Bajracharya is the Managing Director of P.S. Trade and Suppliers Pvt. Ltd. With over 18 years of experience in engineering management, institutional sales, and large-scale project operations, he has served as Project Manager for AEPC solar irrigation and drinking water schemes across 300+ sites nationwide.\n\nHis professional journey includes key leadership roles at SunFarmer Nepal, Chaudhary Group, Sipradi Energy, and Engineering Marketing Concern. A Registered Member of the Nepal Engineering Council ('A' Electrical), he has been instrumental in shaping the company's partnerships with AEPC, UNOPS, ICIMOD, Helvetas, GIZ, WWF, and Renewable World.",
    email: "pstradesuppliers9@gmail.com",
    phone: "+977-9851183589",
    skills: ["Solar EPC Management", "Business Development", "Institutional Sales", "Project Management", "Renewable Energy Policy"],
    education: [
      { degree: "MBA", institution: "Ace Institute of Management", year: "2010" },
      { degree: "B.E. Electrical & Electronics (Power & Control)", institution: "Kathmandu University", year: "2006" },
    ],
    experience: [
      { role: "Managing Director", company: "P.S. Trade and Suppliers Pvt. Ltd.", duration: "2015 – Present", description: "Leads all operations, business development, and project delivery across the company's solar EPC and commodity trading divisions." },
      { role: "Project Manager — Solar Irrigation & Drinking Water", company: "AEPC", duration: "2012 – 2015", description: "Managed 300+ solar irrigation and drinking water sites nationwide under AEPC programmes." },
      { role: "Senior Solar Business Expert", company: "SunFarmer Nepal / Sipradi Energy", duration: "2008 – 2012", description: "Led commercial solar project development and institutional sales across Nepal." },
    ],
    projects: [
      { title: "AEPC Solar Irrigation Programme", location: "Nationwide, Nepal", capacity: "300+ sites", description: "Project Manager for AEPC solar irrigation and drinking water schemes across 300+ sites nationwide." },
    ],
  },
  {
    id: "shahil-shrestha",
    name: "Er. Shahil Shrestha",
    position: "Sr. Manager & Technical Engineer",
    department: "Engineering",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop&auto=format",
    shortBio: "Over 5 years of professional experience in renewable energy engineering, specialising in end-to-end solar PV infrastructure development and system optimisation.",
    fullBio: "Er. Shahil Shrestha is P.S. Trade and Suppliers' Senior Manager and Technical Engineer, responsible for end-to-end solar PV infrastructure development, system design, and commissioning. With over 5 years of professional experience, he leads technical delivery of on-grid, off-grid, and hybrid solar projects.\n\nKey projects include the 78.84 kWp Grid-Tied Solar PV System at Siddhasthali Rural Community Hospital (Hetauda), a 43 kWp on-grid system at Bloom Nepal School (Lalitpur), and the 50 kWp Solar Mini-Grid in Charka Tangsong (Dolpa) under AEPC.",
    email: "pstradesuppliers9@gmail.com",
    phone: "+977-9764569056",
    skills: ["Solar PV Design", "System Optimisation", "Grid-Tied Systems", "Off-Grid Mini-Grids", "Commissioning"],
    education: [
      { degree: "B.E. Electrical and Electronic", institution: "Kathmandu University", year: "2018" },
    ],
    experience: [
      { role: "Sr. Manager & Technical Engineer", company: "P.S. Trade and Suppliers Pvt. Ltd.", duration: "2020 – Present", description: "Leads technical design, installation, and commissioning of solar PV projects from 10 kWp to MW-scale across Nepal." },
      { role: "Renewable Energy Engineer", company: "AEPC / Development Partners", duration: "2018 – 2020", description: "Supported engineering design and site supervision for AEPC-funded solar projects in rural Nepal." },
    ],
    projects: [
      { title: "Siddhasthali Rural Community Hospital Solar PV", location: "Hetauda, Bagmati Province", capacity: "78.84 kWp Grid-Tied", description: "Lead engineer for a 78.84 kWp grid-tied solar PV system at a rural community hospital." },
      { title: "Charka Tangsong Solar Mini-Grid", location: "Dolpa, Karnali Province", capacity: "50 kWp Off-Grid", description: "Designed and supervised the 50 kWp solar mini-grid in Charka Tangsong (Dolpa) under AEPC." },
    ],
  },
  {
    id: "prajwal-dhakal",
    name: "Er. Prajwal Dhakal",
    position: "Technical Consultant",
    department: "Consulting",
    photo: "https://images.unsplash.com/photo-1582896911227-c966f6e7fb93?w=600&h=600&fit=crop&auto=format",
    shortBio: "Designed and supervised more than 200 solar irrigation and community drinking water projects with Renewable World, ICIMOD, KOICA, Helvetas Nepal, and AEPC.",
    fullBio: "Er. Prajwal Dhakal is P.S. Trade and Suppliers' Technical Consultant, with a track record of designing and supervising more than 200 solar irrigation and community drinking water projects across Nepal in collaboration with Renewable World, ICIMOD, KOICA, Helvetas Nepal, and AEPC.\n\nSkilled in PVsyst solar yield simulation and AutoCAD Single Line Diagram (SLD) design, he has also contributed to the 86 MW Solu Khola (Dudhkoshi) Hydroelectric Project.",
    email: "pstradesuppliers9@gmail.com",
    phone: "+977-9764569056",
    skills: ["PVsyst Simulation", "AutoCAD SLD Design", "Solar Irrigation Design", "Feasibility Studies", "ICIMOD / AEPC Standards"],
    education: [
      { degree: "MSc. Engineering Management", institution: "Kathmandu University", year: "2016" },
      { degree: "B.E. Electrical & Electronics", institution: "Kathmandu University", year: "2013" },
    ],
    experience: [
      { role: "Technical Consultant", company: "P.S. Trade and Suppliers Pvt. Ltd.", duration: "2020 – Present", description: "Technical consulting, feasibility studies, PVsyst yield modelling, and SLD design for solar projects across Nepal." },
      { role: "Senior Solar Engineer", company: "Renewable World / ICIMOD / Helvetas Nepal", duration: "2014 – 2020", description: "Designed and supervised 200+ solar irrigation and drinking water projects across Nepal." },
    ],
    projects: [
      { title: "200+ Solar Irrigation & Drinking Water Projects", location: "Nationwide, Nepal", capacity: "Various", description: "Designed and supervised 200+ solar irrigation and community drinking water projects with Renewable World, ICIMOD, KOICA, Helvetas, and AEPC." },
      { title: "Solu Khola (Dudhkoshi) Hydroelectric Project", location: "Solukhumbu, Koshi Province", capacity: "86 MW", description: "Contributed technical expertise to Nepal's 86 MW Solu Khola Hydroelectric Project." },
    ],
  },
  {
    id: "diwas-bajracharya",
    name: "Diwas Bajracharya",
    position: "Business Development Manager",
    department: "Operations",
    photo: "https://images.unsplash.com/photo-1705645930353-0e335311ef20?w=600&h=600&fit=crop&auto=format",
    shortBio: "Drives client relationships, market expansion, and project pipeline development for the company's solar and trading divisions.",
    fullBio: "Diwas Bajracharya leads business development at P.S. Trade and Suppliers, responsible for client relationships, market expansion, and project pipeline development across the company's solar EPC and commodity trading divisions. With a Bachelor of Business from Australia, he brings international business acumen combined with deep local market knowledge.",
    email: "pstradesuppliers9@gmail.com",
    phone: "+977-9851183589",
    skills: ["Business Development", "Client Relations", "Market Expansion", "Project Pipeline", "International Trade"],
    education: [
      { degree: "Bachelor of Business", institution: "Australia", year: "2018" },
    ],
    experience: [
      { role: "Business Development Manager", company: "P.S. Trade and Suppliers Pvt. Ltd.", duration: "2019 – Present", description: "Drives client acquisition, market expansion, and project pipeline for solar EPC and commodity trading divisions." },
    ],
    projects: [],
  },
  {
    id: "lila-bahadur-rijal",
    name: "Lila Bahadur Rijal",
    position: "Finance Officer",
    department: "Finance",
    photo: "https://images.unsplash.com/photo-1585240975858-7264fd020798?w=600&h=600&fit=crop&auto=format",
    shortBio: "Oversees financial planning, project budgeting, and compliance for company operations.",
    fullBio: "Lila Bahadur Rijal is P.S. Trade and Suppliers' Finance Officer, responsible for financial planning, project budgeting, statutory compliance, and corporate governance. With qualifications in both management and law (MBS, LL.B), he brings rigour and regulatory expertise to the company's financial operations.",
    email: "pstradesuppliers9@gmail.com",
    phone: "+977-1-5249406",
    skills: ["Financial Planning", "Project Budgeting", "Statutory Compliance", "Corporate Governance", "Legal & Regulatory"],
    education: [
      { degree: "LL.B", institution: "Tribhuvan University", year: "2015" },
      { degree: "MBS", institution: "Tribhuvan University", year: "2012" },
    ],
    experience: [
      { role: "Finance Officer", company: "P.S. Trade and Suppliers Pvt. Ltd.", duration: "2018 – Present", description: "Manages financial planning, project budgeting, statutory compliance, and corporate governance." },
    ],
    projects: [],
  },
  {
    id: "bibek-bajracharya",
    name: "Bibek Bajracharya",
    position: "Office Admin",
    department: "Operations",
    photo: "https://images.unsplash.com/photo-1652471943570-f3590a4e52ed?w=600&h=600&fit=crop&auto=format",
    shortBio: "Manages administrative operations and day-to-day office coordination for the company.",
    fullBio: "Bibek Bajracharya handles administrative operations and day-to-day office coordination at P.S. Trade and Suppliers, ensuring the smooth running of the Kathmandu head office. With a Bachelor in Finance, he supports the management team with efficient administrative processes and documentation.",
    email: "pstradesuppliers9@gmail.com",
    phone: "+977-1-5249406",
    skills: ["Office Administration", "Documentation", "Coordination", "Finance Support", "Stakeholder Communication"],
    education: [
      { degree: "Bachelor in Finance", institution: "Kathmandu University", year: "2020" },
    ],
    experience: [
      { role: "Office Admin", company: "P.S. Trade and Suppliers Pvt. Ltd.", duration: "2021 – Present", description: "Manages administrative operations, documentation, and day-to-day office coordination at the Kathmandu head office." },
    ],
    projects: [],
  },
  {
    id: "rameshwor-yadav",
    name: "Rameshwor Yadav",
    position: "Field Technician",
    department: "Engineering",
    photo: "https://images.unsplash.com/photo-1668097613572-40b7c11c8727?w=600&h=600&fit=crop&auto=format",
    shortBio: "Field technician supporting installation, maintenance, and on-site servicing of solar and electrical systems across Nepal.",
    fullBio: "Rameshwor Yadav is a field technician at P.S. Trade and Suppliers, providing essential on-site support for the installation, commissioning, and maintenance of solar and electrical systems across Nepal. He plays a critical role in the company's field operations, ensuring high-quality installations and timely after-sales service.",
    email: "pstradesuppliers9@gmail.com",
    phone: "+977-9851183589",
    skills: ["Solar Installation", "Electrical Wiring", "System Commissioning", "Preventive Maintenance", "Field Operations"],
    education: [],
    experience: [
      { role: "Field Technician", company: "P.S. Trade and Suppliers Pvt. Ltd.", duration: "2020 – Present", description: "Supports installation, maintenance, and on-site servicing of solar PV and electrical systems across multiple provinces." },
    ],
    projects: [],
  },
];
