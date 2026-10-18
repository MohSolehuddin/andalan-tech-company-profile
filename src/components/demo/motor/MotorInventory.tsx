"use client";

import { useState } from "react";
import { Bike, MessageCircle, Sparkles } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

interface MotorItem {
  id: string;
  name: string;
  category: "Matic" | "Bebek" | "Sport";
  condition: "Unit Baru" | "Bekas Terawat";
  price: string;
  dp: string;
  installment: string;
  engine: string;
  features: string;
  gradient: string;
}

const inventory: MotorItem[] = [
  {
    id: "scoopy-prestige",
    name: "Honda Scoopy Prestige 2024",
    category: "Matic",
    condition: "Unit Baru",
    price: "Rp 22.850.000",
    dp: "DP mulai 1,2 jt",
    installment: "860 rb x 35 bln",
    engine: "110cc eSP",
    features: "Smart Key, USB Charger, Combi Brake",
    gradient: "from-orange-800 to-amber-950",
  },
  {
    id: "nmax-155",
    name: "Yamaha NMAX 155 Connected 2024",
    category: "Matic",
    condition: "Unit Baru",
    price: "Rp 32.650.000",
    dp: "DP mulai 2,5 jt",
    installment: "1,22 jt x 35 bln",
    engine: "155cc VVA Blue Core",
    features: "Y-Connect, Traction Control, ABS",
    gradient: "from-slate-800 to-orange-950",
  },
  {
    id: "vario-160",
    name: "Honda Vario 160 CBS 2023",
    category: "Matic",
    condition: "Bekas Terawat",
    price: "Rp 23.200.000",
    dp: "DP mulai 1,0 jt",
    installment: "890 rb x 35 bln",
    engine: "160cc 4-Katup eSP+",
    features: "KM 9.800, Pajak Hidup, Body Mulus",
    gradient: "from-zinc-800 to-red-950",
  },
  {
    id: "supra-gtr-150",
    name: "Honda Supra GTR 150 Sporty 2024",
    category: "Bebek",
    condition: "Unit Baru",
    price: "Rp 25.400.000",
    dp: "DP mulai 1,5 jt",
    installment: "940 rb x 35 bln",
    engine: "150cc DOHC 6-Speed",
    features: "Kopling Manual, Digital Panel Meter",
    gradient: "from-red-900 to-slate-900",
  },
  {
    id: "jupiter-z1",
    name: "Yamaha Jupiter Z1 Fi 2022",
    category: "Bebek",
    condition: "Bekas Terawat",
    price: "Rp 13.700.000",
    dp: "DP mulai 750 rb",
    installment: "530 rb x 35 bln",
    engine: "115cc Fuel Injection",
    features: "KM 16.000, Ban Tebal, Mesin Segel",
    gradient: "from-stone-800 to-orange-950",
  },
  {
    id: "cbr-150r",
    name: "Honda CBR150R Victory Red 2023",
    category: "Sport",
    condition: "Bekas Terawat",
    price: "Rp 28.500.000",
    dp: "DP mulai 2,8 jt",
    installment: "1,14 jt x 35 bln",
    engine: "150cc DOHC Liquid Cooled",
    features: "Inverted Front Fork, Slipper Clutch",
    gradient: "from-red-950 to-neutral-900",
  },
];

const categories = ["Semua", "Matic", "Bebek", "Sport"] as const;

export default function MotorInventory() {
  const [selectedCategory, setSelectedCategory] = useState<(typeof categories)[number]>("Semua");

  const filteredMotors = selectedCategory === "Semua"
    ? inventory
    : inventory.filter((item) => item.category === selectedCategory);

  return (
    <section id="stok-motor" className="bg-slate-50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
            Katalog Unit Ready Stock
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Pilihan Motor Baru &amp; Bekas Berkualitas
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
            Semua unit bekas melalui inspeksi ketat 40 titik cek mesin dan kelistrikan.
            Unit baru ready stock dengan plat nomor dan pengurusan STNK kilat.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-500 ${
                  selectedCategory === cat
                    ? "bg-orange-600 text-white shadow-sm"
                    : "border border-slate-300 bg-white text-slate-700 hover:border-orange-400 hover:text-orange-600"
                }`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredMotors.map((motor) => (
            <div
              key={motor.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition-all hover:border-orange-300 hover:shadow-lg">
              <div className={`relative flex h-44 flex-col justify-between bg-linear-to-br ${motor.gradient} p-5 text-white`}>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/20 px-2.5 py-1 text-xs font-semibold backdrop-blur-md">
                    <Bike className="h-3.5 w-3.5" />
                    {motor.category}
                  </span>
                  <span className="rounded-full bg-orange-500/90 px-2.5 py-1 text-xs font-bold text-white shadow-xs">
                    {motor.condition}
                  </span>
                </div>
                <div>
                  <p className="text-xs text-orange-200">Kapasitas Mesin</p>
                  <p className="text-xl font-bold tracking-tight text-white">{motor.engine}</p>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-bold text-slate-900">{motor.name}</h3>
                <p className="mt-1 text-xs text-slate-500">{motor.features}</p>

                <div className="mt-4 border-t border-slate-100 pt-3">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs text-slate-500">Harga Cash</span>
                    <span className="text-lg font-extrabold text-orange-600">{motor.price}</span>
                  </div>
                  <div className="mt-1.5 flex items-center justify-between rounded-lg bg-orange-50 px-2.5 py-1.5 text-xs text-orange-950">
                    <span className="font-medium text-orange-800">{motor.dp}</span>
                    <span className="font-bold text-orange-700">{motor.installment}</span>
                  </div>
                </div>

                <div className="mt-5 pt-1">
                  <a
                    href={waLink(`Halo Motor Jaya Showroom, saya tertarik menanyakan ketersediaan ${motor.name} (${motor.price}). Apakah unit masih tersedia?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-2.5 text-xs font-bold text-white transition-colors hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-600">
                    <MessageCircle className="h-4 w-4" />
                    Tanya Unit via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-orange-200 bg-orange-50/80 p-4 text-center text-xs text-orange-900 sm:text-sm">
          <Sparkles className="inline-block h-4 w-4 mr-1 text-orange-600" />
          Mencari tipe motor lain? Kami memiliki puluhan stok lainnya yang siap dikirim. Hubungi tim showroom kami via WhatsApp.
        </div>
      </div>
    </section>
  );
}
