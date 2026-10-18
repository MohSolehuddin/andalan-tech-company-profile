"use client";

import { useState } from "react";
import { Banknote, Calculator, MessageCircle, Percent } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

interface CreditCar {
  id: string;
  name: string;
  price: number;
  /** Flat interest rate per year (percent). */
  rate: number;
}

const cars: CreditCar[] = [
  { id: "avanza", name: "Toyota Avanza 1.5 G CVT 2022", price: 218_000_000, rate: 7.5 },
  { id: "xenia", name: "Daihatsu Xenia R 1.3 2021", price: 176_000_000, rate: 7.5 },
  { id: "brio", name: "Honda Brio Satya E 2023", price: 168_000_000, rate: 7.2 },
  { id: "xpander", name: "Mitsubishi Xpander Ultimate 2022", price: 247_000_000, rate: 7.8 },
  { id: "ertiga", name: "Suzuki Ertiga GX 2021", price: 189_000_000, rate: 7.5 },
  { id: "zenix", name: "Toyota Innova Zenix Q Hybrid 2023", price: 415_000_000, rate: 7.9 },
];

const dpOptions = [20, 30, 40];
const tenorOptions = [1, 2, 3, 4, 5];

const rupiah = (value: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(Math.round(value));

export default function DealerMobilKredit() {
  const [carId, setCarId] = useState(cars[0].id);
  const [dpPercent, setDpPercent] = useState(30);
  const [tenor, setTenor] = useState(3);

  const car = cars.find((item) => item.id === carId) ?? cars[0];
  const dp = (car.price * dpPercent) / 100;
  const principal = car.price - dp;
  const totalInterest = principal * (car.rate / 100) * tenor;
  const monthly = (principal + totalInterest) / (tenor * 12);
  const leasing = ["BCA Finance", "Adira Finance", "Mandiri Utama Finance", "ACC"];

  return (
    <section id="kredit" className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
            Kredit &amp; Leasing
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            Simulasi DP &amp; Angsuran Bulanan
          </h2>
          <p className="mt-3 text-slate-600">
            Hitung estimasi angsuran kredit mobil Anda. Bekerja sama dengan leasing
            terpercaya dan proses persetujuan cepat.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          {/* Simulation controls */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 lg:col-span-3">
            <label className="text-sm font-semibold text-slate-900" htmlFor="pilih-unit">
              Pilih Unit Mobil
            </label>
            <select
              id="pilih-unit"
              value={carId}
              onChange={(event) => setCarId(event.target.value)}
              className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 focus:border-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2">
              {cars.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name} — {rupiah(item.price)}
                </option>
              ))}
            </select>

            <div className="mt-6">
              <p className="text-sm font-semibold text-slate-900">Uang Muka (DP)</p>
              <div className="mt-2 grid grid-cols-3 gap-2">
                {dpOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setDpPercent(option)}
                    className={`rounded-lg border px-3 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 ${
                      dpPercent === option
                        ? "border-red-600 bg-red-600 text-white"
                        : "border-slate-300 bg-white text-slate-700 hover:border-red-400"
                    }`}>
                    {option}%
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm font-semibold text-slate-900">Tenor</p>
              <div className="mt-2 grid grid-cols-5 gap-2">
                {tenorOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setTenor(option)}
                    className={`rounded-lg border px-2 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 ${
                      tenor === option
                        ? "border-red-600 bg-red-600 text-white"
                        : "border-slate-300 bg-white text-slate-700 hover:border-red-400"
                    }`}>
                    {option} th
                  </button>
                ))}
              </div>
            </div>

            <p className="mt-6 text-xs leading-relaxed text-slate-500">
              *Simulasi bersifat estimasi dengan bunga flat {car.rate}% per tahun. Angsuran
              final mengikuti hasil persetujuan leasing.
            </p>
          </div>

          {/* Result panel */}
          <div className="flex flex-col rounded-2xl bg-slate-900 p-6 text-white lg:col-span-2">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-red-300">
              <Calculator className="h-4 w-4" />
              Hasil Simulasi
            </span>
            <p className="mt-4 text-sm text-slate-400">{car.name}</p>

            <div className="mt-4 space-y-3 border-y border-white/10 py-4 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Harga OTR</span>
                <span className="font-semibold">{rupiah(car.price)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">DP {dpPercent}%</span>
                <span className="font-semibold text-red-300">{rupiah(dp)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">
                  Tenor {tenor} tahun ({tenor * 12}x)
                </span>
                <span className="font-semibold">{rupiah(principal + totalInterest)}</span>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-xs uppercase tracking-wider text-slate-400">
                Angsuran mulai
              </p>
              <p className="mt-1 text-3xl font-bold text-white">{rupiah(monthly)}</p>
              <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-slate-400">
                <Percent className="h-3.5 w-3.5 text-red-400" />
                Bunga flat {car.rate}%/tahun
              </p>
            </div>

            <a
              href={waLink(
                `Halo Auto Prima Dealer Mobil, saya ingin ajukan kredit unit ${car.name}. Simulasi: DP ${dpPercent}% (${rupiah(dp)}), tenor ${tenor} tahun, estimasi angsuran ${rupiah(monthly)}/bulan.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-3 pt-3 font-semibold text-white transition-colors hover:bg-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500">
              <MessageCircle className="h-4 w-4" />
              Ajukan Kredit via WhatsApp
            </a>
          </div>
        </div>

        <p className="mt-8 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-sm text-slate-500">
          <Banknote className="h-4 w-4 text-red-600" />
          Partner leasing: {leasing.join(" · ")}
        </p>
      </div>
    </section>
  );
}
