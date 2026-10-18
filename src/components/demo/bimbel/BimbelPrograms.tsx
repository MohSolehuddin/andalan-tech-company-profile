import { Calculator, Code2, GraduationCap, Languages } from "lucide-react";

const programs = [
  {
    icon: Calculator,
    title: "MIPA SMP & SMA",
    level: "Kelas 7 – 12",
    desc: "Kupas tuntas konsep Matematika, Fisika, Kimia, dan Biologi dengan rumus praktis serta trik pemecahan soal cepat.",
    features: ["Bedah konsep dasar", "Bank 500+ soal variatif", "Bimbingan PR & tugas sekolah"],
  },
  {
    icon: GraduationCap,
    title: "Persiapan UTBK-SNBT & Kedinasan",
    level: "Kelas 12 & Alumni",
    desc: "Program akselerasi tembus PTN favorit dengan drilling soal TPS, literasi bahasa, penalaran matematika, dan tryout berbasis IRT.",
    features: ["Tryout rutin berkala", "Analisis persentil & IRT", "Konsultasi strategi jurusan"],
  },
  {
    icon: Languages,
    title: "English for Kids & Teens",
    level: "SD, SMP, & SMA",
    desc: "Tingkatkan kelancaran berbicara, penguasaan tata bahasa, dan persiapan tes TOEFL/IELTS Junior dengan metode interaktif.",
    features: ["Native learning media", "Percakapan aktif mingguan", "Sertifikat level kemahiran"],
  },
  {
    icon: Code2,
    title: "Komputer & Koding Anak",
    level: "Usia 8 – 16 Tahun",
    desc: "Asah kemampuan logika dan pemecahan masalah sejak dini melalui pembuatan game sederhana, visual coding (Scratch), dan Python dasar.",
    features: ["Proyek game & animasi", "Logika komputasional", "Showcase karya berkala"],
  },
];

export const BimbelPrograms = () => {
  return (
    <section id="program" className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-indigo-600">
            Pilihan Kurikulum Teruji
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-neutral-900 md:text-4xl">
            Program Belajar Sesuai Kebutuhan Siswa
          </h2>
          <p className="mt-3 text-neutral-600 text-sm sm:text-base">
            Dari fondasi membaca-menulis untuk tingkat dasar hingga persiapan intensif
            menembus perguruan tinggi negeri impian.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {programs.map((prog) => (
            <div
              key={prog.title}
              className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-neutral-50/50 p-6 sm:p-8 transition-all hover:border-indigo-300 hover:bg-white hover:shadow-lg">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
                    <prog.icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-800">
                    {prog.level}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-bold text-neutral-900">
                  {prog.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                  {prog.desc}
                </p>
              </div>

              <div className="mt-6 border-t border-neutral-200/60 pt-4">
                <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                  Fasilitas Unggulan:
                </p>
                <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-neutral-700">
                  {prog.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BimbelPrograms;
