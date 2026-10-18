import { CheckCircle2, Info, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const kiloan = [
  { name: "Cuci Kering", price: "Rp 7.000", unit: "per kg", note: "Lipat rapi" },
  {
    name: "Cuci Setrika",
    price: "Rp 10.000",
    unit: "per kg",
    note: "Paling populer",
    popular: true,
  },
  { name: "Express 6 Jam", price: "Rp 15.000", unit: "per kg", note: "Selesai hari ini" },
  { name: "Paket Bulanan 30 kg", price: "Rp 250.000", unit: "per bulan", note: "Hemat 17%" },
];

const satuan = [
  { name: "Sepatu / sandal", price: "Rp 25.000", unit: "per pasang" },
  { name: "Tas / ransel", price: "Rp 30.000", unit: "per pcs" },
  { name: "Bed cover / selimut", price: "Rp 35.000", unit: "per pcs" },
  { name: "Jas / gaun / kebaya", price: "Rp 40.000", unit: "per pcs" },
  { name: "Boneka besar", price: "Rp 30.000", unit: "per pcs" },
  { name: "Karpet kecil (1x2 m)", price: "Rp 45.000", unit: "per lembar" },
];

export default function LaundryPricing() {
  return (
    <section id="harga" className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">
            Daftar Harga
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Harga jelas, tanpa biaya tersembunyi
          </h2>
          <p className="mt-3 text-neutral-600">
            Timbangan digital terbuka dan bisa dicek langsung saat penjemputan.
            Minimal order kiloan 3 kg.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="grid gap-4 sm:grid-cols-2">
            {kiloan.map((item) => (
              <div
                key={item.name}
                className={`rounded-2xl border p-5 ${
                  item.popular
                    ? "border-sky-400 bg-sky-50/60 ring-2 ring-sky-500/15"
                    : "border-neutral-200 bg-white"
                }`}>
                <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                  {item.note}
                </p>
                <h3 className="mt-2 font-bold text-neutral-900">{item.name}</h3>
                <p className="mt-1 text-2xl font-extrabold text-sky-600">
                  {item.price}
                </p>
                <p className="text-xs text-neutral-500">{item.unit}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
            <h3 className="text-lg font-bold text-neutral-900">
              Cuci Satuan
            </h3>
            <ul className="mt-4 divide-y divide-neutral-200">
              {satuan.map((item) => (
                <li
                  key={item.name}
                  className="flex items-center justify-between gap-4 py-3 text-sm">
                  <span className="inline-flex items-center gap-2 text-neutral-700">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-sky-500" />
                    {item.name}
                  </span>
                  <span className="shrink-0 text-right">
                    <span className="font-semibold text-neutral-900">
                      {item.price}
                    </span>
                    <span className="block text-xs text-neutral-500">
                      {item.unit}
                    </span>
                  </span>
                </li>
              ))}
            </ul>

            <a
              href={waLink(
                "Halo Kilat Bersih Laundry, saya mau tanya harga untuk cucian satuan."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-sky-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-sky-500">
              <MessageCircle className="h-5 w-5" />
              Tanya Harga via WhatsApp
            </a>

            <p className="mt-4 inline-flex items-start gap-2 text-xs text-neutral-500">
              <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sky-500" />
              Antar-jemput gratis untuk radius 5 km dari outlet. Luar radius,
              biaya kurir mulai Rp 5.000.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
