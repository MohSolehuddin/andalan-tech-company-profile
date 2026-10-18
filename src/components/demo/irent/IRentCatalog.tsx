"use client";

import { useId, useState } from "react";
import { BatteryCharging, Camera, Cpu, MessageCircle, RotateCcw, Search } from "lucide-react";
import { DEVICES, formatRp, type DeviceItem } from "./deviceData";
import { waLink } from "@/lib/demo/wa";

const CATEGORIES = [
  { id: "all", label: "Semua Unit" },
  { id: "pro", label: "Seri Pro & Pro Max" },
  { id: "standard", label: "Seri Reguler" },
  { id: "concert", label: "Paket Konser Ready (Tele 5x)" },
];

const IRentCatalog = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const searchInputId = useId();

  const filtered = DEVICES.filter((dev) => {
    const matchCategory =
      activeCategory === "all" ||
      (activeCategory === "pro" && dev.series === "pro") ||
      (activeCategory === "standard" && dev.series === "standard") ||
      (activeCategory === "concert" && dev.isConcertReady);

    const q = searchQuery.toLowerCase().trim();
    const matchSearch =
      !q ||
      dev.name.toLowerCase().includes(q) ||
      dev.storage.toLowerCase().includes(q) ||
      dev.tag.toLowerCase().includes(q);

    return matchCategory && matchSearch;
  });

  return (
    <section id="katalog" className="py-16 bg-slate-900 border-y border-slate-800 scroll-mt-14">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header & Search */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">
              Daftar Unit & Tarif Transparan
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Katalog iPhone Ready Sewa
            </h2>
            <p className="text-slate-400 text-sm mt-1 max-w-xl">
              Melalui 24-point quality inspection: baterai prima, kamera jernih, iCloud bebas, dan bodi mulus terawat 98–99%.
            </p>
          </div>

          <div className="w-full md:w-72">
            <label htmlFor={searchInputId} className="sr-only">
              Cari unit iPhone
            </label>
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                id={searchInputId}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari seri (misal: 16 Pro, 256GB)..."
                className="w-full px-3.5 py-2.5 pl-10 text-xs rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-400 focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8 border-b border-slate-800">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none ${
                activeCategory === cat.id
                  ? "bg-white text-slate-950 shadow-sm"
                  : "bg-slate-950 text-slate-300 hover:text-white border border-slate-800"
              }`}
            >
              {cat.label}
              {cat.id === "all" ? ` (${DEVICES.length})` : ""}
            </button>
          ))}
        </div>

        {/* Device Cards Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((dev: DeviceItem) => (
              <div
                key={dev.id}
                className="rounded-xl p-5 bg-slate-950 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {dev.tag}
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-400">
                      ● {dev.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white">{dev.name}</h3>
                  <p className="text-xs text-slate-400 mb-4">{dev.color} • {dev.storage}</p>

                  <div className="space-y-2 mb-5 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <Camera className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{dev.camera}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Cpu className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span>{dev.chip}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BatteryCharging className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>Battery Health: <strong className="text-white">{dev.batteryHealth}</strong></span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 space-y-3">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <p className="text-[11px] text-slate-400">Tarif Harian</p>
                      <p className="text-base font-bold text-white">
                        {formatRp(dev.pricePerDay)}
                        <span className="text-xs font-normal text-slate-400">/hari</span>
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[11px] text-emerald-400 font-semibold">Paket Weekend (3 Hari)</p>
                      <p className="text-xs font-bold text-slate-200">{formatRp(dev.priceWeekend)}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href="#kalkulator"
                      className="px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold border border-slate-700 text-center transition-colors focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:outline-none"
                    >
                      Hitung Biaya
                    </a>
                    <a
                      href={waLink(`Halo Admin iRent Studio, saya berminat sewa unit *${dev.name} (${dev.storage})*. Mohon info ketersediaan slot sewa terdekat.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold text-center transition-colors flex items-center justify-center gap-1.5 focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      Sewa Unit
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-slate-950 rounded-xl border border-slate-800">
            <p className="text-white font-bold text-sm">Tidak ada unit yang cocok dengan pencarian Anda</p>
            <p className="text-xs text-slate-400 mt-1">Coba kata kunci lain atau kembalikan ke filter semua unit.</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 inline-flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset Pencarian
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default IRentCatalog;
