export interface UseCase {
  title: string;
  desc: string;
  recom: string;
}

export const USE_CASES: UseCase[] = [
  {
    title: "Konser Musik & Festival",
    desc: "Telephoto zoom 5x jernih tanpa noise untuk menangkap aksi panggung idol dari tribun atas.",
    recom: "16 Pro Max / 15 Pro Max",
  },
  {
    title: "Traveling & Liburan",
    desc: "Kamera ultra-wide dan Cinematic Mode 4K tanpa repot menenteng bodi kamera DSLR berat.",
    recom: "16 Pro / 15 Pro",
  },
  {
    title: "Wisuda & Acara Keluarga",
    desc: "Skin tone alami studio portrait Apple untuk momen sekali seumur hidup bersama orang tersayang.",
    recom: "15 Pro / 14 Pro",
  },
  {
    title: "Content Creator & Bisnis",
    desc: "Kompresi iOS mulus untuk upload TikTok & Instagram Story serta live streaming penjualan produk.",
    recom: "15 Reguler / 14 Pro / 13",
  },
];

export const STEPS = [
  {
    step: "01",
    title: "Pilih Unit & Tanggal",
    desc: "Tentukan seri iPhone, lama durasi sewa harian/weekend, dan aksesoris penunjang seperti gimbal atau mic.",
  },
  {
    step: "02",
    title: "Verifikasi Kilat 10 Menit",
    desc: "Kirim foto e-KTP asli dan akun media sosial aktif tanpa jaminan fisik bagi profil terverifikasi.",
  },
  {
    step: "03",
    title: "Terima Unit Siap Pakai",
    desc: "Ambil langsung di offline store atau kirim via kurir instan ke lokasi venue konser, hotel, atau rumah.",
  },
];

export const PACK_ITEMS = [
  {
    title: "Original Fast Charger 20W/30W & Braided Cable",
    desc: "Pengisian daya kilat, dari 0% ke 50% hanya dalam 30 menit.",
  },
  {
    title: "MagSafe Clear Case & Tempered Glass Terpasang",
    desc: "Proteksi penuh terhadap baret layar dan benturan ringan pemakaian wajar.",
  },
  {
    title: "Jaminan Factory Reset & Bebas iCloud 100%",
    desc: "Login Apple ID pribadi dengan tenang, reset pabrik bersama saat pengembalian.",
  },
];

export const REVIEWS = [
  {
    name: "Nadia Safitri",
    loc: "Jakarta Selatan • Konser GBK",
    comment:
      "Sewa 16 Pro Max buat konser GBK bener-bener penyelamat! Duduk di tribun atas tapi hasil zoom 5x jernih banget tanpa noise saat idol di catwalk. Baterai awet seharian plus gratis powerbank.",
  },
  {
    name: "Dimas Pratama",
    loc: "Surabaya • Liburan Bali 7 Hari",
    comment:
      "Proses sewa kilat, verifikasi cuma KTP dan profil IG aktif. Unit mulus 99% seperti baru buka dus, baterai 98%. Bawa traveling seminggu di Bali puas bikin konten reels 4K 60fps.",
  },
  {
    name: "Rizky Maulana",
    loc: "Bandung • Wisuda Kampus",
    comment:
      "Beli baru kemahalan cuma untuk dokumentasi wisuda sehari. Sewa di iRent dapat iPhone 15 Pro, foto portrait studio sangat tajam. Saat pengembalian langsung di-reset pabrik bersama admin.",
  },
];

export const FAQS = [
  {
    q: "Apa saja syarat untuk menyewa iPhone di iRent Studio?",
    a: "Syarat sangat praktis: Lampirkan foto e-KTP asli (wajib) dan 1 dokumen pendukung opsional (SIM / Paspor / KTM / ID Card Kantor) serta tautan akun media sosial aktif. Tanpa penahanan dokumen asli.",
  },
  {
    q: "Bagaimana dengan keamanan data pribadi dan akun iCloud saya?",
    a: "Unit diserahkan dalam kondisi 'Hello Screen' (Factory Reset). Bebas login Apple ID pribadi. Saat pengembalian, unit wajib logout dan langsung di-reset pabrik bersama admin.",
  },
  {
    q: "Apakah ada kewajiban deposit uang jaminan?",
    a: "Untuk penyewa dengan profil terverifikasi, sewa berlaku TANPA DEPOSIT. Bagi first-timer yang profilnya belum lengkap, deposit minimal disesuaikan dan dikembalikan penuh saat unit kembali.",
  },
  {
    q: "Bagaimana jika terjadi baret halus saat disewa?",
    a: "Semua unit dilindungi tempered glass dan casing tebal. Dengan proteksi asuransi ringan (+Rp 15k/hari), goresan mikro pemakaian normal ditanggung 100% tanpa denda.",
  },
  {
    q: "Apakah unit bisa diantar langsung ke hotel atau venue konser?",
    a: "Tentu bisa. Kami menyediakan opsi pengantaran kurir instan (GoSend / GrabExpress) langsung ke hotel, stasiun, bandara, atau venue konser se-Jabodetabek dan Surabaya.",
  },
];
