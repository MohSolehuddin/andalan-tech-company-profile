"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background">
      <div className="container mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="inline-flex items-center rounded-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
          <Image
            src="/logotext.png"
            alt="Andalan Tech"
            width={150}
            height={40}
            priority
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground">
          <Link
            href="/"
            className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-xs">
            Beranda
          </Link>
          <Link
            href="/demo"
            className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-xs">
            Demo
          </Link>
          <Link
            href="/paket"
            className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-xs">
            Paket
          </Link>
          <a
            href="#contact"
            className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-xs">
            Kontak
          </a>
        </nav>

        {/* Primary CTA */}
        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/6287745968545"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            Konsultasi Gratis
          </a>
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-border bg-background">
          <nav className="container mx-auto max-w-6xl px-4 py-4 flex flex-col gap-1 text-sm font-medium text-foreground">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="rounded-sm px-3 py-2 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
              Beranda
            </Link>
            <Link
              href="/demo"
              onClick={() => setOpen(false)}
              className="rounded-sm px-3 py-2 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
              Demo
            </Link>
            <Link
              href="/paket"
              onClick={() => setOpen(false)}
              className="rounded-sm px-3 py-2 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
              Paket
            </Link>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-sm px-3 py-2 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
              Kontak
            </a>
            <a
              href="https://wa.me/6287745968545"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
              Konsultasi Gratis
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
