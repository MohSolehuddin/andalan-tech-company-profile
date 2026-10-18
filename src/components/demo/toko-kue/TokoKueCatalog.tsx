"use client";

import { useMemo, useState } from "react";
import { ShoppingBag } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

interface KueProduct {
  id: string;
  name: string;
  category: "Kue Ulang Tahun" | "Dessert Box" | "Brownies";
  portion: string;
  price: string;
  desc: string;
  emoji: string;
  gradient: string;
  isPopular?: boolean;
}

const products: KueProduct[] = [
  {
    id: "kue-korean",
    name: "Korean Minimalist Cake",
    category: "Kue Ulang Tahun",
    portion: "Diameter 14 cm (4-6 porsi)",
    price: "Rp 145.000",
    desc: "Desain aesthetic minimalis pastel dengan butter cream vanila lembut dan sponge cake fluffy.",
    emoji: "🎂",
    gradient: "from-pink-400 to-rose-400",
    isPopular: true,
  },
  {
    id: "kue-blackforest",
    name: "Classic Black Forest",
    category: "Kue Ulang Tahun",
    portion: "Diameter 18 cm (8-10 porsi)",
    price: "Rp 195.000",
    desc: "Cake cokelat moist legit dengan lapisan selai dark cherry dan serutan dark chocolate.",
    emoji: "🍫",
    gradient: "from-stone-700 to-rose-950",
  },
  {
    id: "kue-redvelvet",
    name: "Velvet Blossom Cake",
    category: "Kue Ulang Tahun",
    portion: "Diameter 16 cm (6-8 porsi)",
    price: "Rp 175.000",
    desc: "Sponge red velvet harum dengan olesan cream cheese frosting gurih dan crumble renyah.",
    emoji: "🍰",
    gradient: "from-rose-500 to-red-600",
  },
  {
    id: "box-tiramisu",
    name: "Tiramisu Melt Box",
    category: "Dessert Box",
    portion: "Ukuran 350 ml (Personal)",
    price: "Rp 45.000",
    desc: "Ladyfingers beraroma espresso segar berpadu krim mascarpone lumer dan bubuk kakao murni.",
    emoji: "☕",
    gradient: "from-amber-600 to-yellow-700",
    isPopular: true,
  },
  {
    id: "box-choco",
    name: "Belgian Choco Mousse",
    category: "Dessert Box",
    portion: "Ukuran 350 ml (Personal)",
    price: "Rp 48.000",
    desc: "Triple layer mousse cokelat Belgia kaya rasa dengan taburan roasted choco crunch.",
    emoji: "🍮",
    gradient: "from-amber-800 to-stone-900",
  },
  {
    id: "box-biscoff",
    name: "Lotus Biscoff Dream",
    category: "Dessert Box",
    portion: "Ukuran 350 ml (Personal)",
    price: "Rp 48.000",
    desc: "Kombinasi sponge lembut, selai lotus karamel khas, dan biskuit biscoff gurih renyah.",
    emoji: "🍪",
    gradient: "from-orange-500 to-amber-600",
  },
  {
    id: "brownies-shiny",
    name: "Fudgy Shiny Crust",
    category: "Brownies",
    portion: "Ukuran 20x10 cm (10 potong)",
    price: "Rp 65.000",
    desc: "Brownies panggang dengan lapisan shiny crust berkilau, tekstur fudgy chewy cokelat pekat.",
    emoji: "🧇",
    gradient: "from-stone-800 to-zinc-900",
    isPopular: true,
  },
  {
    id: "brownies-sekat",
    name: "Brownies Sekat 5 Topping",
    category: "Brownies",
    portion: "Ukuran 20x20 cm (25 potong)",
    price: "Rp 98.000",
    desc: "Brownies sekat dengan aneka topping: almond, keju parut, oreo, choco chips & lotus.",
    emoji: "🧁",
    gradient: "from-pink-500 to-amber-600",
  },
];

const categories = ["Semua", "Kue Ulang Tahun", "Dessert Box", "Brownies"] as const;

export default function TokoKueCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "Semua") return products;
    return products.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="katalog" className="bg-neutral-50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-pink-600">
            Katalog Favorit
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-neutral-900 md:text-4xl">
            Pilihan Manis untuk Anda
          </h2>
          <p className="mt-3 text-neutral-600">
            Semua kue dibuat dengan bahan higienis, butter berkualitas, dan fresh setiap hari.
          </p>
        </div>

        {/* Filter Tab */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-pink-600 text-white shadow-xs"
                  : "border border-neutral-200 bg-white text-neutral-700 hover:border-pink-300 hover:text-pink-600"
              }`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-pink-300 hover:shadow-lg">
              <div
                className={`relative flex h-40 items-center justify-center bg-linear-to-br ${item.gradient}`}>
                <span className="text-6xl transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
                  {item.emoji}
                </span>
                {item.isPopular && (
                  <span className="absolute top-3 right-3 rounded-full bg-white/90 px-2.5 py-0.5 text-xs font-bold text-pink-700 shadow-xs backdrop-blur-xs">
                    Favorit
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-5">
                <span className="text-xs font-medium text-pink-600">{item.category}</span>
                <h3 className="mt-1 text-base font-bold text-neutral-900 group-hover:text-pink-600">
                  {item.name}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-neutral-500">{item.desc}</p>
                <div className="mt-3 text-xs text-neutral-400">{item.portion}</div>

                <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between gap-2">
                  <span className="text-base font-bold text-neutral-900">{item.price}</span>
                  <a
                    href={waLink(`Halo Manis Kue & Dessert, saya ingin pesan ${item.name} (${item.price}).`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-pink-500 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-pink-600">
                    <ShoppingBag className="h-3.5 w-3.5" />
                    Pesan WA
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
