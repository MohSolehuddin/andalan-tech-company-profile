# Ringkasan Perubahan: ANDALAN-18

## Judul
Refactor Registry Demo Portofolio Menjadi File Terpisah per Item

## Deskripsi
Melakukan refactor pada registry demo di `andalan-tech-company-profile` agar setiap entri demo memiliki file datanya masing-masing di dalam folder `src/lib/demo/items/`. Hal ini memungkinkan penambahan demo baru secara paralel tanpa risiko konflik file pada file tunggal `demos.ts`. `demos.ts` kini bertindak sebagai agregator yang mengimpor seluruh item dan mengekspor `demoItems` serta re-export tipe `DemoItem`. Tidak ada perubahan pada teks, data, tampilan, maupun komponen demo.

## File yang Dibuat
1. `src/lib/demo/types.ts` - Definisi interface `DemoItem` yang dipindahkan persis dari `demos.ts`.
2. `src/lib/demo/items/*.ts` (19 file: `asuransi.ts`, `bengkel.ts`, `bimbel.ts`, `dashboard.ts`, `fitness.ts`, `fotografi.ts`, `jasa.ts`, `kafe.ts`, `katering.ts`, `klinik.ts`, `laundry.ts`, `properti.ts`, `restoran.ts`, `saas.ts`, `salon.ts`, `sekolah.ts`, `toko.ts`, `travel.ts`, `wedding.ts`) - Masing-masing menyimpan 1 entri demo dengan struktur `DemoItem` dan export default `item`.
3. `scripts/gen-demos.mjs` - Script generator Node ESM tanpa dependensi baru untuk membaca file di `src/lib/demo/items/` (terurut alfabetis) dan menulis ulang file agregator `src/lib/demo/demos.ts`.
4. `docs/CHANGES/ANDALAN-18.md` - Dokumen ringkasan perubahan ini.

## File yang Diubah
1. `src/lib/demo/demos.ts` - Diubah menjadi agregator yang mengimpor seluruh file di `src/lib/demo/items/`, mengekspor array `demoItems`, dan mengekspor tipe `DemoItem` dari `./types` agar backward-compatible dengan komponen lain (`Portfolio.tsx`, `src/app/demo/page.tsx`).

## Catatan
- Tidak ada dependensi baru yang ditambahkan.
- Komponen dan halaman yang mengonsumsi `demoItems` dan `DemoItem` tidak mengalami perubahan.
- Seluruh data demo identik 100%.

## Verifikasi
- `pnpm install --frozen-lockfile && pnpm build` (berhasil hijau, 25/25 halaman statis ter-generate).
- `ls src/lib/demo/items | wc -l` (tepat 19 file).
- `node scripts/gen-demos.mjs && git diff --stat` (idempoten dan valid).
- `npm test` (output persis: `npm error Missing script: "test"` karena repositori belum mendefinisikan script test di `package.json`).
