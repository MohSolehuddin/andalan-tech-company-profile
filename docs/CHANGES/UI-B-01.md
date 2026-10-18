# Ringkasan Perubahan: UI-B-01

## Judul
Perbaikan Section Portfolio & Pricing di Homepage

## Deskripsi
1. `Portfolio.tsx`: mengganti blok emoji dengan gambar pratinjau asli `/demo/preview/<slug>.webp` (gradient `accentBg` tetap menjadi fallback), membatasi tampilan menjadi 9 demo unggulan lintas kategori, dan menambahkan tombol "Lihat semua 62 demo" menuju `/demo`.
2. `Pricing.tsx`: menghapus tier lama ("UMKM Friendly/Starter/PREMIUM") dan menjadikan `src/lib/pricing.ts` (`PACKAGE_TIERS`: Starter/Bisnis/Pro/Custom) sebagai satu-satunya sumber data harga, konsisten dengan `/paket`.

## Perubahan yang Diterapkan
### `src/components/Portfolio.tsx`
- Konstanta `FEATURED_SLUGS` berisi 9 slug lintas kategori: `restoran`, `klinik`, `toko`, `jasa`, `properti`, `bengkel`, `salon`, `sekolah`, `saas`; dipilih lewat `demoItems.find` sehingga tetap mengikuti urutan kurasi.
- Grid kini me-render `featuredDemos` (9 kartu), bukan seluruh 62 `demoItems`.
- Blok emoji (`{demo.emoji}`) diganti menjadi gambar:
  - Container `relative h-44 overflow-hidden bg-linear-to-br ${demo.accentBg}` (gradient tetap sebagai fallback bila gambar gagal).
  - `<img src={`/demo/preview/${demo.slug}.webp`} alt={`Pratinjau website ${demo.name}`} loading="lazy" className="h-full w-full object-cover object-top" />` dengan `eslint-disable @next/next/no-img-element`.
- Tombol "Lihat semua {demoItems.length} demo" (ter-render "Lihat semua 62 demo") dengan ikon panah menuju `/demo`, memakai `Button asChild variant="secondary"` dan `focus-visible:ring-2`.
- Gaya kartu (rounded-xl, border, hover translate/shadow, `focus-visible:ring-2`) dan banner penawaran tidak diubah.

### `src/components/Pricing.tsx`
- Impor diubah menjadi `PACKAGE_TIERS, formatIDR` dari `@/lib/pricing`; impor `pricingData`, `Switch`, `Label`, dan state `useState` dihapus (tidak ada lagi toggle bulanan/tier duplikat).
- Kartu menampilkan `tier.name`, `formatIDR(tier.firstPrice)`, `formatIDR(tier.renewalPrice)/tahun`, `tier.scope`, dan `tier.features`; grid disesuaikan menjadi `md:grid-cols-2 lg:grid-cols-4` untuk 4 tier.
- Badge "Paling Populer" mengikuti `tier.popular`; CTA "Hubungi Kami" untuk tier `custom`, lainnya "Pilih Paket".
- Section diberi `id="pricing"` agar anchor `#pricing` di Footer berfungsi (sebelumnya belum ada target).
- Ditambahkan tautan kecil "halaman paket" menuju `/paket` untuk perbandingan lengkap.

### File Dihapus
- `src/lib/constants/pricingData.ts` — duplikat data harga lama; setelah `Pricing.tsx` bermigrasi tidak ada lagi referensi (`rg "pricingData" src` → kosong) sehingga `src/lib/pricing.ts` menjadi sumber tunggal.

## File yang Diubah
- `src/components/Portfolio.tsx`
- `src/components/Pricing.tsx`
- `src/lib/constants/pricingData.ts` (dihapus)
- `docs/CHANGES/UI-B-01.md` (dokumen ini)

Tidak ada perubahan pada `/demo`, `/paket`, `src/lib/pricing.ts`, `schema/`, `tests/setup/`, `AGENTS.md`, docs lain, commit, maupun push.

## Verifikasi
### `pnpm install --frozen-lockfile && pnpm build` (exit 0)
```
✓ Lockfile passes supply-chain policies (verified 18h ago)
Lockfile is up to date, resolution step is skipped
Packages: +480
Progress: resolved 480, reused 480, downloaded 0, added 480, done
Done in 1.7s using pnpm v12.14.0
$ next build
   ▲ Next.js 16.0.0 (Turbopack)
 ✓ Compiled successfully in 17.9s
   Running TypeScript ...
 ✓ Generating static pages (69/69) in 3.3s
Route (app)
┌ ○ /
├ ○ /_not-found
├ ○ /demo
...
├ ○ /paket
└ ○ /sitemap.xml
○  (Static)  prerendered as static content
```

### `npm test` (repo-wide, foreground; exit 1 — skrip tidak ada)
```
npm error Missing script: "test"
npm error
npm error To see a list of scripts, run:
npm error   npm run
```

### `pnpm lint`
2 error + 13 warning, seluruhnya pre-existing di file luar scope (mis. `Particle.tsx`, `OlehContact.tsx`); tidak ada temuan pada `Portfolio.tsx` maupun `Pricing.tsx`.

### Cek hasil render statis homepage (`.next/server/app/index.html`)
- 9 gambar `/demo/preview/<slug>.webp` ter-render di section Portfolio.
- Teks link ter-render: `Lihat semua <!-- -->62<!-- --> ` (yaitu "Lihat semua 62 demo").
- Tier yang ter-render: Starter, Bisnis, Pro, Custom; tidak ada lagi `UMKM Friendly`/`PREMIUM`.

## Catatan
- `<img>` dipakai (bukan `next/image`) mengikuti pola hub `/demo` agar tidak menambah dependency/konfigurasi; komentar `eslint-disable-next-line @next/next/no-img-element` disertakan.
- Gradien `demo.accentBg` tetap tampil saat gambar gagal dimuat (fallback).
