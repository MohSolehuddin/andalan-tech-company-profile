import { ShoppingBag } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

interface BakeryProduct {
  name: string;
  category: "Roti Manis & Gurih" | "Pastry & Croissant" | "Roti Tawar & Artisan";
  desc: string;
  price: string;
  badge?: string;
  emoji: string;
}

const products: BakeryProduct[] = [
  {
    name: "Roti Sobek Cokelat Lumer",
    category: "Roti Manis & Gurih",
    desc: "Tekstur selembut sutra dengan isian cokelat Belgia pekat meleleh.",
    price: "Rp 18.000",
    badge: "Best Seller",
    emoji: "🍞",
  },
  {
    name: "Croissant Butter Prancis",
    category: "Pastry & Croissant",
    desc: "Kulit renyah berlapis dengan aroma butter New Zealand yang harum.",
    price: "Rp 22.000",
    badge: "Favorit",
    emoji: "🥐",
  },
  {
    name: "Roti Sisir Mentega Gula",
    category: "Roti Manis & Gurih",
    desc: "Resep jadul otentik bertabur gula pasir butir halus dan butter legit.",
    price: "Rp 16.000",
    emoji: "🥖",
  },
  {
    name: "Sourdough Gandum Alami",
    category: "Roti Tawar & Artisan",
    desc: "Fermentasi alami 36 jam, kaya serat, rendah gula, dan ramah lambung.",
    price: "Rp 35.000",
    badge: "Artisan",
    emoji: "🥪",
  },
  {
    name: "Pain au Chocolat",
    category: "Pastry & Croissant",
    desc: "Flaky puff pastry dengan dua batang cokelat dark impor di dalamnya.",
    price: "Rp 25.000",
    emoji: "🥐",
  },
  {
    name: "Roti Abon Sapi Pedas Gurih",
    category: "Roti Manis & Gurih",
    desc: "Topping abon sapi murni berpadu saus mayones pedas manis spesial.",
    price: "Rp 16.000",
    badge: "Populer",
    emoji: "🥯",
  },
];

const BakeryCatalog = () => {
  return (
    <section id="katalog" className="bg-amber-50/40 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-amber-100 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-amber-800">
            Katalog Harian
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-neutral-900 md:text-4xl">
            Roti & Pastry Pilihan Keluarga
          </h2>
          <p className="mt-2 text-sm text-neutral-600 md:text-base">
            Semua roti diproduksi fresh setiap hari tanpa pengawet sintetik.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((item) => (
            <div
              key={item.name}
              className="flex flex-col justify-between rounded-2xl border border-amber-200/60 bg-white p-6 shadow-xs transition-all hover:-translate-y-0.5 hover:border-amber-400 hover:shadow-md">
              <div>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100/70 text-2xl">
                    <span>{item.emoji}</span>
                  </div>
                  {item.badge && (
                    <span className="rounded-full bg-amber-500/15 px-2.5 py-1 text-xs font-semibold text-amber-800">
                      {item.badge}
                    </span>
                  )}
                </div>

                <div className="mt-4">
                  <span className="text-xs font-medium text-amber-700">
                    {item.category}
                  </span>
                  <h3 className="mt-1 text-lg font-bold text-neutral-900">
                    {item.name}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-neutral-100 pt-4">
                <div>
                  <span className="text-xs text-neutral-500">Harga per porsi</span>
                  <p className="text-lg font-extrabold text-amber-800">
                    {item.price}
                  </p>
                </div>
                <a
                  href={waLink(`Halo Dapur Roti Nusantara, saya ingin memesan: ${item.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-neutral-900 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-amber-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900">
                  <ShoppingBag className="h-3.5 w-3.5" />
                  Pesan
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BakeryCatalog;
