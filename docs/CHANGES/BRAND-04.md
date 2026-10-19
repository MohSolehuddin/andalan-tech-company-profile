# Ringkasan Perubahan: BRAND-04

## Judul
Pembersihan Visual Benefits & Pricing (Home)

## Deskripsi
Menyelaraskan kartu Benefits dan Pricing dengan aturan brand: menghapus gradien ornamen, efek translate/scale, dan shadow berlebih; menggunakan radius, badge, serta warna aksen yang konsisten. Tidak ada perubahan data, harga, slug, struktur, maupun dependency.

## Perubahan
1. `src/components/Benefits.tsx`
   - Latar seksi `bg-card/50` menjadi `bg-muted/40`.
   - Overlay gradien dihapus.
   - `hover:-translate-y-1`, `group-hover:scale-110`, dan `hover:shadow-md` dihapus; interaksi hover cukup `hover:border-primary/40`.
   - Kartu memakai `rounded-xl border bg-card`; badge metrik memakai `bg-accent/10 text-[#A8530F]`; kotak ikon tetap.
2. `src/components/Pricing.tsx`
   - Kartu populer memakai `border-primary`; kartu non-populer `border-border hover:border-primary/40`.
   - Badge "Paling Populer" memakai `bg-accent text-accent-foreground`.
   - Shadow berlebih dihapus; ikon centang memakai `text-[#A8530F]`.
   - Tombol populer `bg-primary` (variant default), lainnya `variant="outline"`; radius tombol `rounded-lg`; state focus-visible dipertahankan.
   - `PACKAGE_TIERS`, angka, dan harga tidak diubah.

## Verifikasi
- `npm test` (repo-wide, foreground) — output persis:
  ```
  npm error Missing script: "test"
  npm error
  npm error To see a list of scripts, run:
  npm error   npm run
  npm error A complete log of this run can be found in: /home/msytc/.npm/_logs/2026-10-19T14_18_07_570Z-debug-0.log
  ```
  (repo tidak memiliki skrip `test`; exit code 1)
- `pnpm install --frozen-lockfile && pnpm build` — exit code 0: `✓ Compiled successfully in 25.8s`, `✓ Generating static pages (69/69)` tanpa error.

## Catatan
- Tanpa git commit dan tanpa push ke remote.
- Hanya dua file komponen di atas serta dokumen ini yang diubah.
