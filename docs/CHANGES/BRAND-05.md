# Ringkasan Perubahan: BRAND-05

## Judul
Portfolio, Contact, dan Footer — Pembersihan Gradien, Hover, dan Aksen

## Deskripsi
Merapikan tampilan tiga komponen landing page agar konsisten dengan token brand dan skill `human-grade-web-design`. Tidak ada perubahan data, teks, slug, struktur, maupun dependency.

## Perubahan yang Diterapkan
1. **Portfolio — thumbnail:** gradien `bg-linear-to-br ${demo.accentBg}` diganti `bg-neutral-100`.
2. **Portfolio — kartu:** `hover:-translate-y-1 hover:shadow-md` dihapus, diganti `hover:border-primary/40`; radius tetap `rounded-xl`; kartu menautkan `focus-visible` ring.
3. **Portfolio — banner:** ikon `Sparkles`/`Zap` ber-`animate-pulse` dan animasi masuk dihapus; banner disederhanakan menjadi blok flat (border, `bg-card`, tanpa shadow/animasi).
4. **Portfolio — aksen:** `text-accent` pada "harga spesial" dan hover judul diganti `text-[#A8530F]`.
5. **Contact — kartu:** `hover:shadow-md` dihapus; diganti `hover:border-primary/40` agar tetap ada state hover.
6. **Contact — ikon & tautan:** ikon bulat memakai `bg-accent/10 text-[#A8530F]`; tautan WhatsApp memakai `text-[#A8530F]` dan focus ring senada.
7. **Footer:** logo `/logotext.png` dipertahankan dengan `h-16 w-auto` agar proporsional; hover tautan tetap `text-primary`; radius dan spacing tidak diubah.

## File yang Diubah
- `src/components/Portfolio.tsx`
- `src/components/Contact.tsx`
- `src/components/Footer.tsx`

## Verifikasi
- `npm test` — repo tidak memiliki skrip `test`:
  ```
  npm error Missing script: "test"
  npm error
  npm error To see a list of scripts, run:
  npm error   npm run
  npm error A complete log of this run can be found in: /home/msytc/.npm/_logs/2026-10-19T14_17_29_468Z-debug-0.log
  ```
  (exit code 1)
- `pnpm install --frozen-lockfile` — exit code 0 (`Lockfile is up to date`, 480 paket).
- `pnpm build` — exit code 0: `✓ Compiled successfully in 38.6s`, `✓ Generating static pages (69/69)`, seluruh rute statis ter-prerender tanpa error.

## Catatan
- Tidak ada commit maupun push ke remote.
- Tidak ada perubahan schema, tests/setup, AGENTS.md, ataupun file di luar scope.
