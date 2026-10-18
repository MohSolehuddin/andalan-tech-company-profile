import { Clock, MessageCircle, ShoppingBag, Truck } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const highlights = [
  { icon: Clock, label: "Buka 24 Jam Nonstop" },
  { icon: ShoppingBag, label: "Harga Grosir & Eceran" },
  { icon: Truck, label: "Antar Cepat ke Rumah" },
];

export default function TokoMaduraHero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white">
      <div className="absolute inset-0 bg-linear-to-br from-emerald-900/40 via-neutral-950 to-green-950/50" />
      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-1.5 text-sm font-medium text-emerald-300">
            <span className="text-base" aria-hidden="true">🏪</span>
            Toko Madura 24 Jam
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
            Sembako Lengkap, Kebutuhan Pokok Siap Antar
          </h1>
          <p className="mt-4 text-lg text-emerald-50/90 leading-relaxed">
            Toko Madura Barokah siap melayani beras, minyak, gula, telur, dan
            kebutuhan harian Anda kapan saja. Harga grosir bersahabat, pesan mudah
            lewat WhatsApp!
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink("Halo Toko Madura Barokah, saya mau pesan sembako.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-neutral-950 transition-colors hover:bg-emerald-400">
              <MessageCircle className="h-5 w-5" />
              Pesan via WhatsApp
            </a>
            <a
              href="#katalog"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10">
              Lihat Katalog Sembako
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-emerald-100/90">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <span key={item.label} className="inline-flex items-center gap-2">
                  <Icon className="h-4 w-4 text-emerald-400" />
                  {item.label}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
