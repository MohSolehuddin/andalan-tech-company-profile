import { Flame, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

interface MenuPackage {
  name: string;
  desc: string;
  price: string;
  level: string;
  badge?: string;
}

const packages: MenuPackage[] = [
  {
    name: "Geprek Original",
    desc: "Ayam krispi digeprek sambal bawang + nasi hangat + lalapan.",
    price: "Rp 15.000",
    level: "Level 1–3",
    badge: "Favorit",
  },
  {
    name: "Geprek Mozzarella",
    desc: "Geprek sambal bawang dengan lelehan mozzarella + nasi.",
    price: "Rp 25.000",
    level: "Level 2–5",
    badge: "Best Seller",
  },
  {
    name: "Geprek Sambal Matah",
    desc: "Geprek krispi sambal matah khas Bali + nasi hangat.",
    price: "Rp 22.000",
    level: "Level 1–5",
  },
  {
    name: "Geprek Komplit",
    desc: "Geprek + nasi + tahu tempe goreng + es teh manis.",
    price: "Rp 20.000",
    level: "Level 1–5",
    badge: "Hemat",
  },
  {
    name: "Paket Sharing Berdua",
    desc: "2 geprek + 2 nasi + tahu tempe + 2 es teh manis.",
    price: "Rp 45.000",
    level: "Level 1–5",
  },
  {
    name: "Geprek Anak No Pedas",
    desc: "Geprek original tanpa sambal, nasi bentuk + susu kotak.",
    price: "Rp 14.000",
    level: "Tanpa pedas",
  },
];

export default function AyamMenu() {
  return (
    <section id="menu" className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
            Menu Paket
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Pilih paket, tentukan level pedasmu
          </h2>
          <p className="mt-3 text-neutral-600">
            Semua paket digeprek dadakan saat dipesan. Level 1 paling aman,
            level 5 untuk pecinta pedas sejati.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((item) => (
            <div
              key={item.name}
              className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-bold text-neutral-900">
                  {item.name}
                </h3>
                {item.badge && (
                  <span className="rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-semibold text-red-700">
                    {item.badge}
                  </span>
                )}
              </div>
              <p className="mt-2 flex-1 text-sm text-neutral-600">{item.desc}</p>
              <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600">
                <Flame className="h-3.5 w-3.5" />
                {item.level}
              </div>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-lg font-bold text-red-600">
                  {item.price}
                </span>
                <a
                  href={waLink(
                    `Halo Ayam Geprek Mantap, saya mau pesan ${item.name} (${item.price}, ${item.level}).`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900">
                  <MessageCircle className="h-4 w-4" />
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
