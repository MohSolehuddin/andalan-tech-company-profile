# Ringkasan Perubahan: ANDALAN-62

## Judul
Design Pass Human-Grade untuk 10 Demo Kategori "Pendidikan & Teknologi"

## Deskripsi
Menerapkan perbaikan desain mekanis (R1–R7) pada 10 demo kategori Pendidikan & Teknologi — `sekolah`, `bimbel`, `pesantren`, `saas`, `dashboard`, `paud`, `kursus-bahasa`, `kursus-it`, `kampus`, `agency` — mengikuti skill `human-grade-web-design` tanpa mengubah data, fakta, slug, struktur, maupun dependency.

## Perbaikan yang Diterapkan
1. **R1 — Hapus blob blur dekoratif**: 12 elemen `blur-3xl`/`blur-xl` murni hiasan dihapus dari hero `SekolahHero`, `BimbelHero`, `PesantrenHero`, `PaudHero`, `KursusHero` (kursus-bahasa), `KursusHero` (kursus-it), `KampusHero`, `AgencyHero`, `SaasHero`, `SaasCta`, serta glow `blur-xl` di `KursusCertificates`.
2. **R2 — Drop-shadow berwarna dinetralkan**: 18 shadow berwarna (sky/indigo/blue/rose/violet) pada kartu & tombol diganti `shadow-sm` atau `hover:shadow-md`.
3. **R3 — `rounded-3xl` → `rounded-xl`**: 8 container (BimbelContact, BimbelPricing, SaasPricing, PaudFacilities, PaudContact, PaudPpdb, KursusPricing, KursusContact).
4. **R4 — Kontras teks abu di latar terang**: `text-slate-400` → `text-slate-600` pada `SaasPricing`, `DashActivity`, `DashChart`, `DashTable`, `KursusPrograms` (kursus-it), dan halaman `Dashboard` (label + placeholder). Teks abu di latar gelap dibiarkan sesuai aturan.
5. **R5 — Warna neon dinetralkan**: aksen `cyan` → `blue` di seluruh demo `saas` & `kursus-bahasa`; `violet` → `indigo` di `kursus-it` (header program) dan seluruh demo `agency`; gradien teks neon diganti warna solid; `to-cyan-950` → `to-teal-950` di `PesantrenFacilities`.
6. **R6 — State fokus keyboard**: seluruh tombol/tautan utama (44 elemen) kini memiliki `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2`.
7. **R7 — Copy buzzword diganti konkret**: "masa depan" (SekolahHero, KursusHero IT), "tanpa batas"/"tanpa batasan" (SaasPricing) diganti kalimat spesifik tanpa mengubah makna fitur.

## File yang Diubah (44 file)
- `src/components/demo/sekolah/` (SekolahHero, SekolahPpdb, SekolahContact)
- `src/components/demo/bimbel/` (BimbelHero, BimbelPricing, BimbelContact)
- `src/components/demo/pesantren/` (PesantrenHero, PesantrenFacilities, PesantrenPpdb, PesantrenContact)
- `src/components/demo/saas/` (SaasHero, SaasFeatures, SaasPricing, SaasTestimonials, SaasCta)
- `src/components/demo/dashboard/` (DashSidebar, DashActivity, DashChart, DashTable)
- `src/app/demo/dashboard/page.tsx`
- `src/components/demo/paud/` (PaudHero, PaudFacilities, PaudPpdb, PaudContact, PaudPrograms)
- `src/components/demo/kursus-bahasa/` (KursusHero, KursusPrograms, KursusModes, KursusPricing, KursusTrial)
- `src/components/demo/kursus-it/` (KursusHero, KursusPrograms, KursusSchedulePrice, KursusCertificates, KursusContact)
- `src/components/demo/kampus/` (KampusHero, KampusPrograms, KampusAdmission, KampusContact)
- `src/components/demo/agency/` (AgencyHero, AgencyServices, AgencyPortfolio, AgencyProcessPricing, AgencyContact)

## Catatan
- Tidak ada perubahan data, fakta, slug, struktur, dependency, schema, tests/setup, AGENTS.md, maupun file di luar scope.
- Tidak ada git commit dan tidak ada push ke remote.

## Verifikasi
- `npm test` (repo-wide, foreground) — output persis:
  ```
  npm error Missing script: "test"
  npm error
  npm error To see a list of scripts, run:
  npm error   npm run
  npm error A complete log of this run can be found in: /home/msytc/.npm/_logs/2026-10-18T07_47_39_360Z-debug-0.log
  ```
  (repo tidak memiliki skrip `test` di package.json; exit code 1)
- `pnpm install --frozen-lockfile` — exit code 0.
- `pnpm build` — exit code 0: `✓ Compiled successfully in 10.5s`, `✓ Generating static pages (67/67)`, seluruh rute `/demo/*` (termasuk 10 demo kategori ini) ter-prerender statis tanpa error.
- `npx eslint` pada seluruh file scope — 0 error (3 warning unused import pre-existing, tidak diperkenalkan oleh perubahan ini).
