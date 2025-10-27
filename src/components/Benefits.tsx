import { benefits } from "@/lib/utils/benefits";

const Benefits = () => {
  return (
    <section className="py-20 px-4 bg-card/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Kenapa Memilih{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
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
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-(--glow-primary)">
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative space-y-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>

                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
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
