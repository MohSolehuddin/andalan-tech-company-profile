# Ringkasan Perubahan: ANDALAN-02

## Judul
Penambahan Halaman Demo Portfolio Sekolah (`/demo/sekolah`)

## Deskripsi
Menambahkan 1 demo website portfolio baru untuk niche Sekolah/Pendidikan dengan slug `sekolah` ("SMA Cendekia Nusantara") untuk melengkapi etalase demo siap pakai Andalan Tech di Next.js App Router.

## File yang Dibuat
1. `src/components/demo/sekolah/SekolahHero.tsx` - Komponen hero dengan badge, headline, CTA "Tanya PPDB" via WhatsApp, dan poin kepercayaan (akreditasi, kurikulum, PPDB).
2. `src/components/demo/sekolah/SekolahPrograms.tsx` - Grid 4 program peminatan (Sains & Teknologi, Sosial & Humaniora, Bahasa & Budaya, Vokasi & Keterampilan).
3. `src/components/demo/sekolah/SekolahFacilities.tsx` - Grid 6 fasilitas kampus (lab sains, lab komputer, perpustakaan, lapangan olahraga, ruang musik & seni, kantin sehat).
4. `src/components/demo/sekolah/SekolahPpdb.tsx` - Alur PPDB 4 langkah, info 2 gelombang pendaftaran, testimoni singkat orang tua siswa, dan CTA WhatsApp "Tanya PPDB".
5. `src/components/demo/sekolah/SekolahContact.tsx` - Blok kontak (alamat, jam layanan, telepon/WhatsApp, email), CTA jadwal kunjungan via WhatsApp, dan footer demo.
6. `src/app/demo/sekolah/page.tsx` - Halaman App Router yang menyusun seluruh komponen demo sekolah dan mengekspor metadata SEO.

## File yang Diubah
1. `src/lib/demo/demos.ts` - Menambahkan entri demo `sekolah` ke array `demoItems` dengan properti lengkap (`slug`, `name`, `niche`, `tagline`, `description`, `emoji`, `accentBg`, `accentText`, `ring`, `highlights`) dan aksen warna emerald/green.

## Catatan
- Tidak ada dependency baru; hanya `next`, `react`, `lucide-react`, dan helper `waLink` yang sudah ada.
- Tidak memakai gambar eksternal; visual mengandalkan gradient dan emoji.
