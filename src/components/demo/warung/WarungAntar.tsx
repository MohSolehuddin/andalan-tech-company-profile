import { Bike, Clock, MapPin, MessageCircle, Wallet } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const steps = [
  {
    title: "Pilih menu & paket",
    desc: "Catat nama lauk atau paket nasi lengkap yang ingin dipesan.",
  },
  {
    title: "Chat WhatsApp",
    desc: "Kirim pesanan beserta alamat dan patokan rumah Anda.",
  },
  {
    title: "Kami masak & antar",
    desc: "Pesanan dimasak setelah masuk, lalu diantar hangat ke lokasi.",
  },
];

const info = [
  {
    icon: MapPin,
    title: "Area Antar",
    desc: "Radius 5 km dari warung: Kecamatan Kota, Patokan, Mimbaan, dan sekitarnya.",
  },
  {
    icon: Wallet,
    title: "Ongkir Ramah",
    desc: "Gratis ongkir untuk belanja minimal Rp 25.000. Di bawah itu cukup Rp 3.000.",
  },
  {
    icon: Clock,
    title: "Jam Antar",
    desc: "Pukul 10.00 – 20.30 WIB. Pesan sebelum pukul 20.00 agar tidak kehabisan lauk.",
  },
];

export default function WarungAntar() {
  return (
    <section id="antar" className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-widest text-red-600">
            <Bike className="h-4 w-4" />
            Pesan Antar
          </span>
          <h2 className="mt-2 text-3xl font-bold text-stone-900 md:text-4xl">
            Tinggal Chat, Makanan Datang Hangat
          </h2>
          <p className="mt-3 text-stone-600">
            Tiga langkah saja, tanpa aplikasi tambahan dan tanpa biaya
            administrasi.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-2xl border border-stone-200 bg-stone-50/50 p-6">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">
                {index + 1}
              </span>
              <h3 className="mt-4 text-lg font-bold text-stone-900">
                {step.title}
              </h3>
              <p className="mt-1 text-sm text-stone-600">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 rounded-2xl bg-linear-to-r from-red-950 via-stone-900 to-orange-950 p-8 text-white md:grid-cols-3">
          {info.map((item) => (
            <div key={item.title} className="flex items-start gap-3">
              <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
              <div>
                <p className="font-semibold">{item.title}</p>
                <p className="mt-1 text-sm text-stone-300">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={waLink(
              "Halo Warung Sederhana Jaya, saya mau pesan antar. Ini pesanan dan alamat saya:"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500">
            <MessageCircle className="h-5 w-5" />
            Pesan Antar Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
