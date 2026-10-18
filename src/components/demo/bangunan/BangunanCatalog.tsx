"use client";

import { useMemo, useState } from "react";
import { ShoppingCart } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

interface Material {
  id: number;
  name: string;
  price: string;
  category: string;
  emoji: string;
  gradient: string;
}

const materials: Material[] = [
  { id: 1, name: "Semen Portland 40 kg", price: "Rp 58.000", category: "Semen & Pasir", emoji: "🏗️", gradient: "from-stone-400 to-stone-600" },
  { id: 2, name: "Pasir Beton per m³", price: "Rp 285.000", category: "Semen & Pasir", emoji: "🏖️", gradient: "from-amber-300 to-yellow-500" },
  { id: 3, name: "Besi Beton Polos 10 mm (12 m)", price: "Rp 78.000", category: "Besi & Baja", emoji: "🔩", gradient: "from-slate-400 to-slate-600" },
  { id: 4, name: "Besi Hollow 4x4 (6 m)", price: "Rp 47.000", category: "Besi & Baja", emoji: "🧰", gradient: "from-zinc-400 to-neutral-600" },
  { id: 5, name: "Cat Tembok Interior 5 kg", price: "Rp 139.000", category: "Cat & Finishing", emoji: "🎨", gradient: "from-orange-400 to-rose-500" },
  { id: 6, name: "Cat Kayu & Besi 1 kg", price: "Rp 57.000", category: "Cat & Finishing", emoji: "🖌️", gradient: "from-red-400 to-orange-500" },
  { id: 7, name: "Keramik Lantai 40x40 (dus)", price: "Rp 65.000", category: "Keramik & Lantai", emoji: "🟫", gradient: "from-amber-500 to-amber-700" },
  { id: 8, name: "Nat Keramik 1 kg", price: "Rp 18.000", category: "Keramik & Lantai", emoji: "✨", gradient: "from-yellow-300 to-amber-500" },
];

const categories = ["Semua", "Semen & Pasir", "Besi & Baja", "Cat & Finishing", "Keramik & Lantai"];

export default function BangunanCatalog() {
  const [active, setActive] = useState("Semua");

  const filtered = useMemo(
    () =>
      active === "Semua"
        ? materials
        : materials.filter((material) => material.category === active),
    [active]
  );

  return (
    <section id="katalog" className="bg-stone-50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-700">
            Katalog Material
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Semua kebutuhan bangunan, satu tempat
          </h2>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === category
                  ? "bg-stone-900 text-white"
                  : "border border-neutral-200 bg-white text-neutral-700 hover:border-stone-400"
              }`}>
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((material) => (
            <div
              key={material.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <div
                className={`flex h-40 items-center justify-center bg-linear-to-br ${material.gradient}`}>
                <span className="text-6xl" aria-hidden="true">
                  {material.emoji}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <span className="text-xs uppercase tracking-wide text-neutral-500">
                  {material.category}
                </span>
                <h3 className="mt-1 font-bold text-neutral-900">
                  {material.name}
                </h3>
                <p className="mt-1 text-lg font-bold text-amber-700">
                  {material.price}
                </p>
                <a
                  href={waLink(
                    `Halo Toko Bangunan Kokoh, saya mau pesan ${material.name} (${material.price}). Mohon info stok dan ongkir.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-stone-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-stone-700">
                  <ShoppingCart className="h-4 w-4" />
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
