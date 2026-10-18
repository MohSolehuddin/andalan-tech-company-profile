import { MessageCircle, Ruler } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

interface Concept {
  id: string;
  name: string;
  type: string;
  location: string;
  area: string;
  tags: string[];
  emoji: string;
  gradientClass: string;
}

const concepts: Concept[] = [
  {
    id: "rumah-minimalis-tropis",
    name: "Rumah Minimalis Tropis",
    type: "Hunian",
    location: "Situbondo",
    area: "120 m²",
    tags: ["Ruang keluarga", "Kamar utama"],
    emoji: "🏡",
    gradientClass: "from-rose-800 to-orange-950",
  },
  {
    id: "kantor-startup-cozy",
    name: "Kantor Startup Cozy",
    type: "Kantor",
    location: "Surabaya",
    area: "86 m²",
    tags: ["Open workspace", "Ruang meeting"],
    emoji: "💼",
    gradientClass: "from-orange-800 to-rose-950",
  },
  {
    id: "kafe-skandinavia",
    name: "Kafe Skandinavia",
    type: "F&B",
    location: "Malang",
    area: "95 m²",
    tags: ["Area bar", "Spot foto"],
    emoji: "☕",
    gradientClass: "from-rose-900 to-amber-950",
  },
  {
    id: "kamar-utama-modern",
    name: "Kamar Utama Modern",
    type: "Hunian",
    location: "Banyuwangi",
    area: "24 m²",
    tags: ["Walk-in closet", "Ambient light"],
    emoji: "🛏️",
    gradientClass: "from-amber-800 to-rose-950",
  },
  {
    id: "dapur-terbuka-hangat",
    name: "Dapur Terbuka Hangat",
    type: "Hunian",
    location: "Jember",
    area: "18 m²",
    tags: ["Kitchen set", "Island table"],
    emoji: "🍳",
    gradientClass: "from-rose-700 to-orange-900",
  },
  {
    id: "toko-konsep-kreatif",
    name: "Toko Konsep Kreatif",
    type: "Retail",
    location: "Sidoarjo",
    area: "64 m²",
    tags: ["Display produk", "Kasir & gudang"],
    emoji: "🛍️",
    gradientClass: "from-orange-900 to-rose-950",
  },
];

export default function InteriorPortfolio() {
  return (
    <section id="portofolio" className="bg-slate-50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-rose-600">
            Portofolio Konsep
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            Beberapa Konsep yang Pernah Kami Kerjakan
          </h2>
          <p className="mt-3 text-slate-600">
            Setiap proyek dimulai dari konsep 3D yang disetujui klien, lalu
            dieksekusi bertahap dengan anggaran yang terkendali.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {concepts.map((item) => (
            <div
              key={item.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition-shadow hover:shadow-lg">
              {/* Visual Card Header without external image */}
              <div
                className={`relative flex h-44 flex-col justify-between bg-linear-to-br ${item.gradientClass} p-5 text-white`}>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur-xs">
                    Konsep 3D
                  </span>
                  <span className="text-2xl">{item.emoji}</span>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-rose-200">
                    {item.type}
                  </p>
                  <p className="mt-1 text-lg font-bold tracking-tight text-white">
                    {item.location} · {item.area}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-slate-900">{item.name}</h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-600">
                  <Ruler className="h-4 w-4 shrink-0 text-rose-600" />
                  {item.tags.join(" · ")}
                </p>

                <div className="mt-6 pt-2">
                  <a
                    href={waLink(
                      `Halo Ruang Interior Studio, saya suka konsep "${item.name}" (${item.type} ${item.location}). Boleh minta estimasi biayanya?`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-rose-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-rose-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2">
                    <MessageCircle className="h-4 w-4" />
                    Tanya Konsep Ini
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
