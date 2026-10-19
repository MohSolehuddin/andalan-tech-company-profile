# Ringkasan Perubahan: ANDALAN-64

## Judul
Pembersihan Ikon Sparkles / AI-Glitter pada 19 Berkas Demo & Chrome

## Deskripsi
Menghapus seluruh pemakaian ikon bergaya 'AI' (`Sparkles` dari `lucide-react`) pada 19 file komponen dan chrome demo. Menggantinya dengan ikon Lucide lain yang bermakna sesuai konteks labelnya, atau menghapus elemen ikon murni hiasan pada badge/label sembari mempertahankan teks dan wadah styling. Seluruh import `Sparkles` yang tidak lagi digunakan dibersihkan agar build Next.js tetap bebas dari unused imports / lint issue.

## Perubahan yang Diterapkan
1. **src/app/demo/page.tsx**: Menghapus import `Sparkles` dan elemen ikon `<Sparkles className="h-4 w-4 text-amber-400" />` pada badge "Demo Website".
2. **src/app/demo/layout.tsx**: Menghapus `Sparkles` dari import dan elemen ikon `<Sparkles className="h-3.5 w-3.5 text-amber-400" />` pada sticky demo bar attribution.
3. **src/components/demo/agency/AgencyHero.tsx**: Mengganti `icon: Sparkles` pada trustPoints ("Desain Modern & Responsif") dengan `Layout`, dan menghapus elemen `<Sparkles className="h-4 w-4 text-indigo-400" />` dari badge header.
4. **src/components/demo/bakso/BaksoMenu.tsx**: Mengganti `Sparkles` dengan `Utensils` pada callout info simulasi katering porsi kantor/keluarga.
5. **src/components/demo/bimbel/BimbelHero.tsx**: Mengganti `icon: Sparkles` pada trustItems ("Tutor Alumnus PTN Terkemuka") dengan `Award`.
6. **src/components/demo/fashion/FashionHero.tsx**: Mengganti `icon: Sparkles` pada points ("Bahan premium lokal") dengan `Check`.
7. **src/components/demo/fotografi/FotoHero.tsx**: Mengganti `icon: Sparkles` pada points ("Tim fotografer profesional") dengan `Users`.
8. **src/components/demo/kafe/KafeEvents.tsx**: Mengganti `icon: Sparkles` pada event "Workshop Manual Brew & Cupping" dengan `Coffee`.
9. **src/components/demo/katering/KateringHero.tsx**: Menghapus import `Sparkles` dan elemen `<Sparkles className="h-4 w-4 text-amber-400" />` dari badge "Jasa Katering Harian & Acara Spesial".
10. **src/components/demo/kursus-it/KursusContact.tsx**: Menghapus import `Sparkles` dan elemen `<Sparkles className="h-3.5 w-3.5" />` dari badge "Pendaftaran Batch Terdekat Dibuka".
11. **src/components/demo/motor/MotorInventory.tsx**: Mengganti `<Sparkles className="inline-block h-4 w-4 mr-1 text-orange-600" />` pada banner tanya stok motor dengan `Bike`.
12. **src/components/demo/paud/PaudHero.tsx**: Mengganti `<Sparkles className="h-4 w-4 text-amber-300" />` pada tombol "Lihat Program Edukasi" dengan `BookOpen`.
13. **src/components/demo/perikanan/PerikananFresh.tsx**: Mengganti `icon: Sparkles` pada keunggulan "Segar Harian Nelayan" dengan `Fish`.
14. **src/components/demo/saas/SaasHero.tsx**: Menghapus elemen `<Sparkles className="h-4 w-4 text-blue-400" />` pada badge header, dan mengganti `<Sparkles className="h-4 w-4 text-blue-400 shrink-0" />` pada card laporan otomatis dengan `Check`.
15. **src/components/demo/salon/SalonPriceList.tsx**: Menghapus import `Sparkles` dan elemen `<Sparkles className="h-3 w-3" />` pada badge "Paling Favorit".
16. **src/components/demo/skincare/SkincareBooking.tsx**: Menghapus import `Sparkles` dan elemen `<Sparkles className="h-3.5 w-3.5 text-rose-400" />` pada badge "Reservasi Cepat".
17. **src/components/demo/spa/SpaHero.tsx**: Menghapus import `Sparkles` dan elemen `<Sparkles className="h-4 w-4" />` pada badge "Spa, Massage & Reflexology Keluarga".
18. **src/components/demo/toko-emas/TokoEmasServices.tsx**: Menghapus import `Sparkles` dan elemen `<Sparkles className="h-4 w-4" />` pada label "Layanan Spesialis".
19. **src/components/demo/umroh/UmrohPackages.tsx**: Mengganti `<Sparkles className="h-4 w-4 shrink-0 text-emerald-600" />` pada rincian "Legalitas" dengan `ShieldCheck`.

## File yang Diubah
- `src/app/demo/page.tsx`
- `src/app/demo/layout.tsx`
- `src/components/demo/agency/AgencyHero.tsx`
- `src/components/demo/bakso/BaksoMenu.tsx`
- `src/components/demo/bimbel/BimbelHero.tsx`
- `src/components/demo/fashion/FashionHero.tsx`
- `src/components/demo/fotografi/FotoHero.tsx`
- `src/components/demo/kafe/KafeEvents.tsx`
- `src/components/demo/katering/KateringHero.tsx`
- `src/components/demo/kursus-it/KursusContact.tsx`
- `src/components/demo/motor/MotorInventory.tsx`
- `src/components/demo/paud/PaudHero.tsx`
- `src/components/demo/perikanan/PerikananFresh.tsx`
- `src/components/demo/saas/SaasHero.tsx`
- `src/components/demo/salon/SalonPriceList.tsx`
- `src/components/demo/skincare/SkincareBooking.tsx`
- `src/components/demo/spa/SpaHero.tsx`
- `src/components/demo/toko-emas/TokoEmasServices.tsx`
- `src/components/demo/umroh/UmrohPackages.tsx`
- `docs/CHANGES/ANDALAN-64.md` (file ringkasan perubahan)

## Catatan
- Verifikasi grep `Sparkles` pada 19 file target: 0 match.
- Verifikasi grep `Wand|Wand2` pada 19 file target: 0 match.
- Tidak ada file di luar lingkup yang disentuh.
- Tidak ada push ke remote dan tidak ada data yang dihapus.

## Verifikasi
- `npm test` (repo-wide, foreground) — output persis:
  ```
  npm error Missing script: "test"
  npm error
  npm error To see a list of scripts, run:
  npm error   npm run
  npm error A complete log of this run can be found in: /home/msytc/.npm/_logs/2026-10-19T15_05_08_060Z-debug-0.log
  ```
  (repo tidak memiliki skrip `test` di package.json; exit code 1)
- `pnpm install --frozen-lockfile && pnpm build` — exit code 0 (`✓ Lockfile passes supply-chain policies`, `✓ Compiled successfully in 26.0s`, `✓ Finished TypeScript in 33.3s`, `✓ Generating static pages (69/69)`, seluruh rute `/demo/*` ter-prerender statis).
