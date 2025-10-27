"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { pricingData } from "@/lib/utils/pricingData";
import { Check } from "lucide-react";
import { useState } from "react";
const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(false);
  const currentPricing = isMonthly ? pricingData.monthly : pricingData.oneTime;

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            Paket Harga{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
              Transparan
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pilih yang sesuai dengan kebutuhan bisnis Anda
          </p>

          <div className="flex items-center justify-center gap-4 pt-4">
            <Label
              htmlFor="pricing-toggle"
              className={
                !isMonthly ? "text-foreground" : "text-muted-foreground"
              }>
              Proyek Sekali Bayar
            </Label>
            <Switch
              id="pricing-toggle"
              checked={isMonthly}
              onCheckedChange={setIsMonthly}
            />
            <Label
              htmlFor="pricing-toggle"
              className={
                isMonthly ? "text-foreground" : "text-muted-foreground"
              }>
              Hosting Bulanan
            </Label>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {currentPricing.map((tier, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                tier.highlighted
                  ? "border-primary bg-card scale-105 shadow-(--glow-primary)"
                  : "border-border bg-card/50 hover:border-primary/50"
              }`}>
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-primary mb-2">
                    {tier.price}
                  </div>
                  <p className="text-muted-foreground">{tier.description}</p>
                </div>

                <ul className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full"
                  variant={tier.highlighted ? "default" : "secondary"}
                  size="lg">
                  {tier.price === "Custom" ? "Hubungi Kami" : "Pilih Paket"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
