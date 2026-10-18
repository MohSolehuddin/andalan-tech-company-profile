"use client";

import { useMemo, useState } from "react";
import { Gem, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

interface JewelryItem {
  id: number;
  name: string;
  category: "Cincin" | "Kalung" | "Gelang" | "Anting";
  karat: string;
  weight: string;
  price: string;
  emoji: string;
  gradient: string;
}

const jewelryList: JewelryItem[] = [
  {
    id: 1,
    name: "Cincin Berlian Solitaire Tiffany Style",
    category: "Cincin",
    karat: "Emas Putih 17K (750)",
    weight: "± 2.45 gr",
    price: "Rp 3.850.000",
    emoji: "💍",
    gradient: "from-amber-300 to-yellow-500",
  },
  {
    id: 2,
    name: "Cincin Kawin Rose Gold Couple",
    category: "Cincin",
    karat: "Rose Gold 17K (750)",
    weight: "± 6.20 gr (Sepasang)",
    price: "Rp 7.650.000",
    emoji: "💍",
    gradient: "from-rose-300 to-amber-500",
  },
  {
    id: 3,
    name: "Kalung Rantai Milenia Italian Gold",
    category: "Kalung",
    karat: "Emas Kuning 17K (750)",
    weight: "± 3.10 gr",
    price: "Rp 3.920.000",
    emoji: "📿",
    gradient: "from-yellow-400 to-amber-600",
  },
  {
    id: 4,
    name: "Kalung Liontin Heart Sparkle Crystal",
    category: "Kalung",
    karat: "Emas Kuning 17K (750)",
    weight: "± 2.35 gr",
    price: "Rp 2.980.000",
    emoji: "✨",
    gradient: "from-amber-200 to-yellow-500",
  },
  {
    id: 5,
    name: "Gelang Bangle Aurelia Twist Modern",
    category: "Gelang",
    karat: "Emas Kuning 17K (750)",
    weight: "± 6.80 gr",
    price: "Rp 8.150.000",
    emoji: "💫",
    gradient: "from-yellow-300 to-amber-500",
  },
  {
    id: 6,
    name: "Gelang Rantai Paperclip Chunky Chic",
    category: "Gelang",
    karat: "Emas Kuning 17K (750)",
    weight: "± 4.15 gr",
    price: "Rp 5.120.000",
    emoji: "⛓️",
    gradient: "from-amber-400 to-yellow-600",
  },
  {
    id: 7,
    name: "Anting Tusuk Mutiara Laut Selatan",
    category: "Anting",
    karat: "Emas Kuning 17K (750)",
    weight: "± 1.95 gr",
    price: "Rp 2.650.000",
    emoji: "💎",
    gradient: "from-yellow-200 to-amber-400",
  },
  {
    id: 8,
    name: "Anting Hoop Classic Geometric Elegance",
    category: "Anting",
    karat: "Rose Gold 17K (750)",
    weight: "± 2.80 gr",
    price: "Rp 3.520.000",
    emoji: "🌟",
    gradient: "from-rose-400 to-yellow-500",
  },
];

const categories = ["Semua", "Cincin", "Kalung", "Gelang", "Anting"] as const;

export default function TokoEmasCollection() {
  const [activeCategory, setActiveCategory] = useState<string>("Semua");

  const filteredItems = useMemo(
    () =>
      activeCategory === "Semua"
        ? jewelryList
        : jewelryList.filter((item) => item.category === activeCategory),
    [activeCategory]
  );

  return (
    <section id="koleksi" className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-700">
            <Gem className="h-4 w-4" />
            Katalog Perhiasan
          </span>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Koleksi Pilihan & Cincin Kawin
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            Setiap perhiasan dilengkapi nota resmi toko, sertifikat kadar, dan box
            eksklusif.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                activeCategory === category
                  ? "bg-amber-600 text-white shadow-xs"
                  : "border border-neutral-200 bg-white text-neutral-700 hover:border-amber-400"
              }`}>
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xs transition-all hover:-translate-y-1 hover:shadow-md">
              <div
                className={`flex h-44 items-center justify-center bg-linear-to-br ${item.gradient}`}>
                <span className="text-6xl drop-shadow-xs" aria-hidden="true">
                  {item.emoji}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center justify-between text-xs text-neutral-500">
                  <span className="font-semibold uppercase text-amber-700">
                    {item.category}
                  </span>
                  <span>{item.weight}</span>
                </div>
                <h3 className="mt-1.5 font-bold text-neutral-900 line-clamp-2">
                  {item.name}
                </h3>
                <p className="mt-1 text-xs text-neutral-500">{item.karat}</p>
                <div className="mt-3 pt-3 border-t border-neutral-100">
                  <span className="text-xs text-neutral-500">Estimasi Harga</span>
                  <p className="text-lg font-bold text-neutral-950">
                    {item.price}
                  </p>
                </div>
                <a
                  href={waLink(
                    `Halo Emas Mulia Perhiasan, saya tertarik dengan ${item.name} (${item.price}, ${item.weight}). Apakah ready?`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-neutral-950 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-amber-600">
                  <MessageCircle className="h-4 w-4 text-emerald-400" />
                  Tanya via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
