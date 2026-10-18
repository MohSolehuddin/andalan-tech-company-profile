import {
  Activity,
  Building2,
  Library,
  Monitor,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";

const facilities = [
  {
    icon: Building2,
    name: "Masjid Jami' Pesantren",
    desc: "Kapasitas 1.500 jamaah untuk shalat lima waktu berjamaah, pengajian umum, dan halaqah santri.",
  },
  {
    icon: Users,
    name: "Asrama Santri Terpadu",
    desc: "Kompleks asrama putra & putri terpisah dengan pengawasan pembina asrama 24 jam penuh.",
  },
  {
    icon: Monitor,
    name: "Ruang Kelas & Lab Komputer",
    desc: "Ruang belajar ber-AC dengan proyektor multimedia serta lab komputer untuk pembelajaran digital.",
  },
  {
    icon: Library,
    name: "Perpustakaan & Maktabah Turats",
    desc: "Koleksi ribuan kitab kuning salaf, tafsir, ensiklopedia Islam, buku sains modern, dan referensi akademik.",
  },
  {
    icon: Trophy,
    name: "Lapangan Olahraga Santri",
    desc: "Sarana olahraga futsal, bulutangkis, bola voli, tenis meja, dan area memanah sesuai sunnah.",
  },
  {
    icon: Activity,
    name: "Pos Kesehatan Pesantren (Poskestren)",
    desc: "Klinik internal santri dengan tenaga medis perawat siaga dan dokter mitra untuk penanganan cepat.",
  },
];

const gallery = [
  {
    title: "Kajian Kitab Kuning Ba'da Shubuh",
    category: "Ta'lim Turats",
    desc: "Halaqah pengajian kitab fiqih & hadits bersama pengasuh pondok.",
    gradient: "bg-linear-to-br from-emerald-800 to-teal-950",
  },
  {
    title: "Tasmi' & Muroja'ah Akbar 30 Juz",
    category: "Tahfidzul Qur'an",
    desc: "Ujian tasmi' hafalan Al-Qur'an sekali duduk di hadapan dewan asatidz.",
    gradient: "bg-linear-to-br from-teal-800 to-emerald-950",
  },
  {
    title: "Muhadharah & Khitobah 3 Bahasa",
    category: "Pengembangan Diri",
    desc: "Latihan pidato santri dalam bahasa Arab, Inggris, dan Indonesia.",
    gradient: "bg-linear-to-br from-emerald-900 to-teal-950",
  },
  {
    title: "Bahtsul Masail & Diskusi Fiqih",
    category: "Forum Ilmiah",
    desc: "Musyawarah ilmiah santri membedah ibarat kitab atas persoalan hukum fiqih kekinian.",
    gradient: "bg-linear-to-br from-teal-900 to-slate-950",
  },
];

export default function PesantrenFacilities() {
  return (
    <section id="fasilitas" className="bg-emerald-50/50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
            Fasilitas &amp; Lingkungan
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Sarana Belajar &amp; Kehidupan Pesantren
          </h2>
          <p className="mt-3 text-neutral-600">
            Didesain untuk menunjang kenyamanan beribadah, menuntut ilmu, dan istirahat
            santri di lingkungan pondok yang asri dan kondusif.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility) => (
            <div
              key={facility.name}
              className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-xs transition-shadow hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100">
                <facility.icon className="h-6 w-6 text-emerald-700" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-neutral-900">
                {facility.name}
              </h3>
              <p className="mt-1.5 text-sm text-neutral-600 leading-relaxed">
                {facility.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Galeri Kegiatan Santri (Grid Blok Gradient) */}
        <div className="mt-20">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-800">
              <Sparkles className="h-3.5 w-3.5" />
              Dinamika Pesantren
            </span>
            <h3 className="mt-2 text-2xl font-bold text-neutral-900 md:text-3xl">
              Galeri Kegiatan Santri
            </h3>
            <p className="mt-2 text-sm text-neutral-600">
              Rutinitas harian yang sarat berkah, disiplin, dan persaudaraan sesama santri.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.map((item) => (
              <div
                key={item.title}
                className={`relative flex min-h-60 flex-col justify-end overflow-hidden rounded-2xl p-6 text-white shadow-md ${item.gradient}`}>
                <div className="relative z-10">
                  <span className="inline-block rounded-md bg-white/20 px-2.5 py-0.5 text-xs font-semibold text-teal-100 backdrop-blur-xs">
                    {item.category}
                  </span>
                  <h4 className="mt-2 text-lg font-bold leading-snug">
                    {item.title}
                  </h4>
                  <p className="mt-1.5 text-xs text-white/80 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
