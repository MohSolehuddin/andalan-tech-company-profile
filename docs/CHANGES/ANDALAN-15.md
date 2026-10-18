# Ringkasan Perubahan: ANDALAN-15

## Judul
Penambahan Halaman Demo Portfolio Wedding Organizer (`/demo/wedding`)

## Deskripsi
Menambahkan 1 demo website portfolio baru untuk Wedding Organizer & Event Planner dengan data fiktif realistis (Bahasa Indonesia) untuk melengkapi etalase industri jasa pernikahan pada Andalan Tech. Demo memakai slug `wedding` dengan brand "Mahligai Wedding Organizer" dan aksen warna fuchsia/rose (`from-fuchsia-600 to-rose-500`).

## File yang Dibuat
1. `src/components/demo/wedding/WeddingHero.tsx` - Hero banner elegan bernuansa fuchsia/rose gelap dengan tagline pernikahan, tombol anchor ke paket, CTA konsultasi gratis via WhatsApp (`waLink`), dan sorotan kepercayaan (500+ pernikahan sukses, vendor rekanan terpercaya, pendampingan penuh).
2. `src/components/demo/wedding/WeddingServices.tsx` - 6 layanan utama pernikahan (Dekorasi Pelaminan & Venue, Catering & Kuliner Istimewa, MUA & Gaun Pengantin, Dokumentasi Foto & Sinematik, MC & Hiburan Musik, Undangan Digital & Souvenir) dengan ikon Lucide dan badge fitur.
3. `src/components/demo/wedding/WeddingPackages.tsx` - 3 paket harga transparan: Paket Silver (Intimate Rp 38.000.000), Paket Gold (Royal Ballroom Rp 68.000.000 [Paling Populer]), dan Paket Platinum (Grand Majesty Rp 115.000.000) dilengkapi rincian fasilitas dan tombol WhatsApp order/konsultasi.
4. `src/components/demo/wedding/WeddingGallery.tsx` - 6 kartu konsep inspirasi pernikahan berbasis grid gradien + emoji (tanpa gambar eksternal) serta 3 testimoni realistis dari pasangan pengantin dengan rating bintang.
5. `src/components/demo/wedding/WeddingContact.tsx` - Bagian ajakan konsultasi gratis & food tasting, alamat kantor galeri Jakarta Selatan, nomor WhatsApp, jam operasional, dan hak cipta demo.
6. `src/app/demo/wedding/page.tsx` - Halaman Next.js App Router yang merangkai komponen demo wedding beserta `export const metadata` (title & description).

## File yang Diubah
1. `src/lib/demo/demos.ts` - Menambahkan 1 entri demo `wedding` ke array `demoItems` dengan seluruh properti `DemoItem` terisi lengkap (`slug`, `name`, `niche`, `tagline`, `description`, `emoji`, `accentBg`, `accentText`, `ring`, `highlights`).

## Catatan
- Tidak ada penambahan dependency baru (hanya `next`, `react`, `lucide-react`, Tailwind v4 `bg-linear-to-*`, dan helper `waLink`).
- Menghindari gambar eksternal (menggunakan gradien Tailwind, blok warna, dan emoji).
- Seluruh komponen berukuran ringkas (<140 baris).
- Mengikuti gaya kode ES6 (`=>`, `const`) dan arsitektur App Router yang sudah ada di repo.
- Perubahan terisolasi tanpa memodifikasi komponen utama website atau demo lainnya.
