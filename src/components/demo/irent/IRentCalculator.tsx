"use client";

import { useId, useState } from "react";
import { MessageCircle } from "lucide-react";
import { ADDONS, DEVICES, DURATION_OPTIONS, formatRp } from "./deviceData";
import { waLink } from "@/lib/demo/wa";

const IRentCalculator = () => {
  const [deviceId, setDeviceId] = useState("ip16promax");
  const [days, setDays] = useState(3);
  const [startDate, setStartDate] = useState("");
  const [delivery, setDelivery] = useState("Ambil di Offline Store (Gratis)");
  const [selectedAddons, setSelectedAddons] = useState(["powerbank", "insurance"]);

  const devId = useId();
  const dateId = useId();
  const delivId = useId();

  const dev = DEVICES.find((d) => d.id === deviceId) || DEVICES[0];
  const dur = DURATION_OPTIONS.find((d) => d.days === days) || DURATION_OPTIONS[2];
  const toggle = (id: string) => {
    setSelectedAddons((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));
  };

  const basePrice = dev.pricePerDay * days;
  const discountAmount = Math.round(basePrice * (dur.discount / 100));
  const addonsTotal = ADDONS.filter((a) => selectedAddons.includes(a.id)).reduce((s, a) => s + a.pricePerDay, 0) * days;
  const grandTotal = basePrice - discountAmount + addonsTotal;
  const addonNames = ADDONS.filter((a) => selectedAddons.includes(a.id)).map((a) => a.name).join(", ");

  const waMessage = `Halo Admin iRent Studio, booking rental iPhone:
• Unit: ${dev.name} (${dev.storage})
• Durasi: ${days} Hari (${dur.label})
• Mulai: ${startDate || "Segera"} | Antar: ${delivery}
• Add-ons: ${addonNames || "Tidak ada"}
• Estimasi: ${formatRp(grandTotal)}`;

  return (
    <section id="kalkulator" className="py-16 bg-slate-950 scroll-mt-14">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">Kalkulator Transparan</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Hitung Estimasi Biaya Sewa</h2>
          <p className="text-slate-400 text-sm mt-1">Diskon otomatis untuk sewa weekend, mingguan, dan bulanan tanpa biaya tersembunyi.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 bg-slate-900 rounded-xl border border-slate-800 p-6 space-y-5">
            <div>
              <label htmlFor={devId} className="block text-xs font-bold text-slate-300 uppercase mb-2">1. Pilih Model iPhone</label>
              <select id={devId} value={deviceId} onChange={(e) => setDeviceId(e.target.value)} className="w-full px-3 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs font-medium focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none">
                {DEVICES.map((d) => (
                  <option key={d.id} value={d.id}>{d.name} ({d.storage}) — {formatRp(d.pricePerDay)}/hari</option>
                ))}
              </select>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-300 uppercase">2. Durasi Sewa</span>
                {dur.discount > 0 && <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">Diskon {dur.discount}% Aktif</span>}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {DURATION_OPTIONS.map((opt) => (
                  <button key={opt.days} type="button" onClick={() => setDays(opt.days)} className={`py-2 px-3 rounded-lg text-left text-xs transition-colors border focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none ${days === opt.days ? "bg-slate-800 border-emerald-400 text-white" : "bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700"}`}>
                    <span className="block font-bold text-white text-xs">{opt.label}</span>
                    <span className="text-[10px] text-emerald-400">{opt.note}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor={dateId} className="block text-xs font-bold text-slate-300 uppercase mb-1.5">Tanggal Mulai</label>
                <input id={dateId} type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none" />
              </div>
              <div>
                <label htmlFor={delivId} className="block text-xs font-bold text-slate-300 uppercase mb-1.5">Pengambilan Unit</label>
                <select id={delivId} value={delivery} onChange={(e) => setDelivery(e.target.value)} className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none">
                  <option value="Ambil di Offline Store (Gratis)">Ambil di Store (Gratis)</option>
                  <option value="Kurir Instan GoSend / Grab">Kurir Instan (Jabodetabek)</option>
                  <option value="Ekspedisi Aman Berasuransi">Ekspedisi Luar Kota</option>
                </select>
              </div>
            </div>

            <div>
              <span className="block text-xs font-bold text-slate-300 uppercase mb-2">Peralatan Tambahan & Asuransi</span>
              <div className="space-y-2">
                {ADDONS.map((addon) => (
                  <label key={addon.id} className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800 hover:border-slate-700 cursor-pointer transition-colors">
                    <div className="flex items-center gap-2.5">
                      <input type="checkbox" checked={selectedAddons.includes(addon.id)} onChange={() => toggle(addon.id)} className="w-4 h-4 rounded text-emerald-500 bg-slate-900 border-slate-700 focus-visible:ring-2 focus-visible:ring-sky-500" />
                      <div>
                        <p className="text-xs font-bold text-white">{addon.name}</p>
                        <p className="text-[11px] text-slate-400">{addon.desc}</p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-slate-300 shrink-0 ml-2">+{formatRp(addon.pricePerDay)}/hari</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-900 rounded-xl border border-slate-800 p-6 space-y-4 sticky top-20">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div>
                <p className="text-xs text-slate-400 font-semibold uppercase">Ringkasan Estimasi</p>
                <h3 className="text-base font-bold text-white mt-0.5">{dev.name}</h3>
              </div>
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-slate-800 text-slate-200 border border-slate-700">{days} Hari</span>
            </div>

            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex justify-between">
                <span className="text-slate-400">Tarif Dasar ({days} hari)</span>
                <span className="font-medium text-white">{formatRp(basePrice)}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-400 font-medium">
                  <span>Diskon Durasi ({dur.discount}%)</span>
                  <span>-{formatRp(discountAmount)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-slate-400">Add-ons & Asuransi</span>
                <span className="font-medium text-white">{formatRp(addonsTotal)}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Deposit Jaminan</span>
                <span className="text-emerald-400 font-semibold">Rp 0 (Verified ID)</span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 flex items-baseline justify-between">
              <div>
                <p className="text-xs text-slate-400">Total Biaya Sewa</p>
                <p className="text-[10px] text-slate-400">Termasuk PPN & aksesoris fullset</p>
              </div>
              <span className="text-2xl font-black text-white">{formatRp(grandTotal)}</span>
            </div>

            <div className="space-y-2 pt-2">
              <a href={waLink(waMessage)} target="_blank" rel="noopener noreferrer" className="w-full py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-md focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none">
                <MessageCircle className="w-4 h-4" />
                Booking via WhatsApp
              </a>
              <a href="#booking" className="w-full py-2 rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-200 text-xs font-semibold border border-slate-700 text-center block transition-colors focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:outline-none">
                Isi Formulir Lengkap
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IRentCalculator;
