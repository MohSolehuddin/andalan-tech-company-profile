"use client";

import { useMemo, useState } from "react";
import { ShoppingBag } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

interface Product {
  id: number;
  name: string;
  category: "Pupuk" | "Benih" | "Pestisida & Herbisida" | "Alat & Mesin Tani" | "Pakan";
  price: string;
  desc: string;
  emoji: string;
  gradient: string;
}

const products: Product[] = [
  { id: 1, name: "Benih Padi Inpari 32 Bersertifikat", category: "Benih", price: "Rp 115.000 / 5 kg", desc: "Benih resmi label biru, anakan produktif, tahan rebah & toleran wereng.", emoji: "🌾", gradient: "from-emerald-700 to-green-900" },
  { id: 2, name: "Benih Jagung Hibrida P35 Singa", category: "Benih", price: "Rp 135.000 / kg", desc: "Varietas unggulan petani Situbondo. Tongkol besar seragam & rendemen tinggi.", emoji: "🌽", gradient: "from-amber-600 to-yellow-800" },
  { id: 3, name: "Pupuk NPK Mutiara 16-16-16", category: "Pupuk", price: "Rp 18.000 / kg", desc: "Formula seimbang slow-release mempercepat pertumbuhan daun dan buah.", emoji: "🌱", gradient: "from-blue-700 to-cyan-900" },
  { id: 4, name: "Pupuk Organik Granul Petrobio", category: "Pupuk", price: "Rp 65.000 / sak (40 kg)", desc: "Menyuburkan struktur tanah sawah, kaya unsur hara makro & mikro alami.", emoji: "🪴", gradient: "from-stone-700 to-emerald-950" },
  { id: 5, name: "Insektisida Prevathon 50 SC", category: "Pestisida & Herbisida", price: "Rp 88.000 / 100 ml", desc: "Efektif membasmi hama penggerek batang padi, sundep, dan ulat grayak.", emoji: "🧪", gradient: "from-red-700 to-rose-950" },
  { id: 6, name: "Herbisida Kontak Gramoxone 276 SL", category: "Pestisida & Herbisida", price: "Rp 98.000 / liter", desc: "Pengendali gulma daun lebar & rumput liar pada lahan sawah olah tanah.", emoji: "💧", gradient: "from-teal-700 to-emerald-950" },
  { id: 7, name: "Sprayer Elektrik CBA 16L Ultra", category: "Alat & Mesin Tani", price: "Rp 375.000 / unit", desc: "Semprotan baterai awet 8 jam, semprotan halus merata, tangki tebal.", emoji: "🚜", gradient: "from-sky-700 to-blue-950" },
  { id: 8, name: "Cangkul Baja & Sabit Rumput", category: "Alat & Mesin Tani", price: "Rp 120.000 / set", desc: "Baja tempa asli lokal kuat dan tajam tahan lama untuk olah tanah pematang.", emoji: "🛠️", gradient: "from-zinc-700 to-slate-900" },
  { id: 9, name: "Pakan Konsentrat Sapi Penggemukan", category: "Pakan", price: "Rp 195.000 / 50 kg", desc: "Nutrisi protein & kalsium tinggi untuk percepatan bobot sapi potong.", emoji: "🐂", gradient: "from-orange-700 to-amber-950" },
  { id: 10, name: "Pakan Ayam Pedaging Starter 511", category: "Pakan", price: "Rp 11.500 / kg", desc: "Pakan komplit crumble dengan vitamin esensial untuk DOC hingga 21 hari.", emoji: "🐔", gradient: "from-yellow-700 to-orange-950" },
];

const categories = [
  "Semua",
  "Pupuk",
  "Benih",
  "Pestisida & Herbisida",
  "Alat & Mesin Tani",
  "Pakan",
] as const;

export default function TaniProducts() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");

  const filtered = useMemo(() => {
    if (selectedCategory === "Semua") return products;
    return products.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="katalog" className="bg-slate-50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-green-700">
            Katalog Produk Sarana Tani
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            Kebutuhan Tani Lengkap &amp; Siap Kirim
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Pilih kebutuhan pertanian Anda dengan jaminan mutu teruji, stok asli terdaftar, dan harga bersahabat.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-600 ${
                selectedCategory === cat
                  ? "bg-green-700 text-white shadow-xs"
                  : "border border-slate-200 bg-white text-slate-700 hover:border-green-400"
              }`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition-all hover:border-green-300 hover:shadow-md">
              <div
                className={`flex h-44 items-center justify-center bg-linear-to-br ${item.gradient} p-4 text-white`}>
                <span className="text-5xl" aria-hidden="true">
                  {item.emoji}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <span className="inline-block self-start rounded-md bg-green-50 px-2.5 py-0.5 text-xs font-semibold text-green-800">
                  {item.category}
                </span>
                <h3 className="mt-2 text-base font-bold text-slate-900">
                  {item.name}
                </h3>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-slate-600">Harga Estimasi</span>
                    <p className="font-bold text-green-700">{item.price}</p>
                  </div>
                </div>
                <a
                  href={waLink(
                    `Halo Tani Makmur Situbondo, saya ingin pesan: ${item.name} (${item.price}). Apakah ada stok?`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900">
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
