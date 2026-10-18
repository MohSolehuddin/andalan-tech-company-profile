# Ringkasan Perubahan: ANDALAN-07

## Judul
Penambahan Halaman Demo Portfolio Salon & Kecantikan (`/demo/salon`)

## Deskripsi
Menambahkan 1 demo website portfolio baru untuk niche Salon & Kecantikan dengan slug `salon` ("Glow & Glam Salon") untuk memperkaya etalase demo siap pakai Andalan Tech di Next.js App Router.

## File yang Dibuat
1. `src/components/demo/salon/SalonHero.tsx` - Komponen hero berlatar gelap modern dengan gradien rose/pink, badge salon kecantikan modern, headline kilau percaya diri, CTA booking WhatsApp dan tautan layanan & harga, poin keunggulan stylist bersertifikat & produk BPOM, serta jam operasional dan lokasi salon.
2. `src/components/demo/salon/SalonServices.tsx` - Grid 5 kartu layanan unggulan (Potong & Styling Rambut, Rebonding & Smoothing Keratin, Facial & Glow Treatment, Nail Art & Mani-Pedi, Makeup & Bridal/Wisuda) dengan durasi pengerjaan, estimasi harga mulai, dan tombol reservasi WhatsApp per layanan.
3. `src/components/demo/salon/SalonPriceList.tsx` - Daftar harga transparan yang menampilkan paket bundling hemat (Paket Fresh & Chic, Paket Silky Glow Keratin, Paket Total Glamour Day) lengkap dengan daftar harga treatment satuan.
4. `src/components/demo/salon/SalonTestimonials.tsx` - Statistik kepuasan (3.200+ klien, 4.9/5 rating, 8+ tahun pengalaman, 100% produk BPOM) dan grid testimoni pelanggan fiktif realistis.
5. `src/components/demo/salon/SalonBooking.tsx` - Alur reservasi 3 langkah dan formulir booking janji temu interaktif yang otomatis menyusun pesan WhatsApp via `waLink` dengan rincian nama, nomor WhatsApp, pilihan treatment, rencana tanggal, perkiraan jam, dan catatan khusus.
6. `src/app/demo/salon/page.tsx` - Halaman Next.js App Router yang menyusun seluruh komponen demo salon dan mengekspor metadata SEO.

## File yang Diubah
1. `src/lib/demo/demos.ts` - Menambahkan entri demo `salon` ke array `demoItems` dengan properti lengkap (`slug`, `name`, `niche`, `tagline`, `description`, `emoji`, `accentBg`, `accentText`, `ring`, `highlights`) dan aksen warna rose/pink.

## Catatan
- Tidak ada dependency baru yang ditambahkan; hanya menggunakan `next`, `react`, `lucide-react`, Tailwind v4 (`bg-linear-to-*`), dan helper `waLink`.
- Menghindari gambar eksternal dengan memanfaatkan perpaduan gradien Tailwind v4, emoji, blok warna, serta ikon Lucide.
- Perubahan minimal tanpa menyentuh file di luar lingkup tugas.
