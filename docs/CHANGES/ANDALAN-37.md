# Ringkasan Perubahan: ANDALAN-37

## Judul
Menambahkan Halaman Demo Skincare & Klinik Estetika (`/demo/skincare`)

## Deskripsi
Menambahkan satu halaman demo portofolio baru bertema Skincare & Klinik Estetika dengan nama brand fiktif "Glow Aesthetic Clinic". Halaman menyusun 5 komponen section kecil:
1. Hero section dengan badge estetika medis, CTA booking WhatsApp, CTA konsultasi dokter, serta trust highlights (dokter berlisensi, teknologi laser, kepuasan pasien).
2. Layanan treatment mencakup facial (Hydra Deep Cleansing), chemical peeling (Radiance Bio Peeling), laser (Pico Glow Laser), brightening (Glass Skin Brightening), acne care, dan anti-aging dengan durasi dan target keluhan kulit.
3. Paket perawatan lengkap dengan harga transparan, fitur rincian per sesi/paket, badge terfavorit, serta tombol booking WhatsApp per paket.
4. Alur konsultasi 4 langkah (analisis digital, konsultasi privat dokter, tindakan higienis steril, pendampingan homecare), jadwal dokter praktik spesialis, dan banner chat WhatsApp dokter.
5. Section booking WhatsApp cepat, detail alamat klinik, jam operasional, hotline kontak, serta footer demo.

Seluruh CTA menggunakan helper `waLink` dari `src/lib/demo/wa.ts` dan tampilan dirancang tanpa gambar eksternal (menggunakan styling gradien Tailwind v4, blok warna, serta ikon `lucide-react`) sesuai konvensi portofolio demo.

## File yang Dibuat
1. `src/components/demo/skincare/SkincareHero.tsx` - Section hero dengan badge, CTA booking & konsultasi WhatsApp, serta trust highlights.
2. `src/components/demo/skincare/SkincareTreatments.tsx` - Katalog 6 treatment unggulan (facial, chemical peeling, pico laser, brightening therapy, acne care, anti-aging) beserta durasi dan CTA WhatsApp per treatment.
3. `src/components/demo/skincare/SkincarePricing.tsx` - 4 paket pilihan perawatan dengan harga transparan, rincian fitur, badge favorit, dan tombol reservasi WhatsApp per paket.
4. `src/components/demo/skincare/SkincareConsultation.tsx` - Penjelasan alur konsultasi 4 langkah medis, jadwal dokter praktik, dan callout chat WhatsApp dokter.
5. `src/components/demo/skincare/SkincareBooking.tsx` - Section reservasi instan WhatsApp, rute/lokasi klinik, jam buka, hotline kontak, dan footer demo.
6. `src/app/demo/skincare/page.tsx` - Halaman App Router yang merender kelima komponen di atas dalam `<main className="bg-white">` dengan `export const metadata`.
7. `src/lib/demo/items/skincare.ts` - Item registry demo dengan `slug: "skincare"`, `category: "Kesehatan & Kecantikan"`, `package: "bisnis"`, `niche: "Skincare & Klinik Estetika"`, emoji ✨, dan aksen warna fuchsia-pink.
8. `docs/CHANGES/ANDALAN-37.md` - Dokumen ringkasan perubahan ini.

## Catatan
- `src/lib/demo/demos.ts` dan `scripts/gen-demos.mjs` tidak disentuh (agregator dibuat/dijalankan secara terpisah).
- Item demo lain, halaman/komponen utama (page.tsx utama, Hero/Benefits/Pricing/Portfolio/Contact/Footer), layout global, `schema/`, `tests/setup/`, dan `AGENTS.md` tidak diubah.
- Menggunakan Tailwind v4 (`bg-linear-to-*`), tanpa dependensi baru, dan tanpa gambar eksternal.

## Verifikasi
- `npm test` dijalankan di foreground dan dilaporkan persis (`npm error Missing script: "test"`).
- `pnpm install --frozen-lockfile && pnpm build` dijalankan di foreground dan berhasil sukses (0 error).
