import { useState } from "react";
import { ChevronDown, Sun, Wrench, ShieldCheck } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

const faqData: Record<string, { icon: React.ReactNode; color: string; bg: string; items: FaqItem[] }> = {
  Solar: {
    icon: <Sun size={18} />,
    color: "#049DBF",
    bg: "#e6f6fa",
    items: [
      {
        q: "How much does a solar installation cost for a commercial building?",
        a: "Commercial solar installations typically range from KES 800,000 to KES 15,000,000+ depending on system size, roof type, and energy requirements. We provide a free site assessment and detailed quotation with full ROI modelling.",
      },
      {
        q: "What is the typical payback period for a solar system?",
        a: "Most commercial clients see a full return on investment within 3–5 years. With rising electricity costs and available financing options, many clients achieve positive cash flow from the first month of operation.",
      },
      {
        q: "Will my system work on cloudy days or during load shedding?",
        a: "Yes. Grid-tied systems with battery backup continue to supply power during load shedding. Off-grid and hybrid systems are designed to provide 24/7 power regardless of grid availability or weather conditions.",
      },
      {
        q: "How long does a solar installation take?",
        a: "Residential systems typically take 2–5 days. Commercial installations range from one week to six weeks depending on system size. We provide a detailed project timeline during the proposal stage.",
      },
    ],
  },
  Maintenance: {
    icon: <Wrench size={18} />,
    color: "#84BF49",
    bg: "#f0f7e7",
    items: [
      {
        q: "What is included in your maintenance contract?",
        a: "Our O&M contracts include quarterly panel cleaning, bi-annual electrical inspections, 24/7 remote SCADA monitoring, inverter firmware updates, and priority response within 4 hours for critical faults.",
      },
      {
        q: "How long do solar panels last?",
        a: "Quality Tier-1 solar panels are warranted for 25 years of performance, with an expected useful life of 30–35 years. Inverters typically require replacement after 10–15 years and are covered under extended warranty plans.",
      },
      {
        q: "Do you offer emergency support?",
        a: "Yes. Our technical support line is available 24/7 for emergencies. Critical fault response is guaranteed within 4 hours for clients on our Premium O&M plan, and 8 hours for Standard plan subscribers.",
      },
    ],
  },
  Certifications: {
    icon: <ShieldCheck size={18} />,
    color: "#F27127",
    bg: "#fef0e6",
    items: [
      {
        q: "Is P.S. Trade & Suppliers licensed by the Energy and Petroleum Regulatory Authority?",
        a: "Yes. We hold a current ERC Class A contractor licence for electrical installation works, a renewable energy installation certificate, and ISO 9001:2015 quality management certification.",
      },
      {
        q: "Are your installations eligible for carbon credits?",
        a: "Projects meeting the required thresholds are eligible for Verified Carbon Standard (VCS) credits. We assist clients with the documentation, measurement, and reporting required for Verra-registered carbon credit issuance.",
      },
    ],
  },
};

function StandaloneFaqItem({ item, index }: { item: FaqItem; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-border overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left hover:bg-muted/30 transition-colors"
      >
        <div className="flex items-start gap-3">
          <span
            className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold mt-0.5"
            style={{ background: "#e6f6fa", color: "#049DBF" }}
          >
            {index + 1}
          </span>
          <span className="text-sm font-semibold text-foreground">{item.q}</span>
        </div>
        <ChevronDown
          size={16}
          className="flex-shrink-0 mt-1 transition-transform duration-300"
          style={{ color: "#049DBF", transform: open ? "rotate(180deg)" : "none" }}
        />
      </button>
      <div style={{ maxHeight: open ? "200px" : "0px", overflow: "hidden", transition: "max-height 0.3s ease" }}>
        <div className="px-5 pb-4 pl-14">
          <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
        </div>
      </div>
    </div>
  );
}

function StandaloneFaq({ items }: { items: FaqItem[] }) {
  return (
    <>
      {items.map((item, i) => (
        <StandaloneFaqItem key={i} item={item} index={i} />
      ))}
    </>
  );
}

function FaqAccordion({ items, color, bg }: { items: FaqItem[]; color: string; bg: string }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <div
          key={i}
          className="rounded-xl border border-border overflow-hidden transition-all duration-200"
          style={{ borderColor: open === i ? color + "40" : "var(--border)" }}
        >
          <button
            className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-muted/30"
            style={{ background: open === i ? bg : "transparent" }}
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="text-sm font-semibold text-foreground leading-snug">{item.q}</span>
            <ChevronDown
              size={18}
              className="flex-shrink-0 mt-0.5 transition-transform duration-300"
              style={{
                color,
                transform: open === i ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </button>
          <div
            className="overflow-hidden transition-all duration-300"
            style={{ maxHeight: open === i ? "300px" : "0px" }}
          >
            <div className="px-5 pb-4">
              <div className="w-full h-px mb-4" style={{ background: color + "20" }} />
              <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function DSFaq() {
  const [activeTab, setActiveTab] = useState("Solar");

  return (
    <div className="space-y-10">
      {/* Tabbed FAQ */}
      <div>
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-4">Tabbed FAQ Section</p>
        <div className="rounded-2xl border border-border bg-card overflow-hidden">
          {/* Tab header */}
          <div className="border-b border-border flex">
            {Object.entries(faqData).map(([tab, data]) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="flex items-center gap-2 px-5 py-4 text-sm font-semibold border-b-2 transition-all -mb-px"
                style={{
                  borderBottomColor: activeTab === tab ? data.color : "transparent",
                  color: activeTab === tab ? data.color : "var(--muted-foreground)",
                }}
              >
                <span style={{ color: activeTab === tab ? data.color : "var(--muted-foreground)" }}>
                  {data.icon}
                </span>
                {tab}
              </button>
            ))}
          </div>
          {/* FAQ content */}
          <div className="p-6">
            <FaqAccordion
              items={faqData[activeTab].items}
              color={faqData[activeTab].color}
              bg={faqData[activeTab].bg}
            />
          </div>
        </div>
      </div>

      {/* Stacked / standalone FAQ */}
      <div>
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-4">Standalone FAQ (no tabs)</p>
        <div className="max-w-2xl space-y-2">
          <StandaloneFaq items={faqData.Solar.items.slice(0, 3)} />
        </div>
      </div>

      {/* CTA below FAQ */}
      <div className="max-w-2xl rounded-2xl p-6 flex items-center justify-between gap-4 flex-wrap"
        style={{ background: "linear-gradient(135deg, #049DBF15 0%, #84BF4915 100%)", border: "1px solid #049DBF30" }}>
        <div>
          <h4 className="mb-1">Still have questions?</h4>
          <p className="text-sm text-muted-foreground">Our energy specialists are available Monday–Friday, 8 AM – 6 PM EAT.</p>
        </div>
        <div className="flex gap-3">
          <button
            className="text-sm font-semibold px-4 py-2 rounded-lg transition-all hover:bg-[#e6f6fa]"
            style={{ color: "#049DBF" }}
          >
            Call Us
          </button>
          <button
            className="text-sm font-semibold px-4 py-2 rounded-lg text-white transition-all hover:bg-[#037a96]"
            style={{ background: "#049DBF" }}
          >
            Live Chat
          </button>
        </div>
      </div>
    </div>
  );
}
