"use client";

import { useMemo, useState } from "react";
import { MessageCircle, Check } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

interface Product {
  id: number;
  name: string;
  category: "Smart TV" | "Kulkas" | "AC" | "Mesin Cuci";
  price: string;
  cicilan: string;
  specs: string[];
  emoji: string;
  gradient: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Smart TV 50\" 4K UHD HDR",
    category: "Smart TV",
    price: "Rp 4.899.000",
    cicilan: "Rp 408 rb/bln",
    specs: ["Dolby Audio & Vision", "Google TV Built-in", "Garansi Layar 2 Tahun"],
    emoji: "📺",
    gradient: "from-slate-700 to-blue-900",
  },
  {
    id: 2,
    name: "Premium OLED TV 65\" 120Hz",
    category: "Smart TV",
    price: "Rp 13.499.000",
    cicilan: "Rp 1.125 rb/bln",
    specs: ["Self-Lit Pixels True Black", "Gaming Mode HDMI 2.1", "Garansi Panel 3 Tahun"],
    emoji: "🖥️",
    gradient: "from-blue-900 to-indigo-950",
  },
  {
    id: 3,
    name: "Kulkas 2 Pintu Inverter 230L",
    category: "Kulkas",
    price: "Rp 3.599.000",
    cicilan: "Rp 300 rb/bln",
    specs: ["Hemat Listrik (100 Watt)", "No Frost & Anti Bau", "Garansi Kompresor 10 Tahun"],
    emoji: "🧊",
    gradient: "from-cyan-800 to-slate-900",
  },
  {
    id: 4,
    name: "Kulkas Side-by-Side Inverter 520L",
    category: "Kulkas",
    price: "Rp 8.999.000",
    cicilan: "Rp 750 rb/bln",
    specs: ["Multi Air Flow Cooling", "Touch Control Panel", "Garansi Kompresor 10 Tahun"],
    emoji: "❄️",
    gradient: "from-sky-700 to-blue-950",
  },
  {
    id: 5,
    name: "AC Split Inverter 1 PK Eco",
    category: "AC",
    price: "Rp 3.999.000",
    cicilan: "Rp 333 rb/bln",
    specs: ["Super Fast Cooling", "Filter Udara Antibakteri", "Garansi Kompresor 5 Tahun"],
    emoji: "💨",
    gradient: "from-blue-800 to-cyan-900",
  },
  {
    id: 6,
    name: "AC Low Watt 0.5 PK Ramah Lingkungan",
    category: "AC",
    price: "Rp 2.799.000",
    cicilan: "Rp 233 rb/bln",
    specs: ["Daya Rendah 330 Watt", "Freon R32 Ramah Lingkungan", "Garansi 3 Tahun"],
    emoji: "🌬️",
    gradient: "from-teal-800 to-slate-900",
  },
  {
    id: 7,
    name: "Mesin Cuci Front Loading 8.5 kg",
    category: "Mesin Cuci",
    price: "Rp 4.799.000",
    cicilan: "Rp 400 rb/bln",
    specs: ["Inverter Direct Drive", "Steam Allergy Care", "Garansi Motor 10 Tahun"],
    emoji: "🧺",
    gradient: "from-slate-800 to-blue-900",
  },
  {
    id: 8,
    name: "Mesin Cuci Top Loading 10 kg",
    category: "Mesin Cuci",
    price: "Rp 3.199.000",
    cicilan: "Rp 266 rb/bln",
    specs: ["TurboDrum Bersih Maksimal", "Smart Diagnosis", "Garansi Motor 5 Tahun"],
    emoji: "🧼",
    gradient: "from-indigo-900 to-slate-900",
  },
];

const categories = ["Semua", "Smart TV", "Kulkas", "AC", "Mesin Cuci"] as const;

export default function ElektronikCatalog() {
  const [activeTab, setActiveTab] = useState<string>("Semua");

  const filteredProducts = useMemo(() => {
    if (activeTab === "Semua") return products;
    return products.filter((p) => p.category === activeTab);
  }, [activeTab]);

  return (
    <section id="katalog" className="bg-slate-50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-600">
            Katalog Pilihan
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-4xl">
            Produk Elektronik Terlaris
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Seluruh produk dijamin 100% original, unit baru segel pabrik, dan siap antar ke rumah.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveTab(category)}
              className={`rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600 ${
                activeTab === category
                  ? "bg-blue-600 text-white shadow-xs"
                  : "border border-slate-200 bg-white text-slate-700 hover:border-blue-400"
              }`}>
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition-all hover:-translate-y-1 hover:shadow-md">
              <div
                className={`flex h-40 items-center justify-center bg-linear-to-br ${product.gradient} text-white`}>
                <span className="text-6xl drop-shadow-md" aria-hidden="true">
                  {product.emoji}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <span className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                  {product.category}
                </span>
                <h3 className="mt-1 font-bold text-slate-900 line-clamp-1">
                  {product.name}
                </h3>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-lg font-bold text-slate-900">
                    {product.price}
                  </span>
                </div>
                <div className="mt-1 inline-block rounded-md bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-700">
                  Cicilan 0%: {product.cicilan}
                </div>

                <ul className="mt-4 space-y-1.5 border-t border-slate-100 pt-3 text-xs text-slate-600">
                  {product.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-1.5">
                      <Check className="h-3.5 w-3.5 text-blue-500 shrink-0" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={waLink(
                    `Halo Elektronik Jaya Abadi, saya mau beli ${product.name} seharga ${product.price}. Apakah stok tersedia?`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600">
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
