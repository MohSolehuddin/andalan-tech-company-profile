# Ringkasan Perubahan: ANDALAN-50

## Judul
Menambahkan Halaman Demo Dealer & Jual Beli Mobil (`/demo/dealer-mobil`)

## Deskripsi
Menambahkan satu halaman demo portofolio baru bertema Dealer & Jual Beli Mobil dengan brand fiktif "Auto Prima Dealer Mobil". Halaman menyusun lima komponen section kecil:
1. Hero + CTA WhatsApp "Tanya Stok" dan tombol lihat stok, lengkap dengan badge dealer terpercaya serta poin kepercayaan (garansi mesin, surat lengkap, inspeksi 120 titik).
2. Stok mobil berupa grid 6 unit (Toyota Avanza, Daihatsu Xenia, Honda Brio, Mitsubishi Xpander, Suzuki Ertiga, Toyota Innova Zenix) dengan harga OTR, tahun, kilometer, transmisi, bahan bakar, dan tombol tanya unit via WhatsApp.
3. Kredit/leasing interaktif: pilih unit, pilihan DP 20/30/40%, tenor 1–5 tahun, estimasi angsuran bunga flat, info partner leasing, dan CTA pengajuan kredit via WhatsApp.
4. Layanan tukar tambah (trade-in) dengan 3 langkah proses dan daftar keunggulan, lengkap CTA penilaian via WhatsApp.
5. Test drive gratis: penjadwalan test drive dan tanya umum via WhatsApp, kartu kontak showroom, jam operasional, hotline, email, dan footer demo.

Seluruh CTA WhatsApp menggunakan helper `waLink` dari `src/lib/demo/wa.ts` dan visual dibangun tanpa gambar eksternal (gradien Tailwind v4 `bg-linear-to-*`, emoji, dan ikon Lucide).

## File yang Dibuat
1. `src/components/demo/dealer-mobil/DealerMobilHero.tsx` - Section hero dengan badge dealer, CTA WhatsApp, dan poin kepercayaan.
2. `src/components/demo/dealer-mobil/DealerMobilStock.tsx` - Grid stok mobil dengan spesifikasi dan tombol WhatsApp per unit.
3. `src/components/demo/dealer-mobil/DealerMobilKredit.tsx` - Simulasi kredit/DP interaktif (client component) dan CTA pengajuan via WhatsApp.
4. `src/components/demo/dealer-mobil/DealerMobilTrade.tsx` - Layanan tukar tambah dengan 3 langkah proses dan CTA WhatsApp.
5. `src/components/demo/dealer-mobil/DealerMobilTestDrive.tsx` - Penjadwalan test drive, tanya via WhatsApp, dan kartu kontak showroom.
6. `src/app/demo/dealer-mobil/page.tsx` - Halaman App Router yang merender kelima komponen di dalam `<main>` dengan `export const metadata`.
7. `src/lib/demo/items/dealer-mobil.ts` - Item registry demo dengan `slug: "dealer-mobil"`, `category: "Properti, Travel & Otomotif"`, `package: "custom"`, dan aksen warna merah/slate.
8. `docs/CHANGES/ANDALAN-50.md` - Dokumen ringkasan perubahan ini.

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
  npm error A complete log of this run can be found in: /home/msytc/.npm/_logs/2026-10-18T06_40_30_839Z-debug-0.log
  ```
  (repo tidak memiliki skrip test di package.json)
- `pnpm install --frozen-lockfile && pnpm build` dijalankan di foreground dan berhasil hijau (exit code 0, `✓ Compiled successfully in 7.6s`, rute `○ /demo/dealer-mobil` ter-prerender statis tanpa error).
