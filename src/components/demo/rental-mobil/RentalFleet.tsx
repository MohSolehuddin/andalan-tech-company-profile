import { MessageCircle, Settings2, Users } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

interface RentalCar {
  id: string;
  name: string;
  badge: string;
  seats: number;
  transmission: string;
  pricePerDay: string;
  note: string;
  emoji: string;
  gradientClass: string;
}

const cars: RentalCar[] = [
  {
    id: "honda-brio",
    name: "Honda Brio",
    badge: "City Car",
    seats: 5,
    transmission: "Matic",
    pricePerDay: "Rp 300.000",
    note: "Irit & lincah untuk dalam kota",
    emoji: "🚗",
    gradientClass: "from-sky-800 to-blue-950",
  },
  {
    id: "toyota-avanza",
    name: "Toyota Avanza",
    badge: "Paling Diminati",
    seats: 7,
    transmission: "Matic / Manual",
    pricePerDay: "Rp 350.000",
    note: "Andalan keluarga & perjalanan dinas",
    emoji: "🚙",
    gradientClass: "from-blue-800 to-sky-950",
  },
  {
    id: "toyota-innova-zenix",
    name: "Toyota Innova Zenix",
    badge: "MPV Premium",
    seats: 7,
    transmission: "Matic",
    pricePerDay: "Rp 550.000",
    note: "Nyaman untuk perjalanan jauh",
    emoji: "🚐",
    gradientClass: "from-sky-900 to-slate-900",
  },
  {
    id: "mitsubishi-pajero-sport",
    name: "Mitsubishi Pajero Sport",
    badge: "SUV Tangguh",
    seats: 7,
    transmission: "Matic",
    pricePerDay: "Rp 850.000",
    note: "Siap medan luar kota & pegunungan",
    emoji: "🚙",
    gradientClass: "from-slate-900 to-sky-950",
  },
  {
    id: "toyota-hiace",
    name: "Toyota Hiace Commuter",
    badge: "Minibus Rombongan",
    seats: 14,
    transmission: "Manual",
    pricePerDay: "Rp 900.000",
    note: "Cocok wisata & antar jemput grup",
    emoji: "🚌",
    gradientClass: "from-blue-900 to-sky-950",
  },
  {
    id: "toyota-alphard",
    name: "Toyota Alphard",
    badge: "Luxury",
    seats: 7,
    transmission: "Matic",
    pricePerDay: "Rp 2.500.000",
    note: "Tamu VIP, pengantin & acara resmi",
    emoji: "🚘",
    gradientClass: "from-sky-950 to-blue-900",
  },
];

export default function RentalFleet() {
  return (
    <section id="armada" className="bg-slate-50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-700">
            Armada Kami
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            Pilih Mobil Sesuai Kebutuhan Anda
          </h2>
          <p className="mt-3 text-slate-600">
            Semua unit rutin diservis, bersih, wangi, dan siap jalan. Harga sewa
            harian untuk lepas kunci — dengan driver tersedia di semua unit.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((car) => (
            <div
              key={car.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition-shadow hover:shadow-lg">
              {/* Visual Card Header without external image */}
              <div
                className={`relative flex h-40 flex-col justify-between bg-linear-to-br ${car.gradientClass} p-5 text-white`}>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur-xs">
                    {car.badge}
                  </span>
                  <span className="text-2xl">{car.emoji}</span>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-sky-200">
                    Mulai dari
                  </p>
                  <p className="mt-1 text-2xl font-bold tracking-tight text-white">
                    {car.pricePerDay}
                    <span className="text-sm font-medium text-sky-200"> /hari</span>
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-slate-900">{car.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{car.note}</p>

                <div className="mt-6 grid grid-cols-2 gap-2 border-y border-slate-100 py-3 text-xs text-slate-600">
                  <div className="flex items-center justify-center gap-1.5">
                    <Users className="h-4 w-4 text-sky-600" />
                    <span className="font-semibold text-slate-900">
                      {car.seats} Kursi
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-1.5 border-l border-slate-100">
                    <Settings2 className="h-4 w-4 text-sky-600" />
                    <span className="font-semibold text-slate-900">
                      {car.transmission}
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-2">
                  <a
                    href={waLink(
                      `Halo Sewa Mobil Andalan, saya ingin tanya sewa ${car.name} (${car.transmission}, ${car.seats} kursi).`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-600">
                    <MessageCircle className="h-4 w-4" />
                    Tanya Mobil Ini
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
