import { Check, ChevronRight, MapPin, Star, UtensilsCrossed } from "lucide-react";

const HERO_IMG =
  "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1600&q=60";

const STATS = [
  { value: "20", label: "Cabang Aktif & Nyaman" },
  { value: "100%", label: "Daging Sapi Segar Pilihan" },
  { value: "12 Jam", label: "Rebusan Kaldu Sumsum Asli" },
  { value: "28 Tahun", label: "Menjaga Resep Sejak 1998" },
];

const TRUST_POINTS = [
  "100% Daging Sapi Segar",
  "Kaldu Sumsum 12 Jam",
  "20 Cabang Ber-AC & Higienis",
];

const BaksoHero = () => {
  return (
    <section className="relative overflow-hidden bg-stone-50 border-b border-stone-200">
      {/* Top Banner Navigation Anchors */}
      <div className="bg-stone-900 text-stone-200 text-xs py-2 px-4 border-b border-stone-800">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-medium text-stone-300">
              Resep Otentik Sejak 1998 • Bersertifikat Halal LPPOM MUI ID3511000192837
            </span>
          </div>
          <nav className="hidden sm:flex items-center gap-4 text-xs font-semibold text-stone-300">
            <a href="#cabang" className="hover:text-amber-400 transition-colors">
              20 Cabang
            </a>
            <a href="#menu" className="hover:text-amber-400 transition-colors">
              Menu Andalan
            </a>
            <a href="#katering" className="hover:text-amber-400 transition-colors">
              Katering Acara
            </a>
            <a href="#ulasan" className="hover:text-amber-400 transition-colors">
              Kisah & Ulasan
            </a>
          </nav>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Copy Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-100 border border-red-200 text-red-900 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-red-600" />
              <span>Jaringan Warung Bakso Terpercaya Jawa Timur & Jabodetabek</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 leading-[1.2]">
              Bakso Daging Sapi Asli dengan Kuah Kaldu Sumsum Tulang yang Gurih Alami.
            </h1>

            <p className="text-base text-stone-700 leading-relaxed max-w-2xl">
              Dibuat dari 100% daging sapi segar pilihan tanpa bahan pengawet kimiawi.
              Nikmati kelezatan bakso urat berdaging tebal dan kuah kaldu sapi yang dimasak perlahan
              selama 12 jam, kini tersebar di <strong>20 cabang</strong> siap melayani Anda.
            </p>

            {/* Trust points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
              {TRUST_POINTS.map((text) => (
                <div
                  key={text}
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-stone-200 shadow-xs">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span className="text-xs font-semibold text-stone-800">{text}</span>
                </div>
              ))}
            </div>

            {/* CTAs: 1 primary + 1 secondary */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#cabang"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-red-700 hover:bg-red-800 text-white font-semibold text-sm shadow-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-600">
                <MapPin className="w-4 h-4" />
                <span>Temukan 20 Cabang Terdekat</span>
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-stone-100 text-stone-800 font-semibold text-sm border border-stone-300 shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-stone-600">
                <UtensilsCrossed className="w-4 h-4 text-stone-600" />
                <span>Lihat Menu & Harga</span>
              </a>
            </div>

            {/* Review pill */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="text-stone-900 font-bold">4.9 / 5.0</span>
              </div>
              <span className="text-xs text-stone-600">
                Berdasarkan 15.000+ ulasan nyata pengunjung di Google Maps
              </span>
            </div>
          </div>

          {/* Image Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden shadow-lg border border-stone-300 bg-stone-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={HERO_IMG}
                alt="Semangkuk Bakso Warisan Nusantara dalam mangkuk ayam jago otentik"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-stone-950/70 via-transparent to-transparent" />

              <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-lg bg-white/95 backdrop-blur-xs border border-stone-200 shadow-sm">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-700 block">
                      Menu Ikonik
                    </span>
                    <h3 className="font-bold text-stone-900 text-sm">
                      Bakso Urat Spesial Komplit
                    </h3>
                    <p className="text-xs text-stone-600">
                      Urat kasar + pangsit renyah + kaldu sumsum
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-[10px] text-stone-500 block">Mulai</span>
                    <span className="text-red-700 font-extrabold text-base">Rp 32.000</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Branch Count Badge */}
            <div className="absolute -top-3 -left-3 bg-amber-400 text-stone-950 px-3 py-1.5 rounded-lg font-bold text-xs uppercase tracking-wider shadow-md border border-amber-300 flex items-center gap-1.5">
              <span>🍜 20 Cabang Resmi</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Counter Bar */}
      <div className="bg-stone-900 text-stone-100 py-6 border-t border-stone-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-y md:divide-y-0 md:divide-x divide-stone-800">
            {STATS.map((stat, idx) => (
              <div key={stat.label} className={idx > 0 ? "pt-3 md:pt-0" : ""}>
                <span className="text-2xl sm:text-3xl font-bold text-amber-400 block font-mono">
                  {stat.value}
                </span>
                <span className="text-xs font-medium text-stone-400 mt-1 block">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BaksoHero;
