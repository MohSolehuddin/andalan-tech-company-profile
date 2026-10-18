# Ringkasan Perubahan: ANDALAN-63

## Judul
Design Pass Lanjutan (human-grade-web-design) — Pembersihan Sisa Warna Neon pada 5 Demo

## Deskripsi
Menghapus sisa stop gradient berwarna neon (`cyan`/`violet`/`fuchsia`/`purple`) pada 5 komponen demo dan menggantinya dengan hue non-neon yang konsisten dengan brand masing-masing demo, mengikuti skill `human-grade-web-design`. Peran visual header/kartu tetap berwarna (bukan putih). Tidak ada perubahan data, teks, slug, struktur, maupun dependency.

## Perubahan yang Diterapkan
1. **Aturan 1 — Stop gradient neon dinetralkan (14 stop di 5 file):**
   - `travel/TravelPackages.tsx` (brand cyan/ocean, 5 gradien): stop `cyan-700/800/900/950` → `teal-700/800/900/950`; stop `blue-*` dipertahankan.
   - `toko/TokoCatalog.tsx` (brand indigo): `from-violet-400 to-purple-500` → `from-indigo-400 to-indigo-600`; `from-cyan-400 to-sky-500` → `from-teal-400 to-sky-500`; `from-fuchsia-400 to-pink-500` → `from-pink-400 to-rose-600`.
   - `perikanan/PerikananProducts.tsx` (brand cyan/sea): `from-cyan-500 to-blue-600` → `from-teal-500 to-blue-600`; `from-violet-400 to-indigo-600` → `from-indigo-400 to-indigo-600`; `from-blue-400 to-cyan-600` → `from-blue-400 to-teal-600`.
   - `elektronik/ElektronikCatalog.tsx` (brand biru): `from-cyan-800 to-slate-900` → `from-sky-800 to-slate-900`; `from-blue-800 to-cyan-900` → `from-blue-800 to-teal-900`.
   - `tani/TaniProducts.tsx` (brand hijau): `from-blue-700 to-cyan-900` → `from-blue-700 to-teal-900`.
2. **Aturan 2 — `toko-madura/TokoMaduraContact.tsx`: tidak diubah.** Seluruh `text-neutral-300`/`text-neutral-400` berada di latar gelap (`bg-neutral-950`, panel `bg-white/5`), sehingga sesuai aturan dibiarkan. File ini juga tidak memiliki stop gradient neon.

## File yang Diubah
- `src/components/demo/travel/TravelPackages.tsx` (5 baris)
- `src/components/demo/toko/TokoCatalog.tsx` (3 baris)
- `src/components/demo/perikanan/PerikananProducts.tsx` (3 baris)
- `src/components/demo/elektronik/ElektronikCatalog.tsx` (2 baris)
- `src/components/demo/tani/TaniProducts.tsx` (1 baris)

Tidak ada file lain yang disentuh (termasuk `toko-madura/TokoMaduraContact.tsx`).

## Catatan
- Verifikasi grep: `(from|via|to)-(cyan|violet|fuchsia|purple)-NNN` = 0 match di keenam file scope.
- Tidak ada perubahan data, fakta, slug, struktur, dependency, schema, tests/setup, AGENTS.md, maupun file di luar scope.
- Tidak ada git commit dan tidak ada push ke remote.

## Verifikasi
- `npm test` (repo-wide, foreground) — output persis:
  ```
  npm error Missing script: "test"
  npm error
  npm error To see a list of scripts, run:
  npm error   npm run
  npm error A complete log of this run can be found in: /home/msytc/.npm/_logs/2026-10-18T08_05_03_790Z-debug-0.log
  ```
  (repo tidak memiliki skrip `test` di package.json; exit code 1)
- `pnpm install --frozen-lockfile` — exit code 0 (`Lockfile is up to date`, 480 paket, `Done in 861ms`).
- `pnpm build` — exit code 0: `✓ Compiled successfully in 12.2s`, `✓ Generating static pages (67/67)`, seluruh rute `/demo/*` ter-prerender statis tanpa error.
