# Ringkasan Perubahan: ANDALAN-49

## Judul
Menambahkan Halaman Demo Biro Perjalanan Umroh & Haji (`/demo/umroh`)

## Deskripsi
Menambahkan satu halaman demo portofolio baru bertema Biro Perjalanan Umroh & Haji dengan brand fiktif "Barokah Umroh & Haji". Halaman menyusun lima komponen section:
1. `UmrohHero`: Hero banner dengan badge izin resmi Kemenag RI (PPIU No. 412/2021 Akreditasi A), ringkasan keunggulan, serta CTA WhatsApp dan penelusuran paket.
2. `UmrohPackages`: Katalog 4 paket ibadah (Umroh Reguler 9 Hari, Umroh VIP Bintang 5 12 Hari, Umroh Awal Ramadhan 12 Hari, dan Haji Khusus / Furoda Mujamalah Kuota Kerajaan) lengkap dengan harga, durasi, fasilitas hotel bintang dekat pelataran, maskapai direct, rincian visa, dan tombol konsultasi WA per paket.
3. `UmrohSchedules`: Jadwal keberangkatan pasti musim 1448 H / tahun 2026-2027 beserta sisa kursi (seat), maskapai penerbangan, dan booking seat via WhatsApp.
4. `UmrohFeatures`: Prinsip 5 Pasti Umroh Kemenag (Pasti Berizin, Pasti Jadwal/Maskapai, Pasti Hotel, Pasti Visa, Bimbingan Sesuai Sunnah, dan Pelayanan Sepenuh Hati).
5. `UmrohContact`: Informasi alamat kantor pusat, jam operasional, persyaratan berkas pendaftaran (paspor, buku kuning, dll.), dan tombol kontak konsultasi WhatsApp 24/7.

Seluruh CTA WhatsApp menggunakan helper `waLink` dari `src/lib/demo/wa.ts` dan visual dibangun tanpa gambar eksternal (gradien Tailwind v4 `bg-linear-to-*`, emoji, dan ikon Lucide).

## File yang Dibuat
1. `src/components/demo/umroh/UmrohHero.tsx` - Section hero dengan badge izin Kemenag, CTA WhatsApp, dan poin kepercayaan.
2. `src/components/demo/umroh/UmrohPackages.tsx` - Katalog paket umroh & haji lengkap dengan harga, durasi, hotel, visa, dan WhatsApp booking.
3. `src/components/demo/umroh/UmrohSchedules.tsx` - Tabel jadwal keberangkatan pasti, maskapai penerbangan, sisa seat, dan pemesanan kursi.
4. `src/components/demo/umroh/UmrohFeatures.tsx` - Keunggulan layanan dan implementasi prinsip 5 Pasti Umroh Kemenag.
5. `src/components/demo/umroh/UmrohContact.tsx` - Alamat kantor, jam buka, persyaratan berkas pendaftaran, dan konsultasi WhatsApp.
6. `src/app/demo/umroh/page.tsx` - Halaman App Router yang merender kelima komponen di dalam `<main>` dengan `export const metadata`.
7. `src/lib/demo/items/umroh.ts` - Item registry demo dengan `slug: "umroh"`, `category: "Properti, Travel & Otomotif"`, `package: "bisnis"`, dan aksen warna emerald.
8. `docs/CHANGES/ANDALAN-49.md` - Dokumen ringkasan perubahan ini.

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
  npm error A complete log of this run can be found in: /home/msytc/.npm/_logs/2026-10-18T06_41_52_265Z-debug-0.log
  ```
- `pnpm install --frozen-lockfile && pnpm build` dijalankan di foreground dan berhasil hijau (exit code 0, `✓ Compiled successfully`, rute `○ /demo/umroh` ter-prerender statis tanpa error).
