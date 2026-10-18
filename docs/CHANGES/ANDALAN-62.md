# Ringkasan Perubahan: ANDALAN-62

## Judul
Design Pass (human-grade-web-design) pada Website Utama dan Halaman Paket

## Deskripsi
Melakukan pembersihan dan perbaikan antarmuka (design pass) berbasis panduan `human-grade-web-design` pada halaman utama (landing page) dan rute paket (`/paket`) Andalan Tech untuk menghilangkan pola desain generik/AI cliches:
1. **Hero (`src/components/Hero.tsx`)**:
   - Menghilangkan teks gradien `bg-clip-text bg-linear-to-r from-primary to-accent`, menyederhanakannya menjadi solid `text-primary`.
   - Mengganti glow shadow `shadow-(--glow-primary)` pada tombol CTA dengan drop-shadow netral `shadow-sm hover:shadow-md`.
   - Menambahkan state fokus aksesibilitas `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2` pada seluruh tombol utama.
2. **Benefits (`src/components/Benefits.tsx`)**:
   - Mengubah judul beraksen gradien menjadi solid `text-primary`.
   - Menghilangkan `hover:shadow-(--glow-primary)` dan menggantinya dengan bayangan netral `hover:shadow-md`.
   - Menstandarkan sudut kartu ke `rounded-xl`.
3. **Pricing (`src/components/Pricing.tsx`)**:
   - Mengubah judul "Transparan" beraksen gradien menjadi solid `text-primary`.
   - Mengganti colored glow shadow `shadow-(--glow-primary)` pada paket highlight menjadi netral `shadow-md`.
   - Menstandarkan sudut kontainer ke `rounded-xl` serta menambahkan ring fokus keyboard pada tombol aksi.
4. **Portfolio (`src/components/Portfolio.tsx`)**:
   - Mengubah teks gradien judul menjadi solid `text-primary`.
   - Menghapus 2 elemen div dekoratif blur blob (`blur-3xl` beraksen `bg-accent/10` dan `bg-primary/10`) pada banner penawaran khusus.
   - Menyederhanakan latar banner menjadi `bg-card border border-border shadow-xs` dengan sudut `rounded-xl`.
   - Mengganti glow shadow pada kartu demo dan tombol CTA banner menjadi netral `hover:shadow-md`, serta tombol banner memakai warna solid dengan ring fokus.
5. **Contact (`src/components/Contact.tsx`)**:
   - Mengubah judul menjadi solid `text-primary`.
   - Mengganti `hover:shadow-(--glow-primary)` pada kartu kontak informasi menjadi netral `hover:shadow-md`.
   - Menambahkan ring fokus aksesibel pada tautan WhatsApp dan Email.
   - Mengubah tombol submit formulir dari gradien dan glow menjadi solid primary dengan `shadow-sm hover:shadow-md focus-visible:ring-2`.
6. **Footer (`src/components/Footer.tsx`)**:
   - Menghapus buzzword "teknologi terdepan", menggantinya dengan kalimat konkret: "Jasa pembuatan website cepat, stabil, dan teroptimasi SEO dengan Next.js untuk bisnis Anda."
   - Menghapus baris komentar teks gradien lama.
   - Menambahkan ring fokus `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-xs` pada seluruh tautan navigasi footer.
7. **Particle (`src/components/Particle.tsx`)**:
   - Mengurangi densitas partikel dari 80 node menjadi 30 node untuk menjaga keterbacaan teks dan performa rendering.
   - Menurunkan opasitas partikel dari `bg-primary/30` ke `bg-primary/15` agar efek latar belakang lebih halus dan tidak menutupi hierarki teks.
8. **Halaman Beranda (`src/app/page.tsx`)**:
   - Membungkus seksi utama dalam elemen landmark semantik `<main>` untuk aksesibilitas navigasi layar.
9. **Halaman Paket (`src/app/paket/page.tsx`)**:
   - Meningkatkan rasio kontras teks label (`text-neutral-500` -> `text-neutral-600`) di atas latar kartu putih sesuai standar WCAG AA.
   - Mengubah kontainer CTA penutup dari `rounded-3xl` menjadi `rounded-xl`.
   - Menambahkan ring fokus keyboard `focus-visible:ring-2` pada navigasi atas, tombol kartu paket, dan tombol CTA penutup.

## File yang Diubah
1. `src/components/Hero.tsx`
2. `src/components/Benefits.tsx`
3. `src/components/Pricing.tsx`
4. `src/components/Portfolio.tsx`
5. `src/components/Contact.tsx`
6. `src/components/Footer.tsx`
7. `src/components/Particle.tsx`
8. `src/app/page.tsx`
9. `src/app/paket/page.tsx`
10. `docs/CHANGES/ANDALAN-62.md`

## Catatan
- Tidak ada penambahan dependensi baru.
- Tidak mengubah data harga, slug rute, fakta bisnis, atau struktur routing.
- Tidak menyentuh file di luar lingkup tugas (tidak menyentuh `schema/`, `tests/setup/`, `AGENTS.md`, atau dokumentasi lain).
- Tidak ada push ke remote git repository.

## Verifikasi
- `npm test` dijalankan di foreground dan dilaporkan persis:
  ```
  npm error Missing script: "test"
  npm error
  npm error To see a list of scripts, run:
  npm error   npm run
  npm error A complete log of this run can be found in: /home/msytc/.npm/_logs/2026-10-18T07_43_46_875Z-debug-0.log
  ```
- `pnpm install --frozen-lockfile && pnpm build` dijalankan di foreground dan berhasil sukses dengan exit code 0 (seluruh 67 halaman statis ter-prerender tanpa error).
