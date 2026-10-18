# Ringkasan Perubahan: ANDALAN-54

## Judul
Menambahkan Halaman Demo Hotel & Penginapan (`/demo/hotel`)

## Deskripsi
Menambahkan satu halaman demo portofolio baru bertema Hotel & Penginapan dengan brand fiktif "Hotel Nyaman Stay". Halaman menyusun empat komponen section kecil:
1. Hero + CTA WhatsApp dan badge keunggulan layanan (resepsionis 24 jam, sarapan gratis, kolam renang).
2. Tipe kamar (grid 4 kamar): Standard, Deluxe, Family Suite, dan Executive Suite lengkap dengan harga per malam, kapasitas tamu, tempat tidur, luas kamar, dan tombol pesan via WhatsApp per kamar.
3. Fasilitas hotel: WiFi cepat, sarapan pagi, kolam renang, restoran & kafe, AC & air panas, resepsionis 24 jam, parkir luas, dan kebersihan terjaga.
4. Lokasi + alur booking 3 langkah, kontak hotel, jam check-in/check-out, dan CTA booking via WhatsApp.

Seluruh CTA WhatsApp menggunakan helper `waLink` dari `src/lib/demo/wa.ts` dan visual dibangun tanpa gambar eksternal (gradien Tailwind v4 `bg-linear-to-*`, emoji, dan ikon Lucide).

## File yang Dibuat
1. `src/components/demo/hotel/HotelHero.tsx` - Section hero dengan badge hotel, CTA pesan kamar WhatsApp, dan poin kepercayaan.
2. `src/components/demo/hotel/HotelRooms.tsx` - Grid tipe kamar dengan harga/malam, spesifikasi, dan tombol WhatsApp per kamar.
3. `src/components/demo/hotel/HotelFacilities.tsx` - Grid fasilitas hotel (wifi, sarapan, kolam renang, dan lainnya).
4. `src/components/demo/hotel/HotelLocation.tsx` - Lokasi, alur booking 3 langkah, kontak hotel, dan CTA booking via WhatsApp.
5. `src/app/demo/hotel/page.tsx` - Halaman App Router yang merender keempat komponen di dalam `<main>` dengan `export const metadata`.
6. `src/lib/demo/items/hotel.ts` - Item registry demo dengan `slug: "hotel"`, `category: "Properti, Travel & Otomotif"`, `package: "bisnis"`, dan aksen warna teal/emerald.
7. `docs/CHANGES/ANDALAN-54.md` - Dokumen ringkasan perubahan ini.

## Catatan
- `src/lib/demo/demos.ts` dan `scripts/gen-demos.mjs` tidak disentuh (sesuai aturan); item `hotel` akan masuk agregator saat skrip generator dijalankan.
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
  npm error A complete log of this run can be found in: /home/msytc/.npm/_logs/2026-10-18T06_52_07_237Z-debug-0.log
  ```
  (repo tidak memiliki skrip test di package.json)
- `pnpm install --frozen-lockfile && pnpm build` dijalankan di foreground dan berhasil hijau (exit code 0, `✓ Compiled successfully in 14.5s`, `✓ Generating static pages (59/59)`, rute `○ /demo/hotel` ter-prerender statis tanpa error).
- `pnpm exec eslint src/components/demo/hotel src/app/demo/hotel src/lib/demo/items/hotel.ts` dijalankan di foreground dengan exit code 0 (tidak ada temuan pada file baru).
