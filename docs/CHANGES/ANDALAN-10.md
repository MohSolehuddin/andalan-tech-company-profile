# Ringkasan Perubahan: ANDALAN-10

## Judul
Penambahan Halaman Demo Portfolio Kafe & Coffee Shop (`/demo/kafe`)

## Deskripsi
Menambahkan 1 demo website portfolio baru untuk niche Kafe & Coffee Shop dengan slug `kafe` ("Kopi Titik Temu") untuk melengkapi katalog demo siap pakai Andalan Tech di Next.js App Router.

## File yang Dibuat
1. `src/components/demo/kafe/KafeHero.tsx` - Hero bertema gelap hangat dengan gradien stone/amber, badge specialty coffee, headline ruang temu, fasilitas kerja cepat (WiFi 100 Mbps, coworking & colokan luas, single origin), rating 4.9 dari 450+ ulasan, serta CTA reservasi meja via WhatsApp dan tautan menu.
2. `src/components/demo/kafe/KafeMenu.tsx` - Grid 9 item menu terkurasi (kategori Kopi Signature, Artisan Pastry, dan Non-Coffee) dengan deskripsi bahan, harga transparan, badge keunggulan, tombol order via `waLink` per produk, dan callout preferensi susu plant-based/less sweet.
3. `src/components/demo/kafe/KafeVibe.tsx` - Showcase suasana dan fasilitas tempat (WiFi fiber optic, area coworking ergonomis, live acoustic, outdoor garden) dilengkapi callout in-house roastery serta metrik kapasitas dan fasilitas.
4. `src/components/demo/kafe/KafeEvents.tsx` - Jadwal event mingguan (Acoustic Sunset Session, Workshop Manual Brew & Cupping, Community Board Game & Meetup) dengan hari, jam, biaya, dan tombol pendaftaran via `waLink`.
5. `src/components/demo/kafe/KafeContact.tsx` - Section informasi kontak dan jam operasional (Senin–Kamis dan Jumat–Minggu), alamat lengkap di Situbondo, petunjuk lokasi, kontak WhatsApp, email kerjasama, serta tombol booking acara/ruang privat via `waLink`.
6. `src/app/demo/kafe/page.tsx` - Halaman Next.js App Router yang menyusun seluruh komponen demo kafe beserta metadata SEO.

## File yang Diubah
1. `src/lib/demo/demos.ts` - Menambahkan entri demo `kafe` ke array `demoItems` dengan properti lengkap (`slug`, `name`, `niche`, `tagline`, `description`, `emoji`, `accentBg`, `accentText`, `ring`, `highlights`) dan aksen warna amber/stone.

## Catatan
- Tidak ada dependency baru yang ditambahkan; hanya menggunakan `next`, `react`, `lucide-react`, Tailwind v4 (`bg-linear-to-*`), dan helper `waLink`.
- Menghindari gambar eksternal dengan memanfaatkan gradien Tailwind v4, blok warna, serta ikon Lucide.
- Perubahan minimal tanpa memodifikasi kode inti atau demo lain.
