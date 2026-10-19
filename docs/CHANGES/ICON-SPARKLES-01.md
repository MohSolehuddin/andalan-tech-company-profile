# Ringkasan Perubahan: ICON-SPARKLES-01

## Judul
Penghapusan Ikon Sparkles pada 17 Komponen Demo

## Deskripsi
Menghapus seluruh pemakaian ikon `Sparkles` (kilau) dari file yang ditugaskan. Ikon dekoratif pada badge/label dihapus tanpa mengubah teks, sedangkan ikon pada daftar fitur/layanan diganti dengan ikon lucide yang relevan. Tidak ada perubahan data, warna, struktur, class, maupun dependency.

## Perubahan yang Diterapkan
- `bakery/BakeryPackages.tsx`: hapus ikon dekoratif pada badge "Paling Diminati".
- `bengkel/BengkelServices.tsx`: `Sparkles` → `Zap` untuk layanan kelistrikan & aki.
- `dokter-gigi/DokterServices.tsx`: `Sparkles` → `Droplets` untuk scaling gigi.
- `fitness/FitnessPricing.tsx`: hapus ikon dekoratif badge "Paket Keanggotaan".
- `jasa/JasaHero.tsx`: `Sparkles` → `Target` untuk poin strategi brand; hapus ikon dekoratif badge hero.
- `kafe/KafeVibe.tsx`: hapus ikon dekoratif label "Suasana & Fasilitas".
- `kursus-bahasa/KursusPricing.tsx`: hapus ikon dekoratif badge "Harga Transparan".
- `minuman/MinumanTopping.tsx`: `Sparkles` → `MessageCircle` pada CTA WhatsApp.
- `paud/PaudFacilities.tsx`: `Sparkles` → `BookOpen` untuk pojok baca & sensory room.
- `percetakan/PercetakanHero.tsx`: `Sparkles` → `Palette` untuk highlight warna tajam.
- `saas/SaasCta.tsx`: hapus ikon dekoratif badge CTA; `Sparkles` → `Settings` untuk kustomisasi fitur.
- `salon/SalonHero.tsx`: `Sparkles` → `BadgeCheck` untuk stylist bersertifikat; hapus ikon dekoratif badge hero.
- `sewa-apartemen/ApartemenListings.tsx`: `Sparkles` → `Check` pada daftar fasilitas unggulan.
- `skincare/SkincareTreatments.tsx`: `Sparkles` → `Heart` untuk treatment anti-aging.
- `toko-emas/TokoEmasHero.tsx`: `Sparkles` → `Pencil` untuk custom & grafir nama.
- `umroh/UmrohHero.tsx`: hapus import `Sparkles` yang tidak terpakai.
- `wedding/WeddingServices.tsx`: `Sparkles` → `Heart` untuk layanan MUA & gaun pengantin.

## Verifikasi
- `npm test` (repo-wide, foreground) — output persis:
  ```
  npm error Missing script: "test"
  npm error
  npm error To see a list of scripts, run:
  npm error   npm run
  npm error A complete log of this run can be found in: /home/msytc/.npm/_logs/2026-10-19T14_56_44_629Z-debug-0.log
  ```
  (repo tidak memiliki skrip `test` di package.json; exit code 1)
- `pnpm install --frozen-lockfile && pnpm build` — exit code 0:
  `✓ Compiled successfully in 23.2s`, `✓ Generating static pages (69/69)`, seluruh rute demo ter-prerender tanpa error.
- Grep `Sparkles|Wand` pada 17 file scope: 0 match.
