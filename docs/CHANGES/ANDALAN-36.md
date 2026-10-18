# Ringkasan Perubahan: ANDALAN-36

## Judul
Menambahkan Halaman Demo Spa & Massage (`/demo/spa`)

## Deskripsi
Menambahkan satu halaman demo portofolio baru bertema spa & massage dengan brand fiktif "Ayu Spa & Reflexology". Halaman menyusun lima komponen section kecil: hero + CTA WhatsApp, layanan (body massage, refleksi, lulur, facial), paket durasi + harga, booking WhatsApp dengan form, serta kontak/footer demo. Seluruh CTA memakai helper `waLink` dari `src/lib/demo/wa.ts` dan visual dibangun tanpa gambar eksternal (gradien, emoji, blok warna) dengan aksen lime/emerald.

## File yang Dibuat
1. `src/components/demo/spa/SpaHero.tsx` - Section hero dengan badge, CTA booking WhatsApp, sorotan layanan, dan info lokasi/jam.
2. `src/components/demo/spa/SpaServices.tsx` - Empat kartu layanan (Body Massage, Reflexology, Lulur & Body Scrub, Facial Glow) dengan durasi, harga, dan tombol pesan.
3. `src/components/demo/spa/SpaPackages.tsx` - Tiga paket durasi (60/90/120 menit) dengan daftar item, harga, badge favorit, dan CTA booking.
4. `src/components/demo/spa/SpaBooking.tsx` - Form booking (nama, WhatsApp, layanan, tanggal, jam, catatan) yang dirangkai menjadi pesan WhatsApp, plus tiga langkah reservasi.
5. `src/components/demo/spa/SpaContact.tsx` - CTA WhatsApp, info alamat, jam operasional, kontak, dan footer demo.
6. `src/app/demo/spa/page.tsx` - Rute App Router yang merender kelima komponen di dalam `<main>` dengan `export const metadata`.
7. `src/lib/demo/items/spa.ts` - Item registry demo dengan `slug: "spa"`, `category: "Kesehatan & Kecantikan"`, `package: "starter"`, dan aksen lime/emerald.
8. `docs/CHANGES/ANDALAN-36.md` - Dokumen ringkasan perubahan ini.

## Catatan
- `src/lib/demo/demos.ts` dan `scripts/gen-demos.mjs` tidak disentuh (agregator diregenerasi otomatis).
- Item demo lain, halaman/komponen utama, layout global, `schema/`, `tests/setup/`, dan `AGENTS.md` tidak diubah.
- Tidak ada dependensi baru dan tidak ada gambar eksternal; Tailwind v4 memakai `bg-linear-to-*`.

## Verifikasi
- `npm test` dijalankan di foreground dan dilaporkan persis (repo tidak memiliki skrip test).
- `pnpm install --frozen-lockfile && pnpm build` dijalankan di foreground dan berhasil hijau (build sukses, 0 error).
