export type SolutionId =
  | "on-grid-solar"
  | "off-grid-solar"
  | "solar-water-pumping"
  | "solar-water-heater"
  | "inverter-backup";

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
  capacity: string;
  image: string;
  tag: string;
}

export interface Benefit {
  icon: string;
  title: string;
  description: string;
}

export interface Solution {
  id: SolutionId;
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
  specs: { label: string; value: string }[];
}

export const solutions: Solution[] = [
  {
    id: "on-grid-solar",
    title: "On Grid Solar System",
    shortTitle: "On Grid Solar",
    tagline: "Custom-sized solar panel installations for homes, businesses, and institutions.",
    description:
      "A solar panel is an electronic device made up of a collection of solar cells that absorb sunlight and convert it directly into usable electricity. We design and install both grid-tied systems for urban and commercial properties and standalone off-grid systems for remote locations without reliable access to the national grid.",
    heroImage:
      "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=1600&h=900&fit=crop&auto=format",
    accentColor: "var(--brand-primary)",
    accentLight: "var(--brand-primary-light)",
    tag: "Most Popular",
    overview: [
      "On-grid solar systems are the most widely adopted solution for homes and businesses connected to Nepal's national electricity grid (NEA). During daylight hours, your solar panels generate electricity that powers your building directly. Any surplus energy is exported to the grid, and you receive credit on your next utility bill  a process known as net metering.",
      "Without the cost of battery storage, on-grid systems deliver the fastest return on investment of any solar option, typically paying back within 5–7 years. They are ideal for urban and peri-urban locations with reliable grid access and consistent daytime energy consumption.",
    ],
    specs: [
      { label: "Capacity Range", value: "1 kW – 5 MW" },
      { label: "Panel Warranty", value: "25 years output" },
      { label: "Inverter Warranty", value: "10 years" },
      { label: "Typical Payback", value: "5–7 years" },
      { label: "System Lifespan", value: "25+ years" },
      { label: "Net Metering", value: "NEA Approved" },
    ],
    benefits: [
      {
        icon: "TrendingDown",
        title: "Reduce Electricity Bills by Up to 90%",
        description:
          "Solar generation offsets daytime consumption directly, slashing monthly NEA bills dramatically  often to near zero for well-sized residential systems.",
      },
      {
        icon: "RefreshCw",
        title: "Net Metering  Earn From Excess Power",
        description:
          "Surplus electricity exported to the NEA grid earns bill credits under Nepal's net metering policy, improving overall system economics.",
      },
      {
        icon: "Zap",
        title: "No Battery Required",
        description:
          "The grid acts as your backup and storage medium, eliminating battery costs and maintenance while still giving you full energy coverage.",
      },
      {
        icon: "Leaf",
        title: "Reduce Carbon Emissions",
        description:
          "Displacing fossil-fuel-generated electricity with clean solar energy directly reduces your carbon footprint  contributing to Nepal's net-zero goals.",
      },
      {
        icon: "Shield",
        title: "Low Maintenance",
        description:
          "Grid-tied systems have fewer components than off-grid setups. Annual panel cleaning and a periodic inverter check are typically all that's needed.",
      },
      {
        icon: "BarChart2",
        title: "Real-Time Monitoring",
        description:
          "Smart inverters and our monitoring portal let you track generation, consumption, and export data in real time from any device.",
      },
    ],
    process: [
      {
        number: "01",
        title: "Site Survey & Load Analysis",
        description:
          "Our engineers visit your property to assess roof orientation, shading, structural integrity, and existing electrical load to design the optimal system.",
      },
      {
        number: "02",
        title: "System Design & Proposal",
        description:
          "We design a customised PV system sized to your consumption profile and budget, with a detailed proposal including financial projections.",
      },
      {
        number: "03",
        title: "Net Metering Application",
        description:
          "We handle the full NEA net metering application on your behalf  paperwork, inspections, and approval  so you don't have to.",
      },
      {
        number: "04",
        title: "Installation & Commissioning",
        description:
          "Certified technicians install your panels, mounting structure, inverter, and grid-tie equipment to the highest safety standards.",
      },
      {
        number: "05",
        title: "Grid Connection & Testing",
        description:
          "We coordinate the final NEA grid connection, run full system tests, and confirm proper net metering operation before handover.",
      },
      {
        number: "06",
        title: "After-Sales Support",
        description:
          "Annual maintenance visits, 24/7 remote monitoring alerts, and a dedicated support line ensure your system performs for decades.",
      },
    ],
    projects: [
      {
        title: "Kathmandu Commercial Complex",
        location: "Lalitpur, Bagmati Province",
        capacity: "150 kW Grid-Tied",
        image:
          "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&h=400&fit=crop&auto=format",
        tag: "Commercial",
      },
      {
        title: "Pokhara Hotel Resort",
        location: "Pokhara, Gandaki Province",
        capacity: "80 kW On-Grid",
        image:
          "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=600&h=400&fit=crop&auto=format",
        tag: "Hospitality",
      },
      {
        title: "Biratnagar Industrial Facility",
        location: "Biratnagar, Koshi Province",
        capacity: "500 kW Grid-Tied",
        image:
          "https://images.unsplash.com/photo-1559302504-64aae6ca6890?w=600&h=400&fit=crop&auto=format",
        tag: "Industrial",
      },
    ],
    faqs: [
      {
        question: "What happens during a power outage if I have an on-grid system?",
        answer:
          "Standard on-grid (grid-tied) inverters shut down automatically during a grid outage for safety reasons  to protect lineworkers. If backup power during outages is important to you, we recommend adding a battery backup or switching to a hybrid system.",
      },
      {
        question: "How does net metering work in Nepal?",
        answer:
          "Under NEA's net metering policy, any excess electricity your system exports to the grid is recorded by a bidirectional meter. This export is offset against your consumption from the grid. If you export more than you consume in a billing period, the credit carries forward to the next month.",
      },
      {
        question: "What size system do I need for my home?",
        answer:
          "System sizing depends on your monthly electricity consumption (kWh), roof area, and budget. A typical Nepali household consuming 200–300 kWh per month would require a 3–5 kW system. Our engineers will calculate the optimal size during the free site survey.",
      },
      {
        question: "Do I need permission from NEA to install on-grid solar?",
        answer:
          "Yes  you need to apply for a net metering connection with NEA before exporting to the grid. P.S. Trade & Suppliers manages this entire process on your behalf as part of our installation package.",
      },
      {
        question: "How long does the installation process take?",
        answer:
          "For residential systems (up to 10 kW), installation typically takes 1–3 days. Larger commercial systems may take 1–3 weeks. The NEA net metering approval process can add 2–6 weeks depending on the region.",
      },
    ],
  },

  {
    id: "off-grid-solar",
    title: "Off Grid Solar System",
    shortTitle: "Off Grid Solar",
    tagline: "Standalone solar systems for remote locations without reliable grid access.",
    description:
      "Off-grid solar systems operate entirely independently of the national grid, combining solar panels with battery storage to provide 24/7 reliable electricity to locations where grid access is unavailable, unreliable, or uneconomical.",
    heroImage:
      "https://images.unsplash.com/photo-1763809676935-921c5821f908?w=1600&h=900&fit=crop&auto=format",
    accentColor: "var(--brand-green)",
    accentLight: "var(--brand-green-light)",
    tag: "Rural & Remote",
    overview: [
      "Nepal's rugged Himalayan geography means millions of households and businesses remain far from the national electricity grid. Off-grid solar systems are the proven answer  delivering clean, reliable power to remote villages, mountain lodges, agricultural sites, and rural health posts without the need for costly grid extension.",
      "These systems pair high-efficiency solar panels with lithium-ion or sealed lead-acid battery banks, managed by an intelligent charge controller and inverter. The battery stores energy generated during daylight for use at night or during cloudy periods, ensuring continuous power supply.",
    ],
    specs: [
      { label: "Capacity Range", value: "200 W – 500 kW" },
      { label: "Battery Options", value: "Lithium-ion / VRLA" },
      { label: "Autonomy", value: "1–5 days backup" },
      { label: "Charge Controller", value: "MPPT Technology" },
      { label: "Panel Warranty", value: "25 years output" },
      { label: "Application", value: "Homes, Villages, Lodges" },
    ],
    benefits: [
      {
        icon: "Wifi",
        title: "True Energy Independence",
        description:
          "No grid connection required. Your system generates, stores, and supplies its own electricity  completely independent of NEA infrastructure.",
      },
      {
        icon: "MapPin",
        title: "Access for Remote Locations",
        description:
          "Ideal for mountain villages, rural farms, highland lodges, and off-road communities where grid extension would cost lakhs per kilometer.",
      },
      {
        icon: "Moon",
        title: "24/7 Power Including Nights",
        description:
          "Battery storage ensures continuous power through the night and during cloudy days  not just when the sun is shining.",
      },
      {
        icon: "DollarSign",
        title: "Eliminate Fuel Generator Costs",
        description:
          "Replace expensive, noisy diesel generators with silent solar-battery systems that have near-zero operating costs.",
      },
      {
        icon: "Settings",
        title: "Scalable & Expandable",
        description:
          "Start with a smaller system and add panels or battery capacity as your energy needs grow  without redesigning from scratch.",
      },
      {
        icon: "Cloud",
        title: "Designed for Nepal's Climate",
        description:
          "Systems are engineered for Nepal's elevation ranges, seasonal solar irradiance patterns, temperature extremes, and monsoon conditions.",
      },
    ],
    process: [
      {
        number: "01",
        title: "Remote Site Assessment",
        description:
          "Our engineers conduct a thorough site assessment  including solar resource data, load inventory, and local conditions  to design an accurately sized system.",
      },
      {
        number: "02",
        title: "Load Analysis & System Sizing",
        description:
          "We catalogue every electrical appliance and lighting circuit to precisely size the panels, battery bank, inverter, and charge controller.",
      },
      {
        number: "03",
        title: "Equipment Procurement",
        description:
          "Certified panels, batteries, MPPT charge controllers, and inverters are sourced from approved manufacturers and quality-checked before dispatch.",
      },
      {
        number: "04",
        title: "Logistics & Site Mobilisation",
        description:
          "For remote locations, we coordinate transport by road, porter, or helicopter as required to deliver equipment to the installation site.",
      },
      {
        number: "05",
        title: "Installation & Commissioning",
        description:
          "Trained field technicians install and commission the full system  including wiring, mounting, battery setup, and protection devices.",
      },
      {
        number: "06",
        title: "Training & Handover",
        description:
          "We train local caretakers on system operation, basic maintenance, and troubleshooting before handover, with ongoing remote support.",
      },
    ],
    projects: [
      {
        title: "Mustang Mountain Lodge Cluster",
        location: "Mustang, Gandaki Province",
        capacity: "15 kW Off-Grid",
        image:
          "https://images.unsplash.com/photo-1682760344243-45faeb1b9736?w=600&h=400&fit=crop&auto=format",
        tag: "Tourism",
      },
      {
        title: "Humla Village Electrification",
        location: "Humla, Karnali Province",
        capacity: "30 kW Community",
        image:
          "https://images.unsplash.com/photo-1667714045096-f77b914af4da?w=600&h=400&fit=crop&auto=format",
        tag: "Community",
      },
      {
        title: "Rolwaling Rural Health Post",
        location: "Dolakha, Bagmati Province",
        capacity: "5 kW Off-Grid",
        image:
          "https://images.unsplash.com/photo-1731772013413-eb9bc3a3f312?w=600&h=400&fit=crop&auto=format",
        tag: "Healthcare",
      },
    ],
    faqs: [
      {
        question: "How many days of autonomy (backup) can an off-grid system provide?",
        answer:
          "System autonomy depends on battery capacity and daily load. We typically design for 1–3 days of battery backup. For critical facilities like health posts or telecoms, we design for 3–5 days to account for extended cloudy periods.",
      },
      {
        question: "Can off-grid systems work in Nepal's high-altitude and cold climates?",
        answer:
          "Yes. We select panels and batteries specifically rated for the temperature ranges found in Nepal's hill and mountain regions. Lithium-ion batteries perform significantly better than lead-acid in cold weather and are our preferred choice for high-altitude installations.",
      },
      {
        question: "What happens during the monsoon when sunlight is limited?",
        answer:
          "We design systems with the monsoon season in mind  using Nepal-specific solar irradiance data to ensure adequate generation even during the low-sun months of June through August. Battery autonomy is sized to bridge multi-day cloudy periods.",
      },
      {
        question: "Can I add more capacity later as my energy needs grow?",
        answer:
          "Yes. Off-grid systems can be expanded by adding more solar panels (if the charge controller supports it) or additional battery modules. We design with future expansion in mind and document upgrade pathways at handover.",
      },
      {
        question: "How long do the batteries last?",
        answer:
          "Lithium-ion batteries typically last 8–15 years depending on charge/discharge cycles and temperature management. Lead-acid VRLA batteries last 5–8 years. We factor replacement costs into our long-term financial projections.",
      },
    ],
  },

  {
    id: "solar-water-pumping",
    title: "Solar Water Pumping System",
    shortTitle: "Solar Water Pump",
    tagline: "Solar-powered irrigation and drinking water pumps for rural and agricultural use.",
    description:
      "Solar-powered water pumping systems use photovoltaic panels to run submersible or surface pumps  delivering irrigation water, drinking water, and livestock water without diesel fuel or grid electricity.",
    heroImage:
      "https://images.unsplash.com/photo-1630672607721-48e0a0187a92?w=1600&h=900&fit=crop&auto=format",
    accentColor: "var(--brand-secondary)",
    accentLight: "var(--brand-secondary-light)",
    tag: "Agriculture & Water",
    overview: [
      "Water scarcity and high pumping costs are among the most pressing challenges facing Nepal's agriculture sector and rural communities. Solar water pumping systems eliminate dependence on diesel-powered pumps and unreliable grid electricity  using clean solar energy to run efficient DC or AC pumps directly from photovoltaic panels.",
      "These systems are engineered for drip irrigation, flood irrigation, livestock watering, drinking water supply for villages, and industrial water requirements. With no fuel costs and minimal maintenance, solar pumps typically pay for themselves within 3–5 years while serving communities reliably for 20+ years.",
    ],
    specs: [
      { label: "Pump Types", value: "Submersible / Surface" },
      { label: "Flow Rate", value: "Up to 200 m³/day" },
      { label: "Head Range", value: "Up to 200 m" },
      { label: "Power Range", value: "0.5 kW – 75 kW" },
      { label: "Panel Warranty", value: "25 years output" },
      { label: "Applications", value: "Irrigation, Drinking, Industrial" },
    ],
    benefits: [
      {
        icon: "Droplets",
        title: "Zero Fuel Costs",
        description:
          "Replace diesel or petrol with free sunlight. Solar pumps eliminate recurring fuel expenses  the largest operating cost of conventional pumping systems.",
      },
      {
        icon: "Sprout",
        title: "Boost Agricultural Productivity",
        description:
          "Reliable, affordable irrigation enables year-round cultivation and multi-cropping  significantly increasing farm yields and household income.",
      },
      {
        icon: "Volume2",
        title: "Silent & Emission-Free Operation",
        description:
          "Solar pumps operate silently without exhaust fumes, improving the working environment for farmers and rural communities.",
      },
      {
        icon: "Clock",
        title: "Low Maintenance",
        description:
          "With no engine, no fuel system, and minimal moving parts, solar pumps require far less maintenance than diesel alternatives  reducing downtime.",
      },
      {
        icon: "Waves",
        title: "Suitable for Deep & Shallow Wells",
        description:
          "Our range covers shallow surface pumps for ponds and rivers, and deep submersible pumps for borewells up to 200 metres deep.",
      },
      {
        icon: "Globe",
        title: "Ideal for Off-Grid Agriculture",
        description:
          "Works in remote farms and fields far from the grid  anywhere the sun shines, crops can be irrigated with clean energy.",
      },
    ],
    process: [
      {
        number: "01",
        title: "Hydro & Load Survey",
        description:
          "We assess your water source (borewell, river, pond), measure static water level, calculate total dynamic head, and determine daily water volume requirements.",
      },
      {
        number: "02",
        title: "Pump & Panel Sizing",
        description:
          "Engineers select the appropriate pump type, motor power, and solar array size to deliver your required water volume reliably across all seasons.",
      },
      {
        number: "03",
        title: "Civil Works Coordination",
        description:
          "Where required, we coordinate borehole drilling, rising main installation, and tank foundation construction with approved civil contractors.",
      },
      {
        number: "04",
        title: "Equipment Supply & Delivery",
        description:
          "All certified pumps, panels, mounting structures, and control panels are procured and delivered to your site, inspected and ready for installation.",
      },
      {
        number: "05",
        title: "Installation & Testing",
        description:
          "Technicians install the pump, submersible cable, panels, and VFD/control unit  then test for correct flow rate, pressure, and protection settings.",
      },
      {
        number: "06",
        title: "Handover & Maintenance Plan",
        description:
          "We hand over with a full operating manual, train the operator, and set up an annual maintenance schedule to keep the system performing optimally.",
      },
    ],
    projects: [
      {
        title: "Chitwan Irrigation Cooperative",
        location: "Chitwan, Bagmati Province",
        capacity: "22 kW, 80 m³/hr",
        image:
          "https://images.unsplash.com/photo-1630672607721-48e0a0187a92?w=600&h=400&fit=crop&auto=format",
        tag: "Irrigation",
      },
      {
        title: "Bara Drinking Water Project",
        location: "Bara, Madhesh Province",
        capacity: "7.5 kW Community Supply",
        image:
          "https://images.unsplash.com/photo-1559302504-64aae6ca6890?w=600&h=400&fit=crop&auto=format",
        tag: "Drinking Water",
      },
      {
        title: "Sunsari Agri Farm Complex",
        location: "Sunsari, Koshi Province",
        capacity: "15 kW Drip Irrigation",
        image:
          "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=600&h=400&fit=crop&auto=format",
        tag: "Agriculture",
      },
    ],
    faqs: [
      {
        question: "Does a solar pump work on cloudy days?",
        answer:
          "Solar pumps slow down on heavily overcast days and stop at night, which is expected behaviour for direct-coupled systems. For critical water needs, we add a small battery buffer or design a storage tank sized to hold 1–2 days' water requirement, ensuring continuous supply.",
      },
      {
        question: "What is the difference between a submersible and a surface pump?",
        answer:
          "Submersible pumps are installed inside the borewell or deep water source and push water up. Surface pumps sit above ground and draw water up by suction  suitable for shallow wells and ponds (typically up to 8 m suction head). We recommend the right type based on your water source depth.",
      },
      {
        question: "Can solar pumps be used for drip and sprinkler irrigation?",
        answer:
          "Yes. Solar pumps can be paired with drip, sprinkler, or flood irrigation systems. For drip and sprinkler systems, a Variable Frequency Drive (VFD) is recommended to maintain consistent pressure regardless of varying solar input.",
      },
      {
        question: "What happens to my existing diesel pump? Can I use it as backup?",
        answer:
          "Absolutely. Your existing diesel pump can be kept as a backup during extended monsoon cloudy periods or for maintenance situations. We can also wire an automatic changeover switch to seamlessly switch between solar and diesel modes.",
      },
      {
        question: "How much water can a solar pump deliver per day?",
        answer:
          "Output depends on pump size, solar irradiance, and head. As a guide, a 5 kW solar pump at 50 m head can deliver approximately 25–40 m³ of water per day in Nepal's average solar conditions  sufficient to irrigate 2–5 hectares depending on crop type.",
      },
    ],
  },

  {
    id: "solar-water-heater",
    title: "Solar Water Heater",
    shortTitle: "Solar Water Heater",
    tagline: "Rooftop thermal systems for hot water without the electricity bill.",
    description:
      "Solar water heating systems use solar thermal collectors to capture the sun's heat and transfer it to water  providing free hot water for domestic, commercial, and industrial applications without electricity or gas.",
    heroImage:
      "https://images.unsplash.com/photo-1724041875334-0a6397111c7e?w=1600&h=900&fit=crop&auto=format",
    accentColor: "#f59e0b",
    accentLight: "#fef3c7",
    tag: "Thermal Energy",
    overview: [
      "Solar water heaters are among the most cost-effective renewable energy technologies available  delivering hot water at near-zero operating cost by harnessing the sun's thermal energy. Unlike solar PV panels that generate electricity, solar water heaters directly capture heat from sunlight using evacuated tube or flat-plate collectors.",
      "In Nepal's climate  with over 300 sunny days per year in most regions  solar water heaters can meet 70–90% of a household's hot water needs year-round. Hotels, hospitals, and industrial facilities with large hot water demands benefit even more dramatically, with payback periods as short as 2–4 years.",
    ],
    specs: [
      { label: "Collector Types", value: "Evacuated Tube / Flat Plate" },
      { label: "Capacity Range", value: "100 L – 50,000 L/day" },
      { label: "Temperature", value: "Up to 80°C" },
      { label: "Solar Fraction", value: "70–90% of hot water need" },
      { label: "Tank Options", value: "Pressurised / Non-pressurised" },
      { label: "Backup", value: "Electric element optional" },
    ],
    benefits: [
      {
        icon: "Flame",
        title: "Slash Water Heating Costs by 80%",
        description:
          "Water heating accounts for 20–30% of a household's energy bill. Solar water heaters eliminate the vast majority of this cost  often within 2–4 years.",
      },
      {
        icon: "Thermometer",
        title: "Consistent Hot Water Supply",
        description:
          "Insulated storage tanks retain heat for 24+ hours, ensuring hot water is available in the morning and evening  not just when the sun is out.",
      },
      {
        icon: "Building2",
        title: "Ideal for Hotels & Hospitality",
        description:
          "Nepal's booming trekking and hospitality sector demands large volumes of hot water daily. Solar water heaters are the most economical solution for lodges, hotels, and resorts.",
      },
      {
        icon: "Wind",
        title: "Works in Cold Mountain Climates",
        description:
          "Evacuated tube collectors are specifically designed to work efficiently even in sub-zero ambient temperatures  ideal for Nepal's high-altitude regions.",
      },
      {
        icon: "Wrench",
        title: "Minimal Maintenance",
        description:
          "No moving parts in the collector. Periodic descaling of the tank and annual collector inspection are typically all that's required over a 20+ year lifespan.",
      },
      {
        icon: "Leaf",
        title: "Reduce LPG & Electric Geysers",
        description:
          "Replace LPG gas geysers or electric immersion heaters with solar thermal  cutting both energy costs and indoor air pollution from combustion.",
      },
    ],
    process: [
      {
        number: "01",
        title: "Hot Water Needs Assessment",
        description:
          "We assess your daily hot water volume requirements, usage patterns, existing system, and roof or ground space to design the right solution.",
      },
      {
        number: "02",
        title: "Collector & Tank Sizing",
        description:
          "Engineers calculate the collector area and storage tank capacity required to meet your hot water demand with the target solar fraction.",
      },
      {
        number: "03",
        title: "System Design",
        description:
          "A complete system schematic is produced  including collector placement, pipe routing, pump (for forced-circulation systems), and backup heater integration.",
      },
      {
        number: "04",
        title: "Installation",
        description:
          "Our plumbing and solar technicians install the collectors, insulated pipes, storage tank, and controls  typically within 1–2 days for residential systems.",
      },
      {
        number: "05",
        title: "Commissioning & Testing",
        description:
          "The system is pressure-tested, filled, and operated through a full cycle to confirm correct flow, heat transfer, and thermostat settings.",
      },
      {
        number: "06",
        title: "After-Sales Care",
        description:
          "Annual descaling and inspection visits ensure peak performance. We provide a helpline and spare parts supply throughout the system's lifetime.",
      },
    ],
    projects: [
      {
        title: "Thamel Boutique Hotel",
        location: "Kathmandu, Bagmati Province",
        capacity: "5,000 L/day System",
        image:
          "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&h=400&fit=crop&auto=format",
        tag: "Hospitality",
      },
      {
        title: "Annapurna Base Camp Lodge",
        location: "Kaski, Gandaki Province",
        capacity: "2,000 L/day Off-Grid",
        image:
          "https://images.unsplash.com/photo-1682760344243-45faeb1b9736?w=600&h=400&fit=crop&auto=format",
        tag: "Tourism",
      },
      {
        title: "Biratnagar Hospital Complex",
        location: "Biratnagar, Koshi Province",
        capacity: "10,000 L/day Thermal",
        image:
          "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=600&h=400&fit=crop&auto=format",
        tag: "Healthcare",
      },
    ],
    faqs: [
      {
        question: "Will a solar water heater work in Nepal's monsoon season?",
        answer:
          "Solar water heaters still generate useful heat on overcast and lightly cloudy days  just at reduced efficiency. All our systems include an optional electric backup element that activates automatically when the solar input is insufficient, ensuring you always have hot water.",
      },
      {
        question: "What is the difference between evacuated tube and flat-plate collectors?",
        answer:
          "Evacuated tube collectors use glass vacuum tubes that insulate the absorber from ambient temperature  making them significantly more effective in cold weather and on cloudy days. Flat-plate collectors are simpler and cheaper but lose more heat in cold or windy conditions. We recommend evacuated tubes for Nepal's hilly and mountain regions.",
      },
      {
        question: "How large a system do I need for my family?",
        answer:
          "A rough guide: allow 50–75 litres of tank capacity per person per day. A family of 4 would need a 200–300 litre system, paired with a 2–4 m² collector area. For hotels and guesthouses, we size based on room count, bathroom fixtures, and daily occupancy patterns.",
      },
      {
        question: "Can I integrate a solar water heater with my existing electric geyser?",
        answer:
          "Yes  this is the most common installation. The solar storage tank pre-heats the water before it enters your existing electric geyser. In most cases, the geyser rarely needs to activate, saving up to 80% on your water heating electricity costs immediately.",
      },
      {
        question: "Is the system pressurised? Does it work with rooftop gravity-fed water?",
        answer:
          "We supply both pressurised and non-pressurised systems. Non-pressurised systems work perfectly with rooftop gravity-fed water tanks  the most common setup in Nepali homes and hotels. Pressurised systems are used where mains pressure is available.",
      },
    ],
  },

  {
    id: "inverter-backup",
    title: "Inverter Backup System",
    shortTitle: "Inverter Backup",
    tagline: "Uninterrupted power during outages and load shedding for homes and businesses.",
    description:
      "Inverter backup systems provide seamless, instant power when the grid fails  protecting homes, businesses, and critical equipment from Nepal's frequent load-shedding and grid outages through intelligently managed battery storage.",
    heroImage:
      "https://images.unsplash.com/photo-1742899273038-67ff67477663?w=1600&h=900&fit=crop&auto=format",
    accentColor: "#8b5cf6",
    accentLight: "#f5f3ff",
    tag: "Power Backup",
    overview: [
      "Despite significant improvements to Nepal's grid, power outages and load-shedding remain a reality across much of the country  disrupting households, damaging sensitive equipment, and costing businesses real money in lost productivity. Inverter backup systems are the immediate, practical solution.",
      "Modern pure sine wave inverters paired with lithium-ion or sealed lead-acid batteries provide seamless switchover in milliseconds  computers, televisions, lights, and appliances continue operating without interruption. Whether you need 2 hours of backup or 24-hour autonomy, we design systems scaled precisely to your critical loads and backup duration requirements.",
    ],
    specs: [
      { label: "Inverter Types", value: "Pure Sine Wave / Hybrid" },
      { label: "Capacity Range", value: "500 VA – 200 kVA" },
      { label: "Battery Options", value: "Lithium-ion / VRLA / Tubular" },
      { label: "Switchover Time", value: "<10 milliseconds" },
      { label: "Input Voltage", value: "Single & Three Phase" },
      { label: "Solar Input", value: "Optional MPPT charging" },
    ],
    benefits: [
      {
        icon: "Zap",
        title: "Instant, Seamless Switchover",
        description:
          "Pure sine wave inverters switch from grid to battery in under 10 milliseconds  fast enough that computers, routers, and sensitive electronics never notice the grid has failed.",
      },
      {
        icon: "Clock",
        title: "Hours to Days of Backup",
        description:
          "Battery capacity is sized to your backup duration requirement  from 2 hours for essential lights and phones, to 24+ hours for business-critical operations.",
      },
      {
        icon: "Sun",
        title: "Optional Solar Charging",
        description:
          "Hybrid inverters can charge batteries from solar panels during the day, reducing grid dependence and extending backup duration  combining the best of both technologies.",
      },
      {
        icon: "Shield",
        title: "Protect Sensitive Equipment",
        description:
          "Clean pure sine wave output protects computers, medical equipment, and variable-speed motor loads that are damaged by the modified sine wave of cheaper inverters.",
      },
      {
        icon: "BarChart2",
        title: "Smart Battery Management",
        description:
          "Built-in Battery Management Systems (BMS) optimise charge cycles, prevent overcharge and deep discharge, and extend battery life to its rated cycle count.",
      },
      {
        icon: "Settings",
        title: "Scalable & Expandable",
        description:
          "Modular designs allow battery capacity to be expanded later. Inverters can be paralleled for larger loads  making your investment future-proof.",
      },
    ],
    process: [
      {
        number: "01",
        title: "Load Inventory & Priority Assessment",
        description:
          "We list all loads you want to back up, identify critical vs. non-critical circuits, and determine the total kVA requirement and daily energy consumption.",
      },
      {
        number: "02",
        title: "Inverter & Battery Selection",
        description:
          "Engineers select the inverter capacity (VA rating) and battery bank size (kWh) to deliver your required backup duration for the selected critical loads.",
      },
      {
        number: "03",
        title: "System Design & Wiring Diagram",
        description:
          "A complete electrical schematic is produced for approval  showing inverter placement, battery configuration, changeover arrangement, and protection devices.",
      },
      {
        number: "04",
        title: "Installation by Certified Electricians",
        description:
          "Our licensed electricians install the inverter, battery bank, changeover panel, and wiring to Nepal Electricity Authority safety standards.",
      },
      {
        number: "05",
        title: "Testing & Commissioning",
        description:
          "We simulate a grid outage, verify seamless switchover, test all protected circuits, and confirm battery charging operation before handover.",
      },
      {
        number: "06",
        title: "Warranty & Annual Maintenance",
        description:
          "Inverters come with manufacturer warranties of 2–5 years. We offer annual battery inspection and load testing to maintain system reliability.",
      },
    ],
    projects: [
      {
        title: "Kathmandu IT Company Office",
        location: "Lalitpur, Bagmati Province",
        capacity: "30 kVA / 60 kWh Lithium",
        image:
          "https://images.unsplash.com/photo-1650785652040-5a2fc88ce902?w=600&h=400&fit=crop&auto=format",
        tag: "Commercial",
      },
      {
        title: "Pokhara Diagnostic Centre",
        location: "Pokhara, Gandaki Province",
        capacity: "20 kVA Medical Grade",
        image:
          "https://images.unsplash.com/photo-1742899273038-67ff67477663?w=600&h=400&fit=crop&auto=format",
        tag: "Healthcare",
      },
      {
        title: "Butwal Residential Complex",
        location: "Butwal, Lumbini Province",
        capacity: "10 kVA / 20 kWh per Unit",
        image:
          "https://images.unsplash.com/photo-1559302504-64aae6ca6890?w=600&h=400&fit=crop&auto=format",
        tag: "Residential",
      },
    ],
    faqs: [
      {
        question: "What is the difference between a pure sine wave and modified sine wave inverter?",
        answer:
          "Pure sine wave inverters produce the same clean AC waveform as grid electricity  safe for all appliances including computers, medical equipment, and variable-speed motors. Modified sine wave inverters are cheaper but can damage sensitive electronics, cause motors to overheat, and produce audible hum from appliances. We exclusively supply pure sine wave inverters.",
      },
      {
        question: "How long will my backup last during a power outage?",
        answer:
          "Backup duration depends entirely on battery capacity and the load connected. As an example: a 10 kWh battery bank powering 1 kW of critical loads (lights, fans, a computer, and a router) will last approximately 8–10 hours. We calculate this precisely for your specific loads during the design phase.",
      },
      {
        question: "Can I run my air conditioner on a backup inverter?",
        answer:
          "Yes, but air conditioners have high start-up current (typically 3–5× running current) and significant running loads. Backing up an air conditioner requires a larger inverter and battery bank, which increases cost substantially. We recommend assessing whether the AC is truly critical for backup, or designing a separate smaller circuit for essential loads only.",
      },
      {
        question: "How long do the batteries take to recharge after an outage?",
        answer:
          "Recharge time depends on battery capacity and charger current. A typical installation with a 50% depth of discharge recharges in 4–8 hours from the grid. Adding a solar charging capability can accelerate daytime recharging and reduce grid energy consumption during recharge.",
      },
      {
        question: "Is it possible to upgrade my existing inverter system?",
        answer:
          "In many cases, yes. We can assess your existing inverter and, if compatible, add lithium-ion batteries to replace aging lead-acid units  often doubling usable capacity in the same space. Alternatively, we can replace the inverter with a modern hybrid unit that adds solar charging capability.",
      },
    ],
  },
];

export const solutionsList = solutions.map((s) => ({
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
