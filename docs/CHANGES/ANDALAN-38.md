# Ringkasan Perubahan: ANDALAN-38

## Judul
Menambahkan Halaman Demo Optik & Kacamata (`/demo/optik`)

## Deskripsi
Menambahkan satu halaman demo portofolio baru bertema optik & kacamata dengan brand fiktif "Optik Melihat Jernih". Halaman menyusun lima komponen section kecil: hero + CTA WhatsApp, layanan (cek mata, lensa & pasang frame, softlens, servis), katalog frame + harga dengan tombol pesan per frame, promo bulan ini, serta kontak/order & reservasi WhatsApp dengan footer demo. Seluruh CTA memakai helper `waLink` dari `src/lib/demo/wa.ts` dan visual dibangun tanpa gambar eksternal (gradien, emoji, ikon Lucide) sesuai konvensi demo.

## File yang Dibuat
1. `src/components/demo/optik/OptikHero.tsx` - Section hero dengan badge niche, CTA reservasi WhatsApp, dan tiga sorotan keunggulan.
2. `src/components/demo/optik/OptikServices.tsx` - Empat kartu layanan: cek mata & resep, lensa & pasang frame, softlens & perawatan, servis & penyetelan.
3. `src/components/demo/optik/OptikCatalog.tsx` - Enam frame dengan deskripsi, harga, dan tombol pesan WhatsApp per item.
4. `src/components/demo/optik/OptikPromo.tsx` - Tiga kartu promo (bundling, pelajar, gratis cek mata) dan banner klaim promo via WhatsApp.
5. `src/components/demo/optik/OptikContact.tsx` - CTA order/reservasi WhatsApp, alamat toko, jam operasional, kontak, dan footer demo.
6. `src/app/demo/optik/page.tsx` - Rute App Router yang merender kelima komponen di dalam `<main>` dengan `export const metadata`.
7. `src/lib/demo/items/optik.ts` - Item registry demo dengan `slug: "optik"`, `category: "Kesehatan & Kecantikan"`, `package: "starter"`, dan aksen indigo/sky.
8. `docs/CHANGES/ANDALAN-38.md` - Dokumen ringkasan perubahan ini.

## Catatan
- `src/lib/demo/demos.ts` dan `scripts/gen-demos.mjs` tidak disentuh (agregator diregenerasi otomatis).
- Item demo lain, halaman/komponen utama, layout global, `schema/`, `tests/setup/`, dan `AGENTS.md` tidak diubah.
- Tidak ada dependensi baru dan tidak ada gambar eksternal; Tailwind v4 memakai `bg-linear-to-*`.
- Perbaikan build minimal: ikon `Voucher` (tidak ada di lucide-react) diganti `TicketPercent`.

## Verifikasi
- `npm test` dijalankan di foreground dan dilaporkan persis:
  ```
  npm error Missing script: "test"
  npm error
  npm error To see a list of scripts, run:
  npm error   npm run
  npm error A complete log of this run can be found in: /home/msytc/.npm/_logs/2026-10-18T06_24_35_177Z-debug-0.log
  ```
  (repo tidak memiliki skrip test)
- `pnpm install --frozen-lockfile && pnpm build` dijalankan di foreground dan berhasil hijau (exit code 0, `✓ Compiled successfully`, rute `○ /demo/optik` ter-prerender tanpa error).
