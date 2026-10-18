# Ringkasan Perubahan: ANDALAN-28

## Judul
Menambahkan Halaman Demo Portfolio Baru "Warung Sederhana Jaya" (`/demo/warung`)

## Deskripsi
Menambahkan satu halaman demo portfolio baru bertema Warung / Rumah Makan dengan slug `warung` pada repositori `andalan-tech-company-profile`. Halaman disusun dari 5 komponen kecil di `src/components/demo/warung/` yang menampilkan hero + CTA, menu harian dalam grid beserta harga, paket nasi lengkap, informasi pesan antar, jam buka, dan order WhatsApp. Seluruh CTA diarahkan ke WhatsApp resmi Andalan Tech melalui helper `waLink` dari `src/lib/demo/wa.ts`. Registri demo tetap mengikuti pola per file di `src/lib/demo/items/warung.ts`.

## File yang Dibuat
1. `src/lib/demo/items/warung.ts` - Item registry demo `warung` (kategori `Kuliner & F&B`, paket `starter`, brand "Warung Sederhana Jaya", emoji 🍛, aksen red/orange).
2. `src/components/demo/warung/WarungHero.tsx` - Hero dengan latar gradien gelap red/orange, badge, CTA order WhatsApp, dan info singkat (jam buka, layanan, lokasi).
3. `src/components/demo/warung/WarungMenu.tsx` - Grid menu harian (9 item: lauk utama, sayur, minuman) lengkap dengan harga, badge, tombol pesan per item, dan ajakan titip pesanan.
4. `src/components/demo/warung/WarungPaket.tsx` - Tiga paket nasi lengkap (Hemat, Komplit, Jumbo) dengan rincian isi, harga, dan tombol order WhatsApp.
5. `src/components/demo/warung/WarungAntar.tsx` - Alur pesan antar 3 langkah, informasi area/ongkir/jam antar, dan CTA pesan antar WhatsApp.
6. `src/components/demo/warung/WarungContact.tsx` - Jam buka per hari, alamat, kontak, dan CTA order WhatsApp.
7. `src/app/demo/warung/page.tsx` - Halaman App Router `/demo/warung` dengan `metadata` judul dan deskripsi, menyusun kelima komponen di dalam `<main>`.
8. `docs/CHANGES/ANDALAN-28.md` - Dokumen ringkasan perubahan ini.

## Catatan
- `src/lib/demo/demos.ts`, `scripts/gen-demos.mjs`, item demo lain, halaman/komponen utama, layout global, schema, dan tests/setup tidak disentuh.
- Tidak ada dependensi baru. Desain memakai Tailwind v4 (`bg-linear-to-*`) dengan gradien, emoji, dan lucide-react tanpa gambar eksternal.
- Perubahan seminimal mungkin; file di luar lingkup tugas tidak diubah.

## Verifikasi
- `npm test` dijalankan di foreground dan dilaporkan persis.
- `pnpm install --frozen-lockfile && pnpm build` dijalankan di foreground; hasil dilaporkan apa adanya.
