export type Product = {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  fabric: string;
  category: "Sarees" | "Suits" | "Kurtis";
  color: string;
  colorHex: string;
  rating: number;
  reviews: number;
  gradient: string;
  texture: string;
  blouse: string;
  description: string;
  isNew?: boolean;
};

export const PRODUCTS: Product[] = [
  { id: 1, name: "Noor Mauve Blue Organza Chikankari Saree", price: 8500, originalPrice: 10200, fabric: "Organza", category: "Sarees", color: "Mauve Blue", colorHex: "#8A9CC5", rating: 4.9, reviews: 32, gradient: "from-[#E8DDF0] via-[#D6CBE8] to-[#C1B5D9]", texture: "Crisp Organza \u2022 2-Taar Jaali", blouse: "Running blouse with sleeves embroidery", description: "Soft mauve blue organza with shadow work and delicate jaali. Light as air." },
  { id: 2, name: "Pure Georgette Grey 2-Taar Saree", price: 12500, fabric: "Pure Georgette", category: "Sarees", color: "Grey", colorHex: "#9A9A9A", rating: 5.0, reviews: 48, gradient: "from-[#EFEFEF] via-[#E2DDD8] to-[#D5D0CB]", texture: "Pure Georgette \u2022 2-Taar Super Fine", blouse: "Unstitched blouse with heavy chikan border", description: "Heirloom 2-Taar on 60gm pure georgette. Grey that catches light like smoke.", isNew: true },
  { id: 3, name: "Mal Chanderi Orange Suit Set", price: 5500, fabric: "Mal Chanderi", category: "Suits", color: "Orange", colorHex: "#E67E22", rating: 4.8, reviews: 21, gradient: "from-[#FFEDD5] via-[#FED7AA] to-[#FDBA74]", texture: "Mal Chanderi \u2022 Soft Cotton-Silk", blouse: "Kurta + Dupatta + Bottom included", description: "Sunlit orange mal chanderi, chikankari yoke with mukaish highlights." },
  { id: 4, name: "Royal Blue Georgette Rai Dana Saree", price: 6300, originalPrice: 7500, fabric: "Georgette", category: "Sarees", color: "Royal Blue", colorHex: "#2D4B8E", rating: 4.7, reviews: 18, gradient: "from-[#DBE6FF] via-[#A9BEE8] to-[#7A93C8]", texture: "Georgette \u2022 Rai Dana Stitch", blouse: "Contrast embroidered blouse piece", description: "Deep royal blue with dense rai dana dots - our master artisan signature." },
  { id: 5, name: "White Crush Butterfly Embroidery Saree", price: 2099, fabric: "Crush Georgette", category: "Sarees", color: "White", colorHex: "#F7F2EE", rating: 4.6, reviews: 56, gradient: "from-[#FFFBF7] via-[#FFF5EF] to-[#FDEEE3]", texture: "Crush Georgette \u2022 Butterfly Motif", blouse: "Plain running blouse", description: "Everyday luxury - white on white crush georgette, perfect for summer soirees." },
  { id: 6, name: "Lavender Mal Chanderi Suit", price: 4999, fabric: "Mal Chanderi", category: "Suits", color: "Lavender", colorHex: "#B19CD9", rating: 4.8, reviews: 27, gradient: "from-[#EDE6F6] via-[#D8CBEF] to-[#C2B0E6]", texture: "Mal Chanderi \u2022 Shadow Work", blouse: "3-piece set - kurta, pant, dupatta", description: "Dusty lavender mal chanderi with front jaal, our Ghatkopar best-seller." },
  { id: 7, name: "Viscose Georgette Heavy Chikankari Saree", price: 22000, fabric: "Viscose Georgette", category: "Sarees", color: "Ivory", colorHex: "#E8DCCF", rating: 5.0, reviews: 12, gradient: "from-[#2B2B2B] via-[#4A3C32] to-[#8B7355]", texture: "Viscose Georgette \u2022 Heavy All-Over Work", blouse: "Heavy work blouse - full sleeves", description: "Bridal-grade viscose georgette, 45 days of handwork. For heirlooms, not seasons.", isNew: true },
  { id: 8, name: "Mint Green Soft Silk Lucknowi Saree", price: 7200, fabric: "Soft Silk", category: "Sarees", color: "Mint", colorHex: "#8BC4A3", rating: 4.9, reviews: 34, gradient: "from-[#DFF2E6] via-[#BFE3CD] to-[#9BD0B0]", texture: "Soft Silk \u2022 Light Chikankari", blouse: "Silk blouse with small bootis", description: "Mint soft silk that drapes like water. Subtle chikankari for modern mehendi." },
];

export const FABRICS = ["Pure Georgette", "Mal Chanderi", "Organza", "Georgette", "Crush Georgette", "Viscose Georgette", "Soft Silk"];
export const COLORS = [
  { name: "Mauve Blue", hex: "#8A9CC5" },
  { name: "Grey", hex: "#9A9A9A" },
  { name: "Orange", hex: "#E67E22" },
  { name: "Royal Blue", hex: "#2D4B8E" },
  { name: "White", hex: "#FFFBF7" },
  { name: "Lavender", hex: "#B19CD9" },
  { name: "Ivory", hex: "#E8DCCF" },
  { name: "Mint", hex: "#8BC4A3" },
];
