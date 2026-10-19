# Ringkasan Perubahan: BRAND-02

## Judul
Navbar Selaras Brand — Logo, Token Warna, CTA Oranye, dan Menu Mobile

## Deskripsi
Memperbarui `src/components/Navbar.tsx` agar selaras dengan kontrak `ANDALAN-BRAND-01.md` dan skill `human-grade-web-design`. Tidak ada perubahan data, rute, dependency, maupun file di luar scope.

## Perubahan yang Diterapkan
1. **Wordmark → logo:** teks "Andalan Tech" diganti `next/image` (`/logotext.png`, `alt="Andalan Tech"`, `width={150}`, `height={40}`, `priority`) di dalam `Link href="/"`.
2. **Nav links:** Beranda `/`, Demo `/demo`, Paket `/paket`, Kontak `#contact` dipertahankan; warna `text-neutral-700` → `text-foreground`, hover tetap `text-primary`.
3. **CTA "Konsultasi Gratis":** `bg-accent text-accent-foreground`, `rounded-lg`, tanpa shadow, `hover:bg-accent/90`, dan focus ring.
4. **Menu mobile:** state `useState`, tombol hamburger (`Menu`/`X`) `md:hidden` dengan `aria-expanded`, `aria-controls`, dan `aria-label` "Buka menu"/"Tutup menu"; panel nav muncul saat dibuka dan menutup setelah link diklik. Nav desktop tetap `hidden md:flex`. CTA desktop disembunyikan di bawah `sm` dan disediakan di panel mobile.
5. **Aksesibilitas:** seluruh link/tombol utama memakai `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2` sesuai kontrak B8.
6. **Tanpa** hover-translate/scale, gradien ornamen, glow, atau animasi pulse; header tetap `sticky top-0 z-40 border-b border-border bg-background`.

## File yang Diubah
- `src/components/Navbar.tsx`
- `docs/CHANGES/BRAND-02.md` (dokumen ini)

## Verifikasi

### `npm test` (repo-wide, foreground) — output persis
```
npm error Missing script: "test"
npm error
npm error To see a list of scripts, run:
npm error   npm run
npm error A complete log of this run can be found in: /home/msytc/.npm/_logs/2026-10-19T14_19_50_013Z-debug-0.log
```
Exit code 1 (repo belum memiliki skrip `test` di `package.json`).

### `pnpm install --frozen-lockfile && pnpm build`
- Install: exit code 0 — `Lockfile is up to date`, 480 paket, `Done in 4.1s`.
- Build: exit code 0 — `✓ Compiled successfully in 33.2s`, `✓ Generating static pages (69/69) in 7.2s`, seluruh rute ter-prerender statis.

### Catatan lint
`pnpm lint` masih melaporkan 2 error + 13 warning yang sudah ada sebelumnya di file demo/`Particle.tsx` (di luar scope). Tidak ada temuan pada `src/components/Navbar.tsx`.
