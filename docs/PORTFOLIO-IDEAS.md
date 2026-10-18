# Ide Project Portfolio — Andalan Tech

> Tujuan: tiap portfolio = **bukti keahlian** yang bisa dijual + **demo hidup** yang bisa
> dilihat calon klien. Bukan sekadar screenshot, tapi halaman yang bisa diklik.
>
> Prinsip pemilihan: pilih niche yang **sering dicari UMKM Indonesia**, bangun demo
> yang bisa dibuka langsung di `andalan.tech/demo/<slug>` (satu domain, tanpa biaya
> hosting tambahan, langsung jadi bahan jualan).

---

## Kenapa demo internal (bukan link ke proyek luar)?

- Bisa dilihat **1 klik** dari halaman portfolio — calon klien tidak perlu buka tab lain.
- Membuktikan kecepatan & kualitas Andalan Tech dengan **domain sendiri**.
- Bisa dipakai sebagai **template starter**: begitu ada klien di niche itu, tinggal
  ganti konten → hemat waktu, margin naik.

---

## Demo yang dibangun (live di `/demo/*`)

| # | Niche | Slug | Fokus jualan | Status |
|---|-------|------|--------------|--------|
| 1 | Restoran / Kuliner | `/demo/restoran` | Order via WhatsApp, menu, galeri, lokasi + jam | dibangun |
| 2 | Klinik / Kesehatan | `/demo/klinik` | Layanan, dokter, jadwal, buat janji via WA | dibangun |
| 3 | Toko / UMKM Retail | `/demo/toko` | Katalog produk + filter kategori + checkout WA | dibangun |
| 4 | SaaS / Startup | `/demo/saas` | Hero, fitur, harga, social proof | menyusul |
| 5 | Sekolah / Pendidikan | `/demo/sekolah` | Profil, PPDB, fasilitas, berita | menyusul |
| 6 | Properti | `/demo/properti` | Listing rumah, filter, agen | menyusul |
| 7 | Jasa / Personal brand | `/demo/jasa` | Portofolio, layanan, testimoni | menyusul |
| 8 | Bengkel / Otomotif | `/demo/bengkel` | Layanan, booking servis, promo | menyusul |

---

## Pola tiap demo (biar konsisten & cepat)

- Struktur: Hero → (Layanan/Menu/Produk) → Bukti (testimoni/galeri) → Kontak/WA → Footer.
- CTA utama: **WhatsApp** (channel closing #1 UMKM) + form/kontak.
- Mobile-first, cepat, SEO (heading rapi, meta).
- Banner kecil "Demo dibuat oleh Andalan Tech" + tombol balik ke `andalan.tech`.
- Warna aksen beda per niche biar terasa seperti brand masing-masing.

---

## Roadmap portfolio lanjutan (loop berikutnya)

- Demo **Dashboard/Admin** (bukti kemampuan fullstack, bukan cuma landing).
- Demo **Sistem booking** (klinik/salon/bengkel) — fitur interaktif.
- Demo **Multi-bahasa** (ID/EN) — bukti siap klien internasional.
- Halaman **"Cek Skor Web Anda"** (PageSpeed API) — lead magnet sekaligus demo teknis.
- **Studi kasus** nyata setelah klien pertama (before/after, metrik).
- **Case study mini**: "dari 0 → online dalam 3 hari" untuk tiap template.

---

## Aturan pembuatan (agar tidak buang waktu)

1. Satu demo = satu folder komponen sendiri (`src/components/demo/<slug>/`), kecil-kecil.
2. Tidak menambah dependency baru — pakai Tailwind + lucide + komponen UI yang sudah ada.
3. Tidak menyentuh logika halaman utama (anti-regresi).
4. Setiap demo selesai → tulis 1 baris di tabel di atas + link dari `/demo`.
