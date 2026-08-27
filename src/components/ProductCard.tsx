import { Star, Eye, ShoppingBag, Heart, MessageCircle } from "lucide-react";
import { Product } from "../data/products";

const SAREE_LOOKS = [
  { position: "28% 50%", filter: "sepia(0.08) saturate(1.05) hue-rotate(0deg)", scale: 1.13 },
  { position: "45% 42%", filter: "sepia(0.08) saturate(1.2) hue-rotate(210deg)", scale: 1.2 },
  { position: "65% 54%", filter: "sepia(0.18) saturate(1.45) hue-rotate(330deg)", scale: 1.17 },
  { position: "78% 48%", filter: "sepia(0.12) saturate(1.35) hue-rotate(190deg)", scale: 1.24 },
  { position: "34% 34%", filter: "sepia(0.03) saturate(0.82) brightness(1.08)", scale: 1.16 },
  { position: "52% 62%", filter: "sepia(0.08) saturate(1.35) hue-rotate(250deg)", scale: 1.22 },
  { position: "70% 38%", filter: "sepia(0.2) saturate(0.9) brightness(0.82)", scale: 1.2 },
  { position: "22% 58%", filter: "sepia(0.08) saturate(1.25) hue-rotate(95deg)", scale: 1.18 },
];

export function ProductCard({ product, onAdd, onView, onToggleWishlist, wishlist, whatsappLink }: any){
  const sareeLook = SAREE_LOOKS[(product.id - 1) % SAREE_LOOKS.length];
  return (
    <div className="group bg-white rounded-[18px] border border-[#E9DDD1] overflow-hidden hover:border-[#C9A86A]/50 hover:shadow-[0_18px_36px_-18px_rgba(74,14,14,0.22)] transition-all duration-300 flex flex-col">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img src="/assets/navbar-bg.png" alt={product.name} className="absolute inset-0 h-full w-full object-cover opacity-100 transition-transform duration-500" style={{ objectPosition: sareeLook.position, filter: sareeLook.filter, transform: `scale(${sareeLook.scale})` }} />
        <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-35 mix-blend-multiply`}/>
        <div className="absolute inset-0 bg-white/5 mix-blend-screen"/>
        <div className="absolute inset-0 opacity-40 mix-blend-multiply bg-[radial-gradient(circle_at_30%_20%,white_1px,transparent_1px)] bg-[length:18px_18px]"/>
        <div className="absolute inset-3 rounded-[14px] bg-white/42 backdrop-blur-[1px] border border-white/70 p-3 flex flex-col justify-between shadow-sm">
          <div className="flex justify-between items-start">
            <span className="px-2 py-1 rounded-full bg-[#FFFBF7] border border-[#E9DDD1] font-sans text-[9px] tracking-[0.12em] uppercase">{product.fabric}</span>
            <button onClick={()=>onToggleWishlist(product.id)} className="w-7 h-7 rounded-full bg-white border border-[#E9DDD1] flex items-center justify-center hover:border-[#C9A86A] transition"><Heart className={`w-3.5 h-3.5 ${wishlist.includes(product.id)?"fill-[#4A0E0E] text-[#4A0E0E]":"text-[#8B7355]"}`}/></button>
          </div>
          <div><div className="font-serif italic text-[16px] leading-tight text-[#2B1A0E] line-clamp-2">{product.texture}</div><div className="mt-2 flex items-center gap-1"><div className="w-2.5 h-2.5 rounded-full border border-white shadow" style={{background:product.colorHex}}/><span className="font-sans text-[10px] tracking-wide uppercase text-[#5A4633]">{product.color}</span></div></div>
        </div>
        {product.isNew && <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#4A0E0E] text-white font-sans text-[10px] tracking-[0.12em] uppercase">New</div>}
        <div className="absolute inset-x-3 bottom-3 flex gap-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button onClick={()=>onView(product)} className="flex-1 h-9 rounded-full bg-white/95 backdrop-blur border border-[#E9DDD1] font-sans text-[11px] tracking-[0.08em] uppercase flex items-center justify-center gap-1.5 hover:bg-white"><Eye className="w-3.5 h-3.5"/> Quick View</button>
        </div>
      </div>
      <div className="p-3.5 md:p-4 flex flex-col flex-1">
        <div className="flex items-center gap-1"><div className="flex">{Array.from({length:5}).map((_,i)=><Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating)? "fill-[#C9A86A] text-[#C9A86A]":"text-[#E9DDD1]"}`}/>)}</div><span className="font-sans text-[11px] text-[#8B7355]">({product.reviews})</span></div>
        <h3 className="font-serif text-[14px] md:text-[15px] leading-[1.25] mt-2 line-clamp-2 min-h-[36px]">{product.name}</h3>
        <div className="mt-2.5 flex items-baseline gap-2"><span className="font-serif text-[16px] font-semibold text-[#4A0E0E]">Rs {product.price.toLocaleString("en-IN")}</span>{product.originalPrice && <span className="font-sans text-[11px] line-through text-[#8B7355]">Rs {product.originalPrice.toLocaleString("en-IN")}</span>}</div>
        <div className="mt-3 flex gap-2"><button onClick={()=>onAdd(product)} className="flex-1 h-9 rounded-full bg-[#4A0E0E] text-white font-sans text-[11px] tracking-[0.08em] uppercase flex items-center justify-center gap-1 hover:bg-[#5A1A1A] transition"><ShoppingBag className="w-3.5 h-3.5"/> Add</button><a href={whatsappLink(product)} target="_blank" className="w-9 h-9 rounded-full bg-white border border-[#E9DDD1] flex items-center justify-center hover:border-[#C9A86A] transition"><MessageCircle className="w-4 h-4 text-[#8B7355]"/></a></div>
      </div>
    </div>
  )
}
