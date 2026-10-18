# Ringkasan Perubahan: ANDALAN-62

## Judul
Design Pass Human-Grade untuk 10 Demo Kategori Kesehatan & Kecantikan

## Deskripsi
Melakukan perbaikan desain mekanis (tanpa mengubah data, fakta, slug, struktur, atau dependency) pada 10 demo kategori Kesehatan & Kecantikan: `klinik`, `apotek`, `salon`, `barbershop`, `fitness`, `dokter-gigi`, `klinik-hewan`, `spa`, `skincare`, dan `optik`. Perbaikan mengikuti skill `human-grade-web-design`:

1. **R1 (blur blob)**: Menghapus 12 elemen dekoratif `blur-3xl` berupa blob absolute tanpa konten pada hero `SalonHero`, `BarbershopHero`, `FitnessHero`, `SpaHero`, dan `SkincareHero` (komentar "Background ambient lighting" ikut dirapikan; gradien latar tetap dipertahankan).
2. **R2 (colored shadow)**: Mengganti drop-shadow berwarna (`shadow-lg shadow-orange-950/40`, `shadow-xl shadow-orange-950/20`, `shadow-md shadow-orange-900/30`, `shadow-lg shadow-fuchsia-500/25`, `shadow-lg shadow-fuchsia-600/30`) menjadi netral (`shadow-sm`) di `FitnessHero`, `FitnessPricing`, `FitnessContact`, `SkincareHero`, dan `SkincareBooking`.
3. **R3 (rounded-3xl)**: Mengganti seluruh `rounded-3xl` menjadi `rounded-xl` pada kartu paket/tabel/booking (`SalonPriceList`, `SalonTestimonials`, `SalonBooking`, `BarbershopPricing`, `BarbershopContact`, `FitnessPricing`, `FitnessContact`, `SpaPackages`, `SpaBooking`).
4. **R4 (kontras)**: Menaikkan teks abu terlalu muda di latar terang dari `text-neutral-400` menjadi `text-neutral-600` (`SalonPriceList`, `BarbershopPricing`, `FitnessTrainers`, `SpaPackages`). Teks pada latar gelap dibiarkan sesuai aturan.
5. **R5 (warna neon)**: Mengganti aksen fuchsia (neon) di seluruh komponen `skincare` menjadi rose yang lebih grounded; gradient fuchsia-ke-pink kini rose-ke-pink, badge/ikon/border/ring fuchsia menjadi rose. Tidak ada purple/violet/cyan tersisa di lingkup ini.
6. **R6 (state fokus)**: Menambahkan `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2` pada tombol/link CTA utama di seluruh 10 demo (hero, katalog layanan/produk, paket harga, form booking/antrian, kontak).
7. **R7 (buzzword)**: Audit copy tidak menemukan kata buzzword terlarang; tidak ada perubahan teks/isi.

## File yang Diubah (41 file komponen)
1. `src/components/demo/klinik/KlinikHero.tsx`, `KlinikContact.tsx` — state fokus CTA.
2. `src/components/demo/apotek/ApotekHero.tsx`, `ApotekProducts.tsx`, `ApotekContact.tsx` — state fokus CTA.
3. `src/components/demo/salon/SalonHero.tsx`, `SalonServices.tsx`, `SalonPriceList.tsx`, `SalonTestimonials.tsx`, `SalonBooking.tsx` — hapus blob, rounded-xl, kontras, state fokus.
4. `src/components/demo/barbershop/BarbershopHero.tsx`, `BarbershopServices.tsx`, `BarbershopPricing.tsx`, `BarbershopTeam.tsx`, `BarbershopContact.tsx` — hapus blob, rounded-xl, kontras, state fokus.
5. `src/components/demo/fitness/FitnessHero.tsx`, `FitnessPricing.tsx`, `FitnessTrainers.tsx`, `FitnessContact.tsx` — hapus blob, shadow netral, rounded-xl, kontras, state fokus.
6. `src/components/demo/dokter-gigi/DokterHero.tsx`, `DokterServices.tsx`, `DokterSchedule.tsx`, `DokterBooking.tsx` — state fokus CTA.
7. `src/components/demo/klinik-hewan/VetHero.tsx`, `VetServices.tsx`, `VetProducts.tsx`, `VetContact.tsx` — state fokus CTA.
8. `src/components/demo/spa/SpaHero.tsx`, `SpaServices.tsx`, `SpaPackages.tsx`, `SpaBooking.tsx`, `SpaContact.tsx` — hapus blob, rounded-xl, kontras, state fokus.
9. `src/components/demo/skincare/SkincareHero.tsx`, `SkincareTreatments.tsx`, `SkincarePricing.tsx`, `SkincareConsultation.tsx`, `SkincareBooking.tsx` — hapus blob, aksen fuchsia ke rose, shadow netral, state fokus.
10. `src/components/demo/optik/OptikHero.tsx`, `OptikCatalog.tsx`, `OptikPromo.tsx`, `OptikContact.tsx` — state fokus CTA.

File `src/app/demo/<slug>/page.tsx` (10 halaman) tidak perlu diubah; tidak ada pelanggaran aturan di dalamnya.

## Catatan
- Tidak mengubah data/fakta/harga/teks, slug, struktur komponen, atau dependency.
- Hanya file di lingkup tugas yang disentuh; `schema/`, `tests/setup/`, `AGENTS.md`, dan docs lain tidak diubah.
- Tidak ada git commit dan tidak ada push ke remote.

## Verifikasi
- `npm test` dijalankan di foreground dan dilaporkan persis:
  ```
  npm error Missing script: "test"
  npm error
  npm error To see a list of scripts, run:
  npm error   npm run
  npm error A complete log of this run can be found in: /home/msytc/.npm/_logs/2026-10-18T07_43_41_325Z-debug-0.log
  ```
  (repo tidak memiliki skrip test di package.json)
- `pnpm install --frozen-lockfile && pnpm build` dijalankan di foreground dan berhasil hijau (exit code 0, `✓ Compiled successfully in 17.7s`, `✓ Generating static pages (67/67) in 4.1s`, seluruh rute demo termasuk 10 demo kategori ini ter-prerender statis tanpa error).
- `pnpm lint` menunjukkan 15 masalah yang seluruhnya sudah ada sebelumnya (pre-existing) di file di luar lingkup tugas; tidak ada masalah pada file yang diubah.
