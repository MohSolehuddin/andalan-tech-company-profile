import { Quote, ShieldCheck, Headphones, RefreshCcw } from "lucide-react";

const perks = [
  { icon: ShieldCheck, title: "100% Original", desc: "Produk asli, kualitas terjamin." },
  { icon: RefreshCcw, title: "Tukar 7 Hari", desc: "Ukuran tidak pas? Tukar gratis." },
  { icon: Headphones, title: "CS Responsif", desc: "Dibalas cepat lewat WhatsApp." },
];

const testimonials = [
  {
    name: "Rina — Surabaya",
    text: "Barangnya cepat sampai dan rapi. Beli lewat WhatsApp gampang banget!",
  },
  {
    name: "Dimas — Malang",
    text: "Kualitas di atas harga. Sudah repeat order 3 kali.",
  },
  {
    name: "Sari — Banyuwangi",
    text: "CS-nya ramah, membantu pilih ukuran. Recommended!",
  },
];

export default function TokoTrust() {
  return (
    <section className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-6 md:grid-cols-3">
          {perks.map((perk) => (
            <div
              key={perk.title}
              className="rounded-2xl border border-neutral-200 p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100">
                <perk.icon className="h-6 w-6 text-indigo-700" />
              </div>
              <h3 className="mt-4 font-bold text-neutral-900">{perk.title}</h3>
              <p className="mt-1 text-sm text-neutral-600">{perk.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              className="rounded-2xl bg-neutral-50 p-6">
              <Quote className="h-6 w-6 text-indigo-500" />
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
