# Ringkasan Perubahan: ANDALAN-06

## Judul
Penambahan Halaman Demo Portfolio Laundry & Kebersihan (`/demo/laundry`)

## Deskripsi
Menambahkan 1 demo website portfolio baru untuk niche Laundry & Kebersihan dengan slug `laundry` ("Kilat Bersih Laundry") untuk melengkapi etalase demo siap pakai Andalan Tech di Next.js App Router.

## File yang Dibuat
1. `src/components/demo/laundry/LaundryHero.tsx` - Komponen hero dengan badge laundry antar-jemput, headline cucian bersih & wangi, CTA order antar-jemput, tautan layanan & harga, serta poin keunggulan (antar-jemput gratis, express 6 jam, garansi cuci ulang).
2. `src/components/demo/laundry/LaundryServices.tsx` - Grid 6 kartu layanan (cuci kering, cuci setrika, express 6 jam, cuci sepatu, cuci tas, bed cover & selimut) dengan durasi pengerjaan, harga mulai, dan tombol pesan WhatsApp per layanan.
3. `src/components/demo/laundry/LaundryPricing.tsx` - Daftar harga transparan: paket kiloan (per kg, paket bulanan) dan cuci satuan (sepatu, tas, bed cover, jas/gaun, boneka, karpet) beserta catatan minimal order dan radius antar-jemput gratis.
4. `src/components/demo/laundry/LaundryOrder.tsx` - Alur order 4 langkah (chat/order, antar-jemput, dicuci & disetrika, diantar kembali) serta form order interaktif via WhatsApp yang merangkum nama, alamat penjemputan, layanan, waktu jemput, dan catatan.
5. `src/components/demo/laundry/LaundryContact.tsx` - Informasi alamat outlet, jam buka hari kerja & akhir pekan, nomor WhatsApp, serta footer demo.
6. `src/app/demo/laundry/page.tsx` - Halaman App Router yang menyusun seluruh komponen demo laundry dan mengekspor metadata.

## File yang Diubah
1. `src/lib/demo/demos.ts` - Menambahkan entri demo `laundry` ke array `demoItems` dengan properti lengkap (`slug`, `name`, `niche`, `tagline`, `description`, `emoji`, `accentBg`, `accentText`, `ring`, `highlights`) dan aksen warna sky/blue.

## Catatan
- Tidak ada dependency baru; hanya memanfaatkan `next`, `react`, `lucide-react`, Tailwind v4 (`bg-linear-to-*`), dan helper `waLink`.
- Menghindari gambar eksternal dengan mengoptimalkan gradient, emoji, dan blok warna modern.
- Tidak ada halaman/komponen demo lain yang diubah; perubahan pada `demos.ts` hanya penambahan entri baru di akhir array.
