import { useState } from "react";
import { Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import logoImg from "../../../imports/Screenshot_2026-06-12_at_19.38.22-removebg-preview.png";

const ADMIN_PASSWORD = "admin123";

interface AdminLoginProps {
  onLogin: () => void;
  onBackToSite: () => void;
}

export function AdminLogin({ onLogin, onBackToSite }: AdminLoginProps) {
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    if (password === ADMIN_PASSWORD) {
      onLogin();
    } else {
      setError("Incorrect password. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{ background: "linear-gradient(135deg, #0D0D0D 0%, #063d4a 60%, #0D0D0D 100%)" }}
    >
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <img src={logoImg} alt="P.S. Trade & Suppliers" className="w-20 h-20 object-contain mb-2" />
          <h1 className="text-white text-center" style={{ fontSize: "1.5rem", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
            P.S. Trade & Suppliers
          </h1>
          <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>Admin Dashboard</p>
        </div>

        {/* Card */}
        <div className="rounded-3xl p-8" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(12px)" }}>
          <div className="flex items-center gap-2 mb-6">
            <Lock size={16} style={{ color: "var(--brand-primary)" }} />
            <h2 className="text-white" style={{ fontSize: "1.1rem", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
              Sign In
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold mb-1.5" style={{ color: "rgba(255,255,255,0.6)" }}>
                Admin Password
              </label>
              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(""); }}
                  placeholder="Enter admin password"
                  autoFocus
                  className="w-full rounded-xl px-4 py-3 pr-11 text-sm focus:outline-none focus:ring-2"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: `1px solid ${error ? "#ef4444" : "rgba(255,255,255,0.15)"}`,
                    color: "#ffffff",
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShow((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 opacity-50 hover:opacity-100"
                  style={{ color: "#ffffff" }}
                >
                  {show ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {error && <p className="text-xs mt-1.5" style={{ color: "#f87171" }}>{error}</p>}
            </div>

            <button
              type="submit"
              disabled={loading || !password}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-white transition-all hover:opacity-90 disabled:opacity-50"
              style={{ background: "var(--brand-primary)", fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              {loading ? (
                <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
              ) : (
                <><ArrowRight size={16} /> Sign In</>
              )}
            </button>
          </form>

          <div className="mt-5 p-3 rounded-xl text-xs text-center" style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.4)" }}>
            Demo password: <span className="font-mono font-bold" style={{ color: "rgba(255,255,255,0.65)" }}>admin123</span>
          </div>
        </div>

        <button
          onClick={onBackToSite}
          className="w-full mt-4 text-sm text-center py-2 transition-all hover:opacity-80"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          ← Back to website
        </button>
      </div>
    </div>
  );
}
