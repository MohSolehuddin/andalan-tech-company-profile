# Ringkasan Perubahan: ANDALAN-59

## Judul
Menambahkan Halaman Demo Kursus Komputer & Coding (`/demo/kursus-it`)

## Deskripsi
Menambahkan satu halaman demo portofolio baru bertema Kursus Komputer & Coding dengan brand fiktif "Kode Kursus Komputer & IT". Halaman menyusun 5 komponen section kecil:
1. `KursusHero`: Section hero dengan badge topik, judul brand, subjudul deskripsi keahlian digital, CTA WhatsApp & tombol pilihan program, serta 4 poin kepercayaan (100% Praktik Langsung, Sertifikat Resmi, Kelas Privat & Reguler, Bimbingan Mentor).
2. `KursusPrograms`: Katalog 4 program utama (Komputer Perkantoran Modern, Desain Grafis & Konten Visual, Web Development Siap Proyek, Coding & Game Anak-Anak) dengan silabus ringkas, durasi, level keahlian, dan tombol tanya per program via WhatsApp.
3. `KursusSchedulePrice`: Struktur transparansi harga paket (Kelas Reguler, Kelas Privat 1-on-1, In-House / Korporat) beserta opsi waktu belajar fleksibel (Pagi, Siang, Malam/After-Office, Weekend) dan tombol pemesanan paket via WhatsApp.
4. `KursusCertificates`: Ilustrasi mock sertifikat kelulusan terverifikasi dengan QR Code & nomor registrasi resmi, rincian keunggulan (verifikasi online, portofolio riil, garansi mengulang gratis, akses komunitas alumni), dan CTA WhatsApp.
5. `KursusContact`: Alur 3 langkah pendaftaran praktis, info lab komputer & fasilitas (spesifikasi PC, WiFi, AC, jam buka operasional), dan kartu CTA WhatsApp konsultasi & pendaftaran langsung.

Seluruh CTA WhatsApp menggunakan helper `waLink` dari `src/lib/demo/wa.ts` dan visual dibangun tanpa gambar eksternal (gradien Tailwind v4 `bg-linear-to-*`, emoji, dan ikon Lucide).

## File yang Dibuat
1. `src/components/demo/kursus-it/KursusHero.tsx` - Section hero dengan badge topik, poin kepercayaan, dan CTA WhatsApp.
2. `src/components/demo/kursus-it/KursusPrograms.tsx` - Katalog 4 program kursus (office, desain, web, coding anak) dan tombol silabus via WhatsApp.
3. `src/components/demo/kursus-it/KursusSchedulePrice.tsx` - Paket harga reguler, privat, korporat dan jadwal fleksibel.
4. `src/components/demo/kursus-it/KursusCertificates.tsx` - Visual mock sertifikat kelulusan resmi, poin kredensial, dan CTA WhatsApp.
5. `src/components/demo/kursus-it/KursusContact.tsx` - Alur 3 langkah pendaftaran, info lab komputer, jam operasional, dan CTA pendaftaran via WhatsApp.
6. `src/app/demo/kursus-it/page.tsx` - Halaman App Router yang merender kelima komponen di dalam `<main>` dengan `export const metadata`.
7. `src/lib/demo/items/kursus-it.ts` - Item registry demo dengan `slug: "kursus-it"`, `category: "Pendidikan & Teknologi"`, `package: "starter"`, dan aksen warna indigo/blue.
8. `docs/CHANGES/ANDALAN-59.md` - Dokumen ringkasan perubahan ini.

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
  npm error A complete log of this run can be found in: /home/msytc/.npm/_logs/2026-10-18T06_54_12_309Z-debug-0.log
  ```
  (repo tidak memiliki skrip test di package.json)
- `pnpm install --frozen-lockfile && pnpm build` dijalankan di foreground dan berhasil hijau (exit code 0, `✓ Compiled successfully`, `✓ Generating static pages (59/59)`, rute `○ /demo/kursus-it` ter-prerender statis tanpa error).
