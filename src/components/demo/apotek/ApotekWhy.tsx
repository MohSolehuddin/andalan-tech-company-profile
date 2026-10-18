import { BadgeCheck, Clock, Truck, UserCheck } from "lucide-react";

const reasons = [
  {
    icon: BadgeCheck,
    title: "Asli & Berizin BPOM",
    desc: "Semua produk dipasok dari distributor resmi dan dicek masa kedaluwarsanya.",
  },
  {
    icon: UserCheck,
    title: "Apoteker Siaga",
    desc: "Apoteker berpengalaman siap membantu dosis dan aturan pakai setiap hari.",
  },
  {
    icon: Truck,
    title: "Antar Cepat",
    desc: "Pesanan diproses langsung dan diantar ojek instan ke alamat Anda.",
  },
];

const hours = [
  { day: "Senin – Jumat", time: "07.00 – 23.00 WIB" },
  { day: "Sabtu", time: "08.00 – 23.00 WIB" },
  { day: "Minggu & Hari Libur", time: "08.00 – 22.00 WIB" },
];

export default function ApotekWhy() {
  return (
    <section id="keunggulan" className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">
              Keunggulan
            </p>
            <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
              Belanja obat tanpa ragu
            </h2>
            <p className="mt-3 text-neutral-600">
              Kami menjaga kualitas produk dan kecepatan layanan agar Anda bisa
              fokus pulih, bukan mengurus pesanan.
            </p>

            <div className="mt-8 space-y-6">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-100">
                    <reason.icon className="h-5 w-5 text-teal-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-900">
                      {reason.title}
                    </h3>
                    <p className="mt-1 text-sm text-neutral-600">
                      {reason.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-teal-100 bg-teal-50/60 p-8">
            <div className="flex items-center gap-3">
              <Clock className="h-6 w-6 text-teal-700" />
              <h3 className="text-xl font-bold text-neutral-900">Jam Buka</h3>
            </div>
            <div className="mt-6 space-y-4">
              {hours.map((item) => (
                <div
                  key={item.day}
                  className="flex items-center justify-between gap-4 border-b border-teal-100 pb-4 last:border-0 last:pb-0">
                  <span className="text-sm text-neutral-600">{item.day}</span>
                  <span className="text-sm font-semibold text-neutral-900">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-6 rounded-lg bg-white p-4 text-sm text-neutral-600">
              Butuh obat di luar jam buka? Kirim pesan WhatsApp, apoteker kami
              akan menginformasikan ketersediaan layanan darurat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
