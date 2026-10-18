import { Flame, MessageCircle, Tag } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

interface PromoProduct {
  name: string;
  desc: string;
  originalPrice: string;
  promoPrice: string;
  badge: string;
  emoji: string;
}

const weeklyPromos: PromoProduct[] = [
  {
    name: "Minyak Goreng Pouch 2L",
    desc: "Minyak goreng kelapa sawit jernih kualitas pilihan.",
    originalPrice: "Rp 38.500",
    promoPrice: "Rp 31.900",
    badge: "Diskon 17%",
    emoji: "🍳",
  },
  {
    name: "Beras Premium Pulen 5kg",
    desc: "Beras putih bersih, pulen alami tanpa pemutih.",
    originalPrice: "Rp 74.000",
    promoPrice: "Rp 66.500",
    badge: "Harga Spesial",
    emoji: "🍚",
  },
  {
    name: "Susu UHT Full Cream 1L",
    desc: "Susu sapi segar kaya kalsium dan vitamin.",
    originalPrice: "Rp 21.000",
    promoPrice: "Rp 16.900",
    badge: "Hemat 20%",
    emoji: "🥛",
  },
  {
    name: "Deterjen Cair Konsentrat 800ml",
    desc: "Bersih higienis & harum semerbak seharian.",
    originalPrice: "Rp 23.500",
    promoPrice: "Rp 17.500",
    badge: "Beli 2 Lebih Murah",
    emoji: "🧺",
  },
];

export default function MinimarketPromo() {
  return (
    <section id="promo" className="bg-red-50/50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-red-600">
            <Flame className="h-4 w-4" />
            Promo Mingguan JSM
          </span>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Harga Heboh Akhir Pekan
          </h2>
          <p className="mt-3 text-neutral-600">
            Belanja stok dapur makin hemat dengan potongan harga spesial tiap Jumat,
            Sabtu, dan Minggu.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {weeklyPromos.map((promo) => (
            <div
              key={promo.name}
              className="flex flex-col justify-between rounded-2xl border border-red-100 bg-white p-5 shadow-xs transition-shadow hover:shadow-md">
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100/60 text-2xl">
                    {promo.emoji}
                  </span>
                  <span className="rounded-full bg-red-600 px-2.5 py-1 text-xs font-semibold text-white">
                    {promo.badge}
                  </span>
                </div>

                <h3 className="mt-4 font-bold text-neutral-900">{promo.name}</h3>
                <p className="mt-1 text-xs text-neutral-500">{promo.desc}</p>
              </div>

              <div className="mt-6 border-t border-neutral-100 pt-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-extrabold text-red-600">
                    {promo.promoPrice}
                  </span>
                  <span className="text-xs text-neutral-400 line-through">
                    {promo.originalPrice}
                  </span>
                </div>
                <a
                  href={waLink(
                    `Halo Minimart Sejahtera, saya mau ambil promo ${promo.name} seharga ${promo.promoPrice}.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-red-600 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-red-500">
                  <Tag className="h-3.5 w-3.5" />
                  Klaim via WA
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl bg-linear-to-r from-red-600 to-rose-600 px-6 py-6 text-white sm:flex-row sm:px-8">
          <div>
            <p className="text-lg font-bold">Ingin katalog promo lengkap minggu ini?</p>
            <p className="text-sm text-red-100">
              Kirim pesan ke kasir WhatsApp kami untuk dapatkan katalog promo PDF atau foto brosur.
            </p>
          </div>
          <a
            href={waLink("Halo Minimart Sejahtera, minta brosur promo mingguan terbaru dong.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-bold text-red-600 transition-colors hover:bg-red-50">
            <MessageCircle className="h-4 w-4" />
            Minta Brosur WA
          </a>
        </div>
      </div>
    </section>
  );
}
