import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
export function Hero({ whatsappLink }: any){
  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-8 pt-6 md:pt-10 pb-8">
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 md:gap-8">
        <div className="bg-[#FFFDF8] rounded-[24px] md:rounded-[32px] border border-[#E9DDD1] p-6 md:p-10 lg:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-gradient-to-br from-[#FFF5EB] to-transparent rounded-full blur-3xl opacity-60"/>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFBF7] border border-[#E9DDD1] font-sans text-[10px] tracking-[0.18em] uppercase text-[#8B7355]"><span className="w-1 h-1 rounded-full bg-[#C9A86A]"/> Since 1999 • Mumbai • Lucknow Craft</div>
            <h1 className="font-serif text-[36px] md:text-[54px] lg:text-[62px] leading-[0.95] tracking-[-0.03em] text-[#2B1A0E] mt-6 md:mt-8">The Art of <br/><span className="italic font-[500] text-[#4A0E0E]">2-Taar</span> <br/>Chikankari</h1>
            <p className="font-sans text-[15px] md:text-[16px] leading-[1.7] text-[#5A4633] mt-5 md:mt-6 max-w-[440px]">Handcrafted in Lucknow, Curated in Mumbai Since 1999. Each thread a tender tradition — super fine handwork on pure georgette that breathes.</p>
            <div className="flex flex-wrap gap-3 mt-8 md:mt-10">
              <button onClick={()=>document.getElementById("collection")?.scrollIntoView({behavior:"smooth"})} className="h-12 px-7 rounded-full bg-[#4A0E0E] text-[#FFFBF7] font-sans text-[13px] tracking-[0.08em] uppercase flex items-center gap-2 hover:bg-[#5A1A1A] transition">Shop Sarees <ArrowRight className="w-4 h-4"/></button>
              <a href={whatsappLink()} target="_blank" className="h-12 px-7 rounded-full bg-white border border-[#E9DDD1] text-[#4A0E0E] font-sans text-[13px] tracking-[0.08em] uppercase flex items-center gap-2 hover:border-[#C9A86A] transition"><MessageCircle className="w-4 h-4 text-[#C9A86A]"/> WhatsApp Us</a>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-10 md:mt-14 pt-8 border-t border-[#E9DDD1]/80 max-w-[440px]">
              {[{k:"20+",v:"Years of Trust"},{k:"2-Taar",v:"Super Fine"},{k:"100%",v:"Handmade"}].map(s=> (<div key={s.k}><div className="font-serif text-[22px] text-[#4A0E0E]">{s.k}</div><div className="font-sans text-[11px] tracking-[0.12em] uppercase text-[#8B7355] mt-1">{s.v}</div></div>))}
            </div>
          </div>
        </div>
        <div className="relative rounded-[24px] md:rounded-[32px] overflow-hidden min-h-[480px] md:min-h-[600px] bg-gradient-to-br from-[#FFF5EB] via-[#F7E6D0] to-[#EADDCF] border border-[#E9DDD1] p-4 md:p-6">
          <img src="/assets/navbar-bg.png" alt="Lucknowi saree" className="absolute inset-0 h-full w-full object-cover opacity-95 scale-105" />
          <div className="absolute inset-0 bg-[#FFF5EB]/20"/>
          <div className="absolute inset-4 md:inset-6 rounded-[20px] md:rounded-[28px] overflow-hidden bg-white/28 backdrop-blur-[1px] border border-white/60 shadow-[0_20px_60px_-20px_rgba(74,14,14,0.25)] flex">
            <div className="flex-1 relative"><div className="absolute inset-0 opacity-[0.06] bg-[repeating-linear-gradient(0deg,transparent,transparent_18px,#4A0E0E_19px)]"/><div className="absolute inset-0 flex flex-col items-center justify-center p-8"><div className="w-full max-w-[280px] aspect-[3/4] rounded-[16px] bg-white/55 backdrop-blur-[1px] border border-white shadow-sm relative overflow-hidden"><img src="/assets/navbar-bg.png" alt="Pure Georgette saree" className="absolute inset-0 h-full w-full object-cover opacity-90 scale-125" /><div className="absolute inset-0 bg-[#FFFBF7]/30"/><div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,#C9A86A_1px,transparent_1px)] bg-[length:24px_24px]"/><div className="absolute inset-0 flex items-center justify-center"><div className="text-center bg-white/70 rounded-[14px] px-5 py-4 backdrop-blur-[1px]"><div className="font-serif text-[13px] tracking-[0.2em] uppercase text-[#8B7355]">Pure Georgette</div><div className="font-serif italic text-[22px] text-[#4A0E0E] mt-2">Rai Dana Jaal</div><div className="mt-4 w-12 h-px bg-[#C9A86A] mx-auto"/><div className="font-sans text-[10px] tracking-widest uppercase text-[#8B7355] mt-3">60 Grams • Shadow Work</div></div></div></div><div className="mt-6 font-sans text-[11px] tracking-[0.15em] uppercase text-[#5A4633] bg-white/70 rounded-full px-3 py-1 backdrop-blur-[1px]">Hover to feel the weave</div></div></div>
          </div>
          <div className="absolute top-10 left-10 z-10 bg-white/90 backdrop-blur rounded-full px-4 py-2 border border-white shadow-[0_8px_24px_rgba(0,0,0,0.06)] flex items-center gap-2"><div className="w-7 h-7 rounded-full bg-[#FFFBF7] border border-[#E9DDD1] flex items-center justify-center"><Sparkles className="w-3.5 h-3.5 text-[#C9A86A]"/></div><span className="font-sans text-[12px] tracking-[0.06em] text-[#4A0E0E] font-medium">Pure Georgette • 60gm</span></div>
          <div className="absolute bottom-16 right-10 z-10 bg-[#4A0E0E] rounded-full px-4 py-2.5 shadow-[0_8px_24px_rgba(74,14,14,0.3)] flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#C9A86A] animate-pulse"/><span className="font-sans text-[12px] tracking-[0.06em] text-[#FFFBF7] font-medium">Super Fine Handwork</span></div>
        </div>
      </div>
    </section>
  )
}
