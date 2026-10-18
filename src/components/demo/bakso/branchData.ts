export interface Branch {
  id: number;
  name: string;
  cityGroup: "Surabaya" | "Malang" | "Sidoarjo-Gresik" | "Jabodetabek";
  cityLabel: string;
  address: string;
  phone: string;
  facilities: string[];
  isFeatured: boolean;
}

export const CITIES = [
  { id: "all", label: "Semua Cabang (20)" },
  { id: "Surabaya", label: "Surabaya (6)" },
  { id: "Malang", label: "Malang (5)" },
  { id: "Sidoarjo-Gresik", label: "Sidoarjo-Gresik (4)" },
  { id: "Jabodetabek", label: "Jabodetabek (5)" },
] as const;

export const BRANCHES: Branch[] = [
  { id: 1, name: "Cabang Raya Manyar", cityGroup: "Surabaya", cityLabel: "Surabaya Timur", address: "Jl. Raya Manyar No. 42, Menur Pumpungan, Sukolilo, Surabaya", phone: "628123456701", facilities: ["Ruang Ber-AC", "Parkir Mobil Luas", "Musholla", "Wi-Fi Cepat"], isFeatured: true },
  { id: 2, name: "Cabang Rungkut Madya", cityGroup: "Surabaya", cityLabel: "Surabaya Timur", address: "Jl. Rungkut Madya No. 88, Gunung Anyar, Surabaya", phone: "628123456702", facilities: ["Ruang Ber-AC", "Parkir Luas", "Musholla"], isFeatured: false },
  { id: 3, name: "Cabang HR Muhammad", cityGroup: "Surabaya", cityLabel: "Surabaya Barat", address: "Jl. HR Muhammad No. 105, Pradah Kalikendal, Dukuh Pakis, Surabaya", phone: "628123456703", facilities: ["Ruang Ber-AC", "Parkir Luas", "Musholla", "Area Ramah Anak"], isFeatured: true },
  { id: 4, name: "Cabang Dharmahusada", cityGroup: "Surabaya", cityLabel: "Surabaya Timur", address: "Jl. Dharmahusada No. 120, Mojo, Gubeng, Surabaya", phone: "628123456704", facilities: ["Ruang Ber-AC", "Musholla", "Wi-Fi Cepat"], isFeatured: false },
  { id: 5, name: "Cabang Wiyung Utama", cityGroup: "Surabaya", cityLabel: "Surabaya Barat", address: "Jl. Raya Wiyung No. 76, Babatan, Wiyung, Surabaya", phone: "628123456705", facilities: ["Ruang Ber-AC", "Parkir Mobil", "Musholla"], isFeatured: false },
  { id: 6, name: "Cabang Kertajaya Indah", cityGroup: "Surabaya", cityLabel: "Surabaya Timur", address: "Jl. Kertajaya Indah Blok F No. 14, Manyar Sabrangan, Mulyorejo, Surabaya", phone: "628123456706", facilities: ["Ruang Ber-AC", "Parkir Mobil Luas", "Musholla", "VIP Room"], isFeatured: true },
  { id: 7, name: "Cabang Ijen Boulevard", cityGroup: "Malang", cityLabel: "Malang Kota", address: "Jl. Besar Ijen No. 54, Oro-oro Dowo, Klojen, Malang", phone: "628123456707", facilities: ["Ruang Heritage", "Area Taman Sejuk", "Musholla", "Parkir Luas"], isFeatured: true },
  { id: 8, name: "Cabang Soekarno-Hatta (Suhat)", cityGroup: "Malang", cityLabel: "Malang Kota", address: "Jl. Soekarno Hatta No. 34, Mojolangu, Lowokwaru, Malang", phone: "628123456708", facilities: ["Ruang Ber-AC", "Wi-Fi Cepat", "Musholla", "Outdoor Smoking"], isFeatured: true },
  { id: 9, name: "Cabang Sutoyo Sawojajar", cityGroup: "Malang", cityLabel: "Malang Kota", address: "Jl. Danau Toba Raya Blok E No. 12, Sawojajar, Kedungkandang, Malang", phone: "628123456709", facilities: ["Ruang Ber-AC", "Parkir Luas", "Musholla"], isFeatured: false },
  { id: 10, name: "Cabang Raya Batu Wisata", cityGroup: "Malang", cityLabel: "Kota Batu", address: "Jl. Diponegoro No. 82, Sisir, Kec. Batu, Kota Batu", phone: "628123456710", facilities: ["Udara Sejuk Alami", "Parkir Bus & Mobil", "Musholla Nyaman"], isFeatured: false },
  { id: 11, name: "Cabang Kawi Atas", cityGroup: "Malang", cityLabel: "Malang Kota", address: "Jl. Kawi No. 28, Kauman, Klojen, Malang", phone: "628123456711", facilities: ["Ruang Ber-AC", "Musholla", "Parkir Nyaman"], isFeatured: false },
  { id: 12, name: "Cabang Taman Pinang Indah", cityGroup: "Sidoarjo-Gresik", cityLabel: "Sidoarjo", address: "Ruko Taman Pinang Indah Blok B1 No. 5, Lemahputro, Sidoarjo", phone: "628123456712", facilities: ["Ruang Ber-AC", "Parkir Luas", "Musholla"], isFeatured: true },
  { id: 13, name: "Cabang Waru Juanda", cityGroup: "Sidoarjo-Gresik", cityLabel: "Sidoarjo Utara", address: "Jl. Raya Bandara Juanda No. 19, Sedati, Sidoarjo", phone: "628123456713", facilities: ["Ruang Ber-AC", "Akses Cepat Bandara", "Musholla"], isFeatured: false },
  { id: 14, name: "Cabang GKB Gresik", cityGroup: "Sidoarjo-Gresik", cityLabel: "Gresik", address: "Jl. Kalimantan No. 64, GKB, Manyar, Gresik", phone: "628123456714", facilities: ["Ruang Ber-AC", "Parkir Luas", "Musholla"], isFeatured: false },
  { id: 15, name: "Cabang Pondok Candra", cityGroup: "Sidoarjo-Gresik", cityLabel: "Sidoarjo", address: "Jl. Palem Prima Raya Blok AD No. 8, Wadungasri, Waru, Sidoarjo", phone: "628123456715", facilities: ["Ruang Ber-AC", "Parkir Luas", "Musholla"], isFeatured: false },
  { id: 16, name: "Cabang Tebet Raya", cityGroup: "Jabodetabek", cityLabel: "Jakarta Selatan", address: "Jl. Tebet Raya No. 49, Tebet Timur, Jakarta Selatan", phone: "628123456716", facilities: ["Ruang Ber-AC", "Parkir Mobil", "Musholla", "Wi-Fi Cepat"], isFeatured: true },
  { id: 17, name: "Cabang Rawamangun", cityGroup: "Jabodetabek", cityLabel: "Jakarta Timur", address: "Jl. Balai Pustaka Timur No. 18, Rawamangun, Pulo Gadung, Jakarta Timur", phone: "628123456717", facilities: ["Ruang Ber-AC", "Parkir Nyaman", "Musholla"], isFeatured: false },
  { id: 18, name: "Cabang Kelapa Gading", cityGroup: "Jabodetabek", cityLabel: "Jakarta Utara", address: "Jl. Boulevard Raya Blok TA2 No. 21, Kelapa Gading, Jakarta Utara", phone: "628123456718", facilities: ["Ruang Ber-AC", "Parkir Luas", "Musholla"], isFeatured: true },
  { id: 19, name: "Cabang BSD City Rawa Buntu", cityGroup: "Jabodetabek", cityLabel: "Tangerang Selatan", address: "Ruko Tol Boulevard Blok B No. 15, BSD City, Tangerang Selatan", phone: "628123456719", facilities: ["Ruang Ber-AC", "Parkir Luas", "Musholla", "Akses Stasiun Rawa Buntu"], isFeatured: false },
  { id: 20, name: "Cabang Harapan Indah Bekasi", cityGroup: "Jabodetabek", cityLabel: "Bekasi Kota", address: "Ruko Sentra Niaga Blok SN 2 No. 8, Kota Harapan Indah, Pejuang, Medan Satria, Bekasi", phone: "628123456720", facilities: ["Ruang Ber-AC", "Parkir Luas", "Musholla"], isFeatured: false },
];
