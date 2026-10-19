import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <Image
              src="/logotext.png"
              alt="logo with text"
              height={80}
              width={300}
              className="h-16 w-auto"
            />
            <p className="text-sm text-muted-foreground">
              Jasa pembuatan website cepat, stabil, dan teroptimasi SEO dengan
              Next.js untuk bisnis Anda.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Layanan</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/paket" className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-xs">
                  Paket &amp; Harga
                </Link>
              </li>
              <li>
                <a href="#pricing" className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-xs">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-xs">
                  E-Commerce
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-xs">
                  SEO Optimization
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-xs">
                  Maintenance
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Perusahaan</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#benefits" className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-xs">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-xs">
                  Portfolio
                </a>
              </li>
              {/* Blog belum tersedia — aktifkan tautan saat halaman blog siap */}
              <li>
                <a href="#contact" className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-xs">
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Hubungi Kami</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Email: hello@andalan.tech</li>
              <li>WhatsApp: +62 877 4596 8545</li>
              <li>Situbondo, Indonesia</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Andalan Tech. All rights reserved.
            </p>{" "}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
