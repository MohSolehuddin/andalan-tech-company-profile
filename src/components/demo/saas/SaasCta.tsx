import { MessageCircle, ShieldCheck, Settings, Zap } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const SaasCta = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 text-white">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-linear-to-r from-blue-950 via-slate-950 to-slate-950 opacity-90" />

      <div className="container relative z-10 mx-auto max-w-4xl px-4 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-1.5 text-xs font-semibold text-blue-200">
          Mulai Transformasi Digital Sekarang
        </span>

        <h2 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
          Siap Membangun Sistem SaaS atau Aplikasi Kustom Anda?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
          Demo di atas adalah gambaran sistem siap rancang dari Andalan Tech.
          Kami bantu wujudkan platform digital yang pas untuk alur kerja dan model
          bisnis Anda.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={waLink(
              "Halo Andalan Tech, saya tertarik membuat aplikasi / SaaS seperti demo KelolaKu."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-sm transition-colors hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
            <MessageCircle className="h-5 w-5" />
            Konsultasi Proyek via WhatsApp
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 sm:text-sm">
          <span className="inline-flex items-center gap-1.5">
            <Zap className="h-4 w-4 text-blue-400" />
            Deploy & Onboarding Cepat
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-blue-400" />
            Source Code Milik Anda
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Settings className="h-4 w-4 text-blue-400" />
            Bebas Kustomisasi Fitur
          </span>
        </div>
      </div>
    </section>
  );
};

export default SaasCta;
