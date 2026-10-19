import { Utensils, CheckCircle2, ShieldCheck, Clock } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const highlights = [
  { icon: ShieldCheck, label: "100% Halal & Higienis" },
  { icon: Clock, label: "Pengiriman Selalu Tepat Waktu" },
  { icon: CheckCircle2, label: "Pilihan Menu Bervariasi" },
];

export default function KateringHero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-linear-to-br from-amber-950/50 via-neutral-950 to-neutral-900" />

      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-1.5 text-sm font-medium text-amber-300">
            Jasa Katering Harian & Acara Spesial
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
            Berkah Rasa Catering
          </h1>
          <p className="mt-4 text-lg text-neutral-300">
            Solusi sajian lezat, bergizi, dan higienis untuk makan siang kantor,
            kebutuhan keluarga harian, nasi box acara, hingga pesta prasmanan besar.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#paket"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-6 py-3 font-semibold text-neutral-950 transition-colors hover:bg-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-500">
              <Utensils className="h-5 w-5" />
              Lihat Pilihan Paket
            </a>
            <a
              href={waLink(
                "Halo Berkah Rasa Catering, saya ingin konsultasi menu dan pemesanan katering."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white">
              Pesan via WhatsApp
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-neutral-300">
            {highlights.map((item) => (
              <span key={item.label} className="inline-flex items-center gap-2">
                <item.icon className="h-4 w-4 text-amber-400" />
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
