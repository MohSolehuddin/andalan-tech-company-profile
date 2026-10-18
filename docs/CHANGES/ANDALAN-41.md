# Ringkasan Perubahan: ANDALAN-41

## Judul
Menambahkan Halaman Demo Minimarket (`/demo/minimarket`)

## Deskripsi
Menambahkan halaman demo portofolio baru bertema minimarket dengan nama brand fiktif "Minimart Sejahtera". Halaman menyusun empat komponen section kecil (<200 baris/file): hero dengan badge dan CTA order WhatsApp, promo mingguan JSM (Jumat-Sabtu-Minggu) dengan harga promo dan diskon, katalog produk unggulan sembako dan kebutuhan harian berfilter kategori, serta info lokasi 3 cabang, jam operasional, garansi pengantaran, dan order WhatsApp. Seluruh CTA mengarahkan ke helper `waLink` (`src/lib/demo/wa.ts`), visual dibangun tanpa gambar eksternal dengan gradien Tailwind v4 (`bg-linear-to-*`), emoji, dan ikon Lucide.

## File yang Dibuat
1. `src/components/demo/minimarket/MinimarketHero.tsx` - Section hero dengan badge, headline pemesanan harian, tombol CTA WhatsApp & katalog, serta sorotan gratis ongkir dan jam operasional.
2. `src/components/demo/minimarket/MinimarketPromo.tsx` - Section promo mingguan JSM dengan kartu harga promo, badge diskon, tombol klaim WhatsApp, dan banner brosur promo mingguan.
3. `src/components/demo/minimarket/MinimarketCatalog.tsx` - Komponen interaktif katalog sembako, minuman, kebutuhan rumah, dan perawatan tubuh dengan filter kategori, tombol pesan per produk, dan CTA kirim catatan belanja.
4. `src/components/demo/minimarket/MinimarketBranches.tsx` - Informasi 3 cabang toko fisik, jam operasional (06.30 - 22.00 WIB), fitur pengantaran 30 menit & COD/QRIS, serta footer demo.
5. `src/app/demo/minimarket/page.tsx` - Halaman App Router yang merender keempat komponen dengan `export const metadata`.
6. `src/lib/demo/items/minimarket.ts` - Item registry demo dengan `slug: "minimarket"`, `name: "Minimart Sejahtera"`, `category: "Retail & Toko"`, `package: "bisnis"`, dan aksen merah/rose.
7. `docs/CHANGES/ANDALAN-41.md` - Dokumen ringkasan perubahan ini.

## Catatan
- `src/lib/demo/demos.ts` dan `scripts/gen-demos.mjs` tidak disentuh (agregator diregenerasi otomatis).
- Item demo lain, halaman/komponen utama, layout global, `schema/`, `tests/setup/`, dan `AGENTS.md` tidak diubah.
- Tidak ada dependensi baru dan tidak ada gambar eksternal; Tailwind v4 memakai `bg-linear-to-*`.
- Tidak ada commit git maupun push ke remote.

## Verifikasi
- `npm test` dijalankan di foreground dan dilaporkan persis:
  ```
  npm error Missing script: "test"
  npm error
  npm error To see a list of scripts, run:
  npm error   npm run
  npm error A complete log of this run can be found in: /home/msytc/.npm/_logs/2026-10-18T06_32_38_019Z-debug-0.log
  ```
  (repo tidak memiliki skrip test di package.json)
- `pnpm install --frozen-lockfile && pnpm build` dijalankan di foreground dan berhasil hijau (exit code 0, `✓ Compiled successfully`, rute `○ /demo/minimarket` ter-prerender statis tanpa error).
