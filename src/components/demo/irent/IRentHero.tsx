/* eslint-disable @next/next/no-img-element */
import { Calendar, Check, ChevronRight, ShieldCheck } from "lucide-react";
import { USE_CASES } from "./contentData";
import { waLink } from "@/lib/demo/wa";

const HERO_IMG =
  "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1600&q=60";

const IRentHero = () => {
  return (
    <div className="bg-slate-950 text-slate-100">
      {/* Top Banner */}
      <div className="bg-slate-900 border-b border-slate-800 py-2.5 px-4 text-xs">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3 text-slate-300">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              Ready Konser 2026/2027
            </span>
            <span>Promo Sewa Paket 3 Hari Weekend Hemat hingga 20%</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1.5 text-xs text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              100% iCloud Aman
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:flex items-center gap-1 text-slate-300">
              Pengantaran Instan & Ambil di Store
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header className="sticky top-0 z-30 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a
            href="#hero"
            className="flex items-center gap-2.5 focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none rounded-lg"
          >
            <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center font-black text-white text-base">
              
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg tracking-tight text-white">iRent</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded font-bold bg-slate-800 text-slate-300 border border-slate-700">
                  STUDIO
                </span>
              </div>
              <p className="text-[10px] text-slate-400 tracking-wider uppercase font-medium">
                Official iPhone Rental
              </p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
            <a href="#katalog" className="hover:text-white transition-colors">Katalog Unit</a>
            <a href="#kalkulator" className="hover:text-white transition-colors">Simulasi Biaya</a>
            <a href="#unboxing" className="hover:text-white transition-colors">Kelengkapan</a>
            <a href="#cara-sewa" className="hover:text-white transition-colors">SOP & Syarat</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </nav>

          <a
            href={waLink("Halo Admin iRent Studio, saya ingin konsultasi ketersediaan unit iPhone untuk sewa.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs font-bold rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors shadow-md focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
          >
            Chat WhatsApp
          </a>
        </div>
      </header>

      {/* Hero Content Section */}
      <section id="hero" className="max-w-6xl mx-auto px-4 pt-12 pb-16 lg:pt-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Unit Flagship Terawat & Battery Health 90%+</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Sewa iPhone Flagship, Abadikan Momen Terbaik Tanpa Beli Mahal.
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-[65ch]">
              Solusi praktis untuk konser musik, liburan, wisuda, dan produksi konten. 100% iCloud bersih, bergaransi All Operator, siap pakai dengan charger kilat dan case MagSafe.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#katalog"
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-200 text-slate-950 font-bold text-sm transition-colors text-center shadow-md flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none"
              >
                <span>Lihat Katalog Unit</span>
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="#kalkulator"
                className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-sm border border-slate-800 transition-colors text-center flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:outline-none"
              >
                <Calendar className="w-4 h-4 text-emerald-400" />
                <span>Simulasi Hitung Biaya</span>
              </a>
            </div>

            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-800">
              <div>
                <p className="text-xs text-slate-400">Harga Mulai</p>
                <p className="text-lg font-bold text-white">Rp 120k<span className="text-xs text-slate-400 font-normal">/hari</span></p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Keamanan Data</p>
                <p className="text-lg font-bold text-emerald-400">Factory Reset</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Pelanggan Puas</p>
                <p className="text-lg font-bold text-white">3.800+ <span className="text-xs text-amber-400 font-medium">★ 4.9</span></p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Aksesoris Bawaan</p>
                <p className="text-lg font-bold text-white">Fullset Gratis</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-lg">
              <img
                src={HERO_IMG}
                alt="iPhone 16 Pro dan 15 Pro Titanium Rental Unit iRent Studio"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="p-4 bg-slate-900/95 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <p className="text-xs font-bold text-white">iPhone 16 Pro Max • Desert Titanium</p>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5">5x Optical Telephoto • 4K 120fps Dolby</p>
                </div>
                <a
                  href="#kalkulator"
                  className="px-3 py-1.5 text-xs font-bold rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
                >
                  Hitung
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Use Cases */}
        <div className="mt-16 pt-12 border-t border-slate-800">
          <div className="mb-8">
            <span className="text-xs uppercase tracking-widest font-bold text-emerald-400 block mb-1">
              Kebutuhan Populer
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Kapan Anda Paling Membutuhkan Sewa iPhone?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {USE_CASES.map((uc) => (
              <div
                key={uc.title}
                className="rounded-xl p-5 bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-200 mb-4">
                    <Check className="w-5 h-5 text-sky-400" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{uc.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{uc.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] font-medium text-slate-400">
                  <span className="text-slate-300 font-semibold">Tipe: </span>
                  {uc.recom}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default IRentHero;
