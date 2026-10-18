# Ringkasan Perubahan: ANDALAN-13

## Judul
Penambahan Halaman Demo Portfolio Fotografi / Studio Foto (`/demo/fotografi`)

## Deskripsi
Menambahkan 1 demo website portfolio baru untuk Fotografi / Studio Foto dengan data fiktif realistis (Bahasa Indonesia) untuk melengkapi showcase industri kreatif pada Andalan Tech. Demo memakai slug `fotografi` dengan brand "Lumen Studio" dan aksen warna zinc/neutral gelap (`from-zinc-700 to-neutral-900`).

## File yang Dibuat
1. `src/components/demo/fotografi/FotoHero.tsx` - Hero banner gelap (zinc) dengan gradien, tagline fotografi, tombol "Lihat Paket" (anchor), CTA booking via WhatsApp (`waLink`), dan sorotan (tim profesional, properti lengkap, hasil edit 7 hari).
2. `src/components/demo/fotografi/FotoServices.tsx` - Bagian 5 jenis layanan (Wedding, Prewedding, Foto Produk, Event, Wisuda) dengan ikon Lucide dan deskripsi singkat.
3. `src/components/demo/fotografi/FotoGallery.tsx` - Galeri 8 karya placeholder berupa blok gradien + emoji (tanpa gambar eksternal) dengan judul dan kategori.
4. `src/components/demo/fotografi/FotoPackages.tsx` - 3 paket harga (Personal Rp 350rb, Prewedding Rp 1.750rb [Paling Populer], Wedding Rp 3.500rb) dengan daftar fitur dan tombol "Pilih Paket Ini" via WhatsApp.
5. `src/components/demo/fotografi/FotoContact.tsx` - Informasi studio di Situbondo, jam operasional, nomor WhatsApp, CTA booking sesi, dan hak cipta demo.
6. `src/app/demo/fotografi/page.tsx` - Halaman Next.js App Router yang menyusun seluruh komponen demo fotografi beserta `export const metadata` (judul dan deskripsi).

## File yang Diubah
1. `src/lib/demo/demos.ts` - Menambahkan entri demo `fotografi` ke array `demoItems` dengan seluruh properti `DemoItem` terisi (`slug`, `name`, `niche`, `tagline`, `description`, `emoji`, `accentBg`, `accentText`, `ring`, `highlights`).

## Catatan
- Tidak ada dependency baru; hanya `next`, `react`, `lucide-react`, Tailwind v4 (`bg-linear-to-*`), dan helper `waLink`.
- Menghindari gambar eksternal (menggunakan gradien Tailwind, blok warna, dan emoji).
- Kode mengikuti standar repo: ES6 (`=>`), `const`, TypeScript, dan App Router.
- Perubahan terisolasi tanpa menyentuh halaman/komponen utama atau demo lain.
