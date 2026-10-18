import { Bike, CalendarDays, MessageCircle, Percent, Timer } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const promos = [
  {
    icon: Percent,
    title: "Geprek Selasa",
    desc: "Beli 1 gratis 1 level 1–2, khusus makan di tempat setiap Selasa.",
  },
  {
    icon: CalendarDays,
    title: "Promo Pelajar",
    desc: "Tunjukkan kartu pelajar, langsung potong Rp 3.000 per paket.",
  },
  {
    icon: Bike,
    title: "Gratis Ongkir",
    desc: "Min. belanja Rp 25.000 dalam radius 5 km dari outlet terdekat.",
  },
];

export default function AyamPromo() {
  return (
    <section id="promo" className="bg-neutral-50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
            Promo & Pesan Antar
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Makin hemat, makin nampol
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {promos.map((promo) => (
            <div
              key={promo.title}
              className="rounded-2xl border border-neutral-200 bg-white p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100">
                <promo.icon className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-neutral-900">
                {promo.title}
              </h3>
              <p className="mt-1 text-sm text-neutral-600">{promo.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-2xl bg-linear-to-r from-red-600 to-amber-500 px-6 py-8 text-white md:flex-row md:px-10">
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-red-100">
              <Timer className="h-4 w-4" />
              Pesan Antar
            </span>
            <h3 className="mt-2 text-2xl font-bold">
              Diantar panas dalam 30 menit
            </h3>
            <p className="mt-2 max-w-xl text-sm text-red-50">
              Pesan langsung lewat WhatsApp atau temukan kami di GoFood,
              GrabFood, dan ShopeeFood. Kurir sendiri melayani radius 8 km dari
              tiap outlet.
            </p>
          </div>
          <a
            href={waLink(
              "Halo Ayam Geprek Mantap, saya mau pesan antar ke alamat saya."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-red-700 transition-colors hover:bg-red-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white">
            <MessageCircle className="h-5 w-5" />
            Pesan Antar Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
