import { X, Star, ShoppingBag, MessageCircle, Sparkles, Check } from "lucide-react";

export function QuickView({ product, onClose, onAdd, whatsappLink }: any){
  if(!product) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div onClick={onClose} className="absolute inset-0 bg-[#2B1A0E]/50 backdrop-blur-sm"/>
      <div className="relative w-full max-w-[920px] max-h-[92vh] overflow-hidden bg-[#FFFBF7] rounded-[24px] md:rounded-[32px] border border-[#E9DDD1] shadow-[0_30px_80px_rgba(0,0,0,0.25)] flex flex-col md:flex-row z-10">
        <button 
          onClick={onClose} 
          aria-label="Close"
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 backdrop-blur border border-[#E9DDD1] flex items-center justify-center shadow hover:bg-white transition"
        >
          <X className="w-4 h-4"/>
        </button>

        {/* Product Image Column */}
        <div className="md:w-[48%] relative bg-[#2B1A0E] aspect-[4/5] md:aspect-auto md:min-h-[540px] overflow-hidden">
          <img 
            src={product.image || "/assets/products/prod-1.jpg"} 
            alt={product.name} 
            className="absolute inset-0 h-full w-full object-cover object-center" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none"/>

          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-white/60 font-sans text-[10px] tracking-wide uppercase font-semibold text-[#4A0E0E] shadow">
              {product.fabric}
            </span>
          </div>

          <div className="absolute bottom-4 inset-x-4 z-10 bg-black/60 backdrop-blur-md rounded-[16px] p-3.5 border border-white/20 text-white">
            <div className="flex items-center justify-between text-[11px] font-sans">
              <span className="text-white/80">Texture / Work</span>
              <span className="text-[#C9A86A] font-medium">{product.texture}</span>
            </div>
            <div className="flex items-center justify-between text-[11px] font-sans mt-1.5 pt-1.5 border-t border-white/15">
              <span className="text-white/80">Blouse Piece</span>
              <span className="text-white font-medium truncate max-w-[65%]">{product.blouse}</span>
            </div>
          </div>
        </div>

        {/* Product Info Column */}
        <div className="flex-1 p-6 md:p-8 overflow-y-auto flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array.from({length:5}).map((_,i)=>(
                  <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating)? "fill-[#C9A86A] text-[#C9A86A]":"text-[#E9DDD1]"}`}/>
                ))}
              </div>
              <span className="font-sans text-[12px] text-[#8B7355] font-medium">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <h3 className="font-serif text-[24px] md:text-[28px] leading-[1.15] mt-3 text-[#2B1A0E]">
              {product.name}
            </h3>

            <div className="mt-3 flex items-baseline gap-3">
              <span className="font-serif text-[24px] font-bold text-[#4A0E0E]">
                Rs {product.price.toLocaleString("en-IN")}
              </span>
              {product.originalPrice && (
                <span className="font-sans text-[14px] line-through text-[#8B7355]">
                  Rs {product.originalPrice.toLocaleString("en-IN")}
                </span>
              )}
            </div>

            <p className="font-sans text-[13.5px] leading-[1.7] text-[#5A4633] mt-4">
              {product.description}
            </p>

            <div className="mt-6 grid gap-2.5">
              {[
                { title: "Fabric & Technique", text: `${product.fabric} • ${product.texture} • 60gm pure base` },
                { title: "2-Taar Secret Stitch", text: "Two delicate threads create shadow work. Front shows tender jaali, back holds the secret stitch. Takes 2x longer than single-taar." },
                { title: "Care Instructions", text: "Dry clean only. Store folded in muslin. Steam on low." }
              ].map(b=>(
                <div key={b.title} className="bg-white border border-[#E9DDD1] rounded-[14px] p-3.5 shadow-xs">
                  <div className="font-sans text-[10.5px] tracking-[0.15em] uppercase text-[#8B7355] font-semibold">{b.title}</div>
                  <div className="font-sans text-[12px] leading-[1.6] text-[#2B1A0E] mt-1">{b.text}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#E9DDD1]">
            <div className="flex gap-3">
              <button 
                onClick={()=>{onAdd(product); onClose();}} 
                className="flex-1 h-12 rounded-full bg-[#4A0E0E] text-white font-sans text-[12px] tracking-[0.08em] uppercase font-medium flex items-center justify-center gap-2 hover:bg-[#5A1A1A] transition shadow-md"
              >
                <ShoppingBag className="w-4 h-4"/> Add to Bag • Rs {product.price.toLocaleString("en-IN")}
              </button>
              <a 
                href={whatsappLink(product)} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white border border-[#E9DDD1] flex items-center justify-center hover:border-[#25D366] transition shadow-sm"
                title="Inquire on WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366]"/>
              </a>
            </div>
            <div className="mt-3 font-sans text-[11px] text-[#8B7355] text-center">
              Direct consultation via WhatsApp: +91 97689 56956 • Mumbai store in Ghatkopar East
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
