# andalan-tech-company-profile — arsitektur

Next.js 16 (App Router) + TypeScript + Tailwind. Web agency **Andalan Tech** (basis Situbondo; target UMKM Indonesia & Jabodetabek).
Branch kerja: `feat/portfolio-demos`.

## Struktur
- `src/app/page.tsx` (landing), `src/app/paket/page.tsx` (harga), `src/app/demo/page.tsx` (**hub 62 demo**), `src/app/demo/<slug>/page.tsx` (tiap demo).
- `src/components/*` (Hero, Portfolio, Footer, Paket…); `src/components/demo/<slug>/*` (per-demo).
- `src/lib/demo/{types.ts,demos.ts,wa.ts}`; **`src/lib/demo/items/<slug>.ts`** (registry per-file); `src/lib/pricing.ts`; `src/app/globals.css` (palet navy `hsla(224,78%,17%)`).

## Demo & generator
62 demo (6 kategori × 10 + bakso + sewa-iphone). Registry dipecah per-file `items/<slug>.ts`, di-generate ke `demos.ts` via `scripts/gen-demos.mjs` (identifier camelCase).
Thumbnail hub: `public/demo/preview/<slug>.webp` (screenshot chromium headless → webp). Script: `~/hermes-work/review-loop/gen-demo-previews.sh`.
Semua CTA demo → WhatsApp Andalan Tech **6287745968545** via `waLink()` (`src/lib/demo/wa.ts`).

## Konvensi
- `Button asChild` untuk anchor; commit 1 concern; lane **NO auto-commit** (parent verifikasi & commit).
- Verifikasi: `pnpm build` hijau + probe runtime (`~/hermes-work/review-loop/andalan-probe2.sh`).
