/* eslint-disable @next/next/no-img-element */
import { Check } from "lucide-react";
import { PACK_ITEMS, STEPS } from "./contentData";

const UNBOXING_IMG =
  "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1200&q=60";

const IRentSteps = () => {
  return (
    <div className="bg-slate-900 border-b border-slate-800 text-slate-100">
      {/* 3 Steps Section */}
      <section id="cara-sewa" className="max-w-6xl mx-auto px-4 py-16 scroll-mt-14">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">
            Alur Sewa Cepat & Fleksibel
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Sewa iPhone dalam 3 Langkah Mudah
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Proses terstruktur, verifikasi kilat, dan serah terima unit transparan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STEPS.map((s) => (
            <div
              key={s.step}
              className="p-6 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-3 py-1 rounded bg-slate-900 border border-slate-700 text-emerald-400 font-extrabold text-xs mb-4">
                  Langkah {s.step}
                </span>
                <h3 className="text-base font-bold text-white mb-2">{s.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Unboxing / Accessories Section */}
      <section id="unboxing" className="border-t border-slate-800 py-16 bg-slate-950 scroll-mt-14">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-900 shadow-lg">
                <img
                  src={UNBOXING_IMG}
                  alt="Paket Aksesoris Lengkap iPhone Rental iRent Studio"
                  className="w-full h-72 sm:h-80 object-cover"
                />
                <div className="p-3 bg-slate-900 border-t border-slate-800 text-xs text-slate-300 flex items-center justify-between">
                  <span className="font-semibold text-white">Kotak Hardcase Protektif</span>
                  <span className="text-emerald-400 font-bold">100% Free Included</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block">
                Kelengkapan Siap Pakai
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Terima Unit Lengkap, Tinggal Nyalakan & Pakai.
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed max-w-[65ch]">
                Kami memastikan setiap perangkat siap digunakan saat tiba di tangan Anda tanpa repot membeli adaptor atau meminjam casing pelindung.
              </p>

              <div className="space-y-3 pt-2">
                {PACK_ITEMS.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 flex items-start gap-3"
                  >
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-xs font-bold text-white">{item.title}</h3>
                      <p className="text-[11px] text-slate-400 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sewa vs Beli Perbandingan */}
      <section className="border-t border-slate-800 py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">
              Perbandingan Biaya Finansial
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Sewa vs Beli Baru untuk Kebutuhan Event
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Simulasi kebutuhan 3 hari untuk konser musik atau liburan akhir pekan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <h3 className="text-base font-bold text-slate-300">Beli Baru iPhone 16 Pro Max</h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20">
                  Biaya Tinggi
                </span>
              </div>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">✕</span>
                  <span>Modal langsung keluar Rp 24.999.000 untuk 1 unit.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">✕</span>
                  <span>Depresiasi harga jual second turun hingga Rp 4–6 juta/tahun.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">✕</span>
                  <span>Wajib membeli casing, charger 30W, dan tempered glass (+Rp 700k).</span>
                </li>
              </ul>
              <div className="pt-3 border-t border-slate-800">
                <p className="text-[11px] text-slate-400">Estimasi Pengeluaran:</p>
                <p className="text-lg font-bold text-slate-200">Rp 25.700.000+</p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-slate-950 border border-emerald-500/40 space-y-3 relative shadow-md">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <h3 className="text-base font-bold text-white">Sewa di iRent (Paket 3 Hari)</h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Hemat 96%
                </span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Hanya keluar <strong className="text-white">Rp 990.000</strong> untuk 3 hari penuh event.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Bebas resiko rugi depresiasi harga penurunan smartphone.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Termasuk kabel cepat, case MagSafe, dan asuransi baret ringan.</span>
                </li>
              </ul>
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <p className="text-[11px] text-slate-400">Total Biaya 3 Hari:</p>
                  <p className="text-xl font-bold text-emerald-400">Rp 990.000</p>
                </div>
                <a
                  href="#booking"
                  className="px-4 py-2 text-xs font-bold rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
                >
                  Pesan Paket
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IRentSteps;
