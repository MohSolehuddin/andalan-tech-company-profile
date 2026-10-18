import { Banknote, Quote, ShieldCheck, Truck } from "lucide-react";

const perks = [
  { icon: ShieldCheck, title: "Material Original", desc: "Produk SNI langsung dari distributor resmi." },
  { icon: Banknote, title: "Harga Grosir", desc: "Potongan harga untuk pembelian jumlah besar." },
  { icon: Truck, title: "Antar Hari Sama", desc: "Armada siap kirim untuk area kota." },
];

const testimonials = [
  {
    name: "Pak Budi — Kontraktor, Situbondo",
    text: "Besi dan semen selalu tersedia, pengiriman tepat waktu. Proyek tidak pernah tertunda.",
  },
  {
    name: "Bu Sari — Renovasi Rumah",
    text: "Pesan keramik tinggal chat WhatsApp, paginya sudah sampai rumah. Praktis!",
  },
  {
    name: "Mas Andi — Tukang Bangunan",
    text: "Harganya bersaing dan nat keramiknya lengkap. Langganan tiap proyek.",
  },
];

export default function BangunanTrust() {
  return (
    <section className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-6 md:grid-cols-3">
          {perks.map((perk) => (
            <div
              key={perk.title}
              className="rounded-2xl border border-neutral-200 p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100">
                <perk.icon className="h-6 w-6 text-amber-700" />
              </div>
              <h3 className="mt-4 font-bold text-neutral-900">{perk.title}</h3>
              <p className="mt-1 text-sm text-neutral-600">{perk.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure key={item.name} className="rounded-2xl bg-stone-50 p-6">
              <Quote className="h-6 w-6 text-amber-600" />
              <blockquote className="mt-3 text-neutral-700">
                {item.text}
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-neutral-900">
                {item.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
