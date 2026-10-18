# Ringkasan Perubahan: ANDALAN-05

## Judul
Penambahan Halaman Demo Portfolio Bengkel & Otomotif (`/demo/bengkel`)

## Deskripsi
Menambahkan 1 demo website portfolio baru untuk niche Bengkel & Otomotif dengan slug `bengkel` ("AutoPrima Motor") untuk melengkapi etalase demo siap pakai Andalan Tech di Next.js App Router.

## File yang Dibuat
1. `src/components/demo/bengkel/BengkelHero.tsx` - Komponen hero dengan badge bengkel terpercaya, headline performa mesin, CTA booking & daftar layanan, serta poin keunggulan (garansi 14 hari, mekanik bersertifikasi, pengerjaan tepat waktu).
2. `src/components/demo/bengkel/BengkelServices.tsx` - Grid 6 kartu layanan servis (ganti oli & filter, tune up injeksi, servis AC, rem & kaki-kaki, cek kelistrikan & aki, inspeksi 45 titik) dengan estimasi biaya transparan dan tombol WhatsApp per layanan.
3. `src/components/demo/bengkel/BengkelBooking.tsx` - Pilihan 3 paket promo hemat serta form booking antrean interaktif via WhatsApp yang merangkum nama pemilik, tipe kendaraan, jenis servis, dan jadwal rencana kedatangan.
4. `src/components/demo/bengkel/BengkelTestimonials.tsx` - Baris statistik (4.500+ kendaraan tertangani, rating 4.9/5, 100% suku cadang asli, 14 hari garansi) dan 3 testimoni pelanggan kendaraan roda dua dan roda empat.
5. `src/components/demo/bengkel/BengkelContact.tsx` - Informasi lokasi fisik bengkel, nomor WhatsApp, jam operasional hari kerja & akhir pekan, serta footer demo.
6. `src/app/demo/bengkel/page.tsx` - Halaman App Router yang menyusun seluruh komponen demo bengkel dan mengekspor metadata.

## File yang Diubah
1. `src/lib/demo/demos.ts` - Menambahkan entri demo `bengkel` ke array `demoItems` dengan properti lengkap (`slug`, `name`, `niche`, `tagline`, `description`, `emoji`, `accentBg`, `accentText`, `ring`, `highlights`) dan aksen warna red/amber.

## Catatan
- Tidak ada dependency baru; hanya memanfaatkan `next`, `react`, `lucide-react`, Tailwind v4 (`bg-linear-to-*`), dan helper `waLink`.
- Menghindari gambar eksternal dengan mengoptimalkan gradient, emoji, dan blok warna modern.
