"use client";

import { useState } from "react";
import { MessageCircle, Utensils } from "lucide-react";
import { waLink } from "@/lib/demo/wa";
import { MENU_CATEGORIES, MENU_ITEMS } from "./menuData";

const BaksoMenu = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredItems = MENU_ITEMS.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  return (
    <section id="menu" className="py-16 bg-white border-b border-stone-200 scroll-mt-14">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
          <div>
            <span className="text-xs font-bold tracking-wider text-red-700 uppercase block mb-1">
              Pilihan Cita Rasa Otentik
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              Menu Andalan Warisan Nusantara
            </h2>
            <p className="text-stone-600 text-sm mt-1 max-w-xl">
              Diproduksi setiap subuh dari paha belakang sapi murni untuk kekenyalan alami tanpa bahan pengenyal sintetis.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-600 ${
                    isActive
                      ? "bg-red-700 text-white shadow-xs"
                      : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                  }`}>
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="border border-stone-200 rounded-xl overflow-hidden bg-white hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                {item.img ? (
                  <div className="relative h-44 bg-stone-100 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.img.src}
                      alt={item.img.alt}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    {item.tag && (
                      <span className="absolute top-2 left-2 text-[10px] font-bold uppercase tracking-wider text-amber-950 bg-amber-400 px-2 py-0.5 rounded shadow-xs">
                        {item.tag}
                      </span>
                    )}
                  </div>
                ) : (
                  <div className="h-44 bg-stone-50 border-b border-stone-100 p-4 flex flex-col justify-center items-center text-center">
                    <span className="text-4xl mb-1">{item.emoji}</span>
                    <span className="text-[11px] font-medium text-stone-500 uppercase tracking-wider">
                      Warisan Nusantara
                    </span>
                  </div>
                )}

                <div className="p-4 space-y-1.5">
                  <h3 className="font-bold text-stone-900 text-base leading-snug">{item.title}</h3>
                  <p className="text-xs text-stone-600 leading-relaxed line-clamp-3">{item.desc}</p>
                </div>
              </div>

              <div className="p-4 pt-0">
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
                  <span className="text-red-700 font-bold text-base">{item.priceFormatted}</span>
                  <a
                    href={waLink(
                      `Halo Bakso Warisan Nusantara, saya ingin memesan menu: ${item.title} (${item.priceFormatted})`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-700 hover:bg-red-800 text-white text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Pesan via WA</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 rounded-xl bg-amber-50 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-amber-900">
          <div className="flex items-center gap-2">
            <Utensils className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              Ingin memesan porsi banyak untuk kantor atau keluarga? Cek simulasi katering kami di bawah.
            </span>
          </div>
          <a
            href="#katering"
            className="font-bold text-red-800 hover:underline shrink-0">
            Kalkulator Katering &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default BaksoMenu;
