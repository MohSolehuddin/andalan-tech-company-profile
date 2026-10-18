import { BedDouble, Maximize2, MessageCircle, Users } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

interface Room {
  id: string;
  name: string;
  badge: string;
  price: string;
  description: string;
  guests: number;
  bed: string;
  area: number;
  emoji: string;
  gradientClass: string;
}

const rooms: Room[] = [
  {
    id: "standard-room",
    name: "Standard Room",
    badge: "Paling Hemat",
    price: "Rp 350.000",
    description: "Kamar nyaman untuk perjalanan singkat dengan fasilitas lengkap.",
    guests: 2,
    bed: "1 Queen",
    area: 20,
    emoji: "🛏️",
    gradientClass: "from-teal-800 to-emerald-950",
  },
  {
    id: "deluxe-room",
    name: "Deluxe Room",
    badge: "Favorit Tamu",
    price: "Rp 525.000",
    description: "Kamar lebih luas dengan sofa kecil dan pemandangan kota.",
    guests: 2,
    bed: "1 King",
    area: 26,
    emoji: "🌇",
    gradientClass: "from-emerald-800 to-teal-950",
  },
  {
    id: "family-suite",
    name: "Family Suite",
    badge: "Cocok Keluarga",
    price: "Rp 780.000",
    description: "Dua tempat tidur dan ruang duduk untuk keluarga kecil.",
    guests: 4,
    bed: "2 Queen",
    area: 38,
    emoji: "👨‍👩‍👧‍👦",
    gradientClass: "from-teal-900 to-slate-900",
  },
  {
    id: "executive-suite",
    name: "Executive Suite",
    badge: "Paling Lega",
    price: "Rp 950.000",
    description: "Suite eksklusif dengan ruang kerja dan akses lounge.",
    guests: 3,
    bed: "1 King + Sofa",
    area: 45,
    emoji: "🛎️",
    gradientClass: "from-slate-900 to-emerald-950",
  },
];

export default function HotelRooms() {
  return (
    <section id="kamar" className="bg-slate-50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-700">
            Tipe Kamar
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            Pilih Kamar Sesuai Kebutuhan Anda
          </h2>
          <p className="mt-3 text-slate-600">
            Semua harga sudah termasuk sarapan untuk dua orang dan akses fasilitas hotel.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition-shadow hover:shadow-lg">
              {/* Visual Card Header without external image */}
              <div
                className={`relative flex h-40 flex-col justify-between bg-linear-to-br ${room.gradientClass} p-5 text-white`}>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur-xs">
                    {room.badge}
                  </span>
                  <span className="text-2xl">{room.emoji}</span>
                </div>
                <div>
                  <p className="text-xs text-teal-200 uppercase tracking-wider">Mulai dari</p>
                  <p className="mt-1 text-xl font-bold tracking-tight text-white">
                    {room.price}
                    <span className="text-sm font-normal text-teal-200"> /malam</span>
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-bold text-slate-900">{room.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{room.description}</p>

                {/* Specs */}
                <div className="mt-5 grid grid-cols-3 gap-2 border-y border-slate-100 py-3 text-center text-xs text-slate-600">
                  <div className="flex flex-col items-center justify-center gap-1">
                    <span className="flex items-center gap-1 font-semibold text-slate-900">
                      <Users className="h-4 w-4 text-teal-600" />
                      {room.guests} Tamu
                    </span>
                    <span className="text-[11px] text-slate-400">Kapasitas</span>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1 border-x border-slate-100">
                    <span className="flex items-center gap-1 font-semibold text-slate-900">
                      <BedDouble className="h-4 w-4 text-teal-600" />
                      {room.bed}
                    </span>
                    <span className="text-[11px] text-slate-400">Tempat tidur</span>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1">
                    <span className="flex items-center gap-1 font-semibold text-slate-900">
                      <Maximize2 className="h-4 w-4 text-teal-600" />
                      {room.area} m²
                    </span>
                    <span className="text-[11px] text-slate-400">Luas</span>
                  </div>
                </div>

                {/* Action CTA */}
                <div className="mt-5 pt-1">
                  <a
                    href={waLink(
                      `Halo Hotel Nyaman Stay, saya ingin memesan ${room.name} (${room.price}/malam).`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-500">
                    <MessageCircle className="h-4 w-4" />
                    Pesan Kamar Ini
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
