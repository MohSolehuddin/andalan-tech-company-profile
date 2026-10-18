export type DemoCategory =
  | "Kuliner & F&B"
  | "Kesehatan & Kecantikan"
  | "Retail & Toko"
  | "Jasa & Profesional"
  | "Properti, Travel & Otomotif"
  | "Pendidikan & Teknologi";

export type PackageTier = "starter" | "bisnis" | "pro" | "custom";

export const DEMO_CATEGORIES: DemoCategory[] = [
  "Kuliner & F&B",
  "Kesehatan & Kecantikan",
  "Retail & Toko",
  "Jasa & Profesional",
  "Properti, Travel & Otomotif",
  "Pendidikan & Teknologi",
];

export interface DemoItem {
  slug: string;
  name: string;
  category: DemoCategory;
  package: PackageTier;
  niche: string;
  tagline: string;
  description: string;
  emoji: string;
  /** Tailwind gradient stops (used with bg-linear-to-br). */
  accentBg: string;
  accentText: string;
  ring: string;
  highlights: string[];
}

