import { Clock, MapPin, ShoppingBag, Star, UtensilsCrossed } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const highlights = [
  { icon: Clock, label: "Buka tiap hari 07.00 – 21.00 WIB" },
  { icon: ShoppingBag, label: "Makan di tempat, bungkus & antar" },
  { icon: MapPin, label: "Jl. Raya Situbondo No. 8" },
];

export default function WarungHero() {
  return (
    <section className="relative overflow-hidden bg-stone-950 text-white">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-linear-to-br from-red-950/50 via-stone-950 to-orange-950/40" />

      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-sm font-medium text-red-300">
            <span aria-hidden="true">🍛</span>
            Masakan rumahan, harga bersahabat
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
            Warung Sederhana Jaya
          </h1>
          <p className="mt-4 text-lg text-stone-300">
            Nasi hangat, lauk segar, dan sambal dadakan setiap hari. Makan di
            tempat atau pesan antar via WhatsApp — kami masak setelah pesanan
            masuk.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink(
                "Halo Warung Sederhana Jaya, saya mau pesan makan untuk hari ini."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500">
              <UtensilsCrossed className="h-5 w-5" />
              Order via WhatsApp
            </a>
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white">
              Lihat Menu Harian
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-stone-300">
            {highlights.map((item) => (
              <span key={item.label} className="inline-flex items-center gap-2">
                <item.icon className="h-4 w-4 text-red-400" />
                {item.label}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-stone-800 pt-6 text-xs text-stone-400">
            <span className="inline-flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-red-400 text-red-400" />
              Rating 4.8 dari 210+ pelanggan setia
            </span>
            <span>Sejak 2014 melayani warga Situbondo</span>
          </div>
        </div>
      </div>
    </section>
  );
}
