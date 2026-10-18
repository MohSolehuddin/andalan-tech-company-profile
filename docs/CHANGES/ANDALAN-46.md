# Ringkasan Perubahan: ANDALAN-46

## Judul
Menambahkan Halaman Demo Servis AC & Home Cleaning (`/demo/home-service`)

## Deskripsi
Menambahkan satu halaman demo portofolio baru bertema Servis AC & Home Cleaning dengan brand fiktif "ServisPro AC & Home Cleaning". Halaman menyusun lima komponen section kecil:
1. Hero + CTA "Lihat Layanan" dan booking WhatsApp, badge keunggulan teknisi berpengalaman, jadwal fleksibel, serta alat lengkap.
2. Layanan (6 kartu): cuci AC, bongkar-pasang AC, cleaning rumah, cleaning kantor, plumbing, serta isi freon & perbaikan.
3. Paket & harga transparan: Paket Hemat (Rp 65.000/unit), Paket Keluarga 3 unit (Rp 175.000, paling populer), dan Paket Kantor Bulanan (Rp 600.000), lengkap dengan tombol pesan WhatsApp per paket.
4. Keunggulan/garansi: teknisi terlatih, harga transparan, garansi pengerjaan, dan tepat waktu.
5. Booking WhatsApp dengan langkah pemesanan 1-2-3, area layanan, jam operasional, kontak, dan footer demo.

Seluruh CTA WhatsApp menggunakan helper `waLink` dari `src/lib/demo/wa.ts` dan visual dibangun tanpa gambar eksternal (gradien Tailwind v4 `bg-linear-to-*`, emoji, dan ikon Lucide). Semua komponen berukuran kecil (<200 baris per file).

## File yang Dibuat
1. `src/components/demo/home-service/HomeServiceHero.tsx` - Section hero dengan badge, CTA lihat layanan & booking WhatsApp, serta poin keunggulan.
2. `src/components/demo/home-service/HomeServiceServices.tsx` - Enam kartu layanan (cuci AC, bongkar-pasang, cleaning rumah, cleaning kantor, plumbing, isi freon).
3. `src/components/demo/home-service/HomeServicePackages.tsx` - Tiga kartu paket + harga dengan penanda paket populer dan tombol pesan WhatsApp per paket.
4. `src/components/demo/home-service/HomeServiceWhy.tsx` - Empat alasan memilih: teknisi terlatih, harga transparan, garansi pengerjaan, tepat waktu.
5. `src/components/demo/home-service/HomeServiceBooking.tsx` - Alur booking 3 langkah, info area/jam/kontak, CTA WhatsApp, dan footer demo.
6. `src/app/demo/home-service/page.tsx` - Halaman App Router yang merender kelima komponen di dalam `<main>` dengan `export const metadata`.
7. `src/lib/demo/items/home-service.ts` - Item registry demo dengan `slug: "home-service"`, `category: "Jasa & Profesional"`, `package: "starter"`, aksen warna cyan/sky.
8. `docs/CHANGES/ANDALAN-46.md` - Dokumen ringkasan perubahan ini.

## Catatan
- `src/lib/demo/demos.ts` dan `scripts/gen-demos.mjs` tidak disentuh (sesuai aturan); item `home-service.ts` siap diregistrasi otomatis oleh generator pada tahap registrasi terpisah.
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
  npm error A complete log of this run can be found in: /home/msytc/.npm/_logs/2026-10-18T06_42_52_552Z-debug-0.log
  ```
  (repo tidak memiliki skrip test di package.json)
- `pnpm install --frozen-lockfile && pnpm build` dijalankan di foreground dan berhasil hijau (exit code 0, `✓ Compiled successfully in 25.6s`, `✓ Generating static pages (52/52)`, rute `○ /demo/home-service` ter-prerender statis tanpa error).
