import { Award, CheckCircle2, Code, Laptop, MessageCircle, Users } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const trustPoints = [
  { icon: Laptop, label: "100% Praktik Langsung" },
  { icon: Award, label: "Sertifikat Kelulusan Resmi" },
  { icon: Users, label: "Kelas Privat & Reguler" },
  { icon: CheckCircle2, label: "Bimbingan Mentor Sampai Bisa" },
];

export default function KursusHero() {
  return (
    <section className="relative overflow-hidden bg-indigo-950 text-white">
      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-indigo-200">
            <Code className="h-4 w-4" />
            Kursus Komputer &amp; Coding Terpercaya
          </span>

          <h1 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Kode Kursus Komputer &amp; IT
          </h1>

          <p className="mt-4 text-base leading-relaxed text-indigo-100/90 sm:text-lg">
            Kuasai keahlian digital yang dicari industri mulai dari aplikasi perkantoran, desain grafis,
            pengembangan website, hingga coding anak. Pendekatan praktik intensif, bimbingan satu per satu,
            dan sertifikat resmi siap kerja.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink("Halo Kode Kursus Komputer & IT, saya ingin konsultasi pendaftaran kelas.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-500 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
              <MessageCircle className="h-5 w-5" />
              Daftar via WhatsApp
            </a>
            <a
              href="#program"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-xs transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
              Lihat Pilihan Program
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 pt-6 border-t border-indigo-800/60 sm:grid-cols-4">
            {trustPoints.map((point) => (
              <div key={point.label} className="flex items-center gap-2 text-xs text-indigo-200">
                <point.icon className="h-4 w-4 shrink-0 text-indigo-400" />
                <span>{point.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
