export interface DemoItem {
  slug: string;
  name: string;
  niche: string;
  tagline: string;
  description: string;
  emoji: string;
  /** Tailwind gradient stops (used with bg-linear-to-br). */
  accentBg: string;
  accentText: string;
  ring: string;
  highlights: string[];
}

/**
 * Single source of truth for portfolio demos.
 * Consumed by /demo (hub) and the Portfolio section on the home page.
 * v1.0.0
 */
export const demoItems: DemoItem[] = [
  {
    slug: "restoran",
    name: "Rasa Nusantara",
    niche: "Restoran & Kuliner",
    tagline: "Landing page restoran + order WhatsApp",
    description:
      "Website restoran dengan menu digital, galeri, jam buka, dan tombol pesan langsung via WhatsApp.",
    emoji: "🍽️",
    accentBg: "from-amber-500 to-orange-600",
    accentText: "text-amber-600",
    ring: "hover:border-amber-400",
    highlights: ["Menu digital", "Order WhatsApp", "Galeri & lokasi"],
  },
  {
    slug: "klinik",
    name: "Klinik Sehat Bersama",
    niche: "Klinik & Kesehatan",
    tagline: "Profil klinik + buat janji via WhatsApp",
    description:
      "Website klinik dengan daftar layanan, profil dokter, jadwal praktik, dan form buat janji temu.",
    emoji: "🩺",
    accentBg: "from-teal-500 to-cyan-600",
    accentText: "text-teal-600",
    ring: "hover:border-teal-400",
    highlights: ["Layanan & dokter", "Jadwal praktik", "Janji via WhatsApp"],
  },
  {
    slug: "toko",
    name: "TokoKita",
    niche: "Toko Online / UMKM",
    tagline: "Katalog produk + checkout WhatsApp",
    description:
      "Toko online ringan dengan katalog produk, filter kategori, dan pemesanan langsung ke WhatsApp penjual.",
    emoji: "🛍️",
    accentBg: "from-indigo-500 to-violet-600",
    accentText: "text-indigo-600",
    ring: "hover:border-indigo-400",
    highlights: ["Katalog produk", "Filter kategori", "Checkout WhatsApp"],
  },
];
