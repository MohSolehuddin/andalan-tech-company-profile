# Ringkasan Perubahan: ANDALAN-21

## Judul
Penambahan Halaman Demo Portofolio Pondok Pesantren (info + PPDB)

## Deskripsi
Menambahkan 1 halaman demo portofolio baru dengan slug `pesantren` untuk industri Pondok Pesantren & Pendidikan Islam di Situbondo. Demo ini memuat profil pondok pesantren salaf & modern, kajian kitab kuning (turats), tahfidz Al-Qur'an 30 juz, madrasah formal (MTs & MA), fasilitas asrama & lingkungan, galeri kegiatan santri berbasis blok gradient warna, alur dan persyaratan PPDB santri baru 2026/2027, serta konsultasi/tanya PPDB langsung via WhatsApp (`waLink`).

## File yang Dibuat
1. `src/lib/demo/items/pesantren.ts` - Registri demo item pesantren dengan tipe `DemoItem`, warna aksen emerald/teal (`from-emerald-600 to-teal-500`).
2. `src/components/demo/pesantren/PesantrenHero.tsx` - Komponen hero dengan badge kota santri Situbondo, deskripsi, CTA WhatsApp, dan trust badge.
3. `src/components/demo/pesantren/PesantrenPrograms.tsx` - Komponen program pendidikan (tahfidz Al-Qur'an, kitab kuning turats, bahasa Arab & Inggris, madrasah formal).
4. `src/components/demo/pesantren/PesantrenFacilities.tsx` - Komponen fasilitas pondok (masjid, asrama, kelas, lab, perpustakaan, lapangan, poskestren) dan galeri kegiatan santri berblok gradient.
5. `src/components/demo/pesantren/PesantrenPpdb.tsx` - Komponen informasi PPDB (alur pendaftaran 4 langkah, jadwal gelombang, syarat administrasi, rincian biaya, testimoni, dan CTA WhatsApp).
6. `src/components/demo/pesantren/PesantrenContact.tsx` - Komponen informasi kontak, jadwal sowan/silaturahim sekretariat PPDB di Situbondo, dan footer demo.
7. `src/app/demo/pesantren/page.tsx` - Halaman App Router Next.js menyusun seluruh komponen demo pesantren beserta metadata SEO.
8. `docs/CHANGES/ANDALAN-21.md` - Dokumen ringkasan perubahan ini.

## File yang Diubah
Tidak ada. `src/lib/demo/demos.ts` dan `scripts/gen-demos.mjs` tidak disentuh sesuai aturan isolasi pengerjaan.

## Catatan
- Tidak ada penambahan dependensi baru.
- Menggunakan Tailwind CSS v4 styling (`bg-linear-to-*` gradient tanpa gambar eksternal).
- Seluruh komponen modular berukuran kecil (<200 baris per file).

## Verifikasi
- `pnpm install --frozen-lockfile` (berhasil).
- `pnpm build` (berhasil hijau, rute `/demo/pesantren` ter-generate statis).
- `npm test` (output persis: `npm error Missing script: "test"` karena repositori belum mendefinisikan script test di `package.json`).
