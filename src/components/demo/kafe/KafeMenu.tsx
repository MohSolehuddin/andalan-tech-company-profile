import { Coffee, Cookie, Sparkles } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

interface MenuItem {
  name: string;
  category: "Kopi Signature" | "Artisan Pastry" | "Non-Coffee";
  desc: string;
  price: string;
  badge?: string;
}

const menuList: MenuItem[] = [
  {
    name: "Es Kopi Susu Senja",
    category: "Kopi Signature",
    desc: "Espresso house blend, gula aren organik, susu creamy lembut.",
    price: "Rp 22.000",
    badge: "Terlaris",
  },
  {
    name: "Pandan Aren Latte",
    category: "Kopi Signature",
    desc: "Infusi aroma daun pandan alami berpadu dengan espresso wangi.",
    price: "Rp 25.000",
    badge: "Favorit",
  },
  {
    name: "Salted Caramel Cold Brew",
    category: "Kopi Signature",
    desc: "Seduhan dingin 16 jam dengan sirup karamel gurih dan krim laut.",
    price: "Rp 28.000",
  },
  {
    name: "V60 Single Origin Ijen",
    category: "Kopi Signature",
    desc: "Manual brew biji kopi Arabika Ijen dengan notes fruity dan floral.",
    price: "Rp 26.000",
    badge: "Spesial",
  },
  {
    name: "Butter Croissant Klasik",
    category: "Artisan Pastry",
    desc: "Pastry renyah berlapis dengan mentega Prancis harum semerbak.",
    price: "Rp 24.000",
    badge: "Panggang Tiap Pagi",
  },
  {
    name: "Pain au Chocolat",
    category: "Artisan Pastry",
    desc: "Adonan croissant renyah dengan isian cokelat Belgia lumer.",
    price: "Rp 27.000",
  },
  {
    name: "Cinnamon Roll Almond",
    category: "Artisan Pastry",
    desc: "Roti gulung kayu manis lembut dilapisi glaze vanila dan almond iris.",
    price: "Rp 23.000",
  },
  {
    name: "Matcha Oat Cream",
    category: "Non-Coffee",
    desc: "Matcha murni Uji Jepang dipadukan dengan oat milk nabati gurih.",
    price: "Rp 26.000",
  },
  {
    name: "Truffle Cheese Fries",
    category: "Artisan Pastry",
    desc: "Kentang goreng renyah bumbu minyak truffle dan taburan parmesan.",
    price: "Rp 25.000",
  },
];

export default function KafeMenu() {
  return (
    <section id="menu" className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-widest text-amber-700">
            <Coffee className="h-4 w-4" />
            Menu Pilihan
          </span>
          <h2 className="mt-2 text-3xl font-bold text-stone-900 md:text-4xl">
            Racikan Biji Pilihan & Pastry Segar
          </h2>
          <p className="mt-3 text-stone-600">
            Diseduh oleh barista terampil menggunakan biji kopi lokal terkurasi
            dan bahan premium tanpa pemanis buatan.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menuList.map((item) => (
            <div
              key={item.name}
              className="flex flex-col rounded-2xl border border-stone-200 bg-stone-50/50 p-6 shadow-xs transition-all hover:border-amber-300 hover:bg-white hover:shadow-md">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="text-xs font-medium text-stone-500">
                    {item.category}
                  </span>
                  <h3 className="mt-0.5 text-lg font-bold text-stone-900">
                    {item.name}
                  </h3>
                </div>
                {item.badge && (
                  <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-800">
                    {item.badge}
                  </span>
                )}
              </div>

              <p className="mt-3 flex-1 text-sm text-stone-600">{item.desc}</p>

              <div className="mt-6 flex items-center justify-between border-t border-stone-200/60 pt-4">
                <span className="text-lg font-bold text-amber-800">
                  {item.price}
                </span>
                <a
                  href={waLink(
                    `Halo Kopi Titik Temu, saya mau pesan menu "${item.name}" (${item.price}).`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-stone-900 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-stone-900">
                  Pesan via WA
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl bg-amber-50 p-6 sm:flex-row sm:p-8">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-200/80 text-amber-900">
              <Cookie className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-stone-900">
                Punya Preferensi Susu atau Alergi?
              </h4>
              <p className="text-sm text-stone-600">
                Tersedia opsi Oat Milk, Almond Milk, dan kadar gula (less
                sugar/no sugar).
              </p>
            </div>
          </div>
          <a
            href={waLink(
              "Halo Kopi Titik Temu, saya ingin tanya opsi menu kustom (plant-based milk / less sweet)."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-amber-300 bg-white px-5 py-2.5 text-sm font-semibold text-amber-900 transition-colors hover:bg-amber-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-600">
            <Sparkles className="h-4 w-4 text-amber-700" />
            Request Kustom
          </a>
        </div>
      </div>
    </section>
  );
}
