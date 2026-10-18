import { waLink } from "@/lib/demo/wa";

interface DrinkItem {
  name: string;
  category: "Boba Series" | "Fresh Juice" | "Smoothie";
  desc: string;
  price: string;
  badge?: string;
}

const menuItems: DrinkItem[] = [
  {
    name: "Brown Sugar Boba Fresh Milk",
    category: "Boba Series",
    desc: "Susu murni segar berpadu boba hangat legit sirup gula aren organic.",
    price: "Rp 24.000",
    badge: "Best Seller",
  },
  {
    name: "Roasted Milk Tea Boba",
    category: "Boba Series",
    desc: "Teh hitam panggang aromatik khas Taiwan dengan boba kenyal lembut.",
    price: "Rp 22.000",
    badge: "Favorit",
  },
  {
    name: "Matcha Latte Cheese Boba",
    category: "Boba Series",
    desc: "Matcha Uji asli Jepang dengan topping cheese cream gurih dan boba.",
    price: "Rp 26.000",
  },
  {
    name: "Cold-Pressed Orange Booster",
    category: "Fresh Juice",
    desc: "Jeruk peras murni kaya vitamin C tanpa tambahan air atau pengawet.",
    price: "Rp 20.000",
    badge: "Fresh Daily",
  },
  {
    name: "Detox Green Apple & Celery",
    category: "Fresh Juice",
    desc: "Apel malang hijau renyah, seledri segar, dan sentuhan madu hutan.",
    price: "Rp 22.000",
  },
  {
    name: "Dragon Fruit Lime Splash",
    category: "Fresh Juice",
    desc: "Jus buah naga merah pekat dipadu perasan jeruk nipis segar.",
    price: "Rp 18.000",
  },
  {
    name: "Mango Sunshine Smoothie",
    category: "Smoothie",
    desc: "Mangga harum manis lumat dingin dipadu yogurt kental lembut.",
    price: "Rp 25.000",
    badge: "Favorit",
  },
  {
    name: "Berry Blast Creamy Smoothie",
    category: "Smoothie",
    desc: "Stroberi segar dan blueberry dengan yogurt rendah kalori yang creamy.",
    price: "Rp 27.000",
  },
  {
    name: "Avocado Choco Velvet",
    category: "Smoothie",
    desc: "Alpukat mentega pilihan berpadu lelehan dark chocolate premium.",
    price: "Rp 26.000",
  },
];

export default function MinumanMenu() {
  return (
    <section id="menu" className="bg-neutral-50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">
            Daftar Menu Pilihan
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Segar Alami, Manisnya Pas di Lidah
          </h2>
          <p className="mt-3 text-neutral-600">
            Pilihan boba kenyal lembut, cold-pressed juice buah segar, dan
            smoothie kental bernutrisi.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 shadow-xs transition-shadow hover:shadow-md">
              <div>
                <div className="flex items-start justify-between gap-3">
                  <span className="text-xs font-semibold tracking-wider uppercase text-teal-600">
                    {item.category}
                  </span>
                  {item.badge && (
                    <span className="rounded-full bg-teal-100 px-2.5 py-0.5 text-xs font-semibold text-teal-800">
                      {item.badge}
                    </span>
                  )}
                </div>
                <h3 className="mt-2 text-lg font-bold text-neutral-900">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm text-neutral-600">{item.desc}</p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-neutral-100 pt-4">
                <span className="text-lg font-bold text-teal-700">
                  {item.price}
                </span>
                <a
                  href={waLink(`Halo Segar Boba & Juice, saya mau pesan ${item.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-teal-500">
                  Pesan
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
