# Ringkasan Perubahan: ANDALAN-53

## Judul
Menambahkan Halaman Demo Sewa Apartemen & Kost (`/demo/sewa-apartemen`)

## Deskripsi
Menambahkan satu halaman demo portofolio baru bertema Sewa Apartemen & Kost dengan brand fiktif "Huni Apartemen & Kost". Halaman menyusun empat komponen section kecil:
1. `ApartemenHero.tsx`: Section hero dengan badge hunian praktis dan strategis, headline, deskripsi, CTA WhatsApp tanya ketersediaan unit, CTA ke daftar unit, serta poin kepercayaan (unit siap huni, bebas biaya IPL/admin, akses 24 jam & CCTV).
2. `ApartemenListings.tsx`: Katalog pilihan unit (grid 6 unit apartemen & kost) dengan harga sewa bulanan, besaran deposit, tipe tempat tidur, spesifikasi kamar mandi, fasilitas kamar, dan tombol WhatsApp tanya ketersediaan unit spesifik.
3. `ApartemenFacilities.tsx`: Fasilitas lengkap penghuni (AC hemat energi, WiFi fiber 100 Mbps, parkir motor & mobil aman, keamanan 24 jam CCTV, water heater, smart card / digital lock, dapur bersama / pantry, dan layanan laundry).
4. `ApartemenTouringBooking.tsx`: Alur 4 langkah survey lokasi & virtual tour 360/video call, info kantor pengelola Huni Residence, jam operasional, ketentuan sewa singkat, tips sewa, dan tombol WhatsApp booking / jadwalkan survey.

Seluruh CTA WhatsApp menggunakan helper `waLink` dari `src/lib/demo/wa.ts` dan visual dibangun tanpa gambar eksternal (gradien Tailwind v4 `bg-linear-to-*`, emoji, dan ikon Lucide).

## File yang Dibuat
1. `src/components/demo/sewa-apartemen/ApartemenHero.tsx` - Section hero dengan badge hunian, CTA WhatsApp, dan trust metrics.
2. `src/components/demo/sewa-apartemen/ApartemenListings.tsx` - Katalog unit sewa apartemen & kost dengan spesifikasi lengkap dan CTA WhatsApp per unit.
3. `src/components/demo/sewa-apartemen/ApartemenFacilities.tsx` - Grid fasilitas lengkap (AC, WiFi, parkir, security, laundry, dll).
4. `src/components/demo/sewa-apartemen/ApartemenTouringBooking.tsx` - Alur touring lokasi/virtual tour, kontak pengelola, dan CTA booking WhatsApp.
5. `src/app/demo/sewa-apartemen/page.tsx` - Halaman App Router yang merender keempat komponen di dalam `<main>` dengan `export const metadata`.
6. `src/lib/demo/items/sewa-apartemen.ts` - Item registry demo dengan `slug: "sewa-apartemen"`, `category: "Properti, Travel & Otomotif"`, `package: "bisnis"`, `accentBg: "from-indigo-600 to-violet-800"`, `accentText: "text-indigo-700"`, dan `ring: "hover:border-indigo-400"`.
7. `docs/CHANGES/ANDALAN-53.md` - Dokumen ringkasan perubahan ini.

## Catatan
- `src/lib/demo/demos.ts` dan `scripts/gen-demos.mjs` tidak disentuh (sesuai aturan).
- Item demo lain, halaman/komponen utama, layout global, `schema/`, `tests/setup/`, dan `AGENTS.md` tidak diubah.
- Tidak ada dependensi baru dan tidak ada gambar eksternal; Tailwind v4 memakai `bg-linear-to-*`.
- Tidak ada git commit dan tidak ada push ke remote.

## Verifikasi
- `npm test` dijalankan di foreground dan dilaporkan persis:
  ```
  npm error Missing script: "test"
  npm error
  npm error To see a list of scripts, run:
  npm error   npm run
  npm error A complete log of this run can be found in: /home/msytc/.npm/_logs/2026-10-18T06_53_49_495Z-debug-0.log
  ```
  (repo tidak memiliki skrip test di package.json)
- `pnpm install --frozen-lockfile && pnpm build` dijalankan di foreground dan berhasil hijau (exit code 0, `✓ Compiled successfully`, `✓ Generating static pages (59/59)`, rute `○ /demo/sewa-apartemen` ter-prerender statis tanpa error).
- `pnpm lint` dijalankan di foreground; tidak ada temuan lint pada seluruh file baru `sewa-apartemen`.
