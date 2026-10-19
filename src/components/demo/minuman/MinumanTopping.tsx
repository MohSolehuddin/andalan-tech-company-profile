import { PlusCircle, SlidersHorizontal, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

interface ToppingItem {
  name: string;
  price: string;
  desc: string;
}

const toppings: ToppingItem[] = [
  {
    name: "Brown Sugar Boba",
    price: "+Rp 4.000",
    desc: "Boba kenyal dimasak hangat dengan sirup gula aren kental.",
  },
  {
    name: "Cheese Cream Foam",
    price: "+Rp 5.000",
    desc: "Lapisan krim keju gurih creamy dengan taburan sea salt.",
  },
  {
    name: "Grass Jelly Cincau",
    price: "+Rp 4.000",
    desc: "Cincau hitam herbal dingin menyegarkan tenggorokan.",
  },
  {
    name: "Egg Pudding Lembut",
    price: "+Rp 4.000",
    desc: "Puding telur sutra lumer lembut di setiap sedotan.",
  },
  {
    name: "Nata de Coco",
    price: "+Rp 3.000",
    desc: "Potongan kelapa kenyal renyah kaya serat pangan.",
  },
  {
    name: "Aloe Vera & Chia Seed",
    price: "+Rp 4.000",
    desc: "Lidah buaya alami dipadu chia seed segar untuk nutrisi ekstra.",
  },
];

const sugarLevels = ["0% (No Sugar)", "30% (Less Sweet)", "70% (Normal)", "100% (Sweet)"];
const iceLevels = ["No Ice", "Less Ice", "Normal Ice"];

export default function MinumanTopping() {
  return (
    <section className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">
            Kustomisasi Minuman
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Pilihan Topping &amp; Tingkat Manis
          </h2>
          <p className="mt-3 text-neutral-600">
            Sesuaikan setiap cup minuman dengan topping favorit dan tingkat
            kemanisan sesuai selera Anda.
          </p>
        </div>

        {/* Topping Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {toppings.map((t) => (
            <div
              key={t.name}
              className="flex items-start gap-4 rounded-xl border border-neutral-200 bg-neutral-50/50 p-4 transition-colors hover:border-teal-300 hover:bg-teal-50/30">
              <div className="rounded-lg bg-teal-100 p-2 text-teal-700">
                <PlusCircle className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-neutral-900">{t.name}</h3>
                  <span className="text-xs font-bold text-teal-600">{t.price}</span>
                </div>
                <p className="mt-1 text-xs text-neutral-600">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Sugar & Ice customization guide */}
        <div className="mt-12 rounded-2xl bg-linear-to-r from-teal-950 to-neutral-900 p-8 text-white">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 text-sm font-medium text-teal-200">
                <SlidersHorizontal className="h-4 w-4" />
                Level Manis &amp; Es Bebas Pilih
              </div>
              <h3 className="mt-2 text-xl font-bold md:text-2xl">
                Bikin Minumanmu Sesuai Mood &amp; Selera
              </h3>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                <span className="font-semibold text-teal-200">Gula:</span>
                {sugarLevels.map((s) => (
                  <span
                    key={s}
                    className="rounded-md bg-white/10 px-2.5 py-1 text-neutral-200">
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="font-semibold text-teal-200">Es:</span>
                {iceLevels.map((i) => (
                  <span
                    key={i}
                    className="rounded-md bg-white/10 px-2.5 py-1 text-neutral-200">
                    {i}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={waLink(
                "Halo Segar Boba & Juice, saya mau tanya rekomendasi kombinasi rasa & topping favorit."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-teal-400 px-6 py-3 font-semibold text-neutral-950 transition-colors hover:bg-teal-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-400">
              <MessageCircle className="h-4 w-4" />
              Tanya Kombinasi Favorit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
