"use client";

import { X, Plus, Minus, MessageCircle, Truck, ShieldCheck, Sparkles, ShoppingBag, ArrowRight } from "lucide-react";

export function CartDrawer({ cart, open, onClose, onQty, onRemove, cartTotal }: any){
  if(!open) return null;

  const freeShippingThreshold = 5000;
  const progress = Math.min(100, (cartTotal / freeShippingThreshold) * 100);
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - cartTotal);

  return (
    <div className="fixed inset-0 z-50 flex justify-end animate-fadeIn">
      <div 
        onClick={onClose} 
        className="absolute inset-0 bg-[#2B1A0E]/40 backdrop-blur-sm transition-opacity duration-300"
      />
      
      <div className="relative w-full max-w-[440px] bg-[#FFFBF7] h-full shadow-[-25px_0_90px_rgba(0,0,0,0.25)] flex flex-col border-l border-[#E9DDD1] z-10 animate-slideLeft">
        
        {/* Header */}
        <div className="p-5 md:p-6 border-b border-[#E9DDD1] bg-white flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif text-[22px] font-semibold text-[#2B1A0E]">Your Bag</span>
              <span className="px-2 py-0.5 rounded-full bg-[#4A0E0E]/10 font-sans text-[11px] font-bold text-[#4A0E0E]">
                {cart.reduce((a:number,b:any)=>a+b.qty,0)}
              </span>
            </div>
            <div className="font-sans text-[12px] text-[#8B7355] mt-0.5">
              Handmade Lucknowi Weaves • Mumbai Curation
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="w-9 h-9 rounded-full bg-[#FFFBF7] border border-[#E9DDD1] flex items-center justify-center hover:bg-white transition-colors"
          >
            <X className="w-4 h-4"/>
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="bg-[#FFF5EB] px-5 py-3 border-b border-[#E9DDD1]">
          <div className="flex items-center justify-between text-[11.5px] font-sans">
            <span className="font-medium text-[#4A0E0E] flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5 text-[#C9A86A]" />
              {remainingForFreeShipping === 0 ? (
                <span className="text-[#25D366] font-semibold">You unlocked FREE Worldwide Express Delivery! 🎉</span>
              ) : (
                <span>Add <strong>Rs {remainingForFreeShipping.toLocaleString("en-IN")}</strong> more for FREE shipping</span>
              )}
            </span>
            <span className="font-bold text-[#8B7355]">{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-1.5 bg-[#E9DDD1] rounded-full mt-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#C9A86A] to-[#4A0E0E] transition-all duration-500 rounded-full" 
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-3.5">
          {cart.length === 0 ? (
            <div className="py-24 text-center">
              <div className="w-16 h-16 rounded-full bg-[#FFF5EB] border border-[#E9DDD1] flex items-center justify-center mx-auto text-[#C9A86A] mb-4">
                <ShoppingBag className="w-7 h-7" />
              </div>
              <div className="font-serif text-[20px] text-[#2B1A0E]">Your bag is empty</div>
              <div className="font-sans text-[13px] text-[#8B7355] mt-2 max-w-[240px] mx-auto">
                Explore our 2-Taar pure georgette sarees and suit sets to begin.
              </div>
              <button
                onClick={onClose}
                className="mt-6 h-10 px-6 rounded-full bg-[#4A0E0E] text-white font-sans text-[11.5px] uppercase tracking-wider font-semibold"
              >
                Browse Collection
              </button>
            </div>
          ) : (
            cart.map((c: any) => (
              <div 
                key={c.product.id} 
                className="bg-white border border-[#E9DDD1] rounded-[18px] p-3.5 flex gap-3.5 shadow-xs hover:border-[#C9A86A]/50 transition-colors"
              >
                {/* Product Thumbnail */}
                <div className="w-20 h-24 rounded-[12px] bg-[#FAF6F0] shrink-0 relative overflow-hidden border border-[#E9DDD1]">
                  <img 
                    src={c.product.image || "/assets/products/prod-1.jpg"} 
                    alt={c.product.name} 
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between min-w-0">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <div className="font-serif text-[14px] leading-snug font-medium text-[#2B1A0E] line-clamp-2">
                        {c.product.name}
                      </div>
                      <button 
                        onClick={() => onRemove(c.product.id)} 
                        className="text-[#8B7355] hover:text-[#4A0E0E] p-0.5"
                        title="Remove item"
                      >
                        <X className="w-3.5 h-3.5"/>
                      </button>
                    </div>
                    <div className="font-sans text-[11px] text-[#8B7355] mt-1">
                      {c.product.fabric} • {c.product.color}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#E9DDD1]/60">
                    <div className="flex items-center gap-2 bg-[#FFFBF7] border border-[#E9DDD1] rounded-full px-2 py-0.5">
                      <button 
                        onClick={() => onQty(c.product.id, -1)} 
                        className="w-5 h-5 flex items-center justify-center hover:text-[#4A0E0E]"
                      >
                        <Minus className="w-3 h-3"/>
                      </button>
                      <span className="font-sans text-[12px] w-4 text-center font-semibold">
                        {c.qty}
                      </span>
                      <button 
                        onClick={() => onQty(c.product.id, 1)} 
                        className="w-5 h-5 flex items-center justify-center hover:text-[#4A0E0E]"
                      >
                        <Plus className="w-3 h-3"/>
                      </button>
                    </div>

                    <div className="font-serif font-bold text-[15px] text-[#4A0E0E]">
                      Rs {(c.product.price * c.qty).toLocaleString("en-IN")}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Checkout Summary */}
        {cart.length > 0 && (
          <div className="p-5 md:p-6 border-t border-[#E9DDD1] bg-white shadow-lg space-y-4">
            <div className="space-y-2 font-sans text-[13px]">
              <div className="flex justify-between">
                <span className="text-[#8B7355]">Subtotal</span>
                <span className="font-semibold text-[#2B1A0E]">Rs {cartTotal.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#8B7355]">Worldwide Shipping</span>
                <span className="text-[#25D366] font-medium text-[12px]">
                  {remainingForFreeShipping === 0 ? "FREE" : "Calculated on WhatsApp"}
                </span>
              </div>
              <div className="h-px bg-[#E9DDD1] my-2"/>
              <div className="flex justify-between font-serif text-[18px] font-bold">
                <span>Estimated Total</span>
                <span className="text-[#4A0E0E]">Rs {cartTotal.toLocaleString("en-IN")}</span>
              </div>
            </div>

            <a 
              href={`https://wa.me/919768956956?text=${encodeURIComponent(`Hi Suman's Lucknowi! I would like to order the following weaves:\n\n${cart.map((c:any)=>`• ${c.product.name} (Qty: ${c.qty}) - Rs ${(c.product.price*c.qty).toLocaleString("en-IN")}`).join("\n")}\n\nTotal: Rs ${cartTotal.toLocaleString("en-IN")}\n\nPlease confirm availability and dispatch timeline.`)}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="h-12 w-full rounded-full bg-[#4A0E0E] text-white font-sans text-[13px] tracking-[0.08em] uppercase font-semibold flex items-center justify-center gap-2 hover:bg-[#5A1A1A] hover:shadow-lg transition-all shadow-md active:scale-98"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]"/>
              <span>Complete Order on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <div className="flex items-center justify-center gap-4 font-sans text-[11px] text-[#8B7355] pt-1">
              <span className="flex items-center gap-1">
                <Truck className="w-3.5 h-3.5 text-[#C9A86A]"/> Worldwide Express
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C9A86A]"/> Video Inspection
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
