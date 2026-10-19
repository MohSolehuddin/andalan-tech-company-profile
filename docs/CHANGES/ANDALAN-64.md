# Ringkasan Perubahan: ANDALAN-64

## Judul
Pembersihan Ikon Sparkles ('AI' / kilau) pada 17 Komponen Demo

## Deskripsi
Menghapus dan mengganti seluruh pemakaian ikon `Sparkles` (dari `lucide-react`) pada 17 file komponen demo. Sesuai panduan desain, ikon hiasan murni pada badge/label dihilangkan agar tampilan lebih autentik dan bersih, sedangkan ikon pada array fitur/layanan/kartu diganti dengan ikon kontekstual non-sparkle yang relevan (`Check`, `Award`). Seluruh import `Sparkles` yang tidak lagi terpakai dibersihkan dari header berkas.

## Perubahan yang Diterapkan
1. **Pembersihan Ikon Badge/Label (Hiasan Murni Dihapus):**
   - `src/components/demo/bakery/BakeryHero.tsx`: Hapus `<Sparkles className="h-4 w-4" />` pada badge "Toko Roti & Pastry Artisan • Situbondo", bersihkan import.
   - `src/components/demo/dokter-gigi/DokterHero.tsx`: Hapus `<Sparkles className="h-4 w-4" />` pada badge "Klinik Gigi & Dokter Gigi", bersihkan import.
   - `src/components/demo/fitness/FitnessHero.tsx`: Hapus `<Sparkles className="h-3.5 w-3.5" />` pada badge "Pusat Kebugaran & Gym Modern", bersihkan import.
   - `src/components/demo/minuman/MinumanHero.tsx`: Hapus `<Sparkles className="h-4 w-4" />` pada badge "Juice Bar & Boba Fresh Tiap Hari", bersihkan import.
   - `src/components/demo/paud/PaudPrograms.tsx`: Hapus `<Sparkles className="h-3.5 w-3.5" />` pada badge "Program Edukasi & Tumbuh Kembang", bersihkan import.
   - `src/components/demo/pesantren/PesantrenHero.tsx`: Hapus `<Sparkles className="h-4 w-4" />` pada badge "Pondok Pesantren • Situbondo Kota Santri", bersihkan import.
   - `src/components/demo/salon/SalonBooking.tsx`: Hapus `<Sparkles className="h-3.5 w-3.5" />` pada badge "Form Reservasi Cepat", bersihkan import.
   - `src/components/demo/skincare/SkincarePricing.tsx`: Hapus `<Sparkles className="h-3 w-3" />` pada badge "Paling Favorit", bersihkan import.
   - `src/components/demo/wedding/WeddingHero.tsx`: Hapus `<Sparkles className="h-4 w-4 text-rose-300" />` pada badge "Wedding Organizer & Event Planner Profesional".

2. **Penggantian Ikon Fitur / Layanan / Action Button:**
   - `src/components/demo/barbershop/BarbershopServices.tsx`: Ganti `icon: Sparkles` pada layanan "Treatment & Scalp Care" menjadi `icon: Check`.
   - `src/components/demo/irent/IRentHero.tsx`: Ganti `Sparkles` pada kartu `USE_CASES` menjadi `Check`.
   - `src/components/demo/kafe/KafeMenu.tsx`: Ganti `Sparkles` pada tombol "Request Kustom" menjadi `Check`.
   - `src/components/demo/optik/OptikHero.tsx`: Ganti `icon: Sparkles` pada trust item "Frame original & lengkap" menjadi `icon: Check`.
   - `src/components/demo/sekolah/SekolahHero.tsx`: Ganti `icon: Sparkles` pada trust item "Kurikulum Merdeka" menjadi `icon: Check`.
   - `src/components/demo/spa/SpaServices.tsx`: Ganti `icon: Sparkles` pada layanan "Facial Glow" menjadi `icon: Check`.
   - `src/components/demo/toko-kue/TokoKueHero.tsx`: Ganti `icon: Sparkles` pada highlight "Bahan Premium Tanpa Pengawet" menjadi `icon: Check`.
   - `src/components/demo/wedding/WeddingHero.tsx`: Ganti `icon: Sparkles` pada highlight "500+ Pesta Pernikahan Sukses" menjadi `icon: Award`.

3. **Pembersihan Import Tidak Terpakai:**
   - `src/components/demo/kontraktor/KontraktorRAB.tsx`: Hapus import `Sparkles` yang tidak pernah dirender di JSX.

## File yang Diubah
- `src/components/demo/bakery/BakeryHero.tsx`
- `src/components/demo/barbershop/BarbershopServices.tsx`
- `src/components/demo/dokter-gigi/DokterHero.tsx`
- `src/components/demo/fitness/FitnessHero.tsx`
- `src/components/demo/irent/IRentHero.tsx`
- `src/components/demo/kafe/KafeMenu.tsx`
- `src/components/demo/kontraktor/KontraktorRAB.tsx`
- `src/components/demo/minuman/MinumanHero.tsx`
- `src/components/demo/optik/OptikHero.tsx`
- `src/components/demo/paud/PaudPrograms.tsx`
- `src/components/demo/pesantren/PesantrenHero.tsx`
- `src/components/demo/salon/SalonBooking.tsx`
- `src/components/demo/sekolah/SekolahHero.tsx`
- `src/components/demo/skincare/SkincarePricing.tsx`
- `src/components/demo/spa/SpaServices.tsx`
- `src/components/demo/toko-kue/TokoKueHero.tsx`
- `src/components/demo/wedding/WeddingHero.tsx`
- `docs/CHANGES/ANDALAN-64.md`
