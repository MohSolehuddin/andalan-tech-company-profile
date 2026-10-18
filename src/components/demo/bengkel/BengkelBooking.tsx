"use client";

import { useState } from "react";
import { Calendar, CheckCircle2, MessageCircle, Tag } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

interface PromoPackage {
  id: string;
  name: string;
  badge: string;
  price: string;
  originalPrice: string;
  features: string[];
}

const promoPackages: PromoPackage[] = [
  {
    id: "paket-ringan",
    name: "Paket Servis Ringan",
    badge: "Hemat 20%",
    price: "Rp 220.000",
    originalPrice: "Rp 275.000",
    features: ["Ganti oli mesin 1L", "Filter oli baru", "Cek rem & tekanan ban", "Inspeksi 25 titik"],
  },
  {
    id: "paket-tuneup",
    name: "Paket Tune Up Total",
    badge: "Paling Populer",
    price: "Rp 450.000",
    originalPrice: "Rp 550.000",
    features: [
      "Pembersihan throttle body",
      "Gurah mesin / carbon cleaner",
      "Reset ECU & cek sensor",
      "Uji emisi gas buang",
    ],
  },
  {
    id: "paket-liburan",
    name: "Paket Siap Liburan",
    badge: "Lengkap & Aman",
    price: "Rp 690.000",
    originalPrice: "Rp 850.000",
    features: [
      "Servis AC & ganti filter cabin",
      "Kuras minyak rem & kampas",
      "Balancing 4 roda",
      "Pengecekan aki & alternator",
    ],
  },
];

export default function BengkelBooking() {
  const [selectedService, setSelectedService] = useState("Paket Tune Up Total");
  const [customerName, setCustomerName] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [preferredDate, setPreferredDate] = useState("");

  const bookingMessage = `Halo AutoPrima Motor, saya mau booking antrean servis:
- Nama: ${customerName || "(belum diisi)"}
- Kendaraan: ${vehicle || "(belum diisi)"}
- Jenis Servis: ${selectedService}
- Rencana Datang: ${preferredDate || "Hari ini / secepatnya"}
Mohon info ketersediaan slotnya.`;

  return (
    <section id="booking" className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
            Paket Promo & Booking
          </p>
          <h2 className="mt-2 text-3xl font-bold text-zinc-900 md:text-4xl">
            Booking antrean tanpa ribet
          </h2>
          <p className="mt-3 text-zinc-600">
            Pilih paket hemat di bawah atau langsung isi formulir untuk menjadwalkan
            kunjungan bengkel via WhatsApp.
          </p>
        </div>

        {/* Promo Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {promoPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`flex flex-col justify-between rounded-2xl border p-6 transition-all ${
                selectedService === pkg.name
                  ? "border-red-500 bg-red-50/30 shadow-md ring-2 ring-red-500/20"
                  : "border-zinc-200 bg-white hover:border-zinc-300"
              }`}>
              <div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
                    <Tag className="h-3 w-3" />
                    {pkg.badge}
                  </span>
                  <span className="text-xs text-zinc-600 line-through">
                    {pkg.originalPrice}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-bold text-zinc-900">
                  {pkg.name}
                </h3>
                <p className="mt-2 text-2xl font-extrabold text-red-600">
                  {pkg.price}
                </p>

                <ul className="mt-6 space-y-2.5 text-sm text-zinc-600">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-red-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() => setSelectedService(pkg.name)}
                className={`mt-6 w-full rounded-lg py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                  selectedService === pkg.name
                    ? "bg-red-600 text-white"
                    : "border border-zinc-200 bg-zinc-50 text-zinc-800 hover:bg-zinc-100"
                }`}>
                {selectedService === pkg.name ? "Paket Dipilih ✓" : "Pilih Paket Ini"}
              </button>
            </div>
          ))}
        </div>

        {/* Quick Booking Form Card */}
        <div className="mt-12 rounded-xl border border-zinc-200 bg-zinc-900 p-8 text-white md:p-10">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500/20 px-3 py-1 text-xs font-medium text-red-300">
                <Calendar className="h-3.5 w-3.5" />
                Form Booking Cepat
              </span>
              <h3 className="mt-3 text-2xl font-bold md:text-3xl">
                Jadwalkan Kunjungan Anda Sekarang
              </h3>
              <p className="mt-2 text-sm text-zinc-400">
                Pesan akan otomatis dirangkum dan diteruskan ke WhatsApp mekanik kami.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-zinc-300">
                  Nama Pemilik
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Budi Santoso"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-red-500 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300">
                  Tipe / Merk Kendaraan
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Avanza 2019 / Vario 160"
                  value={vehicle}
                  onChange={(e) => setVehicle(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-red-500 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300">
                  Pilihan Servis
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3.5 py-2.5 text-sm text-white focus:border-red-500 focus:outline-hidden">
                  <option value="Paket Servis Ringan">Paket Servis Ringan (Rp 220.000)</option>
                  <option value="Paket Tune Up Total">Paket Tune Up Total (Rp 450.000)</option>
                  <option value="Paket Siap Liburan">Paket Siap Liburan (Rp 690.000)</option>
                  <option value="Ganti Oli & Filter">Ganti Oli & Filter (Rp 150.000)</option>
                  <option value="Tune Up & Injeksi">Tune Up & Injeksi (Rp 250.000)</option>
                  <option value="Servis AC Kendaraan">Servis AC Kendaraan (Rp 200.000)</option>
                  <option value="Servis Rem & Kaki-Kaki">Servis Rem & Kaki-Kaki (Rp 175.000)</option>
                  <option value="Cek Kelistrikan & Aki">Cek Kelistrikan & Aki (Rp 100.000)</option>
                  <option value="Lainnya / Keluhan Khusus">Lainnya / Keluhan Khusus</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300">
                  Rencana Tanggal / Waktu
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Besok jam 10 pagi"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-red-500 focus:outline-hidden"
                />
              </div>
            </div>

            <div className="mt-6 text-center">
              <a
                href={waLink(bookingMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3.5 font-bold text-white transition-colors hover:bg-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 sm:w-auto">
                <MessageCircle className="h-5 w-5" />
                Kirim Booking via WhatsApp
              </a>
              <p className="mt-2 text-xs text-zinc-400">
                Pesan WhatsApp akan terisi otomatis dengan rincian di atas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
