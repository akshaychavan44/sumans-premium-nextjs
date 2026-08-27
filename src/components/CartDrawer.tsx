import { X, Plus, Minus, MessageCircle, Truck, ShieldCheck } from "lucide-react";
export function CartDrawer({ cart, open, onClose, onQty, onRemove, cartTotal }: any){
  if(!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div onClick={onClose} className="absolute inset-0 bg-[#2B1A0E]/20 backdrop-blur-sm"/>
      <div className="relative w-full max-w-[420px] bg-[#FFFBF7] h-full shadow-[-20px_0_80px_rgba(0,0,0,0.15)] flex flex-col border-l border-[#E9DDD1]">
        <div className="p-6 border-b border-[#E9DDD1] flex items-center justify-between">
          <div><div className="font-serif text-[20px]">Your Bag</div><div className="font-sans text-[12px] text-[#8B7355]">{cart.length} {cart.length===1?"item":"items"} • Worldwide shipping</div></div>
          <button onClick={onClose} className="w-9 h-9 rounded-full bg-white border border-[#E9DDD1] flex items-center justify-center"><X className="w-4 h-4"/></button>
        </div>
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cart.length===0? <div className="py-20 text-center"><div className="font-serif text-[18px]">Your bag is empty</div><div className="font-sans text-[13px] text-[#8B7355] mt-2">Add a Lucknowi weave to begin.</div></div> : cart.map((c:any)=>(
            <div key={c.product.id} className="bg-white border border-[#E9DDD1] rounded-[16px] p-3 flex gap-3">
              <div className={`w-20 h-24 rounded-[12px] bg-gradient-to-br ${c.product.gradient} shrink-0 relative overflow-hidden`}><img src="/assets/navbar-bg.png" alt={c.product.name} className="absolute inset-0 h-full w-full object-cover opacity-95 scale-125"/><div className={`absolute inset-0 bg-gradient-to-br ${c.product.gradient} opacity-35 mix-blend-multiply`}/></div>
              <div className="flex-1"><div className="font-serif text-[13px] leading-tight line-clamp-2">{c.product.name}</div><div className="font-sans text-[11px] text-[#8B7355] mt-1">{c.product.fabric} • {c.product.color}</div><div className="flex items-center justify-between mt-3"><div className="flex items-center gap-2 bg-[#FFFBF7] border border-[#E9DDD1] rounded-full px-2 py-1"><button onClick={()=>onQty(c.product.id,-1)} className="w-5 h-5 flex items-center justify-center"><Minus className="w-3 h-3"/></button><span className="font-sans text-[12px] w-4 text-center">{c.qty}</span><button onClick={()=>onQty(c.product.id,1)} className="w-5 h-5 flex items-center justify-center"><Plus className="w-3 h-3"/></button></div><div className="font-serif font-semibold text-[14px]">Rs {(c.product.price*c.qty).toLocaleString("en-IN")}</div></div></div>
              <button onClick={()=>onRemove(c.product.id)} className="self-start w-6 h-6 rounded-full bg-[#FFFBF7] border border-[#E9DDD1] flex items-center justify-center"><X className="w-3 h-3"/></button>
            </div>
          ))}
        </div>
        {cart.length>0 && (
          <div className="p-6 border-t border-[#E9DDD1] bg-white">
            <div className="space-y-2 font-sans text-[13px]"><div className="flex justify-between"><span className="text-[#8B7355]">Subtotal</span><span>Rs {cartTotal.toLocaleString("en-IN")}</span></div><div className="flex justify-between"><span className="text-[#8B7355]">Shipping</span><span className="text-[#4A0E0E]">Calculated at checkout</span></div><div className="h-px bg-[#E9DDD1] my-2"/><div className="flex justify-between font-serif text-[16px] font-semibold"><span>Total</span><span>Rs {cartTotal.toLocaleString("en-IN")}</span></div></div>
            <a href={`https://wa.me/919768956956?text=${encodeURIComponent(`Hi Suman's Lucknowi! I want to order:\n${cart.map((c:any)=>`• ${c.product.name} x${c.qty} - Rs ${c.product.price*c.qty}`).join("\n")}\nTotal: Rs ${cartTotal}\nPlease confirm availability.`)}`} target="_blank" className="mt-5 h-12 w-full rounded-full bg-[#4A0E0E] text-white font-sans text-[13px] tracking-[0.08em] uppercase flex items-center justify-center gap-2 hover:bg-[#5A1A1A] transition"><MessageCircle className="w-4 h-4"/> Order on WhatsApp</a>
            <div className="mt-3 flex items-center justify-center gap-4 font-sans text-[11px] text-[#8B7355]"><span className="flex items-center gap-1"><Truck className="w-3.5 h-3.5 text-[#C9A86A]"/> Worldwide</span><span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-[#C9A86A]"/> Video verify</span></div>
          </div>
        )}
      </div>
    </div>
  )
}
