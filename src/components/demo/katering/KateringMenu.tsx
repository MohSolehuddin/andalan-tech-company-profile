interface MenuItem {
  title: string;
  category: string;
  description: string;
  badge: string;
  colorClass: string;
  icon: string;
}

const menuItems: MenuItem[] = [
  {
    title: "Ayam Bakar Madu Spesial",
    category: "Lauk Favorit",
    description:
      "Ayam ungkep bumbu rempah bakar madu manis gurih, sambal terasi matang, lalapan segar, tahu & tempe goreng.",
    badge: "Best Seller",
    colorClass: "from-amber-500/20 to-orange-500/20 border-amber-300",
    icon: "🍗",
  },
  {
    title: "Rendang Daging Sapi Minang",
    category: "Prasmanan & Box",
    description:
      "Daging sapi pilihan dimasak perlahan hingga bumbu meresap hitam pekat khas Bukittinggi, tekstur empuk berserat.",
    badge: "Khas Minang",
    colorClass: "from-red-500/20 to-amber-500/20 border-red-300",
    icon: "🥩",
  },
  {
    title: "Nasi Liwet Gurih Komplit",
    category: "Nasi Box Tradisional",
    description:
      "Nasi liwet santan wangi daun salam serai, suwiran ayam opor gurih, sambal goreng labu siam, dan telur pindang.",
    badge: "Tradisional",
    colorClass: "from-yellow-500/20 to-amber-500/20 border-yellow-300",
    icon: "🍚",
  },
  {
    title: "Kakap Saus Asam Manis",
    category: "Menu Prasmanan",
    description:
      "Fillet kakap renyah berpadu saus asam manis nanas segar, paprika hijau, dan bawang bombay harum.",
    badge: "Segar & Renyah",
    colorClass: "from-orange-500/20 to-yellow-500/20 border-orange-300",
    icon: "🐟",
  },
  {
    title: "Tumpeng Mini Nusantara",
    category: "Syukuran & Acara",
    description:
      "Nasi kuning gurih kunyit alami, ayam goreng lengkuas, perkedel kentang, orek tempe manis, dan sambal balado.",
    badge: "Pesta & Syukuran",
    colorClass: "from-amber-500/20 to-yellow-600/20 border-amber-400",
    icon: "🍱",
  },
  {
    title: "Snack Box Aneka Jajanan Pasar",
    category: "Kudapan Rapat",
    description:
      "Kombinasi risoles smoked beef mayo, lemper ayam bakar, sus buah vla vanila, disajikan dalam box higienis.",
    badge: "Kudapan",
    colorClass: "from-stone-500/20 to-amber-500/20 border-stone-300",
    icon: "🥐",
  },
];

export default function KateringMenu() {
  return (
    <section id="menu" className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
            Contoh Menu Andalan
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Cita Rasa Gurih & Bahan Berkualitas
          </h2>
          <p className="mt-3 text-neutral-600">
            Berikut beberapa racikan menu favorit pelanggan kami. Anda juga
            bebas mengombinasikan lauk sesuai preferensi dan anggaran acara.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item) => (
            <div
              key={item.title}
              className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-neutral-50/50 p-6 transition-all hover:border-amber-400 hover:shadow-sm">
              <div>
                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl border bg-linear-to-br text-2xl ${item.colorClass}`}>
                    {item.icon}
                  </div>
                  <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-800">
                    {item.badge}
                  </span>
                </div>
                <span className="mt-4 block text-xs font-medium text-neutral-500">
                  {item.category}
                </span>
                <h3 className="mt-1 text-lg font-bold text-neutral-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 border-t border-neutral-200/60 pt-3 text-xs text-amber-700 font-medium">
                Porsi pas & disajikan higienis
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
