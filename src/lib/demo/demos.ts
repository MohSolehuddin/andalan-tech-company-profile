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
  {
    slug: "laundry",
    name: "Kilat Bersih Laundry",
    niche: "Laundry & Kebersihan",
    tagline: "Antar-jemput cucian + order via WhatsApp",
    description:
      "Website laundry kiloan & satuan dengan daftar layanan, harga transparan per kg/pcs, alur antar-jemput, dan order langsung via WhatsApp.",
    emoji: "🧺",
    accentBg: "from-sky-500 to-blue-600",
    accentText: "text-sky-600",
    ring: "hover:border-sky-400",
    highlights: ["Antar-jemput gratis", "Harga per kg/pcs", "Order WhatsApp"],
  },
  {
    slug: "salon",
    name: "Glow & Glam Salon",
    niche: "Salon & Kecantikan",
    tagline: "Perawatan rambut & kecantikan + booking WhatsApp",
    description:
      "Website salon kecantikan modern dengan menu treatment lengkap, daftar harga transparan, ulasan pelanggan, dan booking janji temu via WhatsApp.",
    emoji: "💇‍♀️",
    accentBg: "from-rose-500 to-pink-600",
    accentText: "text-rose-600",
    ring: "hover:border-rose-400",
    highlights: ["Potong & treatment", "Daftar harga transparan", "Booking WhatsApp"],
  },
  {
    slug: "travel",
    name: "Jelajah Andalan Travel",
    niche: "Travel & Wisata",
    tagline: "Paket wisata + booking via WhatsApp",
    description:
      "Website agen travel dengan katalog paket wisata, contoh itinerary harian, keunggulan layanan, testimoni wisatawan, dan booking langsung via WhatsApp.",
    emoji: "🏝️",
    accentBg: "from-cyan-500 to-blue-700",
    accentText: "text-cyan-600",
    ring: "hover:border-cyan-400",
    highlights: ["Paket wisata lengkap", "Itinerary & guide", "Booking WhatsApp"],
  },
  {
    slug: "kafe",
    name: "Kopi Titik Temu",
    niche: "Kafe & Coffee Shop",
    tagline: "Menu kopi signature + reservasi via WhatsApp",
    description:
      "Website coffee shop modern dengan menu kopi pilihan, pastry panggang segar, info ruang coworking, jadwal live music, dan reservasi meja via WhatsApp.",
    emoji: "☕",
    accentBg: "from-amber-600 to-stone-800",
    accentText: "text-amber-700",
    ring: "hover:border-amber-500",
    highlights: ["Menu kopi & pastry", "Coworking & live music", "Reservasi WhatsApp"],
  },
  {
    slug: "dashboard",
    name: "NusaAdmin",
    niche: "Dashboard & Admin Panel",
    tagline: "Demo aplikasi admin + data bisnis realtime",
    description:
      "Aplikasi admin modern dengan sidebar navigasi, kartu KPI, grafik pendapatan, tabel pesanan, dan panel aktivitas dalam satu dasbor terpadu.",
    emoji: "📊",
    accentBg: "from-indigo-600 to-slate-800",
    accentText: "text-indigo-600",
    ring: "hover:border-indigo-400",
    highlights: ["Dasbor KPI & grafik", "Tabel pesanan & status", "Panel aktivitas tim"],
  },
  {
    slug: "fitness",
    name: "PrimaFit Studio",
    niche: "Gym & Fitness Center",
    tagline: "Membership gym + booking trial via WhatsApp",
    description:
      "Website gym & pusat kebugaran modern dengan program latihan, kelas studio, paket keanggotaan, profil pelatih, dan pendaftaran trial via WhatsApp.",
    emoji: "🏋️",
    accentBg: "from-orange-500 to-red-600",
    accentText: "text-orange-600",
    ring: "hover:border-orange-400",
    highlights: ["Program & kelas studio", "Paket member transparan", "Trial via WhatsApp"],
  },
  {
    slug: "fotografi",
    name: "Lumen Studio",
    niche: "Fotografi & Studio Foto",
    tagline: "Studio foto & dokumentasi momen + booking via WhatsApp",
    description:
      "Website studio fotografi dengan daftar layanan (wedding, prewedding, produk, event, wisuda), galeri karya, paket harga transparan, dan booking sesi via WhatsApp.",
    emoji: "📷",
    accentBg: "from-zinc-700 to-neutral-900",
    accentText: "text-zinc-700",
    ring: "hover:border-zinc-500",
    highlights: ["Layanan foto lengkap", "Galeri & paket harga", "Booking WhatsApp"],
  },
  {
    slug: "katering",
    name: "Berkah Rasa Catering",
    niche: "Katering & Kuliner Acara",
    tagline: "Paket katering harian, nasi box & prasmanan + order WhatsApp",
    description:
      "Website katering profesional dengan katalog paket harian, nasi box acara, prasmanan pesta, snack box, dan pemesanan instan via WhatsApp.",
    emoji: "🍱",
    accentBg: "from-amber-600 to-yellow-600",
    accentText: "text-amber-600",
    ring: "hover:border-amber-400",
    highlights: ["Katering harian & acara", "Nasi box & snack box", "Order via WhatsApp"],
  },
];
