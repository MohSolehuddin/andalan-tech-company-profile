"use client";

import { useId, useState } from "react";
import { Check, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const PACKAGES = [
  {
    id: "reguler",
    name: "Paket Reguler",
    price: 28000,
    desc: "Bakso Campur Komplit Wonogiri",
  },
  {
    id: "premium",
    name: "Paket Premium Iga",
    price: 38000,
    desc: "Bakso Komplit + Tetelan & Iga Sapi",
  },
];

const BaksoCatering = () => {
  const [porsi, setPorsi] = useState<number>(100);
  const [selectedPkgId, setSelectedPkgId] = useState<string>("reguler");
  const porsiInputId = useId();

  const selectedPkg =
    PACKAGES.find((pkg) => pkg.id === selectedPkgId) || PACKAGES[0];
  const total = porsi * selectedPkg.price;

  const waMessage = `Halo Admin Bakso Warisan Nusantara, saya ingin konsultasi paket katering untuk *${porsi} Porsi* (${selectedPkg.name}) dengan estimasi total Rp ${total.toLocaleString("id-ID")}. Mohon info ketersediaan tanggal dan prosedurnya.`;

  return (
    <section id="katering" className="py-16 bg-stone-900 text-white scroll-mt-14">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Details */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold tracking-wider text-amber-400 uppercase block">
              Layanan Gubukan & Prasmanan
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
              Hadirkan Pondokan Bakso Nusantara di Acara Spesial Anda
            </h2>
            <p className="text-stone-300 text-sm leading-relaxed max-w-prose">
              Melayani paket gubukan (*food stall*) untuk pernikahan, arisan keluarga, syukuran kantor, dan perayaan ulang tahun. Lengkap dengan mangkok, panci kuah panas, staf penyaji berseragam, dan jaminan rasa tetap segar mengepul.
            </p>

            <ul className="space-y-2 text-xs sm:text-sm text-stone-300 pt-1">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Minimum pemesanan mulai dari 50 porsi</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Dilayani dari cabang terdekat di antara 20 cabang kami</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Termasuk staf penyaji, peralatan makan, dan kondimen lengkap</span>
              </li>
            </ul>
          </div>

          {/* Interactive Calculator */}
          <div className="lg:col-span-6 bg-stone-800 p-6 rounded-xl border border-stone-700 shadow-lg space-y-5">
            <h3 className="text-lg font-bold text-amber-400">Simulasi Biaya Katering</h3>

            {/* Slider */}
            <div>
              <div className="flex justify-between items-center text-xs font-semibold mb-2">
                <label htmlFor={porsiInputId} className="text-stone-200">
                  Perkiraan Jumlah Tamu / Porsi:
                </label>
                <span className="text-amber-400 font-bold text-base font-mono">{porsi} Porsi</span>
              </div>
              <input
                id={porsiInputId}
                type="range"
                min="50"
                max="500"
                step="25"
                value={porsi}
                aria-label="Jumlah Porsi Katering"
                onChange={(e) => setPorsi(parseInt(e.target.value, 10))}
                className="w-full accent-amber-500 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-stone-400 mt-1">
                <span>50 porsi</span>
                <span>250 porsi</span>
                <span>500 porsi</span>
              </div>
            </div>

            {/* Package Choices */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {PACKAGES.map((pkg) => {
                const isSelected = selectedPkgId === pkg.id;
                return (
                  <button
                    key={pkg.id}
                    type="button"
                    onClick={() => setSelectedPkgId(pkg.id)}
                    className={`p-3 rounded-lg border text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                      isSelected
                        ? "border-amber-400 bg-amber-400/10 text-white"
                        : "border-stone-700 bg-stone-900/60 text-stone-300 hover:border-stone-600"
                    }`}>
                    <span className="font-bold text-xs block text-white">{pkg.name}</span>
                    <span className="text-amber-400 text-xs font-semibold block mt-0.5">
                      Rp {pkg.price.toLocaleString("id-ID")} / porsi
                    </span>
                    <span className="text-stone-400 text-[11px] block mt-1">{pkg.desc}</span>
                  </button>
                );
              })}
            </div>

            {/* Total Display */}
            <div className="p-3.5 rounded-lg bg-stone-900 border border-stone-700 flex justify-between items-center">
              <div>
                <span className="text-[11px] text-stone-400 block">Estimasi Total Biaya</span>
                <span className="text-[10px] text-stone-500">*Sudah termasuk peralatan & staf penyaji</span>
              </div>
              <span className="text-xl sm:text-2xl font-bold text-amber-400 font-mono">
                Rp {total.toLocaleString("id-ID")}
              </span>
            </div>

            {/* CTA */}
            <a
              href={waLink(waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm transition-colors flex items-center justify-center gap-2 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-400">
              <MessageCircle className="w-4 h-4 text-stone-950" />
              <span>Konsultasi Paket Katering via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BaksoCatering;
