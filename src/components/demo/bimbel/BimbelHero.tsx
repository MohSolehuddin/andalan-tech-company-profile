import { Award, BookOpen, Calendar, CheckCircle2, MessageCircle, Users } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const trustItems = [
  { icon: Users, label: "Kelas Kecil Maksimal 8 Siswa" },
  { icon: Award, label: "Tutor Alumnus PTN Terkemuka" },
  { icon: CheckCircle2, label: "94% Lolos Sekolah & PTN Impian" },
];

export const BimbelHero = () => {
  return (
    <section className="relative overflow-hidden bg-indigo-950 text-white">
      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-sky-200">
            <BookOpen className="h-4 w-4 text-sky-300" />
            Bimbingan Belajar &amp; Les Privat SD, SMP, SMA, &amp; UTBK
          </span>

          <h1 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Bintang Prestasi Learning Center
          </h1>
          <p className="mt-4 text-base sm:text-lg text-indigo-100/90 leading-relaxed">
            Metode belajar interaktif, pendampingan personal, dan tryout rutin
            berkala. Bantu anak memahami konsep pelajaran, meningkatkan nilai
            rapor, hingga sukses lolos kampus impian.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink(
                "Halo Bintang Prestasi, saya ingin mendaftar Kelas Trial GRATIS untuk anak saya."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-sky-400 to-indigo-400 px-6 py-3.5 font-semibold text-indigo-950 transition-all hover:brightness-110 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
              <MessageCircle className="h-5 w-5" />
              Daftar Trial Gratis 1 Sesi
            </a>
            <a
              href="#program"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
              <Calendar className="h-4 w-4" />
              Jelajahi Program
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs sm:text-sm text-indigo-200/90">
            {trustItems.map((item) => (
              <span key={item.label} className="inline-flex items-center gap-2">
                <item.icon className="h-4 w-4 text-sky-400 shrink-0" />
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BimbelHero;
