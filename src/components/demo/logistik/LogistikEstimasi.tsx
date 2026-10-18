"use client";

import { useMemo, useState } from "react";
import { Calculator, CheckCircle2, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const serviceOptions = [
  { id: "pindahan-rumah", label: "Pindahan Rumah", base: 1500000 },
  { id: "pindahan-kantor", label: "Pindahan Kantor", base: 2500000 },
  { id: "kirim-barang", label: "Kirim Barang / Paket Besar", base: 600000 },
  { id: "kirim-kendaraan", label: "Kirim Kendaraan", base: 1750000 },
  { id: "packing-saja", label: "Packing Saja", base: 450000 },
];

const distanceOptions = [
  { id: "dalam-kota", label: "Dalam Kota (≤ 15 km)", factor: 1 },
  { id: "antar-kota", label: "Antar Kota / Provinsi", factor: 2.2 },
  { id: "antar-pulau", label: "Antar Pulau", factor: 4.5 },
];

const sizeOptions = [
  { id: "kecil", label: "Studio / 1 Kamar / Kantor Kecil", factor: 1 },
  { id: "sedang", label: "2–3 Kamar / Kantor Sedang", factor: 1.5 },
  { id: "besar", label: "4+ Kamar / Kantor Besar", factor: 2.2 },
];

const addOns = [
  { id: "packing", label: "Packing material (bubble wrap & kardus)", price: 450000 },
  { id: "bongkar", label: "Bongkar-pasang furniture & elektronik", price: 350000 },
  { id: "asuransi", label: "Asuransi barang s.d. Rp 20 juta", price: 250000 },
  { id: "tangga", label: "Akses tangga / lantai atas tanpa lift", price: 300000 },
];

const formatIDR = (value: number) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(value);

export default function LogistikEstimasi() {
  const [serviceId, setServiceId] = useState(serviceOptions[0].id);
  const [distanceId, setDistanceId] = useState(distanceOptions[0].id);
  const [sizeId, setSizeId] = useState(sizeOptions[1].id);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>(["packing"]);

  const toggleAddOn = (id: string) =>
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );

  const service = serviceOptions.find((item) => item.id === serviceId)!;
  const distance = distanceOptions.find((item) => item.id === distanceId)!;
  const size = sizeOptions.find((item) => item.id === sizeId)!;
  const chosenAddOns = addOns.filter((addon) => selectedAddOns.includes(addon.id));
  const estimate = useMemo(() => {
    const addOnTotal = chosenAddOns.reduce((sum, addon) => sum + addon.price, 0);
    const base = service.base * distance.factor * size.factor + addOnTotal;
    const min = Math.ceil(base / 50000) * 50000;
    const max = Math.ceil((base * 1.15) / 50000) * 50000;
    return { min, max };
  }, [service, distance, size, chosenAddOns]);

  const message = `Halo PindahAja Logistik, saya mau order:
- Layanan: ${service.label}
- Jarak: ${distance.label}
- Ukuran: ${size.label}
- Tambahan: ${
    chosenAddOns.map((addon) => addon.label).join(", ") || "Tanpa tambahan"
  }
- Estimasi dari kalkulator: ${formatIDR(estimate.min)} – ${formatIDR(estimate.max)}
Mohon info jadwal dan biaya finalnya.`;

  return (
    <section id="estimasi" className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-700">
            <Calculator className="h-4 w-4" />
            Estimasi Biaya
          </span>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Hitung perkiraan biaya pindahan Anda
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            Pilih kebutuhan Anda, kalkulator akan menampilkan kisaran biaya. Biaya
            final ditentukan setelah survei atau foto barang.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-5">
          <div className="space-y-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 lg:col-span-3">
            <div>
              <label className="block text-xs font-medium text-neutral-600">
                Jenis Layanan
              </label>
              <select
                value={serviceId}
                onChange={(e) => setServiceId(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-neutral-200 bg-white px-3.5 py-2.5 text-sm text-neutral-900 focus:border-blue-500 focus:outline-hidden">
                {serviceOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-neutral-600">
                  Jarak Tempuh
                </label>
                <select
                  value={distanceId}
                  onChange={(e) => setDistanceId(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-neutral-200 bg-white px-3.5 py-2.5 text-sm text-neutral-900 focus:border-blue-500 focus:outline-hidden">
                  {distanceOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-neutral-600">
                  Ukuran Barang / Ruangan
                </label>
                <select
                  value={sizeId}
                  onChange={(e) => setSizeId(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-neutral-200 bg-white px-3.5 py-2.5 text-sm text-neutral-900 focus:border-blue-500 focus:outline-hidden">
                  {sizeOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <p className="text-xs font-medium text-neutral-600">Layanan Tambahan</p>
              <div className="mt-2 grid gap-2 sm:grid-cols-2">
                {addOns.map((addon) => (
                  <label
                    key={addon.id}
                    className={`flex cursor-pointer items-start gap-2 rounded-xl border p-3 text-xs transition-colors ${
                      selectedAddOns.includes(addon.id)
                        ? "border-blue-400 bg-blue-50/60"
                        : "border-neutral-200 bg-white hover:border-blue-300"
                    }`}>
                    <input
                      type="checkbox"
                      checked={selectedAddOns.includes(addon.id)}
                      onChange={() => toggleAddOn(addon.id)}
                      className="mt-0.5 h-4 w-4 accent-blue-600"
                    />
                    <span className="text-neutral-700">{addon.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-2xl bg-neutral-950 p-6 text-white lg:col-span-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-300">
                Perkiraan Biaya
              </p>
              <p className="mt-3 text-3xl font-extrabold">{formatIDR(estimate.min)}</p>
              <p className="text-sm text-neutral-400">
                s.d. {formatIDR(estimate.max)}
              </p>
              <ul className="mt-6 space-y-2 text-xs text-neutral-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-blue-400" />
                  Survei gratis untuk area dalam kota
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-blue-400" />
                  Harga dikunci setelah survei, tanpa biaya kejutan
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-blue-400" />
                  Tim, armada, dan asuransi sudah termasuk
                </li>
              </ul>
            </div>
            <a
              href={waLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500">
              <MessageCircle className="h-4 w-4" />
              Order via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
