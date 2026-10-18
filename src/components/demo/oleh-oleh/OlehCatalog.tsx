"use client";

import { useMemo, useState } from "react";
import { ShoppingBag } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

interface OlehItem {
  id: number;
  name: string;
  category: "Semua" | "Kudapan Manis" | "Gurih & Renyah" | "Bumbu & Kopi";
  price: string;
  unit: string;
  desc: string;
  emoji: string;
  gradient: string;
  badge?: string;
}

const items: OlehItem[] = [
  { id: 1, name: "Tape Singkong Manis Besek", category: "Kudapan Manis", price: "Rp 35.000", unit: "per besek (750 gr)", desc: "Tape singkong mentega legit, wangi alami, kemasan besek bambu.", emoji: "🍠", gradient: "from-amber-400 to-yellow-600", badge: "Ikon Situbondo" },
  { id: 2, name: "Kerupuk Ikan Tenggiri Pesisir", category: "Gurih & Renyah", price: "Rp 28.000", unit: "per bungkus (250 gr)", desc: "Olahan daging ikan tenggiri segar pesisir Pasir Putih. Gurih & renyah.", emoji: "🐟", gradient: "from-orange-400 to-red-500", badge: "Favorit Gurih" },
  { id: 3, name: "Terasi Udang Rebon Besuki", category: "Bumbu & Kopi", price: "Rp 25.000", unit: "per kotak (5 batang)", desc: "Terasi murni rebon laut Situbondo tanpa pewarna, harum & sedap.", emoji: "🦐", gradient: "from-rose-500 to-amber-700", badge: "Resep Warisan" },
  { id: 4, name: "Rengginang Lorjuk Spesial", category: "Gurih & Renyah", price: "Rp 32.000", unit: "per toples (300 gr)", desc: "Rengginang ketan premium dengan taburan lorjuk laut gurih renyah.", emoji: "🍘", gradient: "from-stone-400 to-amber-600" },
  { id: 5, name: "Kopi Robusta Kayumas Situbondo", category: "Bumbu & Kopi", price: "Rp 45.000", unit: "per pack (200 gr)", desc: "Kopi lereng Ijen Kayumas bersertifikasi IG beraroma chocolaty unik.", emoji: "☕", gradient: "from-stone-700 to-stone-900", badge: "Kopi Juara" },
  { id: 6, name: "Keripik & Dodol Mangga Arumanis", category: "Kudapan Manis", price: "Rp 22.000", unit: "per pack (200 gr)", desc: "Manis harum khas mangga arumanis asli Situbondo, higienis & tahan lama.", emoji: "🥭", gradient: "from-yellow-400 to-orange-500" },
];

const categories: Array<OlehItem["category"]> = [
  "Semua",
  "Kudapan Manis",
  "Gurih & Renyah",
  "Bumbu & Kopi",
];

export default function OlehCatalog() {
  const [selectedCat, setSelectedCat] = useState<OlehItem["category"]>("Semua");

  const filteredItems = useMemo(
    () =>
      selectedCat === "Semua"
        ? items
        : items.filter((item) => item.category === selectedCat),
    [selectedCat]
  );

  return (
    <section id="katalog" className="bg-stone-50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-600">
            Katalog Produk
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
            Pilihan Oleh-Oleh Khas Terpopuler
          </h2>
          <p className="mt-3 text-stone-600">
            Semua produk diproduksi oleh pengrajin & UMKM lokal binaan di
            Situbondo, dikemas rapi dan higienis siap antar ke rumah Anda.
          </p>
        </div>

        {/* Category filter tabs */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCat(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                selectedCat === cat
                  ? "bg-orange-600 text-white shadow-sm"
                  : "border border-stone-200 bg-white text-stone-700 hover:border-orange-300"
              }`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((prod) => (
            <div
              key={prod.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div
                className={`relative flex h-44 items-center justify-center bg-linear-to-br ${prod.gradient} text-white`}>
                <span className="text-6xl drop-shadow-md" aria-hidden="true">
                  {prod.emoji}
                </span>
                {prod.badge && (
                  <span className="absolute top-3 right-3 rounded-full bg-stone-950/80 px-3 py-1 text-xs font-semibold text-orange-300 backdrop-blur-xs">
                    {prod.badge}
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                  {prod.category}
                </span>
                <h3 className="mt-1 text-xl font-bold text-stone-900">
                  {prod.name}
                </h3>
                <p className="mt-2 flex-1 text-sm text-stone-600">
                  {prod.desc}
                </p>

                <div className="mt-5 border-t border-stone-100 pt-4">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-xl font-extrabold text-orange-600">
                        {prod.price}
                      </span>
                      <span className="ml-1 text-xs text-stone-500">
                        /{prod.unit}
                      </span>
                    </div>
                  </div>

                  <a
                    href={waLink(
                      `Halo Oleh-Oleh Khas Situbondo, saya mau order ${prod.name} (${prod.price} / ${prod.unit}). Apakah stok tersedia?`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-stone-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-600">
                    <ShoppingBag className="h-4 w-4" />
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
