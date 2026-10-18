# Ringkasan Perubahan: DESIGN-IRENT

## Judul
Port Demo Baru: iRent Studio (`/demo/sewa-iphone`)

## Deskripsi
Melakukan porting dari file sumber HTML mandiri (`IRENT-source.html`) menjadi demo terintegrasi di Next.js `andalan-tech-company-profile` pada rute `/demo/sewa-iphone`. Demo ini mengimplementasikan landing page rental iPhone dan gadget resmi dengan fitur katalog unit interaktif (filter seri Pro/Reguler/Konser), kalkulator estimasi biaya sewa harian/weekend/mingguan/bulanan real-time dengan add-ons & diskon durasi, alur SOP sewa dalam 3 langkah, unboxing kelengkapan fullset, perbandingan finansial sewa vs beli baru, formulir booking langsung terhubung ke WhatsApp, serta ulasan pelanggan dan FAQ interaktif berstandar desain human-grade.

## Komponen & File yang Dibuat
1. `src/lib/demo/items/sewa-iphone.ts`: Metadata demo item (slug: `sewa-iphone`, brand: `iRent Studio`, niche: `Sewa iPhone & Gadget Resmi`, kategori: `Jasa & Profesional`, package: `bisnis`).
2. `src/components/demo/irent/contentData.ts` (105 baris): Data statis use cases, 3 langkah sewa, kelengkapan unboxing, ulasan pelanggan terverifikasi, dan FAQ accordion.
3. `src/components/demo/irent/deviceData.ts` (189 baris): Data 7 unit iPhone (16 Pro Max, 16 Pro, 15 Pro Max, 15 Pro, 15 Reguler, 14 Pro, 13), add-ons aksesoris, opsi durasi & diskon, serta helper format mata uang Rupiah.
4. `src/components/demo/irent/IRentHero.tsx` (193 baris): Header navigasi, pengumuman promo weekend, hero showcase dengan visual titanium Unsplash, trust metrics, dan grid 4 use case populer (konser, traveling, wisuda, content creator).
5. `src/components/demo/irent/IRentCatalog.tsx` (186 baris): Katalog unit interaktif ('use client') dengan pencarian teks real-time, tab filter kategori, kartu spesifikasi 24-point check, tarif harian & weekend, serta tombol simulasi & sewa via WhatsApp.
6. `src/components/demo/irent/IRentCalculator.tsx` (161 baris): Kalkulator simulasi biaya sewa ('use client') dengan pemilihan model, durasi berdiskon otomatis, pemilih tanggal & metode pengiriman, toggle add-ons, ringkasan rincian biaya real-time, dan CTA pesan WhatsApp.
7. `src/components/demo/irent/IRentSteps.tsx` (175 baris): Alur 3 langkah sewa cepat, paket unboxing aksesoris fullset gratis dengan visual Unsplash, serta komparasi finansial hemat 96% sewa vs beli baru.
8. `src/components/demo/irent/IRentBooking.tsx` (185 baris): Formulir pemesanan interaktif ('use client') lengkap dengan validasi field, toggle syarat dokumen (karyawan/mahasiswa), dan submit terhubung langsung ke WhatsApp.
9. `src/components/demo/irent/IRentReviewsFaq.tsx` (149 baris): Testimoni 3 pelanggan terverifikasi (rating 4.9/5.0), accordion FAQ 5 pertanyaan penting, banner penutup slot terbatas, dan footer copyright.
10. `src/app/demo/sewa-iphone/page.tsx` (29 baris): Komposisi seluruh komponen demo dengan metadata SEO title & description.

Seluruh file komponen di `src/components/demo/irent/` berukuran < 200 baris per file.

## Kepatuhan Aturan & Human-Grade Design
- **WhatsApp Integration:** Semua tombol CTA WhatsApp (header, katalog, kalkulator, booking, banner akhir) menggunakan helper `waLink(...)` dari `src/lib/demo/wa.ts` dengan pesan kontekstual.
- **Aset Gambar:** Menggunakan URL Unsplash dari sumber tanpa base64 (`photo-1592750475338-74b7b21085ab` dan `photo-1510557880182-3d4d3cba35a5`), dilengkapi atribut `alt` deskriptif.
- **Tipografi & Kontras:** Rasio kontras teks memenuhi WCAG AA, teks body >= 16px dengan line-height proporsional (1.5–1.65) dan lebar baris <= 75ch.
- **Sistem Border & Radius:** Mengganti rounded-3xl berlebihan menjadi rounded-xl/rounded-lg dan meniadakan drop-shadow neon / blur yang tidak perlu.
- **Aksesibilitas Keyboard:** Seluruh tombol, tautan, dropdown select, checkbox, dan input form dilengkapi dengan cincin fokus jelas (`focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none`).
- **Konsistensi Lingkup:** Tidak memodifikasi `src/lib/demo/demos.ts`, `scripts/gen-demos.mjs`, atau demo lain. Tidak ada push ke remote.

## Verifikasi
- `npm test` (repo-wide):
  ```
  npm error Missing script: "test"
  npm error
  npm error To see a list of scripts, run:
  npm error   npm run
  npm error A complete log of this run can be found in: /home/msytc/.npm/_logs/2026-10-18T09_01_08_622Z-debug-0.log
  ```
- `pnpm install --frozen-lockfile && pnpm build`:
  - `pnpm install`: Lockfile up to date, 480 packages linked, exit 0.
  - `next build`: `✓ Compiled successfully in 6.1s`, `✓ Finished TypeScript in 11.0s`, `✓ Generating static pages (69/69)` dengan rute `/demo/sewa-iphone` terdaftar dan diprerender secara statis tanpa error (exit 0).
