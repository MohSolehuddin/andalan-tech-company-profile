# Andalan Tech — Roadmap & Ide Baru

> Dokumen kerja internal. Fokus: menaikkan lead, omzet, dan margin Andalan Tech.
> Konteks: agency web (Next.js + Vercel), target UMKM & bisnis kecil Indonesia,
> basis Situbondo, remote-friendly. Situs single-page: Hero → Benefits → Pricing →
> Portfolio (placeholder) → Contact → Footer. Domain `andalan.tech`.

---

## 1. Yang sudah dikerjakan (quick wins bug & UX)

- `--glow-primary` didefinisikan di `globals.css` → efek glow di Hero/Pricing/Benefits
  yang tadinya mati (var tidak ada) sekarang jalan.
- `Particle.tsx`: class gradient rusak (`bg-gradient to-100%`) diperbaiki jadi
  `bg-linear-to-b`; jumlah partikel 200 → 80 (beban mobile turun) + `aria-hidden`.
- `Portfolio.tsx`: class rusak `hover:shadow---glow-primary)` dan
  `bg-linear-240-to-r` diperbaiki.
- **Form kontak anti-crash**: `sendEmail` sekarang validasi server-side, `try/catch`,
  dan mengembalikan `{ ok, error }` (tidak pernah throw). `Contact.tsx` pakai
  `finally` (tombol tidak nyangkut "Mengirim...") + pesan sukses/gagal (`aria-live`).
- Bug reset form: `Select` layanan diubah dari `defaultValue` → `value` (dulu tidak
  ikut ter-reset setelah kirim).
- CTA mati disambungkan: tombol Hero ("Mulai Proyek"→#contact, "Lihat Portfolio"→#portfolio),
  tombol paket harga → #contact, link footer → section yang benar.
- SEO: `lang="id"`, metadata lengkap (title template, description, keywords, OpenGraph,
  Twitter card, canonical, `metadataBase`, themeColor), `sitemap.ts` baru, `robots.txt` dirapikan.
- Footer: tahun copyright otomatis.

---

## 2. Quick wins berikutnya di web (target 1–3 hari)

1. **Ganti placeholder jadi bukti nyata.** Grid portfolio sekarang disembunyikan
   (`{false && ...}`) dan isinya proyek Unsplash palsu. Isi 3–5 karya asli (walau
   proyek kecil/mockup rapi) + 1 kalimat hasil ("konversi naik X%"). Tanpa bukti,
   harga terasa mahal.
2. **Testimoni + logo klien.** Social proof adalah pengungkit konversi #1 untuk UMKM.
3. **Tombol WhatsApp floating** di semua halaman — mayoritas closing UMKM lewat WA,
   bukan form. Prefill pesan: "Halo, saya mau tanya bikin website."
4. **Pisahkan jadi multi-halaman**: `/layanan`, `/harga`, `/portfolio`, `/blog`.
   Satu halaman membatasi keyword SEO; multi-halaman menangkap lebih banyak pencarian.
5. **Blog/artikel SEO**: "Berapa biaya bikin website 2026", "Next.js vs WordPress untuk
   UMKM", "Cara website muncul di Google". Ini pintu masuk organik jangka panjang.
6. **Email lead yang rapi**: kirim HTML (bukan teks polos), auto-reply ke lead
   ("terima kasih, kami balas < 1x24 jam"), dan simpan lead ke DB/Google Sheet
   supaya tidak ada lead hilang.
7. **Anti-spam form**: Cloudflare Turnstile + honeypot field (form kontak publik rawan spam).
8. **Analytics + event tracking**: Umami (self-host, gratis) atau GA4; track klik WA,
   submit form, klik paket. Tanpa data, marketing buta.
9. **OG image dinamis** (`next/og`): biar preview saat di-share via WA/LinkedIn terlihat
   profesional, bukan link polos.
10. **Harga & timeline transparan + CTA "Konsultasi gratis 15 menit"** — turunkan
    gesekan sebelum calon klien menghubungi.

---

## 3. Produk / paket baru (mesin pendapatan)

- **Website Instant / Template UMKM**: tema siap pakai, harga lebih murah & jadi < 3 hari.
  Volume play — banyak klien kecil, effort rendah per unit.
- **Retainer Care Plan** (sudah ada) — rapikan dengan SLA jelas + **laporan bulanan
  otomatis** (uptime, traffic, skor). Laporan = alasan retainer diperpanjang.
- **SEO Booster bulanan**: optimasi keyword lokal + update konten. High-margin, recurring.
- **Paket "Landing Page + Ads Setup"**: bikin landing page + setup Meta/Google Ads + tracking.
- **Kelola sosial media** (add-on) untuk klien yang tidak mau ribet.
- **Jasa domain & email profesional** (reseller) — margin tambahan, low effort.
- **Maintenance website lama** (WordPress/Laravel milik UMKM) — pasar besar, mereka
  sudah punya web tapi tak terawat.
- **POS/katalog online sederhana untuk UMKM** (produk SaaS mikro, recurring).

---

## 4. Marketing & lead-gen

- **Google Business Profile** (Situbondo + kota target) → minta review tiap selesai proyek.
- **Google Search Ads** keyword "jasa pembuatan website [kota]" — niat beli tinggi.
- **Deck/portofolio PDF** siap kirim untuk prospek.
- **Konten short-form** (TikTok/IG): "before-after website", "tips UMKM go-online".
- **Partnership referral**: fotografer produk, agensi sosmed, percetakan → bagi komisi.
- **Marketplace jasa** (Fastwork, Sribu) sebagai channel awal cari klien pertama.
- **Cold outreach via Google Maps**: kirim **audit web gratis** (skor + 3 saran) ke UMKM
  yang webnya lambat/ketinggalan — lead magnet sangat efektif.

---

## 5. Ops & delivery (agar margin sehat & scalable)

- **Boilerplate Next.js internal** (starter Andalan): fitur umum (SEO, form, analytics,
  WhatsApp CTA) sudah jadi → proyek baru deploy dalam jam, bukan hari. Marga naik.
- **Checklist onboarding + form brief** klien (standarkan input, kurangi revisi).
- **Kontrak/SOW + invoice otomatis** + pembayaran online (Midtrans/Xendit) → uang masuk cepat.
- **Support terstruktur** (WhatsApp Business API atau helpdesk ringan) + jam respons jelas.
- **Monitoring uptime semua klien** (Uptime Kuma, self-host) + alert otomatis.
- **Backup otomatis + dokumen handover**.

---

## 6. Teknis / pembeda dari kompetitor

- **"Cek Skor Web Anda" gratis**: user masukkan URL → tampilkan skor PageSpeed/Lighthouse
  + rekomendasi. Lead magnet kuat, sekaligus demo keahlian.
- **Dashboard laporan performa klien** (traffic, uptime, skor) — justifikasi retainer.
- **Hosting di VPS sendiri** (skill kamu sudah ada) sebagai alternatif Vercel: tawarkan
  "hosting lokal murah + tetap cepat" → margin hosting lebih tinggi dari markup Vercel.

---

## 7. Ide jangka panjang

- Produk SaaS mikro: **"Andalan Kit"** — tool website/data untuk UMKM.
- Rekrut 1–2 freelancer untuk scale delivery (kamu fokus sales & arsitektur).
- **Pilih niche** (klinik / sekolah / restoran / properti) → jadi spesialis → harga premium.
- Jual **template** (Gumroad/Lemon Squeezy) sebagai passive income.

---

## 8. Prioritas 30 hari (rekomendasi)

1. Isi portfolio & testimoni nyata + tombol WhatsApp floating (bukti + closing cepat).
2. Boilerplate Next.js internal (mempercepat semua proyek berikutnya).
3. Blog + 3 artikel SEO + Google Business Profile.
4. Kirim email lead rapi (HTML + auto-reply + simpan lead) + Turnstile.
5. Luncurkan paket **Website Instant** + **SEO Booster** sebagai produk berulang.

---

_Dibuat otomatis sebagai bagian dari improvement web andalan-tech._
