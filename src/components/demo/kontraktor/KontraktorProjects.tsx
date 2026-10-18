import { Briefcase, Calendar, MapPin, Maximize2, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const projects = [
  {
    title: "Rumah Tinggal Modern Minimalis 2 Lantai",
    category: "Bangun Baru",
    area: "145 m²",
    duration: "5 Bulan",
    location: "Sidoarjo, Jawa Timur",
    specs: "Pondasi footplat beton bertulang, lantai granit 60x60, kusen aluminium powder coating",
    gradient: "from-amber-700/80 to-stone-900",
  },
  {
    title: "Renovasi Total Fasad & Penambahan Lantai",
    category: "Renovasi Rumah",
    area: "170 m²",
    duration: "3,5 Bulan",
    location: "Surabaya Timur",
    specs: "Bongkar struktur lama, dak beton bondek lantai 2, fasad kisi-kisi kayu sintetis conwood",
    gradient: "from-stone-800 to-yellow-900/70",
  },
  {
    title: "Ruko Komersial 3 Pintu Modern",
    category: "Bangunan Komersial",
    area: "280 m²",
    duration: "6 Bulan",
    location: "Gresik Kota",
    specs: "Struktur beton K-250, pintu rolling door otomatis, instalasi genset & drainase terpadu",
    gradient: "from-yellow-900/80 to-stone-950",
  },
  {
    title: "Fit-out Interior Kantor & Co-working Space",
    category: "Interior Komersial",
    area: "210 m²",
    duration: "7 Minggu",
    location: "Pusat Kota Surabaya",
    specs: "Partisi gipsum kedap suara rockwool, plafon drop ceiling, tata lampu ambient LED hangat",
    gradient: "from-amber-900/60 to-stone-900",
  },
];

const KontraktorProjects = () => {
  return (
    <section id="portofolio" className="bg-white py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="inline-block rounded-full bg-stone-100 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-stone-800">
              Portofolio Pengerjaan
            </span>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl md:text-4xl">
              Hasil Karya Nyata di Lapangan
            </h2>
            <p className="mt-2 max-w-xl text-stone-600">
              Dokumentasi proyek konstruksi baru dan renovasi yang telah diserahterimakan dengan mutu teruji.
            </p>
          </div>
          <a
            href={waLink("Halo Bangun Karya Kontraktor, saya ingin melihat katalog portofolio proyek lengkap.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-yellow-700 hover:text-yellow-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-yellow-600 rounded">
            <MessageCircle className="h-4 w-4" />
            Minta Katalog Portofolio PDF via WA
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((proj) => (
            <div
              key={proj.title}
              className="group overflow-hidden rounded-xl border border-stone-200 bg-stone-50 transition-all hover:border-yellow-400 hover:shadow-md">
              {/* Visual preview block using Tailwind v4 gradient without external images */}
              <div className={`relative flex h-48 flex-col justify-between bg-linear-to-br ${proj.gradient} p-5 text-white`}>
                <div className="flex items-center justify-between">
                  <span className="rounded-md bg-black/40 px-2.5 py-1 text-xs font-medium backdrop-blur-xs">
                    {proj.category}
                  </span>
                  <span className="rounded-md bg-yellow-500/90 px-2.5 py-0.5 text-xs font-bold text-stone-950">
                    Selesai 100%
                  </span>
                </div>
                <div>
                  <div className="text-2xl opacity-40">🏗️</div>
                  <h3 className="mt-2 text-lg font-bold leading-snug drop-shadow-xs">{proj.title}</h3>
                </div>
              </div>

              <div className="p-5">
                <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-stone-600">
                  <span className="inline-flex items-center gap-1.5">
                    <Maximize2 className="h-3.5 w-3.5 text-yellow-600" />
                    Luas: {proj.area}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-yellow-600" />
                    Waktu: {proj.duration}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-yellow-600" />
                    {proj.location}
                  </span>
                </div>

                <p className="mt-3 text-xs leading-relaxed text-stone-600">
                  <strong className="text-stone-800">Spesifikasi:</strong> {proj.specs}
                </p>

                <div className="mt-4 pt-3 border-t border-stone-200/80">
                  <a
                    href={waLink(`Halo Bangun Karya Kontraktor, saya tertarik ingin bangun/renovasi dengan model seperti: ${proj.title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-stone-900 transition-colors hover:text-yellow-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 rounded">
                    <MessageCircle className="h-3.5 w-3.5 text-yellow-600" />
                    Konsultasi Model Serupa
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KontraktorProjects;
