import { Clock, HeartPulse, MessageCircle, PawPrint, ShieldCheck } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const points = [
  { icon: ShieldCheck, label: "Dokter hewan berlisensi resmi" },
  { icon: HeartPulse, label: "Ruang periksa & grooming higienis" },
  { icon: Clock, label: "Buka setiap hari 08.30–21.00 WIB" },
];

export default function VetHero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white">
      <div className="absolute inset-0 bg-linear-to-br from-emerald-800/40 via-neutral-950 to-teal-800/30" />
      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-24 md:py-32">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-1.5 text-sm font-medium text-emerald-200">
            <PawPrint className="h-4 w-4" />
            Klinik Hewan & Petshop Terpercaya
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
            VetCare Klinik Hewan & Petshop
          </h1>
          <p className="mt-4 text-lg text-neutral-200">
            Perawatan medis penuh kasih untuk anabul kesayangan Anda. Melayani
            pemeriksaan kesehatan, vaksinasi, salon grooming steril, serta
            belanja kebutuhan petshop via WhatsApp.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink(
                "Halo VetCare, saya ingin konsultasi dan booking jadwal untuk hewan peliharaan saya."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-emerald-500">
              <MessageCircle className="h-5 w-5" />
              Booking via WhatsApp
            </a>
            <a
              href="#layanan"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10">
              Lihat Layanan
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-neutral-300">
            {points.map((point) => (
              <span key={point.label} className="inline-flex items-center gap-2">
                <point.icon className="h-4 w-4 text-emerald-400" />
                {point.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
