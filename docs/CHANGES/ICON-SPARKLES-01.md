# Ringkasan Perubahan: ICON-SPARKLES-01

## Judul
Penghapusan Ikon Sparkles (Gaya AI) pada Komponen Demo

## Deskripsi
Menghapus seluruh pemakaian ikon `Sparkles` dari `lucide-react` pada 17 komponen demo. Ikon dekoratif pada badge/label dihapus tanpa mengubah teks, sedangkan ikon pada array fitur/layanan diganti dengan ikon lucide yang relevan sesuai konteks (tanpa sparkle/kilau/bintang berkilau). Import `Sparkles` yang tidak terpakai juga dihapus agar build tetap valid.

## File yang Diubah
1. `src/components/demo/apotek/ApotekServices.tsx` - `Sparkles` → `Leaf` (Vitamin & Suplemen).
2. `src/components/demo/bakso/BaksoReviews.tsx` - hapus ikon dekoratif pada judul kartu rahasia.
3. `src/components/demo/bimbel/BimbelPricing.tsx` - hapus ikon dekoratif badge "Investasi Pendidikan Terbaik".
4. `src/components/demo/fashion/FashionKoleksi.tsx` - hapus ikon dekoratif badge "Baru".
5. `src/components/demo/home-service/HomeServiceHero.tsx` - `Sparkles` → `Check` (alat & cairan pembersih).
6. `src/components/demo/kafe/KafeHero.tsx` - hapus ikon dekoratif badge "Specialty Coffee & Artisan Roastery".
7. `src/components/demo/klinik-hewan/VetServices.tsx` - `Sparkles` → `Scissors` (Grooming & Spa Anabul).
8. `src/components/demo/kursus-it/KursusSchedulePrice.tsx` - hapus import `Sparkles` yang tidak terpakai.
9. `src/components/demo/oleh-oleh/OlehHero.tsx` - hapus ikon dekoratif badge "Otentik dari Pesisir & Pegunungan Situbondo".
10. `src/components/demo/paud/PaudPpdb.tsx` - hapus ikon dekoratif badge "PPDB & Pendaftaran Daycare".
11. `src/components/demo/pesantren/PesantrenFacilities.tsx` - hapus ikon dekoratif badge "Dinamika Pesantren".
12. `src/components/demo/saas/SaasPricing.tsx` - hapus ikon dekoratif badge "Paling Populer".
13. `src/components/demo/salon/SalonServices.tsx` - `Sparkles` → `Droplets` (Facial & Glow Treatment).
14. `src/components/demo/skincare/SkincareHero.tsx` - `Sparkles` → `Zap` (Teknologi Laser); hapus ikon badge klinik.
15. `src/components/demo/spa/SpaPackages.tsx` - hapus ikon dekoratif badge "Paling Diminati".
16. `src/components/demo/toko-kue/TokoKueCustom.tsx` - `Sparkles` → `Cake` (Custom Topper); hapus ikon badge "Layanan Spesial".
17. `src/components/demo/wedding/WeddingGallery.tsx` - hapus ikon dekoratif pada deskripsi galeri.

## Catatan
- Tidak ada perubahan teks, data, warna, struktur, atau class di luar penghapusan/penggantian ikon.
- Tidak ada penambahan dependensi baru.
- `Wand2` yang sudah ada sebelumnya (bukan pengganti `Sparkles`) tidak diubah.

## Verifikasi
- `pnpm install --frozen-lockfile` (berhasil).
- `pnpm build` (exit 0; 69 halaman ter-generate, termasuk seluruh rute demo terkait).
- `npm test` (output persis: `npm error Missing script: "test"`).
