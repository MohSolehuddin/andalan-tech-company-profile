import { BadgeCheck, CarFront, MessageCircle, ShieldCheck } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const trustMetrics = [
  { label: "150+ Unit Terjual" },
  { label: "Garansi Mesin 1 Tahun" },
  { label: "Surat Lengkap & BPKB Aman" },
];

export default function DealerMobilHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-24 md:py-32">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-500/10 px-4 py-1.5 text-sm font-medium text-red-300">
            <CarFront className="h-4 w-4" />
            Dealer &amp; Jual Beli Mobil Terpercaya
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
            Auto Prima Dealer Mobil
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            Beli mobil bekas berkualitas dan mobil baru dengan harga transparan. Semua unit
            telah melalui inspeksi 120 titik, siap kredit, dan bisa tukar tambah.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink("Halo Auto Prima Dealer Mobil, saya ingin tanya stok unit yang tersedia.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-600">
              <MessageCircle className="h-5 w-5" />
              Tanya Stok via WhatsApp
            </a>
            <a
              href="#stok"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/50">
              <CarFront className="h-5 w-5 text-red-400" />
              Lihat Stok Mobil
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
            {trustMetrics.map((item) => (
              <span key={item.label} className="inline-flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-red-400" />
                {item.label}
              </span>
            ))}
          </div>

          <p className="mt-6 inline-flex items-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            Inspeksi 120 titik &amp; jaminan bebas banjir untuk setiap unit.
          </p>
        </div>
      </div>
    </section>
  );
}
