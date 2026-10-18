# Ringkasan Perubahan: UI-C-01

## Judul
Polish Halaman Hub `/demo` Andalan Tech (Filter Kategori, Search, Eyebrow Truncate, Badge Tier, Typo Fix)

## Deskripsi
Melakukan polish pada antarmuka katalog `/demo` (62 demo) dengan berpedoman pada `human-grade-web-design` dan WCAG AA:
1. **Eyebrow Kategori & Penjajaran Judul**: Menetapkan baris eyebrow niche kategori kartu dengan tinggi tetap (`h-6`) serta `truncate` (`overflow: hidden; text-overflow: ellipsis; white-space: nowrap`) dengan atribut `title={demo.niche}`. Hal ini menjaga judul kartu dan elemen di bawahnya sejajar rapi antar kolom bahkan untuk label panjang seperti "Franchise Ayam Goreng / Geprek".
2. **Pembeda Badge Tier Berdasarkan Paket**: Menambahkan fungsi pembeda styling badge tier `tierBadgeClass` pada `src/lib/pricing.ts` yang diterapkan dinamis per tier demo:
   - `starter`: Abu-abu netral (`bg-neutral-100 text-neutral-800 border-neutral-300`)
   - `bisnis`: Emas / amber hangat (`bg-amber-50 text-amber-950 border-amber-300`)
   - `pro`: Navy tua kontras tinggi (`bg-blue-950 text-white border-blue-900`)
   - `custom`: Ungu lembut (`bg-purple-100 text-purple-900 border-purple-300`)
   Semua varian memenuhi rasio kontras WCAG AA (≥ 4.5:1).
3. **Koreksi Typo**: Memperbaiki kata typo "perpanjang" menjadi "perpanjangan" pada kartu demo (`src/components/demo-hub/DemoHubList.tsx`) dan pada bar layout demo (`src/app/demo/layout.tsx`).
4. **Filter Kategori + Search Interaktif & Empty State**: Mengimplementasikan komponen klien `DemoHubList` (`src/components/demo-hub/DemoHubList.tsx`) dengan:
   - Input pencarian berbasis nama, niche, deskripsi, dan fitur highlight demo dengan tombol clear instan.
   - Tombol pil filter kategori dengan badge counter jumlah demo tiap kategori.
   - Status jumlah hasil pencarian & filter dengan aksi "Reset filter".
   - Tampilan empty state informatif jika hasil filter/pencarian nihil lengkap dengan tombol kembali ke semua demo.
   - Performa optimal tanpa render ulang berlebihan memanfaatkan `useMemo`.
5. **Integritas Data**: Tidak mengubah `src/lib/demo/**` (data) maupun slug demo.

## File yang Dibuat
1. `src/components/demo-hub/DemoHubList.tsx` - Komponen klien interaktif untuk filter kategori, live search, badge tier dinamis, eyebrow truncate, dan empty state.
2. `docs/CHANGES/UI-C-01.md` - Dokumen ringkasan perubahan ini.

## File yang Diubah
1. `src/lib/pricing.ts` - Menambahkan helper `tierBadgeClass` untuk styling badge tier terpusat.
2. `src/app/demo/layout.tsx` - Memperbaiki typo kata "perpanjang" menjadi "perpanjangan".
3. `src/app/demo/page.tsx` - Menghubungkan halaman server `/demo` ke komponen klien `DemoHubList`.

## Verifikasi
- `npm test` dijalankan di foreground dan dilaporkan persis (`npm error Missing script: "test"`).
- `pnpm install --frozen-lockfile && pnpm build` dijalankan di foreground dan menghasilkan clean build berhasil (exit code 0, 69/69 routes prerendered).
