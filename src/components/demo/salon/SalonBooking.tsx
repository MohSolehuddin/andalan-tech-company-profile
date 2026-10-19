"use client";

import { useState } from "react";
import {
  Calendar,
  CheckCircle2,
  Clock,
  Heart,
  MessageCircle,
  PhoneCall,
} from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const steps = [
  {
    icon: MessageCircle,
    title: "1. Pilih Treatment",
    desc: "Tentukan layanan rambut, wajah, kuku, atau makeup sesuai kebutuhan.",
  },
  {
    icon: Calendar,
    title: "2. Tentukan Jadwal",
    desc: "Pilih tanggal dan jam kedatangan yang paling nyaman untuk Anda.",
  },
  {
    icon: CheckCircle2,
    title: "3. Konfirmasi Instan",
    desc: "Admin salon langsung membalas reservasi via WhatsApp tanpa antre lama.",
  },
];

export default function SalonBooking() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Potong & Styling Rambut (Mulai Rp 75.000)");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [notes, setNotes] = useState("");

  const bookingMessage = `Halo Glow & Glam Salon, saya mau reservasi janji temu perawatan:
- Nama: ${name || "(belum diisi)"}
- No. WhatsApp: ${phone || "(belum diisi)"}
- Layanan: ${service}
- Tanggal Kunjungan: ${bookingDate || "(belum ditentukan)"}
- Perkiraan Jam: ${bookingTime || "(fleksibel)"}
- Catatan Tambahan: ${notes || "-"}
Mohon info ketersediaan slotnya ya. Terima kasih!`;

  return (
    <section id="booking" className="bg-neutral-950 px-4 py-20 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-rose-400">
            Reservasi Mudah
          </p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            Booking Janji Temu Anda Hari Ini
          </h2>
          <p className="mt-3 text-rose-100/80">
            Hindari waktu menunggu. Pesan slot Anda terlebih dahulu untuk
            pengalaman perawatan terbaik.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xs">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-500/20">
                <step.icon className="h-5 w-5 text-rose-400" />
              </div>
              <h3 className="mt-4 font-bold text-white">{step.title}</h3>
              <p className="mt-1 text-sm text-neutral-300">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Booking Form Card */}
        <div className="mx-auto mt-12 max-w-3xl rounded-xl border border-rose-500/30 bg-white/5 p-6 sm:p-10 backdrop-blur-xs">
          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-500/20 px-3.5 py-1 text-xs font-semibold text-rose-300">
              Form Reservasi Cepat
            </span>
            <h3 className="mt-3 text-2xl font-bold">Atur Jadwal Kunjungan</h3>
            <p className="mt-2 text-xs text-neutral-300">
              Data yang Anda masukkan otomatis dirangkai menjadi pesan konfirmasi WhatsApp.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-medium text-rose-200">
                Nama Lengkap
              </label>
              <input
                type="text"
                placeholder="Contoh: Jessica Aurelia"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-neutral-700 bg-neutral-900/90 px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:border-rose-400 focus:outline-hidden"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-rose-200">
                Nomor WhatsApp Aktif
              </label>
              <input
                type="text"
                placeholder="Contoh: 081234567890"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-neutral-700 bg-neutral-900/90 px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:border-rose-400 focus:outline-hidden"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-medium text-rose-200">
                Pilihan Treatment
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-neutral-700 bg-neutral-900/90 px-3.5 py-2.5 text-sm text-white focus:border-rose-400 focus:outline-hidden">
                <option value="Potong & Styling Rambut (Mulai Rp 75.000)">
                  Potong & Styling Rambut (Mulai Rp 75.000)
                </option>
                <option value="Rebonding & Smoothing Keratin (Mulai Rp 250.000)">
                  Rebonding & Smoothing Keratin (Mulai Rp 250.000)
                </option>
                <option value="Facial & Glow Treatment (Mulai Rp 175.000)">
                  Facial & Glow Treatment (Mulai Rp 175.000)
                </option>
                <option value="Nail Art & Mani-Pedi (Mulai Rp 95.000)">
                  Nail Art & Mani-Pedi (Mulai Rp 95.000)
                </option>
                <option value="Makeup & Bridal / Wisuda (Mulai Rp 350.000)">
                  Makeup & Bridal / Wisuda (Mulai Rp 350.000)
                </option>
                <option value="Paket Fresh & Chic (Rp 150.000)">
                  Paket Fresh & Chic (Rp 150.000)
                </option>
                <option value="Paket Silky Glow Keratin (Rp 399.000)">
                  Paket Silky Glow Keratin (Rp 399.000)
                </option>
                <option value="Paket Total Glamour Day (Rp 550.000)">
                  Paket Total Glamour Day (Rp 550.000)
                </option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-rose-200">
                Rencana Tanggal
              </label>
              <input
                type="text"
                placeholder="Contoh: Sabtu, 25 Oktober 2026"
                value={bookingDate}
                onChange={(e) => setBookingDate(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-neutral-700 bg-neutral-900/90 px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:border-rose-400 focus:outline-hidden"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-rose-200">
                Perkiraan Jam
              </label>
              <input
                type="text"
                placeholder="Contoh: 14.00 WIB"
                value={bookingTime}
                onChange={(e) => setBookingTime(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-neutral-700 bg-neutral-900/90 px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:border-rose-400 focus:outline-hidden"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-medium text-rose-200">
                Catatan / Preferensi Stylist (opsional)
              </label>
              <input
                type="text"
                placeholder="Contoh: Kulit sensitif / ingin stylist wanita"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-neutral-700 bg-neutral-900/90 px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:border-rose-400 focus:outline-hidden"
              />
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href={waLink(bookingMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-rose-500 px-6 py-3.5 font-bold text-white transition-colors hover:bg-rose-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 sm:w-auto">
              <PhoneCall className="h-4 w-4" />
              Kirim Janji Temu via WhatsApp
            </a>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-neutral-400">
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3.5 w-3.5 text-rose-400" /> Konfirmasi Cepat
                &lt; 15 Menit
              </span>
              <span className="inline-flex items-center gap-1">
                <Heart className="h-3.5 w-3.5 text-rose-400" /> Pelayanan Ramah
                & Profesional
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
