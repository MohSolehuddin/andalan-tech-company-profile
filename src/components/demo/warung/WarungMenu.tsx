import { Flame, UtensilsCrossed } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

interface MenuItem {
  name: string;
  category: "Lauk Utama" | "Sayur & Pelengkap" | "Minuman";
  desc: string;
  price: string;
  badge?: string;
}

const menuList: MenuItem[] = [
  {
    name: "Ayam Goreng Kampung",
    category: "Lauk Utama",
    desc: "Ayam kampung goreng kunyit, gurih sampai ke tulang.",
    price: "Rp 12.000",
    badge: "Terlaris",
  },
  {
    name: "Ikan Tongkol Balado",
    category: "Lauk Utama",
    desc: "Tongkol segar dibalur sambal balado pedas manis.",
    price: "Rp 10.000",
  },
  {
    name: "Telur Dadar Tebal",
    category: "Lauk Utama",
    desc: "Dadar tiga telur dengan irisan bawang dan seledri.",
    price: "Rp 6.000",
  },
  {
    name: "Tempe Orek Kecap",
    category: "Sayur & Pelengkap",
    desc: "Tempe manis pedas dengan bawang merah goreng.",
    price: "Rp 4.000",
    badge: "Favorit",
  },
  {
    name: "Tumis Kangkung Terasi",
    category: "Sayur & Pelengkap",
    desc: "Kangkung muda ditumis terasi, tetap renyah.",
    price: "Rp 5.000",
  },
  {
    name: "Sayur Lodeh Nangka",
    category: "Sayur & Pelengkap",
    desc: "Kuah santan encer, nangka muda, dan kacang panjang.",
    price: "Rp 5.000",
  },
  {
    name: "Es Teh Manis Jumbo",
    category: "Minuman",
    desc: "Teh tubruk gula batu, gelas jumbo.",
    price: "Rp 4.000",
  },
  {
    name: "Es Jeruk Peras",
    category: "Minuman",
    desc: "Jeruk peras asli tanpa pemanis buatan.",
    price: "Rp 5.000",
    badge: "Segar",
  },
  {
    name: "Kopi Tubruk Panas",
    category: "Minuman",
    desc: "Kopi robusta lokal, diseduh klasik ala warung.",
    price: "Rp 4.000",
  },
];

export default function WarungMenu() {
  return (
    <section id="menu" className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-widest text-red-600">
            <UtensilsCrossed className="h-4 w-4" />
            Menu Harian
          </span>
          <h2 className="mt-2 text-3xl font-bold text-stone-900 md:text-4xl">
            Dimasak Segar Tiap Pagi
          </h2>
          <p className="mt-3 text-stone-600">
            Menu berganti setiap hari mengikuti bahan pasar. Harga nasi putih
            hanya Rp 3.000 per porsi.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menuList.map((item) => (
            <div
              key={item.name}
              className="flex flex-col rounded-2xl border border-stone-200 bg-stone-50/50 p-6 shadow-xs transition-all hover:border-red-300 hover:bg-white hover:shadow-md">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="text-xs font-medium text-stone-500">
                    {item.category}
                  </span>
                  <h3 className="mt-0.5 text-lg font-bold text-stone-900">
                    {item.name}
                  </h3>
                </div>
                {item.badge && (
                  <span className="rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-semibold text-red-700">
                    {item.badge}
                  </span>
                )}
              </div>

              <p className="mt-3 flex-1 text-sm text-stone-600">{item.desc}</p>

              <div className="mt-6 flex items-center justify-between border-t border-stone-200/60 pt-4">
                <span className="text-lg font-bold text-red-600">
                  {item.price}
                </span>
                <a
                  href={waLink(
                    `Halo Warung Sederhana Jaya, saya mau pesan ${item.name} (${item.price}).`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-stone-900 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-stone-900">
                  Pesan
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl bg-red-50 p-6 sm:flex-row sm:p-8">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-200/80 text-red-800">
              <Flame className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-stone-900">
                Lauk Habis? Pesan Duluan
              </h4>
              <p className="text-sm text-stone-600">
                Menu favorit sering habis sebelum pukul 13.00. Titip pesanan
                pagi agar tidak kehabisan.
              </p>
            </div>
          </div>
          <a
            href={waLink(
              "Halo Warung Sederhana Jaya, saya mau titip pesan lauk untuk makan siang ini."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-red-300 bg-white px-5 py-2.5 text-sm font-semibold text-red-800 transition-colors hover:bg-red-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-600">
            Titip Pesanan
          </a>
        </div>
      </div>
    </section>
  );
}
