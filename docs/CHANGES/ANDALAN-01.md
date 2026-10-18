# Ringkasan Perubahan: ANDALAN-01

## Judul
Penambahan Halaman Demo Portfolio SaaS (`/demo/saas`)

## Deskripsi
Menambahkan 1 demo website portfolio baru untuk niche SaaS/Startup dengan slug `saas` ("KelolaKu") untuk melengkapi etalase demo siap pakai Andalan Tech di Next.js App Router.

## File yang Dibuat
1. `src/components/demo/saas/SaasHero.tsx` - Komponen hero dengan badge, headline konversi, CTA WhatsApp, metrik bisnis, dan mockup dasbor analitik.
2. `src/components/demo/saas/SaasFeatures.tsx` - Grid 6 fitur unggulan (otomasi alur kerja, analitik realtime, kolaborasi multi-user, integrasi notifikasi WhatsApp, enkripsi data, export laporan).
3. `src/components/demo/saas/SaasPricing.tsx` - Blok harga 3 tier (Starter, Pro Bisnis - terpopuler, dan Custom Enterprise) lengkap dengan rincian fasilitas dan tombol CTA WhatsApp.
4. `src/components/demo/saas/SaasTestimonials.tsx` - Social proof & testimoni 3 pendiri/pimpinan bisnis lokal beserta ulasan dan rating bintang.
5. `src/components/demo/saas/SaasCta.tsx` - Blok ajakan bertindak penutup dengan rute WhatsApp ke Andalan Tech dan badge jaminan.
6. `src/app/demo/saas/page.tsx` - Halaman App Router yang menyusun seluruh komponen demo SaaS dan mengekspor metadata SEO.

## File yang Diubah
1. `src/lib/demo/demos.ts` - Menambahkan entri demo `saas` ke array `demoItems` dengan properti lengkap (`slug`, `name`, `niche`, `tagline`, `description`, `emoji`, `accentBg`, `accentText`, `ring`, `highlights`).

## Catatan Konfigurasi
- `pnpm-workspace.yaml`: Mengonfigurasi `allowBuilds` untuk `sharp` dan `unrs-resolver` agar instalasi dependensi pnpm v12 berjalan tanpa hambatan pada build server.
