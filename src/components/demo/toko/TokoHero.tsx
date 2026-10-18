import { BadgePercent, ShoppingBag, Truck } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const points = [
  { icon: Truck, label: "Kirim ke seluruh Indonesia" },
  { icon: BadgePercent, label: "Diskon member tiap bulan" },
  { icon: ShoppingBag, label: "Bayar fleksibel" },
];

export default function TokoHero() {
  return (
    <section className="relative overflow-hidden bg-indigo-950 text-white">
      <div className="absolute inset-0 bg-linear-to-br from-indigo-600/30 via-indigo-950 to-violet-900/40" />
      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-24 md:py-32">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-400/40 bg-indigo-400/10 px-4 py-1.5 text-sm text-indigo-200">
            <ShoppingBag className="h-4 w-4" />
            Toko Online UMKM
          </span>

          <h1 className="mt-6 text-4xl font-bold md:text-6xl">
            Belanja langsung dari toko lokal
          </h1>
          <p className="mt-4 text-lg text-indigo-50/90">
            Pilih produk, klik pesan, dan checkout lewat WhatsApp. Sesederhana itu
            — tanpa aplikasi tambahan.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#katalog"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-indigo-400">
              <ShoppingBag className="h-5 w-5" />
              Lihat Katalog
            </a>
            <a
              href={waLink("Halo TokoKita, saya mau tanya produk.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10">
              Tanya via WhatsApp
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-indigo-50/90">
            {points.map((point) => (
              <span key={point.label} className="inline-flex items-center gap-2">
                <point.icon className="h-4 w-4 text-indigo-300" />
                {point.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
