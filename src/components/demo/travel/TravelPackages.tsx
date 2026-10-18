import { CalendarDays, MapPin, MessageCircle, Users } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

interface TravelPackage {
  id: string;
  name: string;
  destination: string;
  duration: string;
  price: string;
  priceNote: string;
  includes: string;
  badge: string;
  emoji: string;
  gradientClass: string;
}

const travelPackages: TravelPackage[] = [
  {
    id: "bali-escape",
    name: "Bali Escape",
    destination: "Ubud, Nusa Penida, Tanah Lot",
    duration: "4 Hari 3 Malam",
    price: "Rp 2.450.000",
    priceNote: "per orang, min. 2 pax",
    includes: "Hotel 3★ + Transport + Guide",
    badge: "Best Seller",
    emoji: "🌊",
    gradientClass: "from-cyan-700 to-blue-950",
  },
  {
    id: "bromo-sunrise",
    name: "Bromo Sunrise",
    destination: "Malang, Penanjakan, Kawah Bromo",
    duration: "3 Hari 2 Malam",
    price: "Rp 1.250.000",
    priceNote: "per orang, min. 4 pax",
    includes: "Jeep 4x4 + Homestay + Guide",
    badge: "Paling Diminati",
    emoji: "🌄",
    gradientClass: "from-blue-800 to-slate-950",
  },
  {
    id: "yogya-heritage",
    name: "Yogya Heritage",
    destination: "Borobudur, Prambanan, Malioboro",
    duration: "3 Hari 2 Malam",
    price: "Rp 1.100.000",
    priceNote: "per orang, min. 4 pax",
    includes: "Hotel 3★ + Bus + Tiket Candi",
    badge: "Ramah Keluarga",
    emoji: "🏛️",
    gradientClass: "from-cyan-800 to-blue-950",
  },
  {
    id: "lombok-gili",
    name: "Lombok & Gili",
    destination: "Gili Trawangan, Senggigi, Mataram",
    duration: "4 Hari 3 Malam",
    price: "Rp 2.150.000",
    priceNote: "per orang, min. 2 pax",
    includes: "Hotel 4★ + Boat + Guide",
    badge: "Honeymoon Favorit",
    emoji: "🏝️",
    gradientClass: "from-blue-700 to-cyan-950",
  },
  {
    id: "labuan-bajo-sailing",
    name: "Labuan Bajo Sailing",
    destination: "Komodo, Padar, Pink Beach",
    duration: "4 Hari 3 Malam",
    price: "Rp 3.850.000",
    priceNote: "per orang, min. 2 pax",
    includes: "Kapal Phinisi + Full Board",
    badge: "Trip Premium",
    emoji: "⛵",
    gradientClass: "from-cyan-900 to-slate-900",
  },
  {
    id: "raja-ampat-explorer",
    name: "Raja Ampat Explorer",
    destination: "Waisai, Piaynemo, Arborek",
    duration: "6 Hari 5 Malam",
    price: "Rp 7.500.000",
    priceNote: "per orang, min. 4 pax",
    includes: "Resort + Speedboat + Ranger",
    badge: "Ekspedisi Spesial",
    emoji: "🐠",
    gradientClass: "from-blue-900 to-cyan-950",
  },
];

export default function TravelPackages() {
  return (
    <section id="paket" className="bg-slate-50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-700">
            Paket Wisata Populer
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            Pilih Destinasi, Sisanya Kami Urus
          </h2>
          <p className="mt-3 text-slate-600">
            Semua paket sudah termasuk itinerary harian, guide lokal, hotel, dan transportasi — tanpa biaya tersembunyi.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {travelPackages.map((item) => (
            <div
              key={item.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition-shadow hover:shadow-lg">
              {/* Visual Card Header without external image */}
              <div
                className={`relative flex h-44 flex-col justify-between bg-linear-to-br ${item.gradientClass} p-5 text-white`}>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur-xs">
                    {item.badge}
                  </span>
                  <span className="text-2xl">{item.emoji}</span>
                </div>
                <div>
                  <p className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-cyan-200">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {item.duration}
                  </p>
                  <p className="mt-1 text-2xl font-bold tracking-tight text-white">
                    {item.price}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-slate-900">{item.name}</h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-500">
                  <MapPin className="h-4 w-4 shrink-0 text-cyan-600" />
                  {item.destination}
                </p>

                <div className="mt-5 flex flex-1 flex-col gap-2 border-y border-slate-100 py-4 text-xs text-slate-600">
                  <span className="flex items-center gap-2">
                    <Users className="h-4 w-4 shrink-0 text-cyan-600" />
                    {item.priceNote}
                  </span>
                  <span className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 shrink-0 text-cyan-600" />
                    {item.includes}
                  </span>
                </div>

                {/* Action CTA */}
                <div className="mt-5">
                  <a
                    href={waLink(
                      `Halo Jelajah Andalan Travel, saya ingin booking paket ${item.name} (${item.duration}). Mohon info jadwal dan harga terbarunya.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-cyan-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cyan-600">
                    <MessageCircle className="h-4 w-4" />
                    Booking Paket Ini
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
