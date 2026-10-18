# Ringkasan Perubahan: ANDALAN-60

## Judul
Menambahkan Halaman Demo Kampus / Politeknik (`/demo/kampus`)

## Deskripsi
Menambahkan satu halaman demo portofolio baru bertema Kampus / Politeknik dengan brand fiktif "Politeknik Nusantara". Halaman menyusun 5 komponen section kecil:
1. `KampusHero`: Section hero dengan badge topik, judul brand, subjudul kampus vokasi, CTA WhatsApp "Tanya PMB" & tombol lihat program studi, serta 3 poin kepercayaan (Akreditasi Baik Sekali, 24 program studi D3 & D4, PMB 2026/2027 dibuka).
2. `KampusPrograms`: Katalog 6 program studi jenjang D3/D4 (Teknik Informatika, Manajemen Bisnis Digital, Desain Komunikasi Visual, Teknik Mesin, Akuntansi, Keperawatan) dengan badge jenjang dan tombol tanya per program via WhatsApp.
3. `KampusFacilities`: Grid 6 fasilitas kampus (Gedung Kuliah Terpadu, Laboratorium Praktik, Perpustakaan Digital, Klinik Mahasiswa, Sport Center, Kampus Digital).
4. `KampusAdmission`: Alur 4 langkah pendaftaran PMB, 3 jalur pendaftaran (Mandiri, Prestasi, Beasiswa), 2 gelombang PMB 2026/2027, testimoni singkat, dan CTA WhatsApp.
5. `KampusContact`: Info kontak kampus/layanan PMB (alamat, jam layanan, telepon/WhatsApp, email) dan CTA konsultasi PMB via WhatsApp.

Seluruh CTA WhatsApp menggunakan helper `waLink` dari `src/lib/demo/wa.ts` dan visual dibangun tanpa gambar eksternal (gradien Tailwind v4 `bg-linear-to-*`, emoji, dan ikon Lucide).

## File yang Dibuat
1. `src/components/demo/kampus/KampusHero.tsx` - Section hero dengan badge, CTA PMB WhatsApp, dan poin kepercayaan.
2. `src/components/demo/kampus/KampusPrograms.tsx` - Katalog 6 program studi D3/D4 dengan CTA WhatsApp per program.
3. `src/components/demo/kampus/KampusFacilities.tsx` - Grid fasilitas kampus.
4. `src/components/demo/kampus/KampusAdmission.tsx` - Alur pendaftaran, jalur & beasiswa, gelombang PMB, dan CTA WhatsApp.
5. `src/components/demo/kampus/KampusContact.tsx` - Info kontak kampus, jam layanan PMB, dan CTA WhatsApp.
6. `src/app/demo/kampus/page.tsx` - Halaman App Router yang merender kelima komponen di dalam `<main>` dengan `export const metadata`.
7. `src/lib/demo/items/kampus.ts` - Item registry demo dengan `slug: "kampus"`, `category: "Pendidikan & Teknologi"`, `package: "bisnis"`, dan aksen warna emerald/teal.
8. `docs/CHANGES/ANDALAN-60.md` - Dokumen ringkasan perubahan ini.

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
  npm error A complete log of this run can be found in: /home/msytc/.npm/_logs/2026-10-18T07_03_39_533Z-debug-0.log
  ```
  (repo tidak memiliki skrip test di package.json)
- `pnpm install --frozen-lockfile && pnpm build` dijalankan di foreground dan berhasil hijau (exit code 0, `✓ Compiled successfully in 10.6s`, `✓ Generating static pages (66/66)`, rute `○ /demo/kampus` ter-prerender statis tanpa error).
