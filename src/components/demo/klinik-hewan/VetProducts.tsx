import { CheckCircle2, MessageCircle, ShoppingBag, Tag } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

interface ProductItem {
  name: string;
  category: string;
  price: string;
  desc: string;
  tag?: string;
}

const products: ProductItem[] = [
  {
    name: "Royal Care Cat Food 1.5 kg",
    category: "Pakan Kucing",
    price: "Rp 125.000",
    desc: "Formula kaya Omega-3 dan taurin untuk bulu lebat, kilau sehat, dan pencernaan optimal.",
    tag: "Terlaris",
  },
  {
    name: "Golden Paw Dog Kibble 2 kg",
    category: "Pakan Anjing",
    price: "Rp 180.000",
    desc: "Kibble rasa daging sapi dan salmon asli dengan protein 28% untuk menjaga otot dan energi aktif.",
    tag: "Best Seller",
  },
  {
    name: "NutriPet Multivitamin Drops 60 ml",
    category: "Suplemen & Vitamin",
    price: "Rp 45.000",
    desc: "Tetes suplemen vitamin A, D, E & lysine penambah imunitas dan nafsu makan harian.",
  },
  {
    name: "Herbal Pet Shampoo Medicated 250 ml",
    category: "Perawatan & Mandi",
    price: "Rp 55.000",
    desc: "Sampo berbahan ekstrak tea tree oil pembasmi kutu, tungau, dan jamur kulit anabul.",
    tag: "Rekomendasi Dokter",
  },
  {
    name: "ErgoVent Pet Carrier Bag",
    category: "Aksesoris & Travel",
    price: "Rp 115.000",
    desc: "Tas jinjing anabul dengan jaring sirkulasi 4 sisi, bantalan empuk, dan pengunci aman.",
  },
  {
    name: "CleanPaws Bentonite Cat Litter 10 L",
    category: "Kebersihan & Pasir",
    price: "Rp 60.000",
    desc: "Pasir gumpal cepat aroma apel segar bebas debu 99%, sangat mudah dibersihkan.",
  },
];

export default function VetProducts() {
  return (
    <section id="petshop" className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
            Petshop Terlengkap
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Pakan, Obat & Perlengkapan Anabul
          </h2>
          <p className="mt-3 text-neutral-600">
            Katalog produk pilihan terjamin 100% original. Bisa langsung beli di
            klinik atau pesan antar ke rumah via WhatsApp.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((item) => (
            <div
              key={item.name}
              className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="flex items-start justify-between gap-3">
                <span className="inline-flex items-center gap-1 rounded-md bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-700">
                  <Tag className="h-3 w-3 text-neutral-500" />
                  {item.category}
                </span>
                {item.tag && (
                  <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-800">
                    {item.tag}
                  </span>
                )}
              </div>

              <h3 className="mt-4 text-lg font-bold text-neutral-900">
                {item.name}
              </h3>
              <p className="mt-2 flex-1 text-sm text-neutral-600">{item.desc}</p>

              <div className="mt-5 flex items-center justify-between border-t border-neutral-100 pt-4">
                <span className="text-lg font-bold text-emerald-700">
                  {item.price}
                </span>
                <a
                  href={waLink(
                    `Halo VetCare Petshop, saya ingin order ${item.name} (${item.price}). Apakah stok tersedia?`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-emerald-500">
                  <ShoppingBag className="h-3.5 w-3.5" />
                  Beli via WA
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Info Pengiriman Banner */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl bg-emerald-50 p-6 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="h-6 w-6 text-emerald-600 shrink-0" />
            <div>
              <p className="font-semibold text-neutral-900">
                Layanan Antar Cepat Petshop (Same-Day Delivery)
              </p>
              <p className="text-sm text-neutral-600">
                Pesan pakan & pasir sebelum jam 16.00 WIB untuk pengantaran di hari yang sama.
              </p>
            </div>
          </div>
          <a
            href={waLink(
              "Halo VetCare, saya mau tanya ongkir dan pesan antar kebutuhan hewan ke alamat saya."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-700 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-emerald-800 shrink-0">
            <MessageCircle className="h-3.5 w-3.5" />
            Tanya Pesan Antar
          </a>
        </div>
      </div>
    </section>
  );
}
