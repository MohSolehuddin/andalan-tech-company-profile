# Struktur Paket Harga dan Layanan Andalan Tech

Dokumen ini mendokumentasikan spesifikasi paket harga, layanan tambahan (add-ons), serta panduan integrasi pada aplikasi web `andalan-tech-company-profile`.

## 1. Tier Paket Pembuatan Website

Harga di bawah ini adalah estimasi indikatif (dalam IDR) untuk pembuatan baru serta perpanjangan operasional tahunan (domain, hosting, SSL, dan pemeliharaan dasar).

| ID Tier | Nama Paket | Cakupan Utama | Buat Pertama | Perpanjang (Tahunan) | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `starter` | **Starter** | Landing 1 halaman + tombol WhatsApp | Rp 1.500.000 | Rp 500.000 / tahun | Standar |
| `bisnis` | **Bisnis** | s.d. 5 halaman + katalog produk | Rp 3.500.000 | Rp 900.000 / tahun | Paling Populer |
| `pro` | **Pro** | Katalog + panel admin/CMS + SEO on-page | Rp 6.500.000 | Rp 1.500.000 / tahun | Tingkat Lanjut |
| `custom` | **Custom** | Booking/e-commerce/integrasi | Rp 10.000.000 | Rp 2.000.000 / tahun | Kustom Enterprise |

### Rincian Fitur Per Tier

1. **Starter**
   - Landing page 1 halaman responsif & cepat
   - Integrasi tombol WhatsApp langsung ke chat
   - Domain (.com/.id) & cloud hosting tahun pertama
   - Setup Google Search Console dasar

2. **Bisnis** (Paling Populer)
   - Hingga 5 halaman (Beranda, Tentang, Layanan, Kontak, FAQ)
   - Katalog produk / layanan interaktif
   - Domain (.com/.id) & cloud hosting performa tinggi
   - Optimasi SEO dasar Google & integrasi WhatsApp

3. **Pro**
   - Semua fitur paket Bisnis + halaman dinamis
   - Panel admin / CMS mandiri untuk kelola konten & produk
   - Optimasi SEO on-page lengkap & schema markup bisnis
   - Integrasi analitik pengunjung & laporan performa

4. **Custom**
   - Fitur kustom (sistem reservasi, e-commerce, atau payment gateway)
   - Integrasi API pihak ketiga & kustomisasi alur bisnis
   - Desain antarmuka eksklusif sesuai identitas brand
   - Dukungan prioritas & pelatihan penggunaan sistem

---

## 2. Layanan Tambahan (Add-Ons)

Layanan opsional untuk melengkapi operasional, optimasi, dan pemeliharaan berkala:

| Layanan | Tarif Indikatif | Periode / Satuan |
| :--- | :--- | :--- |
| Domain .com/.id | Rp 200.000 | tahun |
| Hosting | Rp 400.000 | tahun |
| Maintenance & update konten | Rp 300.000 | bulan |
| SEO bulanan | Rp 750.000 | bulan |
| Google Business Profile | Rp 350.000 | sekali |

---

## 3. Integrasi Kode & Arsitektur

- **`src/lib/pricing.ts`**: Menjadi Single Source of Truth untuk konstanta tier paket (`PACKAGE_TIERS`), add-ons (`ADDONS`), fungsi pemformatan mata uang rupiah (`formatIDR`), dan lookup helper (`tierById`).
- **`src/app/paket/page.tsx`**: Halaman publik `/paket` yang memuat perbandingan paket, daftar add-ons, catatan harga indikatif, FAQ, dan alur pemesanan via WhatsApp.
- **`src/app/demo/page.tsx`**: Hub katalog demo yang menyertakan badge harga indikatif pada setiap kartu template demo berdasarkan properti `demo.package`.
- **`src/app/demo/layout.tsx`**: Wrapper layout demo yang menyertakan band CTA informasi harga mulai Rp 1.500.000 beserta tautan ke `/paket` dan tombol WhatsApp.
- **`src/components/Footer.tsx`**: Navigasi footer global yang memuat tautan langsung ke halaman `/paket`.
