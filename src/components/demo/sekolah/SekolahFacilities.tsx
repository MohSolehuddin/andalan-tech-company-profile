import {
  BookOpen,
  FlaskConical,
  Monitor,
  Music,
  Trophy,
  UtensilsCrossed,
} from "lucide-react";

const facilities = [
  { icon: FlaskConical, name: "Laboratorium Sains", desc: "Lab fisika, kimia, dan biologi dengan peralatan lengkap." },
  { icon: Monitor, name: "Lab Komputer", desc: "40 unit komputer untuk pembelajaran coding dan desain." },
  { icon: BookOpen, name: "Perpustakaan Digital", desc: "Koleksi buku dan akses e-book lebih dari 5.000 judul." },
  { icon: Trophy, name: "Lapangan Olahraga", desc: "Lapangan basket, futsal, dan voli untuk kegiatan siswa." },
  { icon: Music, name: "Ruang Musik & Seni", desc: "Ruang latihan band, tari, dan teater yang kedap suara." },
  { icon: UtensilsCrossed, name: "Kantin Sehat", desc: "Menu bergizi bersertifikat higienis dengan harga terjangkau." },
];

export default function SekolahFacilities() {
  return (
    <section className="bg-emerald-50/60 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
            Fasilitas
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Lingkungan belajar yang nyaman
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
