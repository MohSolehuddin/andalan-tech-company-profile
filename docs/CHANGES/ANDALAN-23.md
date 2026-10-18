# Ringkasan Perubahan: ANDALAN-23

## Judul
Tambah Halaman Demo Portofolio Barbershop / Grooming (`/demo/barbershop`)

## Deskripsi
Menambahkan satu halaman demo baru "Gents & Blade Barbershop" (fiktif, target Jabodetabek urban) pada repositori `andalan-tech-company-profile` dengan aksen warna zinc/slate gelap + amber. Halaman berisi hero + CTA, 5 layanan grooming, daftar harga & paket, profil 4 barber, serta jam buka dan form booking antrian yang mengarah ke WhatsApp via helper `waLink`. Tidak ada perubahan pada halaman/komponen demo lain, `src/lib/demo/demos.ts`, maupun `scripts/gen-demos.mjs`.

## File yang Dibuat
1. `src/lib/demo/items/barbershop.ts` - Entri `DemoItem` baru (slug `barbershop`, `accentBg: "from-zinc-800 to-amber-600"`, emoji 💈) dengan export default `item`.
2. `src/components/demo/barbershop/BarbershopHero.tsx` - Hero gelap dengan gradien zinc–amber, CTA booking antrian WhatsApp, highlight layanan, alamat, dan jam buka.
3. `src/components/demo/barbershop/BarbershopServices.tsx` - 5 kartu layanan (haircut, clean shave/beard trim, hair coloring, treatment/scalp, paket grooming) lengkap dengan harga mulai, durasi, dan CTA WhatsApp.
4. `src/components/demo/barbershop/BarbershopPricing.tsx` - 3 paket bundling (Rapi Harian, Gents Complete, Father & Son) + tabel 8 harga layanan satuan, masing-masing dengan CTA WhatsApp.
5. `src/components/demo/barbershop/BarbershopTeam.tsx` - Profil 4 barber dengan avatar inisial (blok gradien, tanpa gambar eksternal), spesialisasi, masa praktik, dan CTA booking barber.
6. `src/components/demo/barbershop/BarbershopContact.tsx` - Komponen klien berisi form booking antrian (nama, WA, layanan/paket, tanggal, jam), jam buka, dan lokasi; data form dirangkai menjadi pesan WhatsApp.
7. `src/app/demo/barbershop/page.tsx` - Halaman App Router yang menyusun kelima komponen + `export const metadata`.
8. `docs/CHANGES/ANDALAN-23.md` - Dokumen ringkasan perubahan ini.

## Catatan
- Tidak ada dependensi baru; memakai `lucide-react`, Tailwind v4 (`bg-linear-to-*`), dan helper `waLink` yang sudah ada.
- Tidak menggunakan gambar eksternal (hanya gradien, ikon, dan blok warna).
- `src/lib/demo/demos.ts` dan `scripts/gen-demos.mjs` tidak disentuh sesuai aturan; entri item baru akan otomatis masuk agregator saat generator dijalankan oleh pemilik repo.

## Verifikasi
- `pnpm install --frozen-lockfile && pnpm build` (hasil terlampir pada laporan tugas).
- `npm test` (output persis: `npm error Missing script: "test"` karena repositori belum mendefinisikan script test di `package.json`).
