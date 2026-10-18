# Ringkasan Perubahan: ANDALAN-62

## Judul
Design Pass (human-grade-web-design) untuk 10 Demo Kategori Kuliner & F&B

## Deskripsi
Melakukan audit dan pembersihan estetika "AI slop" sesuai standar panduan `human-grade-web-design` pada 10 halaman demo portofolio kategori Kuliner & F&B:
1. `/demo/restoran` (Rasa Nusantara)
2. `/demo/kafe` (Kopi Titik Temu)
3. `/demo/katering` (Berkah Rasa Catering)
4. `/demo/bakery` (Dapur Roti Nusantara)
5. `/demo/warung` (Warung Sederhana Jaya)
6. `/demo/toko-kue` (Manis Kue & Dessert)
7. `/demo/food-truck` (Roda Rasa Food Truck)
8. `/demo/oleh-oleh` (Oleh-Oleh Khas Situbondo)
9. `/demo/ayam-goreng` (Ayam Geprek Mantap)
10. `/demo/minuman` (Segar Boba & Juice)

## Perbaikan yang Diterapkan
- **R1 (Hapus blur blob dekoratif)**: Menghapus elemen `div` blur hiasan murni tanpa konten (`blur-2xl`, `blur-3xl`) pada hero dan banner section di `KafeHero`, `KateringHero`, `BakeryHero`, `WarungHero`, `TokoKueHero`, `TokoKueOrderWA`, `FoodTruckHero`, dan `OlehHero`.
- **R2 (Netralkan colored drop-shadow)**: Mengganti drop shadow berwarna (seperti `shadow-amber-500/20`, `shadow-pink-500/25`) menjadi drop shadow netral (`shadow-sm`, `hover:shadow-md`) di `BakeryHero` dan `TokoKueHero`.
- **R3 (Koreksi radius rounded-3xl)**: Mengubah `rounded-3xl` menjadi `rounded-xl` di seluruh container kartu/section pada `BakeryContact`, `BakeryPackages`, `TokoKueCustom`, `TokoKueOrderWA`, `FoodTruckHero`, `OlehContact`, `OlehHampers`, `OlehHero`, `OlehShipping`, dan `MinumanContact`.
- **R4 (Perbaikan kontras teks abu di latar terang)**: Memperbaiki kontras teks abu muda (`text-neutral-400` -> `text-neutral-600`) pada latar terang di `TokoKueCatalog` dan `MinumanPaket`. Teks abu di latar gelap dipertahankan sesuai aturan.
- **R5 (Eliminasi warna neon)**: Menetralkan aksen neon `cyan` pada `MinumanHero`, `MinumanTopping`, dan `MinumanContact` ke variasi tema netral/teal (`to-teal-950/30`, `from-teal-950 to-neutral-900`, `from-teal-950 via-neutral-900 to-teal-950`).
- **R6 (State fokus interaktif)**: Menambahkan utilitas aksesibilitas fokus keyboard (`focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ...`) pada seluruh tombol utama, CTA WhatsApp, tombol filter, dan tautan navigasi di 10 demo.
- **R7 (Audit copy buzzword)**: Memastikan copy tetap natural, lugas, spesifik, dan bebas dari buzzword tanpa mengubah data maupun fakta bisnis.

## File yang Diubah
1. `src/components/demo/restoran/RestoHero.tsx`
2. `src/components/demo/restoran/RestoMenu.tsx`
3. `src/components/demo/restoran/RestoContact.tsx`
4. `src/components/demo/kafe/KafeHero.tsx`
5. `src/components/demo/kafe/KafeMenu.tsx`
6. `src/components/demo/kafe/KafeEvents.tsx`
7. `src/components/demo/kafe/KafeContact.tsx`
8. `src/components/demo/katering/KateringHero.tsx`
9. `src/components/demo/katering/KateringPackages.tsx`
10. `src/components/demo/katering/KateringContact.tsx`
11. `src/components/demo/bakery/BakeryHero.tsx`
12. `src/components/demo/bakery/BakeryCatalog.tsx`
13. `src/components/demo/bakery/BakeryPackages.tsx`
14. `src/components/demo/bakery/BakeryContact.tsx`
15. `src/components/demo/warung/WarungHero.tsx`
16. `src/components/demo/warung/WarungMenu.tsx`
17. `src/components/demo/warung/WarungPaket.tsx`
18. `src/components/demo/warung/WarungAntar.tsx`
19. `src/components/demo/warung/WarungContact.tsx`
20. `src/components/demo/toko-kue/TokoKueHero.tsx`
21. `src/components/demo/toko-kue/TokoKueCatalog.tsx`
22. `src/components/demo/toko-kue/TokoKueCustom.tsx`
23. `src/components/demo/toko-kue/TokoKueOrderWA.tsx`
24. `src/components/demo/food-truck/FoodTruckHero.tsx`
25. `src/components/demo/food-truck/FoodTruckMenu.tsx`
26. `src/components/demo/food-truck/FoodTruckSchedule.tsx`
27. `src/components/demo/food-truck/FoodTruckEvents.tsx`
28. `src/components/demo/food-truck/FoodTruckContact.tsx`
29. `src/components/demo/oleh-oleh/OlehHero.tsx`
30. `src/components/demo/oleh-oleh/OlehCatalog.tsx`
31. `src/components/demo/oleh-oleh/OlehHampers.tsx`
32. `src/components/demo/oleh-oleh/OlehShipping.tsx`
33. `src/components/demo/oleh-oleh/OlehContact.tsx`
34. `src/components/demo/ayam-goreng/AyamHero.tsx`
35. `src/components/demo/ayam-goreng/AyamMenu.tsx`
36. `src/components/demo/ayam-goreng/AyamPromo.tsx`
37. `src/components/demo/ayam-goreng/AyamOutlets.tsx`
38. `src/components/demo/ayam-goreng/AyamContact.tsx`
39. `src/components/demo/minuman/MinumanHero.tsx`
40. `src/components/demo/minuman/MinumanMenu.tsx`
41. `src/components/demo/minuman/MinumanTopping.tsx`
42. `src/components/demo/minuman/MinumanPaket.tsx`
43. `src/components/demo/minuman/MinumanContact.tsx`
44. `docs/CHANGES/ANDALAN-62.md`

## Verifikasi
- `npm test`:
  ```
  npm error Missing script: "test"
  npm error
  npm error To see a list of scripts, run:
  npm error   npm run
  npm error A complete log of this run can be found in: /home/msytc/.npm/_logs/2026-10-18T07_39_11_309Z-debug-0.log
  ```
- `pnpm install --frozen-lockfile && pnpm build`: Berhasil tanpa error (exit code 0).
