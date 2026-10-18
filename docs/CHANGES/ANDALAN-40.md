# Ringkasan Perubahan: ANDALAN-40

## Judul
Menambahkan Halaman Demo Toko Kelontong / Sembako (`/demo/kelontong`)

## Deskripsi
Menambahkan satu halaman demo portofolio baru bertema toko kelontong / sembako dengan brand fiktif "Kelontong Sembako Murah". Halaman menyusun lima komponen section kecil: hero + CTA WhatsApp, daftar sembako harian beserta harga dan tombol pesan per item, tiga paket belanja (Hemat, Keluarga, Warung), informasi pesan antar + area layanan, serta kontak/order WhatsApp dengan footer demo. Seluruh CTA memakai helper `waLink` dari `src/lib/demo/wa.ts` dan visual dibangun tanpa gambar eksternal (gradien, emoji, ikon Lucide) sesuai konvensi demo.

## File yang Dibuat
1. `src/components/demo/kelontong/KelontongHero.tsx` - Section hero dengan badge niche, CTA lihat harga & pesan WhatsApp, dan tiga sorotan keunggulan.
2. `src/components/demo/kelontong/KelontongProduk.tsx` - Delapan sembako harian (beras, gula, minyak, telur, dll.) dengan satuan, harga, dan tombol pesan WhatsApp per item.
3. `src/components/demo/kelontong/KelontongPaket.tsx` - Tiga paket belanja dengan daftar isi, harga, penanda "Paling Laris", dan tombol pesan paket.
4. `src/components/demo/kelontong/KelontongAntar.tsx` - Tiga kartu layanan antar (ongkir, jadwal, pembayaran) dan daftar area antar.
5. `src/components/demo/kelontong/KelontongContact.tsx` - CTA order WhatsApp, alamat toko, jam buka, kontak, dan footer demo.
6. `src/app/demo/kelontong/page.tsx` - Rute App Router yang merender kelima komponen di dalam `<main>` dengan `export const metadata`.
7. `src/lib/demo/items/kelontong.ts` - Item registry demo dengan `slug: "kelontong"`, `category: "Retail & Toko"`, `package: "starter"`, dan aksen lime/green.
8. `docs/CHANGES/ANDALAN-40.md` - Dokumen ringkasan perubahan ini.

## Catatan
- `src/lib/demo/demos.ts` dan `scripts/gen-demos.mjs` tidak disentuh (agregator diregenerasi otomatis).
- Item demo lain, halaman/komponen utama, layout global, `schema/`, `tests/setup/`, dan `AGENTS.md` tidak diubah.
- Tidak ada dependensi baru dan tidak ada gambar eksternal; Tailwind v4 memakai `bg-linear-to-*`.

## Verifikasi
- `npm test` dijalankan di foreground; repo tidak memiliki skrip test sehingga npm melaporkan `Missing script: "test"`.
- `pnpm install --frozen-lockfile && pnpm build` dijalankan di foreground dan berhasil hijau (exit code 0, `✓ Compiled successfully`, rute `○ /demo/kelontong` ter-prerender tanpa error).
