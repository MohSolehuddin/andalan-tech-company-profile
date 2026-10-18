import { Palette, Sparkles, MessagesSquare } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const points = [
  { icon: Sparkles, label: "Strategi brand personal" },
  { icon: Palette, label: "Identitas visual konsisten" },
  { icon: MessagesSquare, label: "Konten siap tayang" },
];

export default function JasaHero() {
  return (
    <section className="relative overflow-hidden bg-orange-950 text-white">
      <div className="absolute inset-0 bg-linear-to-br from-orange-600/30 via-orange-950 to-rose-900/40" />
      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-24 md:py-32">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/40 bg-orange-400/10 px-4 py-1.5 text-sm text-orange-200">
            <Sparkles className="h-4 w-4" />
            Konsultan & Kreator Personal Brand
          </span>

          <h1 className="mt-6 text-4xl font-bold md:text-6xl">
            Bangun personal brand yang dipercaya
          </h1>
          <p className="mt-4 text-lg text-orange-50/90">
            Dari strategi, konten, sampai website profil — semua dirancang agar
            keahlian Anda terlihat jelas dan mudah dipercaya klien.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#layanan"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-orange-400">
              <Palette className="h-5 w-5" />
              Lihat Layanan
            </a>
            <a
              href={waLink("Halo Nara Kreatif, saya mau konsultasi personal brand.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10">
              Konsultasi via WhatsApp
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-orange-50/90">
            {points.map((point) => (
              <span key={point.label} className="inline-flex items-center gap-2">
                <point.icon className="h-4 w-4 text-orange-300" />
                {point.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
