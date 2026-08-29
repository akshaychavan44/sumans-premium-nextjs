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
  image: string;
  isNew?: boolean;
};

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Noor Mauve Blue Organza Chikankari Saree",
    price: 8500,
    originalPrice: 10200,
    fabric: "Organza",
    category: "Sarees",
    color: "Mauve Blue",
    colorHex: "#8A9CC5",
    rating: 4.9,
    reviews: 32,
    gradient: "from-[#E8DDF0] via-[#D6CBE8] to-[#C1B5D9]",
    texture: "Crisp Organza • 2-Taar Jaali",
    blouse: "Running blouse with sleeves embroidery",
    description: "Soft mauve blue organza with shadow work and delicate jaali. Light as air, perfect for daytime festivities.",
    image: "/assets/products/prod-1.jpg"
  },
  {
    id: 2,
    name: "Pure Georgette Grey 2-Taar Saree",
    price: 12500,
    fabric: "Pure Georgette",
    category: "Sarees",
    color: "Grey",
    colorHex: "#9A9A9A",
    rating: 5.0,
    reviews: 48,
    gradient: "from-[#EFEFEF] via-[#E2DDD8] to-[#D5D0CB]",
    texture: "Pure Georgette • 2-Taar Super Fine",
    blouse: "Unstitched blouse with heavy chikan border",
    description: "Heirloom 2-Taar on 60gm pure georgette. Grey that catches light like smoke with intricate border work.",
    image: "/assets/products/prod-2.jpg",
    isNew: true
  },
  {
    id: 3,
    name: "Mal Chanderi Orange Suit Set",
    price: 5500,
    fabric: "Mal Chanderi",
    category: "Suits",
    color: "Orange",
    colorHex: "#E67E22",
    rating: 4.8,
    reviews: 21,
    gradient: "from-[#FFEDD5] via-[#FED7AA] to-[#FDBA74]",
    texture: "Mal Chanderi • Soft Cotton-Silk",
    blouse: "Kurta + Dupatta + Bottom included",
    description: "Sunlit orange mal chanderi, chikankari yoke with mukaish highlights. Breathable, festive elegance.",
    image: "/assets/products/prod-3.jpg"
  },
  {
    id: 4,
    name: "Royal Blue Georgette Rai Dana Saree",
    price: 6300,
    originalPrice: 7500,
    fabric: "Georgette",
    category: "Sarees",
    color: "Royal Blue",
    colorHex: "#2D4B8E",
    rating: 4.7,
    reviews: 18,
    gradient: "from-[#DBE6FF] via-[#A9BEE8] to-[#7A93C8]",
    texture: "Georgette • Rai Dana Stitch",
    blouse: "Contrast embroidered blouse piece",
    description: "Deep royal blue with dense rai dana dots and shadow motifs - our master artisan signature stitch.",
    image: "/assets/products/prod-4.jpg"
  },
  {
    id: 5,
    name: "White Crush Butterfly Embroidery Saree",
    price: 2099,
    fabric: "Crush Georgette",
    category: "Sarees",
    color: "White",
    colorHex: "#F7F2EE",
    rating: 4.6,
    reviews: 56,
    gradient: "from-[#FFFBF7] via-[#FFF5EF] to-[#FDEEE3]",
    texture: "Crush Georgette • Butterfly Motif",
    blouse: "Plain running blouse",
    description: "Everyday luxury - white on white crush georgette with butterfly accents, perfect for summer soirees.",
    image: "/assets/products/prod-5.jpg"
  },
  {
    id: 6,
    name: "Lavender Mal Chanderi Suit",
    price: 4999,
    fabric: "Mal Chanderi",
    category: "Suits",
    color: "Lavender",
    colorHex: "#B19CD9",
    rating: 4.8,
    reviews: 27,
    gradient: "from-[#EDE6F6] via-[#D8CBEF] to-[#C2B0E6]",
    texture: "Mal Chanderi • Shadow Work",
    blouse: "3-piece set - kurta, pant, dupatta",
    description: "Dusty lavender mal chanderi with front jaal and border detail, our Ghatkopar East best-seller.",
    image: "/assets/products/prod-6.jpg"
  },
  {
    id: 7,
    name: "Viscose Georgette Heavy Chikankari Saree",
    price: 22000,
    fabric: "Viscose Georgette",
    category: "Sarees",
    color: "Ivory",
    colorHex: "#E8DCCF",
    rating: 5.0,
    reviews: 12,
    gradient: "from-[#2B2B2B] via-[#4A3C32] to-[#8B7355]",
    texture: "Viscose Georgette • Heavy All-Over Work",
    blouse: "Heavy work blouse - full sleeves",
    description: "Bridal-grade viscose georgette with 45 days of painstaking handwork, gota patti and mukaish sparkles.",
    image: "/assets/products/prod-7.jpg",
    isNew: true
  },
  {
    id: 8,
    name: "Mint Green Soft Silk Lucknowi Saree",
    price: 7200,
    fabric: "Soft Silk",
    category: "Sarees",
    color: "Mint",
    colorHex: "#8BC4A3",
    rating: 4.9,
    reviews: 34,
    gradient: "from-[#DFF2E6] via-[#BFE3CD] to-[#9BD0B0]",
    texture: "Soft Silk • Light Chikankari",
    blouse: "Silk blouse with small bootis",
    description: "Mint soft silk that drapes like water. Subtle Lucknowi chikankari and silver zari for modern celebrations.",
    image: "/assets/products/prod-8.jpg"
  }
];

export interface InstagramReel {
  id: string;
  title: string;
  caption: string;
  thumbnail: string;
  views: string;
  likes: string;
  duration: string;
  category: string;
  audio: string;
  url: string;
}

export const INSTAGRAM_REELS: InstagramReel[] = [
  {
    id: "reel-1",
    title: "Pastel Organza 2-Taar Drape Test",
    caption: "Feeling the featherlight drape of our Noor Mauve Blue Organza Saree ✨ Pure Lucknow handloom shadow work in natural sunlight.",
    thumbnail: "/assets/reels/reel-1.jpg",
    views: "48.2K",
    likes: "3.4K",
    duration: "0:24",
    category: "Organza Sarees",
    audio: "Original Audio • @sumanslucknowi",
    url: "https://www.instagram.com/sumanslucknowi/reels/"
  },
  {
    id: "reel-2",
    title: "60gm Pure Georgette Smoke Grey",
    caption: "Heirloom 2-Taar super fine handwork on 60gm pure georgette. Look at that delicate jaali border work! 🪡 Direct from Lucknow artisans.",
    thumbnail: "/assets/reels/reel-2.jpg",
    views: "92.5K",
    likes: "7.1K",
    duration: "0:30",
    category: "Pure Georgette",
    audio: "Chikankari Beats • Classical Lucknow",
    url: "https://www.instagram.com/sumanslucknowi/reels/"
  },
  {
    id: "reel-3",
    title: "Festive Mal Chanderi Suit Sets",
    caption: "Sunlit orange & pastel suit unboxing! Comes with pure dupatta and embroidered neckline. Perfect for your upcoming festive season ✨",
    thumbnail: "/assets/reels/reel-3.jpg",
    views: "34.8K",
    likes: "2.8K",
    duration: "0:28",
    category: "Suit Sets",
    audio: "Trending Audio • Indian Festive",
    url: "https://www.instagram.com/sumanslucknowi/reels/"
  },
  {
    id: "reel-4",
    title: "Bridal Ivory Georgette Masterpiece",
    caption: "45 days of artisan devotion. Opulent ivory heavy Chikankari with genuine Mukaish and Gota Patti highlights 👑",
    thumbnail: "/assets/reels/reel-4.jpg",
    views: "125K",
    likes: "11.2K",
    duration: "0:45",
    category: "Bridal Edit",
    audio: "Sufi Instrumental • Chowk Heritage",
    url: "https://www.instagram.com/sumanslucknowi/reels/"
  },
  {
    id: "reel-5",
    title: "The White-on-White Luxury Edit",
    caption: "Nothing compares to the timeless elegance of white crush georgette with butterfly motifs. Lightweight summer luxury 🤍",
    thumbnail: "/assets/reels/reel-5.jpg",
    views: "61.3K",
    likes: "4.9K",
    duration: "0:20",
    category: "Summer Edit",
    audio: "Aesthetic Chill • Suman's Curation",
    url: "https://www.instagram.com/sumanslucknowi/reels/"
  },
  {
    id: "reel-6",
    title: "Store Walkthrough: Ghatkopar East",
    caption: "Come visit our studio in Ghatkopar East, Mumbai! Explore over 300+ handpicked authentic Chikankari sarees and suit sets 📍",
    thumbnail: "/assets/reels/reel-6.jpg",
    views: "78.4K",
    likes: "6.2K",
    duration: "0:35",
    category: "Store Tour",
    audio: "Mumbai to Lucknow • Suman's",
    url: "https://www.instagram.com/sumanslucknowi/reels/"
  }
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
