import { Boxes, HardHat, Percent, Truck } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const points = [
  { icon: Truck, label: "Antar ke lokasi proyek" },
  { icon: Percent, label: "Harga grosir" },
  { icon: Boxes, label: "Stok lengkap" },
];

export default function BangunanHero() {
  return (
    <section className="relative overflow-hidden bg-stone-950 text-white">
      <div className="absolute inset-0 bg-linear-to-br from-stone-700/40 via-stone-950 to-amber-900/40" />
      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-24 md:py-32">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1.5 text-sm text-amber-200">
            <HardHat className="h-4 w-4" />
            Toko Bangunan & Material
          </span>

          <h1 className="mt-6 text-4xl font-bold md:text-6xl">
            Material kokoh untuk setiap proyek
          </h1>
          <p className="mt-4 text-lg text-stone-100/90">
            Semen, besi, cat, sampai keramik — pesan lewat WhatsApp, kami antar
            sampai lokasi proyek Anda.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#katalog"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-6 py-3 font-semibold text-stone-950 transition-colors hover:bg-amber-400">
              <Boxes className="h-5 w-5" />
              Lihat Material
            </a>
            <a
              href={waLink("Halo Toko Bangunan Kokoh, saya mau order material.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10">
              Order via WhatsApp
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-stone-100/90">
            {points.map((point) => (
              <span key={point.label} className="inline-flex items-center gap-2">
                <point.icon className="h-4 w-4 text-amber-300" />
                {point.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
