# UI AUDIT 001 — andalan-tech-company-profile

Tanggal: 2026-10-19 · Website: Andalan Tech (Next.js 16) · Metode: screenshot full-page (Playwright/CDP) + verifikasi kode sumber.
Tools capture: `~/hermes-work/review-loop/pw-shot.js` (playwright-core + chromium-1243, `fullPage:true`).

Catatan: analisis gambar otomatis (vision) pada screenshot panjang **tidak andal** untuk teks kecil — beberapa temuan awal (`"Diverifikasi Google"`, `"Portofolio"`, telepon dummy) **terbukti halusinasi OCR**. Semua temuan di bawah **diverifikasi ke kode sumber**.

---

## Temuan (terverifikasi)

### TINGGI
1. **Halaman utama TIDAK punya navbar/header.** `nav`/`navbar` tidak ada di seluruh komponen; home = Hero → Benefits → Pricing → Portfolio → Contact → Footer. Pengunjung tak bisa lompat ke `/demo`, `/paket`, dll. (Halaman `/demo` & `/paket` punya topbar sendiri, home tidak.)

2. **Section Portfolio di home masih pakai EMOJI + menampilkan SEMUA 62 demo** (`src/components/Portfolio.tsx`: `{demo.emoji}`, `demoItems.map(...)`). Ini (a) melanggar permintaanmu "list demo jangan pakai ikon, pakai preview web" — padahal hub `/demo` sudah pakai screenshot; dan (b) membuat halaman jadi **±15.500 px** (21 baris kartu). → harus pakai thumbnail preview + dikurasi (mis. 6–9 unggulan) + tautan "Lihat semua 62 demo →" ke `/demo`.

3. **Harga di home vs halaman `/paket` TIDAK konsisten.** Home (`Pricing.tsx`) menampilkan tier "UMKM Friendly / Starter / PREMIUM" & "1.5 Juta+…"; `/paket` memakai "Starter / Bisnis / Pro / Custom" (Rp 1,5jt / 3,5jt / 6,5jt / 10jt). Dua model harga berbeda di satu situs → membingungkan calon klien.

### SEDANG
4. **CTA sekunder hero lemah** — "Lihat Portfolio" abu-di-abu, tanpa border → terbaca seperti tombol *disabled*. Seharusnya outline.
5. **Kontras rendah** pada label kecil: badge tier (`STARTER`/`BISNIS`), label `PAKET`, price pill, sub-stats hero (abu tipis di putih) — di bawah ambang WCAG AA.
6. **Tidak ada social proof** di hero (logo klien/testimoni); klaim statistik (98+, <2s, 24/7) tanpa atribusi.
7. **Hub `/demo`**: (a) `eyebrow` kategori wrap 2 baris di satu kartu → judul kartu **tidak sejajar** dengan kartu sebelahnya; (b) badge tier tanpa pembeda warna; (c) typo **"perpanjang"** (harusnya "perpanjangan"); (d) belum ada search/filter kategori untuk 62 demo.

### RENDAH
8. Baris terakhir tiap kategori di hub tak penuh → whitespace kanan (kosmetik).
9. Home hero: split warna judul (near-black vs navy) terbaca seperti salah token; stats "memenangkan" perhatian sebelum value proposition.

## Yang sudah baik (pertahankan)
- Palet **navy** konsisten (bukan neon) → sesuai design-law.
- Hub `/demo` sudah **pakai screenshot preview** asli (permintaan sebelumnya terpenuhi di hub).
- Kontak memakai data **asli** (WA 6287745968545, hello@andalan.tech); footer tahun dinamis.
- Kartu hub: tinggi seragam + CTA bottom-aligned (eksekusi grid benar).

## Rencana perbaikan (lane)
- **UI-FIX-A** — Navbar global (logo + Home/Demo/Paket/Kontak + CTA WhatsApp) + hero: CTA sekunder jadi outline + naikkan kontras label kecil.
- **UI-FIX-B** — Home: Portfolio pakai **thumbnail preview** (bukan emoji) + kurasi unggulan + "Lihat semua demo"; **samakan harga** dengan `src/lib/pricing.ts` (sumber tunggal).
- **UI-FIX-C** (menyusul) — Hub `/demo`: clamp eyebrow, warna badge tier per level, perbaiki "perpanjangan", tambah filter kategori/search.

Aturan: patuhi skill `human-grade-web-design`; verifikasi `pnpm build` hijau + screenshot ulang.
