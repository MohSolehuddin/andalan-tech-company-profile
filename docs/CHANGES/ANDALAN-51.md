# Ringkasan Perubahan: ANDALAN-51

## Judul
Menambahkan Halaman Demo Showroom & Dealer Motor (`/demo/motor`)

## Deskripsi
Menambahkan satu halaman demo portofolio baru bertema Showroom & Dealer Motor dengan brand fiktif "Motor Jaya Showroom". Halaman menyusun 5 komponen section terpisah (<200 baris/file):
1. **MotorHero**: Section hero dengan branding showroom motor resmi, USP (garansi mesin, DP ringan, 1 hari ACC), tombol CTA konsultasi WhatsApp, tombol navigasi stok, serta kartu promo DP ringan & bonus helm/jaket.
2. **MotorInventory**: Katalog interaktif unit motor ready stock baru & bekas (bebek, matic, sport) dilengkapi filter kategori, spesifikasi mesin, harga cash, rincian DP dan angsuran bulanan, serta tombol pesan langsung via WhatsApp per unit.
3. **MotorFinancing**: Skema dan simulasi kredit ringan bekerja sama dengan leasing rekanan terpercaya (FIFGROUP, Adira, OTO, MUF, BAF), alur 4 langkah pengajuan berkas kilat (KTP & KK), dan CTA WhatsApp untuk minta tabel angsuran.
4. **MotorServices**: Layanan bengkel showroom terpadu meliputi servis rutin & scanner injeksi, oli dan suku cadang original bergaransi, fasilitas trade-in (tukar tambah), dan booking jadwal servis anti-antre via WhatsApp.
5. **MotorContact**: Informasi lokasi showroom, alamat (Situbondo), jam operasional, layanan pelanggan WhatsApp, dan opsi booking test ride.

Seluruh CTA WhatsApp menggunakan helper `waLink` dari `src/lib/demo/wa.ts` dan antarmuka dibangun tanpa gambar eksternal (menggunakan gradien linear Tailwind v4 `bg-linear-to-*`, ikon Lucide, dan badge visual).

## File yang Dibuat
1. `src/lib/demo/items/motor.ts` - Item registry demo dengan `slug: "motor"`, `name: "Motor Jaya Showroom"`, `category: "Properti, Travel & Otomotif"`, `package: "bisnis"`, dan aksen warna oranye/merah.
2. `src/components/demo/motor/MotorHero.tsx` - Komponen hero dengan highlight keunggulan showroom motor dan CTA WhatsApp.
3. `src/components/demo/motor/MotorInventory.tsx` - Komponen katalog stok motor dengan filter kategori (Matic, Bebek, Sport) dan tombol WA per unit.
4. `src/components/demo/motor/MotorFinancing.tsx` - Komponen fasilitas kredit kilat, 4 langkah pengajuan, dan rekanan leasing.
5. `src/components/demo/motor/MotorServices.tsx` - Komponen bengkel resmi, sparepart original, tukar tambah, dan booking servis WA.
6. `src/components/demo/motor/MotorContact.tsx` - Komponen detail kontak showroom, jam operasional, dan booking test ride via WhatsApp.
7. `src/app/demo/motor/page.tsx` - Halaman App Router yang menyusun kelima komponen dengan `export const metadata`.
8. `docs/CHANGES/ANDALAN-51.md` - Dokumen ringkasan perubahan ini.

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
  npm error A complete log of this run can be found in: /home/msytc/.npm/_logs/2026-10-18T06_42_02_887Z-debug-0.log
  ```
- `pnpm install --frozen-lockfile && pnpm build` dijalankan di foreground dan sukses dengan exit code 0 (`✓ Compiled successfully in 33.6s`, rute `○ /demo/motor` ter-prerender statis).
