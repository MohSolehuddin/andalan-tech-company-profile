import { Printer, Zap, Sparkles, ShieldCheck, FileUp } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const highlights = [
  { icon: Zap, label: "Cetak Kilat Siap Hari Ini" },
  { icon: Sparkles, label: "Warna Tajam High-Resolution" },
  { icon: ShieldCheck, label: "Bisa Pesan Satuan & Grosir" },
  { icon: FileUp, label: "Bantu Setting Desain Gratis" },
];

export default function PercetakanHero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white">
      <div className="absolute inset-0 bg-linear-to-br from-orange-600/30 via-neutral-950 to-rose-700/30" />
      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/40 bg-orange-500/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-orange-200">
            <Printer className="h-4 w-4 text-orange-400" />
            Percetakan & Digital Printing Situbondo
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
            Cetak Banner, Stiker & Merchandise <span className="bg-linear-to-r from-orange-400 to-rose-400 bg-clip-text text-transparent">Cepat & Tajam</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-neutral-300">
            Layanan percetakan digital profesional untuk spanduk outdoor, stiker label kemasan,
            kartu nama, undangan, hingga sablon kaos. Cukup kirim file via WhatsApp, pesanan langsung kami kerjakan.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#harga"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white shadow-lg shadow-orange-500/25 transition-colors hover:bg-orange-400">
              <Printer className="h-5 w-5" />
              Lihat Daftar Harga
            </a>
            <a
              href={waLink("Halo Cetak Cepat Digital Printing, saya mau konsultasi cetak dan kirim file desain.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15">
              Kirim File via WhatsApp
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-6 text-xs sm:text-sm text-neutral-300">
            {highlights.map((item) => (
              <div key={item.label} className="inline-flex items-center gap-2">
                <item.icon className="h-4 w-4 shrink-0 text-orange-400" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
