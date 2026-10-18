# Ringkasan Perubahan: ANDALAN-42

## Judul
Menambahkan Halaman Demo Fashion / Distro (`/demo/fashion`)

## Deskripsi
Menambahkan satu halaman demo portofolio baru bertema fashion/distro dengan brand fiktif "Distro Style Nusantara". Halaman menyusun lima komponen section kecil: hero + CTA WhatsApp, katalog produk (grid + harga + pilihan ukuran dengan filter kategori), koleksi baru bulan ini, cara order empat langkah + konsultasi ukuran, serta kontak/order WhatsApp dengan footer demo. Seluruh CTA memakai helper `waLink` dari `src/lib/demo/wa.ts` dan visual dibangun tanpa gambar eksternal (gradien, emoji, ikon Lucide) sesuai konvensi demo.

## File yang Dibuat
1. `src/components/demo/fashion/FashionHero.tsx` - Section hero dengan badge niche, CTA katalog & order WhatsApp, dan tiga sorotan keunggulan.
2. `src/components/demo/fashion/FashionKatalog.tsx` - Delapan produk (atasan, bawahan, outer, aksesoris) dengan filter kategori, harga, chip ukuran, dan tombol pesan WhatsApp per item.
3. `src/components/demo/fashion/FashionKoleksi.tsx` - Tiga kartu koleksi baru (varsity, denim, cargo) dengan label "Baru" dan CTA tanya via WhatsApp.
4. `src/components/demo/fashion/FashionOrder.tsx` - Empat langkah cara order dan banner konsultasi ukuran via WhatsApp.
5. `src/components/demo/fashion/FashionContact.tsx` - CTA order WhatsApp, alamat store, jam buka, kontak, dan footer demo.
6. `src/app/demo/fashion/page.tsx` - Rute App Router yang merender kelima komponen di dalam `<main>` dengan `export const metadata`.
7. `src/lib/demo/items/fashion.ts` - Item registry demo dengan `slug: "fashion"`, `category: "Retail & Toko"`, `package: "bisnis"`, dan aksen violet/purple.
8. `docs/CHANGES/ANDALAN-42.md` - Dokumen ringkasan perubahan ini.

## Catatan
- `src/lib/demo/demos.ts` dan `scripts/gen-demos.mjs` tidak disentuh (agregator diregenerasi otomatis).
- Item demo lain, halaman/komponen utama, layout global, `schema/`, `tests/setup/`, dan `AGENTS.md` tidak diubah.
- Tidak ada dependensi baru dan tidak ada gambar eksternal; Tailwind v4 memakai `bg-linear-to-*`.
- Tidak ada perbaikan build (build hijau tanpa error).

## Verifikasi
- `npm test` dijalankan di foreground dan dilaporkan persis:
  ```
  npm error Missing script: "test"
  npm error
  npm error To see a list of scripts, run:
  npm error   npm run
  npm error A complete log of this run can be found in: /home/msytc/.npm/_logs/2026-10-18T06_31_36_413Z-debug-0.log
  ```
  (repo tidak memiliki skrip test)
- `pnpm install --frozen-lockfile && pnpm build` dijalankan di foreground dan berhasil hijau (exit code 0):
  ```
  ✓ Compiled successfully in 17.9s
  ✓ Generating static pages (45/45) in 5.0s
  ```
  Rute `○ /demo/fashion` ter-prerender (static) tanpa error. Satu-satunya peringatan build adalah `[baseline-browser-mapping] The data in this module is over two months old.` (bawaan toolchain, bukan dari perubahan ini).
