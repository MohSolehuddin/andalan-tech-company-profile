import { Anchor, ShieldCheck, Snowflake, Truck } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const points = [
  { icon: Anchor, label: "Tangkapan harian nelayan pesisir" },
  { icon: Snowflake, label: "Standar rantai dingin (cold-chain)" },
  { icon: Truck, label: "Kirim rutin ke Jabodetabek & Jawa" },
];

export default function PerikananHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-linear-to-br from-cyan-600/30 via-slate-950 to-blue-900/40" />
      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-24 md:py-32">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-1.5 text-sm font-medium text-cyan-200">
            <Anchor className="h-4 w-4" />
            Supplier Seafood & Hasil Laut Situbondo
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
            Ikan Segar Berkualitas Langsung dari Dermaga
          </h1>
          <p className="mt-4 text-lg text-slate-200">
            Menyediakan ikan laut segar, udang tambak vaname, cumi, dan produk olahan
            khas pesisir Situbondo. Harga grosir langsung dari nelayan dengan standar
            cold-chain terjaga.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#produk"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-cyan-400">
              <ShieldCheck className="h-5 w-5" />
              Lihat Katalog Produk
            </a>
            <a
              href={waLink("Halo Samudra Situbondo, saya ingin tanya harga grosir seafood dan ketersediaan stok hari ini.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10">
              Konsultasi via WhatsApp
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
            {points.map((point) => (
              <span key={point.label} className="inline-flex items-center gap-2">
                <point.icon className="h-4 w-4 text-cyan-400" />
                {point.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
