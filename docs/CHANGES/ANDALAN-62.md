# Ringkasan Perubahan: ANDALAN-62

## Judul
Design Pass Human-Grade untuk 10 Demo Kategori "Jasa & Profesional"

## Deskripsi
Merapikan estetika "AI slop" pada 10 halaman demo kategori jasa & profesional
(`jasa`, `legal`, `asuransi`, `laundry`, `bengkel`, `fotografi`, `wedding`,
`home-service`, `percetakan`, `logistik`) tanpa mengubah data/fakta, slug,
struktur, maupun dependency. Perbaikan bersifat mekanis sesuai skill
`human-grade-web-design`:

- **R1 (blur blob)**: Menghapus 2 div dekoratif `blur-3xl` di `WeddingHero`
  (blob fuchsia & rose tanpa konten).
- **R2 (colored drop-shadow)**: `shadow-lg shadow-orange-500/*` pada CTA
  `PercetakanHero` dan `PercetakanContact` diganti `shadow-sm`.
- **R3 (`rounded-3xl` → `rounded-xl`)**: 5 titik pada `LaundryContact`,
  `LaundryOrder`, `BengkelBooking`, `BengkelTestimonials`, `PercetakanContact`.
- **R4 (kontras teks)**: `text-*-400` di latar terang dinaikkan ke `-600`
  (`LegalProcess` tahap, ikon `LegalTeam`, label "Sudah Termasuk"
  `WeddingPackages`, harga coret `BengkelBooking`). Teks di latar gelap
  dibiarkan.
- **R5 (warna neon)**: Aksen fuchsia/purple/violet di halaman wedding diganti
  rose (aksen yang sudah ada di komponen), `cyan` di `home-service` diganti
  `sky` (aksen yang sudah ada), gradien neon di `JasaPortfolio`/`FotoGallery`
  diganti aksen netral/aksen eksisting.
- **R6 (focus state)**: Semua tombol/link CTA pada 10 halaman ditambah
  `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2`
  (termasuk tombol filter portofolio dan tombol pilih paket).
- **R7 (copy buzzword)**: "secara seamless" (testimoni wedding), "tanpa batas
  gradasi" (harga percetakan), dan "bebas batas" (spesifikasi DTF) diganti
  kalimat konkret dan spesifik.

## File yang Diubah (42 file, hanya di dalam scope)
1. `src/components/demo/jasa/JasaHero.tsx`, `JasaContact.tsx`, `JasaPortfolio.tsx`
2. `src/components/demo/legal/LegalHero.tsx`, `LegalContact.tsx`, `LegalProcess.tsx`, `LegalTeam.tsx`
3. `src/components/demo/asuransi/AsuransiHero.tsx`, `AsuransiProducts.tsx`, `AsuransiSteps.tsx`, `AsuransiContact.tsx`
4. `src/components/demo/laundry/LaundryHero.tsx`, `LaundryContact.tsx`, `LaundryOrder.tsx`, `LaundryPricing.tsx`, `LaundryServices.tsx`
5. `src/components/demo/bengkel/BengkelHero.tsx`, `BengkelContact.tsx`, `BengkelServices.tsx`, `BengkelBooking.tsx`, `BengkelTestimonials.tsx`
6. `src/components/demo/fotografi/FotoHero.tsx`, `FotoContact.tsx`, `FotoPackages.tsx`, `FotoGallery.tsx`
7. `src/components/demo/wedding/WeddingHero.tsx`, `WeddingContact.tsx`, `WeddingServices.tsx`, `WeddingPackages.tsx`, `WeddingGallery.tsx`
8. `src/components/demo/home-service/HomeServiceHero.tsx`, `HomeServiceBooking.tsx`, `HomeServicePackages.tsx`, `HomeServiceServices.tsx`, `HomeServiceWhy.tsx`
9. `src/components/demo/percetakan/PercetakanHero.tsx`, `PercetakanPricing.tsx`, `PercetakanServices.tsx`, `PercetakanContact.tsx`
10. `src/components/demo/logistik/LogistikHero.tsx`, `LogistikEstimasi.tsx`, `LogistikContact.tsx`

File `src/app/demo/*/page.tsx` pada 10 kategori tidak diubah (tidak memuat
pelanggaran). Tidak ada perubahan pada schema, tests/setup, AGENTS.md, data
slug, maupun dependency.

## Catatan
- Tidak ada git commit dan tidak ada push ke remote.

## Verifikasi
- `npm test` dijalankan di foreground dan dilaporkan persis:
  ```
  npm error Missing script: "test"
  npm error
  npm error To see a list of scripts, run:
  npm error
  npm error   npm run
  npm error A complete log of this run can be found in: /home/msytc/.npm/_logs/2026-10-18T07_43_20_643Z-debug-0.log
  ```
  (repo tidak memiliki skrip test di package.json)
- `pnpm install --frozen-lockfile` sukses (429ms), lalu `pnpm build` exit 0:
  `✓ Compiled successfully in 21.9s`, `✓ Generating static pages (67/67) in 7.0s`,
  seluruh rute `/demo/*` (termasuk 10 kategori di scope) ter-prerender statis.
- `pnpm lint` masih gagal karena 2 error pre-existing DI LUAR scope
  (`src/components/Particle.tsx` setState-in-effect, `OlehContact.tsx` `<a>`
  internal), tidak ada error baru pada file scope.
