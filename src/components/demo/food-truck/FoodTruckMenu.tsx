import { waLink } from "@/lib/demo/wa";

interface Dish {
  name: string;
  desc: string;
  price: string;
  badge?: string;
}

const dishes: Dish[] = [
  {
    name: "Roda Rasa Burger",
    desc: "Beef patty juicy, keju cheddar, saus rahasia, bun panggang.",
    price: "Rp 28.000",
    badge: "Favorit",
  },
  {
    name: "Chicken Katsu Rice Bowl",
    desc: "Ayam katsu renyah, nasi hangat, saus teriyaki & mayo.",
    price: "Rp 27.000",
  },
  {
    name: "Beef Slider Duo",
    desc: "Dua mini burger sapi, karamelisasi bawang, pickle.",
    price: "Rp 32.000",
    badge: "Baru",
  },
  {
    name: "Taco Ayam Sambal Matah",
    desc: "Tortilla lembut, ayam grill, sambal matah segar.",
    price: "Rp 25.000",
  },
  {
    name: "Kentang Truk Crispy",
    desc: "Kentang goreng bumbu rumah, saus keju opsional.",
    price: "Rp 15.000",
  },
  {
    name: "Es Lemon Tea Jumbo",
    desc: "Teh lemon segar, es batu, porsi besar untuk berbagi.",
    price: "Rp 10.000",
  },
];

export default function FoodTruckMenu() {
  return (
    <section id="menu" className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-yellow-700">
            Menu Andalan
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Dimasak dadakan, langsung dari truk
          </h2>
          <p className="mt-3 text-neutral-600">
            Porsi mengenyangkan dengan bahan segar. Tersedia juga paket bundling
            hemat untuk rombongan.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dishes.map((dish) => (
            <div
              key={dish.name}
              className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-bold text-neutral-900">
                  {dish.name}
                </h3>
                {dish.badge && (
                  <span className="shrink-0 rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-semibold text-yellow-700">
                    {dish.badge}
                  </span>
                )}
              </div>
              <p className="mt-2 flex-1 text-sm text-neutral-600">{dish.desc}</p>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-lg font-bold text-red-600">
                  {dish.price}
                </span>
                <a
                  href={waLink(
                    `Halo Roda Rasa Food Truck, saya mau pesan ${dish.name}.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-neutral-700">
                  Pesan
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-neutral-500">
          Pre-order minimal 1 jam sebelum jam tutup. Pesanan rombongan (10+
          porsi) mohon konfirmasi via WhatsApp.
        </p>
      </div>
    </section>
  );
}
