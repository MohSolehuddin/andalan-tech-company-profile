# Ringkasan Perubahan: ANDALAN-19

## Judul
Tambah Halaman Demo Portofolio Toko Tani / Sarana Pertanian (`tani`)

## Deskripsi
Menambahkan 1 halaman demo portofolio baru bertema Toko Tani / Sarana Pertanian dengan slug `tani` untuk daerah Situbondo. Halaman ini mencakup hero dengan CTA WhatsApp, katalog produk sarana tani interaktif (pupuk, benih, pestisida/herbisida, alsintan, dan pakan ternak) dengan filter kategori, keunggulan layanan (stok lengkap, harga grosir, antar sawah, konsultasi gratis), paket layanan teknis & sewa alsintan, serta informasi kontak toko.

## File yang Dibuat
1. `src/lib/demo/items/tani.ts` - Entri registry item demo `tani` dengan tipe `DemoItem`, aksen hijau (`from-green-600 to-lime-500`), dan highlight fitur.
2. `src/components/demo/tani/TaniHero.tsx` - Komponen hero dengan badge sarana pertanian Situbondo, trust metric, CTA WhatsApp, dan anchor ke katalog.
3. `src/components/demo/tani/TaniProducts.tsx` - Komponen katalog produk interaktif dengan filter kategori (Semua, Pupuk, Benih, Pestisida & Herbisida, Alat & Mesin Tani, Pakan) dan pemesanan via WhatsApp.
4. `src/components/demo/tani/TaniWhy.tsx` - Komponen keunggulan (stok lengkap, harga grosir/gapoktan, pengantaran ke sawah, konsultasi tani gratis).
5. `src/components/demo/tani/TaniServices.tsx` - Komponen layanan (pengiriman langsung ke sawah/lahan, sewa mesin pertanian/alsintan, bimbingan pemilihan varietas & dosis obat).
6. `src/components/demo/tani/TaniContact.tsx` - Komponen kontak, jam buka toko pagi, alamat Panji Situbondo, dan tombol WhatsApp.
7. `src/app/demo/tani/page.tsx` - Halaman demo yang menyusun komponen-komponen di atas serta mengekspor `metadata`.
8. `docs/CHANGES/ANDALAN-19.md` - Dokumen ringkasan perubahan ini.

## File yang Diubah
Tidak ada (sesuai aturan keras, tidak mengubah file komponen utama, `demos.ts`, maupun skrip generator).

## Catatan
- Tidak ada penambahan dependensi baru.
- Menggunakan Tailwind v4 syntax (`bg-linear-to-*` tanpa `bg-gradient-to-*`).
- Tanpa gambar eksternal (menggunakan gradient, emoji, dan icon Lucide).
- Seluruh komponen berukuran ringkas di bawah 200 baris.

## Verifikasi
- `pnpm install --frozen-lockfile && pnpm build` (berhasil hijau, kode keluar 0, 26/26 halaman statis termasuk `/demo/tani` berhasil ter-generate).
- `npm test` (output persis: `npm error Missing script: "test"` karena repositori belum mendefinisikan script test di `package.json`).
- `wc -l src/lib/demo/items/tani.ts src/components/demo/tani/*.tsx src/app/demo/tani/page.tsx` (seluruh file di bawah 200 baris).

