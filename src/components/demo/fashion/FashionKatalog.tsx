"use client";

import { useMemo, useState } from "react";
import { ShoppingBag } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

interface Product {
  id: number;
  name: string;
  price: string;
  category: string;
  sizes: string[];
  emoji: string;
  gradient: string;
}

const products: Product[] = [
  { id: 1, name: "Kaos Oversize Basic", price: "Rp 89.000", category: "Atasan", sizes: ["S", "M", "L", "XL"], emoji: "👕", gradient: "from-violet-400 to-purple-500" },
  { id: 2, name: "Kemeja Flanel Kotak", price: "Rp 159.000", category: "Atasan", sizes: ["M", "L", "XL", "XXL"], emoji: "👔", gradient: "from-rose-400 to-pink-500" },
  { id: 3, name: "Polo Distro Stripe", price: "Rp 129.000", category: "Atasan", sizes: ["S", "M", "L", "XL"], emoji: "🎽", gradient: "from-sky-400 to-blue-500" },
  { id: 4, name: "Cargo Pants Ripstop", price: "Rp 219.000", category: "Bawahan", sizes: ["28", "30", "32", "34"], emoji: "👖", gradient: "from-emerald-400 to-teal-500" },
  { id: 5, name: "Celana Jogger Fleece", price: "Rp 179.000", category: "Bawahan", sizes: ["S", "M", "L", "XL"], emoji: "🩳", gradient: "from-slate-400 to-slate-600" },
  { id: 6, name: "Jaket Varsity Nusantara", price: "Rp 289.000", category: "Outer", sizes: ["M", "L", "XL"], emoji: "🧥", gradient: "from-amber-400 to-orange-500" },
  { id: 7, name: "Tote Bag Kanvas", price: "Rp 75.000", category: "Aksesoris", sizes: ["All size"], emoji: "👜", gradient: "from-cyan-400 to-sky-500" },
  { id: 8, name: "Topi Trucker Logo", price: "Rp 69.000", category: "Aksesoris", sizes: ["All size"], emoji: "🧢", gradient: "from-fuchsia-400 to-pink-500" },
];

const categories = ["Semua", "Atasan", "Bawahan", "Outer", "Aksesoris"];

export default function FashionKatalog() {
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
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-600">
            Katalog
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Pilih gaya, cek ukuran
          </h2>
          <p className="mt-3 text-neutral-600">
            Semua produk ready stock dengan pilihan ukuran yang jelas.
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
                  ? "bg-violet-600 text-white"
                  : "border border-neutral-200 bg-white text-neutral-700 hover:border-violet-400"
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
                <span className="text-xs uppercase tracking-wide text-neutral-500">
                  {product.category}
                </span>
                <h3 className="mt-1 font-bold text-neutral-900">
                  {product.name}
                </h3>
                <p className="mt-1 text-lg font-bold text-violet-600">
                  {product.price}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {product.sizes.map((size) => (
                    <span
                      key={size}
                      className="rounded-md border border-neutral-200 px-2 py-0.5 text-xs text-neutral-600">
                      {size}
                    </span>
                  ))}
                </div>
                <a
                  href={waLink(
                    `Halo Distro Style Nusantara, saya mau pesan ${product.name} (${product.price}). Ukuran yang tersedia: ${product.sizes.join(", ")}.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-neutral-700">
                  <ShoppingBag className="h-4 w-4" />
                  Pesan via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
