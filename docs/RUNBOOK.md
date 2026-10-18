# Runbook

Dokumen ini berisi panduan operasional eksak untuk menjalankan lingkungan pengembangan (dev), pembangunan bundle (build), eksekusi produksi (prod), konfigurasi environment variable, dan gerbang validasi otomatis (repo gate).

## 1. Prasyarat Lingkungan

- **Node.js**: Versi `>= 20.x`
- **Package Manager**: `pnpm` (disarankan sesuai versi lockfile `pnpm-lock.yaml`)

## 2. Menjalankan Lingkungan Pengembangan (DEV)

Jalankan perintah berikut pada terminal:

```bash
# 1. Pasang dependensi proyek
pnpm install

# 2. Jalankan server pengembangan Next.js
pnpm dev
```

Aplikasi dapat diakses melalui peramban web pada alamat `http://localhost:3000`.

## 3. Menjalankan Lingkungan Produksi (BUILD / PROD)

Untuk membangun dan menjalankan versi produksi:

```bash
# 1. Kompilasi dan optimasi bundle produksi
pnpm build

# 2. Jalankan server HTTP produksi Next.js
pnpm start
```

## 4. Konfigurasi Environment Variables

Salin berkas acuan `.env.example` ke `.env` atau `.env.local` dan sesuaikan nilainya:

```bash
cp .env.example .env.local
```

Rincian variabel lingkungan:

| Variabel | Kebutuhan | Deskripsi & Contoh |
| :--- | :--- | :--- |
| `APP_DOMAIN` | Direkomendasikan | URL basis aplikasi untuk pembuatan canonical metadata dan sitemap.<br>Contoh lokal: `"http://localhost:3000"`<br>Contoh produksi: `"https://andalan.tech"` (fallback default) |
| `MAIL_HOST` | Opsional | Host SMTP pengiriman email.<br>Default: `"smtp.gmail.com"` |
| `MAIL_USERNAME` | Wajib (kirim email) | Username atau alamat email akun SMTP otentikasi.<br>Contoh: `"sender@example.com"` (juga dipakai sebagai default pengirim di header `From`) |
| `MAIL_PASSWORD` | Wajib (kirim email) | Kata sandi akun email atau App Password SMTP |
| `MAIL_TO` | Wajib (kirim email) | Alamat email tujuan penerima notifikasi formulir kontak.<br>Contoh: `"to@example.com"` (jika kosong, Server Action mengembalikan error) |
| `MAIL_BCC` | Opsional | Alamat email tembusan tersembunyi (BCC) untuk pengarsipan pesan |

> **Perhatian**: Jangan pernah melakukan commit file `.env` atau kredensial/password nyata ke dalam repositori git.

## 5. Gate Repositori (Repo Gate / CI)

Repositori ini memiliki gerbang verifikasi otomatis yang ditentukan di `.agent-hub.json`:

```bash
pnpm install --frozen-lockfile && pnpm build
```

- `pnpm install --frozen-lockfile`: Menjamin dependensi diinstal secara deterministik sesuai `pnpm-lock.yaml`.
- `pnpm build`: Melakukan type-check TypeScript dan build Next.js. Seluruh proses harus keluar dengan exit code `0` tanpa kegagalan kompilasi.
- **Konfigurasi Workspace**: Berkas `pnpm-workspace.yaml` telah mengizinkan build paket native (`allowBuilds`: `sharp`, `unrs-resolver`) demi kelancaran CI/CD.
