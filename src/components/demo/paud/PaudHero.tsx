import { Baby, BookOpen, Calendar, HeartHandshake, MessageCircle, ShieldCheck } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const trustBadges = [
  { icon: ShieldCheck, label: "Lingkungan Aman & Ber-CCTV" },
  { icon: HeartHandshake, label: "Pendidik Ramah & Tersertifikasi" },
  { icon: Calendar, label: "Penerimaan Siswa Baru Dibuka" },
];

export const PaudHero = () => {
  return (
    <section className="relative overflow-hidden bg-rose-950 text-white">
      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-400/30 bg-rose-400/10 px-4 py-1.5 text-sm text-rose-200">
            <Baby className="h-4 w-4 text-rose-300" />
            <span>TK, Kelompok Bermain &amp; Daycare</span>
          </div>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Tumbuh Ceria, Belajar Penuh Kasih Sayang
          </h1>

          <p className="mt-5 text-lg text-rose-100/90 leading-relaxed">
            PAUD Ceria &amp; Daycare menghadirkan ruang stimulasi holistik
            usia emas 1–6 tahun. Pendekatan belajar berbasis sentra yang
            menyenangkan dan daycare nyaman seperti di rumah sendiri.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink("Halo PAUD Ceria & Daycare, saya ingin tanya info pendaftaran dan trial class untuk anak.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-rose-500 to-pink-500 px-6 py-3.5 font-semibold text-white shadow-sm transition-all hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
              <MessageCircle className="h-5 w-5" />
              Tanya Pendaftaran via WA
            </a>
            <a
              href="#program"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
              <BookOpen className="h-4 w-4 text-amber-300" />
              Lihat Program Edukasi
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-rose-200/90">
            {trustBadges.map((badge) => (
              <span key={badge.label} className="inline-flex items-center gap-2">
                <badge.icon className="h-4 w-4 text-rose-400" />
                {badge.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaudHero;
