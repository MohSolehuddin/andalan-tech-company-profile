import { Clock, MapPin, MessageCircle, Phone, ShieldCheck, Truck } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

interface Branch {
  name: string;
  address: string;
  hours: string;
  phone: string;
  badge?: string;
}

const branches: Branch[] = [
  {
    name: "Cabang Utama - Pemuda",
    address: "Jl. Pemuda No. 45, Situbondo, Jawa Timur",
    hours: "Setiap Hari: 06.30 – 22.00 WIB",
    phone: "+62 877-4596-8545",
    badge: "Pusat & Gudang",
  },
  {
    name: "Cabang 2 - Hasanuddin",
    address: "Jl. Hasanuddin No. 18, Situbondo, Jawa Timur",
    hours: "Setiap Hari: 07.00 – 21.30 WIB",
    phone: "+62 877-4596-8545",
    badge: "Layanan Cepat",
  },
  {
    name: "Cabang 3 - Melati Timur",
    address: "Jl. Melati Timur No. 88, Situbondo, Jawa Timur",
    hours: "Setiap Hari: 07.00 – 21.00 WIB",
    phone: "+62 877-4596-8545",
  },
];

const deliveryFeatures = [
  {
    icon: Truck,
    title: "Gratis Ongkir Radius 3 Km",
    desc: "Minimal belanja Rp 50.000 langsung diantar sampai pintu rumah Anda.",
  },
  {
    icon: ShieldCheck,
    title: "Bayar di Tempat (COD) / QRIS",
    desc: "Cek barang terlebih dahulu baru bayar secara tunai atau scan QRIS kurir.",
  },
  {
    icon: Clock,
    title: "Pengantaran Cepat 30 Menit",
    desc: "Pesanan dipacking higienis dan diantarkan oleh kurir internal toko.",
  },
];

export default function MinimarketBranches() {
  return (
    <section id="cabang" className="bg-red-950 px-4 py-20 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-red-400">
            Jaringan Minimarket
          </p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            Lokasi Cabang &amp; Jam Operasional
          </h2>
          <p className="mt-3 text-red-100/90">
            Kunjungi toko fisik kami atau manfaatkan layanan pesan antar cepat dari cabang terdekat.
          </p>
        </div>

        {/* Branches Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {branches.map((branch) => (
            <div
              key={branch.name}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xs">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg text-white">{branch.name}</h3>
                  {branch.badge && (
                    <span className="rounded-full bg-red-500/20 px-2.5 py-0.5 text-xs font-medium text-red-300">
                      {branch.badge}
                    </span>
                  )}
                </div>

                <div className="mt-5 space-y-3 text-sm text-red-100/90">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                    <span>{branch.address}</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                    <span>{branch.hours}</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                    <span>{branch.phone}</span>
                  </div>
                </div>
              </div>

              <a
                href={waLink(`Halo Minimart Sejahtera, saya ingin pesan antar dari ${branch.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-red-500">
                <MessageCircle className="h-4 w-4" />
                Pesan dari Cabang Ini
              </a>
            </div>
          ))}
        </div>

        {/* Delivery Features */}
        <div className="mt-12 grid gap-6 rounded-2xl border border-white/10 bg-red-900/40 p-8 sm:grid-cols-3">
          {deliveryFeatures.map((feat) => (
            <div key={feat.title} className="text-center sm:text-left">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/20 text-red-300 sm:mx-0">
                <feat.icon className="h-5 w-5" />
              </div>
              <h4 className="mt-3 font-semibold text-white">{feat.title}</h4>
              <p className="mt-1 text-xs text-red-200/80">{feat.desc}</p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-red-200/70">
          © {new Date().getFullYear()} Minimart Sejahtera — Demo website minimarket oleh Andalan Tech.
        </div>
      </div>
    </section>
  );
}
