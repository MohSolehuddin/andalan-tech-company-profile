import { Coffee, Laptop, MapPin, Star, Wifi } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const highlights = [
  { icon: Wifi, label: "WiFi 100 Mbps" },
  { icon: Laptop, label: "Coworking & Stopkontak Luas" },
  { icon: Coffee, label: "Biji Kopi Single Origin" },
];

export default function KafeHero() {
  return (
    <section className="relative overflow-hidden bg-stone-950 text-white">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-linear-to-br from-amber-950/40 via-stone-950 to-stone-900" />

      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-600/30 bg-amber-600/10 px-4 py-1.5 text-sm font-medium text-amber-300">
            Specialty Coffee & Artisan Roastery
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
            Kopi Titik Temu
          </h1>
          <p className="mt-4 text-lg text-stone-300">
            Ruang temu hangat untuk cerita, karya, dan secangkir kopi pilihan
            Nusantara. Suasana tenang dengan fasilitas coworking lengkap dan
            pastry panggang segar setiap hari.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink(
                "Halo Kopi Titik Temu, saya ingin reservasi meja / tanya ketersediaan tempat."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-amber-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-500">
              <Coffee className="h-5 w-5" />
              Reservasi Meja via WA
            </a>
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white">
              Lihat Menu Kopi & Pastry
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-stone-300">
            {highlights.map((item) => (
              <span key={item.label} className="inline-flex items-center gap-2">
                <item.icon className="h-4 w-4 text-amber-400" />
                {item.label}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-stone-800 pt-6 text-xs text-stone-400">
            <span className="inline-flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              Rating 4.9 dari 450+ ulasan Google Maps
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-amber-400" />
              Jl. Cempaka No. 45, Situbondo
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
