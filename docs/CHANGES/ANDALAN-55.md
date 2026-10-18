# Ringkasan Perubahan: ANDALAN-55

## Judul
Menambahkan Halaman Demo Kontraktor & Renovasi Bangunan (`/demo/kontraktor`)

## Deskripsi
Menambahkan satu halaman demo portofolio baru bertema Kontraktor & Renovasi Bangunan dengan brand fiktif "Bangun Karya Kontraktor". Halaman menyusun lima komponen section terfokus:
1. `KontraktorHero.tsx` - Section hero dengan badge kontraktor terpercaya, headline nilai utama, CTA konsultasi WhatsApp gratis, link simulasi RAB, dan poin kepercayaan (80+ proyek selesai tepat waktu, gratis survei lokasi, garansi 6 bulan).
2. `KontraktorServices.tsx` - Katalog 4 layanan unggulan (Bangun Rumah Baru, Renovasi Total & Parsial, Desain & Interior Kantor, serta Kanopi/Pagar/Eksterior) lengkap dengan kisaran harga per m², fitur, dan tombol konsultasi WhatsApp spesifik.
3. `KontraktorProjects.tsx` - Portofolio 4 proyek pengerjaan nyata fiktif dengan informasi luas bangunan, durasi pengerjaan, lokasi, dan rincian spesifikasi material tanpa aset gambar eksternal (menggunakan styling modern gradien Tailwind v4 `bg-linear-to-*`).
4. `KontraktorRAB.tsx` - Estimasi biaya RAB transparan per m² (Paket Standar, Paket Premium, dan Renovasi Kustom) serta 4 langkah mudah alur kerja pelaksanaan konstruksi.
5. `KontraktorContact.tsx` - Informasi workshop dan kantor, jam operasional, jaminan garansi SPK resmi, pilihan topik konsultasi cepat WhatsApp, serta FAQ seputar survei dan skema pembayaran termin.

Seluruh tombol CTA mengarah ke nomor WhatsApp resmi Andalan Tech via helper `waLink` (`src/lib/demo/wa.ts`).

## File yang Dibuat
1. `src/lib/demo/items/kontraktor.ts` - Item registry demo dengan `slug: "kontraktor"`, kategori `"Properti, Travel & Otomotif"`, package tier `"bisnis"`, emoji `"👷"`, dan aksen warna amber/yellow.
2. `src/components/demo/kontraktor/KontraktorHero.tsx` - Komponen hero section (<200 baris).
3. `src/components/demo/kontraktor/KontraktorServices.tsx` - Komponen layanan konstruksi (<200 baris).
4. `src/components/demo/kontraktor/KontraktorProjects.tsx` - Komponen portofolio proyek (<200 baris).
5. `src/components/demo/kontraktor/KontraktorRAB.tsx` - Komponen estimasi RAB dan tahapan kerja (<200 baris).
6. `src/components/demo/kontraktor/KontraktorContact.tsx` - Komponen kontak, workshop, quick action WA, dan FAQ (<200 baris).
7. `src/app/demo/kontraktor/page.tsx` - Halaman App Router yang menyusun kelima komponen dengan `export const metadata`.
8. `docs/CHANGES/ANDALAN-55.md` - Dokumen ringkasan perubahan ini.

## Catatan Isolasi Kode & Kepatuhan Aturan
- `src/lib/demo/demos.ts` dan `scripts/gen-demos.mjs` tidak disentuh.
- Tidak menyentuh file demo lain, komponen utama, layout global, `schema/`, `tests/setup/`, atau `AGENTS.md`.
- Tidak ada dependensi baru yang ditambahkan ke `package.json`.
- Seluruh styling warna gradien mematuhi Tailwind v4 (`bg-linear-to-*`, bukan `bg-gradient-to-*`).
- Tanpa gambar eksternal (menggunakan ikon Lucide, emoji, dan blok visual Tailwind).
- Tidak melakukan git commit atau push ke remote.

## Verifikasi
- `npm test` dijalankan di foreground dan dilaporkan persis:
  ```
  npm error Missing script: "test"
  npm error
  npm error To see a list of scripts, run:
  npm error   npm run
  npm error A complete log of this run can be found in: /home/msytc/.npm/_logs/2026-10-18T06_52_33_280Z-debug-0.log
  ```
  (package.json tidak mendefinisikan script "test").
- `pnpm install --frozen-lockfile && pnpm build` dijalankan dan sukses (exit code 0):
  - `✓ Compiled successfully in 35.7s`
  - `✓ Finished TypeScript in 61s`
  - `✓ Generating static pages (59/59)`
  - Rute `○ /demo/kontraktor` berhasil dibuat dan diprerender sebagai halaman statis.
