import { Dumbbell, ShieldCheck, Trophy, Users } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const trust = [
  { icon: Dumbbell, label: "100+ Alat Gym Premium" },
  { icon: Users, label: "40+ Sesi Kelas / Minggu" },
  { icon: Trophy, label: "Trainer Bersertifikasi" },
];

export default function FitnessHero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white">
      <div className="absolute inset-0 bg-linear-to-br from-orange-950/30 via-neutral-950 to-neutral-900" />

      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-orange-400">
            Pusat Kebugaran &amp; Gym Modern
          </span>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Bangun Tubuh Kuat &amp;{" "}
            <span className="bg-linear-to-r from-orange-400 via-amber-400 to-rose-400 bg-clip-text text-transparent">
              Gaya Hidup Bugar
            </span>
          </h1>

          <p className="mt-4 text-base text-neutral-300 sm:text-lg">
            PrimaFit Studio hadir dengan fasilitas berstandar internasional,
            kelas berenergi tinggi, serta pelatih profesional untuk membantu
            mencapai target fisik Anda.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink("Halo PrimaFit Studio, saya ingin klaim 1-Day Free Trial.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-orange-500 to-red-600 px-6 py-3 font-semibold text-white shadow-sm transition-transform hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
              <ShieldCheck className="h-5 w-5" />
              Klaim Free Trial 1 Hari
            </a>
            <a
              href="#paket"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-700 bg-neutral-900/60 px-6 py-3 font-semibold text-neutral-200 transition-colors hover:border-neutral-500 hover:text-white">
              Lihat Paket Member
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-neutral-800 pt-6 text-sm text-neutral-300">
            {trust.map((item) => (
              <span key={item.label} className="inline-flex items-center gap-2">
                <item.icon className="h-4 w-4 text-orange-400" />
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
