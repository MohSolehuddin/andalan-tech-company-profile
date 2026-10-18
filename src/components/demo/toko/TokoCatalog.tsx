"use client";

import { useMemo, useState } from "react";
import { ShoppingBag } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

interface Product {
  id: number;
  name: string;
  price: string;
  category: string;
  emoji: string;
  gradient: string;
}

const products: Product[] = [
  { id: 1, name: "Kaos Polos Premium", price: "Rp 79.000", category: "Pakaian", emoji: "👕", gradient: "from-sky-400 to-blue-500" },
  { id: 2, name: "Kemeja Flanel", price: "Rp 149.000", category: "Pakaian", emoji: "👔", gradient: "from-rose-400 to-pink-500" },
  { id: 3, name: "Jaket Hoodie", price: "Rp 189.000", category: "Pakaian", emoji: "🧥", gradient: "from-slate-400 to-slate-600" },
  { id: 4, name: "Sneakers Kanvas", price: "Rp 250.000", category: "Sepatu", emoji: "👟", gradient: "from-emerald-400 to-teal-500" },
  { id: 5, name: "Sandal Kulit", price: "Rp 95.000", category: "Sepatu", emoji: "🩴", gradient: "from-amber-400 to-orange-500" },
  { id: 6, name: "Tas Kanvas", price: "Rp 120.000", category: "Aksesoris", emoji: "🎒", gradient: "from-indigo-400 to-indigo-600" },
  { id: 7, name: "Topi Baseball", price: "Rp 65.000", category: "Aksesoris", emoji: "🧢", gradient: "from-teal-400 to-sky-500" },
  { id: 8, name: "Gelang Rajut", price: "Rp 35.000", category: "Aksesoris", emoji: "📿", gradient: "from-pink-400 to-rose-600" },
];

const categories = ["Semua", "Pakaian", "Sepatu", "Aksesoris"];

export default function TokoCatalog() {
  const [active, setActive] = useState("Semua");

  const filtered = useMemo(
    () =>
      active === "Semua"
        ? products
        : products.filter((product) => product.category === active),
    [active]
  );

  return (
    <section id="katalog" className="bg-neutral-50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Katalog
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Pilih produk favorit Anda
          </h2>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 ${
                active === category
                  ? "bg-indigo-600 text-white"
                  : "border border-neutral-200 bg-white text-neutral-700 hover:border-indigo-400"
              }`}>
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <div
                className={`flex h-40 items-center justify-center bg-linear-to-br ${product.gradient}`}>
                <span className="text-6xl" aria-hidden="true">
                  {product.emoji}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <span className="text-xs uppercase tracking-wide text-neutral-600">
                  {product.category}
                </span>
                <h3 className="mt-1 font-bold text-neutral-900">
                  {product.name}
                </h3>
                <p className="mt-1 text-lg font-bold text-indigo-600">
                  {product.price}
                </p>
                <a
                  href={waLink(
                    `Halo TokoKita, saya mau beli ${product.name} (${product.price}).`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900">
                  <ShoppingBag className="h-4 w-4" />
                  Beli via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
