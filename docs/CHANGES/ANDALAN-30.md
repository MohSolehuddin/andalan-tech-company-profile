# Ringkasan Perubahan: ANDALAN-30

## Judul
Menambahkan Halaman Demo Food Truck & Jasa Boga (`/demo/food-truck`)

## Deskripsi
Menambahkan satu halaman demo baru "Roda Rasa Food Truck & Jasa Boga" dengan slug `food-truck` pada kategori Kuliner & F&B, tier paket `starter`. Halaman berisi hero + CTA WhatsApp, menu andalan, jadwal lokasi food truck, paket sewa acara/event, layanan katering, serta bagian order dan kontak WhatsApp. Seluruh CTA menggunakan helper `waLink` dan desain memakai gradien/emoji tanpa gambar eksternal maupun dependensi baru.

## File yang Dibuat
1. `src/lib/demo/items/food-truck.ts` - Item registry demo `food-truck` dengan field `category`, `package`, dan metadata kartu.
2. `src/app/demo/food-truck/page.tsx` - Halaman demo yang menyusun komponen dan mengekspor `metadata`.
3. `src/components/demo/food-truck/FoodTruckHero.tsx` - Hero, tagline, CTA WhatsApp, dan ringkasan jadwal hari ini.
4. `src/components/demo/food-truck/FoodTruckMenu.tsx` - Enam menu andalan dengan harga dan tombol pesan.
5. `src/components/demo/food-truck/FoodTruckSchedule.tsx` - Jadwal lokasi mingguan dan CTA private booking.
6. `src/components/demo/food-truck/FoodTruckEvents.tsx` - Paket sewa food truck, booth live cooking, dan katering/nasi box.
7. `src/components/demo/food-truck/FoodTruckContact.tsx` - Informasi kontak, jam operasional, dan CTA order WhatsApp.
8. `docs/CHANGES/ANDALAN-30.md` - Dokumen ringkasan perubahan ini.

## Catatan
- `src/lib/demo/demos.ts` dan `scripts/gen-demos.mjs` tidak diubah sama sekali.
- Item demo lain, halaman/komponen utama, schema, `tests/setup/`, dan `AGENTS.md` tidak disentuh.
- Tidak ada dependensi baru dan tidak ada gambar eksternal.
- Tailwind v4 digunakan dengan kelas `bg-linear-to-*`.

## Verifikasi
- `npm test` dijalankan di foreground (repo belum memiliki skrip test).
- `pnpm install --frozen-lockfile && pnpm build` dijalankan di foreground.
