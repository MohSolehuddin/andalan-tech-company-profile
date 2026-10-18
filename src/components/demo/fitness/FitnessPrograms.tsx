import { Apple, Dumbbell, Flame, HeartPulse, Users } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const programs = [
  {
    icon: Dumbbell,
    name: "Area Gym & Beban Bebas",
    tag: "Fasilitas Lengkap",
    desc: "Zona dumbbell, barbell, power rack, dan mesin isolasi biomekanik modern untuk latihan kekuatan optimal.",
    accent: "bg-orange-500/10 text-orange-600 border-orange-200",
  },
  {
    icon: Flame,
    name: "Kelas Studio Berenergi",
    tag: "Zumba, Yoga & Spin",
    desc: "Lebih dari 40 sesi mingguan: HIIT, Zumba party, Yoga relaksasi, hingga Spinning class pembakar kalori.",
    accent: "bg-rose-500/10 text-rose-600 border-rose-200",
  },
  {
    icon: Users,
    name: "Personal Trainer Privat",
    tag: "1-on-1 Mentoring",
    desc: "Program pendampingan privat dengan pelatih bersertifikat untuk memastikan teknik aman dan target cepat tercapai.",
    accent: "bg-amber-500/10 text-amber-600 border-amber-200",
  },
  {
    icon: Apple,
    name: "Konsultasi Nutrisi & Diet",
    tag: "Meal Plan Kustom",
    desc: "Perencanaan pola makan seimbang oleh spesialis gizi sesuai target berat badan, fat-loss, atau muscle-gain.",
    accent: "bg-emerald-500/10 text-emerald-600 border-emerald-200",
  },
];

export default function FitnessPrograms() {
  return (
    <section id="program" className="bg-neutral-50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
            <HeartPulse className="h-3.5 w-3.5" />
            Program Unggulan
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-neutral-900 md:text-4xl">
            Latihan Terarah Sesuai Target Anda
          </h2>
          <p className="mt-3 text-neutral-600">
            Pilih metode latihan yang sesuai preferensi dan ritme harian Anda
            bersama instruktur berpengalaman.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((item) => (
            <div
              key={item.name}
              className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 shadow-xs transition-shadow hover:shadow-md">
              <div>
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl border ${item.accent}`}>
                  <item.icon className="h-6 w-6" />
                </div>
                <span className="mt-4 block text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  {item.tag}
                </span>
                <h3 className="mt-1 text-lg font-bold text-neutral-900">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100">
                <a
                  href={waLink(`Halo PrimaFit, saya tertarik konsultasi program: ${item.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-orange-600 hover:text-orange-700 hover:underline">
                  Konsultasi Program &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
