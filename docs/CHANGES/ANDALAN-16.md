# Ringkasan Perubahan: ANDALAN-16

## Judul
Penambahan Halaman Demo Portfolio Katering & Prasmanan (`/demo/katering`)

## Deskripsi
Menambahkan 1 demo website portfolio baru untuk usaha Katering & Kuliner Acara dengan data fiktif realistis berbahasa Indonesia ("Berkah Rasa Catering") pada Andalan Tech. Demo memakai slug `katering` dengan nuansa warna hangat/amber (`from-amber-600 to-yellow-600`), menampilkan hero dengan badge & USP, katalog 4 paket harga (harian, nasi box, prasmanan, snack box) disertai hitungan per porsi/box, showcase contoh menu dalam bentuk grid tanpa gambar eksternal, informasi area pengiriman & aturan minimal order, serta CTA pemesanan terintegrasi WhatsApp via `waLink`.

## File yang Dibuat
1. `src/components/demo/katering/KateringHero.tsx` - Banner hero bertema kuliner hangat dengan USP (100% Halal & Higienis, Tepat Waktu, Menu Bervariasi), tombol anchor "Lihat Pilihan Paket", dan CTA WhatsApp via `waLink`.
2. `src/components/demo/katering/KateringPackages.tsx` - 4 paket katering (Harian Rp 25rb, Nasi Box Rp 28rb [Paling Diminati], Prasmanan Rp 45rb, Snack Box Rp 15rb) dengan rincian fitur makanan, minimal order, dan tombol WhatsApp dengan pesan porsi khusus.
3. `src/components/demo/katering/KateringMenu.tsx` - Grid 6 contoh menu favorit (Ayam Bakar Madu, Rendang Minang, Nasi Liwet Solo, Kakap Asam Manis, Tumpeng Mini, Snack Box Pasar) menggunakan badge kategori, emoji, dan Tailwind v4 linear gradient tanpa gambar eksternal.
4. `src/components/demo/katering/KateringArea.tsx` - Wilayah pengiriman (Zona Utama gratis ongkir & Zona Sekunder berpenghangat), jadwal slot kirim (siang & sore), serta ketentuan minimal pemesanan dan info food tasting.
5. `src/components/demo/katering/KateringContact.tsx` - Info operasional dapur di Situbondo, alur pemesanan 3 langkah, kontak WhatsApp, CTA konsultasi pesanan, dan hak cipta template demo.
6. `src/app/demo/katering/page.tsx` - Halaman Next.js App Router yang menyusun seluruh komponen demo katering beserta `export const metadata`.

## File yang Diubah
1. `src/lib/demo/demos.ts` - Menambahkan entri demo `katering` ke array `demoItems` dengan seluruh field `DemoItem` terisi lengkap (`slug`, `name`, `niche`, `tagline`, `description`, `emoji`, `accentBg`, `accentText`, `ring`, `highlights`).

## Catatan
- Tidak ada penambahan dependency baru (hanya `next`, `react`, `lucide-react`, Tailwind v4, dan helper internal).
- Sesuai standar Tailwind v4, menggunakan `bg-linear-to-*` bukan `bg-gradient-to-*`.
- Menggunakan visual emoji dan blok gradien warna untuk menghindari dependensi gambar eksternal.
- Kode mengikuti standar repo: ES6 arrow function (`=>`), `const`, TypeScript, dan App Router.
- Perubahan terisolasi tanpa mengubah halaman atau demo lainnya.
