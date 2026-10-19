# Ringkasan Perubahan: SPARK — Pembersihan Ikon Sparkles (AI-ish)

Menghapus/mengganti seluruh ikon `Sparkles` (lucide-react) — ikon kilau yang berkesan
"AI" — pada komponen demo + chrome Andalan. Ikon hiasan murni dihapus; ikon pada
fitur/layanan diganti ikon kontekstual (Check/Award/ShieldCheck/Users/Layout/Fish/Utensils/dll).
Import `Sparkles` yang tak terpakai dibersihkan. Verifikasi: `pnpm build` exit 0.

## Batch 1 — 19 berkas (chrome + komponen)
- src/app/demo/page.tsx, src/app/demo/layout.tsx — hapus ikon sparkle pada badge/chrome.
- agency/AgencyHero, bakso/BaksoMenu, bimbel/BimbelHero, fashion/FashionHero, fotografi/FotoHero,
  kafe/KafeEvents, katering/KateringHero, kursus-it/KursusContact, motor/MotorInventory,
  paud/PaudHero, perikanan/PerikananFresh, saas/SaasHero, salon/SalonPriceList,
  skincare/SkincareBooking, spa/SpaHero, toko-emas/TokoEmasServices, umroh/UmrohPackages.
- Ganti dengan ikon relevan (Layout/Utensils/Award/Check/Users/Coffee/Bike/BookOpen/Fish/ShieldCheck)
  atau hapus elemen ikon bila murni hiasan.

## Batch 2 — 17 berkas
- apotek/ApotekServices, bakso/BaksoReviews, bimbel/BimbelPricing, fashion/FashionKoleksi,
  home-service/HomeServiceHero, kafe/KafeHero, klinik-hewan/VetServices, kursus-it/KursusSchedulePrice,
  oleh-oleh/OlehHero, paud/PaudPpdb, pesantren/PesantrenFacilities, saas/SaasPricing,
  salon/SalonServices, skincare/SkincareHero, spa/SpaPackages, toko-kue/TokoKueCustom,
  wedding/WeddingGallery.

## Batch 3 — 17 berkas
- bakery/BakeryHero, barbershop/BarbershopServices, dokter-gigi/DokterHero, fitness/FitnessHero,
  irent/IRentHero, kafe/KafeMenu, kontraktor/KontraktorRAB, minuman/MinumanHero, optik/OptikHero,
  paud/PaudPrograms, pesantren/PesantrenHero, salon/SalonBooking, sekolah/SekolahHero,
  skincare/SkincarePricing, spa/SpaServices, toko-kue/TokoKueHero, wedding/WeddingHero.

## Batch 4 — 17 berkas
- bakery/BakeryPackages, bengkel/BengkelServices, dokter-gigi/DokterServices, fitness/FitnessPricing,
  jasa/JasaHero, kafe/KafeVibe, kursus-bahasa/KursusPricing, minuman/MinumanTopping,
  paud/PaudFacilities, percetakan/PercetakanHero, saas/SaasCta, salon/SalonHero,
  sewa-apartemen/ApartemenListings, skincare/SkincareTreatments, toko-emas/TokoEmasHero,
  umroh/UmrohHero, wedding/WeddingServices.

## Catatan
- Target 70 berkas; hanya berkas dalam lingkup lane yang disentuh.
- Tanpa push ke remote; tanpa hapus data.
- Verifikasi: `pnpm install --frozen-lockfile && pnpm build` exit 0 (69 halaman ter-prerender).
