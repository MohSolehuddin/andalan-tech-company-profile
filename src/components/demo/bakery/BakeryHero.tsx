import { Clock, Croissant, MapPin, Sparkles, Star } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const highlights = [
  {
    title: "Dipanggang Tiap Pagi",
    desc: "Batch hangat pukul 06.30 & 13.00 WIB setiap hari.",
  },
  {
    title: "100% Halal & Alami",
    desc: "Mentega wisman, ragi alami, tanpa bahan pengawet.",
  },
  {
    title: "Pesan Antar Cepat",
    desc: "Dikemas rapi & dikirim hangat langsung ke tempat Anda.",
  },
];

const BakeryHero = () => {
  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white">
      {/* Background ambient warmth with Tailwind v4 gradients */}
      <div className="absolute inset-0 bg-linear-to-b from-amber-950/60 via-neutral-950/90 to-neutral-950" />

      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-medium text-amber-300 md:text-sm">
            <Sparkles className="h-4 w-4" />
            <span>Toko Roti & Pastry Artisan • Situbondo</span>
            <span className="hidden sm:inline-flex items-center gap-1 border-l border-amber-500/30 pl-2">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              <span>4.9 (450+ ulasan)</span>
            </span>
          </div>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight md:text-6xl">
            Aroma Hangat, Lembutnya{" "}
            <span className="bg-linear-to-r from-amber-400 via-orange-300 to-amber-200 bg-clip-text text-transparent">
              Roti Nusantara
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base text-neutral-300 md:text-lg">
            Setiap gigitan dibuat dari resep tradisi dan bahan premium pilihan.
            Pesan sekarang via WhatsApp, kami kirimkan hangat ke meja Anda.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={waLink(
                "Halo Dapur Roti Nusantara, saya mau pesan roti hangat untuk hari ini."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-amber-500 to-orange-500 px-6 py-3.5 font-semibold text-neutral-950 shadow-sm transition-all hover:from-amber-400 hover:to-orange-400 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-500 sm:w-auto">
              <Croissant className="h-5 w-5" />
              Pesan Roti via WhatsApp
            </a>
            <a
              href="#katalog"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur-xs transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white sm:w-auto">
              Lihat Menu & Harga
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-neutral-400 md:text-sm">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-amber-400" />
              Buka Setiap Hari: 06.30 – 21.00 WIB
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-amber-400" />
              Jl. Diponegoro No. 88, Situbondo
            </span>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xs transition-colors hover:border-amber-500/30">
              <h2 className="text-base font-bold text-amber-300">{item.title}</h2>
              <p className="mt-1.5 text-xs text-neutral-300 md:text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BakeryHero;
