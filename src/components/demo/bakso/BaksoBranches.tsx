"use client";

import { useId, useState } from "react";
import { Info, MessageCircle, Search } from "lucide-react";
import { waLink } from "@/lib/demo/wa";
import { type Branch, BRANCHES, CITIES } from "./branchData";
import BranchModal from "./BranchModal";

const BaksoBranches = () => {
  const [currentCity, setCurrentCity] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null);
  const searchInputId = useId();

  const filteredBranches = BRANCHES.filter((b) => {
    const matchesCity = currentCity === "all" || b.cityGroup === currentCity;
    const query = searchTerm.toLowerCase().trim();
    const matchesSearch =
      !query ||
      b.name.toLowerCase().includes(query) ||
      b.address.toLowerCase().includes(query) ||
      b.cityLabel.toLowerCase().includes(query);
    return matchesCity && matchesSearch;
  });

  return (
    <section id="cabang" className="py-16 bg-stone-100/70 border-b border-stone-200 scroll-mt-14">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-800 text-xs font-semibold mb-2">
            Jaringan Cabang Resmi
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
            Kunjungi 20 Cabang Kami di Dekat Anda
          </h2>
          <p className="text-stone-600 text-sm mt-2">
            Seluruh cabang ber-AC, memiliki musholla bersih, tempat parkir, dan standar kaldu sumsum yang seragam.
          </p>
        </div>

        {/* Filter controls */}
        <div className="bg-white p-4 rounded-xl shadow-xs border border-stone-200 mb-6 space-y-3">
          <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
            {/* City tabs */}
            <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
              {CITIES.map((c) => {
                const isActive = currentCity === c.id;
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setCurrentCity(c.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-600 ${
                      isActive
                        ? "bg-red-700 text-white shadow-xs"
                        : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                    }`}>
                    {c.label}
                  </button>
                );
              })}
            </div>

            {/* Search input */}
            <div className="relative w-full md:w-64">
              <label htmlFor={searchInputId} className="sr-only">
                Cari cabang atau jalan
              </label>
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500 pointer-events-none" />
              <input
                id={searchInputId}
                type="text"
                placeholder="Cari cabang atau jalan..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 rounded-lg border border-stone-300 text-xs text-stone-800 placeholder-stone-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:border-red-600"
              />
            </div>
          </div>

          <div className="text-xs text-stone-500 pt-1 border-t border-stone-100 flex items-center justify-between">
            <span>
              Menampilkan <strong>{filteredBranches.length}</strong> dari 20 cabang
            </span>
            {(currentCity !== "all" || searchTerm) && (
              <button
                type="button"
                onClick={() => {
                  setCurrentCity("all");
                  setSearchTerm("");
                }}
                className="text-red-700 font-semibold hover:underline">
                Reset Filter
              </button>
            )}
          </div>
        </div>

        {/* Branch grid */}
        {filteredBranches.length === 0 ? (
          <div className="py-12 text-center bg-white rounded-xl border border-stone-200">
            <p className="text-sm font-semibold text-stone-800">Tidak ada cabang yang cocok</p>
            <p className="text-xs text-stone-500 mt-1">Coba gunakan kata kunci pencarian lain atau pilih tab Semua Cabang.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredBranches.map((branch) => (
              <div
                key={branch.id}
                className={`bg-white rounded-xl p-4 border ${
                  branch.isFeatured ? "border-amber-400 ring-1 ring-amber-300" : "border-stone-200"
                } shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between`}>
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-stone-600 bg-stone-100 px-2 py-0.5 rounded">
                      {branch.cityLabel}
                    </span>
                    {branch.isFeatured && (
                      <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full border border-amber-200">
                        Cabang Ramai
                      </span>
                    )}
                  </div>

                  <h3 className="font-bold text-stone-900 text-base">{branch.name}</h3>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed line-clamp-2">
                    {branch.address}
                  </p>

                  <div className="flex flex-wrap gap-1 mt-2.5">
                    {branch.facilities.slice(0, 3).map((f) => (
                      <span
                        key={f}
                        className="text-[10px] text-stone-600 bg-stone-50 border border-stone-200 px-1.5 py-0.5 rounded">
                        {f}
                      </span>
                    ))}
                    {branch.facilities.length > 3 && (
                      <span className="text-[10px] text-stone-500 self-center">
                        +{branch.facilities.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-3 mt-3 border-t border-stone-100 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedBranch(branch)}
                    className="flex-1 py-2 px-3 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold transition-colors flex items-center justify-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-600">
                    <Info className="w-3.5 h-3.5 text-stone-500" />
                    <span>Detail & Lokasi</span>
                  </button>
                  <a
                    href={waLink(`Halo Admin ${branch.name}, saya mau tanya info menu dan pemesanan.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-3 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-semibold transition-colors flex items-center justify-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
                    title={`Hubungi ${branch.name}`}>
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WA</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal Detail Cabang */}
        <BranchModal branch={selectedBranch} onClose={() => setSelectedBranch(null)} />
      </div>
    </section>
  );
};

export default BaksoBranches;
