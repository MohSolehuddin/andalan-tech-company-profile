import { Atom, Globe, Languages, Wrench } from "lucide-react";

const programs = [
  {
    icon: Atom,
    name: "Sains & Teknologi",
    desc: "Pembelajaran berbasis eksperimen, olimpiade sains, dan proyek robotika.",
  },
  {
    icon: Globe,
    name: "Sosial & Humaniora",
    desc: "Kajian sosial, debat, dan program literasi untuk pemikir kritis.",
  },
  {
    icon: Languages,
    name: "Bahasa & Budaya",
    desc: "Kelas bilingual, pertukaran pelajar, dan festival budaya tahunan.",
  },
  {
    icon: Wrench,
    name: "Vokasi & Keterampilan",
    desc: "Praktik keterampilan hidup, kewirausahaan, dan sertifikasi keahlian.",
  },
];

export default function SekolahPrograms() {
  return (
    <section id="program" className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
            Program
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Peminatan sesuai bakat &amp; cita-cita
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {programs.map((program) => (
            <div
              key={program.name}
              className="rounded-2xl border border-neutral-200 bg-white p-6 transition-shadow hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100">
                <program.icon className="h-6 w-6 text-emerald-700" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-neutral-900">
                {program.name}
              </h3>
              <p className="mt-1 text-sm text-neutral-600">{program.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
