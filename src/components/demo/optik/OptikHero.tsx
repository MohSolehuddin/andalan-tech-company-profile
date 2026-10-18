import { Eye, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const trust = [
  { icon: Eye, label: "Cek mata & resep gratis" },
  { icon: ShieldCheck, label: "Garansi lensa 1 tahun" },
  { icon: Sparkles, label: "Frame original & lengkap" },
];

export default function OptikHero() {
  return (
    <section className="relative overflow-hidden bg-indigo-950 text-white">
      <div className="absolute inset-0 bg-linear-to-br from-indigo-600/30 via-indigo-950 to-sky-700/20" />
      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-400/40 bg-indigo-400/10 px-4 py-1.5 text-sm text-indigo-200">
            <Eye className="h-4 w-4 text-indigo-300" />
            Optik &amp; Kacamata
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
            Melihat lebih jernih, tampil lebih percaya diri
          </h1>
          <p className="mt-4 text-lg text-indigo-50/90">
            Cek mata, pilih frame, dan pesan lensa dalam satu kunjungan. Tim
            optometris Optik Melihat Jernih siap membantu Anda lewat WhatsApp.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink(
                "Halo Optik Melihat Jernih, saya mau reservasi cek mata."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-400 px-6 py-3 font-semibold text-indigo-950 transition-colors hover:bg-indigo-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
              <MessageCircle className="h-5 w-5" />
              Reservasi via WhatsApp
            </a>
            <a
              href="#koleksi"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10">
              Lihat Koleksi Frame
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-indigo-50/90">
            {trust.map((item) => (
              <span key={item.label} className="inline-flex items-center gap-2">
                <item.icon className="h-4 w-4 text-indigo-300" />
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
