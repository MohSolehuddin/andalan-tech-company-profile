# Ringkasan Perubahan: BRAND-01

## Judul
Token Brand & Pembersihan `src/app/globals.css`

## Deskripsi
Mendefinisikan token warna resmi brand Andalan Tech (`--brand-navy`, `--brand-orange`, `--brand-orange-ink`) di `:root`, memperbaiki nilai warna `--primary`, `--primary-foreground`, `--accent`, `--accent-foreground`, dan `--ring`, menghapus `--glow-primary` serta animasi partikel lama (`@keyframes particle` dan `.animate-particle`), serta menetapkan tipografi dasar `body` (font-size minimal 16px dan antialiasing).

## Perubahan yang Diterapkan
1. **Token Brand di `:root`**:
   - Menambahkan `--brand-navy: #0A1C4D;`, `--brand-orange: #F58220;`, `--brand-orange-ink: #A8530F;`.
   - Mengubah `--primary: #0A1C4D;` dan `--primary-foreground: #ffffff;`.
   - Memperbaiki `--accent: #F58220;` (sebelumnya navy) dan `--accent-foreground: #0A1C4D;`.
   - Mengubah `--ring: #F58220;`.
2. **Pembersihan Glow**:
   - Menghapus `--glow-primary` dari blok `:root` dan `.dark`.
3. **Pembersihan Animasi Partikel**:
   - Menghapus `@keyframes particle` dan `.animate-particle`.
4. **Tipografi Body**:
   - Menambahkan `text-base antialiased` pada `@apply` di `body`, serta properti eksplisit `font-size: 16px;` dan `-webkit-font-smoothing: antialiased;`.
5. **Blok `.dark` & Token Lain**:
   - Seluruh token lain (`sidebar`, `chart`, dll.) dan isi blok `.dark` dipertahankan apa adanya.

## File yang Diubah
- `src/app/globals.css`
- `docs/CHANGES/BRAND-01.md` (dokumentasi perubahan)

## Verifikasi
- `npm test` (repo-wide):
  ```
  npm error Missing script: "test"
  npm error
  npm error To see a list of scripts, run:
  npm error   npm run
  npm error A complete log of this run can be found in: /home/msytc/.npm/_logs/2026-10-19T14_17_17_792Z-debug-0.log
  ```
  (exit code 1; repository tidak mendefinisikan skrip test pada package.json)
- `pnpm install --frozen-lockfile && pnpm build` (foreground): exit code 0.
