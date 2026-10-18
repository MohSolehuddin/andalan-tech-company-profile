"use client";

import { useState } from "react";
import { Clock, MapPin, PhoneCall, Scissors } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const openingHours = [
  { day: "Senin – Jumat", hours: "10.00 – 21.00 WIB" },
  { day: "Sabtu – Minggu", hours: "09.00 – 22.00 WIB" },
  { day: "Hari Libur Nasional", hours: "11.00 – 20.00 WIB" },
];

const serviceOptions = [
  "Potong Rambut & Styling (Mulai Rp 55.000)",
  "Cukur Bersih & Beard Trim (Mulai Rp 35.000)",
  "Hair Coloring & Gray Blending (Mulai Rp 120.000)",
  "Treatment & Scalp Care (Mulai Rp 85.000)",
  "Paket Rapi Harian (Rp 65.000)",
  "Paket Gents Complete (Rp 185.000)",
  "Paket Father & Son (Rp 120.000)",
];

const labelClass = "block text-xs font-medium text-neutral-700";
const inputClass =
  "mt-1.5 w-full rounded-lg border border-zinc-300 bg-white px-3.5 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:border-amber-500 focus:outline-hidden";

export default function BarbershopContact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: serviceOptions[0],
    date: "",
    time: "",
  });

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const bookingMessage = `Halo Gents & Blade Barbershop, saya mau ambil nomor antrian booking:
- Nama: ${form.name || "(belum diisi)"}
- No. WhatsApp: ${form.phone || "(belum diisi)"}
- Layanan: ${form.service}
- Tanggal Kunjungan: ${form.date || "(belum ditentukan)"}
- Perkiraan Jam: ${form.time || "(fleksibel)"}
Mohon info slot antrian yang tersedia ya. Terima kasih!`;

  return (
    <section id="booking" className="bg-zinc-100 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
            Jam Buka & Booking Antrian
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Ambil antrian dulu, datang langsung dicukur
          </h2>
          <p className="mt-3 text-neutral-600">
            Tanpa antre berdiri di depan barbershop. Pesan slot Anda lewat
            WhatsApp, nomor antrian langsung dikonfirmasi admin.
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          {/* Booking Form Card */}
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-xs sm:p-8 lg:col-span-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3.5 py-1 text-xs font-semibold text-amber-700">
              <Scissors className="h-3.5 w-3.5" />
              Form Booking Antrian
            </span>
            <h3 className="mt-3 text-2xl font-bold text-neutral-900">
              Atur Jadwal Cukur Anda
            </h3>
            <p className="mt-2 text-xs text-neutral-500">
              Data yang Anda masukkan otomatis dirangkai menjadi pesan WhatsApp.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div>
                <label className={labelClass}>Nama Lengkap</label>
                <input
                  type="text"
                  placeholder="Contoh: Adrian Wibowo"
                  value={form.name}
                  onChange={update("name")}
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>Nomor WhatsApp Aktif</label>
                <input
                  type="text"
                  placeholder="Contoh: 081234567890"
                  value={form.phone}
                  onChange={update("phone")}
                  className={inputClass}
                />
              </div>

              <div className="sm:col-span-2">
                <label className={labelClass}>Pilihan Layanan / Paket</label>
                <select
                  value={form.service}
                  onChange={update("service")}
                  className={inputClass}>
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className={labelClass}>Rencana Tanggal</label>
                <input
                  type="text"
                  placeholder="Contoh: Sabtu, 25 Oktober 2026"
                  value={form.date}
                  onChange={update("date")}
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>Perkiraan Jam</label>
                <input
                  type="text"
                  placeholder="Contoh: 19.00 WIB"
                  value={form.time}
                  onChange={update("time")}
                  className={inputClass}
                />
              </div>
            </div>

            <div className="mt-8">
              <a
                href={waLink(bookingMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 py-3.5 font-bold text-neutral-950 transition-colors hover:bg-amber-400">
                <PhoneCall className="h-4 w-4" />
                Ambil Antrian via WhatsApp
              </a>
              <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-neutral-500">
                <Clock className="h-3.5 w-3.5 text-amber-600" /> Konfirmasi
                antrian biasanya dibalas &lt; 10 menit pada jam operasional.
              </p>
            </div>
          </div>

          {/* Jam Buka & Lokasi */}
          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-xs">
              <h3 className="inline-flex items-center gap-2 text-lg font-bold text-neutral-900">
                <Clock className="h-5 w-5 text-amber-600" />
                Jam Buka
              </h3>
              <div className="mt-4 space-y-3">
                {openingHours.map((oh) => (
                  <div
                    key={oh.day}
                    className="flex items-center justify-between border-b border-zinc-100 pb-3 text-sm last:border-0 last:pb-0">
                    <span className="text-neutral-600">{oh.day}</span>
                    <span className="font-semibold text-neutral-900">
                      {oh.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-xs">
              <h3 className="inline-flex items-center gap-2 text-lg font-bold text-neutral-900">
                <MapPin className="h-5 w-5 text-amber-600" />
                Lokasi Barbershop
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                Jl. Kemang Raya No. 27, Bangka, Mampang Prapatan, Jakarta
                Selatan 12730. Parkir motor & mobil tersedia.
              </p>
              <a
                href={waLink(
                  "Halo Gents & Blade Barbershop, boleh minta share lokasi dan patokan tempatnya?"
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-300 px-4 py-2.5 text-sm font-semibold text-neutral-900 transition-colors hover:border-amber-500 hover:text-amber-600">
                Minta Share Lokasi
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
