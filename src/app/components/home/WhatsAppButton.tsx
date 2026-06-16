import { useState } from "react";
import { X, MessageCircle, Send } from "lucide-react";
import { useSiteData } from "../../context/SiteDataContext";

const WHATSAPP_NUMBER = "9779764569056"; // fallback, overridden by siteSettings
const WHATSAPP_MSG = encodeURIComponent(
  "Hello P.S. Trade & Suppliers! I'm interested in a free energy assessment for my property. Please get in touch."
);

const quickMessages = [
  "I'd like a free solar assessment",
  "What's the cost of a 5kW solar system?",
  "I want to know more about battery backup",
  "I need maintenance for an existing system",
];

export function WhatsAppButton() {
  const { siteSettings } = useSiteData();
  const [open, setOpen] = useState(false);
  const waNumber = siteSettings.whatsapp.replace(/\+/g, "");

  const sendMsg = (msg?: string) => {
    const text = msg ? encodeURIComponent(msg) : WHATSAPP_MSG;
    window.open(`https://wa.me/${waNumber}?text=${text}`, "_blank");
  };

  return (
    <>
      {/* Popup card */}
      <div
        className="fixed bottom-24 right-4 sm:right-6 z-50 transition-all duration-300 origin-bottom-right"
        style={{
          transform: open ? "scale(1) translateY(0)" : "scale(0.8) translateY(16px)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
        }}
      >
        <div
          className="rounded-2xl shadow-2xl overflow-hidden w-72"
          style={{ background: "white", border: "1px solid #e5e7eb" }}
        >
          {/* Header */}
          <div
            className="px-4 py-4 flex items-center gap-3"
            style={{ background: "#25D366" }}
          >
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <MessageCircle size={20} className="text-white" />
            </div>
            <div>
              <p
                className="text-sm font-bold text-white"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                P.S. Trade Support
              </p>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span className="text-xs text-white/85">Online now</span>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="ml-auto text-white/80 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Chat bubble */}
          <div className="p-4" style={{ background: "#f0faf4" }}>
            <div
              className="rounded-2xl rounded-tl-sm px-4 py-3 mb-1 inline-block shadow-sm"
              style={{ background: "white", maxWidth: "90%" }}
            >
              <p className="text-sm text-gray-700 leading-relaxed">
                👋 Hello! How can we help you with your energy needs today?
              </p>
            </div>
            <p className="text-[10px] text-gray-400 mt-1.5 ml-1">P.S. Trade · just now</p>
          </div>

          {/* Quick replies */}
          <div className="px-4 pb-3 pt-2 space-y-2">
            <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Quick enquiries</p>
            {quickMessages.map((msg) => (
              <button
                key={msg}
                onClick={() => sendMsg(msg)}
                className="w-full text-left text-xs px-3 py-2.5 rounded-xl border transition-all hover:bg-green-50 hover:border-green-300"
                style={{
                  borderColor: "#e5e7eb",
                  color: "#374151",
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                }}
              >
                {msg}
              </button>
            ))}
          </div>

          {/* Send custom message */}
          <div className="px-4 pb-4">
            <button
              onClick={() => sendMsg()}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-white text-sm font-bold transition-all hover:brightness-110"
              style={{ background: "#25D366", fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              <Send size={15} /> Open WhatsApp Chat
            </button>
          </div>
        </div>
      </div>

      {/* FAB button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-4 sm:right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
        style={{
          background: "#25D366",
          boxShadow: "0 4px 24px rgba(37,211,102,0.45)",
        }}
        aria-label="Chat on WhatsApp"
      >
        {open ? (
          <X size={22} className="text-white" />
        ) : (
          <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        )}
      </button>

      {/* Pulse ring — only when closed */}
      {!open && (
        <div
          className="fixed bottom-6 right-4 sm:right-6 z-40 w-14 h-14 rounded-full pointer-events-none animate-ping"
          style={{ background: "rgba(37,211,102,0.3)" }}
        />
      )}
    </>
  );
}
