# Ringkasan Perubahan: ANDALAN-29

## Judul
Menambahkan Demo Portofolio Toko Kue & Dessert (`/demo/toko-kue`)

## Deskripsi
Menambahkan satu halaman demo portofolio baru bertema Toko Kue & Dessert dengan slug `toko-kue` (nama brand: "Manis Kue & Dessert") pada repositori `andalan-tech-company-profile`. Halaman demo menyajikan hero banner dengan highlight value toko, katalog produk interaktif (kue ulang tahun, dessert box, dan brownies fudgy) dilengkapi filter kategori dan tombol order WhatsApp langsung, alur pemesanan custom cake dan aksesoris topper akrilik/kayu, serta informasi operasional dapur/pengiriman berpendingin dengan CTA WhatsApp terintegrasi via helper `waLink`. Seluruh styling menggunakan Tailwind v4 (`bg-linear-to-*`), tanpa penambahan dependensi baru, dan tanpa gambar eksternal (menggunakan gradien warna dan emoji).

## File yang Dibuat
1. `src/lib/demo/items/toko-kue.ts` - Entri registry `DemoItem` untuk Manis Kue & Dessert (kategori "Kuliner & F&B", tier "starter", aksen pink/rose).
2. `src/components/demo/toko-kue/TokoKueHero.tsx` - Komponen hero dengan badge, deskripsi, CTA WhatsApp, dan poin keunggulan (66 baris).
3. `src/components/demo/toko-kue/TokoKueCatalog.tsx` - Katalog kue dengan filter tab kategori, kartu produk visual gradien & emoji, harga, serta tombol pesan WhatsApp (191 baris).
4. `src/components/demo/toko-kue/TokoKueCustom.tsx` - Bagian custom order cake, opsi topper akrilik/nama, alur pemesanan, dan bonus perlengkapan (116 baris).
5. `src/components/demo/toko-kue/TokoKueOrderWA.tsx` - Banner pemesanan WhatsApp, jaminan keamanan pengiriman kurir dingin, jam operasional, dan info outlet (90 baris).
6. `src/app/demo/toko-kue/page.tsx` - Halaman App Router yang menyusun seluruh komponen toko kue serta mendefinisikan `metadata` (22 baris).
7. `docs/CHANGES/ANDALAN-29.md` - Dokumen ringkasan perubahan ini.

## File yang Diubah
Tidak ada. `src/lib/demo/demos.ts` dan `scripts/gen-demos.mjs` tidak disentuh sesuai instruksi.

## Catatan
- Seluruh komponen di `src/components/demo/toko-kue/` berukuran di bawah 200 baris.
- Mengikuti konvensi kode proyek: ES6 (`const`, arrow functions), Tailwind v4 (`bg-linear-to-*`), dan helper `waLink` dari `@/lib/demo/wa`.
- Tidak ada dependensi baru yang ditambahkan.

## Verifikasi
- `pnpm install --frozen-lockfile && pnpm build` (berhasil hijau, rute `/demo/toko-kue` ter-generate statis).
- `npm test` (dijalankan di foreground, melaporkan output persis `npm error Missing script: "test"`).
