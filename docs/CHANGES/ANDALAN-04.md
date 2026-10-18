# Ringkasan Perubahan: ANDALAN-04

## Judul
Penambahan Halaman Demo Portfolio Jasa & Personal Brand (`/demo/jasa`)

## Deskripsi
Menambahkan 1 demo website portfolio baru untuk niche Jasa & Personal Brand dengan slug `jasa` ("Nara Kreatif") untuk melengkapi etalase demo siap pakai Andalan Tech di Next.js App Router.

## File yang Dibuat
1. `src/components/demo/jasa/JasaHero.tsx` - Komponen hero dengan badge konsultan & kreator personal brand, headline, CTA anchor lihat layanan dan konsultasi WhatsApp, serta poin keunggulan.
2. `src/components/demo/jasa/JasaServices.tsx` - Grid 6 kartu layanan (brand strategy, copywriting & konten, identitas visual, kelola sosial media, website profil, foto & video profil).
3. `src/components/demo/jasa/JasaPortfolio.tsx` - Grid 6 karya portofolio dengan filter kategori (Branding, Konten, Website), gradient, emoji, dan CTA WhatsApp per karya.
4. `src/components/demo/jasa/JasaTestimonials.tsx` - Baris statistik (proyek, klien, rating) dan 3 testimoni klien.
5. `src/components/demo/jasa/JasaContact.tsx` - CTA konsultasi gratis via WhatsApp, informasi kontak studio & jam kerja, dan footer demo.
6. `src/app/demo/jasa/page.tsx` - Halaman App Router yang menyusun seluruh komponen demo jasa dan mengekspor metadata.

## File yang Diubah
1. `src/lib/demo/demos.ts` - Menambahkan entri demo `jasa` ke array `demoItems` dengan properti lengkap (`slug`, `name`, `niche`, `tagline`, `description`, `emoji`, `accentBg`, `accentText`, `ring`, `highlights`) dan aksen warna orange/rose.

## Catatan
- Tidak ada dependency baru; hanya memanfaatkan `next`, `react`, `lucide-react`, Tailwind v4 (`bg-linear-to-*`), dan helper `waLink`.
- Menghindari gambar eksternal dengan mengoptimalkan gradient, emoji, dan blok warna modern.
