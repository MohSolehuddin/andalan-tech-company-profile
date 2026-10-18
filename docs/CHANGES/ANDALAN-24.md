# Ringkasan Perubahan: ANDALAN-24

## Judul
Menambahkan Demo Portofolio Apotek & Farmasi (`/demo/apotek`)

## Deskripsi
Menambahkan satu halaman demo baru bertema Apotek & Farmasi dengan slug `apotek` pada repositori `andalan-tech-company-profile`. Halaman menampilkan hero dengan CTA WhatsApp, layanan (obat resep & bebas, vitamin/suplemen, alat kesehatan, antar/ojek obat, konsultasi apoteker, cek tensi & gula darah), produk populer, keunggulan (asli & BPOM, apoteker siaga, antar cepat), jam buka, serta kontak dengan CTA `waLink`. Tidak ada dependency baru dan tidak ada gambar eksternal (menggunakan gradient, emoji, dan blok warna).

## File yang Dibuat
1. `src/lib/demo/items/apotek.ts` - Entri `DemoItem` untuk demo Apotek Sehatra dengan aksen teal/emerald.
2. `src/components/demo/apotek/ApotekHero.tsx` - Hero, badge, CTA WhatsApp, dan trust indicators.
3. `src/components/demo/apotek/ApotekServices.tsx` - Enam kartu layanan apotek.
4. `src/components/demo/apotek/ApotekProducts.tsx` - Empat kartu produk populer dengan rentang harga dan CTA cek stok.
5. `src/components/demo/apotek/ApotekWhy.tsx` - Tiga keunggulan dan panel jam buka.
6. `src/components/demo/apotek/ApotekContact.tsx` - Kontak, alamat, jam operasional, dan CTA WhatsApp.
7. `src/app/demo/apotek/page.tsx` - Rute App Router yang menyusun seluruh komponen dan menetapkan `metadata`.
8. `docs/CHANGES/ANDALAN-24.md` - Dokumen ringkasan perubahan ini.

## File yang Diubah
Tidak ada. `src/lib/demo/demos.ts` dan `scripts/gen-demos.mjs` sengaja tidak disentuh sesuai ketentuan (agregator dibuat otomatis).

## Catatan
- Seluruh komponen berukuran di bawah 200 baris.
- Gaya kode mengikuti file demo yang sudah ada (ES6, arrow function pada callback, Tailwind v4 `bg-linear-to-*`).
- CTA WhatsApp menggunakan helper `waLink` dari `src/lib/demo/wa.ts`.

## Verifikasi
- `pnpm install --frozen-lockfile && pnpm build` (berhasil hijau, rute `/demo/apotek` ter-generate).
- `npm test` (output persis: `npm error Missing script: "test"` karena repositori belum mendefinisikan script test di `package.json`).
