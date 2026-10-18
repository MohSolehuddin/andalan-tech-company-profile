# Ringkasan Perubahan: ANDALAN-58

## Judul
Menambahkan Halaman Demo Kursus Bahasa Asing (`/demo/kursus-bahasa`)

## Deskripsi
Menambahkan satu halaman demo portofolio baru bertema Kursus Bahasa Asing dengan brand fiktif "Lingua Kursus Bahasa". Halaman menyusun lima komponen section kecil:
1. Hero + CTA WhatsApp (daftar trial) dan badge keunggulan layanan.
2. Program tiga bahasa (Inggris, Arab, Mandarin) dengan level dasar sampai mahir beserta fokus materi.
3. Pilihan mode belajar: kelas online dan kelas offline, plus catatan kelas privat/corporate.
4. Harga tiga paket (Reguler, Intensif, Privat 1-on-1) lengkap fitur dan tombol daftar via WhatsApp per paket.
5. Alur pendaftaran trial gratis 3 langkah, kontak, jam layanan, dan CTA WhatsApp.

Seluruh CTA WhatsApp menggunakan helper `waLink` dari `src/lib/demo/wa.ts` dan visual dibangun tanpa gambar eksternal (gradien Tailwind v4 `bg-linear-to-*`, emoji, dan ikon Lucide).

## File yang Dibuat
1. `src/components/demo/kursus-bahasa/KursusHero.tsx` - Section hero dengan badge, CTA daftar trial WhatsApp, dan poin kepercayaan.
2. `src/components/demo/kursus-bahasa/KursusPrograms.tsx` - Kartu program Inggris, Arab, dan Mandarin dengan level dasar–mahir.
3. `src/components/demo/kursus-bahasa/KursusModes.tsx` - Pilihan kelas online dan offline beserta fiturnya.
4. `src/components/demo/kursus-bahasa/KursusPricing.tsx` - Tiga paket harga dengan fitur dan CTA pendaftaran via WhatsApp.
5. `src/components/demo/kursus-bahasa/KursusTrial.tsx` - Alur trial gratis, kontak, jam layanan, dan CTA WhatsApp.
6. `src/app/demo/kursus-bahasa/page.tsx` - Halaman App Router yang merender kelima komponen di dalam `<main>` dengan `export const metadata`.
7. `src/lib/demo/items/kursus-bahasa.ts` - Item registry demo dengan `slug: "kursus-bahasa"`, `category: "Pendidikan & Teknologi"`, `package: "starter"`, dan aksen warna blue/cyan.
8. `docs/CHANGES/ANDALAN-58.md` - Dokumen ringkasan perubahan ini.

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
  npm error A complete log of this run can be found in: /home/msytc/.npm/_logs/2026-10-18T06_52_53_167Z-debug-0.log
  ```
  (repo tidak memiliki skrip test di package.json)
- `pnpm install --frozen-lockfile && pnpm build` dijalankan di foreground dan berhasil hijau (exit code 0, `✓ Compiled successfully in 18.9s`, `✓ Generating static pages (59/59)`, rute `○ /demo/kursus-bahasa` ter-prerender statis tanpa error).
