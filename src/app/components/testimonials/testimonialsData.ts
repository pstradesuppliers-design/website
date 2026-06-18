export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  province: string;
  avatar: string;
  rating: number;
  savings: string;
  savingsLabel: string;
  text: string;
  system: string;
}

export const initialTestimonialsData: Testimonial[] = [
  {
    id: "ram-bahadur-shrestha",
    name: "Ram Bahadur Shrestha",
    role: "Managing Director",
    company: "Eastern Textile Mills Pvt. Ltd.",
    location: "Biratnagar",
    province: "Koshi",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&auto=format",
    rating: 5,
    savings: "NPR 8.6M/yr",
    savingsLabel: "reduction in electricity bill",
    text: "P.S. Trade & Suppliers transformed our factory's energy profile entirely. Our electricity bill dropped by NPR 8.6 million in the first year. The 500 kW ground-mounted system was commissioned on time, and the engineering team was meticulous. The monitoring system gives us complete visibility of our generation.",
    system: "500 kW Ground Mount Solar",
  },
  {
    id: "krishna-prasad-adhikari",
    name: "Krishna Prasad Adhikari",
    role: "Chairman",
    company: "Himalayan Properties Group",
    location: "Lalitpur",
    province: "Bagmati",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format",
    rating: 5,
    savings: "60% of demand",
    savingsLabel: "covered by solar across 12 buildings",
    text: "We entrusted P.S. Trade & Suppliers with our entire commercial property portfolio  12 buildings in Lalitpur. Their project management across all sites was exceptional. The 5-year O&M contract with a 90% performance guarantee gives us the certainty our lenders require. Outstanding partner.",
    system: "1.2 MW Portfolio, 12 Sites",
  },
  {
    id: "dr-sushila-poudel",
    name: "Dr. Sushila Poudel",
    role: "Medical Superintendent",
    company: "Dhangadhi Sub-Metropolitan City Hospital",
    location: "Dhangadhi",
    province: "Sudurpashchim",
    avatar: "https://images.unsplash.com/photo-1590650046871-92c887180603?w=80&h=80&fit=crop&auto=format",
    rating: 5,
    savings: "Zero downtime",
    savingsLabel: "in critical medical wards",
    text: "For a hospital, power reliability is a matter of life or death. The hybrid solar-plus-battery system installed by P.S. Trade & Suppliers has completely protected our surgical and ICU wards from grid outages. The N+1 inverter redundancy design shows they truly understand critical infrastructure.",
    system: "80 kW Solar + 120 kWh Battery",
  },
  {
    id: "binod-thapa-magar",
    name: "Binod Thapa Magar",
    role: "General Manager",
    company: "Fewa Palace Hotel & Resort",
    location: "Pokhara",
    province: "Gandaki",
    avatar: "https://images.unsplash.com/photo-1622675363311-3e1904dc1885?w=80&h=80&fit=crop&auto=format",
    rating: 5,
    savings: "94%",
    savingsLabel: "reduction in LPG consumption",
    text: "Our hotel was spending NPR 2.4 million a year on LPG for hot water. P.S. Trade & Suppliers designed a solar water heating system that eliminated 94% of that cost. Payback in under 3 years  far better than we expected. Our guests love the sustainability story too.",
    system: "8,000 L/day Solar Thermal",
  },
  {
    id: "sarita-sharma-cooperative",
    name: "Sarita Sharma",
    role: "Secretary",
    company: "Chitwan Krishi Sahakari Sanstha",
    location: "Bharatpur",
    province: "Bagmati",
    avatar: "https://images.unsplash.com/photo-1573497701240-345a300b8d36?w=80&h=80&fit=crop&auto=format",
    rating: 5,
    savings: "NPR 3.2M/yr",
    savingsLabel: "diesel costs eliminated",
    text: "150 farmer members were paying NPR 3.2 million a year in diesel just to irrigate. P.S. Trade & Suppliers designed individual pump systems for all 10 sites with different borewell depths  not a one-size-fits-all approach. Reliable irrigation has transformed our members' livelihoods.",
    system: "22 kW Solar Irrigation, 10 Pumps",
  },
];
