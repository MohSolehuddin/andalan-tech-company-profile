# Code Contract

Dokumen ini memuat kontrak teknis antarmuka rute (App Router), Server Action, fungsi pembantu (helper), model data demo, serta panduan menambah demo baru di repositori `andalan-tech-company-profile`.

## 1. Daftar Rute App Router

Struktur halaman dan rute publik berbasis Next.js App Router (`src/app/`):

- **`/` (`src/app/page.tsx`)**: Landing page utama Andalan Tech.
  - Alur komponen berurutan: `Hero` → `Benefits` → `Pricing` → `Portfolio` → `Contact` → `Footer`.
- **`/demo` (`src/app/demo/page.tsx`)**: Hub etalase kumpulan contoh website siap pakai. Menampilkan grid kartu demo berdasarkan data terpusat `demoItems`.
- **`/demo/<slug>` (`src/app/demo/<slug>/page.tsx`)**: Halaman demo website interaktif per industri/niche. Terbungkus layout bersama (`src/app/demo/layout.tsx`) yang menyediakan navigasi sticky bar kembali ke `/demo` dan attribution ke Andalan Tech, serta mengecualikan pengindeksan bot pencari (`robots: { index: false, follow: false }`).
  - `/demo/restoran` — **Rasa Nusantara** (Restoran & Kuliner: menu digital, order WhatsApp, galeri)
  - `/demo/klinik` — **Klinik Sehat Bersama** (Klinik & Kesehatan: jadwal praktik, daftar dokter, janji temu WhatsApp)
  - `/demo/toko` — **TokoKita** (Toko Online / UMKM: katalog produk, filter kategori, checkout WhatsApp)
  - `/demo/saas` — **KelolaKu** (SaaS & Startup: dashboard visual, otomasi alur kerja, paket langganan, demo WhatsApp)
  - `/demo/sekolah` — **SMA Cendekia Nusantara** (Sekolah & Pendidikan: program peminatan, fasilitas, info PPDB WhatsApp)
  - `/demo/properti` — **Griya Andalan Properti** (Properti & Real Estate: listing properti, spesifikasi, konsultasi survei WhatsApp)
  - `/demo/jasa` — **Nara Kreatif** (Jasa & Personal Brand: paket layanan, portofolio karya, konsultasi WhatsApp)
  - `/demo/bengkel` — **AutoPrima Motor** (Bengkel & Otomotif: servis berkala, estimasi biaya transparan, booking WhatsApp)
  - `/demo/laundry` — **Kilat Bersih Laundry** (Laundry & Kebersihan: layanan kiloan/satuan, antar-jemput, order WhatsApp)
  - `/demo/salon` — **Glow & Glam Salon** (Salon & Kecantikan: menu treatment, daftar harga, reservasi WhatsApp)
- **Rute Utilitas Metadata**:
  - `/sitemap.xml` (`src/app/sitemap.ts`) — Peta situs dinamis untuk halaman root domain.
  - `/icon.png` (`src/app/icon.png`) — Favicon dan aplikasi icon.

## 2. Server Action: `sendEmail`

- **Lokasi Berkas**: `src/actions/sendEmail.ts`
- **Directive**: `"use server"`
- **Deskripsi**: Menangani pengiriman pesan dari formulir kontak ke alamat email pengelola dengan proteksi anti-crash (seluruh kegagalan ditangkap dalam blok try-catch dan tidak pernah melempar unhandled exception).

### Signature
```typescript
export const sendEmail = async (
  input: z.infer<typeof contactSchema>
): Promise<SendEmailResult>
```

### Input Contract (`contactSchema` dari `src/lib/schema/contactSchema.ts`)
| Field | Tipe | Validasi Zod |
| :--- | :--- | :--- |
| `name` | `string` | Minimal 2 karakter, maksimal 100 karakter |
| `email` | `string` | Format alamat email valid |
| `whatsapp` | `string` | Regex: `/^(\+62\|62\|0)[0-9]{9,12}$/` |
| `service` | `string` | Minimal 1 karakter (pilihan layanan web/app) |
| `message` | `string` | Minimal 10 karakter, maksimal 1000 karakter |

### Output Contract (`SendEmailResult`)
```typescript
export type SendEmailResult = 
  | { ok: true } 
  | { ok: false; error: string };
```
- **Sukses**: Mengembalikan `{ ok: true }`.
- **Gagal Validasi**: Mengembalikan `{ ok: false, error: "Data yang Anda kirim tidak valid." }`.
- **Gagal Konfigurasi**: Jika `MAIL_TO` tidak diset di environment, mengembalikan `{ ok: false, error: "Layanan email belum dikonfigurasi." }`.
- **Gagal SMTP Transport**: Jika transmisi Nodemailer gagal, mengembalikan `{ ok: false, error: "Gagal mengirim pesan. Silakan coba lagi atau hubungi kami via WhatsApp." }`.

## 3. Helper WhatsApp: `waLink(message)`

- **Lokasi Berkas**: `src/lib/demo/wa.ts`
- **Konstanta Nomor**: `export const DEMO_WA = "6287745968545"`

### Signature
```typescript
export function waLink(message: string): string
```

### Implementasi
```typescript
export function waLink(message: string): string {
  return `https://wa.me/${DEMO_WA}?text=${encodeURIComponent(message)}`;
}
```
Fungsi ini mengenkripsi pesan teks dan menyusun tautan langsung ke WhatsApp resmi Andalan Tech untuk seluruh aksi pemesanan, reservasi, konsultasi, dan janji temu pada seluruh demo.

## 4. Interface `DemoItem` & Single Source of Truth

- **Lokasi Berkas**: `src/lib/demo/demos.ts`
- **Peran**: Menjadi satu-satunya sumber data (Single Source of Truth) untuk katalog `/demo` dan section `Portfolio` di landing page utama.

### Interface Definition
```typescript
export interface DemoItem {
  slug: string;        // Identifier unik untuk URL /demo/<slug>
  name: string;        // Nama brand bisnis demo
  niche: string;       // Sektor atau kategori bisnis
  tagline: string;     // Slogan singkat penjelas nilai demo
  description: string; // Uraian lengkap fitur dan fungsionalitas demo
  emoji: string;       // Karakter emoji sebagai identitas visual kartu
  accentBg: string;    // Stop gradien warna Tailwind (digunakan pada bg-linear-to-br)
  accentText: string;  // Kelas warna teks Tailwind (misal: "text-amber-600")
  ring: string;        // Kelas border interaktif hover (misal: "hover:border-amber-400")
  highlights: string[];// Daftar 3 fitur sorotan utama
}
```

## 5. Cara Menambah Demo Baru

Untuk menambahkan halaman demo website portofolio baru, ikuti 3 langkah berikut:

1. **Tambahkan Entri ke `demoItems` (`src/lib/demo/demos.ts`)**:
   Daftarkan objek baru di array `demoItems` yang mengimplementasikan antarmuka `DemoItem`, pastikan `slug` unik (misal `"fotografi"`) dan tentukan styling aksen Tailwind.

2. **Buat Komponen Antarmuka di `src/components/demo/<slug>/`**:
   Buat folder baru sesuai nama slug dan buat komponen-komponen section spesifik (misal Hero, Services/Catalog, Testimonials, Contact/Booking).
   Gunakan helper `waLink("Pesan default...")` dari `@/lib/demo/wa` untuk mengarahkan CTA pengunjung ke WhatsApp.

3. **Buat Rute Halaman di `src/app/demo/<slug>/page.tsx`**:
   Buat halaman App Router baru yang mengimpor komponen demo, menetapkan `metadata` judul halaman, dan merender komponen di dalam tag semantik `<main>`.
