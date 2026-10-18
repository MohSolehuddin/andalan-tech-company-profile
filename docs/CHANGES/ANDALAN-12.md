# Ringkasan Perubahan: ANDALAN-12

## Judul
Penambahan Halaman Demo Portfolio Gym / Fitness Center (`/demo/fitness`)

## Deskripsi
Menambahkan 1 demo website portfolio baru untuk Gym / Fitness Center dengan data fiktif realistis (Bahasa Indonesia) untuk melengkapi showcase industri olahraga dan kebugaran pada Andalan Tech. Demo memakai slug `fitness` dengan brand "PrimaFit Studio" dan aksen warna oranye/merah (`from-orange-500 to-red-600`).

## File yang Dibuat
1. `src/components/demo/fitness/FitnessHero.tsx` - Hero banner gelap modern dengan aksen gradien oranye/merah, tagline kebugaran, CTA Free Trial via WhatsApp (`waLink`), tombol scroll ke paket, dan sorotan fasilitas (100+ alat gym, 40+ kelas/minggu, trainer bersertifikat).
2. `src/components/demo/fitness/FitnessPrograms.tsx` - Bagian 4 program utama (Area Gym & Beban Bebas, Kelas Studio Zumba/Yoga/Spin, Personal Trainer 1-on-1, dan Konsultasi Nutrisi & Diet) dengan ikon Lucide dan tautan WhatsApp per program.
3. `src/components/demo/fitness/FitnessPricing.tsx` - 3 tier harga keanggotaan (Basic Pass Rp 299rb/bln, Pro Member Rp 699rb/3bln [Paling Populer], Annual Elite Rp 2.399jt/thn) dengan daftar fitur dan tombol "Pilih Paket Ini" via WhatsApp.
4. `src/components/demo/fitness/FitnessTrainers.tsx` - Profil 3 trainer profesional (Reza Pratama - Head Strength Coach CSCS, Maya Salsabila - Yoga & Studio RYT, Dimas Wicaksono - Functional & HIIT Coach NASM) menggunakan avatar inisial dengan latar gradien (tanpa gambar eksternal) dan tombol konsultasi.
5. `src/components/demo/fitness/FitnessContact.tsx` - Informasi lokasi fisik di Situbondo, jam operasional (06.00–22.00 WIB setiap hari), nomor WhatsApp, CTA pendaftaran trial, dan hak cipta demo.
6. `src/app/demo/fitness/page.tsx` - Halaman Next.js App Router yang menyusun seluruh komponen demo fitness beserta metadata judul dan deskripsi.

## File yang Diubah
1. `src/lib/demo/demos.ts` - Menambahkan entri demo `fitness` ke array `demoItems` dengan properti lengkap (`slug`, `name`, `niche`, `tagline`, `description`, `emoji`, `accentBg`, `accentText`, `ring`, `highlights`) dan warna aksen `from-orange-500 to-red-600`.

## Catatan
- Tidak ada dependency baru; hanya `next`, `react`, `lucide-react`, Tailwind v4 (`bg-linear-to-*`), dan helper `waLink`.
- Menghindari gambar eksternal (menggunakan gradien warna Tailwind, blok warna, inisial terformat, dan ikon Lucide).
- Kode mengikuti standar repo: ES6 arrow function (`=>`), `const`, TypeScript, dan App Router.
- Perubahan terisolasi tanpa menyentuh halaman/komponen utama atau demo lain.
