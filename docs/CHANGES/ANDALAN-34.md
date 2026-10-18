# Ringkasan Perubahan: ANDALAN-34

## Judul
Menambahkan Halaman Demo Klinik Gigi / Dokter Gigi (`/demo/dokter-gigi`)

## Deskripsi
Menambahkan satu halaman demo portofolio baru bertema klinik gigi dengan brand fiktif "Klinik Gigi Senyum Sehat". Halaman menyusun lima komponen section kecil: hero + CTA WhatsApp, layanan beserta estimasi harga, profil dokter, jadwal praktik, serta booking/kontak WhatsApp dengan footer demo. Seluruh CTA memakai helper `waLink` dari `src/lib/demo/wa.ts` dan visual dibangun tanpa gambar eksternal (gradien, inisial, blok warna) sesuai konvensi demo baru.

## File yang Dibuat
1. `src/components/demo/dokter-gigi/DokterHero.tsx` - Section hero dengan badge klinik, CTA booking WhatsApp, dan sorotan layanan.
2. `src/components/demo/dokter-gigi/DokterServices.tsx` - Enam layanan (scaling, tambal, behel, whitening, saluran akar, gigi anak) lengkap dengan estimasi harga dan tautan tanya per layanan.
3. `src/components/demo/dokter-gigi/DokterDoctors.tsx` - Profil tiga dokter gigi dengan peran, fokus perawatan, dan jadwal singkat (avatar inisial tanpa gambar eksternal).
4. `src/components/demo/dokter-gigi/DokterSchedule.tsx` - Tabel jadwal praktik Senin–Sabtu beserta dokter jaga dan ajakan tanya slot darurat.
5. `src/components/demo/dokter-gigi/DokterBooking.tsx` - CTA booking WhatsApp, info alamat, jam operasional, kontak, dan footer demo.
6. `src/app/demo/dokter-gigi/page.tsx` - Rute App Router yang merender kelima komponen di dalam `<main>` dengan `export const metadata`.
7. `src/lib/demo/items/dokter-gigi.ts` - Item registry demo dengan `slug: "dokter-gigi"`, `category: "Kesehatan & Kecantikan"`, `package: "bisnis"`, dan aksen sky.
8. `docs/CHANGES/ANDALAN-34.md` - Dokumen ringkasan perubahan ini.

## Catatan
- `src/lib/demo/demos.ts` dan `scripts/gen-demos.mjs` tidak disentuh (agregator diregenerasi otomatis).
- Item demo lain, halaman/komponen utama, layout global, `schema/`, `tests/setup/`, dan `AGENTS.md` tidak diubah.
- Tidak ada dependensi baru dan tidak ada gambar eksternal; Tailwind v4 memakai `bg-linear-to-*`.

## Verifikasi
- `npm test` dijalankan di foreground dan dilaporkan persis (repo tidak memiliki skrip test).
- `pnpm install --frozen-lockfile && pnpm build` dijalankan di foreground; hasil dilaporkan persis pada laporan tugas.
