# Ringkasan Perubahan: ANDALAN-56

## Judul
Menambahkan Halaman Demo Desain Interior (`/demo/interior`)

## Deskripsi
Menambahkan satu halaman demo portofolio baru bertema Desain Interior dengan brand fiktif "Ruang Interior Studio". Halaman menyusun lima komponen section kecil:
1. Hero + CTA "Konsultasi Gratis via WhatsApp", tombol lihat portofolio, dan tiga poin kepercayaan.
2. Layanan desain: rumah tinggal, kantor & ruang kerja, serta kafe/restoran/toko, masing-masing dengan poin cakupan.
3. Portofolio konsep (grid 6 konsep: hunian, kantor, F&B, retail) dengan tipe, lokasi, luas, tag, dan tombol tanya via WhatsApp per konsep.
4. Paket desain: Konsultasi & Konsep, Desain Penuh (terpopuler), dan Desain + Pendampingan, lengkap dengan harga, rincian fitur, dan CTA WhatsApp.
5. Konsultasi WA: alur kerja tiga langkah, kontak studio, jam operasional, dan CTA konsultasi via WhatsApp.

Seluruh CTA WhatsApp menggunakan helper `waLink` dari `src/lib/demo/wa.ts` dan visual dibangun tanpa gambar eksternal (gradien Tailwind v4 `bg-linear-to-*`, emoji, dan ikon Lucide).

## File yang Dibuat
1. `src/components/demo/interior/InteriorHero.tsx` - Section hero dengan badge, CTA WhatsApp, dan poin kepercayaan.
2. `src/components/demo/interior/InteriorServices.tsx` - Layanan desain rumah, kantor, dan kafe/toko.
3. `src/components/demo/interior/InteriorPortfolio.tsx` - Grid portofolio konsep dengan CTA WhatsApp per item.
4. `src/components/demo/interior/InteriorPackages.tsx` - Paket desain dengan harga dan tombol tanya via WhatsApp.
5. `src/components/demo/interior/InteriorConsult.tsx` - Alur konsultasi, kontak studio, dan CTA WhatsApp.
6. `src/app/demo/interior/page.tsx` - Halaman App Router yang merender kelima komponen di dalam `<main>` dengan `export const metadata`.
7. `src/lib/demo/items/interior.ts` - Item registry demo dengan `slug: "interior"`, `category: "Properti, Travel & Otomotif"`, `package: "starter"`, dan aksen warna rose/orange.
8. `docs/CHANGES/ANDALAN-56.md` - Dokumen ringkasan perubahan ini.

## Catatan
- `src/lib/demo/demos.ts` dan `scripts/gen-demos.mjs` tidak disentuh (sesuai aturan).
- Item demo lain, halaman/komponen utama, layout global, `schema/`, `tests/setup/`, dan `AGENTS.md` tidak diubah.
- Tidak ada dependensi baru dan tidak ada gambar eksternal; Tailwind v4 memakai `bg-linear-to-*`.
- Tidak ada git commit dan tidak ada push ke remote.

## Verifikasi
- `npm test` dijalankan di foreground dan dilaporkan persis:
  ```
  npm error Missing script: "test"
  npm error
  npm error To see a list of scripts, run:
  npm error   npm run
  npm error A complete log of this run can be found in: /home/msytc/.npm/_logs/2026-10-18T06_52_17_221Z-debug-0.log
  ```
  (repo tidak memiliki skrip test di package.json)
- `pnpm install --frozen-lockfile` berhasil (exit code 0, `Done in 979ms`, 480 paket dari store lokal).
- `pnpm build` berhasil hijau (exit code 0, `✓ Compiled successfully in 13.5s`, `✓ Generating static pages (59/59)`, rute `○ /demo/interior` ter-prerender statis tanpa error).
