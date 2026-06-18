export type ServiceId =
  | "consulting"
  | "procurement"
  | "engineering"
  | "asset-management";

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Project {
  title: string;
  location: string;
  scope: string;
  image: string;
  tag: string;
}

export interface Benefit {
  icon: string;
  title: string;
  description: string;
}

export interface ServiceData {
  id: ServiceId;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  heroImage: string;
  accentColor: string;
  accentLight: string;
  tag: string;
  overview: string[];
  benefits: Benefit[];
  process: ProcessStep[];
  projects: Project[];
  faqs: FAQItem[];
  deliverables: { label: string; value: string }[];
}

export const services: ServiceData[] = [
  {
    id: "consulting",
    title: "Energy Consulting",
    shortTitle: "Consulting",
    tagline: "Expert feasibility studies and technical, financial, and environmental risk assessments for energy projects.",
    description:
      "We offer expert consulting services with a focus on detailed feasibility studies for energy projects. Our team assesses the technical, financial, and environmental aspects of each project to ensure viability  providing actionable recommendations that help clients make informed decisions, minimise risk, and ensure project success.",
    heroImage:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&h=900&fit=crop&auto=format",
    accentColor: "var(--brand-primary)",
    accentLight: "var(--brand-primary-light)",
    tag: "Advisory",
    overview: [
      "Before committing to any renewable energy investment, you need impartial, expert advice. P.S. Trade & Suppliers' consulting team provides independent technical and financial analysis  helping households, businesses, developers, and government bodies make the right energy decisions from the very beginning.",
      "Our consultants combine deep knowledge of Nepal's energy landscape, regulatory environment, grid infrastructure, and natural resources with internationally recognised methodologies. We assess sites, model financial returns, identify risks, and produce bankable reports that satisfy lenders, investors, and government approvers alike.",
    ],
    deliverables: [
      { label: "Engagement Type", value: "Technical & Financial Advisory" },
      { label: "Clients Served", value: "Residential, Commercial, Industrial, Govt" },
      { label: "Report Standards", value: "IFC / ADB Bankable" },
      { label: "Turnaround", value: "2–8 weeks per study" },
      { label: "Site Coverage", value: "All 7 Provinces" },
      { label: "Languages", value: "English & Nepali" },
    ],
    benefits: [
      {
        icon: "Target",
        title: "Right-Sized Systems, First Time",
        description:
          "Accurate load analysis and solar resource assessment ensures your system is neither over-engineered (wasting capital) nor under-sized (failing to meet demand).",
      },
      {
        icon: "TrendingUp",
        title: "Bankable Financial Projections",
        description:
          "Detailed IRR, NPV, and payback period modelling  prepared to lender and investor standards, supporting project financing and government grant applications.",
      },
      {
        icon: "Shield",
        title: "Independent, Conflict-Free Advice",
        description:
          "Our consulting engagements are separate from sales. You receive honest recommendations  not upselling  with your interests, not ours, at the centre.",
      },
      {
        icon: "FileText",
        title: "Regulatory Navigation",
        description:
          "We guide you through Nepal's licensing, net metering applications, environmental clearances, and NEA interconnection requirements  eliminating bureaucratic delays.",
      },
      {
        icon: "BarChart2",
        title: "Technology Comparison & Selection",
        description:
          "Objective comparison of solar, hydro, wind, and storage technologies for your specific site  with a clear recommendation backed by technical evidence.",
      },
      {
        icon: "Users",
        title: "Stakeholder & Community Engagement",
        description:
          "For community and government projects, we prepare stakeholder engagement plans, benefit-sharing frameworks, and community consultation documentation.",
      },
    ],
    process: [
      {
        number: "01",
        title: "Initial Consultation & Scope Definition",
        description:
          "A discovery call or meeting to understand your goals, constraints, timeline, and budget  resulting in a clear Terms of Reference for the engagement.",
      },
      {
        number: "02",
        title: "Site Visit & Data Collection",
        description:
          "Site visits, load data collection, grid connection assessment, and solar/wind resource data gathering from meteorological sources.",
      },
      {
        number: "03",
        title: "Technical Feasibility Analysis",
        description:
          "Detailed technical analysis covering system sizing, technology selection, grid compatibility, and site constraints  with supporting calculations.",
      },
      {
        number: "04",
        title: "Financial Modelling",
        description:
          "Project economics modelled over a 25-year horizon  CAPEX, OPEX, revenue, IRR, NPV, payback period, and sensitivity analysis.",
      },
      {
        number: "05",
        title: "Report Preparation & Review",
        description:
          "A comprehensive feasibility or advisory report prepared in English and Nepali, reviewed with you before final submission.",
      },
      {
        number: "06",
        title: "Ongoing Advisory Support",
        description:
          "Post-report support during procurement, financing, and implementation phases  ensuring recommendations translate into results.",
      },
    ],
    projects: [
      {
        title: "Lumbini Industrial Park Energy Masterplan",
        location: "Rupandehi, Lumbini Province",
        scope: "20 MW feasibility study",
        image:
          "https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?w=600&h=400&fit=crop&auto=format",
        tag: "Industrial",
      },
      {
        title: "Karnali Province Rural Energy Access Study",
        location: "Birendranagar, Karnali Province",
        scope: "Provincial electrification plan",
        image:
          "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop&auto=format",
        tag: "Government",
      },
      {
        title: "Pokhara Hotel Group Financial Advisory",
        location: "Pokhara, Gandaki Province",
        scope: "Portfolio solar investment analysis",
        image:
          "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=600&h=400&fit=crop&auto=format",
        tag: "Hospitality",
      },
    ],
    faqs: [
      {
        question: "Is your consulting truly independent, or do you recommend your own products?",
        answer:
          "Our consulting engagements are structured as independent advisory contracts  separate from our supply and installation business. We have no obligation to recommend our own equipment and will recommend competitors' products when they are the better fit for your project. Clients can choose to proceed with P.S. Trade & Suppliers for implementation or appoint a different contractor entirely.",
      },
      {
        question: "What does a feasibility study cost, and how long does it take?",
        answer:
          "Fees depend on project scale and complexity. A residential or small commercial feasibility study starts from NPR 25,000 and takes 1–2 weeks. Large-scale industrial or government studies range from NPR 150,000–500,000+ and take 4–8 weeks. We provide a fixed-fee proposal after an initial consultation.",
      },
      {
        question: "Can you help with ADB, World Bank, or government grant applications?",
        answer:
          "Yes. We prepare bankable feasibility reports and technical annexes that meet ADB, IFC, and Nepal government (AEPC, MoEWRI) requirements. We have supported multiple projects through ADB-funded rural energy programmes and AEPC subsidy applications.",
      },
      {
        question: "Do you offer due diligence reviews of other contractors' proposals?",
        answer:
          "Absolutely. If you have received quotes or designs from other contractors and want an independent technical and commercial review before signing, we offer proposal review engagements. This is one of our most requested services for larger procurements.",
      },
      {
        question: "Can your team support projects outside Kathmandu Valley?",
        answer:
          "Yes. We conduct site visits across all seven provinces. For remote locations, we leverage satellite solar resource data and local contacts to supplement physical site visits where travel is impractical.",
      },
    ],
  },

  {
    id: "procurement",
    title: "Equipment Procurement",
    shortTitle: "Procurement",
    tagline: "Cost-effective sourcing of high-quality, eco-friendly solar components from a vetted global supplier network.",
    description:
      "We focus on sourcing high-quality goods efficiently and cost-effectively, working with a global network of trusted suppliers to deliver tailored products and materials that meet each client's specific needs. We emphasise sustainability by prioritising eco-friendly materials and suppliers.",
    heroImage:
      "https://images.unsplash.com/photo-1740914994657-f1cdffdc418e?w=1600&h=900&fit=crop&auto=format",
    accentColor: "var(--brand-secondary)",
    accentLight: "var(--brand-secondary-light)",
    tag: "Supply Chain",
    overview: [
      "Sourcing the right equipment at the right price  with genuine warranties and reliable after-sales support  is one of the hardest challenges in Nepal's renewable energy market. Counterfeit panels, uncertified inverters, and grey-market products are widespread, and the wrong purchase decision can cost far more than the initial savings.",
      "P.S. Trade & Suppliers is an authorised distributor for multiple Tier-1 solar panel manufacturers and leading inverter and battery brands. We procure, quality-check, customs-clear, and deliver certified equipment to your site across all seven provinces  backed by manufacturer warranties and our own after-sales team.",
    ],
    deliverables: [
      { label: "Panel Brands", value: "Tier-1 Manufacturers Only" },
      { label: "Certification", value: "IEC, CE, TÜV, UL" },
      { label: "Warranty Backed", value: "Full Manufacturer Warranty" },
      { label: "Delivery Coverage", value: "All 7 Provinces" },
      { label: "Lead Time", value: "2–8 weeks (stock-dependent)" },
      { label: "Minimum Order", value: "Single residential system" },
    ],
    benefits: [
      {
        icon: "Award",
        title: "Tier-1 Panels Only",
        description:
          "We supply only Bloomberg Tier-1 rated solar panels from manufacturers with proven bankability  no second-tier or grey-market products.",
      },
      {
        icon: "Shield",
        title: "Full Manufacturer Warranty",
        description:
          "Every product comes with genuine manufacturer warranty documentation  25-year output warranties on panels, 10-year inverter warranties, and 8-year battery warranties.",
      },
      {
        icon: "Package",
        title: "Customs Clearance & Logistics",
        description:
          "We handle all import duties, customs clearance, and Nepal-side logistics  simplifying procurement for buyers who cannot manage international supply chains.",
      },
      {
        icon: "DollarSign",
        title: "Competitive Pricing",
        description:
          "Bulk purchasing relationships with manufacturers allow us to offer competitive prices that independent buyers cannot access through direct channels.",
      },
      {
        icon: "CheckSquare",
        title: "Pre-Delivery Inspection",
        description:
          "All equipment is inspected at our warehouse before dispatch  checking for transit damage, verifying serial numbers, and confirming specifications match your order.",
      },
      {
        icon: "Truck",
        title: "Last-Mile Delivery",
        description:
          "Our logistics network covers road, porter, and helicopter delivery to remote sites across Nepal  ensuring equipment reaches even the most inaccessible locations.",
      },
    ],
    process: [
      {
        number: "01",
        title: "Requirements Specification",
        description:
          "We work with you or your engineer to define precise equipment specifications  panel wattage, inverter type, battery chemistry, mounting system, and accessories.",
      },
      {
        number: "02",
        title: "Quotation & Brand Options",
        description:
          "We provide a detailed quotation with 2–3 brand options per product category, comparing specifications, warranties, and pricing transparently.",
      },
      {
        number: "03",
        title: "Order Confirmation & Lead Time",
        description:
          "Once you confirm the order, we provide a firm delivery timeline  from stock for common items, or 4–8 weeks for special orders from manufacturers.",
      },
      {
        number: "04",
        title: "Import, Clearance & Warehousing",
        description:
          "We manage all international shipping, customs documentation, import duty payment, and receiving at our Kathmandu warehouse.",
      },
      {
        number: "05",
        title: "Quality Inspection & Documentation",
        description:
          "Pre-delivery inspection of all items, with delivery of warranty cards, datasheets, installation manuals, and serial number records.",
      },
      {
        number: "06",
        title: "Site Delivery & Handover",
        description:
          "Equipment is delivered to your site or installation contractor  with a delivery note, packing list, and condition report for your records.",
      },
    ],
    projects: [
      {
        title: "Kathmandu Valley EPC Supply Package",
        location: "Kathmandu, Bagmati Province",
        scope: "850 kW panel & inverter supply",
        image:
          "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop&auto=format",
        tag: "Large Scale",
      },
      {
        title: "Mustang Off-Grid Equipment Supply",
        location: "Mustang, Gandaki Province",
        scope: "Helicopter-delivered battery & panel kit",
        image:
          "https://images.unsplash.com/photo-1682760344243-45faeb1b9736?w=600&h=400&fit=crop&auto=format",
        tag: "Remote Delivery",
      },
      {
        title: "Terai Irrigation Pump Package",
        location: "Chitwan, Bagmati Province",
        scope: "45 solar pump systems",
        image:
          "https://images.unsplash.com/photo-1630672607721-48e0a0187a92?w=600&h=400&fit=crop&auto=format",
        tag: "Agriculture",
      },
    ],
    faqs: [
      {
        question: "How do I know the panels you supply are genuine Tier-1 products?",
        answer:
          "We provide manufacturer certificates of origin, authentic warranty registration cards, and IEC test certificates with every shipment. You can verify panel serial numbers directly with the manufacturer. We also welcome pre-order factory audits for large-volume buyers.",
      },
      {
        question: "Can you supply equipment to my contractor directly?",
        answer:
          "Yes. We regularly supply equipment to third-party installation contractors on behalf of project owners. We coordinate delivery schedules with your contractor and provide all technical documentation they need for installation.",
      },
      {
        question: "What is the minimum order quantity for panels?",
        answer:
          "We have no minimum order quantity. We supply single residential systems (as few as 4–6 panels) through to utility-scale orders of thousands of panels. Pricing is tiered by volume, so larger orders benefit from better rates.",
      },
      {
        question: "Do you stock spare parts and replacement components?",
        answer:
          "Yes. We maintain a spare parts inventory for inverters, fuses, DC isolators, monitoring hardware, and other common replacement items. For after-sales support on equipment we have supplied, our team can dispatch parts within 24–48 hours in Kathmandu Valley and 3–7 days to other provinces.",
      },
      {
        question: "Can you source equipment not listed in your standard catalogue?",
        answer:
          "We can source most renewable energy equipment on request through our international supplier network  including wind turbine components, micro-hydro equipment, energy management systems, and EV charging infrastructure. Lead times for special orders are typically 6–12 weeks.",
      },
    ],
  },

  {
    id: "engineering",
    title: "Engineering & Installation",
    shortTitle: "Engineering",
    tagline: "End-to-end design, installation, and commissioning of electrical and renewable energy systems.",
    description:
      "Our engineering services specialise in delivering high-quality solutions in electrical systems and renewable energy projects. Our skilled engineers design, implement, and maintain advanced solar PV and electrical infrastructure for a wide range of industries  from rural mini-grids to utility-scale solar farms.",
    heroImage:
      "https://images.unsplash.com/photo-1668097613572-40b7c11c8727?w=1600&h=900&fit=crop&auto=format",
    accentColor: "var(--brand-green)",
    accentLight: "var(--brand-green-light)",
    tag: "Turnkey",
    overview: [
      "Engineering excellence is the backbone of every reliable renewable energy system. P.S. Trade & Suppliers' in-house engineering team handles the full technical lifecycle  from preliminary site surveys and detailed electrical and structural designs, through to on-site installation, commissioning, and grid connection.",
      "All installations are carried out by our ERC-licensed engineers and CTEVT-certified technicians, following IEC standards, Nepal Electricity Authority guidelines, and international best practices. We handle residential rooftop systems, large commercial and industrial installations, off-grid community projects, and complex hybrid systems  with the same standard of engineering rigour across all project scales.",
    ],
    deliverables: [
      { label: "Engineering Team", value: "ERC-Licensed Engineers" },
      { label: "Technicians", value: "CTEVT Certified" },
      { label: "Design Standards", value: "IEC 62446 / NEC" },
      { label: "Structural Design", value: "Wind & Seismic Load Rated" },
      { label: "Project Scale", value: "1 kW – 5 MW" },
      { label: "Commissioning", value: "Full IEC Test Documentation" },
    ],
    benefits: [
      {
        icon: "Cpu",
        title: "Custom System Design",
        description:
          "Every system is individually engineered  not templated. We produce single-line diagrams, panel layout drawings, structural calculations, and cable schedules specific to your site.",
      },
      {
        icon: "HardHat",
        title: "Licensed Engineers On Every Job",
        description:
          "Our installations are supervised by ERC-licensed electrical engineers and carried out by CTEVT-certified technicians  meeting Nepal's professional licensing requirements.",
      },
      {
        icon: "Wind",
        title: "Structural & Wind Load Engineering",
        description:
          "Mounting systems are engineered for Nepal's local wind speeds, snow loads, and seismic zone requirements  using certified racking systems with structural calculations.",
      },
      {
        icon: "Zap",
        title: "Safe, Code-Compliant Wiring",
        description:
          "All DC and AC wiring, protection devices, earthing, and surge protection are installed to IEC and NEA standards  with full as-built drawings at project close.",
      },
      {
        icon: "Monitor",
        title: "Commissioning & Test Documentation",
        description:
          "We produce full IEC 62446-compliant commissioning reports  including IV curve tests, insulation resistance, earth continuity, and string performance records.",
      },
      {
        icon: "ClipboardCheck",
        title: "Quality Assurance Throughout",
        description:
          "Structured quality checkpoints at design, mid-installation, and commissioning stages  with photographic records and sign-off documentation at each milestone.",
      },
    ],
    process: [
      {
        number: "01",
        title: "Site Survey & Structural Assessment",
        description:
          "Detailed site survey covering roof or ground structure, shading analysis, load centre location, grid connection point, and access logistics.",
      },
      {
        number: "02",
        title: "Detailed Engineering Design",
        description:
          "Production of single-line electrical diagrams, panel layout drawings, structural mounting calculations, cable sizing schedules, and protection coordination.",
      },
      {
        number: "03",
        title: "Design Review & Client Approval",
        description:
          "Engineering drawings and specifications are reviewed with the client and any third-party engineer before procurement commences.",
      },
      {
        number: "04",
        title: "Installation Mobilisation",
        description:
          "Equipment, tools, safety gear, and field team mobilised to site. Civil works (cable trenching, mounting foundations) completed before electrical installation.",
      },
      {
        number: "05",
        title: "Electrical Installation & Wiring",
        description:
          "Panel mounting, DC and AC wiring, inverter installation, protection devices, earthing, and surge protection  with quality checks at each stage.",
      },
      {
        number: "06",
        title: "Commissioning, Testing & Handover",
        description:
          "Full system commissioning to IEC 62446 standard  IV curve tests, insulation tests, functional testing, and grid connection. As-built documentation and client training at handover.",
      },
    ],
    projects: [
      {
        title: "Kathmandu Commercial Complex Rooftop",
        location: "Lalitpur, Bagmati Province",
        scope: "150 kW grid-tied, full turnkey",
        image:
          "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?w=600&h=400&fit=crop&auto=format",
        tag: "Commercial",
      },
      {
        title: "Humla Village Off-Grid Microgrid",
        location: "Humla, Karnali Province",
        scope: "30 kW off-grid, porter delivery",
        image:
          "https://images.unsplash.com/photo-1763809676935-921c5821f908?w=600&h=400&fit=crop&auto=format",
        tag: "Remote",
      },
      {
        title: "Biratnagar Factory Ground Mount",
        location: "Biratnagar, Koshi Province",
        scope: "500 kW ground-mounted industrial",
        image:
          "https://images.unsplash.com/photo-1668097613572-40b7c11c8727?w=600&h=400&fit=crop&auto=format",
        tag: "Industrial",
      },
    ],
    faqs: [
      {
        question: "How long does a typical residential installation take?",
        answer:
          "A standard residential system (3–10 kW) is typically installed in 1–2 days by our team. This includes panel mounting, inverter installation, wiring, and basic commissioning testing. Full handover documentation takes an additional 1–2 days to prepare.",
      },
      {
        question: "Do you handle NEA grid connection paperwork for on-grid systems?",
        answer:
          "Yes. We manage the complete NEA net metering and grid connection application process on your behalf  including the technical documentation, site inspection scheduling, and meter installation coordination. This is included in our turnkey installation package.",
      },
      {
        question: "What structural warranty do you provide on the mounting system?",
        answer:
          "Mounting systems we install are certified for minimum 25-year structural life. We provide a structural warranty on our installation workmanship for 5 years, covering any settlement, corrosion, or fastening failures attributable to our installation. Manufacturer warranties on the racking system itself are passed through to you.",
      },
      {
        question: "Can you upgrade or expand an existing solar installation?",
        answer:
          "Yes  system expansion is a common request. We can add panels to an existing string inverter (if capacity allows), add a second inverter, or upgrade to a larger hybrid inverter. We first inspect the existing installation to confirm its condition and compliance before designing any expansion.",
      },
      {
        question: "Do you carry insurance for on-site work?",
        answer:
          "Yes. P.S. Trade & Suppliers carries comprehensive contractor's all-risk (CAR) insurance and public liability insurance for all our installation activities. We can provide insurance certificates on request for projects where this is required by the client or their lender.",
      },
    ],
  },

  {
    id: "asset-management",
    title: "Asset Management & O&M",
    shortTitle: "Asset Management",
    tagline: "Performance monitoring and lifecycle management of solar and electrical infrastructure.",
    description:
      "Our asset management services are designed to maximise the performance and longevity of energy assets, ensuring operational efficiency and strong financial returns. We take a comprehensive approach to managing energy systems throughout their lifecycle.",
    heroImage:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&h=900&fit=crop&auto=format",
    accentColor: "#8b5cf6",
    accentLight: "#f5f3ff",
    tag: "O&M",
    overview: [
      "A solar or hybrid energy system is a long-term asset  and like any asset, its performance depends on the quality of its ongoing care. Poorly maintained systems lose 15–30% of their energy output within a few years. Our asset management and O&M service ensures your system delivers its warranted performance across its full 25-year lifecycle.",
      "We offer tiered O&M contracts covering everything from basic annual maintenance visits to full 24/7 SCADA monitoring, predictive maintenance, performance guarantees, and complete asset management including insurance, warranty management, and lender reporting. Whether you installed with us or with another contractor, we can take over the O&M of your existing system.",
    ],
    deliverables: [
      { label: "Monitoring", value: "24/7 SCADA & Remote Alerts" },
      { label: "Response SLA", value: "4 hours (Kathmandu), 48 hrs (province)" },
      { label: "Reporting", value: "Monthly & Annual Performance" },
      { label: "Maintenance", value: "Quarterly Preventive Visits" },
      { label: "Contract Terms", value: "1, 3, or 5 years" },
      { label: "Coverage", value: "Any brand, any installer" },
    ],
    benefits: [
      {
        icon: "Activity",
        title: "24/7 Remote Performance Monitoring",
        description:
          "SCADA-connected monitoring detects performance deviations, inverter faults, and string failures in real time  often before you notice any issue.",
      },
      {
        icon: "TrendingUp",
        title: "Performance Guarantee Options",
        description:
          "For systems we install and manage, we offer energy yield guarantees  backed by financial penalties if performance falls below the contracted generation threshold.",
      },
      {
        icon: "Wrench",
        title: "Preventive Maintenance Programme",
        description:
          "Scheduled quarterly visits covering panel cleaning, electrical connection checks, inverter inspection, earthing verification, and vegetation management.",
      },
      {
        icon: "AlertTriangle",
        title: "Rapid Fault Response",
        description:
          "4-hour on-site response SLA for Kathmandu Valley; 24–48 hours for provincial sites. Spare parts inventory pre-positioned across our provincial offices.",
      },
      {
        icon: "FileText",
        title: "Lender & Investor Reporting",
        description:
          "Monthly and annual performance reports prepared to IFC/ADB standards  supporting project finance compliance, insurance claims, and investor updates.",
      },
      {
        icon: "Shield",
        title: "Warranty & Insurance Management",
        description:
          "We manage manufacturer warranty claims, coordinate insurance assessments, and handle all technical documentation  so you deal with one contact, not many.",
      },
    ],
    process: [
      {
        number: "01",
        title: "Asset Baseline Assessment",
        description:
          "Initial inspection of your existing system  reviewing as-built documentation, commissioning records, current performance data, and equipment condition.",
      },
      {
        number: "02",
        title: "Monitoring System Onboarding",
        description:
          "Integration of your inverter and monitoring hardware into our centralised SCADA platform  with alert thresholds and reporting parameters configured.",
      },
      {
        number: "03",
        title: "O&M Contract Agreement",
        description:
          "Agree the scope, SLAs, reporting requirements, and contract term  with pricing fixed for the contract period and annual CPI adjustment only.",
      },
      {
        number: "04",
        title: "Scheduled Preventive Maintenance",
        description:
          "Quarterly site visits following our standardised maintenance checklist  with a detailed inspection report issued within 5 business days of each visit.",
      },
      {
        number: "05",
        title: "Fault Detection & Corrective Maintenance",
        description:
          "24/7 monitoring flags faults automatically. Our team diagnoses remotely where possible and dispatches field technicians for on-site repairs within the contracted SLA.",
      },
      {
        number: "06",
        title: "Performance Reporting & Review",
        description:
          "Monthly dashboard updates and an annual performance review meeting  comparing actual vs. modelled generation, reviewing equipment health, and planning the year ahead.",
      },
    ],
    projects: [
      {
        title: "Lalitpur Commercial Portfolio O&M",
        location: "Lalitpur, Bagmati Province",
        scope: "12 sites, 1.2 MW under management",
        image:
          "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&h=400&fit=crop&auto=format",
        tag: "Portfolio",
      },
      {
        title: "Gandaki Province Hotel Chain",
        location: "Kaski, Gandaki Province",
        scope: "8 lodges, 5-year O&M contract",
        image:
          "https://images.unsplash.com/photo-1682760344243-45faeb1b9736?w=600&h=400&fit=crop&auto=format",
        tag: "Hospitality",
      },
      {
        title: "NEA Substation Monitoring System",
        location: "Sunsari, Koshi Province",
        scope: "Remote monitoring & reporting",
        image:
          "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop&auto=format",
        tag: "Government",
      },
    ],
    faqs: [
      {
        question: "Can you take over O&M of a system installed by another company?",
        answer:
          "Yes. This is one of our most common requests. We begin with a baseline assessment of your existing system, document its current condition and performance, and then take over O&M responsibilities. We can manage systems from any manufacturer and installed by any contractor, provided they meet minimum safety standards.",
      },
      {
        question: "What does the 24/7 monitoring actually cover?",
        answer:
          "Our SCADA monitoring tracks real-time generation (kW), daily energy yield (kWh), performance ratio, string-level currents, inverter status, grid voltage, and battery state of charge (for hybrid systems). Automated alerts are triggered for inverter faults, generation deviations >10%, communication losses, and overvoltage/undervoltage events.",
      },
      {
        question: "What is the response time if my system develops a fault?",
        answer:
          "Our SLA for Kathmandu Valley is 4 hours from fault notification to a technician on-site. For provincial sites, we target 24 hours for major faults (system down) and 48 hours for minor faults (partial performance loss). Remote diagnosis and software fixes are typically implemented within 2 hours of fault detection.",
      },
      {
        question: "How often will you visit my site for maintenance?",
        answer:
          "Our standard O&M contract includes quarterly preventive maintenance visits  4 per year. Each visit covers panel cleaning, visual inspection of all components, torque-checking of electrical connections, inverter log review, earthing resistance measurement, and vegetation clearance around ground-mounted arrays.",
      },
      {
        question: "Do you offer performance guarantees?",
        answer:
          "Yes, for systems installed by P.S. Trade & Suppliers under a 3-year or 5-year O&M contract. We guarantee a minimum annual energy yield (expressed as a percentage of the design yield), with financial compensation for any shortfall attributable to our maintenance standards. Exclusions apply for force majeure events, grid curtailment, and owner-caused issues.",
      },
    ],
  },
];

export const servicesList = services.map((s) => ({
  id: s.id,
  title: s.title,
  shortTitle: s.shortTitle,
  tagline: s.tagline,
  heroImage: s.heroImage,
  accentColor: s.accentColor,
  accentLight: s.accentLight,
  tag: s.tag,
  description: s.description,
}));
