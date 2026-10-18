# Ringkasan Perubahan: ANDALAN-32

## Judul
Menambahkan Halaman Demo Franchise Ayam Goreng / Geprek (`/demo/ayam-goreng`)

## Deskripsi
Menambahkan satu halaman demo portofolio baru bertema franchise ayam goreng / geprek dengan brand fiktif "Ayam Geprek Mantap". Halaman menyusun lima komponen section kecil: hero + CTA WhatsApp, menu paket dengan level pedas dan harga, promo & pesan antar, daftar outlet, serta kontak/order WhatsApp dengan footer demo. Seluruh CTA memakai helper `waLink` dari `src/lib/demo/wa.ts` dan visual dibangun tanpa gambar eksternal (gradien, emoji, blok warna) sesuai konvensi demo baru.

## File yang Dibuat
1. `src/components/demo/ayam-goreng/AyamHero.tsx` - Section hero dengan badge franchise, CTA order WhatsApp, dan sorotan layanan.
2. `src/components/demo/ayam-goreng/AyamMenu.tsx` - Enam paket menu dengan deskripsi, level pedas, harga, badge, dan tombol pesan per paket.
3. `src/components/demo/ayam-goreng/AyamPromo.tsx` - Tiga kartu promo (Geprek Selasa, Promo Pelajar, Gratis Ongkir) dan banner pesan antar 30 menit.
4. `src/components/demo/ayam-goreng/AyamOutlets.tsx` - Daftar enam outlet di Jawa Timur lengkap dengan alamat, jam buka, dan tautan tanya lokasi.
5. `src/components/demo/ayam-goreng/AyamContact.tsx` - CTA order/kemitraan WhatsApp, info outlet pusat, jam buka, kontak, dan footer demo.
6. `src/app/demo/ayam-goreng/page.tsx` - Rute App Router yang merender kelima komponen di dalam `<main>` dengan `export const metadata`.
7. `src/lib/demo/items/ayam-goreng.ts` - Item registry demo dengan `slug: "ayam-goreng"`, `category: "Kuliner & F&B"`, `package: "starter"`, dan aksen merah.
8. `docs/CHANGES/ANDALAN-32.md` - Dokumen ringkasan perubahan ini.

## Catatan
- `src/lib/demo/demos.ts` dan `scripts/gen-demos.mjs` tidak disentuh (agregator diregenerasi otomatis).
- Item demo lain, halaman/komponen utama, layout global, `schema/`, `tests/setup/`, dan `AGENTS.md` tidak diubah.
- Tidak ada dependensi baru dan tidak ada gambar eksternal; Tailwind v4 memakai `bg-linear-to-*`.

## Verifikasi
- `npm test` dijalankan di foreground dan dilaporkan persis (`npm error Missing script: "test"` — repo tidak memiliki skrip test).
- `pnpm install --frozen-lockfile && pnpm build` dijalankan di foreground dan berhasil hijau (build sukses, 0 error).
