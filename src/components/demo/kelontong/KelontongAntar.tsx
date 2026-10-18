import { Bike, Clock, Wallet } from "lucide-react";

const layanan = [
  {
    icon: Bike,
    title: "Antar Sekitar Rumah",
    desc: "Gratis ongkir radius 3 km dengan minimal belanja Rp 50.000.",
  },
  {
    icon: Clock,
    title: "Pesan Hari Ini, Sampai Hari Ini",
    desc: "Order sebelum jam 18.00, pesanan diantar hari yang sama.",
  },
  {
    icon: Wallet,
    title: "Bayar Fleksibel",
    desc: "Bisa tunai saat antar, transfer bank, atau QRIS di tempat.",
  },
];

const area = ["Situbondo Kota", "Panji", "Mimbaan", "Patokan", "Bungatan"];

export default function KelontongAntar() {
  return (
    <section id="antar" className="bg-green-950 px-4 py-20 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-lime-300">
            Pesan Antar
          </p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            Belanja tanpa keluar rumah
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {layanan.map((item) => (
            <div key={item.title} className="rounded-2xl bg-white/5 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-lime-400/15">
                <item.icon className="h-6 w-6 text-lime-300" />
              </div>
              <h3 className="mt-4 font-bold">{item.title}</h3>
              <p className="mt-1 text-sm text-lime-50/80">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 p-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-lime-300">
            Area Antar
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {area.map((wilayah) => (
              <span
                key={wilayah}
                className="rounded-full bg-white/10 px-4 py-1.5 text-sm text-lime-50">
                {wilayah}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm text-lime-50/70">
            Di luar area? Kirim alamat lewat WhatsApp, kami cek ongkirnya.
          </p>
        </div>
      </div>
    </section>
  );
}
