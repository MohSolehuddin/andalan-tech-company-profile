import { Zap, ShieldCheck, CreditCard, MessageCircle, ArrowRight } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const highlights = [
  { icon: CreditCard, label: "Cicilan 0% hingga 12 Bulan" },
  { icon: ShieldCheck, label: "Garansi Resmi Pabrik" },
  { icon: Zap, label: "Gratis Pengiriman & Pasang" },
];

export default function ElektronikHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-linear-to-br from-slate-800/40 via-slate-950 to-blue-900/30" />
      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-blue-300">
            <Zap className="h-3.5 w-3.5 text-blue-400" />
            Toko Elektronik Resmi & Terpercaya
          </span>

          <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Elektronik Jaya Abadi
          </h1>
          <p className="mt-3 text-lg font-medium text-blue-200">
            Perangkat Elektronik Rumah Tangga Bergaransi Resmi
          </p>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-300">
            Pusat produk TV, kulkas, pendingin ruangan (AC), dan mesin cuci original bergaransi resmi. Nikmati kemudahan belanja langsung pesan via WhatsApp dengan promo cicilan 0%.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#katalog"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500">
              Lihat Katalog Produk
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={waLink("Halo Elektronik Jaya Abadi, saya ingin konsultasi dan tanya promo elektronik.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900/60 px-6 py-3 font-semibold text-slate-200 transition-colors hover:bg-slate-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-400">
              <MessageCircle className="h-4 w-4 text-emerald-400" />
              Chat WhatsApp
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3 pt-6 border-t border-slate-800 text-xs sm:text-sm text-slate-300">
            {highlights.map((item) => (
              <div key={item.label} className="flex items-center gap-2.5">
                <item.icon className="h-4 w-4 text-blue-400 shrink-0" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
