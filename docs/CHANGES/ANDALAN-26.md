# Ringkasan Perubahan: ANDALAN-26

## Judul
Menambahkan Halaman Paket Harga (`/paket`), Registry `pricing.ts`, Badge Harga Demo, Banner CTA Layout Demo, dan Tautan Footer

## Deskripsi
Menambahkan sistem paket harga indikatif website ke dalam `andalan-tech-company-profile`. Membuat Single Source of Truth `src/lib/pricing.ts` yang mendefinisikan tipe `PackageInfo`, konstanta `PACKAGE_TIERS` (starter, bisnis, pro, custom), daftar `ADDONS`, helper format mata uang IDR `formatIDR`, serta lookup `tierById`. Membuat halaman publik `/paket` (`src/app/paket/page.tsx`) dengan kartu harga per tier, daftar add-ons, catatan harga indikatif, FAQ, dan tombol CTA pemesanan via WhatsApp. Mengintegrasikan badge harga paket pada masing-masing kartu demo di halaman katalog `/demo` (`src/app/demo/page.tsx`). Menambahkan band CTA harga mulai Rp 1.500.000 dengan tautan ke `/paket` dan tombol WhatsApp pada wrapper layout demo (`src/app/demo/layout.tsx`). Menambahkan tautan navigasi "Paket & Harga" pada komponen footer global (`src/components/Footer.tsx`).

## File yang Dibuat
1. `src/lib/pricing.ts` - Single Source of Truth untuk `PackageInfo`, `PACKAGE_TIERS`, `ADDONS`, `formatIDR`, dan `tierById`.
2. `src/app/paket/page.tsx` - Halaman App Router `/paket` berisi hero, kartu tier, daftar add-ons, catatan indikatif, FAQ, dan penutup CTA WhatsApp.
3. `docs/PRICING.md` - Dokumentasi spesifikasi paket harga, layanan tambahan, dan integrasi kode.
4. `docs/CHANGES/ANDALAN-26.md` - Dokumen ringkasan perubahan ini.

## File yang Diubah
1. `src/app/demo/page.tsx` - Menambahkan badge harga indikatif (`{firstPrice} · perpanjang {renewalPrice}/thn`) pada tiap kartu demo berdasarkan `demo.package`.
2. `src/app/demo/layout.tsx` - Menambahkan band CTA di bagian bawah konten demo dengan rincian harga mulai tier Starter, link ke `/paket`, dan tombol WhatsApp.
3. `src/components/Footer.tsx` - Menambahkan 1 link navigasi ke `/paket` ("Paket & Harga").

## Catatan
- `src/lib/demo/demos.ts`, `scripts/gen-demos.mjs`, dan `src/lib/demo/items/*` tidak diubah sama sekali.
- Halaman dan komponen utama lain (`Hero`, `Benefits`, `Pricing`, `Contact`, `page.tsx` utama) tidak diubah.
- Tidak ada dependensi baru yang ditambahkan.
- Perubahan kode menggunakan styling Tailwind v4 (`bg-linear-to-*`, border tokens) dan ES6 (`const`, arrow functions).

## Verifikasi
- `npm test` dijalankan di foreground dan dilaporkan persis (`npm error Missing script: "test"`).
- `pnpm install --frozen-lockfile && pnpm build` dijalankan di foreground dan menghasilkan clean build berhasil (exit code 0, 32/32 routes static/prerendered).
