# Ringkasan Perubahan: ANDALAN-44

## Judul
Menambahkan Halaman Demo Toko Bangunan & Material (`/demo/bangunan`)

## Deskripsi
Menambahkan satu halaman demo portofolio baru bertema toko bangunan dengan brand fiktif "Toko Bangunan Kokoh". Halaman menyusun lima komponen section kecil: hero + CTA, katalog material berkategori (semen & pasir, besi & baja, cat & finishing, keramik & lantai) dengan harga dan tombol pesan per item, alur pengiriman ke lokasi proyek, keunggulan + testimoni, serta kontak/order WhatsApp dengan footer demo. Seluruh CTA memakai helper `waLink` dari `src/lib/demo/wa.ts` dan visual dibangun tanpa gambar eksternal (gradien, emoji, ikon Lucide) sesuai konvensi demo.

## File yang Dibuat
1. `src/components/demo/bangunan/BangunanHero.tsx` - Section hero dengan badge niche, CTA lihat material + order WhatsApp, dan tiga sorotan keunggulan.
2. `src/components/demo/bangunan/BangunanCatalog.tsx` - Katalog 8 material dengan filter kategori, harga per item, dan tombol pesan WhatsApp.
3. `src/components/demo/bangunan/BangunanDelivery.tsx` - Tiga langkah pengiriman ke lokasi proyek, info gratis ongkir area kota, dan CTA atur pengiriman via WhatsApp.
4. `src/components/demo/bangunan/BangunanTrust.tsx` - Tiga kartu keunggulan (material original, harga grosir, antar hari sama) dan tiga testimoni pelanggan.
5. `src/components/demo/bangunan/BangunanContact.tsx` - CTA order WhatsApp, alamat gudang, jam buka, kontak, dan footer demo.
6. `src/app/demo/bangunan/page.tsx` - Rute App Router yang merender kelima komponen di dalam `<main>` dengan `export const metadata`.
7. `src/lib/demo/items/bangunan.ts` - Item registry demo dengan `slug: "bangunan"`, `category: "Retail & Toko"`, `package: "bisnis"`, dan aksen stone/amber.
8. `docs/CHANGES/ANDALAN-44.md` - Dokumen ringkasan perubahan ini.

## Catatan
- `src/lib/demo/demos.ts` dan `scripts/gen-demos.mjs` tidak disentuh (agregator diregenerasi otomatis).
- Item demo lain, halaman/komponen utama, layout global, `schema/`, `tests/setup/`, dan `AGENTS.md` tidak diubah.
- Tidak ada dependensi baru dan tidak ada gambar eksternal; Tailwind v4 memakai `bg-linear-to-*`.

## Verifikasi
- `npm test` dijalankan di foreground dan dilaporkan persis:
  ```
  npm error Missing script: "test"
  npm error
  npm error To see a list of scripts, run:
  npm error   npm run
  npm error A complete log of this run can be found in: /home/msytc/.npm/_logs/2026-10-18T06_31_38_034Z-debug-0.log
  ```
  (repo tidak memiliki skrip test)
- `pnpm install --frozen-lockfile && pnpm build` dijalankan di foreground dan berhasil hijau (rute `○ /demo/bangunan` ter-prerender tanpa error).
