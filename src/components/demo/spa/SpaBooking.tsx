"use client";

import { useState } from "react";
import {
  Calendar,
  CalendarCheck,
  CheckCircle2,
  Clock,
  MessageCircle,
  PhoneCall,
} from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const steps = [
  {
    icon: MessageCircle,
    title: "1. Pilih Perawatan",
    desc: "Tentukan layanan atau paket durasi yang paling pas untuk Anda.",
  },
  {
    icon: Calendar,
    title: "2. Tentukan Jadwal",
    desc: "Pilih tanggal dan jam kunjungan yang paling nyaman.",
  },
  {
    icon: CheckCircle2,
    title: "3. Konfirmasi Instan",
    desc: "Admin membalas reservasi via WhatsApp kurang dari 15 menit.",
  },
];

export default function SpaBooking() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Body Massage (Rp 120.000)");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [notes, setNotes] = useState("");

  const bookingMessage = `Halo Ayu Spa & Reflexology, saya mau booking jadwal:
- Nama: ${name || "(belum diisi)"}
- No. WhatsApp: ${phone || "(belum diisi)"}
- Layanan: ${service}
- Tanggal: ${bookingDate || "(belum ditentukan)"}
- Jam: ${bookingTime || "(fleksibel)"}
- Catatan: ${notes || "-"}
Mohon info ketersediaan slotnya ya. Terima kasih!`;

  return (
    <section id="booking" className="bg-emerald-950 px-4 py-20 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-lime-400">
            Reservasi Mudah
          </p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            Booking Jadwal Anda Sekarang
          </h2>
          <p className="mt-3 text-emerald-100/80">
            Isi data singkat di bawah, lalu kirim langsung ke WhatsApp kami.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xs">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-lime-400/20">
                <step.icon className="h-5 w-5 text-lime-300" />
              </div>
              <h3 className="mt-4 font-bold text-white">{step.title}</h3>
              <p className="mt-1 text-sm text-emerald-100/80">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-xl border border-lime-400/30 bg-white/5 p-6 sm:p-10 backdrop-blur-xs">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-medium text-lime-200">
                Nama Lengkap
              </label>
              <input
                type="text"
                placeholder="Contoh: Ayu Lestari"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-emerald-800 bg-emerald-900/60 px-3.5 py-2.5 text-sm text-white placeholder-emerald-400 focus:border-lime-400 focus:outline-hidden"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-lime-200">
                Nomor WhatsApp Aktif
              </label>
              <input
                type="text"
                placeholder="Contoh: 081234567890"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-emerald-800 bg-emerald-900/60 px-3.5 py-2.5 text-sm text-white placeholder-emerald-400 focus:border-lime-400 focus:outline-hidden"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-medium text-lime-200">
                Pilihan Layanan / Paket
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-emerald-800 bg-emerald-900/60 px-3.5 py-2.5 text-sm text-white focus:border-lime-400 focus:outline-hidden">
                <option value="Body Massage (Rp 120.000)">
                  Body Massage (Rp 120.000)
                </option>
                <option value="Reflexology (Rp 90.000)">
                  Reflexology (Rp 90.000)
                </option>
                <option value="Lulur & Body Scrub (Rp 135.000)">
                  Lulur & Body Scrub (Rp 135.000)
                </option>
                <option value="Facial Glow (Rp 150.000)">
                  Facial Glow (Rp 150.000)
                </option>
                <option value="Paket Rileks 60 menit (Rp 149.000)">
                  Paket Rileks 60 menit (Rp 149.000)
                </option>
                <option value="Paket Segar 90 menit (Rp 229.000)">
                  Paket Segar 90 menit (Rp 229.000)
                </option>
                <option value="Paket Ayu 120 menit (Rp 329.000)">
                  Paket Ayu 120 menit (Rp 329.000)
                </option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-lime-200">
                Rencana Tanggal
              </label>
              <input
                type="text"
                placeholder="Contoh: Sabtu, 25 Oktober 2026"
                value={bookingDate}
                onChange={(e) => setBookingDate(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-emerald-800 bg-emerald-900/60 px-3.5 py-2.5 text-sm text-white placeholder-emerald-400 focus:border-lime-400 focus:outline-hidden"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-lime-200">
                Perkiraan Jam
              </label>
              <input
                type="text"
                placeholder="Contoh: 14.00 WIB"
                value={bookingTime}
                onChange={(e) => setBookingTime(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-emerald-800 bg-emerald-900/60 px-3.5 py-2.5 text-sm text-white placeholder-emerald-400 focus:border-lime-400 focus:outline-hidden"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-medium text-lime-200">
                Catatan (opsional)
              </label>
              <input
                type="text"
                placeholder="Contoh: ingin terapis wanita / fokus pijat punggung"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-emerald-800 bg-emerald-900/60 px-3.5 py-2.5 text-sm text-white placeholder-emerald-400 focus:border-lime-400 focus:outline-hidden"
              />
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href={waLink(bookingMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-lime-400 px-6 py-3.5 font-bold text-emerald-950 transition-colors hover:bg-lime-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 sm:w-auto">
              <PhoneCall className="h-4 w-4" />
              Kirim Booking via WhatsApp
            </a>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-emerald-200/80">
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3.5 w-3.5 text-lime-400" /> Konfirmasi cepat
                &lt; 15 menit
              </span>
              <span className="inline-flex items-center gap-1">
                <CalendarCheck className="h-3.5 w-3.5 text-lime-400" /> Reschedule
                gratis H-1
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
