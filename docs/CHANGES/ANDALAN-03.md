# Ringkasan Perubahan: ANDALAN-03

## Judul
Penambahan Halaman Demo Portfolio Agen Properti (`/demo/properti`)

## Deskripsi
Menambahkan 1 demo website portfolio baru untuk niche Properti & Real Estate dengan slug `properti` ("Griya Andalan Properti") untuk melengkapi etalase demo siap pakai Andalan Tech di Next.js App Router.

## File yang Dibuat
1. `src/components/demo/properti/PropertiHero.tsx` - Komponen hero dengan badge agen properti terpercaya, headline, CTA konsultasi properti via WhatsApp & anchor lihat listing, serta poin metrik kepercayaan.
2. `src/components/demo/properti/PropertiListings.tsx` - Grid 6 kartu listing rumah pilihan (judul, badge status, lokasi, harga, estimasi angsuran, spesifikasi kamar tidur/kamar mandi/LB/LT) dan tombol CTA WhatsApp per listing.
3. `src/components/demo/properti/PropertiFeatures.tsx` - Grid 4 keunggulan agen properti (legalitas SHM terverifikasi, pendampingan KPR perbankan, transparansi biaya, dan survey lokasi gratis).
4. `src/components/demo/properti/PropertiAgent.tsx` - Bagian ajakan konsultasi properti, informasi kontak kantor pemasaran & jam operasional, tombol WhatsApp survey lokasi, dan footer demo.
5. `src/app/demo/properti/page.tsx` - Halaman App Router yang menyusun seluruh komponen demo properti dan mengekspor metadata SEO.

## File yang Diubah
1. `src/lib/demo/demos.ts` - Menambahkan entri demo `properti` ke array `demoItems` dengan properti lengkap (`slug`, `name`, `niche`, `tagline`, `description`, `emoji`, `accentBg`, `accentText`, `ring`, `highlights`) dan aksen warna teal/emerald.

## Catatan
- Tidak ada dependency baru; hanya memanfaatkan `next`, `react`, `lucide-react`, Tailwind v4 (`bg-linear-to-*`), dan helper `waLink`.
- Menghindari gambar eksternal dengan mengoptimalkan gradient, emoji, dan blok warna modern.
