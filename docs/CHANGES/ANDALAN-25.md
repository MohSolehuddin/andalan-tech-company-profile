# Ringkasan Perubahan: ANDALAN-25

## Judul
Menambahkan Kategori dan Tier Paket pada Registry Demo serta Mengelompokkan Halaman `/demo`

## Deskripsi
Menambahkan tipe kategori `DemoCategory` (6 kategori tetap) dan tipe tier paket `PackageTier` (`starter`, `bisnis`, `pro`, `custom`) ke dalam `src/lib/demo/types.ts`. Memperbarui seluruh 25 file demo item pada `src/lib/demo/items/*.ts` dengan menambahkan atribut `category` dan `package` sesuai spesifikasi tanpa mengubah field lain. Memperbarui halaman katalog `/demo` (`src/app/demo/page.tsx`) agar menampilkan seluruh demo terkelompok berdasarkan kategori sesuai urutan `DEMO_CATEGORIES`, terurut secara alfabetis berdasarkan `slug` dalam tiap kategori, menampilkan badge tier paket pada tiap kartu demo, serta mempertahankan tata letak dan desain visual yang ada. Menambahkan dokumentasi pemetaan kategori dan tier di `docs/CATEGORIES.md`.

## File yang Dibuat
1. `docs/CATEGORIES.md` - Dokumentasi ringkasan 6 kategori, distribusi demo, dan rincian tier paket untuk 25 demo website.
2. `docs/CHANGES/ANDALAN-25.md` - Dokumen ringkasan perubahan ini.

## File yang Diubah
1. `src/lib/demo/types.ts` - Menambahkan union type `DemoCategory`, `PackageTier`, array konstanta `DEMO_CATEGORIES`, serta field `category` dan `package` pada antarmuka `DemoItem`.
2. `src/lib/demo/items/*.ts` (25 file: `apotek.ts`, `asuransi.ts`, `barbershop.ts`, `bengkel.ts`, `bimbel.ts`, `dashboard.ts`, `fitness.ts`, `fotografi.ts`, `jasa.ts`, `kafe.ts`, `katering.ts`, `klinik.ts`, `laundry.ts`, `legal.ts`, `perikanan.ts`, `pesantren.ts`, `properti.ts`, `restoran.ts`, `saas.ts`, `salon.ts`, `sekolah.ts`, `tani.ts`, `toko.ts`, `travel.ts`, `wedding.ts`) - Menambahkan properti `category` dan `package` pada masing-masing item.
3. `src/app/demo/page.tsx` - Mengelompokkan tampilan demo berdasarkan `DEMO_CATEGORIES`, mengurutkan demo berdasarkan `slug` secara alfabetis, dan menampilkan badge tier pada setiap kartu demo.

## Catatan
- `src/lib/demo/demos.ts` dan `scripts/gen-demos.mjs` tidak diubah sama sekali.
- Komponen utama (Hero, Benefits, Pricing, Portfolio, Contact, Footer, layout global, dan page utama) tidak disentuh.
- Tidak ada dependensi baru yang ditambahkan.

## Verifikasi
- `grep -L "category:" src/lib/demo/items/*.ts` menghasilkan output kosong (semua 25 item memiliki properti `category`).
- `npm test` dijalankan di foreground dan dilaporkan persis (`npm error Missing script: "test"`).
- `pnpm install --frozen-lockfile && pnpm build` dijalankan di foreground dan berhasil hijau (clean build, 0 errors).
