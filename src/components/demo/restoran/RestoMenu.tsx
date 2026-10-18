import { waLink } from "@/lib/demo/wa";

interface Dish {
  name: string;
  desc: string;
  price: string;
  badge?: string;
}

const dishes: Dish[] = [
  {
    name: "Nasi Goreng Spesial",
    desc: "Nasi goreng kampung, telur mata sapi, kerupuk.",
    price: "Rp 25.000",
    badge: "Favorit",
  },
  {
    name: "Ayam Bakar Madu",
    desc: "Ayam kampung bakar bumbu madu, sambal terasi.",
    price: "Rp 32.000",
  },
  {
    name: "Soto Betawi",
    desc: "Kuah santan gurih, daging sapi empuk.",
    price: "Rp 28.000",
  },
  {
    name: "Gado-Gado Siram",
    desc: "Sayur segar, tahu tempe, bumbu kacang.",
    price: "Rp 20.000",
  },
  {
    name: "Es Teh Manis Jumbo",
    desc: "Teh tubruk, gula batu, es serut.",
    price: "Rp 8.000",
  },
  {
    name: "Pisang Goreng Keju",
    desc: "Pisang raja, topping keju & susu kental.",
    price: "Rp 15.000",
  },
];

export default function RestoMenu() {
  return (
    <section id="menu" className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
            Menu Andalan
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Dimasak segar, setiap pesanan
          </h2>
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
                  <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-700">
                    {dish.badge}
                  </span>
                )}
              </div>
              <p className="mt-2 flex-1 text-sm text-neutral-600">{dish.desc}</p>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-lg font-bold text-amber-600">
                  {dish.price}
                </span>
                <a
                  href={waLink(`Halo, saya mau pesan ${dish.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-neutral-700">
                  Pesan
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
