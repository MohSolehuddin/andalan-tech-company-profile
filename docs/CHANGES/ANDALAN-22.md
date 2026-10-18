# Ringkasan Perubahan: ANDALAN-22

## Judul
Implementasi Halaman Demo Portofolio Kantor Hukum & Notaris (`legal`)

## Deskripsi
Menambahkan halaman demo baru untuk niche Kantor Hukum, Notaris & Konsultan Bisnis dengan slug `legal`. Halaman ini menyajikan profil profesional fiktif realistis ("Pratama & Co Law Firm") yang menargetkan pasar korporasi dan pengusaha Jabodetabek. Fitur meliputi identitas legalitas, penawaran layanan lengkap (pendirian PT/CV, perizinan OSS RBA, akta notaris/PPAT, kontrak komersial, corporate legal retainer, dan sengketa properti), alur kerja transparan 4 tahap, profil tim advokat & konsultan hukum, serta integrasi CTA WhatsApp melalui helper `waLink`.

## File yang Dibuat
1. `src/lib/demo/items/legal.ts` - Entri registri demo untuk katalog portofolio dengan palet warna navy/slate (`from-slate-700 to-blue-900`).
2. `src/components/demo/legal/LegalHero.tsx` - Komponen hero section dengan headline, deskripsi, badges kredibilitas resmi, dan tombol aksi WhatsApp/layanan.
3. `src/components/demo/legal/LegalServices.tsx` - Komponen grid layanan hukum terpadu (PT/CV, OSS RBA, Akta Notaris, Kontrak Bisnis, Retainer, Properti).
4. `src/components/demo/legal/LegalProcess.tsx` - Komponen alur kerja 4 tahap (Konsultasi → Penelaahan Berkas → Pengesahan Dokumen → Penyerahan Resmi).
5. `src/components/demo/legal/LegalTeam.tsx` - Komponen profil tim advokat PERADI dan notaris berpengalaman.
6. `src/components/demo/legal/LegalContact.tsx` - Komponen informasi kontak kantor, jam kerja, lokasi Menara Sudirman Jakarta Selatan, dan CTA WhatsApp.
7. `src/app/demo/legal/page.tsx` - Halaman App Router untuk rute `/demo/legal` yang menyusun kelima komponen dengan metadata judul.
8. `docs/CHANGES/ANDALAN-22.md` - Dokumen ringkasan perubahan ini.

## File yang Diubah
Tidak ada (sesuai aturan ketat: tidak menyentuh `demos.ts`, `gen-demos.mjs`, komponen demo lain, atau halaman utama).

## Catatan
- Tidak ada dependensi baru yang ditambahkan.
- Memakai Tailwind CSS v4 class utility modern (`bg-linear-to-br`, dsb.).
- Seluruh aset visual menggunakan CSS gradient, ikon `lucide-react`, dan inisial monogram tanpa ketergantungan pada gambar eksternal.

## Verifikasi
- `pnpm install --frozen-lockfile && pnpm build` (berhasil hijau, rute statis ter-generate sempurna termasuk `/demo/legal` dengan 26/26 halaman).
- `npm test` dijalankan untuk verifikasi repo-wide (output persis: `npm error Missing script: "test"` karena repositori belum mendefinisikan script test di `package.json`).
