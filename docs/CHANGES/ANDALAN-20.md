# Ringkasan Perubahan: ANDALAN-20

## Judul
Penambahan Demo Portfolio Baru: Perikanan & Supplier Seafood Situbondo (`perikanan`)

## Deskripsi
Menambahkan halaman demo portfolio baru bertema Supplier Seafood & Hasil Laut dengan slug `perikanan` ("Samudra Situbondo"). Demo ini menampilkan katalog tangkapan laut segar harian khas Situbondo (kerapu, kakap, tongkol, bandeng, udang vaname, cumi, dan produk olahan), keunggulan standar mutu cold-chain, area distribusi dan jadwal ekspedisi (termasuk rute Situbondo - Surabaya - Jabodetabek), serta integrasi tombol pemesanan via WhatsApp.

Sesuai aturan operasional dan arsitektur modular repositori, registry demo didaftarkan dalam file mandiri di `src/lib/demo/items/perikanan.ts` tanpa mengubah file agregator atau file lain di luar cakupan tugas.

## File yang Dibuat
1. `src/lib/demo/items/perikanan.ts` - Entri registry demo `perikanan` (`DemoItem`) dengan tema warna cyan/biru (`from-cyan-500 to-blue-600`), emoji 🐟, dan highlight fitur.
2. `src/components/demo/perikanan/PerikananHero.tsx` - Komponen hero section dengan headline, badge wilayah pesisir Situbondo, poin keunggulan, dan CTA WhatsApp.
3. `src/components/demo/perikanan/PerikananProducts.tsx` - Komponen katalog interaktif berbasis kategori (Ikan Segar, Udang & Cumi, Olahan Hasil Laut) dengan tombol pesan via WhatsApp (`waLink`).
4. `src/components/demo/perikanan/PerikananFresh.tsx` - Komponen standar mutu & keunggulan (tangkapan harian, cold-chain 0-2°C, harga grosir nelayan, packing styrofoam).
5. `src/components/demo/perikanan/PerikananArea.tsx` - Komponen jaringan distribusi & jadwal ekspedisi (Jabodetabek, Surabaya, Banyuwangi, Bali) serta SOP pengemasan dingin.
6. `src/components/demo/perikanan/PerikananContact.tsx` - Komponen informasi kontak, lokasi hub sortasi Panarukan Situbondo, jam operasional, dan CTA WhatsApp.
7. `src/app/demo/perikanan/page.tsx` - Halaman App Router yang menyusun kelima komponen serta mendefinisikan `metadata`.
8. `docs/CHANGES/ANDALAN-20.md` - Dokumen ringkasan perubahan ini.

## File yang Diubah
Tidak ada. Seluruh perubahan bersifat aditif tanpa menyentuh file lain, script generator, maupun registry agregator `demos.ts`.

## Verifikasi
1. `npm test`
   Output persis:
   ```
   npm error Missing script: "test"
   npm error 
   npm error To see a list of scripts, run:
   npm error   npm run
   npm error A complete log of this run can be found in: /home/msytc/.npm/_logs/2026-10-18T05_17_12_734Z-debug-0.log
   ```
2. `pnpm install --frozen-lockfile && pnpm build`
   Build Next.js selesai sukses dan hijau (100% tanpa error). Halaman `/demo/perikanan` ter-generate secara statis.
