import {
  MessageCircle,
  MapPin,
  Clock,
  Phone,
  Truck,
  Send,
  FileCheck2,
  Package,
} from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const orderSteps = [
  {
    step: "01",
    icon: Send,
    title: "Kirim File & Spesifikasi",
    desc: "Kirim desain via WhatsApp (format PDF, CDR, TIFF, AI, atau JPG resolusi tinggi) beserta rincian ukuran & bahan.",
  },
  {
    step: "02",
    icon: FileCheck2,
    title: "Konfirmasi & ACC Layout",
    desc: "Tim kami mengecek kelayakan resolusi dan mengirim digital mockup/proof untuk disetujui sebelum proses cetak.",
  },
  {
    step: "03",
    icon: Package,
    title: "Cetak & Siap Kirim",
    desc: "Pesanan diproduksi dengan mesin high-res, melewati quality check, dan siap diambil di workshop atau dikirim ke lokasi.",
  },
];

export default function PercetakanContact() {
  return (
    <section id="kontak" className="bg-neutral-950 px-4 py-20 text-white">
      <div className="container mx-auto max-w-6xl">
        {/* Alur Order */}
        <div className="text-center">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-orange-400">
            Cara Pemesanan Praktis
          </p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            Order Cetak Tanpa Ribet via WhatsApp
          </h2>
          <p className="mt-3 text-neutral-400 max-w-xl mx-auto">
            Tidak perlu datang mengantre. Konsultasi, kirim materi, dan pembayaran transfer bisa diselesaikan dari smartphone Anda.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {orderSteps.map((item) => (
            <div
              key={item.step}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xs">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/20 text-orange-400">
                  <item.icon className="h-5 w-5" />
                </div>
                <span className="text-2xl font-black text-white/20">{item.step}</span>
              </div>
              <h3 className="mt-4 font-bold text-lg text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-neutral-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Informasi Kontak & Lokasi */}
        <div className="mt-16 grid items-center gap-10 rounded-3xl border border-white/10 bg-linear-to-b from-white/10 to-white/5 p-8 md:grid-cols-2 md:p-12">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Layanan Aktif & Fast Response
            </span>
            <h3 className="mt-4 text-2xl sm:text-3xl font-bold">
              Butuh Cetak Cepat Hari Ini? Hubungi Kami Sekarang
            </h3>
            <p className="mt-3 text-neutral-300 text-sm sm:text-base leading-relaxed">
              Diskusikan kebutuhan spanduk, stiker, kartu nama, atau merchandise Anda bersama tim cetak kami. Kami siap memberikan saran bahan terbaik dan estimasi biaya instan.
            </p>

            <div className="mt-8">
              <a
                href={waLink("Halo Cetak Cepat Digital Printing, saya mau pesan cetak kilat sekarang.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-xl bg-orange-500 px-6 py-3.5 font-bold text-white shadow-lg shadow-orange-500/30 transition-colors hover:bg-orange-400">
                <MessageCircle className="h-5 w-5" />
                Chat WhatsApp Sekarang
              </a>
            </div>
          </div>

          <div className="space-y-4 rounded-2xl bg-neutral-900/80 p-6 border border-white/10 text-sm">
            <div className="flex items-start gap-3.5">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" />
              <div>
                <p className="font-semibold text-white">Workshop & Pick-up Point</p>
                <p className="text-neutral-300">
                  Jl. Basuki Rahmat No. 42, Mimbaan, Panji, Situbondo, Jawa Timur 68322
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" />
              <div>
                <p className="font-semibold text-white">Jam Operasional Mesin</p>
                <p className="text-neutral-300">
                  Senin – Sabtu: 08.00 – 21.00 WIB
                  <br />
                  Minggu: 09.00 – 17.00 WIB
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" />
              <div>
                <p className="font-semibold text-white">Hotline & WhatsApp Order</p>
                <p className="text-neutral-300">+62 877 4596 8545</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <Truck className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" />
              <div>
                <p className="font-semibold text-white">Layanan Pengiriman</p>
                <p className="text-neutral-300">
                  Kurir instan lokal (Grab/Gojek/Kurir Toko) & Ekspedisi kargo ke seluruh Indonesia
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Demo */}
        <div className="mt-16 border-t border-white/10 pt-8 text-center text-xs text-neutral-400">
          © {new Date().getFullYear()} Cetak Cepat Digital Printing — Demo website oleh{" "}
          <span className="text-white font-medium">Andalan Tech</span>.
        </div>
      </div>
    </section>
  );
}
