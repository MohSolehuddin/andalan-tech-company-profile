/**
 * Shared WhatsApp helper for the demo sites.
 * All demo CTAs route to Andalan Tech's WhatsApp so leads are visible.
 * v1.0.0
 */
export const DEMO_WA = "6287745968545";

export function waLink(message: string): string {
  return `https://wa.me/${DEMO_WA}?text=${encodeURIComponent(message)}`;
}
