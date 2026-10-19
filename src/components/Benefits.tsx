import { benefits } from "@/lib/constants/benefits";

const Benefits = () => {
  return (
    <section className="py-20 px-4 bg-muted/40">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Kenapa Memilih{" "}
            <span className="text-primary">
              Andalan Tech
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tiga pilar kecepatan yang membuat website Anda unggul
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative p-8 rounded-xl border bg-card hover:border-primary/40 transition-colors">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>

                <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-[#A8530F] text-sm font-semibold">
                  {benefit.metric}
                </div>

                <h3 className="text-2xl font-bold">{benefit.title}</h3>

                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
