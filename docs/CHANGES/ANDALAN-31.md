# Ringkasan Perubahan: ANDALAN-31

## Judul
Penambahan Demo Portfolio Baru: Toko Oleh-Oleh Khas Daerah (`oleh-oleh`)

## Deskripsi
Menambahkan demo website portfolio baru bertema Toko Oleh-Oleh Khas Daerah dengan slug `oleh-oleh` (brand: "Oleh-Oleh Khas Situbondo"). Halaman demo ini menyediakan informasi produk khas daerah (tape singkong manis besek, kerupuk ikan tenggiri pesisir, terasi udang rebon asli Besuki, rengginang lorjuk, kopi robusta Kayumas, dan keripik mangga arumanis), paket hampers & bingkisan eksklusif, informasi garansi & pengiriman cepat ke Jabodetabek, serta tombol pemesanan instan via WhatsApp (`waLink`).

## File yang Dibuat
1. `src/lib/demo/items/oleh-oleh.ts` - Registrasi demo item `oleh-oleh` dengan kategori `Kuliner & F&B` dan tier paket `bisnis`.
2. `src/components/demo/oleh-oleh/OlehHero.tsx` - Komponen hero banner dengan CTA pemesanan WhatsApp, badge keaslian produk lokal, dan paket best seller.
3. `src/components/demo/oleh-oleh/OlehCatalog.tsx` - Komponen katalog interaktif berisi produk oleh-oleh khas daerah dengan tab filter kategori dan tombol order WhatsApp.
4. `src/components/demo/oleh-oleh/OlehHampers.tsx` - Komponen pilihan paket hampers bingkisan keluarga dan kantor dengan rincian kemasan besek bambu dan kartu ucapan.
5. `src/components/demo/oleh-oleh/OlehShipping.tsx` - Komponen informasi pengiriman kilat ke Jabodetabek (1-2 hari), kemasan vacuum seal, bubble wrap berlapis, dan garansi sampai aman.
6. `src/components/demo/oleh-oleh/OlehContact.tsx` - Komponen kontak, lokasi outlet Jl. Raya Pantura Situbondo, jam operasional, dan tautan WhatsApp.
7. `src/app/demo/oleh-oleh/page.tsx` - Halaman App Router untuk rute `/demo/oleh-oleh` yang menyusun seluruh komponen demo dan metadata halaman.
8. `docs/CHANGES/ANDALAN-31.md` - Dokumen ringkasan perubahan ini.

## File yang Diubah
Tidak ada file existing yang diubah.

## Catatan
- Mengikuti aturan Tailwind v4 (`bg-linear-to-*`).
- Tidak menggunakan gambar eksternal (menggunakan styling gradien, emoji, dan ikon Lucide).
- `src/lib/demo/demos.ts` dan `scripts/gen-demos.mjs` tidak disentuh.
- Komponen utama dan layout global tidak disentuh.
- Tidak ada dependensi baru yang ditambahkan.

## Verifikasi
- Menjalankan `npm test` di foreground.
- Menjalankan `pnpm install --frozen-lockfile && pnpm build` di foreground hingga lolos (clean build).
