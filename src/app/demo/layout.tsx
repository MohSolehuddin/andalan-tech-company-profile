import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";

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
    </div>
  );
}
