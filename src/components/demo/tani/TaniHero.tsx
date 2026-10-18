import { CheckCircle2, MessageCircle, Sprout, Wheat } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const trustBadges = [
  { label: "500+ Petani Mitra Situbondo" },
  { label: "100% Produk Resmi & Berizin" },
  { label: "Antar Langsung Sampai Sawah" },
];

export default function TaniHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background ambient gradients without external images */}
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-green-600/15 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-lime-500/15 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-green-500/40 bg-green-500/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-green-300">
            <Sprout className="h-4 w-4 text-lime-400" />
            Pusat Sarana Pertanian &amp; Perkebunan Situbondo
          </span>

          <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white">
            Tani Makmur Situbondo
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Penyedia sarana produksi tani terlengkap untuk petani Situbondo. Tersedia benih unggul bersertifikat, pupuk berkualitas, obat perlindungan tanaman, hingga sewa alsintan dengan layanan antar langsung ke sawah Anda.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink("Halo Tani Makmur Situbondo, saya mau tanya stok pupuk dan benih untuk lahan saya.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-green-600 to-lime-600 px-6 py-3 font-semibold text-white shadow-md transition-all hover:from-green-500 hover:to-lime-500">
              <MessageCircle className="h-5 w-5" />
              Pesan via WhatsApp
            </a>
            <a
              href="#katalog"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10">
              <Wheat className="h-5 w-5 text-lime-400" />
              Lihat Katalog Produk
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
            {trustBadges.map((badge) => (
              <span key={badge.label} className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-lime-400 shrink-0" />
                {badge.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
