"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Search, X } from "lucide-react";
import type { DemoItem, DemoCategory } from "@/lib/demo/types";
import { formatIDR, tierBadgeClass, tierById } from "@/lib/pricing";

interface DemoHubListProps {
  categories: DemoCategory[];
  items: DemoItem[];
}

export function DemoHubList({ categories, items }: DemoHubListProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredItems = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return items.filter((demo) => {
      const matchCategory =
        selectedCategory === "all" || demo.category === selectedCategory;
      if (!matchCategory) return false;
      if (!q) return true;
      return (
        demo.name.toLowerCase().includes(q) ||
        demo.niche.toLowerCase().includes(q) ||
        demo.description.toLowerCase().includes(q) ||
        demo.highlights.some((h) => h.toLowerCase().includes(q))
      );
    });
  }, [items, selectedCategory, searchQuery]);

  const activeCategories = useMemo(() => {
    if (selectedCategory !== "all") {
      return categories.filter((c) => c === selectedCategory);
    }
    return categories;
  }, [categories, selectedCategory]);

  const totalResults = filteredItems.length;

  return (
    <div className="space-y-10">
      {/* Search & Filter Bar */}
      <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm md:p-6 space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari nama demo, niche, atau kata kunci (contoh: ayam, klinik, katering)..."
            className="w-full rounded-xl border border-neutral-200 bg-neutral-50 py-2.5 pl-10 pr-10 text-sm text-neutral-900 placeholder:text-neutral-500 focus:border-neutral-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900 transition-colors"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              aria-label="Hapus pencarian"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-700">
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <button
            type="button"
            onClick={() => setSelectedCategory("all")}
            className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
              selectedCategory === "all"
                ? "bg-neutral-900 text-white shadow-xs"
                : "border border-neutral-200 bg-neutral-50 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
            }`}>
            Semua Kategori ({items.length})
          </button>
          {categories.map((cat) => {
            const count = items.filter((d) => d.category === cat).length;
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                  isSelected
                    ? "bg-neutral-900 text-white shadow-xs"
                    : "border border-neutral-200 bg-neutral-50 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
                }`}>
                {cat} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Count & Status */}
      {(searchQuery.trim() !== "" || selectedCategory !== "all") && (
        <div className="flex items-center justify-between text-sm text-neutral-600 px-1">
          <span>
            Menampilkan <strong className="text-neutral-900">{totalResults}</strong> demo website
            {selectedCategory !== "all" && (
              <span> dalam kategori <strong className="text-neutral-900">{selectedCategory}</strong></span>
            )}
            {searchQuery.trim() !== "" && (
              <span> untuk pencarian &ldquo;<strong className="text-neutral-900">{searchQuery}</strong>&rdquo;</span>
            )}
          </span>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory("all");
              setSearchQuery("");
            }}
            className="text-xs font-semibold text-neutral-700 underline underline-offset-4 hover:text-neutral-900">
            Reset filter
          </button>
        </div>
      )}

      {/* Empty State */}
      {totalResults === 0 ? (
        <div className="rounded-2xl border border-dashed border-neutral-300 bg-white p-12 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 text-neutral-400">
            <Search className="h-6 w-6" />
          </div>
          <h3 className="mt-4 text-base font-semibold text-neutral-900">
            Tidak ada demo yang sesuai
          </h3>
          <p className="mx-auto mt-2 max-w-sm text-sm text-neutral-600">
            Kami tidak menemukan demo dengan kata kunci &ldquo;{searchQuery}&rdquo;
            {selectedCategory !== "all" && ` di kategori ${selectedCategory}`}.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="rounded-lg bg-neutral-900 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-neutral-800">
              Tampilkan Semua Demo
            </button>
          </div>
        </div>
      ) : (
        /* Grouped Sections */
        <div className="space-y-16">
          {activeCategories.map((category) => {
            const catItems = filteredItems
              .filter((demo) => demo.category === category)
              .sort((a, b) => a.slug.localeCompare(b.slug));

            if (catItems.length === 0) return null;

            return (
              <div
                key={category}
                id={category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}>
                <div className="mb-6 flex flex-col gap-1 border-b border-neutral-200 pb-4 sm:flex-row sm:items-baseline sm:justify-between">
                  <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">
                    {category}
                  </h2>
                  <span className="text-sm text-neutral-500">
                    {catItems.length} demo website
                  </span>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {catItems.map((demo) => {
                    const tier = tierById(demo.package);
                    return (
                      <Link
                        key={demo.slug}
                        href={`/demo/${demo.slug}`}
                        className={`group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg ${demo.ring}`}>
                        <div
                          className={`relative h-40 overflow-hidden border-b border-neutral-200 bg-linear-to-br ${demo.accentBg}`}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={`/demo/preview/${demo.slug}.webp`}
                            alt={`Pratinjau website ${demo.name}`}
                            loading="lazy"
                            className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                          />
                        </div>
                        <div className="flex flex-1 flex-col p-6">
                          {/* Eyebrow + Tier Badge */}
                          <div className="flex h-6 items-center justify-between gap-2">
                            <div
                              title={demo.niche}
                              className="truncate text-xs font-semibold uppercase tracking-wide text-neutral-500">
                              {demo.niche}
                            </div>
                            <span
                              className={`shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider border ${tierBadgeClass(
                                demo.package
                              )}`}>
                              {demo.package}
                            </span>
                          </div>
                          {tier && (
                            <div className="mt-2">
                              <span className="inline-block rounded-full bg-neutral-100 px-2.5 py-0.5 text-[11px] font-medium text-neutral-700 border border-neutral-200">
                                {formatIDR(tier.firstPrice)} · perpanjangan {formatIDR(tier.renewalPrice)}/thn
                              </span>
                            </div>
                          )}
                          <h3 className="mt-2 text-xl font-bold text-neutral-900">
                            {demo.name}
                          </h3>
                          <p className="mt-2 flex-1 text-sm text-neutral-600">
                            {demo.description}
                          </p>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {demo.highlights.map((h) => (
                              <span
                                key={h}
                                className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-700">
                                {h}
                              </span>
                            ))}
                          </div>
                          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-900 transition-all group-hover:gap-2.5">
                            Lihat demo <ArrowRight className="h-4 w-4" />
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
