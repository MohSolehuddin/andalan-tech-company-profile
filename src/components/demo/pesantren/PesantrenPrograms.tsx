import { BookMarked, BookOpen, GraduationCap, Languages } from "lucide-react";

const programs = [
  {
    icon: BookOpen,
    name: "Tahfidz Al-Qur'an 30 Juz",
    desc: "Bimbingan hafalan Al-Qur'an bersanad dengan metode talaqqi, takrir harian, tasmi' berkala, dan kajian tartil tajwid.",
    tag: "Sanad Muttashil",
  },
  {
    icon: BookMarked,
    name: "Kajian Kitab Kuning (Turats)",
    desc: "Kajian mendalam khazanah salaf: nahwu & shorof, fiqih madzhab Syafi'i, tauhid, tafsir Jalalain, hadits Bukhari, dan tasawuf.",
    tag: "Metode Sorogan & Bandongan",
  },
  {
    icon: Languages,
    name: "Bahasa Arab & Inggris Intensif",
    desc: "Pembiasaan komunikasi harian bilingual, muhadharah 3 bahasa, qawa'id bahasa terapan, dan persiapan studi Timur Tengah.",
    tag: "Bilingual Environment",
  },
  {
    icon: GraduationCap,
    name: "Madrasah Formal (MTs & MA)",
    desc: "Pendidikan formal terakreditasi A kurikulum Kemenag, pembekalan sains teknologi, riset ilmiah remaja, dan persiapan PTN/PTKIN.",
    tag: "Kurikulum Terpadu",
  },
];

export default function PesantrenPrograms() {
  return (
    <section id="program" className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
            Program Pendidikan
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Integrasi Tradisi Salaf &amp; Madrasah Formal
          </h2>
          <p className="mt-3 text-neutral-600">
            Kurikulum seimbang yang membina spiritualitas santri, ketajaman intelektual,
            serta kemandirian hidup bermasyarakat.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {programs.map((program) => (
            <div
              key={program.name}
              className="group rounded-2xl border border-neutral-200 bg-white p-6 transition-all hover:border-emerald-300 hover:shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 transition-colors group-hover:bg-emerald-600">
                  <program.icon className="h-6 w-6 text-emerald-700 transition-colors group-hover:text-white" />
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                  {program.tag}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-bold text-neutral-900">
                {program.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {program.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
