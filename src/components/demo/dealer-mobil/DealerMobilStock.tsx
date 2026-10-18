import { CalendarClock, Fuel, Gauge, MessageCircle, Settings2 } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

interface CarUnit {
  id: string;
  name: string;
  badge: string;
  price: string;
  year: number;
  mileage: string;
  transmission: string;
  fuel: string;
  gradientClass: string;
  emoji: string;
}

const units: CarUnit[] = [
  {
    id: "toyota-avanza-2022",
    name: "Toyota Avanza 1.5 G CVT",
    badge: "Tangan Pertama",
    price: "Rp 218.000.000",
    year: 2022,
    mileage: "24.500 km",
    transmission: "Matic",
    fuel: "Bensin",
    gradientClass: "from-red-700 to-slate-900",
    emoji: "🚙",
  },
  {
    id: "daihatsu-xenia-2021",
    name: "Daihatsu Xenia R 1.3",
    badge: "Pajak Panjang",
    price: "Rp 176.000.000",
    year: 2021,
    mileage: "31.200 km",
    transmission: "Manual",
    fuel: "Bensin",
    gradientClass: "from-slate-700 to-red-950",
    emoji: "🚗",
  },
  {
    id: "honda-brio-2023",
    name: "Honda Brio Satya E",
    badge: "Mulus Like New",
    price: "Rp 168.000.000",
    year: 2023,
    mileage: "12.800 km",
    transmission: "Matic",
    fuel: "Bensin",
    gradientClass: "from-red-600 to-rose-950",
    emoji: "🚘",
  },
  {
    id: "mitsubishi-xpander-2022",
    name: "Mitsubishi Xpander Ultimate",
    badge: "Kredit Ringan",
    price: "Rp 247.000.000",
    year: 2022,
    mileage: "19.400 km",
    transmission: "Matic",
    fuel: "Bensin",
    gradientClass: "from-slate-800 to-red-900",
    emoji: "🚐",
  },
  {
    id: "suzuki-ertiga-2021",
    name: "Suzuki Ertiga GX",
    badge: "Siap Pakai",
    price: "Rp 189.000.000",
    year: 2021,
    mileage: "36.700 km",
    transmission: "Manual",
    fuel: "Bensin",
    gradientClass: "from-rose-800 to-slate-950",
    emoji: "🚙",
  },
  {
    id: "toyota-innova-zenix-2023",
    name: "Toyota Innova Zenix Q Hybrid",
    badge: "Full Service Record",
    price: "Rp 415.000.000",
    year: 2023,
    mileage: "9.600 km",
    transmission: "Matic",
    fuel: "Hybrid",
    gradientClass: "from-red-800 to-slate-900",
    emoji: "🚘",
  },
];

export default function DealerMobilStock() {
  return (
    <section id="stok" className="bg-slate-50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
            Stok Mobil
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            Unit Pilihan Siap Dibawa Pulang
          </h2>
          <p className="mt-3 text-slate-600">
            Harga sudah termasuk surat lengkap. Unit bergaransi mesin dan bisa dikreditkan
            dengan DP ringan.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {units.map((car) => (
            <div
              key={car.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition-shadow hover:shadow-lg">
              {/* Visual Card Header without external image */}
              <div
                className={`relative flex h-44 flex-col justify-between bg-linear-to-br ${car.gradientClass} p-5 text-white`}>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur-xs">
                    {car.badge}
                  </span>
                  <span className="text-3xl">{car.emoji}</span>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-red-200">
                    Harga OTR
                  </p>
                  <p className="mt-1 text-2xl font-bold tracking-tight text-white">
                    {car.price}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-slate-900">{car.name}</h3>

                {/* Specs */}
                <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-slate-600">
                  <span className="inline-flex items-center gap-2">
                    <CalendarClock className="h-4 w-4 shrink-0 text-red-600" />
                    {car.year}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Gauge className="h-4 w-4 shrink-0 text-red-600" />
                    {car.mileage}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Settings2 className="h-4 w-4 shrink-0 text-red-600" />
                    {car.transmission}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Fuel className="h-4 w-4 shrink-0 text-red-600" />
                    {car.fuel}
                  </span>
                </div>

                {/* Action CTA */}
                <div className="mt-6 pt-2">
                  <a
                    href={waLink(
                      `Halo Auto Prima Dealer Mobil, saya tertarik dengan unit ${car.name} (${car.year}, ${car.mileage}). Mohon info harga dan kreditnya.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-600">
                    <MessageCircle className="h-4 w-4" />
                    Tanya Unit Ini
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
