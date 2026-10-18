"use client";

import { useMemo, useState } from "react";
import { MessageCircle, ShoppingBag } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  unit: string;
  emoji: string;
}

const products: Product[] = [
  { id: 1, name: "Gula Pasir Kristal Putih", category: "Sembako", price: "Rp 17.500", unit: "1 kg", emoji: "🌾" },
  { id: 2, name: "Telur Ayam Negeri Segar", category: "Sembako", price: "Rp 28.000", unit: "1 kg (16 btr)", emoji: "🥚" },
  { id: 3, name: "Mi Instan Goreng Spesial", category: "Sembako", price: "Rp 118.000", unit: "1 Karton (40 pcs)", emoji: "🍜" },
  { id: 4, name: "Tepung Terigu Serbaguna", category: "Sembako", price: "Rp 12.500", unit: "1 kg", emoji: "🍞" },
  { id: 5, name: "Air Mineral Galon", category: "Minuman & Snack", price: "Rp 22.000", unit: "19 Liter (Refill)", emoji: "💧" },
  { id: 6, name: "Kopi Bubuk Murni", category: "Minuman & Snack", price: "Rp 16.500", unit: "165 gram", emoji: "☕" },
  { id: 7, name: "Biskuit Cokelat Sandwich", category: "Minuman & Snack", price: "Rp 10.500", unit: "133 gram", emoji: "🍪" },
  { id: 8, name: "Teh Celup Melati Wangi", category: "Minuman & Snack", price: "Rp 8.000", unit: "Isi 25 kantong", emoji: "🍵" },
  { id: 9, name: "Cairan Pencuci Piring Jeruk Nipis", category: "Kebutuhan Rumah", price: "Rp 13.500", unit: "Pouch 750 ml", emoji: "🍽️" },
  { id: 10, name: "Pembersih Lantai Aroma Pinus", category: "Kebutuhan Rumah", price: "Rp 14.000", unit: "Pouch 800 ml", emoji: "✨" },
  { id: 11, name: "Tisu Wajah Premium", category: "Kebutuhan Rumah", price: "Rp 11.500", unit: "250 sheets", emoji: "🧻" },
  { id: 12, name: "Sabun Mandi Cair Antibakteri", category: "Perawatan Tubuh", price: "Rp 24.500", unit: "Refill 450 ml", emoji: "🧼" },
  { id: 13, name: "Sampo Anti Ketombe", category: "Perawatan Tubuh", price: "Rp 34.000", unit: "Botol 320 ml", emoji: "🧴" },
  { id: 14, name: "Pasta Gigi Perlindungan Ekstra", category: "Perawatan Tubuh", price: "Rp 17.000", unit: "Tube 190 gram", emoji: "🪥" },
];

const categories = [
  "Semua",
  "Sembako",
  "Minuman & Snack",
  "Kebutuhan Rumah",
  "Perawatan Tubuh",
];

export default function MinimarketCatalog() {
  const [activeTab, setActiveTab] = useState("Semua");

  const filteredProducts = useMemo(() => {
    if (activeTab === "Semua") return products;
    return products.filter((p) => p.category === activeTab);
  }, [activeTab]);

  return (
    <section id="katalog" className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-red-600">
            Katalog Produk Unggulan
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Sembako &amp; Kebutuhan Lengkap
          </h2>
          <p className="mt-3 text-neutral-600">
            Pilih item belanjaan Anda, pesan instan lewat WhatsApp, dan kami siapkan dalam hitungan menit.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveTab(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-600 ${
                activeTab === cat
                  ? "bg-red-600 text-white"
                  : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
              }`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="flex flex-col justify-between rounded-xl border border-neutral-200 bg-white p-4 transition-all hover:border-red-300 hover:shadow-xs">
              <div>
                <div className="flex h-28 items-center justify-center rounded-lg bg-linear-to-br from-neutral-50 to-red-50/40 text-4xl">
                  {product.emoji}
                </div>
                <span className="mt-3 inline-block rounded-md bg-neutral-100 px-2 py-0.5 text-xs text-neutral-600">
                  {product.category}
                </span>
                <h3 className="mt-1.5 font-bold text-neutral-900">
                  {product.name}
                </h3>
                <p className="text-xs text-neutral-600">{product.unit}</p>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-neutral-100 pt-3">
                <span className="font-bold text-red-600">{product.price}</span>
                <a
                  href={waLink(
                    `Halo Minimart Sejahtera, saya mau pesan ${product.name} (${product.unit}) - ${product.price}.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-md bg-neutral-900 px-2.5 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900">
                  <ShoppingBag className="h-3.5 w-3.5" />
                  Pesan
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Order Box */}
        <div className="mt-12 rounded-xl border border-neutral-200 bg-neutral-50 p-6 text-center sm:text-left sm:flex sm:items-center sm:justify-between">
          <div>
            <h4 className="font-bold text-neutral-900">
              Punya daftar belanjaan sendiri?
            </h4>
            <p className="mt-1 text-sm text-neutral-600">
              Kirim catatan belanja atau foto list barang Anda ke WhatsApp kasir, kami bantu kumpulkan total belanjanya.
            </p>
          </div>
          <a
            href={waLink("Halo Minimart Sejahtera, saya mau kirim daftar catatan belanja harian.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-600 sm:mt-0">
            <MessageCircle className="h-4 w-4" />
            Kirim Catatan Belanja
          </a>
        </div>
      </div>
    </section>
  );
}
