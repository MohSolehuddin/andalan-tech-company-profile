export interface MenuItem {
  id: string;
  category: "spesial" | "klasik" | "gorengan" | "minuman";
  title: string;
  desc: string;
  priceFormatted: string;
  img?: { src: string; alt: string };
  emoji?: string;
  tag?: string;
}

export const MENU_CATEGORIES = [
  { id: "all", label: "Semua Menu" },
  { id: "spesial", label: "Spesial & Iga" },
  { id: "klasik", label: "Bakso Kuah" },
  { id: "gorengan", label: "Topping & Gorengan" },
  { id: "minuman", label: "Minuman Segar" },
] as const;

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "m1",
    category: "spesial",
    title: "Bakso Iga Sumsum Monster",
    desc: "Iga sapi empuk + sumsum tulang sapi gurih berpadu dengan 4 butir bakso halus dan kuah sumsum pekat.",
    priceFormatted: "Rp 48.000",
    tag: "Paling Diminati",
    img: {
      src: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=60",
      alt: "Bakso Iga Sapi Sumsum Monster",
    },
  },
  {
    id: "m2",
    category: "spesial",
    title: "Bakso Urat Granat Pedas",
    desc: "Bakso urat jumbo isi cincangan cabai rawit merah pedas membara, lengkap dengan bakso kecil, tahu, dan mie.",
    priceFormatted: "Rp 34.000",
    tag: "Pedas Nagih",
    img: {
      src: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=1200&q=60",
      alt: "Bakso Urat Granat Pedas",
    },
  },
  {
    id: "m3",
    category: "klasik",
    title: "Bakso Campur Komplit Malang",
    desc: "Perpaduan bakso halus, bakso urat, siomay kukus, tahu bakso gurih, dan dua buah pangsit mekar renyah.",
    priceFormatted: "Rp 32.000",
    emoji: "🍲",
  },
  {
    id: "m4",
    category: "klasik",
    title: "Bakso Halus Kuah Sumsum",
    desc: "6 butir bakso halus lembut dari daging sapi paha tanpa urat, disiram kuah bening gurih kaldu sumsum.",
    priceFormatted: "Rp 28.000",
    emoji: "🥣",
  },
  {
    id: "m5",
    category: "gorengan",
    title: "Pangsit Goreng Renyah (Isi 5)",
    desc: "Pangsit goreng isi olahan ayam sapi cincang, digoreng garing renyah sebagai pendamping wajib kuah bakso.",
    priceFormatted: "Rp 15.000",
    emoji: "🥟",
  },
  {
    id: "m6",
    category: "gorengan",
    title: "Tetelan Sapi Gurih (Porsi)",
    desc: "Potongan daging tetelan dan kisi sapi empuk berbumbu rempah yang dimasak bersama kuah kaldu utama.",
    priceFormatted: "Rp 16.000",
    emoji: "🥩",
  },
  {
    id: "m7",
    category: "minuman",
    title: "Es Teler Durian Asli",
    desc: "Alpukat mentega, nangka wangi, kelapa muda serut, susu kental manis, dan topping durian asli manis legit.",
    priceFormatted: "Rp 24.000",
    emoji: "🍧",
  },
  {
    id: "m8",
    category: "minuman",
    title: "Es Jeruk Murni Peras",
    desc: "Perasan jeruk asli segar dipadu gula tebu alami, menetralisir rasa pedas gurih kuah bakso seketika.",
    priceFormatted: "Rp 10.000",
    emoji: "🍊",
  },
];
