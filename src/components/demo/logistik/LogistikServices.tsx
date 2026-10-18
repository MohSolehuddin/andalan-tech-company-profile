import {
  Boxes,
  Building2,
  CarFront,
  Home,
  Package,
  Warehouse,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Pindahan Rumah",
    desc: "Angkut perabot, elektronik, dan barang pribadi dengan packing aman sampai rumah baru.",
  },
  {
    icon: Building2,
    title: "Pindahan Kantor",
    desc: "Relokasi kantor cepat di luar jam kerja agar operasional bisnis tetap lancar.",
  },
  {
    icon: Package,
    title: "Kirim Barang & Paket Besar",
    desc: "Ekspedisi barang volume besar antar kota dan antar pulau dengan tarif per kubik.",
  },
  {
    icon: CarFront,
    title: "Kirim Kendaraan",
    desc: "Pengiriman motor dan mobil dengan car carrier atau armada khusus tertutup.",
  },
  {
    icon: Boxes,
    title: "Packing & Crating",
    desc: "Packing bubble wrap, kardus, dan peti kayu untuk barang rapuh maupun bernilai tinggi.",
  },
  {
    icon: Warehouse,
    title: "Gudang & Penyimpanan",
    desc: "Titipkan barang di gudang aman dan berasuransi saat rumah baru belum siap.",
  },
];

export default function LogistikServices() {
  return (
    <section id="layanan" className="bg-neutral-50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
            Layanan
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Satu tim untuk semua kebutuhan pindah & kirim
          </h2>
          <p className="mt-3 text-neutral-600">
            Dari pindahan rumah tangga sampai pengiriman lintas pulau, semua
            dikerjakan tim terlatih dengan tarif jelas di awal.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                <service.icon className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="mt-4 font-bold text-neutral-900">
                {service.title}
              </h3>
              <p className="mt-1 text-sm text-neutral-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
