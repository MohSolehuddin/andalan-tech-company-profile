# Log Perubahan

## 2026-10-18

### 1. Penambahan Halaman Demo Portfolio (`/demo/*`)
- **Hub Demo (`/demo`) & Shared Frame (`/demo/layout.tsx`)**:
  - Menyediakan direktori etalase katalog contoh website siap pakai di `src/app/demo/page.tsx`.
  - Menerapkan header sticky bar navigasi untuk mempermudah pengunjung kembali ke halaman `/demo` atau website utama Andalan Tech.
  - Memasang konfigurasi metadata robots `{ index: false, follow: false }` pada layout demo agar template prototipe tidak diindeks mesin pencari secara langsung.
- **Implementasi 10 Halaman Demo Niche Bisnis (`src/app/demo/<slug>/page.tsx`)**:
  - `restoran` — Website kuliner Rasa Nusantara dengan sajian menu digital, jam buka, galeri, dan order WhatsApp.
  - `klinik` — Profil Klinik Sehat Bersama dengan daftar layanan medis, jadwal praktik dokter, dan reservasi janji temu.
  - `toko` — Toko online TokoKita dengan katalog produk, penyaringan kategori, dan pemesanan via WhatsApp.
  - `saas` — Halaman konversi SaaS KelolaKu dengan visual dashboard antarmuka, fitur otomasi alur kerja, dan tier langganan.
  - `sekolah` — Profil SMA Cendekia Nusantara dengan program peminatan, fasilitas kampus, dan panduan PPDB interaktif.
  - `properti` — Listing Griya Andalan Properti dengan rincian spesifikasi rumah, simulasi, dan konsultasi survei lokasi.
  - `jasa` — Profil studio personal brand Nara Kreatif dengan paket layanan, galeri portofolio berfilter, dan testimoni.
  - `bengkel` — Website bengkel AutoPrima Motor dengan estimasi biaya servis transparan, promo, dan booking antrean kendaraan.
  - `laundry` — Layanan Kilat Bersih Laundry dengan kalkulasi kiloan/satuan, alur antar-jemput, dan formulir order.
  - `salon` — Website Glow & Glam Salon dengan daftar menu treatment, paket bundling hemat, dan reservasi jadwal.
- **Sentralisasi Data & Perutean Prospek**:
  - Data demo dipusatkan di `src/lib/demo/demos.ts` (`demoItems` & `DemoItem`), terhubung langsung ke section `Portfolio` di beranda (`src/components/Portfolio.tsx`) dan hub demo.
  - Seluruh tombol Call-to-Action di halaman demo dialihkan ke WhatsApp resmi Andalan Tech melalui utilitas terpadu `src/lib/demo/wa.ts` (`waLink`).
  - Desain murni memanfaatkan fitur Tailwind CSS v4 (gradien linier modern, emoji, dan Lucide icon) tanpa ketergantungan aset gambar eksternal.

### 2. Penguatan Form Kontak & Optimalisasi SEO
- **Pengerasan Server Action `sendEmail` (`src/actions/sendEmail.ts`)**:
  - Menerapkan validasi ketat menggunakan Zod (`contactSchema`) untuk validasi nama, email, format nomor WhatsApp Indonesia, jenis layanan, dan panjang pesan.
  - Menghilangkan potensi crash (anti-crash handling) dengan penanganan try-catch menyeluruh dan respons status `{ ok: true }` atau `{ ok: false, error }`.
  - Menambahkan pengecekan konfigurasi `MAIL_TO` di runtime agar tidak melempar error fatal bila env belum terisi.
- **Formulir Kontak Responsif (`src/components/Contact.tsx`)**:
  - Terintegrasi penuh dengan `react-hook-form` dan resolver Zod.
  - Dilengkapi state feedback pengiriman (animasi spinner loading, notifikasi pesan sukses, serta pesan error interaktif).
- **Peningkatan Metadata & SEO Sistem (`src/app/layout.tsx` & `src/app/sitemap.ts`)**:
  - Konfigurasi `metadataBase` dengan rujukan aman ke `process.env.APP_DOMAIN` atau default `https://andalan.tech`.
  - Penambahan metadata OpenGraph lengkap (tipe, locale `id_ID`, nama situs, deskripsi) dan Twitter Card (`summary_large_image`).
  - Penambahan atribut canonical URL dan pengaturan tag bahasa dokumen semantik `lang="id"`.
  - Peta situs dinamis terkonfigurasi di `src/app/sitemap.ts` (`/sitemap.xml`) serta penyesuaian izin perayapan pada `public/robots.txt`.
