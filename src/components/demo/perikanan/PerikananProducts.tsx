"use client";

import { useMemo, useState } from "react";
import { MessageCircle, ShoppingBag } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

interface SeafoodProduct {
  id: number;
  name: string;
  category: string;
  price: string;
  unit: string;
  emoji: string;
  spec: string;
  gradient: string;
}

const products: SeafoodProduct[] = [
  {
    id: 1,
    name: "Ikan Kerapu Cantang",
    category: "Ikan Segar",
    price: "Rp 85.000",
    unit: "/ kg",
    emoji: "🐟",
    spec: "Size 500-800 gr/ekor, hidup/segar es",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    id: 2,
    name: "Kakap Merah Pesisir",
    category: "Ikan Segar",
    price: "Rp 78.000",
    unit: "/ kg",
    emoji: "🐠",
    spec: "Size 700 gr - 1.5 kg, tangkapan pancing",
    gradient: "from-rose-400 to-red-600",
  },
  {
    id: 3,
    name: "Tongkol Komo Segar",
    category: "Ikan Segar",
    price: "Rp 32.000",
    unit: "/ kg",
    emoji: "🐟",
    spec: "Tangkapan subuh, mata jernih & insang merah",
    gradient: "from-sky-400 to-slate-700",
  },
  {
    id: 4,
    name: "Bandeng Laut Panarukan",
    category: "Ikan Segar",
    price: "Rp 38.000",
    unit: "/ kg",
    emoji: "🐟",
    spec: "Size 3-4 ekor/kg, bebas bau lumpur",
    gradient: "from-teal-400 to-emerald-600",
  },
  {
    id: 5,
    name: "Udang Vaname Super",
    category: "Udang & Cumi",
    price: "Rp 92.000",
    unit: "/ kg",
    emoji: "🦐",
    spec: "Size 40-50 pcs/kg, panen tambak air asin",
    gradient: "from-amber-400 to-orange-600",
  },
  {
    id: 6,
    name: "Cumi-Cumi Sero",
    category: "Udang & Cumi",
    price: "Rp 75.000",
    unit: "/ kg",
    emoji: "🦑",
    spec: "Size sedang 15-20 cm, kulit utuh & kenyal",
    gradient: "from-violet-400 to-indigo-600",
  },
  {
    id: 7,
    name: "Kerupuk Ikan Khas Situbondo",
    category: "Olahan Hasil Laut",
    price: "Rp 45.000",
    unit: "/ 500 gr",
    emoji: "🍘",
    spec: "Rasa gurih alami tenggiri, siap goreng",
    gradient: "from-yellow-400 to-amber-600",
  },
  {
    id: 8,
    name: "Ikan Asap Tongkol / Pareng",
    category: "Olahan Hasil Laut",
    price: "Rp 28.000",
    unit: "/ besek",
    emoji: "🍱",
    spec: "Pengasapan batok kelapa tradisional harum",
    gradient: "from-stone-500 to-zinc-700",
  },
  {
    id: 9,
    name: "Fillet Dori / Kakap Beku",
    category: "Olahan Hasil Laut",
    price: "Rp 68.000",
    unit: "/ 1 kg pack",
    emoji: "🧊",
    spec: "Skinless boneless, glazing 15%, vacuum pack",
    gradient: "from-blue-400 to-cyan-600",
  },
];

const categories = ["Semua", "Ikan Segar", "Udang & Cumi", "Olahan Hasil Laut"];

export default function PerikananProducts() {
  const [active, setActive] = useState("Semua");

  const filtered = useMemo(
    () =>
      active === "Semua"
        ? products
        : products.filter((p) => p.category === active),
    [active]
  );

  return (
    <section id="produk" className="bg-slate-50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-700">
            Katalog Pasokan
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            Produk Laut Segar & Olahan Pilihan
          </h2>
          <p className="mt-3 text-slate-600">
            Melayani partai besar (grosir), pasokan resto/katering, serta eceran pesanan khusus.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === category
                  ? "bg-cyan-700 text-white shadow-xs"
                  : "border border-slate-200 bg-white text-slate-700 hover:border-cyan-400"
              }`}>
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition-all hover:-translate-y-1 hover:shadow-md">
              <div
                className={`flex h-44 items-center justify-center bg-linear-to-br ${item.gradient}`}>
                <span className="text-6xl" aria-hidden="true">
                  {item.emoji}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-700">
                  {item.category}
                </span>
                <h3 className="mt-1 text-lg font-bold text-slate-900">
                  {item.name}
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  {item.spec}
                </p>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-cyan-800">
                    {item.price}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {item.unit}
                  </span>
                </div>
                <a
                  href={waLink(
                    `Halo Samudra Situbondo, saya ingin memesan produk: ${item.name} (${item.price} ${item.unit}). Berapa minimal order dan ketersediaan hari ini?`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-cyan-700">
                  <MessageCircle className="h-4 w-4" />
                  Order via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
