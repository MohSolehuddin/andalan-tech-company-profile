# Ringkasan Perubahan: ANDALAN-47

## Judul
Menambahkan Halaman Demo Percetakan & Digital Printing (`/demo/percetakan`)

## Deskripsi
Menambahkan satu halaman demo portofolio baru bertema Percetakan & Digital Printing dengan brand fiktif "Cetak Cepat Digital Printing". Halaman menyusun empat komponen section kecil:
1. **PercetakanHero**: Section hero dengan badge percetakan kilat Situbondo, headline penawaran cetak cepat & tajam, CTA pemesanan & kirim file WhatsApp, serta badge keunggulan resolusi tinggi, kilat hari ini, dan order satuan.
2. **PercetakanServices**: Daftar layanan lengkap mencakup Banner & Spanduk (outdoor/indoor), Stiker & Label Kemasan (kiss-cut/die-cut), Kartu Nama & ID Card PVC, Kaos Sablon DTF, Undangan Pernikahan/Khitan, serta Brosur/Flyer/Poster promosi.
3. **PercetakanPricing**: Daftar harga transparan & minimal order per produk/paket (Spanduk mulai Rp18.000/m², Stiker A3+ mulai Rp14.000/lbr min. 3 lbr, Kartu Nama mulai Rp35.000/box, Kaos DTF mulai Rp65.000/pcs bisa satuan, Undangan mulai Rp1.500/pcs min. 100 pcs, Brosur A5 mulai Rp195.000/rim), lengkap dengan tombol WhatsApp langsung per item.
4. **PercetakanContact**: Alur pemesanan mudah 3 langkah via WhatsApp (Kirim File -> ACC Proofing -> Cetak & Kirim/Ambil), informasi workshop di Situbondo, jam operasional mesin, hotline WhatsApp, dan garansi pengiriman.

Seluruh CTA WhatsApp menggunakan helper `waLink` dari `src/lib/demo/wa.ts` dan visual dibangun tanpa gambar eksternal (gradien Tailwind v4 `bg-linear-to-*`, emoji, dan ikon Lucide).

## File yang Dibuat
1. `src/components/demo/percetakan/PercetakanHero.tsx` - Section hero dengan badge, headline, poin keunggulan, dan CTA WhatsApp.
2. `src/components/demo/percetakan/PercetakanServices.tsx` - Grid katalog 6 layanan utama percetakan dengan spesifikasi bahan dan fitur.
3. `src/components/demo/percetakan/PercetakanPricing.tsx` - Rincian harga satuan, minimal order, estimasi waktu pengerjaan, dan tombol order WhatsApp.
4. `src/components/demo/percetakan/PercetakanContact.tsx` - Panduan langkah pemesanan via WhatsApp, alamat workshop, jam buka, dan footer demo.
5. `src/app/demo/percetakan/page.tsx` - Halaman App Router yang menyusun keempat komponen di dalam `<main>` dengan `export const metadata`.
6. `src/lib/demo/items/percetakan.ts` - Item registry demo dengan `slug: "percetakan"`, `category: "Jasa & Profesional"`, `package: "starter"`, dan styling aksen oranye-rose.
7. `docs/CHANGES/ANDALAN-47.md` - Dokumen ringkasan perubahan ini.

## Catatan
- `src/lib/demo/demos.ts` dan `scripts/gen-demos.mjs` tidak disentuh (sesuai aturan).
- Item demo lain, halaman/komponen utama, layout global, `schema/`, `tests/setup/`, dan `AGENTS.md` tidak diubah.
- Tidak ada dependensi baru dan tidak ada gambar eksternal; Tailwind v4 memakai `bg-linear-to-*`.
- Tidak ada git commit dan tidak ada push ke remote.

## Verifikasi
- `npm test` dijalankan di foreground:
  ```
  npm error Missing script: "test"
  npm error
  npm error To see a list of scripts, run:
  npm error   npm run
  npm error A complete log of this run can be found in: /home/msytc/.npm/_logs/2026-10-18T06_42_11_579Z-debug-0.log
  ```
  (repo tidak memiliki skrip test di package.json)
- `pnpm install --frozen-lockfile && pnpm build` dijalankan di foreground dan berhasil hijau (exit code 0, `✓ Compiled successfully`, rute `○ /demo/percetakan` ter-prerender statis tanpa error).
