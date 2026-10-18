# Ringkasan Perubahan: ANDALAN-57

## Judul
Menambahkan Halaman Demo TK/PAUD & Daycare (`/demo/paud`)

## Deskripsi
Menambahkan satu halaman demo portofolio baru bertema TK/PAUD & Daycare dengan brand fiktif "PAUD Ceria & Daycare" (slug: `paud`). Halaman menyusun lima komponen terpisah:
1. `PaudHero.tsx`: Section hero dengan badge jenjang PAUD/KB/Daycare, proposisi nilai, tombol WhatsApp untuk konsultasi dan pendaftaran, serta trust badges (lingkungan aman & CCTV, pendidik tersertifikasi, status PPDB).
2. `PaudPrograms.tsx`: Pilihan program terstruktur (Kelompok Bermain usia 2-3 tahun, TK A & TK B usia 4-6 tahun, Daycare harian usia 1-6 tahun, serta Sentra Eksplorasi Kreatif) lengkap dengan tag aktivitas dan CTA tanya silabus ke WhatsApp.
3. `PaudFacilities.tsx`: Fasilitas ramah anak (playground indoor & outdoor aman, ruang ber-AC dan air purifier, snack sehat tanpa pengawet, CCTV online, pojok baca Montessori, cek kesehatan) serta rincian jam layanan harian untuk tiap program.
4. `PaudPpdb.tsx`: Alur pendaftaran 4 langkah (konsultasi/trial class, berkas, observasi tumbuh kembang, konfirmasi), informasi gelombang pendaftaran & diskon uang pangkal early bird, testimoni orang tua, dan tombol klaim promo via WhatsApp.
5. `PaudContact.tsx`: Lokasi kampus, jam operasional layanan informasi, kontak WhatsApp & telepon, serta ajakan menjadwalkan kunjungan sekolah/trial class.

Seluruh CTA WhatsApp memanfaatkan helper `waLink` dari `src/lib/demo/wa.ts`. Seluruh styling menggunakan Tailwind v4 (`bg-linear-to-*`), tanpa gambar eksternal, dan tiap komponen dibuat ringkas (< 150 baris).

## File yang Dibuat
1. `src/components/demo/paud/PaudHero.tsx` - Komponen hero section dengan badge dan CTA WhatsApp.
2. `src/components/demo/paud/PaudPrograms.tsx` - Komponen kartu program jenjang KB, TK, Daycare, dan Sentra.
3. `src/components/demo/paud/PaudFacilities.tsx` - Komponen fasilitas dan tabel jadwal layanan harian.
4. `src/components/demo/paud/PaudPpdb.tsx` - Komponen alur PPDB, promo gelombang, dan testimoni.
5. `src/components/demo/paud/PaudContact.tsx` - Komponen info kontak, alamat kampus, dan ajakan kunjungan.
6. `src/app/demo/paud/page.tsx` - Halaman App Router yang merender komponen demo paud dan metadata.
7. `src/lib/demo/items/paud.ts` - Registri demo paud (`category: "Pendidikan & Teknologi"`, `package: "starter"`, nuansa rose/pink).
8. `docs/CHANGES/ANDALAN-57.md` - Dokumen ringkasan perubahan ini.

## Catatan
- `src/lib/demo/demos.ts` dan `scripts/gen-demos.mjs` tidak diubah manual.
- Komponen atau halaman lain di luar lingkup demo paud tidak disentuh.
- Tidak menambah dependensi baru.
- Tidak melakukan git commit atau push ke remote.

## Verifikasi
- `npm test` dijalankan di foreground dan menghasilkan keluaran persis:
  ```
  npm error Missing script: "test"
  npm error
  npm error To see a list of scripts, run:
  npm error   npm run
  npm error A complete log of this run can be found in: /home/msytc/.npm/_logs/2026-10-18T06_53_41_081Z-debug-0.log
  ```
- `pnpm install --frozen-lockfile && pnpm build` dijalankan di foreground dan berhasil sukses (exit code 0):
  ```
  ✓ Lockfile passes supply-chain policies (verified 3h ago)
  Lockfile is up to date, resolution step is skipped
  ...
  Done in 992ms using pnpm v12.14.0
  $ next build
  [baseline-browser-mapping] The data in this module is over two months old.  To ensure accurate Baseline data, please update: `npm i baseline-browser-mapping@latest -D`
     ▲ Next.js 16.0.0 (Turbopack)

     Creating an optimized production build ...
  [baseline-browser-mapping] The data in this module is over two months old.  To ensure accurate Baseline data, please update: `npm i baseline-browser-mapping@latest -D`
   ✓ Compiled successfully in 31.3s
     Finished TypeScript in 76s     ✓ Finished TypeScript in 76s 
  ...
     Collecting page data in 3.6s     ✓ Collecting page data in 3.6s 
  ...
   ✓ Generating static pages (59/59) in 7.6s
     Finalizing page optimization in 75.9ms     ✓ Finalizing page optimization in 75.9ms 

  Route (app)
  ...
  ├ ○ /demo/paud
  ...
  ○  (Static)  prerendered as static content
  ```
- File yang dibuat pada demo paud bebas dari error ESLint/TypeScript.
