import { AlertCircle, Clock, MapPin, ShieldCheck, Truck } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const shippingFeatures = [
  {
    icon: Clock,
    title: "1–2 Hari Tiba di Jabodetabek",
    desc: "Bekerja sama dengan Paxel (Next Day / Sameday transit) dan JNE YES agar makanan basah seperti tape singkong tetap prima saat diterima.",
  },
  {
    icon: ShieldCheck,
    title: "Kemasan Vakum & Kardus Berlapis",
    desc: "Tape dikemas vacuum-sealed higienis, kerupuk diproteksi bubble wrap tebal berlapis anti-remuk, dan bumbu terasi disegel kedap aroma.",
  },
  {
    icon: Truck,
    title: "Jadwal Kirim Teratur Setiap Hari",
    desc: "Pengiriman berangkat dari Situbondo setiap Senin sampai Sabtu. Order sebelum pukul 12.00 WIB dikemas dan dikirim pada hari yang sama.",
  },
  {
    icon: AlertCircle,
    title: "Garansi Kirim Aman 100%",
    desc: "Apabila paket mengalami kerusakan parah atau kemasan rusak saat diantar kurir, kami ganti baru atau kembalikan dana Anda tanpa ribet.",
  },
];

export default function OlehShipping() {
  return (
    <section id="pengiriman" className="bg-stone-100 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm md:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-3.5 py-1 text-xs font-semibold text-orange-800">
                <Truck className="h-3.5 w-3.5" />
                Layanan Pengiriman Terpercaya
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
                Kirim Aman & Segar ke Jabodetabek
              </h2>
              <p className="mt-4 text-stone-600">
                Rindu kuliner otentik Situbondo tapi tinggal di Jakarta, Bogor,
                Depok, Tangerang, atau Bekasi? Kami mengurus seluruh proses
                pengemasan berstandar tinggi sehingga oleh-oleh Anda sampai
                dengan kualitas terbaik.
              </p>

              <div className="mt-6 rounded-2xl bg-orange-50/80 p-5 border border-orange-200/60">
                <div className="flex items-center gap-2 text-sm font-semibold text-orange-900">
                  <MapPin className="h-4 w-4 text-orange-600" />
                  Tarif Ongkir Spesial Jabodetabek
                </div>
                <p className="mt-1 text-xs text-orange-800">
                  Estimasi ongkos kirim mulai Rp 22.000 / kg. Tersedia layanan
                  cold-chain Paxel untuk pengiriman aneka kudapan segar.
                </p>
              </div>

              <div className="mt-8">
                <a
                  href={waLink(
                    "Halo Oleh-Oleh Khas Situbondo, saya mau cek ongkos kirim dan estimasi sampai ke alamat saya di Jabodetabek."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-orange-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-orange-500">
                  <Truck className="h-4 w-4" />
                  Cek Ongkir via WhatsApp
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-6 sm:grid-cols-2">
                {shippingFeatures.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-stone-200/80 bg-stone-50/50 p-6 transition-all hover:bg-stone-50">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-600">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-base font-bold text-stone-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-stone-600">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
