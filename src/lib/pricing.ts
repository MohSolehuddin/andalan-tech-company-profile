import type { PackageTier } from "./demo/types";

export type PackageInfo = {
  id: PackageTier;
  name: string;
  scope: string;
  firstPrice: number;
  renewalPrice: number;
  popular?: boolean;
  features: string[];
};

export const PACKAGE_TIERS: PackageInfo[] = [
  {
    id: "starter",
    name: "Starter",
    scope: "Landing 1 halaman + tombol WhatsApp",
    firstPrice: 1500000,
    renewalPrice: 500000,
    features: [
      "Landing page 1 halaman responsif & cepat",
      "Integrasi tombol WhatsApp langsung ke chat",
      "Domain (.com/.id) & cloud hosting tahun pertama",
      "Setup Google Search Console dasar",
    ],
  },
  {
    id: "bisnis",
    name: "Bisnis",
    scope: "s.d. 5 halaman + katalog produk",
    firstPrice: 3500000,
    renewalPrice: 900000,
    popular: true,
    features: [
      "Hingga 5 halaman (Beranda, Tentang, Layanan, Kontak, FAQ)",
      "Katalog produk / layanan interaktif",
      "Domain (.com/.id) & cloud hosting performa tinggi",
      "Optimasi SEO dasar Google & integrasi WhatsApp",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    scope: "Katalog + panel admin/CMS + SEO on-page",
    firstPrice: 6500000,
    renewalPrice: 1500000,
    features: [
      "Semua fitur paket Bisnis + halaman dinamis",
      "Panel admin / CMS mandiri untuk kelola konten & produk",
      "Optimasi SEO on-page lengkap & schema markup bisnis",
      "Integrasi analitik pengunjung & laporan performa",
    ],
  },
  {
    id: "custom",
    name: "Custom",
    scope: "Booking/e-commerce/integrasi",
    firstPrice: 10000000,
    renewalPrice: 2000000,
    features: [
      "Fitur kustom (sistem reservasi, e-commerce, atau payment gateway)",
      "Integrasi API pihak ketiga & kustomisasi alur bisnis",
      "Desain antarmuka eksklusif sesuai identitas brand",
      "Dukungan prioritas & pelatihan penggunaan sistem",
    ],
  },
];

export type AddonItem = {
  name: string;
  price: number;
  unit: string;
};

export const ADDONS: AddonItem[] = [
  { name: "Domain .com/.id", price: 200000, unit: "tahun" },
  { name: "Hosting", price: 400000, unit: "tahun" },
  { name: "Maintenance & update konten", price: 300000, unit: "bulan" },
  { name: "SEO bulanan", price: 750000, unit: "bulan" },
  { name: "Google Business Profile", price: 350000, unit: "sekali" },
];

export function formatIDR(n: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  })
    .format(n)
    .replace(/\u00a0/g, " ");
}

export function tierById(id: PackageTier): PackageInfo | undefined {
  return PACKAGE_TIERS.find((tier) => tier.id === id);
}
