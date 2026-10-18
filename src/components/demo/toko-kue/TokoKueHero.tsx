import { Cake, Clock, Heart, Sparkles, Truck } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const highlights = [
  { icon: Sparkles, text: "Bahan Premium Tanpa Pengawet" },
  { icon: Clock, text: "Bake Fresh Setiap Pagi" },
  { icon: Truck, text: "Pengiriman Aman Same-Day" },
];

export default function TokoKueHero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white">
      <div className="absolute inset-0 bg-linear-to-br from-pink-950/70 via-neutral-950 to-rose-950/50" />

      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-pink-400/40 bg-pink-500/10 px-4 py-1.5 text-sm font-medium text-pink-300">
            <Cake className="h-4 w-4" />
            Manis Kue &amp; Dessert Homemade
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight md:text-6xl">
            Kelezatan Manis untuk Setiap Momen Bahagia
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-neutral-300">
            Koleksi kue ulang tahun custom, dessert box lembut lumer, dan brownies
            fudgy istimewa. Dibuat fresh setiap hari dengan cinta dan resep
            terbaik untuk hari spesial Anda.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink(
                "Halo Manis Kue & Dessert, saya mau order kue untuk hari ini."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-pink-500 px-6 py-3.5 font-semibold text-white shadow-sm transition-all hover:bg-pink-600 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-pink-500">
              <Heart className="h-5 w-5 fill-current" />
              Pesan via WhatsApp
            </a>
            <a
              href="#katalog"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white">
              Lihat Katalog Menu
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/5 px-3.5 py-2.5 text-xs text-neutral-300 backdrop-blur-xs">
                <item.icon className="h-4 w-4 text-pink-400 shrink-0" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
