import { Bike, CheckCircle2, ChevronRight, MessageCircle, ShieldCheck, Zap } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const trustBadges = [
  { label: "500+ Unit Terjual" },
  { label: "Garansi Mesin & Surat Aman" },
  { label: "DP Ringan & 1 Hari ACC" },
  { label: "Bengkel & Sparepart Resmi" },
];

export default function MotorHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* Ambient background glows */}
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-orange-600/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-red-600/15 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-orange-400">
              <Bike className="h-4 w-4" />
              Dealer &amp; Showroom Motor Resmi
            </span>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Motor Jaya <span className="text-orange-500">Showroom</span>
            </h1>

            <p className="mt-4 text-base text-slate-300 sm:text-lg sm:leading-relaxed">
              Pusat penjualan sepeda motor baru dan bekas berkualitas bergaransi.
              Pilihan lengkap tipe bebek, matic, hingga sport dengan proses kredit kilat,
              bunga ringan, serta kemudahan konsultasi langsung via WhatsApp.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={waLink("Halo Motor Jaya Showroom, saya ingin konsultasi pembelian sepeda motor.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-600/30 transition-all hover:bg-orange-500 hover:shadow-orange-600/40">
                <MessageCircle className="h-5 w-5" />
                Konsultasi WhatsApp
              </a>
              <a
                href="#stok-motor"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10">
                Lihat Stok Motor
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 text-xs sm:text-sm text-slate-300">
              {trustBadges.map((badge) => (
                <div key={badge.label} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-orange-400" />
                  <span>{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl border border-white/10 bg-linear-to-br from-slate-900 to-slate-900/90 p-6 shadow-2xl backdrop-blur-sm">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-orange-400">
                  <Zap className="h-4 w-4" />
                  Promo Spesial Bulan Ini
                </div>
                <span className="rounded-full bg-red-500/20 px-2.5 py-0.5 text-xs font-bold text-red-400">
                  Terbatas
                </span>
              </div>

              <div className="mt-5 space-y-4">
                <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
                  <p className="text-xs text-slate-400">Program DP Super Ringan</p>
                  <p className="mt-1 text-xl font-bold text-white">Mulai Rp 500.000,-</p>
                  <p className="mt-1 text-xs text-slate-300">Bawa pulang motor idaman cukup dengan KTP &amp; KK</p>
                </div>

                <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
                  <p className="text-xs text-slate-400">Bonus Khusus Pembelian</p>
                  <ul className="mt-2 space-y-1 text-xs text-slate-200">
                    <li className="flex items-center gap-1.5">
                      <ShieldCheck className="h-3.5 w-3.5 text-orange-400" />
                      Helm SNI &amp; Jaket Eksklusif Gratis
                    </li>
                    <li className="flex items-center gap-1.5">
                      <ShieldCheck className="h-3.5 w-3.5 text-orange-400" />
                      Gratis Servis Berkala &amp; Oli 1 Tahun
                    </li>
                    <li className="flex items-center gap-1.5">
                      <ShieldCheck className="h-3.5 w-3.5 text-orange-400" />
                      Free Pengiriman Area Situbondo &amp; Sekitarnya
                    </li>
                  </ul>
                </div>
              </div>

              <a
                href={waLink("Halo Motor Jaya Showroom, saya mau klaim promo DP ringan dan bonus helm/jaket.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 block w-full rounded-xl bg-linear-to-r from-orange-600 to-red-600 py-3 text-center text-xs font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-95">
                Klaim Promo via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
