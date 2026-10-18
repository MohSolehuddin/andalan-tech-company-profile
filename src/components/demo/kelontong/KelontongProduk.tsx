import { ShoppingBasket } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

interface Sembako {
  id: number;
  name: string;
  unit: string;
  price: string;
  emoji: string;
  gradient: string;
}

const produk: Sembako[] = [
  { id: 1, name: "Beras Premium", unit: "5 kg", price: "Rp 72.000", emoji: "🍚", gradient: "from-lime-400 to-green-500" },
  { id: 2, name: "Gula Pasir", unit: "1 kg", price: "Rp 17.500", emoji: "🧂", gradient: "from-amber-300 to-yellow-500" },
  { id: 3, name: "Minyak Goreng", unit: "2 liter", price: "Rp 35.000", emoji: "🫗", gradient: "from-yellow-400 to-orange-500" },
  { id: 4, name: "Telur Ayam", unit: "1 kg", price: "Rp 29.000", emoji: "🥚", gradient: "from-orange-300 to-amber-500" },
  { id: 5, name: "Tepung Terigu", unit: "1 kg", price: "Rp 12.500", emoji: "🌾", gradient: "from-stone-300 to-amber-400" },
  { id: 6, name: "Mie Instan", unit: "1 dus (40 pcs)", price: "Rp 48.000", emoji: "🍜", gradient: "from-red-400 to-rose-500" },
  { id: 7, name: "Kecap Manis", unit: "520 ml", price: "Rp 15.000", emoji: "🫙", gradient: "from-amber-500 to-red-700" },
  { id: 8, name: "Sabun Mandi", unit: "4 pcs", price: "Rp 19.000", emoji: "🧼", gradient: "from-emerald-300 to-teal-500" },
];

export default function KelontongProduk() {
  return (
    <section id="produk" className="bg-neutral-50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-lime-700">
            Harga Hari Ini
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Sembako harian paling dicari
          </h2>
          <p className="mt-4 text-neutral-600">
            Harga dapat berubah mengikuti harga pasar. Stok tiap hari
            diperbarui — tanyakan ketersediaan via WhatsApp.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {produk.map((item) => (
            <div
              key={item.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <div
                className={`flex h-28 items-center justify-center bg-linear-to-br ${item.gradient}`}>
                <span className="text-5xl" aria-hidden="true">
                  {item.emoji}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-bold text-neutral-900">{item.name}</h3>
                <p className="mt-0.5 text-xs uppercase tracking-wide text-neutral-500">
                  {item.unit}
                </p>
                <p className="mt-2 text-lg font-bold text-lime-700">
                  {item.price}
                </p>
                <a
                  href={waLink(
                    `Halo Kelontong Sembako Murah, saya mau pesan ${item.name} ${item.unit} (${item.price}).`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-neutral-700">
                  <ShoppingBasket className="h-4 w-4" />
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
