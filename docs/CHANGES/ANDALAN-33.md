# Ringkasan Perubahan: ANDALAN-33

## Judul
Menambahkan Halaman Demo Juice Bar & Boba (`/demo/minuman`)

## Deskripsi
Menambahkan satu halaman demo portofolio baru bertema Juice Bar / Boba / Minuman dengan brand fiktif "Segar Boba & Juice". Halaman menyusun lima komponen section kecil: hero + CTA WhatsApp, menu minuman (boba, cold-pressed juice, smoothie + harga), pilihan kustomisasi topping & tingkat manis/es, paket bundling hemat & order kantor, serta alur pemesanan dan kontak WhatsApp terintegrasi. Seluruh aksi pemesanan terhubung ke WhatsApp menggunakan helper `waLink` dari `src/lib/demo/wa.ts`. Visual dibangun sepenuhnya menggunakan utilitas warna, gradien Tailwind v4 (`bg-linear-to-*`), dan ikon Lucide tanpa aset gambar eksternal.

## File yang Dibuat
1. `src/components/demo/minuman/MinumanHero.tsx` - Section hero dengan badge juice bar & boba fresh, sorotan keunggulan bahan alami, dan CTA order WhatsApp.
2. `src/components/demo/minuman/MinumanMenu.tsx` - Sembilan pilihan menu minuman dari seri Boba, Fresh Juice, dan Smoothie lengkap dengan harga, deskripsi rasa, badge, dan tombol pesan per item.
3. `src/components/demo/minuman/MinumanTopping.tsx` - Pilihan 6 topping favorit (boba aren, cheese cream, grass jelly, pudding telur, dll.) serta panduan kustomisasi level manis dan es.
4. `src/components/demo/minuman/MinumanPaket.tsx` - Tiga paket bundling hemat (Paket Duo, Paket Bestie Triplet, Paket Kantor & Meeting) dengan harga promo dan perincian isi paket.
5. `src/components/demo/minuman/MinumanContact.tsx` - Tiga langkah mudah pemesanan, kartu penawaran pesanan partai/acara, informasi operasional kedai, kontak WhatsApp, dan footer demo.
6. `src/app/demo/minuman/page.tsx` - Rute App Router Next.js yang merender kelima komponen di dalam `<main>` semantik lengkap dengan metadata halaman.
7. `src/lib/demo/items/minuman.ts` - Item registri demo dengan `slug: "minuman"`, `category: "Kuliner & F&B"`, `package: "starter"`, dan aksen warna teal/cyan.
8. `docs/CHANGES/ANDALAN-33.md` - Dokumen ringkasan perubahan ini.

## Catatan
- `src/lib/demo/demos.ts` dan `scripts/gen-demos.mjs` tidak disentuh sesuai aturan isolasi pengerjaan (agregator dibuat otomatis).
- Item demo lain, halaman/komponen utama, layout global, `schema/`, `tests/setup/`, dan `AGENTS.md` tidak diubah sama sekali.
- Tidak ada dependensi baru dan tidak ada aset gambar eksternal yang ditambahkan.

## Verifikasi
- `npm test` dijalankan di foreground dan dilaporkan persis (`npm error Missing script: "test"`).
- `pnpm install --frozen-lockfile && pnpm build` dijalankan di foreground dan berhasil hijau tanpa error.
