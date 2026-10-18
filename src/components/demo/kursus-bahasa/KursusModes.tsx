import { Check, Laptop, MapPin, Users } from "lucide-react";

const modes = [
  {
    icon: Laptop,
    name: "Kelas Online",
    desc: "Belajar dari mana saja lewat kelas live bersama tutor.",
    features: [
      "Kelas live via Zoom / Google Meet",
      "Rekaman sesi bisa ditonton ulang",
      "Grup latihan harian di WhatsApp",
      "E-modul & latihan soal digital",
    ],
  },
  {
    icon: MapPin,
    name: "Kelas Offline",
    desc: "Tatap muka langsung di kelas Lingua yang nyaman.",
    features: [
      "Ruang kelas ber-AC, maksimal 8 siswa",
      "Papan tulis interaktif & audio native",
      "Praktik percakapan berpasangan",
      "Perpustakaan mini & area diskusi",
    ],
  },
];

export default function KursusModes() {
  return (
    <section id="kelas" className="bg-blue-50/60 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
            Mode Belajar
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Pilih kelas online atau offline
          </h2>
          <p className="mt-3 text-neutral-600">
            Jadwal fleksibel pagi, sore, dan akhir pekan. Bisa juga kombinasi
            keduanya agar belajar tetap lancar.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {modes.map((mode) => (
            <div
              key={mode.name}
              className="rounded-2xl border border-neutral-200 bg-white p-6 transition-shadow hover:shadow-md">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-blue-500 to-cyan-600">
                  <mode.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900">
                    {mode.name}
                  </h3>
                  <p className="text-sm text-neutral-600">{mode.desc}</p>
                </div>
              </div>

              <ul className="mt-5 space-y-2.5 text-sm text-neutral-700">
                {mode.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 rounded-2xl bg-blue-950 px-6 py-5 text-center text-white sm:flex-row sm:text-left">
          <p className="text-sm text-blue-50/90">
            Butuh ritme khusus? Tersedia kelas privat dan program perusahaan
            dengan jadwal fleksibel.
          </p>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-cyan-200">
            <Users className="h-4 w-4" />
            Privat &amp; Corporate
          </span>
        </div>
      </div>
    </section>
  );
}
