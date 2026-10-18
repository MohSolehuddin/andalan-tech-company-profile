import { Clock, HeartHandshake, MapPin, MessageCircle, Phone, ShieldCheck, Truck } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const orderPerks = [
  {
    icon: Truck,
    title: "Kurir Khusus & Aman",
    desc: "Tersedia opsi pengiriman mobil berpendingin atau instant delivery agar kue tetap utuh sampai tujuan.",
  },
  {
    icon: ShieldCheck,
    title: "Garansi Kualitas Fresh",
    desc: "Kue dibuat di hari pengiriman, dikemas dengan box kokoh dan segel keamanan higienis.",
  },
  {
    icon: HeartHandshake,
    title: "Respon Cepat WhatsApp",
    desc: "Admin ramah siap membantu rekomendasi ukuran porsi dan perhitungan budget sesuai kebutuhan Anda.",
  },
];

export default function TokoKueOrderWA() {
  return (
    <section id="order-wa" className="bg-neutral-900 px-4 py-20 text-white">
      <div className="container mx-auto max-w-6xl">
        {/* Banner Pemesanan */}
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-pink-600 via-rose-600 to-pink-700 p-8 shadow-xl md:p-12">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="relative z-10 max-w-2xl">
            <span className="inline-block rounded-full bg-white/20 px-3.5 py-1 text-xs font-semibold tracking-wide text-white backdrop-blur-xs">
              Pemesanan Cepat &amp; Mudah
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Siap Menikmati Kue Favorit Anda?
            </h2>
            <p className="mt-3 text-sm text-pink-100 sm:text-base leading-relaxed">
              Langsung klik tombol di bawah untuk terhubung dengan admin kami di
              WhatsApp. Konsultasikan tanggal, request rasa, dan pesan sekarang.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={waLink(
                  "Halo Manis Kue & Dessert, saya ingin memesan kue. Boleh kirimkan rekomendasi menu dan format ordernya?"
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-xl bg-white px-6 py-3.5 font-bold text-neutral-900 shadow-lg transition-all hover:bg-neutral-100 hover:scale-[1.02]">
                <MessageCircle className="h-5 w-5 text-pink-600" />
                Hubungi via WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Perks & Store Details */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {orderPerks.map((perk) => (
            <div
              key={perk.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xs">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-500/20 text-pink-400">
                <perk.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-white">{perk.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                {perk.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Operational info bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-neutral-400 sm:flex-row">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-pink-400" />
            <span>Jam Operasional: Setiap Hari, 08.00 – 20.00 WIB</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-pink-400" />
            <span>Kitchen &amp; Studio: Jl. Anggrek Melati No. 18, Jakarta Selatan</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-pink-400" />
            <span>Order WhatsApp: +62 877-4596-8545</span>
          </div>
        </div>
      </div>
    </section>
  );
}
