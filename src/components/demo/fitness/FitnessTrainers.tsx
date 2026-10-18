import { Award, Dumbbell, Flame, HeartHandshake } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

interface Trainer {
  name: string;
  role: string;
  cert: string;
  specialty: string;
  initials: string;
  gradient: string;
  icon: typeof Dumbbell;
}

const trainers: Trainer[] = [
  {
    name: "Reza Pratama, CSCS",
    role: "Head Strength Coach",
    cert: "Certified Strength & Conditioning Specialist",
    specialty: "Hypertrophy, Powerlifting & Biomekanika Angkat Beban",
    initials: "RP",
    gradient: "from-orange-500 to-amber-600",
    icon: Dumbbell,
  },
  {
    name: "Maya Salsabila, RYT",
    role: "Studio & Yoga Lead",
    cert: "Registered Yoga Teacher 500-hr",
    specialty: "Vinyasa Yoga, Posture Alignment & Core Pilates",
    initials: "MS",
    gradient: "from-rose-500 to-pink-600",
    icon: HeartHandshake,
  },
  {
    name: "Dimas Wicaksono, CPT",
    role: "Functional & HIIT Coach",
    cert: "Certified Personal Trainer (NASM)",
    specialty: "Fat Loss, Metabolic Conditioning & Calisthenics",
    initials: "DW",
    gradient: "from-red-600 to-orange-600",
    icon: Flame,
  },
];

export default function FitnessTrainers() {
  return (
    <section id="trainer" className="bg-neutral-50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
            <Award className="h-3.5 w-3.5" />
            Tim Pelatih Profesional
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-neutral-900 md:text-4xl">
            Didampingi Pelatih Tersertifikasi
          </h2>
          <p className="mt-3 text-neutral-600">
            Fokus pada postur tubuh yang benar, progresi beban terukur, dan
            keamanan latihan Anda.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trainers.map((t) => (
            <div
              key={t.name}
              className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 shadow-xs transition-shadow hover:shadow-md">
              <div>
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br ${t.gradient} text-lg font-extrabold text-white shadow-sm`}>
                    {t.initials}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-neutral-900">
                      {t.name}
                    </h3>
                    <p className="text-xs font-medium text-orange-600">
                      {t.role}
                    </p>
                  </div>
                </div>

                <div className="mt-5 space-y-2 border-t border-neutral-100 pt-4 text-xs text-neutral-600">
                  <div className="flex items-start gap-2">
                    <Award className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-500" />
                    <span>{t.cert}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <t.icon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-neutral-600" />
                    <span>{t.specialty}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-neutral-100 pt-4">
                <a
                  href={waLink(`Halo PrimaFit, saya ingin booking sesi konsultasi bersama Coach ${t.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-neutral-200 bg-neutral-50 py-2 text-xs font-semibold text-neutral-800 transition-colors hover:border-orange-300 hover:bg-orange-50/50 hover:text-orange-700">
                  Konsultasi dengan {t.name.split(" ")[0]} &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
