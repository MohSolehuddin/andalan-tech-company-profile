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
  {
    slug: "saas",
    name: "KelolaKu",
    niche: "SaaS & Startup",
    tagline: "Landing page SaaS + konversi leads",
    description:
      "Platform SaaS & startup modern dengan visual dashboard, fitur otomasi alur kerja, paket berlangganan, dan demo WhatsApp.",
    emoji: "🚀",
    accentBg: "from-blue-600 to-cyan-500",
    accentText: "text-blue-600",
    ring: "hover:border-blue-400",
    highlights: ["Otomasi alur kerja", "Paket berlangganan", "Demo WhatsApp"],
  },
  {
    slug: "sekolah",
    name: "SMA Cendekia Nusantara",
    niche: "Sekolah & Pendidikan",
    tagline: "Profil sekolah + PPDB via WhatsApp",
    description:
      "Website sekolah dengan program peminatan, fasilitas kampus, alur PPDB, dan konsultasi pendaftaran langsung via WhatsApp.",
    emoji: "🎓",
    accentBg: "from-emerald-500 to-green-600",
    accentText: "text-emerald-600",
    ring: "hover:border-emerald-400",
    highlights: ["Program peminatan", "Fasilitas kampus", "Info PPDB"],
  },
  {
    slug: "properti",
    name: "Griya Andalan Properti",
    niche: "Properti & Real Estate",
    tagline: "Listing properti + konsultasi KPR via WhatsApp",
    description:
      "Website agen properti modern dengan katalog listing rumah, detail spesifikasi, keunggulan agen, dan konsultasi survei via WhatsApp.",
    emoji: "🏡",
    accentBg: "from-teal-600 to-emerald-700",
    accentText: "text-teal-700",
    ring: "hover:border-teal-500",
    highlights: ["Katalog listing", "Detail spesifikasi", "Konsultasi WhatsApp"],
  },
  {
    slug: "jasa",
    name: "Nara Kreatif",
    niche: "Jasa & Personal Brand",
    tagline: "Profil personal brand + konsultasi via WhatsApp",
    description:
      "Website personal brand untuk konsultan & kreator dengan daftar layanan, portofolio karya, testimoni klien, dan CTA konsultasi via WhatsApp.",
    emoji: "🎨",
    accentBg: "from-orange-500 to-rose-500",
    accentText: "text-orange-600",
    ring: "hover:border-orange-400",
    highlights: ["Layanan & paket", "Portofolio karya", "Konsultasi WhatsApp"],
  },
  {
    slug: "bengkel",
    name: "AutoPrima Motor",
    niche: "Bengkel & Otomotif",
    tagline: "Servis kendaraan & booking antrean via WhatsApp",
    description:
      "Website bengkel modern dengan estimasi biaya transparan, paket servis berkala, dan alur booking WhatsApp instan.",
    emoji: "🔧",
    accentBg: "from-red-600 to-amber-600",
    accentText: "text-red-600",
    ring: "hover:border-red-400",
    highlights: ["Estimasi biaya transparan", "Paket servis berkala", "Booking WhatsApp instan"],
  },
];
