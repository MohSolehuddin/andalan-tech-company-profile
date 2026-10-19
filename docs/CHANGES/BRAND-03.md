# Ringkasan Perubahan: BRAND-03

## Judul
Hero Bersih Andalan Tech (Pembersihan Particles & Gradien, Aksen Oranye, Kontras WCAG AA, Focus-Visible)

## Deskripsi
Melakukan penyelarasan tampilan Hero section (`src/components/Hero.tsx`) sesuai pedoman `human-grade-web-design` dan kontrak `ANDALAN-BRAND-01`:
1. **Pembersihan Elemen Dekoratif & Partikel**: Menghapus import dan pemakaian komponen `<AnimatedParticles />` serta menghapus berkas `src/components/Particle.tsx` dan `src/components/particles.css`. Menghilangkan dekorasi latar belakang bergerak yang mengganggu keterbacaan teks dan performa render.
2. **Penghapusan Overlay Gradien Bawah**: Menghapus elemen `<div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent" />` untuk menghasilkan transisi bersih ke section berikutnya tanpa efek gradien kabur artifisial.
3. **Pembersihan Animasi**: Menghapus kelas `animate-fade-in-up` pada kontainer konten hero agar tampilan instan, statis, dan bersih.
4. **Sentuhan Aksen Oranye & Ergonomi Tombol**:
   - Menghapus efek `shadow-sm hover:shadow-md` pada kedua tombol CTA hero.
   - Mempertahankan CTA utama dengan `bg-primary` navy dan teks `text-primary-foreground`.
   - Menetapkan radius tombol ke `rounded-lg` dan badge ke `rounded-full`.
   - Memberikan aksen oranye terukur pada ikon Zap (`text-[#F58220]`) dan border badge (`border-[#F58220]/40`), serta garis bawah oranye pada headline "Secepat Kilat" (`underline decoration-[#F58220] decoration-2 underline-offset-8`).
   - Memastikan seluruh tautan aksi/tombol memiliki status `focus-visible` aksesibel (`focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`).
5. **Kesesuaian Token Warna & Kontras WCAG AA**:
   - Mengubah kelas warna teks sekunder dari `text-neutral-700` menjadi token `text-muted-foreground` pada deskripsi dan label metrik statistik.
   - Menjaga integritas struktur metrik dan angka kunci (`98+`, `<2s`, `24/7`) tanpa perubahan angka atau label.

## File yang Dihapus
1. `src/components/Particle.tsx` - Komponen partikel animasi client-side.
2. `src/components/particles.css` - Stylesheet keyframe animasi partikel.

## File yang Diubah
1. `src/components/Hero.tsx` - Pembersihan hero, penghapusan particles/gradien/animasi, penambahan aksen oranye, penyesuaian token warna sekunder, dan penegasan focus-visible.

## File yang Dibuat
1. `docs/CHANGES/BRAND-03.md` - Dokumen ringkasan perubahan ini.

## Verifikasi
1. `npm test` dijalankan di foreground dan dilaporkan persis:
   ```
   npm error Missing script: "test"
   npm error
   npm error To see a list of scripts, run:
   npm error   npm run
   ```
2. `pnpm install --frozen-lockfile && pnpm build` dijalankan di foreground dan keluar dengan exit code 0 (`Compiled successfully`, `Generating static pages (69/69)`).
