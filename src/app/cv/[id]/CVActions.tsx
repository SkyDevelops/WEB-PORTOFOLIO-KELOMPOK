"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CVActions({ name }: { name: string }) {
  const [isGenerating, setIsGenerating] = useState(false);
  const router = useRouter();

  const handleDownloadPDF = async () => {
    setIsGenerating(true);
    try {
      const element = document.getElementById("cv-content");
      if (!element) return;

      // Import html2pdf dynamically to prevent SSR issues in Next.js
      // @ts-ignore
      const html2pdf = (await import("html2pdf.js")).default;

      // Configuration for PDF generation
      const opt = {
        margin: 0,
        filename: `CV_${name.replace(/\s+/g, "_")}.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          logging: false,
          letterRendering: true,
        },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      } as const; // 'as const' ensures type compatibility for image.type

      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error("PDF Generation Error:", error);
      alert("Gagal membuat PDF otomatis. Silakan gunakan tombol Print (Ctrl+P).");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="cv-actions-bar">
      {/* Primary Download Action */}
      <button onClick={handleDownloadPDF} disabled={isGenerating}>
        {isGenerating ? "⌛ Mohon Tunggu..." : "📥 Download PDF"}
      </button>

      {/* Browser Print Fallback */}
      <button onClick={() => window.print()} disabled={isGenerating}>
        🖨️ Print / Manual Save
      </button>

      {/* Navigation */}
      <button onClick={() => router.push("/")}>
        ← Kembali
      </button>

      <style>{`
        .cv-actions-bar {
          position: fixed;
          top: 0; left: 0; right: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          padding: 0.65rem 1rem;
          background: #0f1923;
          border-bottom: 1px solid rgba(0,200,200,0.2);
          z-index: 9999;
          font-family: sans-serif;
        }

        .cv-actions-bar button {
          padding: 0.5rem 1.2rem;
          background: #0d7377;
          border: none;
          color: white;
          font-weight: bold;
          cursor: pointer;
          border-radius: 4px;
          font-size: 0.9rem;
          letter-spacing: 0.5px;
          transition: all 0.2s;
        }

        .cv-actions-bar button:hover:not(:disabled) {
          background: #0f8a8f;
          transform: translateY(-1px);
        }

        .cv-actions-bar button:active:not(:disabled) {
          transform: translateY(0);
        }

        .cv-actions-bar button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .cv-actions-bar button:last-child {
          padding: 0.5rem 1.2rem;
          background: transparent;
          border: 1px solid #444;
          color: #aaa;
          font-weight: normal;
        }

        .cv-actions-bar button:last-child:hover {
          background: rgba(255,255,255,0.05);
          color: white;
        }

        @media print {
          .cv-actions-bar { display: none !important; }
        }
      `}</style>
    </div>
  );
}