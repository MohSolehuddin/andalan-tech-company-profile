import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PACKAGE_TIERS, formatIDR } from "@/lib/pricing";

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            Paket Harga{" "}
            <span className="text-primary">
              Transparan
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pilih yang sesuai dengan kebutuhan bisnis Anda
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {PACKAGE_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`relative p-8 rounded-xl border transition-all duration-300 ${
                tier.popular
                  ? "border-primary bg-card shadow-md"
                  : "border-border bg-card/50 hover:border-primary/50 shadow-xs hover:shadow-sm"
              }`}>
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                  Paling Populer
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {formatIDR(tier.firstPrice)}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Buat pertama · perpanjang {formatIDR(tier.renewalPrice)}
                    /tahun
                  </p>
                  <p className="mt-2 text-muted-foreground">{tier.scope}</p>
                </div>

                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className="w-full shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  variant={tier.popular ? "default" : "secondary"}
                  size="lg">
                  <a href="#contact">
                    {tier.id === "custom" ? "Hubungi Kami" : "Pilih Paket"}
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-muted-foreground">
          Bandingkan detail paket &amp; layanan tambahan di{" "}
          <Link
            href="/paket"
            className="font-semibold text-primary underline underline-offset-4 hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-xs">
            halaman paket
          </Link>
          .
        </p>
      </div>
    </section>
  );
};

export default Pricing;
