import { BadgePercent, Clock, MessageCircle, ShoppingBag, Store, Truck } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const trustPoints = [
  { icon: Truck, label: "Gratis ongkir radius 3 km" },
  { icon: BadgePercent, label: "Promo heboh setiap pekan" },
  { icon: Clock, label: "Buka tiap hari 07.00 – 22.00 WIB" },
];

export default function MinimarketHero() {
  return (
    <section className="relative overflow-hidden bg-red-950 text-white">
      <div className="absolute inset-0 bg-linear-to-br from-red-600/30 via-red-950 to-rose-900/40" />
      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-red-400/40 bg-red-400/10 px-4 py-1.5 text-sm text-red-200">
            <Store className="h-4 w-4 text-red-300" />
            Minimarket &amp; Kebutuhan Harian
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
            Belanja kebutuhan rumah tangga, praktis via WhatsApp
          </h1>
          <p className="mt-4 text-lg text-red-100/90">
            Minimart Sejahtera menyediakan sembako lengkap, produk segar, dan aneka
            kebutuhan harian dengan harga bersahabat. Pesan langsung dari rumah,
            kami antarkan tepat waktu.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink("Halo Minimart Sejahtera, saya mau order belanjaan harian.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-red-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-400">
              <MessageCircle className="h-5 w-5" />
              Pesan Antar via WhatsApp
            </a>
            <a
              href="#katalog"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/50">
              <ShoppingBag className="h-5 w-5" />
              Lihat Katalog Produk
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-red-100/90">
            {trustPoints.map((item) => (
              <span key={item.label} className="inline-flex items-center gap-2">
                <item.icon className="h-4 w-4 text-red-300" />
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
