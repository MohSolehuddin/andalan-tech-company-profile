import { Check, PartyPopper, UtensilsCrossed, Users } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

interface Service {
  id: string;
  name: string;
  desc: string;
  price: string;
  unit: string;
  minOrder: string;
  icon: typeof PartyPopper;
  popular?: boolean;
  features: string[];
  waMessage: string;
}

const services: Service[] = [
  {
    id: "sewa-truck",
    name: "Sewa Food Truck",
    desc: "Truk kami hadir langsung di lokasi acara dengan dapur berjalan.",
    price: "Rp 2.500.000",
    unit: "/ 4 jam",
    minOrder: "Hingga 100 porsi",
    icon: PartyPopper,
    features: [
      "Food truck + 2 kru profesional",
      "Pilihan 4 menu andalan",
      "Peralatan saji & kemasan higienis",
      "Listrik dan air mandiri",
    ],
    waMessage:
      "Halo Roda Rasa, saya mau sewa Food Truck untuk acara pada tanggal [Tanggal].",
  },
  {
    id: "live-cooking",
    name: "Booth Live Cooking",
    desc: "Booth interaktif untuk gathering, bazar, dan launching produk.",
    price: "Rp 4.500.000",
    unit: "/ 6 jam",
    minOrder: "Hingga 200 porsi",
    icon: Users,
    popular: true,
    features: [
      "Food truck + booth dekorasi",
      "Chef live cooking di depan tamu",
      "Pilihan 6 menu + 2 minuman",
      "Crew 4 orang & server tamu",
    ],
    waMessage:
      "Halo Roda Rasa, saya mau pesan Booth Live Cooking untuk acara pada tanggal [Tanggal].",
  },
  {
    id: "katering",
    name: "Katering & Nasi Box",
    desc: "Jasa boga untuk rapat, syukuran, dan acara kantor skala menengah.",
    price: "Rp 35.000",
    unit: "/ porsi",
    minOrder: "Min. order 50 porsi",
    icon: UtensilsCrossed,
    features: [
      "Nasi + 2 lauk + sayur + sambal",
      "Menu bisa disesuaikan anggaran",
      "Antar tepat waktu dengan insulator",
      "Tersedia paket snack box rapat",
    ],
    waMessage:
      "Halo Roda Rasa, saya mau pesan katering untuk [Jumlah] porsi pada tanggal [Tanggal].",
  },
];

export default function FoodTruckEvents() {
  return (
    <section id="acara" className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-yellow-700">
            Sewa & Katering
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Food truck kami, acara Anda
          </h2>
          <p className="mt-3 text-neutral-600">
            Dari ulang tahun hingga gathering kantor, kami bawa pengalaman makan
            yang seru langsung ke lokasi. Tim kami mengurus setup sampai bersih
            kembali.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className={`relative flex flex-col rounded-2xl border bg-white p-6 shadow-sm transition-all hover:shadow-md ${
                service.popular
                  ? "border-yellow-500 ring-2 ring-yellow-500"
                  : "border-neutral-200"
              }`}>
              {service.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-yellow-500 px-3 py-1 text-xs font-bold text-neutral-950">
                  Paling Diminati
                </span>
              )}

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100">
                <service.icon className="h-6 w-6 text-yellow-700" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-neutral-900">
                {service.name}
              </h3>
              <p className="mt-2 text-sm text-neutral-600">{service.desc}</p>

              <div className="mt-4">
                <span className="text-2xl font-bold text-neutral-900">
                  {service.price}
                </span>
                <span className="text-sm text-neutral-500">{service.unit}</span>
              </div>
              <p className="mt-1 text-xs font-medium text-red-600">
                {service.minOrder}
              </p>

              <ul className="mt-5 flex-1 space-y-2.5 border-t border-neutral-100 pt-4 text-sm text-neutral-700">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-yellow-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={waLink(service.waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                  service.popular
                    ? "bg-yellow-500 text-neutral-950 hover:bg-yellow-400 focus-visible:ring-yellow-500"
                    : "border border-yellow-300 text-yellow-900 hover:bg-yellow-50 focus-visible:ring-yellow-600"
                }`}>
                Konsultasi via WhatsApp
              </a>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl bg-neutral-50 p-6 text-center text-sm text-neutral-600">
          🎉 <strong>Bonus:</strong> pemesanan sewa food truck minimal 2 minggu
          sebelumnya mendapat gratis 20 porsi kentang truk crispy.
        </div>
      </div>
    </section>
  );
}
