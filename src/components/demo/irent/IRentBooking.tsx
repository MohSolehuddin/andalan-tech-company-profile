"use client";

import { useState } from "react";
import { Info, Send } from "lucide-react";
import { DEVICES } from "./deviceData";
import { waLink } from "@/lib/demo/wa";

const IRentBooking = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [deviceId, setDeviceId] = useState("ip16promax");
  const [duration, setDuration] = useState("3");
  const [date, setDate] = useState("");
  const [pickup, setPickup] = useState("Ambil di Store");
  const [notes, setNotes] = useState("");
  const [showTerms, setShowTerms] = useState(false);

  const selectedDevice = DEVICES.find((d) => d.id === deviceId) || DEVICES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !date) {
      alert("Mohon lengkapi Nama, Nomor WhatsApp, dan Tanggal Mulai Sewa.");
      return;
    }

    const message = `Halo Admin iRent Studio, saya ingin booking rental iPhone:
• Nama: ${name.trim()}
• WhatsApp: ${phone.trim()}
• Unit: ${selectedDevice.name} (${selectedDevice.storage})
• Durasi: ${duration} Hari
• Tanggal: ${date}
• Pengambilan: ${pickup}
• Catatan/Event: ${notes.trim() || "-"}

Mohon konfirmasi ketersediaan dan verifikasi dokumen. Terima kasih!`;

    window.open(waLink(message), "_blank");
  };

  return (
    <section id="booking" className="py-16 bg-slate-950 border-b border-slate-800 scroll-mt-14">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">
            Formulir Pemesanan Resmi
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Booking Unit & Konfirmasi WhatsApp</h2>
          <p className="text-slate-400 text-sm mt-1 max-w-lg mx-auto">
            Isi formulir singkat di bawah ini. Tim admin iRent Studio akan langsung memproses jadwal Anda.
          </p>
        </div>

        <div className="bg-slate-900 rounded-xl border border-slate-800 p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">Nama Lengkap (Sesuai KTP) *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Contoh: Budi Santoso"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs placeholder-slate-400 focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">Nomor WhatsApp Aktif *</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Contoh: 081234567890"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs placeholder-slate-400 focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">Unit iPhone Pilihan</label>
                <select
                  value={deviceId}
                  onChange={(e) => setDeviceId(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none"
                >
                  {DEVICES.map((d) => (
                    <option key={d.id} value={d.id}>{d.name} ({d.storage})</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">Durasi Sewa</label>
                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none"
                >
                  <option value="1">1 Hari (Harian)</option>
                  <option value="2">2 Hari</option>
                  <option value="3">3 Hari (Weekend Hemat 15%)</option>
                  <option value="7">7 Hari (Mingguan Hemat 25%)</option>
                  <option value="14">14 Hari</option>
                  <option value="30">30 Hari (Bulanan Hemat 45%)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">Tanggal Mulai Sewa *</label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">Metode Pengambilan</label>
                <select
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none"
                >
                  <option value="Ambil di Store">Ambil di Offline Store (Jakarta/Surabaya)</option>
                  <option value="Kurir Instan GoSend/Grab">Kurir Instan GoSend/Grab</option>
                  <option value="Kirim Luar Kota Berasuransi">Kirim Luar Kota (Ekspedisi)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">Keterangan / Keperluan Event (Opsional)</label>
              <input
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Contoh: Nonton Konser di GBK / Liburan ke Bali"
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs placeholder-slate-400 focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => setShowTerms(!showTerms)}
                className="text-xs text-sky-400 hover:text-sky-300 font-semibold inline-flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none"
              >
                <Info className="w-3.5 h-3.5" />
                <span>{showTerms ? "Tutup Syarat Dokumen" : "Lihat Syarat Dokumen & Jaminan"}</span>
              </button>

              {showTerms && (
                <div className="mt-3 p-4 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-2">
                  <p><strong className="text-white">Umum/Karyawan:</strong> e-KTP Asli, 1 Dokumen Sekunder (SIM/NPWP/ID Kantor), akun Instagram/LinkedIn aktif.</p>
                  <p><strong className="text-white">Mahasiswa:</strong> e-KTP Asli, KTM Mahasiswa aktif, screenshot portal akademik aktif.</p>
                  <p className="text-emerald-400 font-medium">✓ Tanpa tahan dokumen fisik asli. Bebas deposit jaminan untuk profil terverifikasi.</p>
                </div>
              )}
            </div>

            <div className="pt-3">
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-colors shadow-md flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
              >
                <Send className="w-4 h-4" />
                <span>Kirim Pesanan ke WhatsApp Admin</span>
              </button>
              <p className="text-center text-[11px] text-slate-400 mt-2">
                Respon kilat 08.00–22.00 WIB • Unit diverifikasi dan siap disiapkan
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default IRentBooking;
