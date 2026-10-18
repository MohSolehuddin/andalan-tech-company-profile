import {
  BookOpen,
  Building2,
  Dumbbell,
  FlaskConical,
  HeartPulse,
  Wifi,
} from "lucide-react";

const facilities = [
  {
    icon: Building2,
    name: "Gedung Kuliah Terpadu",
    desc: "Ruang kelas ber-AC dengan proyektor dan akses WiFi di seluruh area.",
  },
  {
    icon: FlaskConical,
    name: "Laboratorium Praktik",
    desc: "Lab komputer, mesin, keperawatan, dan desain sesuai standar industri.",
  },
  {
    icon: BookOpen,
    name: "Perpustakaan Digital",
    desc: "Koleksi buku, jurnal, dan e-book yang bisa diakses 24 jam.",
  },
  {
    icon: HeartPulse,
    name: "Klinik Mahasiswa",
    desc: "Layanan kesehatan gratis dengan dokter jaga setiap hari kerja.",
  },
  {
    icon: Dumbbell,
    name: "Sport Center",
    desc: "Lapangan basket, futsal, dan pusat kebugaran untuk seluruh mahasiswa.",
  },
  {
    icon: Wifi,
    name: "Kampus Digital",
    desc: "Sistem akademik online, absensi digital, dan portal mahasiswa.",
  },
];

export default function KampusFacilities() {
  return (
    <section className="bg-emerald-50/60 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
            Fasilitas
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Belajar nyaman dengan fasilitas lengkap
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility) => (
            <div
              key={facility.name}
              className="rounded-2xl border border-neutral-200 bg-white p-6 transition-shadow hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100">
                <facility.icon className="h-6 w-6 text-emerald-700" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-neutral-900">
                {facility.name}
              </h3>
              <p className="mt-1 text-sm text-neutral-600">{facility.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
