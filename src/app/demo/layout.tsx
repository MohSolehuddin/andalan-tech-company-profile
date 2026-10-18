import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MessageCircle, Sparkles } from "lucide-react";
import { formatIDR, tierById } from "@/lib/pricing";
import { waLink } from "@/lib/demo/wa";

export const metadata: Metadata = {
  title: "Demo Website — Andalan Tech",
  // Demos are templates — keep them out of search results.
  robots: { index: false, follow: false },
};

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const starterTier = tierById("starter");
  const firstPrice = starterTier ? formatIDR(starterTier.firstPrice) : "Rp 1.500.000";
  const renewalPrice = starterTier ? formatIDR(starterTier.renewalPrice) : "Rp 500.000";

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky demo bar: jump back to the demo hub or the main site */}
      <div className="sticky top-0 z-50 flex items-center justify-between gap-3 border-b border-white/10 bg-neutral-950 px-4 py-2.5 text-xs text-neutral-300">
        <Link
          href="/demo"
          className="inline-flex items-center gap-1.5 transition-colors hover:text-white">
          <ArrowLeft className="h-3.5 w-3.5" />
          Semua Demo
        </Link>
        <span className="inline-flex items-center gap-1.5">
          <Sparkles className="h-3.5 w-3.5 text-amber-400" />
          <span className="hidden sm:inline">Demo dibuat oleh</span>
          <Link href="/" className="font-semibold text-white hover:underline">
            Andalan Tech
          </Link>
        </span>
      </div>
      {children}
      {/* Pricing CTA Band */}
      <div className="border-t border-neutral-200 bg-neutral-900 px-4 py-3 text-white">
        <div className="container mx-auto flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left text-xs sm:text-sm">
          <p className="text-neutral-300">
            Suka tampilan ini? Website seperti ini mulai {firstPrice} (perpanjang {renewalPrice}/tahun) ·{" "}
            <Link href="/paket" className="underline hover:text-white font-medium">
              Lihat paket
            </Link>
          </p>
          <div className="flex items-center gap-2 shrink-0">
            <Link
              href="/paket"
              className="rounded-lg bg-white/10 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-white/20">
              Lihat Paket
            </Link>
            <a
              href={waLink("Halo, saya suka tampilan demo ini dan ingin pesan website serupa")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-emerald-500">
              <MessageCircle className="h-3.5 w-3.5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
