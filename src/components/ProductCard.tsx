"use client";

import { useState } from "react";
import { Star, Eye, ShoppingBag, Heart, MessageCircle, Check, Sparkles } from "lucide-react";
import { Product } from "../data/products";

export function ProductCard({ product, onAdd, onView, onToggleWishlist, wishlist, whatsappLink }: any){
  const [added, setAdded] = useState(false);
  const isWishlisted = wishlist.includes(product.id);

  const handleAdd = () => {
    onAdd(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  };

  return (
    <div className="group bg-white rounded-[22px] border border-[#E9DDD1] overflow-hidden hover:border-[#C9A86A] hover:shadow-[0_22px_50px_-15px_rgba(74,14,14,0.2)] transition-all duration-400 flex flex-col relative">
      
      {/* Product Image Stage */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[#FAF6F0]">
        <img 
          src={product.image || "/assets/products/prod-1.jpg"} 
          alt={product.name} 
          className="absolute inset-0 h-full w-full object-cover object-center group-hover:scale-106 transition-transform duration-600 ease-out" 
        />
        
        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"/>

        {/* Top Badges */}
        <div className="absolute top-3.5 inset-x-3.5 flex justify-between items-start z-10">
          <div className="flex flex-col gap-1.5 items-start">
            <span className="px-2.5 py-1 rounded-full bg-white/92 backdrop-blur-md border border-[#E9DDD1] font-sans text-[9.5px] tracking-[0.14em] uppercase font-semibold text-[#4A0E0E] shadow-sm">
              {product.fabric}
            </span>
            {product.isNew && (
              <span className="px-2.5 py-0.5 rounded-full bg-[#4A0E0E] text-white font-sans text-[9px] tracking-[0.12em] uppercase font-bold shadow-md animate-pulse">
                New Arrival
              </span>
            )}
          </div>

          <button 
            onClick={()=>onToggleWishlist(product.id)} 
            aria-label="Wishlist"
            className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md border border-[#E9DDD1] flex items-center justify-center hover:bg-white hover:scale-110 hover:border-[#C9A86A] transition-all shadow-sm active:scale-90"
          >
            <Heart className={`w-4 h-4 transition-colors ${isWishlisted ? "fill-[#4A0E0E] text-[#4A0E0E]" : "text-[#8B7355]"}`}/>
          </button>
        </div>

        {/* Texture & Color Badge (Bottom Inside Image) */}
        <div className="absolute bottom-3.5 inset-x-3.5 flex items-center justify-between pointer-events-none z-10">
          <span className="px-2.5 py-1 rounded-full bg-black/45 backdrop-blur-md text-white font-sans text-[10px] tracking-wide border border-white/20 truncate max-w-[70%] font-medium">
            {product.texture}
          </span>
          <span 
            className="w-4 h-4 rounded-full border-2 border-white shadow-md transition-transform group-hover:scale-110" 
            style={{ background: product.colorHex }} 
            title={product.color}
          />
        </div>

        {/* Quick View Button Hover Overlay */}
        <div className="absolute inset-x-3.5 bottom-3.5 flex gap-2 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20">
          <button 
            onClick={()=>onView(product)} 
            className="flex-1 h-10 rounded-full bg-white/95 backdrop-blur-md border border-[#E9DDD1] font-sans text-[11px] tracking-[0.1em] uppercase font-bold flex items-center justify-center gap-1.5 hover:bg-white shadow-lg text-[#2B1A0E] active:scale-95 transition-all"
          >
            <Eye className="w-3.5 h-3.5 text-[#8B7355]"/>
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Product Information */}
      <div className="p-4 md:p-5 flex flex-col flex-1 justify-between bg-white">
        <div>
          {/* Rating */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="flex">
                {Array.from({length:5}).map((_,i)=>(
                  <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating)? "fill-[#C9A86A] text-[#C9A86A]":"text-[#E9DDD1]"}`}/>
                ))}
              </div>
              <span className="font-sans text-[11.5px] text-[#8B7355] font-medium">
                ({product.reviews})
              </span>
            </div>
            <span className="text-[10px] font-sans uppercase tracking-widest text-[#8B7355]">
              Lucknowi Craft
            </span>
          </div>

          {/* Title */}
          <h3 className="font-serif text-[15.5px] leading-[1.3] text-[#2B1A0E] mt-2.5 line-clamp-2 min-h-[40px] font-medium group-hover:text-[#4A0E0E] transition-colors">
            {product.name}
          </h3>

          {/* Price */}
          <div className="mt-2.5 flex items-baseline gap-2.5">
            <span className="font-serif text-[18px] font-bold text-[#4A0E0E]">
              Rs {product.price.toLocaleString("en-IN")}
            </span>
            {product.originalPrice && (
              <span className="font-sans text-[12px] line-through text-[#8B7355]">
                Rs {product.originalPrice.toLocaleString("en-IN")}
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex gap-2 pt-2 border-t border-[#E9DDD1]/60">
          <button 
            onClick={handleAdd} 
            className={`flex-1 h-10 rounded-full font-sans text-[11px] tracking-[0.08em] uppercase font-semibold flex items-center justify-center gap-1.5 transition-all duration-300 shadow-sm active:scale-95 ${
              added 
                ? "bg-[#25D366] text-white" 
                : "bg-[#4A0E0E] text-white hover:bg-[#5A1A1A] hover:shadow-md"
            }`}
          >
            {added ? (
              <>
                <Check className="w-4 h-4"/>
                <span>Added to Bag</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5"/>
                <span>Add to Bag</span>
              </>
            )}
          </button>

          <a 
            href={whatsappLink(product)} 
            target="_blank" 
            rel="noopener noreferrer"
            title="Order via WhatsApp"
            className="w-10 h-10 rounded-full bg-white border border-[#E9DDD1] flex items-center justify-center hover:border-[#25D366] hover:bg-[#25D366]/5 transition-all shadow-sm group/wa active:scale-90"
          >
            <MessageCircle className="w-4 h-4 text-[#8B7355] group-hover/wa:text-[#25D366] transition-colors"/>
          </a>
        </div>
      </div>
    </div>
  );
}
