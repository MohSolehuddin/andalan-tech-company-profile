import { Clock, MessageCircle, Scale, TrendingUp } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const rates = [
  {
    type: "Emas Batangan 24K (Antam/UBS)",
    purity: "99.99%",
    sellPrice: "Rp 1.485.000 / gr",
    buybackPrice: "Rp 1.370.000 / gr",
    status: "+Rp 5.000",
  },
  {
    type: "Perhiasan Emas 24K",
    purity: "Kadar 99%",
    sellPrice: "Rp 1.410.000 / gr",
    buybackPrice: "Rp 1.300.000 / gr",
    status: "Tetap",
  },
  {
    type: "Perhiasan Emas 17K / 750 (Standar Internasional)",
    purity: "Kadar 75%",
    sellPrice: "Rp 1.095.000 / gr",
    buybackPrice: "Rp 985.000 / gr",
    status: "+Rp 3.000",
  },
  {
    type: "Perhiasan Emas Muda 8K / 375",
    purity: "Kadar 37.5%",
    sellPrice: "Rp 585.000 / gr",
    buybackPrice: "Rp 490.000 / gr",
    status: "Tetap",
  },
];

export default function TokoEmasRates() {
  return (
    <section id="harga-emas" className="bg-neutral-50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-700">
              <TrendingUp className="h-4 w-4" />
              Pembaruan Harian
            </span>
            <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
              Harga Emas Hari Ini
            </h2>
            <p className="mt-2 text-sm text-neutral-600">
              Daftar harga jual dan buyback transparan, diperbarui tiap hari kerja
              pk 09.00 WIB.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-neutral-600">
            <Clock className="h-4 w-4 text-amber-600" />
            <span>Update: Hari ini, 09.00 WIB (Mengikuti acuan pasar)</span>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-neutral-200 bg-neutral-100/70 text-xs font-semibold uppercase tracking-wider text-neutral-600">
                <tr>
                  <th className="px-6 py-4">Kategori & Kadar</th>
                  <th className="px-6 py-4">Kadar Kemurnian</th>
                  <th className="px-6 py-4">Harga Jual Estimasi</th>
                  <th className="px-6 py-4">Harga Buyback Toko</th>
                  <th className="px-6 py-4 text-right">Tren</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {rates.map((item) => (
                  <tr key={item.type} className="hover:bg-neutral-50/80">
                    <td className="px-6 py-4 font-semibold text-neutral-900">
                      {item.type}
                    </td>
                    <td className="px-6 py-4 text-neutral-600">{item.purity}</td>
                    <td className="px-6 py-4 font-bold text-amber-700">
                      {item.sellPrice}
                    </td>
                    <td className="px-6 py-4 font-medium text-neutral-700">
                      {item.buybackPrice}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="inline-flex rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-800">
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 border-t border-neutral-200 bg-amber-50/50 px-6 py-4 sm:flex-row">
            <div className="flex items-center gap-2 text-xs text-amber-900">
              <Scale className="h-4 w-4 shrink-0 text-amber-600" />
              <span>
                Semua transaksi ditimbang presisi di depan pembeli dengan timbangan
                digital bersertifikat tera.
              </span>
            </div>
            <a
              href={waLink(
                "Halo Emas Mulia Perhiasan, saya mau tanya harga emas dan buyback hari ini."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-amber-700 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-amber-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-700">
              <MessageCircle className="h-3.5 w-3.5" />
              Tanya Harga via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
