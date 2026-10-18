# Ringkasan Perubahan: DESIGN-BAKSO

## Judul
Port Demo Baru: Bakso Warisan Nusantara (`/demo/bakso`)

## Deskripsi
Melakukan porting dari file sumber HTML mandiri (`BAKSO-source.html`) menjadi demo terintegrasi di Next.js `andalan-tech-company-profile` pada rute `/demo/bakso`. Demo ini mengimplementasikan landing page warung bakso multi-cabang dengan fitur pencarian dan filter 20 cabang resmi, menu andalan interaktif berbasis kategori, kalkulator simulasi katering acara, cerita resep otentik, serta ulasan pelanggan dengan standar desain human-grade.

## Komponen & File yang Dibuat
1. `src/lib/demo/items/bakso.ts`: Metadata demo item (slug: `bakso`, niche: `Warung Bakso Multi-Cabang`, kategori: `Kuliner & F&B`, tier: `bisnis`).
2. `src/components/demo/bakso/branchData.ts` (41 baris): Data 20 cabang resmi beserta pembagian wilayah kota, alamat lengkap, dan fasilitas.
3. `src/components/demo/bakso/BranchModal.tsx` (93 baris): Komponen modal detail informasi cabang, link Google Maps, dan CTA WhatsApp spesifik cabang.
4. `src/components/demo/bakso/BaksoHero.tsx` (169 baris): Hero section dengan visual semangkuk bakso otentik, trust badges, rating Google Maps 4.9, dan counter statistik.
5. `src/components/demo/bakso/BaksoBranches.tsx` (176 baris): Fitur pencarian real-time dan tab filter kota untuk 20 cabang ber-AC.
6. `src/components/demo/bakso/menuData.ts` (93 baris): Data 8 menu andalan (spesial/iga, klasik kuah, gorengan, minuman).
7. `src/components/demo/bakso/BaksoMenu.tsx` (125 baris): Grid menu dengan filter kategori dinamis dan tombol pesan WhatsApp langsung.
8. `src/components/demo/bakso/BaksoCatering.tsx` (146 baris): Kalkulator simulasi katering (slider 50–500 porsi, pilihan Paket Reguler/Premium, estimasi total, dan CTA WA pesan katering).
9. `src/components/demo/bakso/BaksoReviews.tsx` (179 baris): Bagian kisah sejarah 1998, 3 rahasia kelezatan kuah, 3 ulasan pelanggan terverifikasi, dan sertifikasi Halal MUI.
10. `src/app/demo/bakso/page.tsx` (25 baris): Komposisi seluruh komponen demo dengan metadata title & description yang SEO-friendly.

Seluruh file komponen di `src/components/demo/bakso/` berukuran < 200 baris per file.

## Kepatuhan Aturan & Human-Grade Design
- **WhatsApp Integration:** Semua tombol CTA WhatsApp (pesan menu, katering, chat cabang) menggunakan fungsi helper `waLink(...)` dari `src/lib/demo/wa.ts` dengan pesan kontekstual.
- **Aset Gambar:** Menggunakan URL Unsplash dari sumber tanpa base64, dilengkapi atribut `alt` deskriptif.
- **Tipografi & Kontras:** Rasio kontras teks memenuhi WCAG AA, teks body >= 16px dengan line-height proporsional (1.5–1.65) dan lebar baris <= 75ch.
- **Sistem Border & Radius:** Mengganti rounded-3xl berlebihan menjadi rounded-xl/rounded-lg dan meniadakan drop-shadow neon / blur yang tidak perlu.
- **Aksesibilitas Keyboard:** Seluruh tombol, tautan, slider, dan input pencarian dilengkapi dengan cincin fokus jelas (`focus-visible:ring-2 focus-visible:outline-none`).

## Verifikasi
- `npm test` (repo-wide):
  ```
  npm error Missing script: "test"
  npm error
  npm error To see a list of scripts, run:
  npm error   npm run
  npm error A complete log of this run can be found in: /home/msytc/.npm/_logs/2026-10-18T08_27_53_480Z-debug-0.log
  ```
- `pnpm install --frozen-lockfile && pnpm build`:
  - `pnpm install`: Lockfile up to date, 480 packages linked, exit 0.
  - `next build`: `✓ Compiled successfully in 8.0s`, `✓ Finished TypeScript in 13.6s`, `✓ Generating static pages (68/68)` dengan rute `/demo/bakso` terdaftar dan diprerender secara statis tanpa error (exit 0).
