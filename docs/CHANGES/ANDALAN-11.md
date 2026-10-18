# Ringkasan Perubahan: ANDALAN-11

## Judul
Penambahan Halaman Demo Portfolio Dashboard/Admin (`/demo/dashboard`)

## Deskripsi
Menambahkan 1 demo website portfolio baru berupa aplikasi admin/dashboard dengan data mock statis (Bahasa Indonesia) untuk menunjukkan kemampuan fullstack Andalan Tech. Demo memakai slug `dashboard` dengan brand "NusaAdmin" dan aksen warna indigo/slate.

## File yang Dibuat
1. `src/components/demo/dashboard/DashSidebar.tsx` - Sidebar navigasi gelap (slate-900) berisi brand NusaAdmin, menu Dashboard (aktif), Pesanan (badge 12), Produk, Pelanggan, Laporan, serta kartu profil Super Admin.
2. `src/components/demo/dashboard/DashStats.tsx` - 4 kartu KPI (Pendapatan, Pesanan, Pelanggan, Konversi) dengan ikon Lucide, nilai fiktif, dan badge tren naik/turun.
3. `src/components/demo/dashboard/DashChart.tsx` - Grafik batang pendapatan 8 bulan (Jan–Agu 2026) murni CSS/div tanpa library chart, bulan berjalan di-highlight gradien indigo, plus ringkasan dan legenda.
4. `src/components/demo/dashboard/DashTable.tsx` - Tabel 7 transaksi terbaru (ID, pelanggan dengan avatar inisial, produk, tanggal, badge status berwarna, total) dengan scroll horizontal di layar kecil.
5. `src/components/demo/dashboard/DashActivity.tsx` - Panel aktivitas realtime (5 item) dan kartu CTA "Ingin aplikasi admin seperti ini?" menuju `waLink`.
6. `src/app/demo/dashboard/page.tsx` - Halaman Next.js App Router berisi header sticky (judul, pencarian, notifikasi, tombol Produk Baru), navigasi mobile, dan penyusunan seluruh komponen beserta metadata SEO.

## File yang Diubah
1. `src/lib/demo/demos.ts` - Menambahkan entri demo `dashboard` ke array `demoItems` dengan properti lengkap (`slug`, `name`, `niche`, `tagline`, `description`, `emoji`, `accentBg`, `accentText`, `ring`, `highlights`) dan aksen indigo/slate.

## Catatan
- Tidak ada dependency baru; hanya `next`, `react`, `lucide-react`, Tailwind v4 (`bg-linear-to-*`), dan helper `waLink`.
- Tanpa gambar eksternal; visual memakai gradien Tailwind, blok warna, dan ikon Lucide.
- Perubahan minimal tanpa memodifikasi halaman/komponen utama atau demo lain.
