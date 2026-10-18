import { Clock3, MapPin, MessageCircle, Phone } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

export default function FoodTruckContact() {
  return (
    <section id="kontak" className="bg-neutral-950 px-4 py-20 text-white">
      <div className="container mx-auto max-w-5xl">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-yellow-400">
              Order & Reservasi
            </span>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              Lapar? Chat kami sekarang
            </h2>
            <p className="mt-4 text-neutral-300">
              Pesan menu untuk diambil di lokasi, pre-order rombongan, atau
              konsultasi sewa food truck dan katering. Tim kami membalas cepat
              setiap hari.
            </p>

            <a
              href={waLink(
                "Halo Roda Rasa Food Truck, saya mau order. Berikut pesanan saya: [Menu & jumlah]."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-yellow-500 px-6 py-3 font-semibold text-neutral-950 transition-colors hover:bg-yellow-400">
              <MessageCircle className="h-5 w-5" />
              Order via WhatsApp
            </a>

            <div className="mt-8 rounded-xl border border-yellow-500/20 bg-yellow-500/10 p-4 text-sm text-yellow-100">
              <p className="font-semibold">Cara order cepat:</p>
              <p className="mt-1 text-neutral-300">
                1. Pilih menu & jumlah porsi
                <br />
                2. Kirim pesan WhatsApp beserta jam pengambilan
                <br />
                3. Konfirmasi pembayaran, pesanan siap di lokasi
              </p>
            </div>
          </div>

          <div className="space-y-5 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-yellow-400" />
              <div>
                <p className="font-semibold">Dapur & Pool Truk</p>
                <p className="text-sm text-neutral-300">
                  Jl. Raya Panji No. 45, Situbondo, Jawa Timur
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-yellow-400" />
              <div>
                <p className="font-semibold">Jam Operasional</p>
                <p className="text-sm text-neutral-300">
                  Senin – Minggu, 09.00 – 21.00 WIB
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-yellow-400" />
              <div>
                <p className="font-semibold">WhatsApp & Telepon</p>
                <p className="text-sm text-neutral-300">+62 877 4596 8545</p>
              </div>
            </div>

            <div className="rounded-xl bg-neutral-900 p-4 text-xs text-neutral-400">
              Untuk acara di luar jadwal reguler, mohon hubungi minimal H-7 agar
              rute dan persiapan dapur bisa kami atur.
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-xs text-neutral-400">
          © {new Date().getFullYear()} Roda Rasa Food Truck & Jasa Boga — Demo
          website oleh Andalan Tech.
        </div>
      </div>
    </section>
  );
}
