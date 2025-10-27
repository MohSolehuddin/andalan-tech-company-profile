const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
              Andalan Tech
            </h3>
            <p className="text-sm text-muted-foreground">
              Membangun website modern dengan teknologi terdepan untuk bisnis
              Anda.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Layanan</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  E-Commerce
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  SEO Optimization
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Maintenance
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Perusahaan</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
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
              © 2025 Andalan Tech. All rights reserved.
            </p>{" "}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
