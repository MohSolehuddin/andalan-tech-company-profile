# Ringkasan Perubahan: ANDALAN-27

## Judul
Menambahkan Halaman Demo Portfolio Baru untuk Toko Roti / Bakery (`/demo/bakery`)

## Deskripsi
Menambahkan demo portfolio baru untuk kategori Kuliner & F&B dengan niche Toko Roti / Bakery (nama brand: "Dapur Roti Nusantara", slug: `bakery`, package tier: `starter`). Halaman ini dilengkapi dengan hero section bernuansa hangat dengan CTA pesan WhatsApp dan jam operasional, katalog produk roti dan pastry pilihan lengkap dengan harga dan badge, paket hampers dan tumpeng roti untuk acara spesial, serta informasi kontak toko, jadwal panggangan (baking batch), alamat toko fiktif di Situbondo, dan integrasi WhatsApp via helper `waLink`.

## File yang Dibuat
1. `src/lib/demo/items/bakery.ts` - Registri demo item untuk `bakery` yang mengekspor objek `DemoItem` dengan kategori `Kuliner & F&B` dan paket `starter`.
2. `src/components/demo/bakery/BakeryHero.tsx` - Komponen hero dengan ulasan, headline, tombol CTA WhatsApp & katalog, serta ringkasan fitur utama.
3. `src/components/demo/bakery/BakeryCatalog.tsx` - Komponen katalog roti & pastry harian dengan harga, badge, deskripsi, dan tombol pemesanan WhatsApp per produk.
4. `src/components/demo/bakery/BakeryPackages.tsx` - Komponen paket hampers silaturahmi, tumpeng roti syukuran, dan snack box rapat.
5. `src/components/demo/bakery/BakeryContact.tsx` - Komponen detail kontak, alamat toko di Situbondo, jadwal panggangan harian, dan tombol chat WhatsApp.
6. `src/app/demo/bakery/page.tsx` - Halaman App Router Next.js untuk `/demo/bakery` dengan metadata judul dan deskripsi.
7. `docs/CHANGES/ANDALAN-27.md` - Dokumen ringkasan perubahan ini.

## File yang Diubah
Tidak ada file lain yang diubah.

## Catatan
- `src/lib/demo/demos.ts` dan `scripts/gen-demos.mjs` tidak disentuh sama sekali.
- Halaman utama, komponen utama (Hero, Benefits, Pricing, Portfolio, Contact, Footer), dan layout global tidak disentuh.
- Tidak ada dependensi baru yang ditambahkan.
- Menggunakan Tailwind CSS v4 (`bg-linear-to-*`) dan ikon dari `lucide-react`.
- Tidak ada gambar eksternal yang digunakan (mengutamakan CSS gradient, ikon lucide, dan emoji).

## Verifikasi
- `npm test` dijalankan di foreground dan dilaporkan persis (`npm error Missing script: "test"`).
- `pnpm install --frozen-lockfile && pnpm build` dijalankan di foreground dan berhasil sukses (clean build, 0 errors).
