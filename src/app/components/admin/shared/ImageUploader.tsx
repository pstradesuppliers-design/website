import { useState, useRef } from "react";
import { Upload, Link, X, ImageIcon } from "lucide-react";

interface ImageUploaderProps {
  value: string;
  onChange: (url: string) => void;
  label?: string;
  aspectRatio?: string;
}

export function ImageUploader({ value, onChange, label = "Image", aspectRatio = "16/9" }: ImageUploaderProps) {
  const [mode, setMode] = useState<"url" | "file">("url");
  const [urlInput, setUrlInput] = useState(value || "");
  const [dragging, setDragging] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      onChange(result);
      setUrlInput(result);
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) handleFile(file);
  };

  const applyUrl = () => {
    if (urlInput.trim()) onChange(urlInput.trim());
  };

  return (
    <div className="space-y-2">
      <label className="block text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--muted-foreground)" }}>
        {label}
      </label>

      {/* Preview */}
      {value ? (
        <div className="relative rounded-xl overflow-hidden bg-gray-100" style={{ aspectRatio }}>
          <img src={value} alt="Preview" className="w-full h-full object-cover" />
          <button
            onClick={() => { onChange(""); setUrlInput(""); }}
            className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/60 flex items-center justify-center hover:bg-black/80 transition-colors"
          >
            <X size={13} className="text-white" />
          </button>
        </div>
      ) : (
        <div
          className={`rounded-xl border-2 border-dashed flex flex-col items-center justify-center p-6 transition-colors cursor-pointer`}
          style={{
            aspectRatio,
            borderColor: dragging ? "var(--brand-primary)" : "var(--border)",
            background: dragging ? "var(--brand-primary-light)" : "var(--muted)",
          }}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
          onClick={() => fileRef.current?.click()}
        >
          <ImageIcon size={28} style={{ color: "var(--muted-foreground)" }} className="mb-2" />
          <p className="text-xs text-center" style={{ color: "var(--muted-foreground)" }}>
            Drop an image or click to browse
          </p>
        </div>
      )}

      {/* Mode tabs */}
      <div className="flex rounded-lg overflow-hidden border" style={{ borderColor: "var(--border)" }}>
        {(["url", "file"] as const).map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className="flex-1 flex items-center justify-center gap-1.5 py-1.5 text-xs font-semibold transition-colors"
            style={{
              background: mode === m ? "var(--brand-primary)" : "var(--card)",
              color: mode === m ? "#ffffff" : "var(--muted-foreground)",
            }}
          >
            {m === "url" ? <Link size={12} /> : <Upload size={12} />}
            {m === "url" ? "URL" : "Upload"}
          </button>
        ))}
      </div>

      {mode === "url" ? (
        <div className="flex gap-2">
          <input
            type="text"
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && applyUrl()}
            placeholder="https://images.unsplash.com/…"
            className="flex-1 rounded-lg px-3 py-2 text-xs border focus:outline-none focus:ring-2"
            style={{ borderColor: "var(--border)", background: "var(--input-background)" }}
          />
          <button
            onClick={applyUrl}
            className="px-3 py-2 rounded-lg text-xs font-bold text-white transition-all hover:opacity-90"
            style={{ background: "var(--brand-primary)" }}
          >
            Apply
          </button>
        </div>
      ) : (
        <button
          onClick={() => fileRef.current?.click()}
          className="w-full py-2 rounded-lg text-xs font-semibold border-2 border-dashed transition-all hover:opacity-70"
          style={{ borderColor: "var(--brand-primary)", color: "var(--brand-primary)" }}
        >
          Choose file from device
        </button>
      )}

      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); }}
      />
    </div>
  );
}
