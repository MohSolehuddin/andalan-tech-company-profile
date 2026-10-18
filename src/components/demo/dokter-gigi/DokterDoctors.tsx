import { Award, GraduationCap } from "lucide-react";

interface Doctor {
  name: string;
  role: string;
  focus: string;
  schedule: string;
  initials: string;
}

const doctors: Doctor[] = [
  {
    name: "drg. Senja Maharani",
    role: "Spesialis Ortodonti",
    focus: "Behel & perapian gigi",
    schedule: "Senin, Rabu & Jumat · 10.00–17.00",
    initials: "SM",
  },
  {
    name: "drg. Bima Prasetya",
    role: "Dokter Gigi Umum",
    focus: "Scaling, tambal & cabut gigi",
    schedule: "Selasa & Kamis · 09.00–16.00",
    initials: "BP",
  },
  {
    name: "drg. Nadia Puspita",
    role: "Spesialis Konservasi Gigi",
    focus: "Whitening & saluran akar",
    schedule: "Sabtu · 09.00–14.00",
    initials: "NP",
  },
];

export default function DokterDoctors() {
  return (
    <section className="bg-sky-50/60 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">
            Tim Dokter
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Dokter gigi yang Anda percaya
          </h2>
          <p className="mt-4 text-neutral-600">
            Semua dokter berlisensi dan rutin mengikuti pelatihan terbaru agar
            perawatan tetap nyaman dan aman.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor) => (
            <div
              key={doctor.name}
              className="overflow-hidden rounded-2xl border border-neutral-200 bg-white text-center transition-shadow hover:shadow-md">
              <div className="flex h-40 items-center justify-center bg-linear-to-br from-sky-500 to-blue-700">
                <span className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/40 bg-white/15 text-2xl font-bold text-white">
                  {doctor.initials}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-neutral-900">
                  {doctor.name}
                </h3>
                <p className="text-sm font-medium text-sky-600">{doctor.role}</p>
                <p className="mt-3 inline-flex items-center gap-2 text-sm text-neutral-500">
                  <Award className="h-4 w-4 text-sky-500" />
                  {doctor.focus}
                </p>
                <p className="mt-2 inline-flex items-center gap-2 text-sm text-neutral-500">
                  <GraduationCap className="h-4 w-4 text-sky-500" />
                  {doctor.schedule}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
