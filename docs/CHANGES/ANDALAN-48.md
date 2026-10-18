# Ringkasan Perubahan: ANDALAN-48

## Judul
Menambahkan Halaman Demo Jasa Pindahan & Ekspedisi (`/demo/logistik`)

## Deskripsi
Menambahkan satu halaman demo portofolio baru bertema Jasa Pindahan & Ekspedisi dengan brand fiktif "PindahAja Logistik & Ekspedisi". Halaman menyusun lima komponen section kecil:

1. Hero + CTA WhatsApp dan badge keunggulan (asuransi barang, armada & driver sendiri, packing rapi).
2. Layanan: pindahan rumah, pindahan kantor, kirim barang/paket besar, kirim kendaraan, packing & crating, serta gudang & penyimpanan.
3. Estimasi biaya interaktif: pilihan jenis layanan, jarak tempuh (dalam kota/antar kota/antar pulau), ukuran barang, dan layanan tambahan; kalkulator menampilkan kisaran biaya dan tombol order WhatsApp berisi rangkuman otomatis.
4. Cara kerja 4 langkah (chat WhatsApp, survei & estimasi, packing & angkut, tiba & dicek bersama) plus strip statistik kepercayaan.
5. Kontak & order WhatsApp, jam layanan, area layanan, dan footer demo.

Seluruh CTA WhatsApp menggunakan helper `waLink` dari `src/lib/demo/wa.ts` dan visual dibangun tanpa gambar eksternal (gradien Tailwind v4 `bg-linear-to-*`, emoji, dan ikon Lucide).

## File yang Dibuat
1. `src/components/demo/logistik/LogistikHero.tsx` - Section hero dengan badge brand, CTA estimasi WhatsApp, dan poin kepercayaan.
2. `src/components/demo/logistik/LogistikServices.tsx` - Grid enam layanan pindahan dan ekspedisi.
3. `src/components/demo/logistik/LogistikEstimasi.tsx` - Kalkulator estimasi biaya interaktif (client component) dengan order WhatsApp.
4. `src/components/demo/logistik/LogistikSteps.tsx` - Alur kerja empat langkah dan statistik kepercayaan.
5. `src/components/demo/logistik/LogistikContact.tsx` - Informasi kontak, area layanan, order WhatsApp, dan footer demo.
6. `src/app/demo/logistik/page.tsx` - Halaman App Router yang merender kelima komponen di dalam `<main>` dengan `export const metadata`.
7. `src/lib/demo/items/logistik.ts` - Item registry demo dengan `slug: "logistik"`, `category: "Jasa & Profesional"`, `package: "starter"`, aksen biru/indigo.
8. `docs/CHANGES/ANDALAN-48.md` - Dokumen ringkasan perubahan ini.

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
  npm error A complete log of this run can be found in: /home/msytc/.npm/_logs/2026-10-18T06_40_48_951Z-debug-0.log
  ```
  (repo tidak memiliki skrip test di package.json)
- `pnpm install --frozen-lockfile && pnpm build` dijalankan di foreground dan berhasil hijau (exit code 0, `✓ Compiled successfully in 7.9s`, `✓ Generating static pages (52/52) in 2.1s`, rute `○ /demo/logistik` ter-prerender statis tanpa error).
- `pnpm lint` dijalankan sebagai pemeriksaan tambahan: 2 error dan 3 warning yang seluruhnya sudah ada sebelumnya di file lain (`Particle.tsx`, `BengkelHero.tsx`, `OlehContact.tsx`, `PerikananProducts.tsx`, `PropertiListings.tsx`); `npx eslint` pada seluruh file baru demo logistik keluar dengan exit code 0 (tanpa temuan).
