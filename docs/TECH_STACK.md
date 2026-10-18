# Tech Stack

Dokumen ini merinci bahasa pemrograman, runtime, framework, pustaka UI, dan utilitas yang digunakan dalam repositori `andalan-tech-company-profile` berdasarkan konfigurasi aktual (`package.json`, `tsconfig.json`, `pnpm-workspace.yaml`).

## 1. Bahasa & Runtime

- **TypeScript**: `^5` (didefinisikan di `devDependencies.typescript`)
- **Node.js Type Definitions**: `@types/node: ^20`
- **Target ECMAScript**: `ES2017` (dikonfigurasi pada `tsconfig.json` di bawah `compilerOptions.target`)
- **Module & Resolution**: `module: "esnext"`, `moduleResolution: "bundler"`
- **Package Manager**: `pnpm` (menggunakan lockfile `pnpm-lock.yaml` dan `pnpm-workspace.yaml`)

## 2. Framework Utama

- **Next.js**: `16.0.0` (terpinning/exact version di `dependencies.next`, menggunakan arsitektur App Router)
- **React**: `19.2.0` (terpinning/exact version di `dependencies.react`)
- **React DOM**: `19.2.0` (terpinning/exact version di `dependencies.react-dom`)
- **Next Themes**: `^0.4.6` (manajemen tema tampilan)

## 3. Styling & Desain Sistem

- **Tailwind CSS**: `v4` (`tailwindcss: ^4` dan `@tailwindcss/postcss: ^4`)
- **PostCSS**: `postcss.config.mjs` terhubung dengan `@tailwindcss/postcss`
- **Animasi**: `tw-animate-css: ^1.4.0`
- **Utility Styling**:
  - `clsx`: `^2.1.1`
  - `tailwind-merge`: `^3.3.1`
  - `class-variance-authority`: `^0.7.1`

## 4. Komponen UI & Ikon

- **Lucide Icons**: `lucide-react: ^0.548.0` (ikon antarmuka aplikasi dan demo)
- **Radix UI Primitives**:
  - `@radix-ui/react-label`: `^2.1.7`
  - `@radix-ui/react-select`: `^2.2.6`
  - `@radix-ui/react-slot`: `^1.2.3`
  - `@radix-ui/react-switch`: `^1.2.6`

## 5. Manajemen Form & Validasi Data

- **React Hook Form**: `react-hook-form: ^7.65.0` (pengendalian input formulir kontak)
- **Hookform Resolvers**: `@hookform/resolvers: ^5.2.2` (penghubung React Hook Form dengan skema Zod)
- **Zod**: `zod: ^4.1.12` (validasi runtime data formulir kontak di sisi klien maupun server)

## 6. Email & Backend Utilities

- **Nodemailer**: `nodemailer: ^7.0.10` (transport pengiriman email SMTP pada Server Action `sendEmail`)
- **Nodemailer Type Definitions**: `@types/nodemailer: ^7.0.3`

## 7. Linter & Kualitas Kode

- **ESLint**: `eslint: ^9`
- **ESLint Config Next**: `eslint-config-next: 16.0.0` (terpinning/exact version)
- **React Types**: `@types/react: ^19`, `@types/react-dom: ^19`

## 8. Ringkasan Versi Terpinning (Pinned Versions)

Dependensi berikut dikunci pada versi spesifik tanpa rentang caret (`^`) pada `package.json`:
- `next`: `16.0.0`
- `react`: `19.2.0`
- `react-dom`: `19.2.0`
- `eslint-config-next`: `16.0.0`
