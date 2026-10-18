export interface DemoItem {
  slug: string;
  name: string;
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
