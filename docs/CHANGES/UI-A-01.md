# Ringkasan Perubahan: UI-A-01

## Judul
Pembaruan Homepage Andalan Tech — Penambahan Navbar & Perbaikan Hero

## Deskripsi
Menambahkan komponen `Navbar` sticky di homepage (`src/app/page.tsx`) dan menyempurnakan tampilan `Hero` (`src/components/Hero.tsx`) sesuai prinsip `human-grade-web-design` dan Design Law. Sub-halaman (`/demo` dan `/paket`) tidak diubah.

## Perubahan yang Diterapkan

1. **Komponen Baru `src/components/Navbar.tsx`**:
   - Header sticky di bagian atas (`sticky top-0 z-40`) dengan latar solid kontras tinggi (`bg-background` / putih) dan pembatas bawah (`border-b border-border`).
   - Wordmark teks: "Andalan Tech" (tanpa gambar) mengarah ke `/`.
   - Link navigasi: `Beranda` (`/`), `Demo` (`/demo`), `Paket` (`/paket`), `Kontak` (`#contact`).
   - CTA primer tunggal: WhatsApp mengarah langsung ke `https://wa.me/6287745968545` dengan label "Konsultasi Gratis".
   - Responsif mobile: tata letak ringkas (logo/wordmark + CTA WhatsApp di mobile; link navigasi penuh tampil pada breakpoint `md:`).
   - Aksesibilitas: seluruh tautan dan tombol dilengkapi focus ring `focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`.

2. **Integrasi ke Homepage (`src/app/page.tsx`)**:
   - Memasang `<Navbar />` tepat di atas `<main>` pada rute `/`. Halaman `/demo` dan `/paket` tidak tersentuh.

3. **Perbaikan Hero (`src/components/Hero.tsx`)**:
   - **CTA Sekunder "Lihat Portfolio"**: Diubah dari isian abu (`variant="secondary"`) menjadi tombol outline (`variant="outline" border-primary text-primary hover:bg-primary/5`) agar tidak terbaca seperti tombol disabled. Dimensi tinggi (`size="lg"` / `h-10`) dan padding horizontal (`px-8`) disamakan persis dengan CTA primer.
   - **Peningkatan Kontras WCAG AA (≥4.5:1)**:
     - Teks badge di atas judul diperbaiki dari `text-muted-foreground` menjadi `text-neutral-800 font-medium`.
     - Label statistik ("SEO Score", "Load Time", "Uptime") diperbaiki dari `text-muted-foreground` menjadi `text-neutral-700 font-medium`.
   - **Tipografi & Alignment**: Paragraf deskripsi disesuaikan dengan `text-left sm:text-center leading-relaxed text-neutral-700` untuk mematuhi aturan tidak me-center teks yang lebih dari 2 baris pada layar sempit/mobile, serta menjaga panjang baris dalam skala ergonomis. Struktur layout dan komponen partikel dipertahankan.

## File yang Dibuat / Diubah
- `src/components/Navbar.tsx` (dibuat, baru)
- `src/app/page.tsx` (diubah, tambah import & render `<Navbar />`)
- `src/components/Hero.tsx` (diubah, tombol outline, kontras label, alignment paragraf)
- `docs/CHANGES/UI-A-01.md` (dibuat, catatan perubahan)

## Verifikasi
1. **`npm test`** (repo-wide, foreground):
   ```
   npm error Missing script: "test"
   npm error
   npm error To see a list of scripts, run:
   npm error   npm run
   npm error A complete log of this run can be found in: /home/msytc/.npm/_logs/2026-10-18T21_43_41_387Z-debug-0.log
   ```

2. **`pnpm install --frozen-lockfile`**:
   ```
   ✓ Lockfile passes supply-chain policies (verified 18h ago)
   Lockfile is up to date, resolution step is skipped
   Packages are hard linked from the content-addressable store to the virtual store.
     Content-addressable store is at: /home/msytc/.local/share/pnpm/store/v11
     Virtual store is at:             node_modules/.pnpm
   Progress: resolved 480, reused 480, downloaded 0, added 480, done
   Done in 434ms using pnpm v12.14.0
   ```

3. **`pnpm build`**:
   ```
   $ next build
      ▲ Next.js 16.0.0 (Turbopack)

      Creating an optimized production build ...
    ✓ Compiled successfully in 11.4s
      Finished TypeScript in 19.2s     ✓ Finished TypeScript in 19.2s 
    ✓ Generating static pages (69/69) in 3.6s
      Finalizing page optimization in 33.0ms     ✓ Finalizing page optimization in 33.0ms 

   Route (app)
   ┌ ○ /
   ├ ○ /_not-found
   ├ ○ /demo
   ...
   ├ ○ /paket
   └ ○ /sitemap.xml

   ○  (Static)  prerendered as static content
   ```
   Hasil: Exit code 0, 69/69 halaman statis ter-prerender tanpa error atau peringatan type-check.
