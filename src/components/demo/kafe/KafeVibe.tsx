import { Armchair, Coffee, Flame, Music, Wifi } from "lucide-react";

const vibeFeatures = [
  {
    icon: Wifi,
    title: "WiFi Super Cepat 100 Mbps",
    desc: "Koneksi stabil fiber optic siap untuk video conference, upload file besar, dan push kode tanpa ngadat.",
    tag: "Work-friendly",
  },
  {
    icon: Armchair,
    title: "Area Coworking Ergonomis",
    desc: "Dilengkapi stopkontak di setiap sudut meja, kursi nyaman berpunggung empuk, dan tata cahaya hangat.",
    tag: "Fokus & Nyaman",
  },
  {
    icon: Music,
    title: "Live Acoustic & Playlists",
    desc: "Musik santai lo-fi di jam kerja dan penampilan live acoustic setiap akhir pekan untuk melepas penat.",
    tag: "Mood Booster",
  },
  {
    icon: Flame,
    title: "Outdoor & Smoking Garden",
    desc: "Taman terbuka asri dengan sirkulasi udara alami bagi Anda yang gemar menikmati kopi di bawah langit sore.",
    tag: "Area Asri",
  },
];

export default function KafeVibe() {
  return (
    <section className="bg-stone-100/70 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-widest text-amber-700">
            Suasana & Fasilitas
          </span>
          <h2 className="mt-2 text-3xl font-bold text-stone-900 md:text-4xl">
            Lebih Dari Sekadar Tempat Ngopi
          </h2>
          <p className="mt-3 text-stone-600">
            Kami merancang setiap sudut Kopi Titik Temu agar produktivitas dan
            relaksasi berpadu harmonis.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {vibeFeatures.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col rounded-2xl border border-stone-200 bg-white p-6 shadow-xs transition-transform hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-800">
                <feature.icon className="h-6 w-6" />
              </div>
              <span className="mt-4 inline-block w-fit rounded-full bg-stone-100 px-2.5 py-0.5 text-[11px] font-semibold text-stone-600">
                {feature.tag}
              </span>
              <h3 className="mt-2 text-lg font-bold text-stone-900">
                {feature.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-stone-600">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Visual Callout Bar */}
        <div className="mt-12 overflow-hidden rounded-2xl bg-linear-to-r from-stone-900 via-amber-950 to-stone-900 p-8 text-white">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-400">
                <Coffee className="h-3.5 w-3.5" />
                In-House Roastery
              </span>
              <h3 className="mt-2 text-2xl font-bold">
                Biji Kopi Segar dari Roaster Sendiri
              </h3>
              <p className="mt-2 text-sm text-stone-300">
                Setiap minggu kami memanggang green beans pilihan dari petani
                Ijen, Gayo, dan Toraja agar profil rasa dan aromanya tetap di
                puncak kesegaran.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 text-center">
              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="text-2xl font-bold text-amber-400">100%</p>
                <p className="text-xs text-stone-300">Arabika Nusantara</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="text-2xl font-bold text-amber-400">40+</p>
                <p className="text-xs text-stone-300">Titik Colokan</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="text-2xl font-bold text-amber-400">80 Kursi</p>
                <p className="text-xs text-stone-300">Indoor & Outdoor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
