import type { SolutionId } from "../solutions/solutionsData";
import type { ServiceId } from "../services/servicesData";

export type Province =
  | "Koshi"
  | "Madhesh"
  | "Bagmati"
  | "Gandaki"
  | "Lumbini"
  | "Karnali"
  | "Sudurpashchim";

export type ProjectStatus = "Completed" | "Ongoing" | "Planned";

export interface GalleryImage {
  url: string;
  caption: string;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  location: string;
  province: Province;
  district: string;
  capacity: string;
  status: ProjectStatus;
  completedDate: string;
  duration: string;
  coverImage: string;
  gallery: GalleryImage[];
  shortDescription: string;
  fullDescription: string;
  challenge: string;
  outcome: string;
  stats: { label: string; value: string }[];
  solutions: SolutionId[];
  services: ServiceId[];
  tags: string[];
}

// ── Image constants ────────────────────────────────────────────────
const IMG = {
  solarFarm1:   "https://images.unsplash.com/photo-1770936994282-8811fb7129ac?w=1200&h=700&fit=crop&auto=format",
  solarFarm2:   "https://images.unsplash.com/photo-1770068511771-7c146210a55b?w=1200&h=700&fit=crop&auto=format",
  solarFarm3:   "https://images.unsplash.com/photo-1776918570438-886f538edd93?w=1200&h=700&fit=crop&auto=format",
  solarFarm4:   "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=700&fit=crop&auto=format",
  rooftop1:     "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=1200&h=700&fit=crop&auto=format",
  rooftop2:     "https://images.unsplash.com/photo-1724041875334-0a6397111c7e?w=1200&h=700&fit=crop&auto=format",
  offGrid1:     "https://images.unsplash.com/photo-1763809676935-921c5821f908?w=1200&h=700&fit=crop&auto=format",
  mountain1:    "https://images.unsplash.com/photo-1682760344243-45faeb1b9736?w=1200&h=700&fit=crop&auto=format",
  mountain2:    "https://images.unsplash.com/photo-1667714045096-f77b914af4da?w=1200&h=700&fit=crop&auto=format",
  pump1:        "https://images.unsplash.com/photo-1670519808965-16b9b2f724af?w=1200&h=700&fit=crop&auto=format",
  pump2:        "https://images.unsplash.com/photo-1630672607721-48e0a0187a92?w=1200&h=700&fit=crop&auto=format",
  battery:      "https://images.unsplash.com/photo-1742899273038-67ff67477663?w=1200&h=700&fit=crop&auto=format",
  install1:     "https://images.unsplash.com/photo-1668097613572-40b7c11c8727?w=1200&h=700&fit=crop&auto=format",
  install2:     "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?w=1200&h=700&fit=crop&auto=format",
  team1:        "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=700&fit=crop&auto=format",
  village1:     "https://images.unsplash.com/photo-1774519220648-a767431e00e5?w=1200&h=700&fit=crop&auto=format",
};

export const projects: Project[] = [
  {
    id: "biratnagar-industrial-500kw",
    title: "Biratnagar Industrial Ground Mount",
    client: "Eastern Textile Mills Pvt. Ltd.",
    location: "Biratnagar, Koshi Province",
    province: "Koshi",
    district: "Morang",
    capacity: "500 kW",
    status: "Completed",
    completedDate: "March 2024",
    duration: "14 weeks",
    coverImage: IMG.solarFarm1,
    gallery: [
      { url: IMG.solarFarm1,  caption: "Completed ground-mount array — 1,800 panels across 2.5 acres" },
      { url: IMG.solarFarm2,  caption: "Row alignment during installation phase" },
      { url: IMG.install1,    caption: "Technician commissioning string inverters" },
      { url: IMG.solarFarm4,  caption: "Aerial overview of completed installation" },
    ],
    shortDescription: "Nepal's largest ground-mounted industrial solar installation — delivering 500 kW of clean energy to a major textile manufacturing facility in Biratnagar.",
    fullDescription: "Eastern Textile Mills approached P.S. Trade & Suppliers seeking a solution to their rapidly rising electricity costs, which had grown to represent over 22% of total operating expenses. A comprehensive site survey identified a 2.5-acre underutilised land parcel adjacent to the factory — ideal for a ground-mounted solar installation.\n\nThe project was engineered as a 500 kW on-grid system with NEA net metering, comprising 1,800 high-efficiency monocrystalline panels mounted on galvanised steel racking, connected through five 100 kW string inverters to the factory's existing 33 kV substation. Our engineering team produced a full structural and electrical design to IEC standards, with wind and seismic load calculations specific to Morang District's conditions.",
    challenge: "The factory's 33 kV substation required a custom protection coordination study to allow safe grid injection — a technically complex requirement that involved coordination with NEA's Koshi Province grid team. The tight 14-week completion timeline, driven by the client's fiscal year requirements, demanded parallel-tracking of civil works, equipment procurement, and electrical installation.",
    outcome: "The system was commissioned on time and within budget. In its first full year of operation, it generated 720,000 kWh — covering 68% of the factory's annual electricity demand and reducing their NEA electricity bill by NPR 8.6 million. CO₂ savings are estimated at 504 tonnes per year.",
    stats: [
      { label: "Installed Capacity", value: "500 kW" },
      { label: "Annual Generation", value: "720,000 kWh" },
      { label: "Bill Reduction", value: "NPR 8.6M/yr" },
      { label: "CO₂ Saved", value: "504 t/yr" },
      { label: "Panels Installed", value: "1,800 units" },
      { label: "Completion Time", value: "14 weeks" },
    ],
    solutions: ["on-grid-solar"],
    services: ["consulting", "engineering", "procurement"],
    tags: ["Industrial", "Ground Mount", "Net Metering", "Large Scale"],
  },

  {
    id: "humla-village-electrification",
    title: "Humla District Community Electrification",
    client: "Humla District Coordination Committee",
    location: "Simikot, Karnali Province",
    province: "Karnali",
    district: "Humla",
    capacity: "30 kW",
    status: "Completed",
    completedDate: "October 2023",
    duration: "10 weeks (including 4-day trek)",
    coverImage: IMG.offGrid1,
    gallery: [
      { url: IMG.offGrid1,   caption: "Solar panels installed on mountain ridge above Simikot" },
      { url: IMG.mountain1,  caption: "Equipment delivery by porter team across high-altitude trail" },
      { url: IMG.mountain2,  caption: "Battery bank installation in community power house" },
      { url: IMG.village1,   caption: "Village homes lit for the first time after system commissioning" },
    ],
    shortDescription: "Landmark off-grid electrification bringing reliable solar power to 12 remote villages in Humla District — the first permanent electricity supply for most of these communities.",
    fullDescription: "The Humla District Community Electrification project was one of P.S. Trade & Suppliers' most logistically complex and socially significant undertakings. Humla, Nepal's most remote district, sits at elevations of 2,700–4,000 metres in the Karnali Himalaya. Twelve villages with a combined population of over 1,400 people had never had a reliable electricity supply — relying on kerosene lamps and diesel generators for the rare households that could afford them.\n\nThe project involved a 30 kW solar-plus-storage microgrid, with a central power house housing 180 kWh of lithium-ion battery storage and managing power distribution to all 12 villages through a low-voltage AC distribution network spanning 4.2 kilometres.",
    challenge: "There are no roads to Humla's remote villages. All 30 kW of solar panels, the battery bank, inverters, cables, and structural materials — totalling over 4 tonnes of equipment — were carried by a team of 40 porters over a 4-day mountain trail. The project also required training local community members as system operators to maintain operations between our twice-yearly maintenance visits.",
    outcome: "Since commissioning, all 12 villages have had reliable electricity for the first time in their history. Children can study at night; health workers can operate medical equipment; local guesthouses serving trekkers have a reliable power source. The system has maintained 96.8% availability in its first year of operation.",
    stats: [
      { label: "Installed Capacity", value: "30 kW + 180 kWh" },
      { label: "Villages Electrified", value: "12 villages" },
      { label: "Population Benefiting", value: "1,400+ people" },
      { label: "System Availability", value: "96.8%" },
      { label: "Altitude", value: "3,400 m" },
      { label: "Porter Days", value: "160 porter-days" },
    ],
    solutions: ["off-grid-solar"],
    services: ["consulting", "engineering", "procurement", "asset-management"],
    tags: ["Off-Grid", "Community", "Remote", "Social Impact", "Mountain"],
  },

  {
    id: "lalitpur-commercial-portfolio",
    title: "Lalitpur Commercial Rooftop Portfolio",
    client: "Himalayan Properties Group",
    location: "Lalitpur, Bagmati Province",
    province: "Bagmati",
    district: "Lalitpur",
    capacity: "1.2 MW (12 sites)",
    status: "Completed",
    completedDate: "December 2023",
    duration: "28 weeks (phased)",
    coverImage: IMG.rooftop1,
    gallery: [
      { url: IMG.rooftop1,   caption: "Rooftop array on Himalayan Properties' flagship commercial building" },
      { url: IMG.rooftop2,   caption: "Inverter room installation — five 100 kW units" },
      { url: IMG.solarFarm4, caption: "Monitoring dashboard showing real-time generation across 12 sites" },
      { url: IMG.install2,   caption: "Panel mounting on complex roof with multiple HVAC units" },
    ],
    shortDescription: "Nepal's largest multi-site commercial rooftop solar portfolio — 12 buildings across Lalitpur delivering a combined 1.2 MW under a single O&M contract.",
    fullDescription: "Himalayan Properties Group engaged P.S. Trade & Suppliers to design, supply, install, and manage solar PV systems across their entire commercial property portfolio in Lalitpur District. The 12 buildings — comprising office complexes, retail centres, and mixed-use developments — had varying roof areas, structural conditions, and load profiles, requiring a tailored engineering design for each site.\n\nThe project was executed in three phases over 28 weeks, allowing buildings to remain fully operational throughout. A centralised SCADA monitoring platform was configured to give the client real-time visibility of generation, consumption, and export across all 12 sites from a single dashboard.",
    challenge: "Coordinating installation across 12 actively occupied commercial buildings — each with different tenant schedules, roof access procedures, and electrical systems — required meticulous project management. Structural assessments on two of the older buildings required roof reinforcement works before panel mounting could proceed.",
    outcome: "The combined portfolio generates approximately 1.5 million kWh per year — enough to supply 60% of the group's total electricity consumption across all buildings. Under the 5-year O&M contract, P.S. Trade & Suppliers guarantees a minimum 90% performance ratio across the portfolio.",
    stats: [
      { label: "Total Capacity", value: "1.2 MW" },
      { label: "Sites Covered", value: "12 buildings" },
      { label: "Annual Generation", value: "1.5M kWh/yr" },
      { label: "Grid Coverage", value: "60% of demand" },
      { label: "O&M Contract", value: "5 years" },
      { label: "Performance Guarantee", value: "90% PR" },
    ],
    solutions: ["on-grid-solar"],
    services: ["consulting", "engineering", "procurement", "asset-management"],
    tags: ["Commercial", "Rooftop", "Portfolio", "O&M", "Net Metering"],
  },

  {
    id: "chitwan-irrigation-cooperative",
    title: "Chitwan Irrigation Cooperative Solar Pumps",
    client: "Chitwan Krishi Sahakari Sanstha",
    location: "Bharatpur, Bagmati Province",
    province: "Bagmati",
    district: "Chitwan",
    capacity: "22 kW (10 pump systems)",
    status: "Completed",
    completedDate: "June 2023",
    duration: "8 weeks",
    coverImage: IMG.pump2,
    gallery: [
      { url: IMG.pump2,   caption: "Solar array powering submersible pump at cooperative field site" },
      { url: IMG.pump1,   caption: "Panel installation — portable, tiltable ground mounts for seasonal reorientation" },
      { url: IMG.install1, caption: "VFD control panel installation at pump station" },
      { url: IMG.solarFarm2, caption: "Completed installation across cooperative's main irrigation block" },
    ],
    shortDescription: "Ten solar-powered irrigation pump systems eliminating diesel costs for 150 member farmers of the Chitwan agricultural cooperative.",
    fullDescription: "The Chitwan Krishi Sahakari Sanstha — a cooperative of 150 member farmers — had been paying NPR 3.2 million per year in diesel fuel to power 10 irrigation pump sets across their 85-hectare collective landholding. With diesel prices rising and supply unreliable, the cooperative's board commissioned P.S. Trade & Suppliers to evaluate solar pumping as a replacement.\n\nOur team conducted a full hydrogeological and solar resource assessment, mapping each pump location, measuring static water levels, and sizing each solar array to match the pump's hydraulic requirements across Nepal's seasonal solar irradiance profile. Ten 2.2 kW pump systems were installed, each with a dedicated 3-panel monocrystalline array and MPPT-based VFD controller.",
    challenge: "The cooperative's 10 pump sites were spread across 85 hectares of varied terrain, with differing borewell depths (12–45 metres) and varying daily water volume requirements by season. Each system required individual hydraulic and electrical design — not a cookie-cutter approach.",
    outcome: "The diesel bill of NPR 3.2 million per year has been eliminated. The cooperative's members collectively save approximately NPR 1.8 million per year in net cash terms after accounting for system loan repayments. Reliable irrigation has enabled year-round cultivation across the cooperative's landholding, significantly improving crop yields.",
    stats: [
      { label: "Pump Systems", value: "10 units" },
      { label: "Total Capacity", value: "22 kW" },
      { label: "Area Irrigated", value: "85 hectares" },
      { label: "Farmers Benefiting", value: "150 members" },
      { label: "Diesel Eliminated", value: "NPR 3.2M/yr" },
      { label: "Payback Period", value: "4.2 years" },
    ],
    solutions: ["solar-water-pumping"],
    services: ["consulting", "engineering", "procurement"],
    tags: ["Agriculture", "Irrigation", "Cooperative", "Rural", "Water Pumping"],
  },

  {
    id: "pokhara-hotel-water-heater",
    title: "Pokhara Lakeside Hotel Solar Water Heating",
    client: "Fewa Palace Hotel & Resort",
    location: "Pokhara, Gandaki Province",
    province: "Gandaki",
    district: "Kaski",
    capacity: "8,000 L/day thermal",
    status: "Completed",
    completedDate: "February 2024",
    duration: "6 weeks",
    coverImage: IMG.mountain1,
    gallery: [
      { url: IMG.mountain1,  caption: "Evacuated tube collectors on hotel rooftop with Phewa Lake backdrop" },
      { url: IMG.rooftop2,   caption: "Insulated storage tank room — 4× 2,000 L pressurised tanks" },
      { url: IMG.install2,   caption: "Pipe installation through hotel mechanical room" },
      { url: IMG.mountain2,  caption: "Hotel exterior showing rooftop thermal collector installation" },
    ],
    shortDescription: "Large-scale solar thermal system delivering 8,000 litres of hot water daily to a 120-room lakeside hotel — eliminating LPG consumption entirely.",
    fullDescription: "Fewa Palace Hotel & Resort, a 120-room property on the shores of Pokhara's famous Phewa Lake, was consuming NPR 2.4 million worth of LPG gas annually to meet guest hot water demand. The hotel management engaged P.S. Trade & Suppliers to design and install a solar water heating system capable of meeting 100% of peak hot water demand during Nepal's main tourist seasons.\n\nThe system comprises 48 vacuum-tube collector panels with a combined aperture area of 96 m², connected to four 2,000-litre pressurised stainless steel storage tanks. A solar controller manages the forced-circulation pump, monitors collector and tank temperatures, and activates the backup electric element only when tank temperature falls below 55°C — which occurs on fewer than 25 days per year.",
    challenge: "The hotel's rooftop was already partially occupied by HVAC equipment and had limited structural load capacity. Our structural engineer worked closely with the original building contractor to identify safe zones for collector mounting within the roof's load-bearing capacity, requiring a non-standard distributed mounting configuration.",
    outcome: "LPG consumption has been reduced by 94% since commissioning. The remaining 6% covers a small boiler that heats the hotel's pool. The simple payback period on the investment is 2.8 years — one of the company's fastest payback projects, driven by the high LPG tariff and the hotel's large daily hot water volume.",
    stats: [
      { label: "Daily Capacity", value: "8,000 L/day" },
      { label: "Collector Area", value: "96 m²" },
      { label: "LPG Reduction", value: "94%" },
      { label: "Annual Saving", value: "NPR 2.26M/yr" },
      { label: "Payback", value: "2.8 years" },
      { label: "CO₂ Saved", value: "38 t/yr" },
    ],
    solutions: ["solar-water-heater"],
    services: ["consulting", "engineering", "procurement"],
    tags: ["Hospitality", "Solar Thermal", "Hot Water", "LPG Replacement"],
  },

  {
    id: "kathmandu-it-inverter-backup",
    title: "Kathmandu IT Company Critical Power Backup",
    client: "Summit Software Solutions Pvt. Ltd.",
    location: "Lalitpur, Bagmati Province",
    province: "Bagmati",
    district: "Lalitpur",
    capacity: "30 kVA / 60 kWh",
    status: "Completed",
    completedDate: "August 2023",
    duration: "3 weeks",
    coverImage: IMG.battery,
    gallery: [
      { url: IMG.battery,   caption: "60 kWh lithium-ion battery bank — rack-mounted in dedicated UPS room" },
      { url: IMG.install1,  caption: "30 kVA pure sine wave inverter installation" },
      { url: IMG.install2,  caption: "Automatic changeover panel wiring" },
      { url: IMG.team1,     caption: "Commissioning team testing switchover sequence" },
    ],
    shortDescription: "Mission-critical pure sine wave inverter backup system protecting 30 kVA of IT and server infrastructure with 8+ hours of autonomy during grid outages.",
    fullDescription: "Summit Software Solutions operates a 100-person software development office in Lalitpur, serving international clients across multiple time zones. Grid outages — even brief ones — caused server crashes, data loss, and costly recovery operations. A previous UPS system had proven inadequate: it provided only 45 minutes of backup and used modified sine wave output that caused overheating in the server rack power supplies.\n\nP.S. Trade & Suppliers designed a dedicated critical power backup room housing a 30 kVA pure sine wave inverter paired with a 60 kWh rack-mounted lithium-ion battery bank. The system is connected to a dedicated critical circuit covering all servers, networking equipment, workstations, and security systems — with automatic changeover in under 10 milliseconds.",
    challenge: "The client's server room had limited space and the lithium battery system needed to fit within a specific floor area while remaining serviceable. The design used a modular rack battery configuration that met the space constraints and allows individual battery modules to be replaced without system shutdown.",
    outcome: "Since installation, the system has handled 23 grid outage events — including one 6-hour outage during a monsoon storm — without a single second of server downtime. The client has not had a grid-outage-related data recovery incident since commissioning.",
    stats: [
      { label: "Inverter Capacity", value: "30 kVA" },
      { label: "Battery Capacity", value: "60 kWh Lithium" },
      { label: "Autonomy", value: "8+ hours" },
      { label: "Switchover Time", value: "<10 ms" },
      { label: "Outages Handled", value: "23 events" },
      { label: "Downtime Since", value: "Zero seconds" },
    ],
    solutions: ["inverter-backup"],
    services: ["consulting", "engineering", "procurement"],
    tags: ["IT", "Critical Power", "Backup", "Lithium Battery", "Commercial"],
  },

  {
    id: "lumbini-industrial-park-2mw",
    title: "Lumbini Industrial Park Solar Plant",
    client: "Lumbini Industrial Development Authority",
    location: "Rupandehi, Lumbini Province",
    province: "Lumbini",
    district: "Rupandehi",
    capacity: "2.5 MW",
    status: "Completed",
    completedDate: "September 2023",
    duration: "22 weeks",
    coverImage: IMG.solarFarm3,
    gallery: [
      { url: IMG.solarFarm3,  caption: "2.5 MW ground-mounted array — 8,500 panels on tracker mounts" },
      { url: IMG.solarFarm4,  caption: "Central inverter station during commissioning" },
      { url: IMG.solarFarm1,  caption: "Aerial view of completed installation across 14 acres" },
      { url: IMG.install1,    caption: "NEA 33 kV grid connection point commissioning" },
    ],
    shortDescription: "P.S. Trade & Suppliers' flagship project — a 2.5 MW grid-tied solar plant powering the Lumbini Industrial Park and exporting surplus to the NEA 33 kV grid.",
    fullDescription: "The Lumbini Industrial Park Solar Plant is the company's largest and most technically complex project to date. The Lumbini Industrial Development Authority engaged P.S. Trade & Suppliers following a competitive tender process, selecting our team on the basis of our technical proposal, local execution capability, and our lowest LCOE financial projection.\n\nThe 2.5 MW plant occupies 14 acres of land within the industrial park boundary, using 8,500 high-efficiency bifacial monocrystalline panels on single-axis tracker mounts to maximise annual generation. Power is collected through a DC combiner network and fed into four 625 kW central inverters, stepping up to 33 kV for direct connection to the NEA transmission grid.",
    challenge: "Single-axis tracker mounts require precise terrain grading and pile installation — a significant civil works scope in the waterlogged Terai soil conditions of Rupandehi. Our civil team worked through the monsoon season, adapting pile depths and spacing to achieve stable mounting in ground conditions that varied significantly across the 14-acre site.",
    outcome: "The plant generated 3.85 million kWh in its first year — 8% above the design yield target. The industrial park's tenants now pay a discounted electricity tariff, making the park more competitive for attracting new industrial investment. Excess generation is sold to NEA at the feed-in tariff rate.",
    stats: [
      { label: "Installed Capacity", value: "2.5 MW" },
      { label: "Panel Count", value: "8,500 bifacial" },
      { label: "Year 1 Generation", value: "3.85M kWh" },
      { label: "vs. Design Target", value: "+8% above target" },
      { label: "Site Area", value: "14 acres" },
      { label: "Grid Connection", value: "NEA 33 kV" },
    ],
    solutions: ["on-grid-solar"],
    services: ["consulting", "engineering", "procurement", "asset-management"],
    tags: ["Industrial", "Ground Mount", "Tracker", "Large Scale", "Grid Export"],
  },

  {
    id: "mustang-lodge-off-grid",
    title: "Mustang High-Altitude Lodge Cluster",
    client: "Upper Mustang Trek & Lodge Co.",
    location: "Lo Manthang, Gandaki Province",
    province: "Gandaki",
    district: "Mustang",
    capacity: "15 kW + 60 kWh",
    status: "Completed",
    completedDate: "May 2023",
    duration: "8 weeks (helicopter delivery)",
    coverImage: IMG.offGrid1,
    gallery: [
      { url: IMG.offGrid1,   caption: "Solar array at Lo Manthang — 3,900 m above sea level" },
      { url: IMG.mountain2,  caption: "Equipment delivered by chartered helicopter to Lo Manthang" },
      { url: IMG.mountain1,  caption: "Battery room installation in stone lodge building" },
      { url: IMG.install1,   caption: "Commissioning in sub-zero conditions — system design validated in cold weather" },
    ],
    shortDescription: "Remote off-grid solar system powering five high-altitude trekking lodges at Lo Manthang — delivered by helicopter at 3,900 metres elevation.",
    fullDescription: "Upper Mustang Trek & Lodge Co. operates five trekking lodges in the ancient walled city of Lo Manthang, at 3,900 metres elevation in the Upper Mustang restricted area. The lodges had relied on diesel generators for electricity — a costly and logistically difficult supply chain, given that diesel must be carried by mule from the nearest road head at Jomsom, a 4-day journey each way.\n\nP.S. Trade & Suppliers designed a 15 kW solar-plus-storage system specifically for the high-altitude, cold-weather conditions of Upper Mustang. All panels, lithium batteries, inverters, and mounting materials were chartered by helicopter from Jomsom to Lo Manthang — a 25-minute flight that replaced what would have been a 4-day mule journey.",
    challenge: "At 3,900 metres, winter temperatures drop to -20°C and the UV irradiance is significantly higher than at lower altitudes. Standard lead-acid batteries fail rapidly in these conditions. Our team specified lithium-iron-phosphate (LFP) batteries specifically rated for -20°C operation, and designed a thermally insulated battery room with passive heating from a small solar-powered mat to prevent cold-temperature performance degradation.",
    outcome: "Diesel consumption has been eliminated entirely during the 8-month trekking season and reduced to minimal levels in winter for emergency heating only. Lodge guests now have reliable electricity for lighting, phone charging, and Wi-Fi — a significant competitive advantage for attracting premium trekkers.",
    stats: [
      { label: "System Size", value: "15 kW + 60 kWh LFP" },
      { label: "Altitude", value: "3,900 m" },
      { label: "Lodges Served", value: "5 lodges" },
      { label: "Delivery Method", value: "Helicopter" },
      { label: "Diesel Saved", value: "100% (trekking season)" },
      { label: "Operating Temp.", value: "Down to -20°C" },
    ],
    solutions: ["off-grid-solar"],
    services: ["consulting", "engineering", "procurement"],
    tags: ["Tourism", "Off-Grid", "High Altitude", "Helicopter Delivery", "Extreme Environment"],
  },

  {
    id: "sunsari-agri-pump-programme",
    title: "Sunsari Agricultural Solar Pump Programme",
    client: "Sunsari District Agriculture Office",
    location: "Inaruwa, Koshi Province",
    province: "Koshi",
    district: "Sunsari",
    capacity: "45 kW (15 systems)",
    status: "Completed",
    completedDate: "April 2024",
    duration: "10 weeks",
    coverImage: IMG.pump1,
    gallery: [
      { url: IMG.pump1,    caption: "3 kW submersible pump array at farmer's field, Sunsari" },
      { url: IMG.pump2,    caption: "Panel installation on portable ground mounts" },
      { url: IMG.solarFarm2, caption: "Irrigation canal fed by solar pump — Sunsari plains" },
      { url: IMG.install2, caption: "VFD control unit installation at pump station" },
    ],
    shortDescription: "Government-supported programme installing 15 solar irrigation pump systems across Sunsari District — benefiting 400+ farming households.",
    fullDescription: "The Sunsari District Agriculture Office, with partial funding from the Ministry of Agriculture and Livestock Development (MoALD), commissioned P.S. Trade & Suppliers to design and install 15 solar irrigation pump systems across the Sunsari plains. The programme targeted smallholder farming communities where grid electricity was unavailable or too expensive for agricultural pumping loads.\n\nEach system was individually sized based on field area, borewell depth, and crop water requirements — ranging from 2 kW systems for single-household rice paddies to 5 kW systems serving small farmer group canals. All systems used submersible DC brushless pumps with MPPT solar charge controllers, requiring no batteries and operating directly from the panels during daylight hours.",
    challenge: "Fifteen different sites with fifteen different borewell depths, water table levels, and field areas required individual engineering designs rather than a standard template. Coordinating simultaneous installation across 15 sites across a 35 km radius required careful logistics and a split field team operating in two parallel groups.",
    outcome: "All 15 systems were installed and operational by the end of the Kharif (monsoon) cropping season, ensuring farmers had reliable irrigation for their main rice crop. The programme benefits over 400 farming households. Annual diesel savings across the 15 systems total NPR 1.4 million.",
    stats: [
      { label: "Systems Installed", value: "15 pumps" },
      { label: "Total Capacity", value: "45 kW" },
      { label: "Households Benefiting", value: "400+" },
      { label: "Districts Covered", value: "Sunsari" },
      { label: "Diesel Saved", value: "NPR 1.4M/yr" },
      { label: "Funding", value: "MoALD subsidised" },
    ],
    solutions: ["solar-water-pumping"],
    services: ["consulting", "engineering", "procurement"],
    tags: ["Agriculture", "Government", "Irrigation", "Smallholder", "Programme"],
  },

  {
    id: "dhangadhi-hospital-solar",
    title: "Dhangadhi Regional Hospital Solar + Backup",
    client: "Dhangadhi Sub-Metropolitan City Hospital",
    location: "Dhangadhi, Sudurpashchim Province",
    province: "Sudurpashchim",
    district: "Kailali",
    capacity: "80 kW + 120 kWh",
    status: "Ongoing",
    completedDate: "August 2024",
    duration: "16 weeks",
    coverImage: IMG.rooftop2,
    gallery: [
      { url: IMG.rooftop2,   caption: "Rooftop panels on hospital — installation in progress" },
      { url: IMG.battery,    caption: "120 kWh lithium battery backup — medical grade UPS integration" },
      { url: IMG.install1,   caption: "Hybrid inverter installation in hospital electrical room" },
      { url: IMG.solarFarm4, caption: "Design rendering of completed installation" },
    ],
    shortDescription: "Hybrid solar-plus-battery system providing on-grid generation and critical backup power to a busy regional hospital serving Nepal's far-western population.",
    fullDescription: "Dhangadhi Sub-Metropolitan City Hospital serves over 200 patients per day across emergency, surgical, maternity, and outpatient departments. The hospital's location in Sudurpashchim Province means grid outages are frequent — sometimes lasting 4–6 hours — putting critical medical equipment and life-support systems at risk.\n\nP.S. Trade & Suppliers designed a hybrid system combining 80 kW of rooftop solar with a 120 kWh lithium battery bank, managed by four 20 kW hybrid inverters. During normal grid operation, solar reduces the hospital's electricity bills. During outages, the battery bank automatically takes over within milliseconds — providing 6–8 hours of backup to the hospital's critical circuits.",
    challenge: "Medical equipment requires pure sine wave power with tight voltage and frequency tolerances — tighter than standard residential or commercial specifications. The inverters were selected specifically for their medical-grade output characteristics, and the system was designed with N+1 redundancy (four inverters, any three of which can carry full load) to eliminate single points of failure.",
    outcome: "Installation is currently 70% complete. The solar and inverter systems are operational; battery commissioning is underway. Early data shows the solar system is generating at 103% of the modelled yield. Full project completion and commissioning is expected in August 2024.",
    stats: [
      { label: "Solar Capacity", value: "80 kW" },
      { label: "Battery Backup", value: "120 kWh" },
      { label: "Backup Duration", value: "6–8 hours" },
      { label: "Inverter Redundancy", value: "N+1 (4 units)" },
      { label: "Early Yield", value: "103% of model" },
      { label: "Status", value: "70% complete" },
    ],
    solutions: ["on-grid-solar", "inverter-backup"],
    services: ["consulting", "engineering", "procurement"],
    tags: ["Healthcare", "Hybrid", "Critical Power", "Government", "Far West"],
  },

  {
    id: "janakpur-residential-estate",
    title: "Janakpur Residential Estate On-Grid Solar",
    client: "Mithila Housing Development Ltd.",
    location: "Janakpur, Madhesh Province",
    province: "Madhesh",
    district: "Dhanusha",
    capacity: "120 kW (40 homes)",
    status: "Completed",
    completedDate: "November 2023",
    duration: "12 weeks",
    coverImage: IMG.rooftop1,
    gallery: [
      { url: IMG.rooftop1,  caption: "Residential rooftop systems on Mithila Estate homes" },
      { url: IMG.install2,  caption: "3 kW per-home inverter installation in utility room" },
      { url: IMG.solarFarm2, caption: "Street-level view of completed estate with rooftop arrays" },
      { url: IMG.team1,     caption: "Handover ceremony with Mithila Housing management" },
    ],
    shortDescription: "On-grid solar across 40 newly built homes in Janakpur — developer-installed as a standard feature, reducing each household's electricity bill by 75%.",
    fullDescription: "Mithila Housing Development Ltd. is building a 120-home residential estate in Janakpur. The developer engaged P.S. Trade & Suppliers at the design stage to integrate solar PV as a standard feature across all homes in Phase 1 (40 homes) — positioning the estate as Nepal's first fully solar-ready residential development in Madhesh Province.\n\nEach home received a 3 kW on-grid system with a single-phase hybrid inverter, NEA net metering connection, and a monitoring app accessible to the homeowner. The systems were installed alongside standard electrical works during the construction phase — significantly reducing installation costs compared to retrofitting.",
    challenge: "Working within a live construction site required careful coordination with the main construction contractor to integrate solar infrastructure (conduit, cable routes, inverter room space, and roof mounting points) into the building structure at the right construction stages — not as an afterthought.",
    outcome: "All 40 Phase 1 homes are now operational, with homeowners averaging a 73% reduction in their NEA electricity bills. The solar feature has been a key selling point for Phase 2 of the estate (80 additional homes), which P.S. Trade & Suppliers will also supply.",
    stats: [
      { label: "Homes Equipped", value: "40 homes" },
      { label: "Per-Home System", value: "3 kW each" },
      { label: "Total Capacity", value: "120 kW" },
      { label: "Bill Reduction", value: "73% average" },
      { label: "Province First", value: "Madhesh Province" },
      { label: "Phase 2 Awarded", value: "80 more homes" },
    ],
    solutions: ["on-grid-solar"],
    services: ["consulting", "engineering", "procurement"],
    tags: ["Residential", "Developer", "Estate", "Net Metering", "Terai"],
  },

  {
    id: "birendranagar-telecom-offgrid",
    title: "Karnali Telecom Tower Solar Power",
    client: "Nepal Telecom – Western Region",
    location: "Birendranagar, Karnali Province",
    province: "Karnali",
    district: "Surkhet",
    capacity: "8 kW per tower (6 towers)",
    status: "Completed",
    completedDate: "January 2024",
    duration: "14 weeks",
    coverImage: IMG.offGrid1,
    gallery: [
      { url: IMG.offGrid1,    caption: "Solar array and telecom tower at high-altitude site, Karnali" },
      { url: IMG.mountain1,   caption: "Equipment transport to remote tower site" },
      { url: IMG.battery,     caption: "48V battery bank powering BTS equipment" },
      { url: IMG.install1,    caption: "Commissioning of MPPT charge controller and BTS interface" },
    ],
    shortDescription: "Six Nepal Telecom towers in remote Karnali Province converted from diesel-generator power to solar — dramatically cutting fuel costs and improving uptime.",
    fullDescription: "Nepal Telecom's six remote tower sites in Karnali Province were each running diesel generators 24/7 to power BTS (base transceiver station) equipment. Diesel delivery to these remote sites was costing NPR 4.8 million per year across the six towers — and generator failures during diesel supply disruptions caused coverage outages affecting tens of thousands of mobile subscribers.\n\nP.S. Trade & Suppliers designed solar-plus-battery systems for each tower, sized to provide 3 days of autonomy during extended cloudy periods — matching the typical diesel delivery interval. Each system uses 8 kW of solar panels, a 30 kWh VRLA battery bank (maintainable at site by Nepal Telecom's own technicians), and a ruggedised MPPT charge controller with remote monitoring.",
    challenge: "Nepal Telecom's BTS equipment operates on 48V DC with strict voltage tolerances. The solar charge controller interface had to maintain stable 48V DC output across all solar irradiance and battery state-of-charge conditions. The MPPT controllers were custom-configured for this interface, and each site's battery bank was specified with sufficient capacity to carry the BTS load through the local minimum-sunshine period.",
    outcome: "Diesel consumption across all six towers has been reduced by 92%. Generator hours are down from 8,760 per year to under 400 (emergency use only). Tower uptime has improved from 94.1% to 99.3% as fuel supply disruptions no longer cause outages.",
    stats: [
      { label: "Towers Converted", value: "6 sites" },
      { label: "Per-Tower Capacity", value: "8 kW + 30 kWh" },
      { label: "Diesel Reduction", value: "92%" },
      { label: "Annual Saving", value: "NPR 4.4M/yr" },
      { label: "Tower Uptime", value: "94.1% → 99.3%" },
      { label: "Autonomy", value: "3 days" },
    ],
    solutions: ["off-grid-solar"],
    services: ["consulting", "engineering", "procurement", "asset-management"],
    tags: ["Telecom", "Off-Grid", "Remote", "Critical Infrastructure", "Karnali"],
  },
];

export const PROVINCES: Province[] = [
  "Bagmati", "Gandaki", "Karnali", "Koshi", "Lumbini", "Madhesh", "Sudurpashchim",
];

export const SOLUTION_LABELS: Record<string, string> = {
  "on-grid-solar":       "On Grid Solar",
  "off-grid-solar":      "Off Grid Solar",
  "solar-water-pumping": "Solar Water Pumping",
  "solar-water-heater":  "Solar Water Heater",
  "inverter-backup":     "Inverter Backup",
};

export const SERVICE_LABELS: Record<string, string> = {
  consulting:         "Consulting",
  procurement:        "Procurement",
  engineering:        "Engineering",
  "asset-management": "Asset Management",
};
