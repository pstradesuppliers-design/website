import { useState } from "react";
import { ArrowRight, Download, Sun, Loader2, ChevronRight, Check } from "lucide-react";

interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger" | "success" | "dark";
  size?: "sm" | "md" | "lg" | "xl";
  loading?: boolean;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  loading,
  icon,
  iconRight,
  fullWidth,
  children,
  disabled,
  className = "",
  ...props
}: BtnProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer select-none whitespace-nowrap";

  const sizes: Record<string, string> = {
    sm: "px-3.5 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
    xl: "px-8 py-4 text-lg",
  };

  const variants: Record<string, string> = {
    primary:
      "bg-[#049DBF] text-white hover:bg-[#037a96] active:scale-[0.98] focus-visible:ring-[#049DBF] shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed",
    secondary:
      "bg-[#F27127] text-white hover:bg-[#c4591a] active:scale-[0.98] focus-visible:ring-[#F27127] shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed",
    outline:
      "border-2 border-[#049DBF] text-[#049DBF] bg-transparent hover:bg-[#e6f6fa] active:scale-[0.98] focus-visible:ring-[#049DBF] disabled:opacity-50 disabled:cursor-not-allowed",
    ghost:
      "text-[#049DBF] bg-transparent hover:bg-[#e6f6fa] active:scale-[0.98] focus-visible:ring-[#049DBF] disabled:opacity-50 disabled:cursor-not-allowed",
    danger:
      "bg-red-500 text-white hover:bg-red-600 active:scale-[0.98] focus-visible:ring-red-500 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed",
    success:
      "bg-[#84BF49] text-white hover:bg-[#639436] active:scale-[0.98] focus-visible:ring-[#84BF49] shadow-sm disabled:opacity-50 disabled:cursor-not-allowed",
    dark:
      "bg-[#0D0D0D] text-white hover:bg-[#1a1a1a] active:scale-[0.98] focus-visible:ring-[#0D0D0D] shadow-sm disabled:opacity-50 disabled:cursor-not-allowed",
  };

  return (
    <button
      className={`${base} ${sizes[size]} ${variants[variant]} ${fullWidth ? "w-full" : ""} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? <Loader2 size={16} className="animate-spin" /> : icon}
      {children}
      {!loading && iconRight}
    </button>
  );
}

export function DSButtons() {
  const [loading, setLoading] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleLoad = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 1500);
  };

  return (
    <div className="space-y-10">
      {/* Variants */}
      <div>
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-4">Variants</p>
        <div className="flex flex-wrap gap-3 items-center">
          <Button variant="primary">Get a Quote</Button>
          <Button variant="secondary">View Projects</Button>
          <Button variant="outline">Learn More</Button>
          <Button variant="ghost">Read More</Button>
          <Button variant="success">Eco Certified</Button>
          <Button variant="dark">Contact Us</Button>
          <Button variant="danger">Delete</Button>
        </div>
      </div>

      {/* Sizes */}
      <div>
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-4">Sizes</p>
        <div className="flex flex-wrap gap-3 items-center">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra Large</Button>
        </div>
      </div>

      {/* With Icons */}
      <div>
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-4">With Icons</p>
        <div className="flex flex-wrap gap-3 items-center">
          <Button icon={<Sun size={16} />}>Solar Solutions</Button>
          <Button variant="secondary" iconRight={<ArrowRight size={16} />}>Our Projects</Button>
          <Button variant="outline" icon={<Download size={16} />}>Download Brochure</Button>
          <Button variant="success" iconRight={<ChevronRight size={16} />}>See Details</Button>
        </div>
      </div>

      {/* States */}
      <div>
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-4">States</p>
        <div className="flex flex-wrap gap-3 items-center">
          <Button loading={loading} onClick={handleLoad}>
            {loading ? "Processing…" : "Submit Request"}
          </Button>
          <Button disabled>Disabled</Button>
          <Button variant="outline" disabled>Disabled Outline</Button>
          <Button variant="success" onClick={handleClick} icon={clicked ? <Check size={16} /> : undefined}>
            {clicked ? "Submitted!" : "Quick Enquiry"}
          </Button>
        </div>
      </div>

      {/* Full width */}
      <div>
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-4">Full Width</p>
        <div className="max-w-sm space-y-3">
          <Button fullWidth size="lg" iconRight={<ArrowRight size={18} />}>
            Request a Free Energy Audit
          </Button>
          <Button variant="outline" fullWidth size="lg">
            Download Product Catalogue
          </Button>
        </div>
      </div>

      {/* Icon-only */}
      <div>
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-4">Icon Only</p>
        <div className="flex gap-3 items-center">
          {[
            { variant: "primary" as const, icon: <Sun size={18} /> },
            { variant: "secondary" as const, icon: <Download size={18} /> },
            { variant: "outline" as const, icon: <ArrowRight size={18} /> },
            { variant: "success" as const, icon: <Check size={18} /> },
          ].map((b, i) => (
            <button
              key={i}
              className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 ${
                b.variant === "primary"
                  ? "bg-[#049DBF] text-white hover:bg-[#037a96]"
                  : b.variant === "secondary"
                  ? "bg-[#F27127] text-white hover:bg-[#c4591a]"
                  : b.variant === "success"
                  ? "bg-[#84BF49] text-white hover:bg-[#639436]"
                  : "border-2 border-[#049DBF] text-[#049DBF] hover:bg-[#e6f6fa]"
              }`}
            >
              {b.icon}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
