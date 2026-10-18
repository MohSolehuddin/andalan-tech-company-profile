import { CreditCard, ShieldCheck, Wrench, Truck } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const features = [
  {
    icon: CreditCard,
    title: "Cicilan 0% Fleksibel",
    desc: "Bisa cicilan 0% hingga 12 bulan menggunakan kartu kredit atau mitra pembiayaan resmi tanpa uang muka.",
  },
  {
    icon: ShieldCheck,
    title: "Garansi Resmi 100%",
    desc: "Seluruh unit resmi bergaransi prinsipal pabrik. Jaminan ganti unit baru jika terdapat cacat pabrik dalam 7 hari.",
  },
  {
    icon: Wrench,
    title: "Servis & Teknisi Ahli",
    desc: "Layanan pemasangan AC, bracket TV, hingga perbaikan berkala oleh teknisi bersertifikasi dan berpengalaman.",
  },
  {
    icon: Truck,
    title: "Gratis Pengiriman & Instalasi",
    desc: "Pengiriman cepat langsung ke rumah Anda untuk area dalam kota lengkap dengan uji fungsi alat saat barang sampai.",
  },
];

export default function ElektronikFeatures() {
  return (
    <section className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-600">
            Keunggulan & Layanan
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-4xl">
            Belanja Tenang, Nyaman, & Bergaransi
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Kami memastikan pengalaman belanja elektronik rumah tangga bebas repot dari awal konsultasi hingga barang terpasang rapi.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feat) => (
            <div
              key={feat.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50/60 p-6 transition-all hover:border-blue-300 hover:bg-white hover:shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                <feat.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-base font-bold text-slate-900">
                {feat.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl bg-linear-to-r from-slate-900 via-blue-950 to-slate-900 p-8 text-white sm:p-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <span className="inline-block rounded-full bg-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-300">
                Butuh Bantuan Servis atau Pasang AC?
              </span>
              <h3 className="mt-2 text-xl font-bold sm:text-2xl">
                Jadwalkan Kunjungan Teknisi Hari Ini
              </h3>
              <p className="mt-1 max-w-xl text-sm text-slate-300">
                Hubungi teknisi Elektronik Jaya Abadi untuk instalasi baru, bongkar pasang, atau perbaikan unit elektronik rumah tangga Anda.
              </p>
            </div>
            <a
              href={waLink("Halo Elektronik Jaya Abadi, saya butuh jadwal layanan servis atau pemasangan elektronik.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500">
              Jadwalkan Servis via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
