# Ringkasan Perubahan: ANDALAN-45

## Judul
Menambahkan Halaman Demo Toko Emas & Perhiasan (`/demo/toko-emas`)

## Deskripsi
Menambahkan satu halaman demo portofolio baru bertema Toko Emas & Perhiasan dengan brand fiktif "Emas Mulia Perhiasan". Halaman menyusun lima komponen section kecil:
1. Hero + CTA WhatsApp dan badge keunggulan kadar serta buyback.
2. Pembaruan harga emas harian (batangan 24K, perhiasan 24K, 17K/750, 8K/375, dan harga buyback toko dengan jaminan timbangan digital presisi).
3. Katalog koleksi perhiasan interaktif dengan filter kategori (Cincin, Kalung, Gelang, Anting), estimasi harga, rincian berat/karat, dan tombol pesan via WhatsApp per item.
4. Layanan spesialis custom cincin kawin, tukar tambah (trade-in), buyback langsung cair, serta cuci & servis kilat.
5. Kontak showroom, jam operasional, jaminan pengiriman berasuransi, dan pemesanan via WhatsApp.

Seluruh CTA WhatsApp menggunakan helper `waLink` dari `src/lib/demo/wa.ts` dan visual dibangun tanpa gambar eksternal (gradien Tailwind v4 `bg-linear-to-*`, emoji, dan ikon Lucide).

## File yang Dibuat
1. `src/components/demo/toko-emas/TokoEmasHero.tsx` - Section hero dengan badge toko emas, CTA pemesanan WhatsApp, dan poin kepercayaan.
2. `src/components/demo/toko-emas/TokoEmasRates.tsx` - Tabel harga emas harian dan buyback transparan beserta penimbangan presisi.
3. `src/components/demo/toko-emas/TokoEmasCollection.tsx` - Katalog perhiasan dengan filter kategori (Cincin, Kalung, Gelang, Anting) dan tombol WhatsApp per item.
4. `src/components/demo/toko-emas/TokoEmasServices.tsx` - Layanan custom cincin, tukar tambah emas, buyback, dan servis kilat.
5. `src/components/demo/toko-emas/TokoEmasContact.tsx` - Informasi showroom, jam operasional, kontak WhatsApp, garansi pengiriman, dan footer demo.
6. `src/app/demo/toko-emas/page.tsx` - Halaman App Router yang merender kelima komponen di dalam `<main>` dengan `export const metadata`.
7. `src/lib/demo/items/toko-emas.ts` - Item registry demo dengan `slug: "toko-emas"`, `category: "Retail & Toko"`, `package: "starter"`, dan aksen warna emas/kuning.
8. `docs/CHANGES/ANDALAN-45.md` - Dokumen ringkasan perubahan ini.

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
  npm error A complete log of this run can be found in: /home/msytc/.npm/_logs/2026-10-18T06_33_01_144Z-debug-0.log
  ```
  (repo tidak memiliki skrip test di package.json)
- `pnpm install --frozen-lockfile && pnpm build` dijalankan di foreground dan berhasil hijau (exit code 0, `✓ Compiled successfully`, rute `○ /demo/toko-emas` ter-prerender statis tanpa error).
