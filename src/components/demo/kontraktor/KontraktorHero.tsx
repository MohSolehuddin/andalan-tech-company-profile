import { HardHat, CheckCircle2, MessageCircle, Ruler, ShieldCheck } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const trustMetrics = [
  { label: "80+ Proyek Selesai Tepat Waktu" },
  { label: "Gratis Konsultasi & Survei Lokasi" },
  { label: "Garansi Pemeliharaan 6 Bulan" },
];

const KontraktorHero = () => {
  return (
    <section className="relative overflow-hidden bg-stone-950 text-white">
      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/40 bg-yellow-500/10 px-4 py-1.5 text-xs font-semibold text-yellow-300 md:text-sm">
            <HardHat className="h-4 w-4 text-yellow-400" />
            Jasa Bangun &amp; Renovasi Bangunan Terpercaya
          </span>

          <h1 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-6xl">
            Bangun Karya Kontraktor
          </h1>
          <p className="mt-4 text-base leading-relaxed text-stone-300 sm:text-lg">
            Wujudkan hunian idaman dan bangunan komersial berkualitas dengan struktur kokoh,
            rancangan arsitektur modern, estimasi RAB transparan, dan pengerjaan bergaransi.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink("Halo Bangun Karya Kontraktor, saya ingin konsultasi rencana bangun / renovasi bangunan.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-yellow-500 px-6 py-3 font-semibold text-stone-950 transition-colors hover:bg-yellow-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-yellow-400">
              <MessageCircle className="h-5 w-5" />
              Konsultasi WhatsApp Gratis
            </a>
            <a
              href="#estimasi-rab"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-stone-700 bg-stone-900/60 px-6 py-3 font-semibold text-stone-200 transition-colors hover:bg-stone-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-stone-400">
              <Ruler className="h-5 w-5 text-yellow-400" />
              Simulasi Estimasi RAB
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {trustMetrics.map((item) => (
              <div key={item.label} className="flex items-center gap-2 rounded-lg border border-stone-800 bg-stone-900/40 p-2.5 text-xs text-stone-300">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-yellow-400" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KontraktorHero;
