import { CheckCircle2, LayoutGrid, MessageCircle, Sofa } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const trustMetrics = [
  { label: "Konsep 3D Sebelum Eksekusi" },
  { label: "Estimasi Biaya Transparan" },
  { label: "Tim Desainer & Tukang Berpengalaman" },
];

export default function InteriorHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-24 md:py-32">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-rose-500/40 bg-rose-500/10 px-4 py-1.5 text-sm font-medium text-rose-300">
            <Sofa className="h-4 w-4" />
            Desain Interior &amp; Arsitektur Hunian
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
            Ruang Interior Studio
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            Wujudkan rumah, kantor, dan kafe impian dengan desain yang nyaman dan
            personal. Mulai dari konsep, gambar 3D, sampai pendampingan tukang —
            semua bisa dikonsultasikan via WhatsApp.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink("Halo Ruang Interior Studio, saya ingin konsultasi desain interior.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-rose-500 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-rose-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
              <MessageCircle className="h-5 w-5" />
              Konsultasi Gratis via WhatsApp
            </a>
            <a
              href="#portofolio"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
              <LayoutGrid className="h-5 w-5 text-rose-400" />
              Lihat Portofolio
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
            {trustMetrics.map((item) => (
              <span key={item.label} className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-rose-400" />
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
