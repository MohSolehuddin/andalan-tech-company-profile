import { Clock, MapPin, Scissors, Sparkles, Star } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const highlights = [
  { icon: Sparkles, label: "Stylist bersertifikat & ramah" },
  { icon: Star, label: "Produk premium terdaftar BPOM" },
  { icon: Clock, label: "Ruang privat, higienis & nyaman" },
];

export default function SalonHero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-linear-to-br from-rose-950/70 via-neutral-950 to-pink-950/60" />
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-rose-500/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-pink-500/10 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-rose-400/40 bg-rose-500/10 px-4 py-1.5 text-sm font-medium text-rose-300">
            <Sparkles className="h-4 w-4 text-rose-300" />
            Salon Kecantikan & Perawatan Rambut Modern
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
            Tampil percaya diri dengan sentuhan kilau alami
          </h1>
          <p className="mt-4 text-lg text-rose-100/90">
            Perawatan rambut, facial glow, nail art, hingga makeup artist
            profesional. Manjakan diri Anda dalam suasana hangat dan menenangkan.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#booking"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-rose-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-rose-400">
              <Scissors className="h-5 w-5" />
              Booking Janji Temu
            </a>
            <a
              href="#layanan"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10">
              Lihat Layanan & Harga
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-rose-100/90">
            {highlights.map((item) => (
              <span key={item.label} className="inline-flex items-center gap-2">
                <item.icon className="h-4 w-4 text-rose-300" />
                {item.label}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/10 pt-6 text-xs text-rose-200/80">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-rose-400" />
              Jl. Anggrek No. 18, Kebayoran, Jakarta Selatan
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-rose-400" />
              Buka Selasa–Minggu (09.00–20.00 WIB)
            </span>
            <span>
              Chat langsung:{" "}
              <a
                href={waLink(
                  "Halo Glow & Glam Salon, saya ingin konsultasi perawatan kecantikan."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-rose-300 underline underline-offset-4 hover:text-rose-200">
                WhatsApp Kami
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
