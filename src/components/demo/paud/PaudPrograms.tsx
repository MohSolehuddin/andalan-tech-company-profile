import { BookOpen, Heart, Palette, SunMedium, Users } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const programs = [
  {
    icon: SunMedium,
    name: "Kelompok Bermain (Playgroup)",
    age: "Usia 2 – 3 Tahun",
    desc: "Melatih kemandirian dini, sosialisasi teman sebaya, serta motorik kasar dan halus melalui permainan sensorik terarah.",
    tags: ["Sensory Play", "Kemandirian", "Sosialisasi"],
    color: "from-amber-400 to-orange-400",
  },
  {
    icon: BookOpen,
    name: "Taman Kanak-Kanak (TK A & TK B)",
    age: "Usia 4 – 6 Tahun",
    desc: "Fondasi pra-literasi dan numerasi ceria tanpa paksaan, pengembangan karakter moral, serta persiapan matang menuju jenjang SD.",
    tags: ["Pra-Membaca Menyenangkan", "Logika Ceria", "Karakter Islami/Umum"],
    color: "from-rose-400 to-pink-500",
  },
  {
    icon: Heart,
    name: "Daycare Harian & Penuh Kasih",
    age: "Usia 1 – 6 Tahun",
    desc: "Layanan pengasuhan anak ramah keluarga dengan jadwal makan bergizi, tidur siang higienis, serta stimulasi harian bersama pendamping profesional.",
    tags: ["Rasio 1:4", "Nutrisi Terkontrol", "Laporan Harian via WA"],
    color: "from-emerald-400 to-teal-500",
  },
  {
    icon: Palette,
    name: "Sentra Eksplorasi Kreatif",
    age: "Semua Jenjang",
    desc: "Rotasi sentra belajar tematik meliputi Sentra Balok, Sentra Bahan Alam, Sentra Peran, dan Seni Musik untuk mengasah bakat alami si kecil.",
    tags: ["Sentra Bahan Alam", "Eksperimen Mini", "Musik & Gerak"],
    color: "from-sky-400 to-indigo-500",
  },
];

export const PaudPrograms = () => {
  return (
    <section id="program" className="bg-rose-50/40 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-700">
            <span>Program Edukasi &amp; Tumbuh Kembang</span>
          </div>
          <h2 className="mt-3 text-3xl font-extrabold text-neutral-900 md:text-4xl">
            Pilihan Program Sesuai Tahapan Usia
          </h2>
          <p className="mt-3 text-sm text-neutral-600 sm:text-base">
            Dirancang dengan kurikulum ramah anak yang mengutamakan kegembiraan belajar dan perkembangan emosional anak.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {programs.map((program) => (
            <div
              key={program.name}
              className="flex flex-col justify-between rounded-2xl border border-rose-100 bg-white p-6 shadow-xs transition-shadow hover:shadow-md">
              <div>
                <div className="flex items-center justify-between gap-3">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br ${program.color} text-white shadow-xs`}>
                    <program.icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700">
                    {program.age}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold text-neutral-900">
                  {program.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {program.desc}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {program.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-rose-50 px-2.5 py-1 text-xs font-medium text-rose-800">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 border-t border-neutral-100 pt-4">
                <a
                  href={waLink(`Halo PAUD Ceria, saya mau tanya detail kurikulum untuk ${program.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-600 hover:text-rose-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
                  <Users className="h-4 w-4" />
                  Tanya silabus &amp; kuota program →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaudPrograms;
