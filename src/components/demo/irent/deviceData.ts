export interface DeviceItem {
  id: string;
  name: string;
  series: "pro" | "standard";
  isConcertReady: boolean;
  tag: string;
  color: string;
  chip: string;
  camera: string;
  storage: string;
  batteryHealth: string;
  pricePerDay: number;
  priceWeekend: number;
  priceWeekly: number;
  badge: string;
  zoom: string;
}

export interface AddonItem {
  id: string;
  name: string;
  desc: string;
  pricePerDay: number;
  defaultChecked?: boolean;
}

export const DEVICES: DeviceItem[] = [
  {
    id: "ip16promax",
    name: "iPhone 16 Pro Max",
    series: "pro",
    isConcertReady: true,
    tag: "Flagship Terkini",
    color: "Desert & Natural Titanium",
    chip: "Apple A18 Pro Chip (3nm)",
    camera: "48MP Fusion + 5x Telephoto Optical",
    storage: "256GB / 512GB",
    batteryHealth: "99-100%",
    pricePerDay: 350000,
    priceWeekend: 990000,
    priceWeekly: 1850000,
    badge: "Ready Hari Ini",
    zoom: "5x Optical Zoom",
  },
  {
    id: "ip16pro",
    name: "iPhone 16 Pro",
    series: "pro",
    isConcertReady: true,
    tag: "Paling Populer",
    color: "Natural & Black Titanium",
    chip: "Apple A18 Pro Chip",
    camera: "48MP Main + 5x Optical Telephoto",
    storage: "128GB / 256GB",
    batteryHealth: "98-100%",
    pricePerDay: 300000,
    priceWeekend: 850000,
    priceWeekly: 1600000,
    badge: "Ready Hari Ini",
    zoom: "5x Optical Zoom",
  },
  {
    id: "ip15promax",
    name: "iPhone 15 Pro Max",
    series: "pro",
    isConcertReady: true,
    tag: "Best Fancam",
    color: "Natural Titanium & Blue",
    chip: "Apple A17 Pro Chip",
    camera: "48MP Triple Lens + 5x Tetraprism",
    storage: "256GB / 512GB",
    batteryHealth: "96-99%",
    pricePerDay: 260000,
    priceWeekend: 750000,
    priceWeekly: 1400000,
    badge: "Ready Hari Ini",
    zoom: "5x Optical Zoom",
  },
  {
    id: "ip15pro",
    name: "iPhone 15 Pro",
    series: "pro",
    isConcertReady: false,
    tag: "Kompak & Ringan",
    color: "White Titanium",
    chip: "Apple A17 Pro Chip",
    camera: "48MP Triple Lens + 3x Optical",
    storage: "128GB / 256GB",
    batteryHealth: "95-98%",
    pricePerDay: 220000,
    priceWeekend: 620000,
    priceWeekly: 1200000,
    badge: "Sisa 1 Unit",
    zoom: "3x Optical Zoom",
  },
  {
    id: "ip15",
    name: "iPhone 15 Reguler",
    series: "standard",
    isConcertReady: false,
    tag: "Best Value",
    color: "Pink & Black Pastel",
    chip: "Apple A16 Bionic + Dynamic Island",
    camera: "48MP Main + 2x Telephoto Sensor-crop",
    storage: "128GB / 256GB",
    batteryHealth: "95-98%",
    pricePerDay: 160000,
    priceWeekend: 450000,
    priceWeekly: 890000,
    badge: "Ready Hari Ini",
    zoom: "2x Sensor Crop",
  },
  {
    id: "ip14pro",
    name: "iPhone 14 Pro",
    series: "pro",
    isConcertReady: false,
    tag: "Favorit Creator",
    color: "Deep Purple & Space Black",
    chip: "Apple A16 Bionic",
    camera: "48MP Pro System + 3x Telephoto",
    storage: "128GB / 256GB",
    batteryHealth: "92-96%",
    pricePerDay: 180000,
    priceWeekend: 510000,
    priceWeekly: 990000,
    badge: "Ready Hari Ini",
    zoom: "3x Optical Zoom",
  },
  {
    id: "ip13",
    name: "iPhone 13 Reguler",
    series: "standard",
    isConcertReady: false,
    tag: "Paling Hemat",
    color: "Midnight & Starlight",
    chip: "Apple A15 Bionic",
    camera: "12MP Dual Lens + Cinematic Mode",
    storage: "128GB",
    batteryHealth: "90-95%",
    pricePerDay: 120000,
    priceWeekend: 340000,
    priceWeekly: 680000,
    badge: "Ready Hari Ini",
    zoom: "Ultra-wide & Wide",
  },
];

export const ADDONS: AddonItem[] = [
  {
    id: "gimbal",
    name: "DJI Osmo Mobile 6 Gimbal Stabilizer",
    desc: "Video stabil bebas guncangan untuk konser & vlog jalanan",
    pricePerDay: 45000,
  },
  {
    id: "powerbank",
    name: "Anker MagSafe Wireless Power Bank 10.000 mAh",
    desc: "Menempel magnetik di bodi, daya tahan seharian penuh",
    pricePerDay: 20000,
    defaultChecked: true,
  },
  {
    id: "mic",
    name: "Wireless Clip-On Mic (Hollyland / Rode)",
    desc: "Audio vokal wawancara & event jernih bebas noise keramaian",
    pricePerDay: 50000,
  },
  {
    id: "insurance",
    name: "Perlindungan Kerusakan Ringan & Baret Layar",
    desc: "Bebas ganti rugi goresan halus & lecet pemakaian normal",
    pricePerDay: 15000,
    defaultChecked: true,
  },
];

export const DURATION_OPTIONS = [
  { days: 1, label: "1 Hari", note: "Tarif Standar", discount: 0 },
  { days: 2, label: "2 Hari", note: "Diskon 5%", discount: 5 },
  { days: 3, label: "3 Hari (Weekend)", note: "Hemat 15%", discount: 15 },
  { days: 7, label: "7 Hari (Mingguan)", note: "Hemat 25%", discount: 25 },
  { days: 14, label: "14 Hari", note: "Hemat 35%", discount: 35 },
  { days: 30, label: "30 Hari (Bulanan)", note: "Super Hemat 45%", discount: 45 },
];

export const formatRp = (num: number): string => {
  return "Rp " + num.toLocaleString("id-ID");
};
