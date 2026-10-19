# Ringkasan Perubahan: BRAND-06

## Judul
Selaraskan Halaman Paket ke Brand Andalan Tech

## Deskripsi
Menyelaraskan halaman `/paket` dan helper badge tier ke token brand navy/oranye, serta membersihkan dekorasi gradien, bayangan, dan radius yang tidak konsisten.

## File yang Diubah
1. `src/app/paket/page.tsx`
   - Seluruh hard-code `neutral-*`, `amber-*`, `purple-*`, dan `emerald-*` diganti token brand (`bg-primary`, `bg-accent`, `bg-background`, `bg-card`, `border-border`, `text-foreground`, `text-muted-foreground`).
   - Hero band menjadi `bg-primary` dengan teks putih; badge Sparkles dihapus.
   - Kartu paket memakai `rounded-xl`; kartu populer `ring-1 ring-primary border-primary`; badge "Paling Populer" memakai `bg-accent text-accent-foreground`.
   - Check mark fitur memakai `text-[#A8530F]`.
   - CTA penutup memakai `bg-primary` solid tanpa gradien dan `shadow-xl`; tombol WhatsApp oranye, tombol demo outline putih.
   - Semua tombol/link utama memiliki state `focus-visible` dengan `ring-ring`.
2. `src/lib/pricing.ts`
   - `tierBadgeClass()` memakai kelas brand: Starter netral, Bisnis oranye, Pro navy solid, Custom navy outline.

## Catatan
- Tidak mengubah `PACKAGE_TIERS`, `ADDONS`, harga, slug, struktur data, maupun FAQ.
- Tidak ada dependency baru.
- Verifikasi: `pnpm install --frozen-lockfile && pnpm build` (exit 0).
