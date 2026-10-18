import { Clock, MapPin, Scissors, ShieldCheck, Star } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const highlights = [
  { icon: ShieldCheck, label: "Alat steril & sekali pakai" },
  { icon: Star, label: "Barber bersertifikat & berpengalaman" },
  { icon: Clock, label: "Reservasi antrian tanpa menunggu lama" },
];

export default function BarbershopHero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-linear-to-br from-zinc-900 via-neutral-950 to-amber-950/60" />

      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/10 px-4 py-1.5 text-sm font-medium text-amber-300">
            <Scissors className="h-4 w-4 text-amber-300" />
            Barbershop & Grooming Pria Modern
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
            Gaya rapi, percaya diri, tanpa antre lama
          </h1>
          <p className="mt-4 text-lg text-amber-100/90">
            Potong rambut presisi, cukur bersih dengan handuk hangat, coloring,
            hingga perawatan kulit kepala. Semua dikerjakan barber profesional
            di kursi favorit Anda di Kemang.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink(
                "Halo Gents & Blade Barbershop, saya mau ambil nomor antrian booking hari ini."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-6 py-3 font-semibold text-neutral-950 transition-colors hover:bg-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
              <Scissors className="h-5 w-5" />
              Booking Antrian Sekarang
            </a>
            <a
              href="#layanan"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10">
              Lihat Layanan & Harga
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-amber-100/90">
            {highlights.map((item) => (
              <span key={item.label} className="inline-flex items-center gap-2">
                <item.icon className="h-4 w-4 text-amber-300" />
                {item.label}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/10 pt-6 text-xs text-amber-200/80">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-amber-400" />
              Jl. Kemang Raya No. 27, Jakarta Selatan
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-amber-400" />
              Buka Senin–Minggu (10.00–21.00 WIB)
            </span>
            <span>
              Chat langsung:{" "}
              <a
                href={waLink(
                  "Halo Gents & Blade Barbershop, saya ingin tanya-tanya soal layanan grooming."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-amber-300 underline underline-offset-4 hover:text-amber-200">
                WhatsApp Kami
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
