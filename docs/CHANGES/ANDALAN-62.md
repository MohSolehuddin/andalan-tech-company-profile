# Ringkasan Perubahan: ANDALAN-62

## Judul
Design Pass (Human-Grade Web Design) untuk 10 Demo Kategori "Properti, Travel & Otomotif"

## Deskripsi
Melakukan design pass berbasis skill `human-grade-web-design` untuk 10 demo dalam kategori "Properti, Travel & Otomotif" (`properti`, `travel`, `umroh`, `dealer-mobil`, `motor`, `rental-mobil`, `sewa-apartemen`, `hotel`, `kontraktor`, `interior`). Perubahan dilakukan seminimal mungkin tanpa mengubah struktur, fakta, slug, atau data:
1. **R1 (Hapus decorative blur blobs)**: Menghapus elemen `<div ... blur-2xl|blur-3xl ...>` murni hiasan/ambient background pada komponen hero (`PropertiHero`, `TravelHero`, `UmrohHero`, `DealerMobilHero`, `MotorHero`, `RentalHero`, `ApartemenHero`, `HotelHero`, `KontraktorHero`, `InteriorHero`).
2. **R2 (Netralkan colored drop-shadow)**: Mengganti drop shadow berwarna (seperti `shadow-orange-600/30`, `shadow-yellow-500/10`) menjadi drop shadow netral (`shadow-sm`, `shadow-md`).
3. **R3 (Koreksi border-radius berlebih)**: Mengganti kelas `rounded-3xl` menjadi `rounded-xl` pada kartu, badge, dan kontainer (`MotorHero`, `MotorFinancing`, `MotorContact`).
4. **R4 (Perbaiki kontras teks di latar terang)**: Memperbaiki teks abu-abu yang terlalu terang di latar belakang terang (`text-slate-400` / `text-stone-400` / `text-slate-500` -> `text-slate-600` / `text-stone-600`) pada komponen `PropertiListings`, `ApartemenListings`, `HotelRooms`, `InteriorPortfolio`, dan `InteriorPackages`, serta mempertahankan teks kontras di latar belakang gelap (`bg-slate-900`, `bg-stone-900`, dsb.).
5. **R5 (Harmonisasi aksen warna)**: Mengganti aksen warna saturasi/neon (purple/violet pada tema non-purple) menjadi aksen harmonis/netral (`UmrohPackages` badge purple diganti emerald, `ApartemenListings` gradien purple diganti indigo/slate).
6. **R6 (Fokus aksesibilitas interaktif)**: Menambahkan status keyboard focus-visible (`focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2`) pada seluruh tombol CTA dan tautan interaktif utama di 10 demo.
7. **R7 (Pembersihan buzzword copy)**: Menghilangkan klaim generik dan buzzword (seperti "terbaik", "tanpa batas", "solusi terbaik") dan menggantinya dengan pernyataan spesifik dan konkret (`PropertiHero`, `PropertiListings`, `TravelFeatures`, `DealerMobilTrade`, `ApartemenFacilities`, `KontraktorServices`).

## File yang Diubah
- `src/components/demo/properti/PropertiHero.tsx`
- `src/components/demo/properti/PropertiListings.tsx`
- `src/components/demo/properti/PropertiAgent.tsx`
- `src/components/demo/travel/TravelHero.tsx`
- `src/components/demo/travel/TravelFeatures.tsx`
- `src/components/demo/travel/TravelPackages.tsx`
- `src/components/demo/travel/TravelItinerary.tsx`
- `src/components/demo/travel/TravelContact.tsx`
- `src/components/demo/umroh/UmrohHero.tsx`
- `src/components/demo/umroh/UmrohPackages.tsx`
- `src/components/demo/umroh/UmrohSchedules.tsx`
- `src/components/demo/umroh/UmrohContact.tsx`
- `src/components/demo/dealer-mobil/DealerMobilHero.tsx`
- `src/components/demo/dealer-mobil/DealerMobilStock.tsx`
- `src/components/demo/dealer-mobil/DealerMobilKredit.tsx`
- `src/components/demo/dealer-mobil/DealerMobilTrade.tsx`
- `src/components/demo/dealer-mobil/DealerMobilTestDrive.tsx`
- `src/components/demo/motor/MotorHero.tsx`
- `src/components/demo/motor/MotorInventory.tsx`
- `src/components/demo/motor/MotorFinancing.tsx`
- `src/components/demo/motor/MotorServices.tsx`
- `src/components/demo/motor/MotorContact.tsx`
- `src/components/demo/rental-mobil/RentalHero.tsx`
- `src/components/demo/rental-mobil/RentalFleet.tsx`
- `src/components/demo/rental-mobil/RentalBooking.tsx`
- `src/components/demo/sewa-apartemen/ApartemenHero.tsx`
- `src/components/demo/sewa-apartemen/ApartemenFacilities.tsx`
- `src/components/demo/sewa-apartemen/ApartemenListings.tsx`
- `src/components/demo/sewa-apartemen/ApartemenTouringBooking.tsx`
- `src/components/demo/hotel/HotelHero.tsx`
- `src/components/demo/hotel/HotelRooms.tsx`
- `src/components/demo/hotel/HotelLocation.tsx`
- `src/components/demo/kontraktor/KontraktorHero.tsx`
- `src/components/demo/kontraktor/KontraktorServices.tsx`
- `src/components/demo/kontraktor/KontraktorProjects.tsx`
- `src/components/demo/kontraktor/KontraktorRAB.tsx`
- `src/components/demo/kontraktor/KontraktorContact.tsx`
- `src/components/demo/interior/InteriorHero.tsx`
- `src/components/demo/interior/InteriorPortfolio.tsx`
- `src/components/demo/interior/InteriorPackages.tsx`
- `src/components/demo/interior/InteriorConsult.tsx`

## Catatan
- File di luar lingkup tugas (halaman lain, registry, schema, tests, AGENTS.md, docs lain) tidak disentuh.
- Tidak ada penambahan dependensi baru atau gambar eksternal.
- Tidak ada git commit dan tidak ada push ke remote.

## Verifikasi
- `npm test` dijalankan di foreground dan dilaporkan persis:
  ```
  npm error Missing script: "test"
  npm error
  npm error To see a list of scripts, run:
  npm error   npm run
  npm error A complete log of this run can be found in: /home/msytc/.npm/_logs/2026-10-18T07_56_08_979Z-debug-0.log
  ```
  (repo tidak memiliki skrip test di package.json)
- `pnpm install --frozen-lockfile && pnpm build` dijalankan di foreground dan berhasil (exit code 0, static pages ter-prerender tanpa error).
