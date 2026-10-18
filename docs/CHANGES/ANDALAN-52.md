# Ringkasan Perubahan: ANDALAN-52

## Judul
Menambahkan Halaman Demo Rental / Sewa Mobil (`/demo/rental-mobil`)

## Deskripsi
Menambahkan satu halaman demo portofolio baru bertema Rental / Sewa Mobil dengan brand fiktif "Sewa Mobil Andalan". Halaman menyusun lima komponen section kecil:
1. Hero + CTA WhatsApp dan badge keunggulan layanan.
2. Katalog armada (grid 6 unit) lengkap dengan harga sewa harian, jumlah kursi, transmisi, dan tombol tanya via WhatsApp per unit.
3. Pilihan skema sewa: lepas kunci atau dengan driver, plus layanan tambahan (antar jemput bandara, sewa mingguan/bulanan, city tour).
4. Syarat & ketentuan sewa: dokumen wajib, ketentuan selama sewa, dan larangan keras.
5. Alur booking 3 langkah, kontak pool mobil, jam operasional, dan CTA booking via WhatsApp.

Seluruh CTA WhatsApp menggunakan helper `waLink` dari `src/lib/demo/wa.ts` dan visual dibangun tanpa gambar eksternal (gradien Tailwind v4 `bg-linear-to-*`, emoji, dan ikon Lucide).

## File yang Dibuat
1. `src/components/demo/rental-mobil/RentalHero.tsx` - Section hero dengan badge rental, CTA booking WhatsApp, dan poin kepercayaan.
2. `src/components/demo/rental-mobil/RentalFleet.tsx` - Katalog armada dengan harga sewa harian, spesifikasi, dan tombol WhatsApp per unit.
3. `src/components/demo/rental-mobil/RentalServices.tsx` - Pilihan lepas kunci / dengan driver beserta layanan tambahan.
4. `src/components/demo/rental-mobil/RentalTerms.tsx` - Syarat sewa, ketentuan selama sewa, dan daftar larangan.
5. `src/components/demo/rental-mobil/RentalBooking.tsx` - Alur booking, kontak pool, dan CTA WhatsApp.
6. `src/app/demo/rental-mobil/page.tsx` - Halaman App Router yang merender kelima komponen di dalam `<main>` dengan `export const metadata`.
7. `src/lib/demo/items/rental-mobil.ts` - Item registry demo dengan `slug: "rental-mobil"`, `category: "Properti, Travel & Otomotif"`, `package: "bisnis"`, dan aksen warna sky/blue.
8. `docs/CHANGES/ANDALAN-52.md` - Dokumen ringkasan perubahan ini.

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
  npm error A complete log of this run can be found in: /home/msytc/.npm/_logs/2026-10-18T06_40_27_847Z-debug-0.log
  ```
  (repo tidak memiliki skrip test di package.json)
- `pnpm install --frozen-lockfile && pnpm build` dijalankan di foreground dan berhasil hijau (exit code 0, `✓ Compiled successfully in 11.8s`, `✓ Generating static pages (52/52)`, rute `○ /demo/rental-mobil` ter-prerender statis tanpa error).
- `pnpm lint` dijalankan di foreground; tidak ada temuan pada file baru. Lint repo tetap keluar dengan exit code 1 karena 2 error dan 3 warning pra-ada di file di luar lingkup tugas (`Particle.tsx`, `BengkelHero.tsx`, `OlehContact.tsx`, `PerikananProducts.tsx`, `PropertiListings.tsx`) sehingga tidak diubah sesuai aturan.
