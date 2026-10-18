"use client";

import { useMemo, useState } from "react";
import { MessageCircle, ShoppingCart } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

interface SembakoProduct {
  id: number;
  name: string;
  category: string;
  price: string;
  unit: string;
  wholesale: string;
  emoji: string;
  gradient: string;
}

const products: SembakoProduct[] = [
  {
    id: 1,
    name: "Beras Rojo Lele 5kg",
    category: "Beras",
    price: "Rp 72.000",
    unit: "per sak (5kg)",
    wholesale: "Grosir ≥ 5 sak: Rp 69.500",
    emoji: "🌾",
    gradient: "from-emerald-600 to-teal-700",
  },
  {
    id: 2,
    name: "Beras Pandan Wangi 10kg",
    category: "Beras",
    price: "Rp 145.000",
    unit: "per sak (10kg)",
    wholesale: "Grosir ≥ 3 sak: Rp 140.000",
    emoji: "🍚",
    gradient: "from-green-600 to-emerald-800",
  },
  {
    id: 3,
    name: "Minyak Goreng Filma 2L",
    category: "Minyak & Gula",
    price: "Rp 38.500",
    unit: "per pouch (2L)",
    wholesale: "Grosir 1 dus (6 pouch): Rp 225.000",
    emoji: "🛢️",
    gradient: "from-amber-500 to-yellow-600",
  },
  {
    id: 4,
    name: "Minyak Goreng Botol 1L",
    category: "Minyak & Gula",
    price: "Rp 18.500",
    unit: "per botol (1L)",
    wholesale: "Grosir 1 dus (12 botol): Rp 215.000",
    emoji: "🟡",
    gradient: "from-amber-600 to-orange-600",
  },
  {
    id: 5,
    name: "Gula Pasir Gulaku 1kg",
    category: "Minyak & Gula",
    price: "Rp 17.500",
    unit: "per pack (1kg)",
    wholesale: "Grosir 1 dus (24 pack): Rp 405.000",
    emoji: "🧂",
    gradient: "from-slate-500 to-stone-600",
  },
  {
    id: 6,
    name: "Telur Ayam Ras Segar 1kg",
    category: "Telur & Bumbu",
    price: "Rp 28.000",
    unit: "per kg (isi 16-17 butir)",
    wholesale: "Grosir 1 peti (10kg): Rp 265.000",
    emoji: "🥚",
    gradient: "from-orange-500 to-amber-700",
  },
  {
    id: 7,
    name: "Gas Elpiji 3kg (Melon)",
    category: "Kebutuhan Rumah",
    price: "Rp 22.000",
    unit: "tukar tabung isi ulang",
    wholesale: "Siap antar & pasang regulator",
    emoji: "⛽",
    gradient: "from-lime-600 to-green-700",
  },
  {
    id: 8,
    name: "Mi Instan Sedaap 1 Dus",
    category: "Kebutuhan Rumah",
    price: "Rp 118.000",
    unit: "1 dus (isi 40 pcs)",
    wholesale: "Bisa ecer Rp 3.500 / bks",
    emoji: "🍜",
    gradient: "from-red-600 to-rose-700",
  },
];

const categories = ["Semua", "Beras", "Minyak & Gula", "Telur & Bumbu", "Kebutuhan Rumah"];

export default function TokoMaduraCatalog() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredProducts = useMemo(
    () =>
      activeCategory === "Semua"
        ? products
        : products.filter((item) => item.category === activeCategory),
    [activeCategory]
  );

  return (
    <section id="katalog" className="bg-neutral-50 px-4 py-16 md:py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
            <ShoppingCart className="h-3.5 w-3.5" />
            Katalog Sembako &amp; Kebutuhan Pokok
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
            Harga Ecer &amp; Grosir Transparan
          </h2>
          <p className="mt-2 text-neutral-600">
            Pilih kebutuhan dapur dan rumah tangga, klik tombol pesan, dan order
            langsung terkirim ke WhatsApp toko kami.
          </p>
        </div>

        {/* Filter Tab */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-emerald-700 text-white shadow-sm"
                  : "border border-neutral-200 bg-white text-neutral-700 hover:border-emerald-400"
              }`}>
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-emerald-300 hover:shadow-md">
              <div
                className={`flex h-36 items-center justify-center bg-linear-to-br ${product.gradient} text-white`}>
                <span className="text-5xl" aria-hidden="true">
                  {product.emoji}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                  {product.category}
                </span>
                <h3 className="mt-1 font-bold text-neutral-900">
                  {product.name}
                </h3>
                <div className="mt-2">
                  <p className="text-xl font-bold text-emerald-700">
                    {product.price}
                  </p>
                  <p className="text-xs text-neutral-500">{product.unit}</p>
                </div>
                <div className="mt-3 rounded-lg bg-emerald-50 px-2.5 py-1.5 text-xs text-emerald-800">
                  💡 {product.wholesale}
                </div>
                <div className="mt-5 pt-3 border-t border-neutral-100">
                  <a
                    href={waLink(
                      `Halo Toko Madura Barokah, saya mau pesan ${product.name} (${product.price} - ${product.unit}). Tolong info total dan ongkir ke alamat saya ya.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-3 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-emerald-500">
                    <MessageCircle className="h-4 w-4" />
                    Pesan via WhatsApp
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
