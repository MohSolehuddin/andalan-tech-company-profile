# Ringkasan Perubahan: ANDALAN-14

## Judul
Penambahan Halaman Demo Portfolio Bimbingan Belajar / Les Privat (`/demo/bimbel`)

## Deskripsi
Menambahkan 1 demo website portfolio baru untuk Bimbingan Belajar & Les Privat dengan data fiktif realistis (Bahasa Indonesia) untuk melengkapi showcase industri pendidikan pada Andalan Tech. Demo memakai slug `bimbel` dengan nama "Bimbel Bintang Prestasi" dan aksen warna indigo/sky (`from-indigo-600 to-sky-500`).

## File yang Dibuat
1. `src/components/demo/bimbel/BimbelHero.tsx` - Hero banner indigo dengan gradien, badge jenjang bimbingan, tagline, tombol pendaftaran trial gratis via WhatsApp (`waLink`), navigasi program, dan poin kepercayaan (kelas max 8 siswa, tutor PTN, persentase kelulusan).
2. `src/components/demo/bimbel/BimbelPrograms.tsx` - Daftar 4 program belajar terstruktur (MIPA SMP & SMA, UTBK-SNBT & Kedinasan, English for Kids & Teens, Komputer & Koding Anak) lengkap dengan target kelas dan fasilitas unggulan.
3. `src/components/demo/bimbel/BimbelWhy.tsx` - 4 keunggulan bimbel (kelas kecil max 8 siswa, tutor lulusan PTN terkemuka, tryout berkala sistem IRT, laporan progres mingguan ke orang tua via WhatsApp) serta testimoni dari orang tua siswa dan alumni.
4. `src/components/demo/bimbel/BimbelPricing.tsx` - 3 tier paket belajar (Reguler Group Rp 450rb/bln, Intensif Juara Rp 750rb/bln [Paling Diminati], Privat 1-on-1 Rp 1.350rb/bln) dengan fitur transparan dan tombol pendaftaran via WhatsApp.
5. `src/components/demo/bimbel/BimbelContact.tsx` - Banner penawaran trial gratis 1 sesi, informasi alamat kampus belajar di Situbondo, jam operasional, kontak konsultasi akademik WhatsApp, dan catatan hak cipta demo.
6. `src/app/demo/bimbel/page.tsx` - Halaman Next.js App Router yang menyusun komponen-komponen demo bimbel serta menyertakan `export const metadata`.

## File yang Diubah
1. `src/lib/demo/demos.ts` - Menambahkan entri demo `bimbel` ke array `demoItems` dengan seluruh properti `DemoItem` terisi lengkap (`slug`, `name`, `niche`, `tagline`, `description`, `emoji`, `accentBg`, `accentText`, `ring`, `highlights`).

## Catatan
- Tidak ada penambahan dependency baru; hanya memanfaatkan `next`, `react`, `lucide-react`, Tailwind v4 (`bg-linear-to-*`), dan helper WhatsApp `waLink`.
- Menghindari gambar eksternal (menggunakan gradien Tailwind, ikon Lucide, dan emoji).
- Gaya kode konsisten dengan repo: ES6 arrow function (`=>`), `const`, TypeScript, dan Next.js App Router.
- Perubahan terisolasi tanpa mengubah halaman/komponen utama atau demo lain.
