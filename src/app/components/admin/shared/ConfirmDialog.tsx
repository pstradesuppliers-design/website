import { AlertTriangle, X } from "lucide-react";

interface ConfirmDialogProps {
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  confirmLabel?: string;
  danger?: boolean;
}

export function ConfirmDialog({
  title, message, onConfirm, onCancel,
  confirmLabel = "Delete", danger = true,
}: ConfirmDialogProps) {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}>
      <div className="rounded-2xl p-6 w-full max-w-md shadow-2xl" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
        <div className="flex items-start gap-4 mb-5">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: danger ? "#fef2f2" : "var(--brand-primary-light)" }}>
            <AlertTriangle size={20} style={{ color: danger ? "#ef4444" : "var(--brand-primary)" }} />
          </div>
          <div className="flex-1">
            <h4 className="mb-1" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{title}</h4>
            <p className="text-sm" style={{ color: "var(--muted-foreground)", lineHeight: 1.6 }}>{message}</p>
          </div>
          <button onClick={onCancel} className="flex-shrink-0 opacity-50 hover:opacity-100 transition-opacity">
            <X size={18} />
          </button>
        </div>
        <div className="flex gap-3 justify-end">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-xl text-sm font-semibold transition-all hover:opacity-80"
            style={{ background: "var(--muted)", color: "var(--foreground)", fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90"
            style={{ background: danger ? "#ef4444" : "var(--brand-primary)", fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
