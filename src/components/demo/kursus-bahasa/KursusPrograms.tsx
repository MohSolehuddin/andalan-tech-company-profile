import { BookOpen, Globe2, PenLine } from "lucide-react";

const programs = [
  {
    icon: Globe2,
    emoji: "🇬🇧",
    name: "Bahasa Inggris",
    desc: "Fokus percakapan sehari-hari, grammar, dan persiapan tes TOEFL/IELTS.",
    levels: ["Dasar (A1–A2)", "Menengah (B1)", "Mahir (B2–C1)"],
    focus: "Speaking, listening, TOEFL/IELTS",
  },
  {
    icon: BookOpen,
    emoji: "🇸🇦",
    name: "Bahasa Arab",
    desc: "Belajar nahwu-shorof, percakapan harian, dan bahasa Arab untuk ibadah.",
    levels: ["Dasar (A1–A2)", "Menengah (B1)", "Mahir (B2–C1)"],
    focus: "Muhadatsah, nahwu-shorof, tilawah",
  },
  {
    icon: PenLine,
    emoji: "🇨🇳",
    name: "Bahasa Mandarin",
    desc: "Latihan pinyin, nada, hanzi, dan percakapan untuk bisnis maupun sekolah.",
    levels: ["Dasar (A1–A2)", "Menengah (B1)", "Mahir (B2–C1)"],
    focus: "Pinyin, hanzi, HSK 1–4",
  },
];

export default function KursusPrograms() {
  return (
    <section id="program" className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
            Program
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Tiga bahasa, level dasar sampai mahir
          </h2>
          <p className="mt-3 text-neutral-600">
            Setiap kelas dibagi per level dengan kurikulum berjenjang dan
            evaluasi berkala, sehingga progres belajar terukur.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {programs.map((program) => (
            <div
              key={program.name}
              className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 transition-shadow hover:shadow-md">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-blue-500 to-cyan-600 text-2xl">
                <span aria-hidden>{program.emoji}</span>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <program.icon className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-bold text-neutral-900">
                  {program.name}
                </h3>
              </div>
              <p className="mt-2 text-sm text-neutral-600">{program.desc}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {program.levels.map((level) => (
                  <span
                    key={level}
                    className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                    {level}
                  </span>
                ))}
              </div>

              <p className="mt-4 border-t border-neutral-100 pt-4 text-xs text-neutral-500">
                Fokus: {program.focus}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
