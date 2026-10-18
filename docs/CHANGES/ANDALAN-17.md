# Ringkasan Perubahan: ANDALAN-17

## Judul
Penambahan Halaman Demo Portfolio Asuransi / Agen Proteksi (`/demo/asuransi`)

## Deskripsi
Menambahkan 1 demo website portfolio baru untuk niche Asuransi & Perlindungan dengan data fiktif realistis (Bahasa Indonesia). Demo memakai slug `asuransi` dengan brand "Amanah Proteksi" dan aksen warna biru/teal (`from-blue-700 to-teal-600`).

## File yang Dibuat
1. `src/components/demo/asuransi/AsuransiHero.tsx` - Hero gelap (blue-950) dengan gradien, tagline proteksi keluarga, tombol "Lihat Produk" (anchor), CTA konsultasi via WhatsApp (`waLink`), dan sorotan (klaim didampingi, konsultasi gratis, agen resmi berlisensi).
2. `src/components/demo/asuransi/AsuransiProducts.tsx` - 4 produk (Kesehatan, Jiwa, Pendidikan Anak, Kendaraan) dengan ikon Lucide, penjelasan singkat, ilustrasi premi statis (mis. mulai Rp 150rb/bulan), cakupan manfaat, dan tombol "Minta Ilustrasi" via WhatsApp.
3. `src/components/demo/asuransi/AsuransiWhy.tsx` - 3 keunggulan (klaim dibantu penuh, agen resmi berlisensi, konsultasi gratis) plus 3 kartu statistik (nasabah aktif, klaim disetujui, rating kepuasan).
4. `src/components/demo/asuransi/AsuransiSteps.tsx` - Alur klaim 4 langkah (hubungi agen, lengkapi dokumen, verifikasi, dana cair) dan CTA pengajuan klaim via WhatsApp.
5. `src/components/demo/asuransi/AsuransiContact.tsx` - 3 testimoni nasabah, CTA konsultasi gratis via `waLink`, informasi kantor/jam layanan, dan hak cipta demo.
6. `src/app/demo/asuransi/page.tsx` - Halaman Next.js App Router yang menyusun seluruh komponen demo asuransi beserta `export const metadata`.

## File yang Diubah
1. `src/lib/demo/demos.ts` - Menambahkan 1 entri demo `asuransi` ke array `demoItems` dengan seluruh properti `DemoItem` terisi (`slug`, `name`, `niche`, `tagline`, `description`, `emoji`, `accentBg`, `accentText`, `ring`, `highlights`). Tidak ada objek lain yang diubah.

## Catatan
- Tidak ada dependency baru; hanya `next`, `react`, `lucide-react`, Tailwind v4 (`bg-linear-to-*`), dan helper `waLink`.
- Menghindari gambar eksternal (menggunakan gradien Tailwind, blok warna, dan emoji).
- Kode mengikuti standar repo: ES6 (`=>`), `const`, TypeScript, dan App Router.
- Perubahan terisolasi tanpa menyentuh halaman/komponen utama atau demo lain.

## Verifikasi
- `pnpm install --frozen-lockfile && pnpm build` — lihat hasil build pada laporan tugas.
