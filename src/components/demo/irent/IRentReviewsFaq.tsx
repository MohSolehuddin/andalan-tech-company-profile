"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle, Star } from "lucide-react";
import { FAQS, REVIEWS } from "./contentData";
import { waLink } from "@/lib/demo/wa";

const IRentReviewsFaq = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-slate-900 text-slate-100">
      {/* Testimoni */}
      <section className="py-16 max-w-6xl mx-auto px-4 border-b border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">
              Ulasan Nyata Pelanggan
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Dipercaya Lebih dari 3.800+ Penyewa
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-base font-bold text-white">4.9 / 5.0</span>
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((r, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex text-amber-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">“{r.comment}”</p>
              </div>
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-white">{r.name}</p>
                  <p className="text-[11px] text-slate-400">{r.loc}</p>
                </div>
                <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Accordion */}
      <section id="faq" className="py-16 max-w-3xl mx-auto px-4 scroll-mt-14">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">
            FAQ & Informasi
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Pertanyaan yang Sering Diajukan
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className="rounded-xl bg-slate-950 border border-slate-800 overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 text-left text-xs sm:text-sm font-bold text-white flex items-center justify-between focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 text-xs text-slate-300 leading-relaxed border-t border-slate-800/80 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-16 bg-slate-950 border-t border-slate-800 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400">
            Slot Unit Terbatas per Tanggal Event
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Abadikan Momen Spesial Anda Bersama iRent Studio.
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
            Konsultasikan rencana konser atau liburan Anda. Admin siap membantu pemilihan unit iPhone terbaik dan diskon paket sewa.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={waLink("Halo Admin iRent Studio, saya ingin konsultasi dan pesan sewa unit iPhone.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-md focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
            >
              <MessageCircle className="w-4 h-4" />
              Chat WhatsApp Admin
            </a>
            <a
              href="#katalog"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-xs border border-slate-700 transition-colors focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:outline-none"
            >
              Pilih Seri iPhone
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-10 text-slate-400 text-xs">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="font-bold text-white text-sm">iRent Studio — Official iPhone Rental</p>
            <p className="text-[11px] text-slate-400 mt-1">
              Layanan sewa resmi di Jabodetabek & Surabaya • Respon cepat 08.00–22.00 WIB
            </p>
          </div>
          <div className="text-[11px] text-slate-400">
            <p>© 2026 iRent Studio Indonesia. All rights reserved.</p>
            <p>Apple & iPhone are trademarks of Apple Inc.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IRentReviewsFaq;
