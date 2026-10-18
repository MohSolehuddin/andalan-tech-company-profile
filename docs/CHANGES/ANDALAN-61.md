# Ringkasan Perubahan: ANDALAN-61

## Judul
Menambahkan Halaman Demo Digital Agency & Software House (`/demo/agency`)

## Deskripsi
Menambahkan satu halaman demo portofolio baru bertema Digital Agency / Software House dengan brand fiktif "Andalan Digital Agency". Halaman menyusun 5 komponen section terpisah:
1. `AgencyHero`: Section hero dengan badge kategori, judul utama beraksen gradien, subjudul deskripsi kapabilitas digital, CTA konsultasi via WhatsApp dan tombol navigasi layanan, serta 4 poin kepercayaan (50+ Proyek Digital Tuntas, Kode Bersih & Bergaransi, Desain Modern & Responsif, Tech Stack Terkini).
2. `AgencyServices`: Katalog 5 layanan unggulan (Pembuatan Website Modern, Pengembangan Aplikasi Mobile & Web SaaS, Optimasi SEO & Google Ads, Social Media Management, Branding & Desain UI/UX) dengan deskripsi ringkas, tag teknologi, dan tautan konsultasi WhatsApp per layanan.
3. `AgencyPortfolio`: 4 studi kasus proyek fiktif realistis (ModaIndo Fashion Store, KirimCepat Logistik, SehatKu Telekonsultasi, Mitra Karya Teknik) dengan metrik hasil/pertumbuhan riil, badge kategori, tech stack chips, dan CTA diskusi proyek via WhatsApp.
4. `AgencyProcessPricing`: Alur kerja 4 langkah transparan (Discovery & Brief, UI/UX & Arsitektur, Development & QA, Deployment & Support) serta transparansi 3 pilihan paket layanan (Paket Launchpad, Paket Business Growth, Paket Enterprise/Custom Software) lengkap dengan rincian fitur dan tombol pesan paket via WhatsApp.
5. `AgencyContact`: Formulir informasi kontak agensi, ajakan diskusi proyek baru, jam operasional, alamat kantor fiktif realistis, tautan email, dan tombol konsultasi langsung via WhatsApp.

Seluruh CTA WhatsApp menggunakan helper `waLink` dari `src/lib/demo/wa.ts` dan visual dibangun tanpa gambar eksternal (menggunakan gradien Tailwind v4 `bg-linear-to-*`, ikon Lucide, dan kombinasi warna tema violet-indigo).

## File yang Dibuat
1. `src/components/demo/agency/AgencyHero.tsx` - Section hero dengan badge, gradien background, trust metrics, dan CTA WhatsApp.
2. `src/components/demo/agency/AgencyServices.tsx` - Katalog 5 layanan agensi beserta tag keahlian dan tombol konsultasi per layanan via WhatsApp.
3. `src/components/demo/agency/AgencyPortfolio.tsx` - 4 studi kasus portofolio klien dengan metrik dampak dan tombol WhatsApp.
4. `src/components/demo/agency/AgencyProcessPricing.tsx` - 4 langkah alur kerja dan 3 paket harga layanan agensi.
5. `src/components/demo/agency/AgencyContact.tsx` - Informasi jam kantor, alamat, email, dan CTA WhatsApp penutup.
6. `src/app/demo/agency/page.tsx` - Halaman App Router yang merender kelima komponen di dalam `<main>` dengan `export const metadata`.
7. `src/lib/demo/items/agency.ts` - Item registry demo dengan `slug: "agency"`, `category: "Pendidikan & Teknologi"`, `package: "pro"`, dan aksen warna violet/indigo.
8. `docs/CHANGES/ANDALAN-61.md` - Dokumen ringkasan perubahan ini.

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
  npm error A complete log of this run can be found in: /home/msytc/.npm/_logs/2026-10-18T07_06_24_789Z-debug-0.log
  ```
  (repo tidak memiliki skrip test di package.json)
- `pnpm install --frozen-lockfile && pnpm build` dijalankan di foreground dan berhasil hijau (exit code 0, `✓ Compiled successfully in 9.2s`, `✓ Generating static pages (66/66)`, rute `○ /demo/agency` ter-prerender statis tanpa error).
