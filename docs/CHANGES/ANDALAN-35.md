# Ringkasan Perubahan: ANDALAN-35

## Judul
Menambahkan Halaman Demo Klinik Hewan & Petshop (`/demo/klinik-hewan`)

## Deskripsi
Menambahkan satu halaman demo portofolio baru bertema klinik hewan dan petshop dengan brand fiktif "VetCare Klinik Hewan & Petshop". Halaman menyusun empat komponen section modular: hero dengan CTA WhatsApp dan poin keunggulan, layanan medis & salon grooming (vaksin, pemeriksaan, operasi steril, rawat inap), katalog produk pakan & perlengkapan petshop dengan tombol pemesanan WhatsApp, serta section reservasi booking WhatsApp dilengkapi info jadwal dan operasional klinik. Seluruh CTA menggunakan helper `waLink` dari `src/lib/demo/wa.ts` dan visual dibangun murni tanpa gambar eksternal (menggunakan warna, gradien Tailwind v4 `bg-linear-to-*`, icon Lucide, dan emoji).

## File yang Dibuat
1. `src/components/demo/klinik-hewan/VetHero.tsx` - Section hero dengan badge klinik hewan terpercaya, CTA booking WhatsApp, dan sorotan keunggulan.
2. `src/components/demo/klinik-hewan/VetServices.tsx` - Enam layanan medis dan perawatan (vaksin, konsultasi dokter, grooming, bedah/steril, rawat inap, scaling) dengan info harga awal dan CTA konsultasi.
3. `src/components/demo/klinik-hewan/VetProducts.tsx` - Enam produk pilihan petshop (pakan kucing & anjing, vitamin, sampo kutu/jamur, pet carrier, pasir gumpal) dengan tombol beli WhatsApp dan banner same-day delivery.
4. `src/components/demo/klinik-hewan/VetContact.tsx` - Panduan 3 langkah reservasi, kontak WhatsApp, jam operasional, alamat klinik, dan footer demo.
5. `src/app/demo/klinik-hewan/page.tsx` - Rute App Router yang merender keempat komponen dalam `<main>` beserta `export const metadata`.
6. `src/lib/demo/items/klinik-hewan.ts` - Item registry demo dengan `slug: "klinik-hewan"`, `name: "VetCare Klinik Hewan & Petshop"`, `category: "Kesehatan & Kecantikan"`, `package: "starter"`, emoji 🐾, dan aksen emerald.
7. `docs/CHANGES/ANDALAN-35.md` - Dokumen ringkasan perubahan ini.

## Catatan
- `src/lib/demo/demos.ts` dan `scripts/gen-demos.mjs` tidak disentuh manual.
- Komponen atau halaman lain di luar lingkup tugas tidak diubah sama sekali.
- Menggunakan Tailwind v4 (`bg-linear-to-*`), tanpa dependensi baru, dan tanpa gambar eksternal.

## Verifikasi
- `npm test` dijalankan di foreground: `npm error Missing script: "test"` (repo tidak memiliki skrip pengujian).
- `pnpm install --frozen-lockfile && pnpm build` dijalankan di foreground dan berhasil hijau tanpa error.
