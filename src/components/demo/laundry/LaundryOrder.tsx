"use client";

import { useState } from "react";
import {
  CalendarCheck,
  ClipboardList,
  MessageCircle,
  PackageCheck,
  Truck,
  WashingMachine,
} from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const steps = [
  {
    icon: MessageCircle,
    title: "1. Chat / Order",
    desc: "Isi formulir atau chat WhatsApp, sebutkan jenis cucian Anda.",
  },
  {
    icon: Truck,
    title: "2. Antar-Jemput",
    desc: "Kurir menjemput cucian ke rumah, berat ditimbang di depan Anda.",
  },
  {
    icon: WashingMachine,
    title: "3. Dicuci & Disetrika",
    desc: "Dicuci sesuai jenis kain, lalu disetrika uap dan diberi pewangi.",
  },
  {
    icon: PackageCheck,
    title: "4. Diantar Kembali",
    desc: "Cucian diantar rapi dan siap langsung masuk lemari.",
  },
];

export default function LaundryOrder() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [service, setService] = useState("Cuci Setrika (Rp 10.000/kg)");
  const [pickupTime, setPickupTime] = useState("");
  const [notes, setNotes] = useState("");

  const orderMessage = `Halo Kilat Bersih Laundry, saya mau order antar-jemput:
- Nama: ${name || "(belum diisi)"}
- Alamat Penjemputan: ${address || "(belum diisi)"}
- Layanan: ${service}
- Waktu Jemput: ${pickupTime || "Secepatnya"}
- Catatan: ${notes || "-"}
Mohon dikonfirmasi ya. Terima kasih!`;

  return (
    <section id="order" className="bg-sky-950 px-4 py-20 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-300">
            Alur Order
          </p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            Hanya 4 langkah, cucian beres
          </h2>
          <p className="mt-3 text-sky-100/80">
            Order hari ini, kurir kami siap menjemput dan mengantar kembali
            cucian Anda tanpa perlu keluar rumah.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-400/15">
                <step.icon className="h-5 w-5 text-sky-300" />
              </div>
              <h3 className="mt-4 font-bold">{step.title}</h3>
              <p className="mt-1 text-sm text-sky-100/80">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-400/15 px-3 py-1 text-xs font-medium text-sky-200">
              <ClipboardList className="h-3.5 w-3.5" />
              Form Order Cepat
            </span>
            <h3 className="mt-3 text-2xl font-bold">
              Jadwalkan Penjemputan Sekarang
            </h3>
            <p className="mt-2 text-sm text-sky-100/80">
              Rincian di bawah akan otomatis tersusun menjadi pesan WhatsApp.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-medium text-sky-100">
                Nama Lengkap
              </label>
              <input
                type="text"
                placeholder="Contoh: Siti Rahma"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-sky-800 bg-sky-900/60 px-3.5 py-2.5 text-sm text-white placeholder-sky-400/70 focus:border-sky-400 focus:outline-hidden"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-sky-100">
                Alamat Penjemputan
              </label>
              <input
                type="text"
                placeholder="Contoh: Jl. Melati No. 12"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-sky-800 bg-sky-900/60 px-3.5 py-2.5 text-sm text-white placeholder-sky-400/70 focus:border-sky-400 focus:outline-hidden"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-sky-100">
                Layanan
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-sky-800 bg-sky-900/60 px-3.5 py-2.5 text-sm text-white focus:border-sky-400 focus:outline-hidden">
                <option value="Cuci Kering (Rp 7.000/kg)">
                  Cuci Kering (Rp 7.000/kg)
                </option>
                <option value="Cuci Setrika (Rp 10.000/kg)">
                  Cuci Setrika (Rp 10.000/kg)
                </option>
                <option value="Express 6 Jam (Rp 15.000/kg)">
                  Express 6 Jam (Rp 15.000/kg)
                </option>
                <option value="Cuci Sepatu (Rp 25.000/pasang)">
                  Cuci Sepatu (Rp 25.000/pasang)
                </option>
                <option value="Cuci Tas (Rp 30.000/pcs)">
                  Cuci Tas (Rp 30.000/pcs)
                </option>
                <option value="Bed Cover / Selimut (Rp 35.000/pcs)">
                  Bed Cover / Selimut (Rp 35.000/pcs)
                </option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-sky-100">
                Waktu Penjemputan
              </label>
              <input
                type="text"
                placeholder="Contoh: Hari ini jam 4 sore"
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-sky-800 bg-sky-900/60 px-3.5 py-2.5 text-sm text-white placeholder-sky-400/70 focus:border-sky-400 focus:outline-hidden"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-medium text-sky-100">
                Catatan (opsional)
              </label>
              <input
                type="text"
                placeholder="Contoh: Pisahkan pakaian putih, gunakan pewangi lavender"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-sky-800 bg-sky-900/60 px-3.5 py-2.5 text-sm text-white placeholder-sky-400/70 focus:border-sky-400 focus:outline-hidden"
              />
            </div>
          </div>

          <div className="mt-6 text-center">
            <a
              href={waLink(orderMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sky-400 px-6 py-3.5 font-bold text-sky-950 transition-colors hover:bg-sky-300 sm:w-auto">
              <CalendarCheck className="h-5 w-5" />
              Kirim Order via WhatsApp
            </a>
            <p className="mt-2 text-xs text-sky-100/70">
              Kurir akan mengonfirmasi jadwal penjemputan maksimal 15 menit
              setelah pesan dikirim.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
