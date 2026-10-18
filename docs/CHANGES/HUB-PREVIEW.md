# Ringkasan Perubahan: HUB-PREVIEW

## Judul
Kartu Demo di `/demo` Menampilkan Gambar Pratinjau

## Deskripsi
Mengganti emoji besar pada kartu daftar demo di `src/app/demo/page.tsx` dengan gambar pratinjau halaman demo `/demo/preview/<slug>.webp`. Gradient `accentBg` tetap dipertahankan sebagai latar fallback. Tidak ada perubahan teks, harga, kategori, slug, data, struktur kartu, maupun dependency.

## Perubahan yang Diterapkan
1. Blok emoji (`<span className="text-6xl">{demo.emoji}</span>`) dihapus.
2. Blok gambar ditambahkan di dalam kartu:
   - `relative h-40 overflow-hidden border-b border-neutral-200 bg-linear-to-br ${demo.accentBg}`
   - `<img src={`/demo/preview/${demo.slug}.webp`} alt={`Pratinjau website ${demo.name}`} loading="lazy" />`
   - `object-cover object-top` + `group-hover:scale-[1.03]` untuk efek hover halus.
   - Komentar `eslint-disable-next-line @next/next/no-img-element` agar tetap memakai `<img>` tanpa menambah dependency.
3. Emoji tidak lagi dirender di kartu; gradient tetap menjadi latar bila gambar gagal/absen.

## File yang Diubah
- `src/app/demo/page.tsx` (blok gambar kartu)
- `docs/CHANGES/HUB-PREVIEW.md` (dokumen ini)

## Catatan
- `public/demo/preview/` berisi aset gambar pada ruang kerja utama, tetapi direktori tersebut tidak ada di worktree `wt/hubprev` ini; kode mengarah ke path sesuai instruksi sehingga gradient fallback tampil sampai aset tersedia/di-merge.
- Tidak ada perubahan schema, tests/setup, AGENTS.md, file docs lain, commit, atau push.

## Verifikasi
- `npm test` (repo-wide, foreground):
  ```
  npm error Missing script: "test"
  npm error
  npm error To see a list of scripts, run:
  npm error   npm run
  npm error A complete log of this run can be found in: /home/msytc/.npm/_logs/2026-10-18T09_14_15_195Z-debug-0.log
  ```
  (exit code 1; repo tidak memiliki skrip `test`)
- `pnpm install --frozen-lockfile && pnpm build` — exit code 0: `✓ Compiled successfully in 5.4s`, `✓ Generating static pages (68/68)`, seluruh rute `/demo/*` ter-prerender.
- `npm run lint` — 2 error + 13 warning, semuanya pre-existing di file di luar scope (`Particle.tsx`, `OlehContact.tsx`, dan warning unused import demo lain); tidak ada temuan pada `src/app/demo/page.tsx`.
