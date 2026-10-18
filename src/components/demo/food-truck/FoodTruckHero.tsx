import { CalendarDays, MapPin, Star, Truck } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const highlights = [
  { icon: Star, label: "Rating 4.8 dari 210 pelanggan" },
  { icon: MapPin, label: "Keliling Situbondo & sekitarnya" },
  { icon: CalendarDays, label: "Buka untuk sewa acara" },
];

export default function FoodTruckHero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white">
      <div className="absolute inset-0 bg-linear-to-br from-yellow-950/60 via-neutral-950 to-red-950/40" />
      <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-yellow-500/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-red-600/20 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/40 bg-yellow-500/10 px-4 py-1.5 text-sm font-medium text-yellow-300">
              <Truck className="h-4 w-4" />
              Food Truck Keliling & Jasa Boga
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
              Roda Rasa Food Truck
            </h1>
            <p className="mt-4 max-w-xl text-lg text-neutral-300">
              Masakan segar langsung dari dapur beroda kami. Mampir ke lokasi
              harian, atau undang food truck kami ke acara Anda — semua bisa
              dipesan lewat WhatsApp.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={waLink(
                  "Halo Roda Rasa Food Truck, saya mau pesan menu untuk hari ini."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-yellow-500 px-6 py-3 font-semibold text-neutral-950 transition-colors hover:bg-yellow-400">
                <Truck className="h-5 w-5" />
                Pesan via WhatsApp
              </a>
              <a
                href="#jadwal"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10">
                <MapPin className="h-5 w-5" />
                Lihat Jadwal Lokasi
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-neutral-300">
              {highlights.map((item) => (
                <span key={item.label} className="inline-flex items-center gap-2">
                  <item.icon className="h-4 w-4 text-yellow-400" />
                  {item.label}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-linear-to-br from-yellow-500 to-red-600 p-1 shadow-2xl">
              <div className="rounded-[22px] bg-neutral-950/85 p-8">
                <span className="text-6xl" aria-hidden="true">
                  🚚
                </span>
                <h2 className="mt-6 text-2xl font-bold">
                  Lagi mangkal di mana?
                </h2>
                <p className="mt-2 text-sm text-neutral-300">
                  Jadwal lokasi diperbarui setiap minggu. Pantau juga story
                  WhatsApp kami untuk info lokasi dadakan.
                </p>
                <div className="mt-6 space-y-3 text-sm">
                  <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
                    <span className="text-neutral-300">Hari ini</span>
                    <span className="font-semibold text-yellow-300">
                      Alun-Alun Situbondo
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
                    <span className="text-neutral-300">Jam buka</span>
                    <span className="font-semibold text-yellow-300">
                      11.00 – 20.00 WIB
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
                    <span className="text-neutral-300">Pre-order</span>
                    <span className="font-semibold text-yellow-300">
                      Mulai 10.00 WIB
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
