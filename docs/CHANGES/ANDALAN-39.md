# Ringkasan Perubahan: ANDALAN-39

## Judul
Menambahkan Halaman Demo Toko Madura (`/demo/toko-madura`)

## Deskripsi
Menambahkan satu halaman demo portofolio baru bertema Toko Madura (Sembako & Kebutuhan Pokok) dengan brand fiktif "Toko Madura Barokah". Halaman menyusun lima komponen section kecil:
1. `TokoMaduraHero`: Hero section dengan identitas 24 jam nonstop, CTA pesan WhatsApp & lihat katalog sembako, dan sorotan keunggulan.
2. `TokoMaduraFeatures`: Keunggulan belanja di Toko Madura (buka 24 jam, harga grosir & eceran, antar cepat, produk segar & berkualitas).
3. `TokoMaduraCatalog`: Katalog sembako & kebutuhan pokok dengan filter kategori (Beras, Minyak & Gula, Telur & Bumbu, Kebutuhan Rumah), keterangan harga ecer & info grosir, serta tombol pesan WhatsApp per produk.
4. `TokoMaduraGrosir`: Layanan paket grosir, paket sembako hemat, kulakan warung, dan fasilitas antar kilat ke rumah dengan tombol order WhatsApp.
5. `TokoMaduraContact`: Informasi jam operasional 24 jam nonstop, alamat toko, kontak WhatsApp, CTA konsultasi/order, dan footer demo.

Seluruh CTA pemesanan mengarah ke WhatsApp via helper `waLink` dari `src/lib/demo/wa.ts`. Tidak ada gambar eksternal yang digunakan (semua visual menggunakan emoji, gradien Tailwind v4 `bg-linear-to-*`, dan ikon Lucide React).

## File yang Dibuat
1. `src/lib/demo/items/toko-madura.ts` - Item registry demo dengan `slug: "toko-madura"`, `category: "Retail & Toko"`, `package: "bisnis"`, dan aksen emerald.
2. `src/components/demo/toko-madura/TokoMaduraHero.tsx` - Komponen hero dengan badge 24 jam dan CTA order WhatsApp.
3. `src/components/demo/toko-madura/TokoMaduraFeatures.tsx` - Komponen 4 keunggulan toko madura.
4. `src/components/demo/toko-madura/TokoMaduraCatalog.tsx` - Komponen katalog produk sembako dengan filter kategori dan order WhatsApp per item.
5. `src/components/demo/toko-madura/TokoMaduraGrosir.tsx` - Komponen penawaran paket grosir dan layanan antar ke rumah.
6. `src/components/demo/toko-madura/TokoMaduraContact.tsx` - Komponen kontak, lokasi fisik, jam operasional 24 jam, dan footer demo.
7. `src/app/demo/toko-madura/page.tsx` - Rute App Router yang merender kelima komponen di dalam tag `<main>` dengan `export const metadata`.
8. `docs/CHANGES/ANDALAN-39.md` - Dokumen ringkasan perubahan ini.

## Catatan
- `src/lib/demo/demos.ts` dan `scripts/gen-demos.mjs` tidak disentuh (agregator dibuat otomatis oleh generator).
- Halaman/komponen utama, item demo lain, layout global, `schema/`, `tests/setup/`, dan `AGENTS.md` tidak diubah sama sekali.
- Tidak ada penambahan dependensi baru. Styling Tailwind v4 menggunakan `bg-linear-to-*`.
- Tidak ada commit git baru atau push ke remote sesuai aturan operasional.

## Verifikasi
- `npm test` dijalankan di foreground dan dilaporkan persis:
  ```
  npm error Missing script: "test"
  npm error
  npm error To see a list of scripts, run:
  npm error   npm run
  npm error A complete log of this run can be found in: /home/msytc/.npm/_logs/2026-10-18T06_33_03_607Z-debug-0.log
  ```
- `pnpm install --frozen-lockfile && pnpm build` dijalankan di foreground dan berhasil hijau (exit code 0, rute `○ /demo/toko-madura` ter-prerender statis sempurna).
